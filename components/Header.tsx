import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 10);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);
  const navigate = (
    event: React.MouseEvent<HTMLAnchorElement>,
    target: string,
  ) => {
    event.preventDefault();
    setOpen(false);
    document
      .querySelector(target)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", target);
  };
  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "";
  };
  return (
    <>
      <nav id="main_navigation" className={scrolled ? "is_scrolled" : ""}>
        <a
          className="navigation_logo"
          href="#top"
          onClick={(event) => navigate(event, "#top")}
          aria-label="建工管理"
        >
          <Image
            src="/main_logo.svg"
            alt="建工管理"
            width={180}
            height={44}
            priority
          />
        </a>
        <div className="navigation_right">
          <div
            className={`navigation_links${open ? " open" : ""}`}
            id="navigation_links"
          >
            <a href="#top" onClick={(event) => navigate(event, "#top")}>
              TOP
            </a>
            <a
              href="#services"
              onClick={(event) => navigate(event, "#services")}
            >
              建工管理とは
            </a>
            <a
              href="#services"
              onClick={(event) => navigate(event, "#services")}
            >
              機能
            </a>
            <a href="#results" onClick={(event) => navigate(event, "#results")}>
              料金
            </a>
            <a href="#cases" onClick={(event) => navigate(event, "#cases")}>
              導入事例
            </a>
            <button
              className="dark_mode_toggle"
              onClick={toggleDark}
              aria-label="ダークモード切替"
            >
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            </button>
          </div>
          <div className="navigation_actions">
            <a
              className="navigation_login"
              href="#services"
              onClick={(event) => navigate(event, "#services")}
            >
              <span>資料請求</span>
            </a>
            <a
              className="navigation_cta"
              href="#contact"
              onClick={(event) => navigate(event, "#contact")}
            >
              お問い合わせ
            </a>
          </div>
          <button
            className={`navigation_hamburger${open ? " open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="メニューを開閉"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <button
        className={`navigation_overlay${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
        aria-label="メニューを閉じる"
      />
    </>
  );
}
