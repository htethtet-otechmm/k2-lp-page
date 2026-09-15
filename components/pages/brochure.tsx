/** @format */
import emailjs from "@emailjs/browser";
import { useRef, useState, type FormEvent } from "react";
import { ChevronDown } from "lucide-react";
export default function BrochureContent() {
  const sending = useRef(false);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    if (!value("company") || !value("from_name") || !value("reason")) {
      setStatus("error");
      setFeedback("会社名・氏名・資料請求の理由をご記入ください。");
      return;
    }
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim();
    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_BROCHURE_TEMPLATE_ID?.trim() ||
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim();
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim();
    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setFeedback(
        "現在フォームから送信できません。時間をおいて再度お試しください。",
      );
      return;
    }
    sending.current = true;
    setStatus("sending");
    setFeedback("");
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: value("from_name"),
          reply_to: value("reply_to"),
          phone: value("phone"),
          service: "資料請求",
          company: value("company"),
          industry: value("industry") || "未選択",
          prefecture: value("prefecture") || "未選択",
          job_title: value("job_title") || "未選択",
          reason: value("reason"),
          // The email template already displays name, email, phone and service.
          message: [
            `会社名: ${value("company")}`,
            `業種: ${value("industry") || "未選択"}`,
            `都道府県: ${value("prefecture") || "未選択"}`,
            `役職: ${value("job_title") || "未選択"}`,
            "",
            "資料請求の理由:",
            value("reason"),
          ].join("\n"),
        },
        { publicKey },
      );
    } catch (error: unknown) {
      const errorStatus =
        error && typeof error === "object" && "status" in error
          ? Number(error.status)
          : 0;
      // Report the provider response for diagnosis, never the submitted form data.
      if (process.env.NODE_ENV === "development") {
        console.error("Brochure EmailJS request failed:", error);
      }
      setStatus("error");
      if (errorStatus === 429) {
        setFeedback(
          "送信回数の上限に達しています。しばらくしてから再度お試しいただくか、お問い合わせください。（エラー: 429）入力内容は保持されています。",
        );
      } else if ([400, 401, 403, 404, 422].includes(errorStatus)) {
        setFeedback(
          `現在フォームから送信できません。お問い合わせ窓口までご連絡ください。（エラー: ${errorStatus}）入力内容は保持されています。`,
        );
      } else if (!errorStatus) {
        setFeedback(
          "送信を確認できませんでした。通信環境やブラウザの通信制限をご確認ください。入力内容は保持されています。",
        );
      } else {
        setFeedback(
          `送信に失敗しました。時間をおいて再度お試しください。（エラー: ${errorStatus}）入力内容は保持されています。`,
        );
      }
      return;
    } finally {
      sending.current = false;
    }
    // A UI reset must not turn an accepted email into a reported send failure.
    setStatus("success");
    setFeedback(
      "資料請求を受け付けました。担当者よりご入力のメールアドレス宛に資料をお送りします。",
    );
    form.reset();
  };

  return (
    <div className="route_page">
      <section className="contact_hero">
        <div className="container">
          <span className="badge field">資料請求</span>
          <h1>資料請求</h1>
          <p>
            建工管理の詳細資料をPDFでお送りします。下記フォームにご記入のうえ送信してください。
          </p>
        </div>
      </section>
      <section className="contact_section">
        <div className="container">
          <div className="contact_grid">
            <div>
              <div className="contact_info_item">
                <div className="contact_info_icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--k2)"
                    strokeWidth="2"
                  >
                    <use href="#icon_document"></use>
                  </svg>
                </div>
                <div>
                  <div className="contact_info_label">資料について</div>
                  <div className="contact_info_value">
                    建工管理 機能・料金一覧PDF
                  </div>
                  <div className="contact_info_note">
                    ご入力のメールアドレス宛に1営業日以内にお送りします
                  </div>
                </div>
              </div>
              <div className="contact_info_item">
                <div className="contact_info_icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--k2)"
                    strokeWidth="2"
                  >
                    <use href="#icon_support"></use>
                  </svg>
                </div>
                <div>
                  <div className="contact_info_label">資料請求後のサポート</div>
                  <div className="contact_info_value">
                    担当者からご連絡させていただきます
                  </div>
                  <div className="contact_info_note">
                    ご不明な点はお気軽にお問い合わせください
                  </div>
                </div>
              </div>
              <div className="support_panel">
                <h3>資料に含まれる内容</h3>
                <p>
                  建工管理の現場管理・販売管理・マッチング各サービスの詳細機能説明、料金プラン一覧、導入事例、サポート体制などをまとめたPDF資料です。
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit} aria-busy={status === "sending"}>
              <h3 className="form_section_title">資料請求フォーム</h3>
              <div className="form_group">
                <label className="form_label" htmlFor="brochure_company">
                  会社名 <span className="required">必須</span>
                </label>
                <input
                  className="form_input"
                  id="brochure_company"
                  name="company"
                  disabled={status === "sending"}
                  required
                  type="text"
                  placeholder="株式会社オーテクニック"
                />
              </div>
              <div className="form_group">
                <label className="form_label" htmlFor="brochure_from_name">
                  氏名 <span className="required">必須</span>
                </label>
                <input
                  className="form_input"
                  id="brochure_from_name"
                  name="from_name"
                  disabled={status === "sending"}
                  required
                  type="text"
                  placeholder="例：山田 太郎"
                />
              </div>
              <div className="form_group">
                <label className="form_label" htmlFor="brochure_reply_to">
                  メールアドレス <span className="required">必須</span>
                </label>
                <input
                  className="form_input"
                  id="brochure_reply_to"
                  name="reply_to"
                  disabled={status === "sending"}
                  required
                  type="email"
                  placeholder="enquiry@kenkou-kanri.jp"
                />
              </div>
              <div className="form_group">
                <label className="form_label" htmlFor="brochure_phone">
                  電話番号
                </label>
                <input
                  className="form_input"
                  id="brochure_phone"
                  name="phone"
                  disabled={status === "sending"}
                  type="tel"
                  placeholder="お電話（052-228-3646）"
                />
              </div>

              <div className="form_group">
                <label className="form_label" htmlFor="brochure_industry">
                  業種
                </label>
                <div className="custom_select_wrapper">
                  <select
                    className="form_select"
                    id="brochure_industry"
                    name="industry"
                    defaultValue=""
                    disabled={status === "sending"}
                  >
                    <option value="">選択してください</option>
                    <option>建築工事業</option>
                    <option>土木工事業</option>
                    <option>内装工事業</option>
                    <option>設備工事業</option>
                    <option>塗装工事業</option>
                    <option>解体工事業</option>
                    <option>その他建設業</option>
                    <option>その他</option>
                  </select>
                  <ChevronDown className="select_arrow_icon" />
                </div>
              </div>

              <div className="form_group">
                <label className="form_label" htmlFor="brochure_prefecture">
                  都道府県
                </label>
                <div className="custom_select_wrapper">
                  <select
                    className="form_select"
                    id="brochure_prefecture"
                    name="prefecture"
                    defaultValue=""
                    disabled={status === "sending"}
                  >
                    <option value="">選択してください</option>
                    <option>北海道</option>
                    <option>青森県</option>
                    <option>岩手県</option>
                    <option>宮城県</option>
                    <option>秋田県</option>
                    <option>山形県</option>
                    <option>福島県</option>
                    <option>茨城県</option>
                    <option>栃木県</option>
                    <option>群馬県</option>
                    <option>埼玉県</option>
                    <option>千葉県</option>
                    <option>東京都</option>
                    <option>神奈川県</option>
                    <option>新潟県</option>
                    <option>富山県</option>
                    <option>石川県</option>
                    <option>福井県</option>
                    <option>山梨県</option>
                    <option>長野県</option>
                    <option>岐阜県</option>
                    <option>静岡県</option>
                    <option>愛知県</option>
                    <option>三重県</option>
                    <option>滋賀県</option>
                    <option>京都府</option>
                    <option>大阪府</option>
                    <option>兵庫県</option>
                    <option>奈良県</option>
                    <option>和歌山県</option>
                    <option>鳥取県</option>
                    <option>島根県</option>
                    <option>岡山県</option>
                    <option>広島県</option>
                    <option>山口県</option>
                    <option>徳島県</option>
                    <option>香川県</option>
                    <option>愛媛県</option>
                    <option>高知県</option>
                    <option>福岡県</option>
                    <option>佐賀県</option>
                    <option>長崎県</option>
                    <option>熊本県</option>
                    <option>大分県</option>
                    <option>宮崎県</option>
                    <option>鹿児島県</option>
                    <option>沖縄県</option>
                  </select>
                  <ChevronDown className="select_arrow_icon" />
                </div>
              </div>

              <div className="form_group">
                <label className="form_label" htmlFor="brochure_job_title">
                  役職
                </label>
                <div className="custom_select_wrapper">
                  <select
                    className="form_select"
                    id="brochure_job_title"
                    name="job_title"
                    defaultValue=""
                    disabled={status === "sending"}
                  >
                    <option value="">選択してください</option>
                    <option>代表・経営者</option>
                    <option>役員</option>
                    <option>部長・課長</option>
                    <option>現場監督・所長</option>
                    <option>担当者</option>
                    <option>その他</option>
                  </select>
                  <ChevronDown className="select_arrow_icon" />
                </div>
              </div>

              <div className="form_group">
                <label className="form_label" htmlFor="brochure_reason">
                  資料請求の理由 <span className="required">必須</span>
                </label>
                <textarea
                  className="form_textarea"
                  id="brochure_reason"
                  name="reason"
                  required
                  disabled={status === "sending"}
                  placeholder="例：現場管理のデジタル化を検討しています。料金や機能の詳細を知りたいです。"
                ></textarea>
              </div>
              <button
                className="form_submit"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "送信中…" : "資料を請求する →"}
              </button>
              <p
                className="form_feedback"
                role={status === "error" ? "alert" : "status"}
              >
                {feedback}
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
