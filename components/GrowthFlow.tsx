import { Icon } from "@/components/Icons";

export default function GrowthFlow() {
  return (
    <section className="relation_section">
      <div className="container">
        <h2 className="relation_title">
          スマート<span className="particle">に</span>事業成長
          <span className="particle">を</span>後押し
          <span className="particle">する</span>仕組み
        </h2>
        <div className="relation_layout">
          <div className="relation_efficiency">
            <div className="relation_group_label">業務を大幅効率化</div>
            <div className="relation_pair">
              <div className="flex_col_center">
                <div className="relation_circle field relation_circle_compact">
                  <div className="relation_circle_icon">
                    <Icon name="field" />
                  </div>
                  <div className="relation_circle_label">建工管理</div>
                  <div className="relation_circle_name">現場管理</div>
                  <div className="relation_circle_sub">
                    工程・書類・
                    <br />
                    協力会社管理
                  </div>
                </div>
                <div className="relation_down">
                  <i />
                  <b />
                </div>
              </div>
              <div className="flex_col_center">
                <div className="relation_circle sales relation_circle_compact">
                  <div className="relation_circle_icon">
                    <Icon name="sales" />
                  </div>
                  <div className="relation_circle_label">建工管理</div>
                  <div className="relation_circle_name">販売管理</div>
                  <div className="relation_circle_sub">
                    見積・請求・
                    <br />
                    工事台帳管理
                  </div>
                </div>
                <div className="relation_down sales">
                  <i />
                  <b />
                </div>
              </div>
            </div>
            <div className="relation_circle dashboard relation_database">
              <div className="relation_circle_icon">
                <Icon name="database" />
              </div>
              <div className="relation_circle_name font_size_14">
                現場データベース
              </div>
              <div className="relation_circle_sub">入力ゼロで自動蓄積</div>
            </div>
            <div className="relation_arrow_label relation_db_label">
              データの一元管理
            </div>
          </div>
          <div className="relation_arrow">
            <div className="relation_arrow_label nowrap">
              効率化で生まれた
              <br />
              時間・リソースを
            </div>
            <div className="relation_arrow_shape">
              <i />
              <b />
            </div>
            <div className="relation_arrow_label nowrap">マッチングへ活用</div>
          </div>
          <div className="relation_growth">
            <div className="relation_group_label relation_growth_label">
              事業成長を加速
            </div>
            <div className="relation_circle matching">
              <div className="relation_circle_icon">
                <Icon name="match" />
              </div>
              <div className="relation_circle_label">建工管理</div>
              <div className="relation_circle_name">マッチング</div>
              <div className="relation_circle_sub">
                全国の協力会社・
                <br />
                案件と繋がる
              </div>
            </div>
            <p className="relation_matching_note">
              現場管理・販売管理との情報連携はなく、独立して利用可能
            </p>
          </div>
        </div>
        <div className="relation_cta">
          <a className="button button_outline" href="#services">
            機能の詳細を見る →
          </a>
          <a className="button button_primary" href="#results">
            料金プランを見る →
          </a>
        </div>
      </div>
    </section>
  );
}
