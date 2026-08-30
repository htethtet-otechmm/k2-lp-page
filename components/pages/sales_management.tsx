/** @format */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
export default function SalesManagementContent() {
  return (
    <div className="route_page">
      <section className="service_hero_section sales">
        <div className="container">
          <div className="service_hero_inner">
            <div>
              <div className="service_hero_inner_label">Sales Management</div>
              <img
                className="service_hero_inner_logo"
                src="/hanbaikanri/hanbaikanri_logo.svg"
                alt=""
              />
              <h1>
                建工管理 <wbr />
                販売管理
              </h1>
              <p>
                最小アカウントから始められる販売管理。見積書・請求書・工事台帳・入出金管理まで、建設業に特化した一元管理ツール。
              </p>
              <div className="service_hero_inner_buttons">
                <a
                  className="button button_accent"
                  href="https://kenkou-kanri.jp/auth/signup/register"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  無料で試す
                </a>
                <Link className="button button_ghost" href="/pricing">
                  料金を確認する
                </Link>
              </div>
            </div>
            <div className="service_hero_inner_screen">
              <img src="/top_s1.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="feature_block">
        <div className="feature_block_inner">
          <div className="feature_visual sales_background">
            <div className="feature_screen">
              <img src="/hanbaikanri/estimate.png" alt="" />
            </div>
          </div>
          <div className="feature_body feature_sales">
            <div className="feature_number">FEATURE 01</div>
            <div className="feature_title">
              見積書・請求書の
              <br />
              スピーディーな作成
            </div>
            <div className="feature_description">
              テンプレートから素早く作成、PDFで即送付。一人親方でも最小アカウントからすぐに使い始められるシンプルな設計。
            </div>
            <ul className="feature_points">
              <li>
                <span>最小1アカウントから開始可能</span>
              </li>
              <li>
                <span>見積書・請求書・納品書をワンクリックで作成</span>
              </li>
              <li>
                <span>PDF出力・メール添付が即時対応</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="feature_block">
        <div className="feature_block_inner reveal">
          <div className="feature_visual sales_background_light">
            <div className="feature_screen">
              <img src="/hanbaikanri/kojidaityo.png" alt="" />
            </div>
          </div>
          <div className="feature_body feature_body_dark_sales feature_sales">
            <div className="feature_number">FEATURE 02</div>
            <div className="feature_title">
              工事台帳・入出金の
              <br />
              リアルタイム管理
            </div>
            <div className="feature_description">
              工事ごとの原価・売上・利益をリアルタイムで可視化。入出金を自動記録・管理し、請求漏れや入金遅延を防ぎます。
            </div>
            <ul className="feature_points">
              <li>
                <span>工事台帳で原価・利益を案件別に把握</span>
              </li>
              <li>
                <span>入出金管理で資金繰りを安定化</span>
              </li>
              <li>
                <span>現場管理との連携でデータ自動反映</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="feature_block">
        <div className="feature_block_inner">
          <div className="feature_visual sales_background">
            <div className="feature_screen">
              <img src="/hanbaikanri/home.png" alt="" />
            </div>
          </div>
          <div className="feature_body feature_sales">
            <div className="feature_number">FEATURE 03</div>
            <div className="feature_title">
              経営者視点の
              <br />
              リアルタイムダッシュボード
            </div>
            <div className="feature_description">
              売上・利益・未収金をひと目で把握。現場管理との連携で、現場の実績データが自動で台帳に反映されます。
            </div>
            <ul className="feature_points">
              <li>
                <span>売上・利益をリアルタイムで確認</span>
              </li>
              <li>
                <span>現場管理との自動連携で入力ゼロ</span>
              </li>
              <li>
                <span>経営判断に必要な数字を常に把握</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="service_price_section">
        <div className="container">
          <div className="service_price_inner">
            <span className="badge sales">料金プラン</span>
            <h2 className="section_title">建工管理 販売管理 料金</h2>
            <div className="pricing_trial sales_background_cta">
              <div>
                <h4>建工管理 販売管理 — 2週間無料トライアル</h4>
                <p>クレジットカード不要。最小1アカウントから始められます。</p>
              </div>
              <a
                className="button button_accent"
                href="https://kenkou-kanri.jp/auth/signup/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                販売管理を無料で試す →
              </a>
            </div>
            <div className="pricing_tab_wrap">
              <div className="pricing_tab_head sales">
                <h3>販売管理 料金プラン</h3>
                <p>見積・請求・工事台帳・入出金管理まで一元管理</p>
              </div>
              <div className="sales_price_box">
                <div className="sales_price_card main_panel">
                  <div className="sales_price_card_label">基本料金</div>
                  <div className="sales_price_card_amount">¥30,000</div>
                  <div className="sales_price_card_unit">円 / 月（税別）</div>
                </div>
                <div className="sales_plus">＋</div>
                <div className="sales_price_card mode_add">
                  <div className="sales_price_card_label">
                    1アカウントあたり
                  </div>
                  <div className="sales_price_card_amount">¥5,000</div>
                  <div className="sales_price_card_unit">円 / 月（税別）</div>
                </div>
              </div>
            </div>
            <div className="price_note">
              ※表示価格はすべて税別です。2週間無料でお試しいただけます。※プラン詳細は、Webサイトをご確認ください。
            </div>
          </div>
        </div>
      </section>
      <section className="relation_secondary_section">
        <div className="container">
          <h2 className="section_title">建工管理 現場管理との連携</h2>
          <div className="relation_secondary_grid">
            <Link
              className="relation_secondary_item field"
              href="/field-management"
            >
              <div className="relation_secondary_label">建工管理 現場管理</div>
              <div className="relation_secondary_title">
                見積書から案件作成で効率化
              </div>
              <div className="relation_secondary_link">詳しく見る →</div>
            </Link>
            <Link
              className="relation_secondary_item field"
              href="/field-management"
            >
              <div className="relation_secondary_label">建工管理 現場管理</div>
              <div className="relation_secondary_title">
                現場から請求まで完全一元管理を実現
              </div>
              <div className="relation_secondary_link">詳しく見る →</div>
            </Link>
            <Link
              className="relation_secondary_item field"
              href="/field-management"
            >
              <div className="relation_secondary_label">建工管理 現場管理</div>
              <div className="relation_secondary_title">
                現場状況と工事台帳をリアルタイム同期
              </div>
              <div className="relation_secondary_link">詳しく見る →</div>
            </Link>
          </div>
        </div>
      </section>
      <div data-full-footer="" data-cta-color="sales"></div>
    </div>
  );
}
