import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icons";

const slides = [
  { name: "現場管理", key: "field", image: "/top_k2.png" },
  { name: "販売管理", key: "sales", image: "/top_s1.png" },
  { name: "マッチング", key: "matching", image: "/top_m2.png" },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setActive((n) => (n + 1) % 3), 5000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <section className="hero" id="top">
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
              <Icon name="field" className="hero_badge_icon" />
              <span className="hero_service_badge_name">現場管理</span>
              <span className="hero_service_badge_arrow">→</span>
              <span className="hero_service_badge_desc">
                案件データ・工程表・スタッフなど現場全てをデジタル化
              </span>
            </div>
            <div className="hero_service_badge hero_service_badge_sales">
              <Icon name="sales" className="hero_badge_icon" />
              <span className="hero_service_badge_name">販売管理</span>
              <span className="hero_service_badge_arrow">→</span>
              <span className="hero_service_badge_desc">
                見積書・工事台帳・コスト管理・請求書・入金を一元管理
              </span>
            </div>
            <div className="hero_service_badge hero_service_badge_matching">
              <Icon name="match" className="hero_badge_icon" />
              <span className="hero_service_badge_name">マッチング</span>
              <span className="hero_service_badge_arrow">→</span>
              <span className="hero_service_badge_desc">
                日本全国から検索・自社情報の掲載から案件・仲間探しまで
              </span>
            </div>
          </div>
          <div className="hero_buttons">
            <a
              className="button button_accent hero_button_primary"
              href="#contact"
            >
              お問い合わせ
            </a>
            <a
              className="button button_white_outline hero_button_secondary"
              href="#services"
            >
              資料請求
            </a>
          </div>
        </div>
        <div className="hero_slider_wrap is_visible">
          <div className="hero_tab_outside_tabs">
            {slides.map((slide, i) => (
              <button
                key={slide.name}
                className={`hero_tab_outside_tab app_tab_${slide.key}${i === active ? " active" : ""}`}
                onClick={() => setActive(i)}
              >
                {slide.name}
              </button>
            ))}
          </div>
          <div className="hero_tab_panels">
            {slides.map((slide, i) => (
              <div
                key={slide.name}
                className={`screen_panel${i === active ? " active" : ""}`}
              >
                <Image
                  src={slide.image}
                  alt={`${slide.name}の管理画面`}
                  width={1199}
                  height={620}
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
          <div className="hero_slider_dots">
            {slides.map((slide, i) => (
              <button
                key={slide.name}
                className={`hero_slide_description${i === active ? " active" : ""}`}
                onClick={() => setActive(i)}
                aria-label={slide.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
