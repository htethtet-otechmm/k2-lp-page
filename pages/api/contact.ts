import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const COMPANY_INFO = {
  SERVICE_NAME: "建工管理",
  COMPANY_NAME: "グロースチェンジ株式会社",
  EMAIL: "enquiry@kenkou-kanri.jp",
  TEL: "052-228-3646",
  ADDRESS: "〒492-8448 愛知県稲沢市北麻績町郷前15",
  URL: "https://kenkou-kanri.jp",
} as const;

type FormKind = "contact" | "brochure";

type ContactRequest = {
  kind?: FormKind;
  company?: string;
  from_name?: string;
  reply_to?: string;
  phone?: string;
  service?: string;
  message?: string;
  industry?: string;
  prefecture?: string;
  job_title?: string;
  reason?: string;
};

type ContactResponse =
  { success: true; autoReplySent: boolean } | { success: false; error: string };

const clean = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

const isEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "20kb",
    },
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res
      .status(405)
      .json({ success: false, error: "Method not allowed." });
  }

  const body = (req.body ?? {}) as ContactRequest;
  const kind = body.kind;
  const fromName = clean(body.from_name, 100).replace(/[\r\n]/g, " ");
  const replyTo = clean(body.reply_to, 254);
  const phone = clean(body.phone, 50) || "未入力";
  const service = clean(body.service, 200) || "未選択";
  const message = clean(body.message, 5000);
  const company = clean(body.company, 200);
  const industry = clean(body.industry, 200) || "未選択";
  const prefecture = clean(body.prefecture, 100) || "未選択";
  const jobTitle = clean(body.job_title, 100) || "未選択";
  const reason = clean(body.reason, 5000);

  if (
    !fromName ||
    !isEmail(replyTo) ||
    (kind === "contact" && !message) ||
    (kind === "brochure" && (!company || !reason)) ||
    (kind !== "contact" && kind !== "brochure")
  ) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid or missing form data." });
  }

  const smtpHost = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser =
    process.env.SMTP_USER?.trim() || process.env.GMAIL_USER?.trim();
  const smtpPass = (
    process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD
  )?.replace(/\s/g, "");
  const receiverEmail =
    process.env.SMTP_RECEIVER_EMAIL?.trim() ||
    process.env.CONTACT_TO_EMAIL?.trim();
  const fromEmail = process.env.SMTP_FROM_EMAIL?.trim() || smtpUser;

  if (
    !smtpHost ||
    !Number.isInteger(smtpPort) ||
    smtpPort < 1 ||
    smtpPort > 65535 ||
    !smtpUser ||
    !smtpPass ||
    !receiverEmail ||
    !fromEmail
  ) {
    console.error("SMTP environment variables are missing or invalid.");
    return res
      .status(503)
      .json({ success: false, error: "Mail service is not configured." });
  }

  const requestLabel = kind === "contact" ? "お問い合わせ" : "資料請求";
  const details =
    kind === "contact"
      ? [
          "お問い合わせ種別：お問い合わせ",
          `会社名・お名前：${fromName}`,
          `メールアドレス：${replyTo}`,
          `電話番号：${phone}`,
          `ご興味のあるサービス：${service}`,
          "",
          "お問い合わせ内容：",
          message,
        ].join("\n")
      : [
          "お問い合わせ種別：資料請求",
          `会社名：${company}`,
          `氏名：${fromName}`,
          `メールアドレス：${replyTo}`,
          `電話番号：${phone}`,
          `業種：${industry}`,
          `都道府県：${prefecture}`,
          `役職：${jobTitle}`,
          "",
          "資料請求の理由：",
          reason,
        ].join("\n");

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"${COMPANY_INFO.SERVICE_NAME} Webサイト" <${fromEmail}>`,
      to: receiverEmail,
      replyTo,
      subject: `【${COMPANY_INFO.SERVICE_NAME}】新規${requestLabel}を受け付けました`,
      text: `
${COMPANY_INFO.COMPANY_NAME} 御中

Webサイト（${COMPANY_INFO.URL}）から新規${requestLabel}がありました。
内容をご確認ください。

-- ${requestLabel}概要 --
${details}

※このメールはWebサイトから自動送信されています。

────────────────────────
${COMPANY_INFO.COMPANY_NAME}
${COMPANY_INFO.ADDRESS}
TEL: ${COMPANY_INFO.TEL}
Email: ${COMPANY_INFO.EMAIL}
URL: ${COMPANY_INFO.URL}
────────────────────────
      `.trim(),
    });

    // If only the auto-reply fails, keep the internal request successful so a
    // retry does not send the company duplicate notifications.
    let autoReplySent = true;

    try {
      await transporter.sendMail({
        from: `"${COMPANY_INFO.SERVICE_NAME}" <${fromEmail}>`,
        to: replyTo,
        replyTo: COMPANY_INFO.EMAIL,
        subject: `【${COMPANY_INFO.SERVICE_NAME}】${requestLabel}ありがとうございました`,
        text: `
${fromName} 様

この度は、${COMPANY_INFO.SERVICE_NAME}へ${requestLabel}いただき、誠にありがとうございます。

以下の内容で受け付けました。
内容を確認のうえ、担当者よりご連絡いたします。

-- ${requestLabel}内容控え --
${details}

※このメールはWebサイトから自動送信されています。

────────────────────────
${COMPANY_INFO.COMPANY_NAME}
${COMPANY_INFO.ADDRESS}
TEL: ${COMPANY_INFO.TEL}
Email: ${COMPANY_INFO.EMAIL}
URL: ${COMPANY_INFO.URL}
────────────────────────
        `.trim(),
      });
    } catch (autoReplyError) {
      autoReplySent = false;
      console.error("Customer auto-reply failed:", autoReplyError);
    }

    return res.status(200).json({ success: true, autoReplySent });
  } catch (error) {
    console.error("SMTP send error:", error);
    return res
      .status(502)
      .json({ success: false, error: "Failed to send email." });
  }
}
