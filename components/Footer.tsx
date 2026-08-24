const columns = [
  {
    title: "サービス",
    links: [
      "建工管理 現場管理",
      "建工管理 販売管理",
      "建工管理 マッチング",
      "料金プラン",
    ],
  },
  {
    title: "会社情報",
    links: [
      "建工管理とは",
      "導入事例",
      "プライバシーポリシー",
      "特定商取引法に基づく表記",
      "運営会社",
      "販売代理店",
    ],
  },
  {
    title: "サポート",
    links: ["お問い合わせ", "資料請求", "よくあるご質問", "操作マニュアル"],
  },
];
export default function Footer() {
  return (
    <div id="contact">
      <section className="footer_cta_bar">
        <div className="container">
          <h2>
            まずは<em>2週間</em>、無料でお試しください
          </h2>
          <ul className="footer_cta_bar_trust">
            <li>クレジットカード不要</li>
            <li>最短30分で開始</li>
            <li>いつでも解約可能</li>
          </ul>
          <div className="footer_cta_bar_actions">
            <a className="button button_white" href="mailto:info@example.com">
              お問い合わせ
            </a>
            <a className="button button_ghost" href="#services">
              資料請求
            </a>
            <a className="button button_ghost" href="#services">
              機能を見る
            </a>
          </div>
        </div>
      </section>
      <footer className="site_footer">
        <div className="container">
          <div className="footer_grid">
            <div>
              <div className="footer_brand">建工管理</div>
              <p className="footer_brand_description">
                建設業の成長を加速するシンプルDX。現場管理・販売管理・マッチングの3サービスで、一人親方から中規模建設会社まで幅広くサポートします。
              </p>
            </div>
            {columns.map((column, index) => (
              <div key={column.title}>
                <div className="footer_column_title">{column.title}</div>
                <ul className="footer_links">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href={
                          link.includes("導入事例") ? "#cases" : "#services"
                        }
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
                {index === 2 && (
                  <div className="site_footer_phone">
                    <div className="site_footer_phone_title">お電話</div>
                    <div className="site_footer_phone_number">0120-XXX-XXX</div>
                    <div className="site_footer_phone_hour">
                      平日 9:00〜18:00（土日祝休）
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="footer_bottom">
            <span>© otechnique Ltd. All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
