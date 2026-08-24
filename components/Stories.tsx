import Image from "next/image";
const cases = [
  {
    image: "/case/hattoriteien01.png",
    tags: [["field", "現場管理"]],
    title: "どこでも使えて、早くて、ホワイトボードより見やすい。",
    company: "有限会社服部庭園 様",
  },
  {
    image: "/case/aiesu01.png",
    tags: [
      ["field", "現場管理"],
      ["sales", "販売管理"],
    ],
    title: "一人親方が請求業務を自動化し事務作業を大幅削減",
    company: "株式会社アイエス 様",
  },
  {
    image: "/case/tbright01.png",
    tags: [
      ["field", "現場管理"],
      ["sales", "販売管理"],
      ["matching", "マッチング"],
    ],
    title: "マッチングで協力会社ネットワークを拡大し繁忙期も安定稼働",
    company: "ティーブライト 様",
  },
];
export default function Stories() {
  return (
    <section className="section" id="cases">
      <div className="container">
        <span className="badge sales">導入事例</span>
        <h2 className="section_title">
          お客様<span className="particle">の</span>声
        </h2>
        <div className="cases_grid">
          {cases.map((item) => (
            <article className="case_card" key={item.company}>
              <div className="case_image">
                <Image src={item.image} alt="" width={560} height={350} />
              </div>
              <div className="case_body">
                <ul className="case_list_card_tags">
                  {item.tags.map(([type, name]) => (
                    <li className={`case_list_card_tag_${type}`} key={name}>
                      {name}
                    </li>
                  ))}
                </ul>
                <div className="case_title">{item.title}</div>
                <div className="case_company">{item.company}</div>
              </div>
            </article>
          ))}
        </div>
        <div className="case_more">
          <a className="button button_outline" href="#cases">
            導入事例をもっと見る →
          </a>
        </div>
      </div>
    </section>
  );
}
