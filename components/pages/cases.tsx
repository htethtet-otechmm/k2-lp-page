/** @format */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function CasesContent() {
  return (
    <div className="route_page">
      <section className="case_list_hero">
        <div className="container">
          <span className="badge ghost">導入事例・お客様の声</span>
          <h1>
            全国<span className="particle">の</span>建設会社
            <span className="particle">が</span>
            <br />
            建工管理<span className="particle">で</span>変わった
          </h1>
          <p>
            一人親方から中規模建設会社まで、さまざまな導入事例をご紹介します。
          </p>
        </div>
      </section>
      <div className="case_list_filter">
        <div className="container">
          <div className="case_list_filter_inner">
            <input
              className="filter_input"
              type="text"
              placeholder="キーワードで検索（会社名・業種・課題など）"
            />
            <div className="filter_select_wrapper">
              <select className="filter_select">
                <option>業種から選ぶ</option>
                <option>建築工事業</option>
                <option>土木工事業</option>
                <option>内装工事業</option>
                <option>設備工事業</option>
                <option>塗装工事業</option>
              </select>
              <ChevronDown className="filter_select_arrow" aria-hidden="true" />
            </div>
            <div className="filter_select_wrapper">
              <select className="filter_select">
                <option>製品から選ぶ</option>
                <option>建工管理 現場管理</option>
                <option>建工管理 販売管理</option>
                <option>建工管理 マッチング</option>
              </select>
              <ChevronDown className="filter_select_arrow" aria-hidden="true" />
            </div>
            <div className="filter_select_wrapper">
              <select className="filter_select">
                <option>課題から選ぶ</option>
                <option>現場管理の効率化</option>
                <option>請求・書類管理</option>
                <option>協力会社確保</option>
                <option>情報共有</option>
              </select>
              <ChevronDown className="filter_select_arrow" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
      <section className="case_list">
        <div className="container">
          <div className="case_list_grid">
            <Link className="case_list_card" href="/case-detail">
              <div className="case_list_card_image">
                <img src="/case/hattoriteien01.png" alt="" />
              </div>
              <div className="case_list_card_body">
                <ul className="case_list_card_tags">
                  <li className="case_list_card_tag_field">現場管理</li>
                </ul>
                <div className="case_list_card_title">
                  どこでも使えて、早くて、ホワイトボードより見やすい。
                </div>
                <div className="case_list_card_company">
                  有限会社服部庭園 様
                </div>
                <div className="case_list_card_arrow">詳しく見る →</div>
              </div>
            </Link>
            <Link className="case_list_card" href="/case-detail">
              <div className="case_list_card_image">
                <img src="/case/aiesu01.png" alt="" />
              </div>
              <div className="case_list_card_body">
                <ul className="case_list_card_tags">
                  <li className="case_list_card_tag_field">現場管理</li>
                  <li className="case_list_card_tag_sales">販売管理</li>
                </ul>
                <div className="case_list_card_title">
                  シンプルなアプリで、かゆいところに手が届くアプリです。
                </div>
                <div className="case_list_card_company">
                  株式会社アイエス 様
                </div>
                <div className="case_list_card_arrow">詳しく見る →</div>
              </div>
            </Link>
            <Link className="case_list_card" href="/case-detail">
              <div className="case_list_card_image">
                <img src="/case/tbright01.png" alt="" />
              </div>
              <div className="case_list_card_body">
                <ul className="case_list_card_tags">
                  <li className="case_list_card_tag_field">現場管理</li>
                  <li className="case_list_card_tag_matching">マッチング</li>
                </ul>
                <div className="case_list_card_title">
                  従業員全員使いこなせると確信して、導入を決めました。
                </div>
                <div className="case_list_card_company">ティーブライト 様</div>
                <div className="case_list_card_arrow">詳しく見る →</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
