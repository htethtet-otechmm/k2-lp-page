import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Sun, Moon } from "lucide-react";
import styles from "./Header.module.scss";

const navigation = [
  ["TOP", "/"],
  ["建工管理とは", "/about"],
  ["機能", "/services"],
  ["料金", "/pricing"],
  ["導入事例", "/cases"],
];

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 10);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "";
  };
  return (
    <div className={styles.component}>
      <nav
        id="main_navigation"
        className={`${styles.navigation}${scrolled ? " is_scrolled" : ""}`}
      >
        <Link
          className="navigation_logo"
          href="/"
          onClick={() => setOpen(false)}
          aria-label="建工管理"
        >
          <Image
            src="/main_logo.svg"
            alt="建工管理"
            width={180}
            height={44}
            priority
          />
        </Link>
        <div className="navigation_right">
          <div
            className={`navigation_links${open ? " open" : ""}`}
            id="navigation_links"
          >
            {navigation.map(([label, href]) => (
              <Link
                className={router.pathname === href ? "is_current" : ""}
                href={href}
                onClick={() => setOpen(false)}
                key={href}
              >
                {label}
              </Link>
            ))}
            <button
              className="dark_mode_toggle"
              onClick={toggleDark}
              aria-label="ダークモード切替"
            >
              {dark ? <Moon size={24} /> : <Sun size={24} />}
            </button>
          </div>
          <div className="navigation_actions">
            <Link
              className="navigation_login"
              href="/brochure"
              onClick={() => setOpen(false)}
            >
              資料請求
            </Link>
            <Link
              className="navigation_cta"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              お問い合わせ
            </Link>
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
    </div>
  );
}
