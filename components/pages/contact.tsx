/** @format */
import { ChevronDown } from "lucide-react";
export default function ContactContent() {
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
                      href="/cdn-cgi/l/email-protection"
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
            <div>
              <h3 className="form_section_title">お問い合わせフォーム</h3>
              <div className="form_group">
                <label className="form_label">
                  会社名・お名前 <span className="required">必須</span>
                </label>
                <input
                  className="form_input"
                  type="text"
                  placeholder="例：◯◯建設株式会社 山田 太郎"
                />
              </div>
              <div className="form_group">
                <label className="form_label">
                  メールアドレス <span className="required">必須</span>
                </label>
                <input
                  className="form_input"
                  type="email"
                  placeholder="例：info@example.com"
                />
              </div>
              <div className="form_group">
                <label className="form_label">電話番号</label>
                <input
                  className="form_input"
                  type="tel"
                  placeholder="例：052-XXX-XXXX"
                />
              </div>
              <div className="form_group">
                <label className="form_label">ご興味のあるサービス</label>

                {/* Select ကို ပတ်ထားမည့် Wrapper အသစ် (ဒီနေရာမှာမှ custom_select_wrapper ကို သုံးရပါမည်) */}
                <div className="custom_select_wrapper">
                  {/* ဒီနေရာမှာ form_group အစား form_select သို့ ပြောင်းပေးပါ */}
                  <select className="form_select">
                    <option>選択してください</option>
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
                <label className="form_label">
                  お問い合わせ内容 <span className="required">必須</span>
                </label>
                <textarea
                  className="form_textarea"
                  placeholder="お問い合わせ内容をご記入ください"
                ></textarea>
              </div>
              <button className="form_submit">送信する →</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
