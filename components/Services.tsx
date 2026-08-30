import { Icon } from "@/components/Icons";

const services = [
  {
    type: "field",
    icon: "field" as const,
    name: "建工管理 現場管理",
    tag: "Field Management",
    description:
      "職人・監督・経営者それぞれが使いやすい現場管理ツール。スマホで全現場をリアルタイム把握。",
    price: <span>お問い合わせください</span>,
    features: [
      "スマホで翌日の現場・工程がわかる",
      "ガントチャートによる工程管理",
      "協力会社との連携強化・報告削減",
      "工程表・出勤表をExcelでDL",
    ],
  },
  {
    type: "sales",
    icon: "sales" as const,
    name: "建工管理 販売管理",
    tag: "Sales Management",
    description:
      "最小アカウントから始められる販売管理。見積・請求・工事台帳まで一元管理。",
    price: (
      <>
        ¥30,000<span>/月 ～</span>
      </>
    ),
    features: [
      "見積書などの書類管理",
      "工事台帳管理",
      "入出金管理",
      "リアルタイムな現場把握と請求漏れ防止",
    ],
  },
  {
    type: "matching",
    icon: "match" as const,
    name: "建工管理 マッチング",
    tag: "Matching Platform",
    description:
      "建設業専門のマッチングプラットフォーム。エリア・工種別に検索・アピール。",
    price: (
      <>
        ¥0<span>/月</span>
      </>
    ),
    features: [
      "アカウントなしでも利用可能",
      "案件募集・人工募集の掲示板",
      "チャット機能で直接やり取り",
      "SNSとの連携で発信力アップ",
    ],
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <span className="badge field">サービス紹介</span>
        <h2 className="section_title">
          3<span className="particle">つの</span>サービス
          <span className="particle">で</span>建設業
          <span className="particle">を</span>丸ごとDX
        </h2>
        <p className="section_sub">
          それぞれのサービスは連携しており、使うほど業務全体が最適化されます。
        </p>
        <div className="service_grid">
          {services.map((service) => (
            <article
              className={`service_card ${service.type}`}
              key={service.name}
            >
              <div className="service_top">
                <div className="service_icon">
                  <Icon name={service.icon} />
                </div>
                <div className="service_name">{service.name}</div>
                <div className="service_tag">{service.tag}</div>
                <div className="service_description">{service.description}</div>
                <div className="service_price">{service.price}</div>
              </div>
              <div className="service_bottom">
                <ul className="service_features">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a className="button button_outline full_width" href="#contact">
                  詳しく見る →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
