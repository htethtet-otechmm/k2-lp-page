/** @format */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
export default function FieldManagementContent() {
  return (
    <div className="route_page">
      <section className="field_lp_hero">
        <div className="container">
          <div className="field_lp_hero_inner">
            <div className="field_lp_hero_body">
              <p className="field_lp_hero_label">
                手のひらサイズのホワイトボード
              </p>
              <img
                className="field_lp_hero_logo"
                src="/genbakanri/genbakanri_logo.svg"
                alt="建工管理 現場管理"
              />
              <h1 className="field_lp_hero_title">
                <span className="field_lp_hero_title_accent">
                  直感的だから、
                  <wbr />
                  誰でも
                  <wbr />
                  すぐ使える
                </span>
                現場のための、
                <wbr />
                シンプルな
                <wbr />
                管理アプリ
              </h1>
              <p className="field_lp_hero_lead">
                〜「多機能すぎて使えない」は、
                <wbr />
                もう終わりにしよう〜
              </p>
              <div className="field_lp_cta">
                <span className="field_lp_cta_note">2週間無料トライアル</span>
                <div className="field_lp_cta_buttons">
                  <a
                    className="button button_accent"
                    href="https://kenkou-kanri.jp/auth/signup/register"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    無料で試してみる
                  </a>
                  <Link className="button button_outline" href="/brochure">
                    詳しい資料を見る
                  </Link>
                </div>
              </div>
            </div>
            <div className="field_lp_hero_screen">
              <img src="/top_k2.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="field_lp_intro">
        <div className="container">
          <h2 className="field_lp_heading">建工管理とは</h2>
          <div className="field_lp_intro_inner">
            <div className="field_lp_intro_body">
              <p>
                建工管理は、足場工事・建築の現場を知り尽くしたプロが開発した現場管理アプリです。工程・出勤・写真・書類をひとつにまとめ、スマホからすべての現場をリアルタイムに把握できます。
              </p>
              <p>
                職人・監督・経営者の誰もが直感的に使えるシンプルな設計で、現場とオフィスの情報共有や報告業務の手間を大きく減らします。
              </p>
            </div>
            <div className="field_lp_intro_screen">
              <video
                poster="/index/pr_bg.jpg"
                controls
                playsInline
                preload="metadata"
                aria-label="建工管理の紹介動画"
              >
                <source src="/index/index_pr.mp4" type="video/mp4" />
                お使いのブラウザは動画の再生に対応していません。
              </video>
            </div>
          </div>
        </div>
      </section>
      <section className="field_lp_value">
        <div className="container">
          <h2 className="field_lp_heading">一人工以下の金額で〜</h2>
          <p className="field_lp_value_lead">
            追加料金なしで、すべての機能をご利用いただけます。
          </p>
          <div className="field_lp_feature_grid">
            <div className="field_lp_feature_item">
              <div className="field_lp_feature_icon">
                <img src="/genbakanri/chart.svg" alt="" />
              </div>
              <p>ガントチャート工程管理</p>
            </div>
            <div className="field_lp_feature_item">
              <div className="field_lp_feature_icon">
                <img src="/genbakanri/staff.svg" alt="" />
              </div>
              <p>班・協力会社グループ管理</p>
            </div>
            <div className="field_lp_feature_item">
              <div className="field_lp_feature_icon">
                <img src="/genbakanri/album.svg" alt="" />
              </div>
              <p>現場写真・書類の共有</p>
            </div>
            <div className="field_lp_feature_item">
              <div className="field_lp_feature_icon">
                <img src="/genbakanri/map.svg" alt="" />
              </div>
              <p>現場MAP機能</p>
            </div>
            <div className="field_lp_feature_item">
              <div className="field_lp_feature_icon">
                <img src="/genbakanri/export.svg" alt="" />
              </div>
              <p>出勤・勤怠の管理</p>
            </div>
            <div className="field_lp_feature_item">
              <div className="field_lp_feature_icon">
                <img src="/genbakanri/chat.svg" alt="" />
              </div>
              <p>変更通知・チャット連絡</p>
            </div>
            <div className="field_lp_feature_item">
              <div className="field_lp_feature_icon">
                <img src="/genbakanri/dailynote.svg" alt="" />
              </div>
              <p>日報・報告書の作成</p>
            </div>
            <div className="field_lp_feature_item">
              <div className="field_lp_feature_icon">
                <img src="/genbakanri/site.svg" alt="" />
              </div>
              <p>タスク・ToDo管理</p>
            </div>
          </div>
          <div className="field_lp_cta">
            <span className="field_lp_cta_note">2週間無料トライアル</span>
            <div className="field_lp_cta_buttons">
              <a
                className="button button_accent"
                href="https://kenkou-kanri.jp/auth/signup/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                無料で試してみる
              </a>
              <Link className="button button_outline" href="/brochure">
                詳しい資料を見る
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="field_lp_reason">
        <div className="container">
          <div className="field_lp_reason_inner">
            <div className="field_lp_reason_body">
              <h2 className="field_lp_reason_title">
                現場を
                <wbr />
                知り尽くした
                <wbr />
                プロが
                <wbr />
                作ったから、
                <wbr />
                圧倒的に
                <wbr />
                使いやすくて、
                <wbr />
                安い。
              </h2>
              <p className="field_lp_reason_lead">
                私たちは、自社でも足場工事・建築事業を営む「現場のプロ」です。
                <br />
                建工管理は、自分たちの業務を効率化するために開発されました。
              </p>
              <ul className="field_lp_reason_points">
                <li>
                  <strong>現場目線の100%リアルな機能</strong>
                  無駄な機能は一切なし
                </li>
                <li>
                  <strong>自社開発だから</strong>余計な開発コストを徹底カット
                </li>
              </ul>
              <p className="field_lp_reason_closing">
                「安さ」と「使いやすさ」の両立には、明確な理由があります。
              </p>
            </div>
            <div className="field_lp_reason_image">
              <img src="/genbakanri/pro.png" alt="" />
            </div>
          </div>
          <div className="field_lp_cta field_lp_cta_on_dark">
            <span className="field_lp_cta_note">2週間無料トライアル</span>
            <div className="field_lp_cta_buttons">
              <a
                className="button button_accent"
                href="https://kenkou-kanri.jp/auth/signup/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                無料で試してみる
              </a>
              <Link className="button button_white_outline" href="/brochure">
                詳しい資料を見る
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="field_lp_heading">導入事例</h2>
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
                </ul>
                <div className="case_title">
                  しっかりとした工程管理ができるようになりました
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
                </ul>
                <div className="case_title">
                  現場とオフィスの情報共有がスムーズになりました
                </div>
                <div className="case_company">ティーブライト 様</div>
              </div>
            </Link>
          </div>
          <div className="field_lp_cta">
            <span className="field_lp_cta_note">2週間無料トライアル</span>
            <div className="field_lp_cta_buttons">
              <a
                className="button button_accent"
                href="https://kenkou-kanri.jp/auth/signup/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                無料で試してみる
              </a>
              <Link className="button button_outline" href="/brochure">
                詳しい資料を見る
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="field_lp_support">
        <div className="container">
          <h2 className="field_lp_heading">
            いつでも、何回でも、導入支援を行います
          </h2>
          <div className="field_lp_support_grid">
            <div className="field_lp_support_item">
              <div className="field_lp_support_icon">
                <img src="/genbakanri/support01.svg" alt="" />
              </div>
              <h3>基本操作の設定支援</h3>
              <p>
                アカウント登録、スタッフ/顧客/車両機材の登録まで、専任スタッフが一緒に進めます。
              </p>
            </div>
            <div className="field_lp_support_item">
              <div className="field_lp_support_icon">
                <img src="/genbakanri/support02.svg" alt="" />
              </div>
              <h3>管理者・スタッフ研修</h3>
              <p>
                管理者から現場スタッフまで、立場に合わせた使い方を研修します。
              </p>
            </div>
            <div className="field_lp_support_item">
              <div className="field_lp_support_icon">
                <img src="/genbakanri/support03.svg" alt="" />
              </div>
              <h3>導入・運用のご相談</h3>
              <p>
                導入後の運用でお困りの際も、チャット・電話でいつでもご相談いただけます。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="service_price_section">
        <div className="container">
          <div className="service_price_inner">
            <span className="badge field">料金プラン</span>
            <h2 className="section_title">建工管理 現場管理 料金</h2>
            <div className="pricing_tab_wrap">
              <div className="pricing_trial">
                <div>
                  <h4>建工管理 現場管理 — 2週間無料トライアル</h4>
                  <p>
                    クレジットカード不要。STANDARDプランでお試しいただけます。
                  </p>
                </div>
                <a
                  className="button button_accent"
                  href="https://kenkou-kanri.jp/auth/signup/register"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  現場管理を無料で試す →
                </a>
              </div>
              <div className="pricing_tab_wrap">
                <div className="pricing_tab_head field">
                  <h3>現場管理 料金プラン</h3>
                  <p>現場管理とスタッフ・機材管理などを1つにまとめる</p>
                </div>
                <div className="pricing_tab_plans">
                  <div className="pricing_tab_row field_plan_list">
                    <div className="pricing_tab_chip">機能</div>
                    <div className="pricing_tab_chip">STANDARD</div>
                    <div className="pricing_tab_chip highlight">PRO</div>
                    <div className="pricing_tab_chip">PREMIUM</div>
                  </div>
                  <div className="pricing_tab_row field_plan_list"></div>
                  <div className="pricing_tab_row field_plan_list">
                    <div className="pricing_tab_cell label_cell">
                      総アカウント数
                    </div>
                    <div className="pricing_tab_cell">50人まで</div>
                    <div className="pricing_tab_cell highlight_cell">
                      150人まで
                    </div>
                    <div className="pricing_tab_cell">300人まで</div>
                  </div>
                  <div className="pricing_tab_row field_plan_list">
                    <div className="pricing_tab_cell label_cell">
                      管理者アカウント
                    </div>
                    <div className="pricing_tab_cell">10人まで</div>
                    <div className="pricing_tab_cell highlight_cell">
                      20人まで
                    </div>
                    <div className="pricing_tab_cell">30人まで</div>
                  </div>
                  <div className="pricing_tab_row field_plan_list">
                    <div className="pricing_tab_cell label_cell">
                      写真アップロード
                    </div>
                    <div className="pricing_tab_cell">100枚/案件</div>
                    <div className="pricing_tab_cell highlight_cell">
                      200枚/案件
                    </div>
                    <div className="pricing_tab_cell">300枚/案件</div>
                  </div>
                  <div className="pricing_tab_row field_plan_list">
                    <div className="pricing_tab_cell label_cell">
                      資料アップロード
                    </div>
                    <div className="pricing_tab_cell">30枚/案件</div>
                    <div className="pricing_tab_cell highlight_cell">
                      50枚/案件
                    </div>
                    <div className="pricing_tab_cell">100枚/案件</div>
                  </div>
                  <div className="pricing_tab_row field_plan_list">
                    <div className="pricing_tab_cell label_cell">
                      機材・車両登録
                    </div>
                    <div className="pricing_tab_cell">50台まで</div>
                    <div className="pricing_tab_cell highlight_cell">
                      150台まで
                    </div>
                    <div className="pricing_tab_cell">300台まで</div>
                  </div>
                  <div className="pricing_tab_row field_plan_list">
                    <div className="pricing_tab_cell label_cell">
                      ガントチャート
                    </div>
                    <div className="pricing_tab_cell check_cell">✓</div>
                    <div className="pricing_tab_cell check_cell highlight_cell">
                      ✓
                    </div>
                    <div className="pricing_tab_cell check_cell">✓</div>
                  </div>
                  <div className="pricing_tab_row field_plan_list">
                    <div className="pricing_tab_cell label_cell">
                      現場MAP機能
                    </div>
                    <div className="pricing_tab_cell check_cell">✓</div>
                    <div className="pricing_tab_cell check_cell highlight_cell">
                      ✓
                    </div>
                    <div className="pricing_tab_cell check_cell">✓</div>
                  </div>
                  <div className="pricing_tab_row field_plan_list">
                    <div className="pricing_tab_cell label_cell">
                      日報・予定人工
                    </div>
                    <div className="pricing_tab_cell check_cell">✓</div>
                    <div className="pricing_tab_cell check_cell highlight_cell">
                      ✓
                    </div>
                    <div className="pricing_tab_cell check_cell">✓</div>
                  </div>
                  <div className="pricing_tab_row field_plan_list">
                    <div className="pricing_tab_cell label_cell">サポート</div>
                    <div className="pricing_tab_cell check_cell">✓</div>
                    <div className="pricing_tab_cell check_cell highlight_cell">
                      ✓
                    </div>
                    <div className="pricing_tab_cell check_cell">✓</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="price_note">
              ※表示価格はすべて税別です。2週間STANDARDプランを無料でお試しいただけます。※資料請求してください。※プランを変更すると、下位のプランに変更することはできません。
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
