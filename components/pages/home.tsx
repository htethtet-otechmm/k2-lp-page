/** @format */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
export default function HomeContent() {
  return (
    <div className="route_page">
      <section className="hero">
        <div className="hero_inner">
          <div>
            <div className="hero_entry_tags">
              <span className="hero_entry_tag">見積・現場・請求の一本化</span>
              <span className="hero_entry_separator">×</span>
              <span className="hero_entry_tag">仕事の幅拡大</span>
            </div>
            <h1>
              業務<span className="particle">の</span>手間
              <span className="particle">を</span>削って、
              <br />
              <em>
                売上<span className="particle">を</span>伸ばす。
              </em>
            </h1>
            <p className="hero_description">
              建設業のための、現場管理・販売管理・マッチングをワンストップで提供。一人親方から中規模建設会社まで、業務効率化と売上拡大を同時に実現します。
            </p>
            <div className="hero_service_badges">
              <div className="hero_service_badge hero_service_badge_field">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <use href="#icon_field"></use>
                </svg>
                <span className="hero_service_badge_name">現場管理</span>
                <span className="hero_service_badge_arrow">→</span>
                <span className="hero_service_badge_desc">
                  案件データ・工程表・スタッフなど現場全てをデジタル化
                </span>
              </div>
              <div className="hero_service_badge hero_service_badge_sales">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <use href="#icon_sales"></use>
                </svg>
                <span className="hero_service_badge_name">販売管理</span>
                <span className="hero_service_badge_arrow">→</span>
                <span className="hero_service_badge_desc">
                  見積書・工事台帳・コスト管理・請求書・入金を一元管理
                </span>
              </div>
              <div className="hero_service_badge hero_service_badge_matching">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <use href="#icon_match"></use>
                </svg>
                <span className="hero_service_badge_name">マッチング</span>
                <span className="hero_service_badge_arrow">→</span>
                <span className="hero_service_badge_desc">
                  日本全国から検索・自社情報の掲載から案件・仲間探しまで
                </span>
              </div>
            </div>
            <div className="hero_buttons">
              <Link
                className="button button_accent hero_button_primary"
                href="/contact"
              >
                お問い合わせ
              </Link>
              <Link
                className="button button_white_outline hero_button_secondary"
                href="/brochure"
              >
                資料請求
              </Link>
            </div>
          </div>
          <div className="hero_slider_wrap" id="hero_slider_wrap">
            <div className="hero_tab_outside_tabs">
              <button
                className="hero_tab_outside_tab app_tab_field active"
                id="hero_tab_index_field"
                data-slider="0"
              >
                現場管理
              </button>
              <button
                className="hero_tab_outside_tab app_tab_sales"
                id="hero_tab_index_sales"
                data-slider="1"
              >
                販売管理
              </button>
              <button
                className="hero_tab_outside_tab app_tab_matching"
                id="hero_tab_index_matching"
                data-slider="2"
              >
                マッチング
              </button>
            </div>
            <div className="hero_tab_panels">
              <div className="screen_panel active" id="service_panel_field">
                <img src="/top_k2.png" alt="" />
              </div>
              <div className="screen_panel" id="service_panel_sales">
                <img src="/top_s1.png" alt="" />
              </div>
              <div className="screen_panel" id="service_panel_matching">
                <img src="/top_m2.png" alt="" />
              </div>
            </div>
            <div className="hero_slider_dots">
              <button
                className="hero_slide_description active"
                id="hero_slide_description_0"
                data-slider="0"
                aria-label="現場管理"
              ></button>
              <button
                className="hero_slide_description"
                id="hero_slide_description_1"
                data-slider="1"
                aria-label="販売管理"
              ></button>
              <button
                className="hero_slide_description"
                id="hero_slide_description_2"
                data-slider="2"
                aria-label="マッチング"
              ></button>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
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
            <Link className="service_card field" href="/field-management">
              <div className="service_top">
                <div className="service_icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <use href="#icon_field"></use>
                  </svg>
                </div>
                <div className="service_name">建工管理 現場管理</div>
                <div className="service_tag">Field Management</div>
                <div className="service_description">
                  職人・監督・経営者それぞれが使いやすい現場管理ツール。スマホで全現場をリアルタイム把握。
                </div>
                <div className="service_price">
                  <span>お問い合わせください</span>
                </div>
              </div>
              <div className="service_bottom">
                <ul className="service_features">
                  <li>スマホで翌日の現場・工程がわかる</li>
                  <li>ガントチャートによる工程管理</li>
                  <li>協力会社との連携強化・報告削減</li>
                  <li>工程表・出勤表をExcelでDL</li>
                </ul>
                <button className="button button_outline">詳しく見る →</button>
              </div>
            </Link>
            <Link className="service_card sales" href="/sales-management">
              <div className="service_top">
                <div className="service_icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <use href="#icon_sales"></use>
                  </svg>
                </div>
                <div className="service_name">建工管理 販売管理</div>
                <div className="service_tag">Sales Management</div>
                <div className="service_description">
                  最小アカウントから始められる販売管理。見積・請求・工事台帳まで一元管理。
                </div>
                <div className="service_price">
                  ¥30,000<span>/月 ～</span>
                </div>
              </div>
              <div className="service_bottom">
                <ul className="service_features">
                  <li>見積書などの書類管理</li>
                  <li>工事台帳管理</li>
                  <li>入出金管理</li>
                  <li>リアルタイムな現場把握と請求漏れ防止</li>
                </ul>
                <button className="button button_outline">詳しく見る →</button>
              </div>
            </Link>
            <Link className="service_card matching" href="/matching">
              <div className="service_top">
                <div className="service_icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <use href="#icon_match"></use>
                  </svg>
                </div>
                <div className="service_name">建工管理 マッチング</div>
                <div className="service_tag">Matching Platform</div>
                <div className="service_description">
                  建設業専門のマッチングプラットフォーム。エリア・工種別に検索・アピール。
                </div>
                <div className="service_price">
                  ¥0<span>/月</span>
                </div>
              </div>
              <div className="service_bottom">
                <ul className="service_features">
                  <li>アカウントなしでも利用可能</li>
                  <li>案件募集・人工募集の掲示板</li>
                  <li>チャット機能で直接やり取り</li>
                  <li>SNSとの連携で発信力アップ</li>
                </ul>
                <button className="button button_outline">詳しく見る →</button>
              </div>
            </Link>
          </div>
        </div>
      </section>
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
            <div className="problem_item">
              <div className="problem_number">01</div>
              <div className="problem_icon">
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <use href="#icon_document"></use>
                </svg>
              </div>
              <div className="problem_title">現場の情報がバラバラ</div>
              <div className="problem_description">
                紙・電話・LINEで情報が分散。誰が何をしているか把握できず、トラブルが頻発する。
              </div>
            </div>
            <div className="problem_item">
              <div className="problem_number">02</div>
              <div className="problem_icon">
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <use href="#icon_document"></use>
                </svg>
              </div>
              <div className="problem_title">請求漏れ・入金遅延</div>
              <div className="problem_description">
                手書き・Excelの見積でミスが多発。請求忘れや入金管理の煩雑さで資金繰りが不安定。
              </div>
            </div>
            <div className="problem_item">
              <div className="problem_number">03</div>
              <div className="problem_icon">
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <use href="#icon_group"></use>
                </svg>
              </div>
              <div className="problem_title">協力会社の確保が困難</div>
              <div className="problem_description">
                急な人手不足に対応できず案件を逃す。信頼できる協力会社との繋がりが少ない。
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relation_section">
        <div className="container">
          <div className="relation_layout">
            <div className="relation_efficiency">
              <div className="relation_group_label">業務を大幅効率化</div>
              <div className="relation_pair">
                <div className="flex_col_center">
                  <Link
                    className="relation_circle field relation_circle_compact"
                    href="/field-management"
                  >
                    <div className="relation_circle_icon">
                      <svg
                        viewBox="0 0 24 24"
                        width="28"
                        height="28"
                        fill="none"
                        stroke="var(--k2)"
                        strokeWidth="1.5"
                      >
                        <use href="#icon_field"></use>
                      </svg>
                    </div>
                    <div className="relation_circle_label">建工管理</div>
                    <div className="relation_circle_name">現場管理</div>
                    <div className="relation_circle_sub">
                      工程・書類・
                      <br />
                      協力会社管理
                    </div>
                  </Link>
                  <div className="relation_down">
                    <div className="relation_down_stem is_field"></div>
                    <div className="relation_down_tip is_field"></div>
                  </div>
                </div>
                <div className="flex_col_center">
                  <Link
                    className="relation_circle sales relation_circle_compact"
                    href="/sales-management"
                  >
                    <div className="relation_circle_icon">
                      <svg
                        viewBox="0 0 24 24"
                        width="28"
                        height="28"
                        fill="none"
                        stroke="var(--s1)"
                        strokeWidth="1.5"
                      >
                        <use href="#icon_sales"></use>
                      </svg>
                    </div>
                    <div className="relation_circle_label">建工管理</div>
                    <div className="relation_circle_name">販売管理</div>
                    <div className="relation_circle_sub">
                      見積・請求・
                      <br />
                      工事台帳管理
                    </div>
                  </Link>
                  <div className="relation_down sales">
                    <div className="relation_down_stem is_sales"></div>
                    <div className="relation_down_tip is_sales"></div>
                  </div>
                </div>
              </div>
              <div className="relation_circle dashboard relation_database">
                <div className="relation_circle_icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="none"
                    stroke="#888"
                    strokeWidth="1.5"
                  >
                    <use href="#icon_database"></use>
                  </svg>
                </div>
                <div className="relation_circle_name font_size_14">
                  現場データベース
                </div>
                <div className="relation_circle_sub relation_database_subtitle">
                  入力ゼロで自動蓄積
                </div>
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
              <div className="relation_arrow_track">
                <div className="relation_arrow_line"></div>
              </div>
              <div className="relation_arrow_label nowrap">
                マッチングへ活用
              </div>
            </div>
            <div className="relation_growth">
              <div className="relation_group_label relation_growth_label">
                事業成長を加速
              </div>
              <Link className="relation_circle matching" href="/matching">
                <div className="relation_circle_icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    fill="none"
                    stroke="#b8920a"
                    strokeWidth="1.5"
                  >
                    <use href="#icon_match"></use>
                  </svg>
                </div>
                <div className="relation_circle_label">建工管理</div>
                <div className="relation_circle_name">マッチング</div>
                <div className="relation_circle_sub">
                  全国の協力会社・
                  <br />
                  案件と繋がる
                </div>
              </Link>
              <p className="relation_matching_note">
                現場管理・販売管理との情報連携はなく、独立して利用可能
              </p>
            </div>
          </div>
          <div className="relation_cta">
            <Link className="button button_outline" href="/services">
              機能の詳細を見る →
            </Link>
            <Link className="button button_primary" href="/pricing">
              料金プランを見る →
            </Link>
          </div>
        </div>
      </section>
      <section className="section before_after_section">
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
                <div className="before_after_column">
                  <div className="before_after_column_label">Before</div>
                  <div className="before_after_point">
                    <div className="before_after_point_icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#f87171"
                        strokeWidth="2"
                      >
                        <use href="#icon_phone"></use>
                      </svg>
                    </div>
                    <div className="before_after_point_text">
                      電話・LINEで状況確認、1日30分以上かかる
                    </div>
                  </div>
                  <div className="before_after_point">
                    <div className="before_after_point_icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#f87171"
                        strokeWidth="2"
                      >
                        <use href="#icon_document"></use>
                      </svg>
                    </div>
                    <div className="before_after_point_text">
                      工程表はExcelで手動更新、共有に時間がかかる
                    </div>
                  </div>
                  <div className="before_after_point">
                    <div className="before_after_point_icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#f87171"
                        strokeWidth="2"
                      >
                        <use href="#icon_group"></use>
                      </svg>
                    </div>
                    <div className="before_after_point_text">
                      協力会社の出勤状況が把握できず不安
                    </div>
                  </div>
                  <div className="before_after_point">
                    <div className="before_after_point_icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#f87171"
                        strokeWidth="2"
                      >
                        <use href="#icon_document"></use>
                      </svg>
                    </div>
                    <div className="before_after_point_text">
                      見積書や請求書を発行し忘れてしまう
                    </div>
                  </div>
                </div>
                <div className="before_after_column">
                  <div className="before_after_column_label">After</div>
                  <div className="before_after_point">
                    <div className="before_after_point_icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--k2)"
                        strokeWidth="2"
                      >
                        <use href="#icon_check"></use>
                      </svg>
                    </div>
                    <div className="before_after_point_text">
                      スマホで全現場をリアルタイム確認、報告業務が激減
                    </div>
                  </div>
                  <div className="before_after_point">
                    <div className="before_after_point_icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--k2)"
                        strokeWidth="2"
                      >
                        <use href="#icon_mobile"></use>
                      </svg>
                    </div>
                    <div className="before_after_point_text">
                      ガントチャートが自動更新、職人もスマホで即確認
                    </div>
                  </div>
                  <div className="before_after_point">
                    <div className="before_after_point_icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--k2)"
                        strokeWidth="2"
                      >
                        <use href="#icon_check"></use>
                      </svg>
                    </div>
                    <div className="before_after_point_text">
                      スタッフや機材管理・書類共有が一元化され安心
                    </div>
                  </div>
                  <div className="before_after_point">
                    <div className="before_after_point_icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--k2)"
                        strokeWidth="2"
                      >
                        <use href="#icon_document"></use>
                      </svg>
                    </div>
                    <div className="before_after_point_text">
                      書類管理を現場管理と連携して一括管理
                    </div>
                  </div>
                </div>
              </div>
              <div className="before_after_links">
                <Link className="tag_link" href="/field-management">
                  建工管理 現場管理を見る
                </Link>
                <Link className="tag_link" href="/sales-management">
                  建工管理 販売管理を見る
                </Link>
              </div>
            </div>
            <div className="before_after_item matching">
              <div className="before_after_head">
                <span>建工管理 マッチング での変化</span>
                <span className="before_after_head_sub is_matching">
                  企業マッチングで事業を拡大
                </span>
              </div>
              <div className="before_after_columns">
                <div className="before_after_column">
                  <div className="before_after_column_label">Before</div>
                  <div className="before_after_point">
                    <div className="before_after_point_icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#f87171"
                        strokeWidth="2"
                      >
                        <use href="#icon_search"></use>
                      </svg>
                    </div>
                    <div className="before_after_point_text">
                      急な人手不足の時、頼める会社がなく案件を断ることも
                    </div>
                  </div>
                  <div className="before_after_point">
                    <div className="before_after_point_icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#f87171"
                        strokeWidth="2"
                      >
                        <use href="#icon_chart"></use>
                      </svg>
                    </div>
                    <div className="before_after_point_text">
                      繁閑の差が大きく、閑散期の仕事確保が課題
                    </div>
                  </div>
                </div>
                <div className="before_after_column">
                  <div className="before_after_column_label">After</div>
                  <div className="before_after_point">
                    <div className="before_after_point_icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#b8920a"
                        strokeWidth="2"
                      >
                        <use href="#icon_group"></use>
                      </svg>
                    </div>
                    <div className="before_after_point_text">
                      全国の信頼できる協力会社とすぐに繋がれる
                    </div>
                  </div>
                  <div className="before_after_point">
                    <div className="before_after_point_icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#b8920a"
                        strokeWidth="2"
                      >
                        <use href="#icon_trend"></use>
                      </svg>
                    </div>
                    <div className="before_after_point_text">
                      案件・人工の掲示板で閑散期も安定受注
                    </div>
                  </div>
                </div>
              </div>
              <div className="before_after_links">
                <Link className="tag_link" href="/matching">
                  マッチングを見る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <span className="badge sales">導入事例</span>
          <h2 className="section_title">
            お客様<span className="particle">の</span>声
          </h2>
          <div className="cases_grid">
            <Link className="case_card" href="/case-detail">
              <div className="case_image">
                <img src="/case/hattoriteien01.png" alt="" />
              </div>
              <div className="case_body">
                <ul className="case_list_card_tags">
                  <li className="case_list_card_tag_field">現場管理</li>
                </ul>
                <div className="case_title">
                  どこでも使えて、早くて、ホワイトボードより見やすい。
                </div>
                <div className="case_company">有限会社服部庭園 様</div>
              </div>
            </Link>
            <Link className="case_card" href="/case-detail">
              <div className="case_image">
                <img src="/case/aiesu01.png" alt="" />
              </div>
              <div className="case_body">
                <ul className="case_list_card_tags">
                  <li className="case_list_card_tag_field">現場管理</li>
                  <li className="case_list_card_tag_sales">販売管理</li>
                </ul>
                <div className="case_title">
                  一人親方が請求業務を自動化し事務作業を大幅削減
                </div>
                <div className="case_company">株式会社アイエス 様</div>
              </div>
            </Link>
            <Link className="case_card" href="/case-detail">
              <div className="case_image">
                <img src="/case/tbright01.png" alt="" />
              </div>
              <div className="case_body">
                <ul className="case_list_card_tags">
                  <li className="case_list_card_tag_field">現場管理</li>
                  <li className="case_list_card_tag_sales">販売管理</li>
                  <li className="case_list_card_tag_matching">マッチング</li>
                </ul>
                <div className="case_title">
                  マッチングで協力会社ネットワークを拡大し繁忙期も安定稼働
                </div>
                <div className="case_company">ティーブライト 様</div>
              </div>
            </Link>
          </div>
          <div className="case_more">
            <Link className="button button_outline" href="/cases">
              導入事例をもっと見る →
            </Link>
          </div>
        </div>
      </section>
      <section className="support_section">
        <div className="container">
          <div className="support_inner">
            <div>
              <span className="badge ghost">導入サポート</span>
              <h2 className="support_title">安心の導入サポート体制</h2>
              <p className="support_description">
                ITが苦手な方でも大丈夫。専任スタッフが導入から定着まで完全サポートします。
              </p>
              <Link className="button button_primary" href="/contact">
                無料相談を予約する →
              </Link>
            </div>
            <div className="support_steps">
              <div className="support_step">
                <div className="step_number">1</div>
                <div className="step_title">
                  <strong>無料トライアル申込</strong>
                  2週間完全無料。クレジットカード不要。
                </div>
              </div>
              <div className="support_step">
                <div className="step_number">2</div>
                <div className="step_title">
                  <strong>オンライン導入サポート</strong>
                  専任担当がZoomで初期設定を一緒に行います。
                </div>
              </div>
              <div className="support_step">
                <div className="step_number">3</div>
                <div className="step_title">
                  <strong>運用開始 & 継続支援</strong>
                  チャット・電話でいつでもサポート。
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sns_bar">
        <div className="container">
          <div className="sns_inner">
            <div className="sns_item">
              <div className="sns_icon">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <use href="#icon_document"></use>
                </svg>
              </div>
              <div className="sns_label">BLOG</div>
            </div>
            <div className="sns_item">
              <div className="sns_icon">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <use href="#icon_play"></use>
                </svg>
              </div>
              <div className="sns_label">YouTube</div>
            </div>
            <div className="sns_item">
              <div className="sns_icon">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <use href="#icon_photo"></use>
                </svg>
              </div>
              <div className="sns_label">Instagram</div>
            </div>
            <div className="sns_item">
              <div className="sns_icon">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <use href="#icon_group"></use>
                </svg>
              </div>
              <div className="sns_label">Facebook</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
