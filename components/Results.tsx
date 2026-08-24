const fieldBefore = [
  "電話・LINEで状況確認、1日30分以上かかる",
  "工程表はExcelで手動更新、共有に時間がかかる",
  "協力会社の出勤状況が把握できず不安",
  "見積書や請求書を発行し忘れてしまう",
];
const fieldAfter = [
  "スマホで全現場をリアルタイム確認、報告業務が激減",
  "ガントチャートが自動更新、職人もスマホで即確認",
  "スタッフや機材管理・書類共有が一元化され安心",
  "書類管理を現場管理と連携して一括管理",
];
const matchBefore = [
  "急な人手不足の時、頼める会社がなく案件を断ることも",
  "繁閑の差が大きく、閑散期の仕事確保が課題",
];
const matchAfter = [
  "全国の信頼できる協力会社とすぐに繋がれる",
  "案件・人工の掲示板で閑散期も安定受注",
];
function Column({
  label,
  items,
  positive = false,
}: {
  label: string;
  items: string[];
  positive?: boolean;
}) {
  return (
    <div className="before_after_column">
      <div className="before_after_column_label">{label}</div>
      {items.map((item) => (
        <div className="before_after_point" key={item}>
          <div
            className={`before_after_point_icon ${positive ? "positive" : "negative"}`}
          >
            {positive ? "✓" : "×"}
          </div>
          <div className="before_after_point_text">{item}</div>
        </div>
      ))}
    </div>
  );
}
export default function Results() {
  return (
    <section className="section before_after_section" id="results">
      <div className="container">
        <span className="badge field">導入効果</span>
        <h2 className="section_title">Before / After</h2>
        <p className="section_sub">
          建工管理の導入前後でどう変わるか、リアルな変化をご紹介します。
        </p>
        <div className="before_after_grid">
          <div className="before_after_item field">
            <div className="before_after_head">
              <span>建工管理 現場管理＆販売管理 での変化</span>
              <span className="before_after_head_sub">
                工程・出勤・協力会社管理
              </span>
            </div>
            <div className="before_after_columns">
              <Column label="Before" items={fieldBefore} />
              <Column label="After" items={fieldAfter} positive />
            </div>
            <div className="before_after_links">
              <a className="tag_link" href="#services">
                建工管理 現場管理を見る
              </a>
              <a className="tag_link" href="#services">
                建工管理 販売管理を見る
              </a>
            </div>
          </div>
          <div className="before_after_item matching">
            <div className="before_after_head">
              <span>建工管理 マッチング での変化</span>
              <span className="before_after_head_sub">
                企業マッチングで事業を拡大
              </span>
            </div>
            <div className="before_after_columns">
              <Column label="Before" items={matchBefore} />
              <Column label="After" items={matchAfter} positive />
            </div>
            <div className="before_after_links">
              <a className="tag_link" href="#services">
                マッチングを見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
