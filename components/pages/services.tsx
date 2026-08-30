/** @format */
import Link from "next/link";
export default function ServicesContent() {
  return (
    <div className="route_page">
      <div className="service_list_hero">
        <div className="container">
          <span className="badge ghost">サービス紹介</span>
          <h1>
            3つ<span className="particle">の</span>サービス
            <span className="particle">で</span>建設業
            <span className="particle">を</span>丸ごと変える
          </h1>
          <p>
            それぞれ独立して使えますが、連携することで効果が最大化されます。
          </p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <video
            className="intro_movie"
            poster="/index/pr_bg.jpg"
            controls
            playsInline
            preload="metadata"
            aria-label="建工管理のサービス紹介動画"
          >
            <source src="/index/index_pr.mp4" type="video/mp4" />
            お使いのブラウザは動画の再生に対応していません。
          </video>
          <div className="service_connect">
            <div className="service_connect_title">
              サービス全体の連携イメージ
            </div>
            <div className="service_connect_sub">
              現場管理と販売管理は連携、効率化で生まれたリソースでマッチングへ
            </div>
            <div className="service_connect_top">
              <Link
                className="service_connect_node field"
                href="/field-management"
              >
                <div className="service_connect_icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--k2)"
                    strokeWidth="1.5"
                  >
                    <use href="#icon_field"></use>
                  </svg>
                </div>
                <div className="service_connect_label">現場管理</div>
                <div className="service_connect_name">建工管理 現場管理</div>
                <div className="service_connect_description">
                  工程・出勤・書類を
                  <br />
                  リアルタイム管理
                </div>
              </Link>
              <div className="service_connect_bidir">
                <div className="service_connect_bidir_arrow">⇄</div>
                <div className="service_connect_bidir_label">データ連携</div>
              </div>
              <Link
                className="service_connect_node sales"
                href="/sales-management"
              >
                <div className="service_connect_icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--s1)"
                    strokeWidth="1.5"
                  >
                    <use href="#icon_sales"></use>
                  </svg>
                </div>
                <div className="service_connect_label">販売管理</div>
                <div className="service_connect_name">建工管理 販売管理</div>
                <div className="service_connect_description">
                  見積・請求・台帳を
                  <br />
                  一元管理
                </div>
              </Link>
            </div>
            <div className="service_connect_bottom">
              <div className="service_connect_down_arrow">
                <span>効率化で生まれた時間・リソースを活用</span>
                <div className="service_connect_down_arrow_item">
                  <div className="service_connect_down_arrow_line"></div>
                  <div className="service_connect_down_arrow_triangle"></div>
                </div>
              </div>
              <Link
                className="service_connect_node matching service_connect_node_compact"
                href="/matching"
              >
                <div className="service_connect_icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#b8920a"
                    strokeWidth="1.5"
                  >
                    <use href="#icon_match"></use>
                  </svg>
                </div>
                <div className="service_connect_label">
                  マッチング（独立サービス）
                </div>
                <div className="service_connect_name">建工管理 マッチング</div>
                <div className="service_connect_description">
                  全国の協力会社・案件と繋がる
                  <br />
                  現場管理・販売管理との情報連携はなし
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="flow_section section bg_sub">
        <div className="container">
          <span className="badge field">使い方の流れ</span>
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
      <section className="section">
        <div className="container">
          <h2 className="section_title">
            建工管理<span className="particle">が</span>選ばれる理由
          </h2>
          <div className="service_point_grid">
            <div className="service_point_item">
              <div className="service_point_icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--k2)"
                  strokeWidth="1.5"
                >
                  <use href="#icon_mobile"></use>
                </svg>
              </div>
              <div className="service_point_title">スマホファースト設計</div>
              <div className="service_point_description">
                ITが苦手な職人でも迷わず使えるシンプルなUI。現場での操作に最適化されています。
              </div>
            </div>
            <div className="service_point_item">
              <div className="service_point_icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--k2)"
                  strokeWidth="1.5"
                >
                  <use href="#icon_link"></use>
                </svg>
              </div>
              <div className="service_point_title">
                現場管理・販売管理の完全連携
              </div>
              <div className="service_point_description">
                現場管理と販売管理がデータで繋がり、入力の手間を最小化。情報が自動で伝播します。
              </div>
            </div>
            <div className="service_point_item">
              <div className="service_point_icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--k2)"
                  strokeWidth="1.5"
                >
                  <use href="#icon_support"></use>
                </svg>
              </div>
              <div className="service_point_title">充実の導入サポート</div>
              <div className="service_point_description">
                専任スタッフがZoomで導入から運用定着まで完全サポート。導入後も電話・チャットで即対応。
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
