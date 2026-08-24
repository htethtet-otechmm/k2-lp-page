import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Challenges from "@/components/Challenges";
import GrowthFlow from "@/components/GrowthFlow";
import Results from "@/components/Results";
import Stories from "@/components/Stories";
import Support from "@/components/Support";
import Footer from "@/components/Footer";
import { Icon, IconSprite } from "@/components/Icons";

export default function Home() {
  return <>
    <Head><title>建工管理 | 建設業の成長を加速するシンプルDX</title><meta name="description" content="現場管理・販売管理・マッチングをワンストップで提供する、建設業のための業務支援サービス。" /><meta name="viewport" content="width=device-width, initial-scale=1" /></Head>
    <IconSprite /><Header />
    <aside className="side_cta" id="side_cta"><a className="side_button cta_contact" href="#contact"><div className="side_icon"><Icon name="mail" /></div><div><span className="side_sub">お気軽にどうぞ</span>お問い合わせ</div></a><a className="side_button cta_brochure" href="#services"><div className="side_icon"><Icon name="document" /></div><div><span className="side_sub">PDFでご確認いただけます</span>資料請求</div></a></aside>
    <main id="page_home" className="page active"><Hero /><Services /><Challenges /><GrowthFlow /><Results /><Stories /><Support /><Footer /></main>
  </>;
}
