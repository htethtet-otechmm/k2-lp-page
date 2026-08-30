import { Icon } from "@/components/Icons";

const problems = [
  [
    "01",
    "document",
    "現場の情報がバラバラ",
    "紙・電話・LINEで情報が分散。誰が何をしているか把握できず、トラブルが頻発する。",
  ],
  [
    "02",
    "document",
    "請求漏れ・入金遅延",
    "手書き・Excelの見積でミスが多発。請求忘れや入金管理の煩雑さで資金繰りが不安定。",
  ],
  [
    "03",
    "group",
    "協力会社の確保が困難",
    "急な人手不足に対応できず案件を逃す。信頼できる協力会社との繋がりが少ない。",
  ],
];
export default function Challenges() {
  return (
    <section className="problems">
      <div className="container problems_header">
        <span className="badge matching">こんなお悩みありませんか？</span>
        <h2 className="section_title problems_title">
          建設業<span className="particle">が</span>抱える3
          <span className="particle">つの</span>課題
        </h2>
      </div>
      <div className="container">
        <div className="problem_grid">
          {problems.map(([number, icon, title, description]) => (
            <article className="problem_item" key={number}>
              <div className="problem_number">{number}</div>
              <div className="problem_icon">
                <Icon name={icon as "document" | "group"} />
              </div>
              <div className="problem_title">{title}</div>
              <div className="problem_description">{description}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
