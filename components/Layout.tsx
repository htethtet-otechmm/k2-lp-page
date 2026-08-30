import Link from "next/link";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageInteractions from "@/components/PageInteractions";
import { Icon, IconSprite } from "@/components/Icons";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <IconSprite />
      <Header />
      <aside className="side_cta">
        <Link className="side_button cta_contact" href="/contact">
          <div className="side_icon">
            <Icon name="mail" />
          </div>
          <div>
            <span className="side_sub">お気軽にどうぞ</span>お問い合わせ
          </div>
        </Link>
        <Link className="side_button cta_brochure" href="/brochure">
          <div className="side_icon">
            <Icon name="document" />
          </div>
          <div>
            <span className="side_sub">PDFでご確認いただけます</span>資料請求
          </div>
        </Link>
      </aside>
      <main>{children}</main>
      <Footer />
      <PageInteractions />
    </>
  );
}
