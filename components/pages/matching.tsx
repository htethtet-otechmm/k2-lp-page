/** @format */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
export default function MatchingContent() {
  return (
    <div className="route_page">
      <section className="service_hero_section matching">
        <div className="container">
          <div className="service_hero_inner">
            <div>
              <div className="service_hero_inner_label">Matching Platform</div>
              <img
                className="service_hero_inner_logo"
                src="/matching/matching_logo.svg"
                alt=""
              />
              <h1>
                建工管理 <wbr />
                マッチング
              </h1>
              <p>
                建設業専門のマッチングプラットフォーム。エリア・工種別に協力会社や案件を検索・アピール。アカウントなしでも利用可能。
              </p>
              <div className="service_hero_inner_buttons">
                <a
                  className="button button_accent"
                  href="https://kenkou-kanri-match.jp/auth/signup/agreement"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  無料で始める
                </a>
                <Link className="button button_ghost" href="/pricing">
                  料金を確認する
                </Link>
              </div>
            </div>
            <div className="service_hero_inner_screen">
              <img src="/top_m2.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="feature_block">
        <div className="feature_block_inner">
          <div className="feature_visual matching_background">
            <div className="feature_screen">
              <img src="/matching/company.png" alt="" />
            </div>
          </div>
          <div className="feature_body feature_matching">
            <div className="feature_number">FEATURE 01</div>
            <div className="feature_title">
              エリア・工種別
              <br />
              検索・アピール機能
            </div>
            <div className="feature_description">
              建築・土木・内装・設備などの工種別、都道府県・地域別に協力会社を検索。アカウントなしでも閲覧可能なオープンプラットフォーム。
            </div>
            <ul className="feature_points">
              <li>
                <span>29業種・全国対応のエリア検索</span>
              </li>
              <li>
                <span>アカウントなしでも閲覧・検索可能</span>
              </li>
              <li>
                <span>自社のプロフィールをアピール掲載</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="service_price_section">
        <div className="service_price_inner">
          <div className="service_price_matching">
            <span className="badge matching">建設業許可番号について</span>
            <h2 className="section_title">
              許可番号の有無で
              <br />
              できることが変わります
            </h2>
            <p className="section_sub">
              建設業許可番号をお持ちかどうかで、マッチングでご利用いただける機能が異なります。
              <br />
              いずれも<strong>完全無料</strong>でご利用いただけます。
            </p>
          </div>
          <div className="service_price_matching_details">
            <div className="service_price_matching_card service_price_matching_card_normal">
              <div className="service_price_matching_top">
                <div className="service_price_matching_sub">
                  建設業許可番号なし
                </div>
                <div className="service_price_matching_title">
                  一人親方・小規模事業者
                </div>
              </div>
              <div className="service_price_matching_bottom">
                <div className="price_box">
                  <div className="price_cell">¥0</div>
                  <div className="text">完全無料</div>
                </div>
                <ul className="point">
                  <li>
                    <span className="included">✓</span>企業・案件の閲覧・検索
                  </li>
                  <li>
                    <span className="included">✓</span>
                    プロフィール掲載・アピール
                  </li>
                  <li>
                    <span className="included">✓</span>人工募集・案件投稿
                  </li>
                  <li>
                    <span className="included">✓</span>チャット・問い合わせ
                  </li>
                  <li>
                    <span className="is_not">—</span>
                    <span>
                      建設業許可番号での検索・絞り込み{" "}
                      <span className="font_size_13">(非対応)</span>
                    </span>
                  </li>
                  <li>
                    <span className="is_not">—</span>
                    <span>
                      許可番号による信頼性バッジ表示{" "}
                      <span className="font_size_13">(非対応)</span>
                    </span>
                  </li>
                </ul>
                <a
                  className="button button_outline"
                  href="https://kenkou-kanri-match.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  無料で検索する
                </a>
              </div>
            </div>
            <div className="service_price_matching_card service_price_matching_card_license">
              <div className="service_price_matching_top">
                <div className="service_price_matching_sub">
                  建設業許可番号あり
                </div>
                <div className="service_price_matching_title">
                  許可取得済み企業
                </div>
                <div className="service_price_matching_recommendation">
                  おすすめ
                </div>
              </div>
              <div className="service_price_matching_bottom">
                <div className="price_box">
                  <div className="price_cell">¥0</div>
                  <div className="text">完全無料・全機能利用可能</div>
                </div>
                <ul className="point">
                  <li>
                    <span className="included">✓</span>許可番号なしの全機能
                  </li>
                  <li>
                    <span className="included">✓</span>
                    <strong>建設業許可番号で企業を検索・絞り込み</strong>
                  </li>
                  <li>
                    <span className="included">✓</span>
                    <span>
                      プロフィールに<strong>許可番号バッジ</strong>
                      を表示し信頼性をアピール
                    </span>
                  </li>
                  <li>
                    <span className="included">✓</span>
                    許可取得済み企業のみへの絞り込み検索
                  </li>
                  <li>
                    <span className="included">✓</span>
                    元請け企業からの優先マッチング
                  </li>
                </ul>
                <a
                  className="button button_outline"
                  href="https://kenkou-kanri-match.jp/auth/signup/agreement"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  許可番号で登録する
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="feature_block">
        <div className="feature_block_inner reveal">
          <div className="feature_visual matching_background_light">
            <div className="feature_screen">
              <img src="/matching/objective.png" alt="" />
            </div>
          </div>
          <div className="feature_body feature_body_dark_matching feature_matching">
            <div className="feature_number">FEATURE 02</div>
            <div className="feature_title">
              案件募集・人工募集の
              <br />
              リアルタイム掲示板
            </div>
            <div className="feature_description">
              「案件募集」や「人工（スタッフ）募集」をリアルタイムで掲載。急な人手不足にも即対応できます。
            </div>
            <ul className="feature_points">
              <li>
                <span>案件募集・人工募集をリアルタイム掲載</span>
              </li>
              <li>
                <span>全国の建設会社が閲覧するプラットフォーム</span>
              </li>
              <li>
                <span>急募にも当日対応が可能</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="feature_block">
        <div className="feature_block_inner">
          <div className="feature_visual matching_background">
            <div className="feature_screen">
              <img src="/matching/message.png" alt="" />
            </div>
          </div>
          <div className="feature_body feature_matching">
            <div className="feature_number">FEATURE 03</div>
            <div className="feature_title">
              チャット機能で
              <br />
              直接やり取り
            </div>
            <div className="feature_description">
              気になる企業・案件に直接チャットで連絡。電話やメールより手軽にコミュニケーションが取れます。
            </div>
            <ul className="feature_points">
              <li>
                <span>企業・担当者へのダイレクトチャット</span>
              </li>
              <li>
                <span>問い合わせから商談まで一元管理</span>
              </li>
              <li>
                <span>スマホからいつでも確認・返信</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="feature_block">
        <div className="feature_block_inner reveal">
          <div className="feature_visual matching_background_light">
            <div className="feature_screen">
              <img src="/matching/sns.png" alt="" />
            </div>
          </div>
          <div className="feature_body feature_body_dark_matching feature_matching">
            <div className="feature_number">FEATURE 04</div>
            <div className="feature_title">
              YouTube・SNS連携で
              <br />
              発信力アップ
            </div>
            <div className="feature_description">
              自社のYouTubeチャンネルやInstagram・Xと連携して、施工実績や会社の魅力を発信。プラットフォーム上での認知度を高めます。
            </div>
            <ul className="feature_points">
              <li>
                <span>YouTube動画をプロフィールに掲載</span>
              </li>
              <li>
                <span>Instagram・X（旧Twitter）と連携</span>
              </li>
              <li>
                <span>発信力で協力会社・案件を引き寄せる</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div data-full-footer="" data-cta-style="m2"></div>
    </div>
  );
}
