/** @format */
import Link from "next/link";
export default function CommerceContent() {
  return (
    <div className="route_page">
      <section className="section legal_hero">
        <div className="container">
          <h1 className="section_title">特定商取引法に基づく表記</h1>
        </div>
      </section>
      <section className="section legal_body">
        <div className="container legal_container">
          <dl className="legal_definition_list">
            <div className="legal_definition_row">
              <dt className="legal_definition_term">販売事業者名</dt>
              <dd className="legal_definition_description">
                グロースチェンジ株式会社
              </dd>
            </div>
            <div className="legal_definition_row">
              <dt className="legal_definition_term">販売事業者所在地</dt>
              <dd className="legal_definition_description">
                〒492-8448 愛知県稲沢市北麻績町郷前15
              </dd>
            </div>
            <div className="legal_definition_row">
              <dt className="legal_definition_term">
                代表者または運営統括責任者
              </dt>
              <dd className="legal_definition_description">小川 功</dd>
            </div>
            <div className="legal_definition_row">
              <dt className="legal_definition_term">連絡先／ホームページ</dt>
              <dd className="legal_definition_description">
                <a
                  className="legal_link"
                  href="https://growthchange.co.jp/"
                  target="_blank"
                  rel="noopener"
                >
                  https://growthchange.co.jp/
                </a>
              </dd>
            </div>
            <div className="legal_definition_row">
              <dt className="legal_definition_term">月額料金</dt>
              <dd className="legal_definition_description">
                <Link className="legal_link" href="/pricing">
                  料金
                </Link>
                に記載しております
              </dd>
            </div>
            <div className="legal_definition_row">
              <dt className="legal_definition_term">
                月額料金以外に必要な費用／消費税等
              </dt>
              <dd className="legal_definition_description">なし</dd>
            </div>
            <div className="legal_definition_row">
              <dt className="legal_definition_term">支払い方法</dt>
              <dd className="legal_definition_description">クレジットカード</dd>
            </div>
            <div className="legal_definition_row">
              <dt className="legal_definition_term">お支払い時期</dt>
              <dd className="legal_definition_description">
                建工管理は月単位のサービスです。
                <br />
                月額料金は、加入手続きが完了した翌日に最初の請求が発生し、以降毎月同じ日に請求が行われます。
                <br />
                お客様への次回ご請求日は、【ご契約内容の確認・変更】ページの【お支払い方法】でいつでもご覧いただけます。
              </dd>
            </div>
            <div className="legal_definition_row">
              <dt className="legal_definition_term">サービス開始時期</dt>
              <dd className="legal_definition_description">
                有料プラン申請後に提供いたします
              </dd>
            </div>
            <div className="legal_definition_row">
              <dt className="legal_definition_term">解約条件／方法</dt>
              <dd className="legal_definition_description">
                【ご契約内容の確認・変更】ページより、アカウントの削除ボタンをクリックすることで、解約できます。
              </dd>
            </div>
            <div className="legal_definition_row">
              <dt className="legal_definition_term">
                返品の取扱条件／返品期限、返品時の送料負担
              </dt>
              <dd className="legal_definition_description">
                解約料金は発生しない。ただし、以下の場合は当月分は返済しない。
                <br />
                （例）10月1日契約。10月20日解約の場合。
              </dd>
            </div>
            <div className="legal_definition_row">
              <dt className="legal_definition_term">不良品の取扱条件</dt>
              <dd className="legal_definition_description">
                システム不良が発生した場合は、当社のシステム担当者が対応します。
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}
