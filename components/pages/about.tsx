/** @format */
/* eslint-disable @next/next/no-img-element */
export default function AboutContent() {
  return (
    <div className="route_page">
      <section className="about_vision">
        <div className="container">
          <div className="about_vision_inner">
            <div>
              <div className="about_vision_english">Service Vision</div>
              <div className="about_vision_main">
                <em>現場</em>
                <span className="particle">で</span>
                <br />
                働く全員<span className="particle">が</span>
                <br />
                使いやすい
              </div>
              <div className="about_vision_text">
                <p>
                  職人・現場監督・経営者、それぞれ違う立場の人が、それぞれに必要な情報を、スマホ一つで手軽に使える。それが建工管理の開発思想です。
                </p>
                <p>
                  現場を熟知したチームが設計した、建設業のための本当に使えるDXプラットフォーム。ITの知識がなくても当たり前に使えるツールを目指しています。
                </p>
                <p>
                  浮いた時間とリソースを、次のビジネスへ。建工管理が新しい建設業の未来を後押しします。
                </p>
              </div>
            </div>
            <div className="about_vision_right">
              <div className="about_vision_right_photos">
                <img
                  src="/genbakanri/pro.png"
                  alt=""
                  className="about_vision_photo_main"
                />
                <img
                  src="/genbakanri/share.png"
                  alt=""
                  className="about_vision_photo_sub"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="targets_section">
        <div className="container">
          <span className="badge field">誰のためのサービスか</span>
          <h2 className="section_title">
            あなた<span className="particle">の</span>立場
            <span className="particle">に</span>合わせた最適
            <span className="particle">な</span>使い方
          </h2>
          <div className="target_grid">
            <div className="target_card">
              <div className="target_icon">
                <svg
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="none"
                  stroke="var(--k2)"
                  strokeWidth="1.5"
                >
                  <use href="#icon_field"></use>
                </svg>
              </div>
              <div className="target_title">職人・一人親方</div>
              <div className="target_quote">
                「スマホで翌日の現場と工程がわかる手軽さ」。道具と同じ感覚でアプリを使える、シンプルな設計。
              </div>
            </div>
            <div className="target_card">
              <div className="target_icon">
                <svg
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="none"
                  stroke="var(--s1)"
                  strokeWidth="1.5"
                >
                  <use href="#icon_group"></use>
                </svg>
              </div>
              <div className="target_title">現場監督</div>
              <div className="target_quote">
                「協力会社との連携強化と報告業務の削減」。複数現場を同時に管理、情報共有のストレスゼロへ。
              </div>
            </div>
            <div className="target_card">
              <div className="target_icon">
                <svg
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="none"
                  stroke="#b8920a"
                  strokeWidth="1.5"
                >
                  <use href="#icon_trend"></use>
                </svg>
              </div>
              <div className="target_title">経営者・管理者</div>
              <div className="target_quote">
                「リアルタイムな現場把握と請求漏れの防止」。数字で経営判断、事業の成長をサポート。
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flow_section section">
        <div className="container">
          <span className="badge matching">使い方の流れ</span>
          <h2 className="section_title">
            導入<span className="particle">から</span>活用
            <span className="particle">まで</span>4ステップ
          </h2>
          <div className="flow_grid">
            <div className="flow_item">
              <div className="flow_circle">
                <svg viewBox="0 0 24 24">
                  <use href="#icon_document"></use>
                </svg>
              </div>
              <div className="flow_number">STEP 01</div>
              <div className="flow_title">無料登録</div>
              <div className="flow_description">
                メールアドレスだけで即日開始。クレジットカード不要。
              </div>
            </div>
            <div className="flow_item">
              <div className="flow_circle">
                <svg viewBox="0 0 24 24">
                  <use href="#icon_support"></use>
                </svg>
              </div>
              <div className="flow_number">STEP 02</div>
              <div className="flow_title">初期設定</div>
              <div className="flow_description">
                専任スタッフがZoomで一緒に設定。最短30分で完了。
              </div>
            </div>
            <div className="flow_item">
              <div className="flow_circle">
                <svg viewBox="0 0 24 24">
                  <use href="#icon_mobile"></use>
                </svg>
              </div>
              <div className="flow_number">STEP 03</div>
              <div className="flow_title">運用開始</div>
              <div className="flow_description">
                現場管理・販売管理・マッチングをすぐに活用開始。
              </div>
            </div>
            <div className="flow_item">
              <div className="flow_circle">
                <svg viewBox="0 0 24 24">
                  <use href="#icon_trend"></use>
                </svg>
              </div>
              <div className="flow_number">STEP 04</div>
              <div className="flow_title">業務改善</div>
              <div className="flow_description">
                データを活用して経営判断を高速化。事業を成長させる。
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
