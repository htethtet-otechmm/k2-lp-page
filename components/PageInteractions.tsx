import { useEffect } from "react";
import { useRouter } from "next/router";

const adminSections: Record<string, string[]> = {
  cases: ["admin_panel_cases_list", "admin_panel_cases_edit"],
  tags: ["admin_panel_tags_list", "admin_panel_tags_edit"],
  features: ["admin_panel_features_list", "admin_panel_features_edit"],
  pricing: ["admin_panel_pricing_list", "admin_panel_pricing_edit"],
};

function showSlider(index: number) {
  document
    .querySelectorAll(
      ".hero_tab_outside_tab, .screen_panel, .hero_slide_description",
    )
    .forEach((element) => element.classList.remove("active"));
  document
    .querySelectorAll(".hero_tab_outside_tab")
    [index]?.classList.add("active");
  document.querySelectorAll(".screen_panel")[index]?.classList.add("active");
  document
    .querySelectorAll(".hero_slide_description")
    [index]?.classList.add("active");
}

function showAdminPanel(panelId: string) {
  Object.values(adminSections)
    .flat()
    .forEach((id) => document.getElementById(id)?.classList.remove("active"));
  document.getElementById(panelId)?.classList.add("active");
  document
    .querySelector<HTMLElement>(".admin_main")
    ?.scrollTo({ top: 0, behavior: "smooth" });
}

export default function PageInteractions() {
  const router = useRouter();
  useEffect(() => {
    let sliderIndex = 0;
    document.querySelector(".hero_slider_wrap")?.classList.add("is_visible");
    showSlider(sliderIndex);
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const slider = target.closest<HTMLElement>("[data-slider]");
      const faq = target.closest<HTMLElement>("[data-faq]");
      const panel = target.closest<HTMLElement>("[data-admin-panel]");
      const nav = target.closest<HTMLElement>("[data-admin-nav]");
      const color = target.closest<HTMLElement>("[data-tag-color]");
      const remove = target.closest<HTMLElement>("[data-remove-row]");
      const add = target.closest<HTMLElement>("[data-add-row]");
      if (slider) {
        sliderIndex = Number(slider.dataset.slider);
        showSlider(sliderIndex);
      }
      if (faq) {
        const item = faq.closest(".faq_item");
        const wasOpen = item?.classList.contains("open");
        document
          .querySelectorAll(".faq_item")
          .forEach((entry) => entry.classList.remove("open"));
        if (!wasOpen) item?.classList.add("open");
      }
      if (panel?.dataset.adminPanel) showAdminPanel(panel.dataset.adminPanel);
      if (nav?.dataset.adminNav) {
        document
          .querySelectorAll(".admin_nav_item")
          .forEach((entry) => entry.classList.remove("is_on"));
        nav.classList.add("is_on");
        showAdminPanel(adminSections[nav.dataset.adminNav][0]);
      }
      if (color) {
        document
          .querySelectorAll(".admin_color_option")
          .forEach((entry) => entry.classList.remove("is_selected"));
        color.classList.add("is_selected");
      }
      if (remove) remove.closest(".admin_points_row")?.remove();
      if (add) {
        const list = document.getElementById("feature_points_list");
        if (list) {
          const row = document.createElement("div");
          const input = document.createElement("input");
          const removeButton = document.createElement("button");

          row.className = "admin_points_row";
          input.className = "admin_input full_width";
          input.type = "text";
          input.placeholder = "ポイントを入力";
          removeButton.className = "admin_remove_button";
          removeButton.dataset.removeRow = "true";
          removeButton.textContent = "×";
          row.append(input, removeButton);
          list.appendChild(row);
        }
      }
    };
    document.addEventListener("click", onClick);
    const sliderTimer =
      router.pathname === "/"
        ? window.setInterval(() => {
            sliderIndex = (sliderIndex + 1) % 3;
            showSlider(sliderIndex);
          }, 5000)
        : undefined;
    return () => {
      document.removeEventListener("click", onClick);
      if (sliderTimer) window.clearInterval(sliderTimer);
    };
  }, [router.pathname]);
  return null;
}
