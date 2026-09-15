/** @format */
"use client";
import emailjs from "@emailjs/browser";
import { useRef, useState, type FormEvent } from "react";
import { ChevronDown } from "lucide-react";
export default function ContactContent() {
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
    if (!value("from_name") || !value("message")) {
      setStatus("error");
      setFeedback("会社名・お名前とお問い合わせ内容をご記入ください。");
      return;
    }
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
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
          service: value("service") || "未選択",
          message: value("message"),
        },
        { publicKey },
      );
      form.reset();
      setStatus("success");
      setFeedback(
        "お問い合わせを送信しました。担当者より折り返しご連絡いたします。",
      );
    } catch {
      setStatus("error");
      setFeedback(
        "送信に失敗しました。入力内容は保持されています。時間をおいて再度お試しください。",
      );
    } finally {
      sending.current = false;
    }
  };

  return (
    <div className="route_page">
      <section className="contact_hero">
        <div className="container">
          <span className="badge ghost">お問い合わせ</span>
          <h1>
            お気軽<span className="particle">に</span>ご相談ください
          </h1>
          <p>
            導入のご相談から技術的なご質問まで、専任スタッフが丁寧にお答えします。
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
                    <use href="#icon_mail"></use>
                  </svg>
                </div>
                <div>
                  <div className="contact_info_label">
                    メールでのお問い合わせ
                  </div>
                  <div className="contact_info_value">
                    <a
                      href="mailto:enquiry@kenkou-kanri.jp"
                      className="__cf_email__"
                      data-cfemail="0b62656d644b606e65606426606a65796225617b"
                    >
                      [email protected]
                    </a>
                  </div>
                  <div className="contact_info_note">
                    24時間受付、1営業日以内に返信
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
                    <use href="#icon_chat"></use>
                  </svg>
                </div>
                <div>
                  <div className="contact_info_label">コンタクトフォーム</div>
                  <div className="contact_info_value">
                    お問い合わせフォームからご送信ください
                  </div>
                  <div className="contact_info_note">
                    確認後、担当者より折り返しご連絡いたします
                  </div>
                </div>
              </div>
              <div className="support_panel">
                <h3>導入サポートについて</h3>
                <p>
                  ITが苦手な方も安心。専任スタッフがZoomで導入から設定まで完全サポート。導入後も電話・チャットでいつでもサポートいたします。
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit} aria-busy={status === "sending"}>
              <h3 className="form_section_title">お問い合わせフォーム</h3>
              <div className="form_group">
                <label className="form_label" htmlFor="contact_from_name">
                  会社名・お名前 <span className="required">必須</span>
                </label>
                <input
                  className="form_input"
                  type="text"
                  id="contact_from_name"
                  name="from_name"
                  disabled={status === "sending"}
                  required
                  placeholder="株式会社オーテクニック"
                />
              </div>
              <div className="form_group">
                <label className="form_label" htmlFor="contact_reply_to">
                  メールアドレス <span className="required">必須</span>
                </label>
                <input
                  className="form_input"
                  type="email"
                  id="contact_reply_to"
                  name="reply_to"
                  disabled={status === "sending"}
                  required
                  placeholder="enquiry@kenkou-kanri.jp"
                />
              </div>
              <div className="form_group">
                <label className="form_label" htmlFor="contact_phone">
                  電話番号
                </label>
                <input
                  className="form_input"
                  type="tel"
                  id="contact_phone"
                  name="phone"
                  disabled={status === "sending"}
                  placeholder="お電話（052-228-3646）"
                />
              </div>
              <div className="form_group">
                <label className="form_label" htmlFor="contact_service">
                  ご興味のあるサービス
                </label>

                {/* Select ကို ပတ်ထားမည့် Wrapper အသစ် (ဒီနေရာမှာမှ custom_select_wrapper ကို သုံးရပါမည်) */}
                <div className="custom_select_wrapper">
                  {/* ဒီနေရာမှာ form_group အစား form_select သို့ ပြောင်းပေးပါ */}
                  <select
                    className="form_select"
                    id="contact_service"
                    name="service"
                    defaultValue=""
                    disabled={status === "sending"}
                  >
                    <option value="">選択してください</option>
                    <option>建工管理 現場管理</option>
                    <option>建工管理 販売管理</option>
                    <option>建工管理 マッチング</option>
                    <option>複数サービスについて</option>
                    <option>資料請求</option>
                  </select>

                  {/* Icon လေးကို ဒီနေရာမှာ ထည့်ပါ */}
                  <ChevronDown className="select_arrow_icon" />
                </div>
              </div>
              <div className="form_group">
                <label className="form_label" htmlFor="contact_message">
                  お問い合わせ内容 <span className="required">必須</span>
                </label>
                <textarea
                  className="form_textarea"
                  id="contact_message"
                  name="message"
                  required
                  disabled={status === "sending"}
                  placeholder="お問い合わせ内容をご記入ください"
                ></textarea>
              </div>
              <button
                className="form_submit"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "送信中…" : "送信する →"}
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
