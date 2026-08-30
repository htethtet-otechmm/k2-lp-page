/** @format */
import { ChevronDown } from "lucide-react";
export default function BrochureContent() {
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
            <div>
              <h3 className="form_section_title">資料請求フォーム</h3>
              <div className="form_group">
                <label className="form_label">
                  会社名 <span className="required">必須</span>
                </label>
                <input
                  className="form_input"
                  type="text"
                  placeholder="例：◯◯建設株式会社"
                />
              </div>
              <div className="form_group">
                <label className="form_label">
                  氏名 <span className="required">必須</span>
                </label>
                <input
                  className="form_input"
                  type="text"
                  placeholder="例：山田 太郎"
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

              {/* 業種 Select Box ပြင်ဆင်ချက် */}
              <div className="form_group">
                <label className="form_label">業種</label>
                <div className="custom_select_wrapper">
                  <select className="form_select">
                    <option>選択してください</option>
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

              {/* 都道府県 Select Box ပြင်ဆင်ချက် */}
              <div className="form_group">
                <label className="form_label">都道府県</label>
                <div className="custom_select_wrapper">
                  <select className="form_select">
                    <option>選択してください</option>
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

              {/* 役職 Select Box ပြင်ဆင်ချက် */}
              <div className="form_group">
                <label className="form_label">役職</label>
                <div className="custom_select_wrapper">
                  <select className="form_select">
                    <option>選択してください</option>
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
                <label className="form_label">
                  資料請求の理由 <span className="required">必須</span>
                </label>
                <textarea
                  className="form_textarea"
                  placeholder="例：現場管理のデジタル化を検討しています。料金や機能の詳細を知りたいです。"
                ></textarea>
              </div>
              <button className="form_submit">資料を請求する →</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
