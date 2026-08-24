const steps = [
  ["1", "無料トライアル申込", "2週間完全無料。クレジットカード不要。"],
  ["2", "オンライン導入サポート", "専任担当がZoomで初期設定を一緒に行います。"],
  ["3", "運用開始 & 継続支援", "チャット・電話でいつでもサポート。"],
];
export default function Support() {
  return (
    <>
      <section className="support_section">
        <div className="container">
          <div className="support_inner">
            <div>
              <span className="badge ghost">導入サポート</span>
              <h2 className="support_title">安心の導入サポート体制</h2>
              <p className="support_description">
                ITが苦手な方でも大丈夫。専任スタッフが導入から定着まで完全サポートします。
              </p>
              <a className="button button_primary" href="#contact">
                無料相談を予約する →
              </a>
            </div>
            <div className="support_steps">
              {steps.map(([number, title, text]) => (
                <div className="support_step" key={number}>
                  <div className="step_number">{number}</div>
                  <div className="step_title">
                    <strong>{title}</strong>
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="sns_bar">
        <div className="container">
          <div className="sns_inner">
            {[
              ["document", "BLOG"],
              ["play", "YouTube"],
              ["photo", "Instagram"],
              ["group", "Facebook"],
            ].map(([icon, label]) => (
              <div className="sns_item" key={label}>
                <div className="sns_icon"><Icon name={icon as "document" | "play" | "photo" | "group"} /></div>
                <div className="sns_label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
import { Icon } from "@/components/Icons";
