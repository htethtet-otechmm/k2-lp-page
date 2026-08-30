import "@/styles/global.scss";
import "@/styles/base.scss";
import "@/styles/pages/home.scss";
import "@/styles/pages/about.scss";
import "@/styles/pages/services.scss";
import "@/styles/pages/service-detail.scss";
import "@/styles/pages/pricing.scss";
import "@/styles/pages/forms.scss";
import "@/styles/pages/cases.scss";
import "@/styles/pages/admin.scss";
import "@/styles/pages/home-slider.scss";
import "@/styles/responsive.scss";
import "@/styles/pages/about-visual.scss";
import "@/styles/theme.scss";
import "@/styles/utilities.scss";
import "@/styles/react-helpers.scss";
import "@/styles/pages/field-management.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
