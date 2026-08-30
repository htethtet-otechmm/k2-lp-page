/** @format */
import Link from "next/link";
export default function AdminContent() {
  return (
    <div className="route_page">
      <div className="admin_layout">
        <div className="admin_sidebar">
          <div className="admin_sidebar_brand">
            <div className="admin_sidebar_brand_name">建工管理</div>
            <div className="admin_sidebar_brand_sub">管理画面</div>
          </div>
          <div className="admin_sidebar_label">コンテンツ管理</div>
          <div
            className="admin_nav_item is_on"
            id="admin_nav_cases"
            data-admin-nav="cases"
          >
            📋 導入事例
            <span className="admin_nav_badge">12</span>
          </div>
          <div
            className="admin_nav_item"
            id="admin_nav_tags"
            data-admin-nav="tags"
          >
            🏷️ タグ・カテゴリ
            <span className="admin_nav_badge">8</span>
          </div>
          <div
            className="admin_nav_item"
            id="admin_nav_features"
            data-admin-nav="features"
          >
            ⚙️ 機能詳細
            <span className="admin_nav_badge">6</span>
          </div>
          <div
            className="admin_nav_item"
            id="admin_nav_pricing"
            data-admin-nav="pricing"
          >
            💴 料金プラン
            <span className="admin_nav_badge">3</span>
          </div>
          <div className="admin_separator"></div>
          <div className="admin_sidebar_label">その他</div>
          <div className="admin_nav_item">👤 お客様情報</div>
          <div className="admin_nav_item">✉️ お問い合わせ</div>
          <div className="admin_separator"></div>
          <div className="admin_sidebar_label">設定</div>
          <div className="admin_nav_item">🌐 サイト設定</div>
          <div className="admin_nav_item">🔑 管理者設定</div>
          <div className="admin_separator"></div>
          <Link className="admin_nav_item" href="/">
            ← サイトに戻る
          </Link>
        </div>
        <div className="admin_main">
          <div className="admin_panel active" id="admin_panel_cases_list">
            <div className="admin_topbar">
              <div className="admin_page_title">📋 導入事例 管理</div>
              <div className="flex_gap_9">
                <button className="admin_button admin_button_outline">
                  CSVエクスポート
                </button>
                <button
                  className="admin_button admin_button_primary"
                  data-admin-panel="admin_panel_cases_edit"
                >
                  ＋ 新規作成
                </button>
              </div>
            </div>
            <div className="admin_stats">
              <div className="admin_stat">
                <div className="admin_stat_label">総事例数</div>
                <div className="admin_stat_value text_field">12</div>
                <div className="admin_stat_sub">前月比 +3</div>
              </div>
              <div className="admin_stat">
                <div className="admin_stat_label">公開中</div>
                <div className="admin_stat_value text_sales">8</div>
                <div className="admin_stat_sub">掲載中</div>
              </div>
              <div className="admin_stat">
                <div className="admin_stat_label">下書き</div>
                <div className="admin_stat_value text_muted">3</div>
                <div className="admin_stat_sub">未公開</div>
              </div>
              <div className="admin_stat">
                <div className="admin_stat_label">レビュー待ち</div>
                <div className="admin_stat_value text_matching">1</div>
                <div className="admin_stat_sub">確認依頼中</div>
              </div>
            </div>
            <div className="admin_filter_bar">
              <input
                className="admin_input admin_filter_search is_compact"
                type="text"
                placeholder="🔍 会社名・タイトルで検索"
              />
              <select className="admin_select">
                <option>すべてのステータス</option>
                <option>公開中</option>
                <option>下書き</option>
                <option>レビュー待ち</option>
              </select>
              <select className="admin_select">
                <option>すべてのサービス</option>
                <option>建工管理 現場管理</option>
                <option>建工管理 販売管理</option>
                <option>建工管理 マッチング</option>
              </select>
            </div>
            <div className="admin_table_wrap">
              <div className="admin_table_head">
                <span>会社名 / タイトル</span>
                <span>サービス</span>
                <span>業種</span>
                <span>ステータス</span>
                <span>更新日</span>
                <span>操作</span>
              </div>
              <div
                className="admin_table_row"
                data-admin-panel="admin_panel_cases_edit"
              >
                <span>
                  <strong className="font_size_16">◯◯工務店</strong>
                  <br />
                  <span className="font_size_13 text_muted_strong">
                    職人20名が工程管理をデジタル化
                  </span>
                </span>
                <span className="font_size_14 text_field text_bold">
                  現場管理
                </span>
                <span className="font_size_14">建築工事業</span>
                <span>
                  <span className="admin_status status_published">公開中</span>
                </span>
                <span className="font_size_14 text_muted_strong">
                  2025/03/15
                </span>
                <span>
                  <button
                    className="admin_button admin_button_outline admin_button_compact"
                    data-admin-panel="admin_panel_cases_edit"
                  >
                    編集
                  </button>
                </span>
              </div>
              <div
                className="admin_table_row"
                data-admin-panel="admin_panel_cases_edit"
              >
                <span>
                  <strong className="font_size_16">△△個人事業主</strong>
                  <br />
                  <span className="font_size_13 text_muted_strong">
                    一人親方が請求業務を自動化
                  </span>
                </span>
                <span className="font_size_14 text_sales text_bold">
                  販売管理
                </span>
                <span className="font_size_14">塗装工事業</span>
                <span>
                  <span className="admin_status status_published">公開中</span>
                </span>
                <span className="font_size_14 text_muted_strong">
                  2025/03/10
                </span>
                <span>
                  <button
                    className="admin_button admin_button_outline admin_button_compact"
                    data-admin-panel="admin_panel_cases_edit"
                  >
                    編集
                  </button>
                </span>
              </div>
              <div
                className="admin_table_row"
                data-admin-panel="admin_panel_cases_edit"
              >
                <span>
                  <strong className="font_size_16">◯◯建設株式会社</strong>
                  <br />
                  <span className="font_size_13 text_muted_strong">
                    マッチングで協力会社ネットワーク拡大
                  </span>
                </span>
                <span className="font_size_14 text_sales_dark text_bold">
                  マッチング
                </span>
                <span className="font_size_14">土木工事業</span>
                <span>
                  <span className="admin_status status_review">
                    レビュー待ち
                  </span>
                </span>
                <span className="font_size_14 text_muted_strong">
                  2025/04/01
                </span>
                <span>
                  <button
                    className="admin_button admin_button_outline admin_button_compact"
                    data-admin-panel="admin_panel_cases_edit"
                  >
                    編集
                  </button>
                </span>
              </div>
              <div
                className="admin_table_row"
                data-admin-panel="admin_panel_cases_edit"
              >
                <span>
                  <strong className="font_size_16">□□工業株式会社</strong>
                  <br />
                  <span className="font_size_13 text_muted_strong">
                    現場管理・販売管理の連携導入
                  </span>
                </span>
                <span className="font_size_14 text_field text_bold">
                  現場+販売
                </span>
                <span className="font_size_14">設備工事業</span>
                <span>
                  <span className="admin_status status_draft">下書き</span>
                </span>
                <span className="font_size_14 text_muted_strong">
                  2025/03/28
                </span>
                <span>
                  <button
                    className="admin_button admin_button_outline admin_button_compact"
                    data-admin-panel="admin_panel_cases_edit"
                  >
                    編集
                  </button>
                </span>
              </div>
            </div>
            <div className="admin_pagination">
              <button className="admin_button admin_button_outline admin_pagination_button">
                ← 前のページ
              </button>
              <span className="font_size_14 text_muted_strong">
                1 / 2 ページ
              </span>
              <button className="admin_button admin_button_outline admin_pagination_button">
                次のページ →
              </button>
            </div>
          </div>
          <div className="admin_panel" id="admin_panel_cases_edit">
            <div className="admin_topbar">
              <div className="flex_center_gap_12">
                <div
                  className="admin_back_button"
                  data-admin-panel="admin_panel_cases_list"
                >
                  ← 一覧に戻る
                </div>
                <div className="admin_page_title">📋 導入事例 編集</div>
              </div>
              <div className="flex_gap_9">
                <button className="admin_button admin_button_outline admin_button_danger">
                  削除
                </button>
                <button className="admin_button admin_button_outline">
                  下書きに保存
                </button>
                <button className="admin_button admin_button_primary">
                  公開する
                </button>
              </div>
            </div>
            <div className="admin_card">
              <div className="admin_section_title">基本情報</div>
              <div className="admin_form_grid">
                <div className="admin_form_group">
                  <label className="admin_form_label">
                    会社名 <span className="required">必須</span>
                  </label>
                  <input
                    className="admin_input"
                    type="text"
                    placeholder="例：有限会社服部庭園 様"
                  />
                </div>
                <div className="admin_form_group">
                  <label className="admin_form_label">業種</label>
                  <select className="admin_select">
                    <option>建築工事業</option>
                    <option>土木工事業</option>
                    <option>内装工事業</option>
                    <option>設備工事業</option>
                    <option>塗装工事業</option>
                    <option>その他</option>
                  </select>
                </div>
                <div className="admin_form_group is_full">
                  <label className="admin_form_label">
                    事例タイトル <span className="required">必須</span>
                  </label>
                  <input
                    className="admin_input"
                    type="text"
                    placeholder="例：どこでも使えて、早くて、ホワイトボードより見やすい。"
                  />
                </div>
                <div className="admin_form_group is_full">
                  <label className="admin_form_label">
                    本文（導入前の課題・解決策・導入後の変化）
                  </label>
                  <textarea
                    className="admin_textarea admin_textarea_large"
                    placeholder="導入前の課題、解決策、導入後の変化について記述してください…"
                  ></textarea>
                </div>
                <div className="admin_form_group">
                  <label className="admin_form_label">
                    お客様の声（引用コメント）
                  </label>
                  <textarea
                    className="admin_textarea"
                    placeholder="「〜ようになりました。」— ◯◯担当者"
                  ></textarea>
                </div>
                <div className="admin_form_group">
                  <label className="admin_form_label">会社規模・従業員数</label>
                  <input
                    className="admin_input"
                    type="text"
                    placeholder="例：従業員20名"
                  />
                </div>
              </div>
            </div>
            <div className="admin_card">
              <div className="admin_section_title">分類・タグ</div>
              <div className="admin_form_grid">
                <div className="admin_form_group">
                  <label className="admin_form_label">
                    対象サービス <span className="required">必須</span>
                  </label>
                  <select className="admin_select">
                    <option>建工管理 現場管理</option>
                    <option>建工管理 販売管理</option>
                    <option>建工管理 マッチング</option>
                    <option>現場管理 + 販売管理</option>
                  </select>
                </div>
                <div className="admin_form_group">
                  <label className="admin_form_label">ステータス</label>
                  <select className="admin_select">
                    <option>下書き</option>
                    <option>レビュー待ち</option>
                    <option>公開中</option>
                  </select>
                </div>
                <div className="admin_form_group is_full">
                  <label className="admin_form_label">タグ（カテゴリ）</label>
                  <div className="admin_tag_editor">
                    <span className="admin_tag_chip is_field">工程管理 ×</span>
                    <span className="admin_tag_chip is_sales">DX推進 ×</span>
                    <input
                      className="admin_input admin_tag_input"
                      type="text"
                      placeholder="＋ タグを追加"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="admin_card">
              <div className="admin_section_title">画像</div>
              <div className="admin_form_grid">
                <div className="admin_form_group">
                  <label className="admin_form_label">サムネイル画像</label>
                  <div className="admin_upload">
                    <div className="admin_upload_icon">🖼️</div>
                    <div className="admin_upload_label">
                      クリックして画像をアップロード
                    </div>
                    <div className="admin_upload_sub">
                      PNG / JPG / WebP・推奨サイズ：800×600px
                    </div>
                  </div>
                </div>
                <div className="admin_form_group">
                  <label className="admin_form_label">
                    導入事例ヒーロー画像（任意）
                  </label>
                  <div className="admin_upload">
                    <div className="admin_upload_icon">📷</div>
                    <div className="admin_upload_label">
                      クリックして画像をアップロード
                    </div>
                    <div className="admin_upload_sub">
                      PNG / JPG / WebP・推奨サイズ：1200×600px
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="admin_form_footer">
              <button
                className="admin_button admin_button_outline"
                data-admin-panel="admin_panel_cases_list"
              >
                キャンセル
              </button>
              <button className="admin_button admin_button_outline">
                下書きに保存
              </button>
              <button className="admin_button admin_button_primary">
                公開して保存 →
              </button>
            </div>
          </div>
          <div className="admin_panel" id="admin_panel_tags_list">
            <div className="admin_topbar">
              <div className="admin_page_title">🏷️ タグ・カテゴリ 管理</div>
              <div className="flex_gap_9">
                <button
                  className="admin_button admin_button_primary"
                  data-admin-panel="admin_panel_tags_edit"
                >
                  ＋ 新規作成
                </button>
              </div>
            </div>
            <div className="admin_stats grid_3col">
              <div className="admin_stat">
                <div className="admin_stat_label">総タグ数</div>
                <div className="admin_stat_value text_field">8</div>
                <div className="admin_stat_sub">登録済み</div>
              </div>
              <div className="admin_stat">
                <div className="admin_stat_label">使用中タグ</div>
                <div className="admin_stat_value text_sales">6</div>
                <div className="admin_stat_sub">記事に紐付け済み</div>
              </div>
              <div className="admin_stat">
                <div className="admin_stat_label">未使用タグ</div>
                <div className="admin_stat_value text_muted">2</div>
                <div className="admin_stat_sub">紐付けなし</div>
              </div>
            </div>
            <div className="admin_filter_bar">
              <input
                className="admin_input admin_filter_search"
                type="text"
                placeholder="🔍 タグ名で検索"
              />
              <select className="admin_select">
                <option>すべてのカラー</option>
                <option>k2（ブルー）</option>
                <option>s1（グリーン）</option>
                <option>m2（イエロー）</option>
              </select>
            </div>
            <div className="admin_table_wrap">
              <div className="admin_table_head tags_header">
                <span>タグ名</span>
                <span>カラー</span>
                <span>使用記事数</span>
                <span>操作</span>
              </div>
              <div
                className="admin_table_row tags_row"
                data-admin-panel="admin_panel_tags_edit"
              >
                <span>
                  <span className="badge_pill_field">工程管理</span>
                </span>
                <span>
                  <span className="font_size_14 text_bold text_field">
                    k2 ブルー
                  </span>
                </span>
                <span className="font_size_16 text_bold">5件</span>
                <span>
                  <button
                    className="admin_button admin_button_outline admin_button_compact"
                    data-admin-panel="admin_panel_tags_edit"
                  >
                    編集
                  </button>
                </span>
              </div>
              <div
                className="admin_table_row tags_row"
                data-admin-panel="admin_panel_tags_edit"
              >
                <span>
                  <span className="badge_pill_sales">DX推進</span>
                </span>
                <span>
                  <span className="font_size_14 text_bold text_sales">
                    s1 グリーン
                  </span>
                </span>
                <span className="font_size_16 text_bold">4件</span>
                <span>
                  <button
                    className="admin_button admin_button_outline admin_button_compact"
                    data-admin-panel="admin_panel_tags_edit"
                  >
                    編集
                  </button>
                </span>
              </div>
              <div
                className="admin_table_row tags_row"
                data-admin-panel="admin_panel_tags_edit"
              >
                <span>
                  <span className="badge_pill_matching">請求・書類</span>
                </span>
                <span>
                  <span className="admin_tag_color is_matching">
                    m2 イエロー
                  </span>
                </span>
                <span className="font_size_16 text_bold">3件</span>
                <span>
                  <button
                    className="admin_button admin_button_outline admin_button_compact"
                    data-admin-panel="admin_panel_tags_edit"
                  >
                    編集
                  </button>
                </span>
              </div>
              <div
                className="admin_table_row tags_row"
                data-admin-panel="admin_panel_tags_edit"
              >
                <span>
                  <span className="badge_pill_field">協力会社</span>
                </span>
                <span>
                  <span className="font_size_14 text_bold text_field">
                    k2 ブルー
                  </span>
                </span>
                <span className="font_size_16 text_bold">3件</span>
                <span>
                  <button
                    className="admin_button admin_button_outline admin_button_compact"
                    data-admin-panel="admin_panel_tags_edit"
                  >
                    編集
                  </button>
                </span>
              </div>
              <div
                className="admin_table_row tags_row"
                data-admin-panel="admin_panel_tags_edit"
              >
                <span>
                  <span className="badge_pill_sales">一人親方</span>
                </span>
                <span>
                  <span className="font_size_14 text_bold text_sales">
                    s1 グリーン
                  </span>
                </span>
                <span className="font_size_16 text_bold">2件</span>
                <span>
                  <button
                    className="admin_button admin_button_outline admin_button_compact"
                    data-admin-panel="admin_panel_tags_edit"
                  >
                    編集
                  </button>
                </span>
              </div>
              <div
                className="admin_table_row tags_row"
                data-admin-panel="admin_panel_tags_edit"
              >
                <span>
                  <span className="admin_tag_chip is_muted">情報共有</span>
                </span>
                <span>
                  <span className="admin_tag_color is_muted">未設定</span>
                </span>
                <span className="admin_empty_count">0件</span>
                <span>
                  <button
                    className="admin_button admin_button_outline admin_button_compact"
                    data-admin-panel="admin_panel_tags_edit"
                  >
                    編集
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="admin_panel" id="admin_panel_tags_edit">
            <div className="admin_topbar">
              <div className="flex_center_gap_12">
                <div
                  className="admin_back_button"
                  data-admin-panel="admin_panel_tags_list"
                >
                  ← 一覧に戻る
                </div>
                <div className="admin_page_title">🏷️ タグ 編集</div>
              </div>
              <div className="flex_gap_9">
                <button className="admin_button admin_button_outline admin_button_danger">
                  削除
                </button>
                <button className="admin_button admin_button_primary">
                  保存する
                </button>
              </div>
            </div>
            <div className="admin_card">
              <div className="admin_section_title">タグ情報</div>
              <div className="admin_form_grid">
                <div className="admin_form_group">
                  <label className="admin_form_label">
                    タグ名 <span className="required">必須</span>
                  </label>
                  <input
                    className="admin_input"
                    type="text"
                    placeholder="例：工程管理"
                    defaultValue="工程管理"
                  />
                </div>
                <div className="admin_form_group">
                  <label className="admin_form_label">
                    スラッグ（URL用） <span className="required">必須</span>
                  </label>
                  <input
                    className="admin_input"
                    type="text"
                    placeholder="例：koutei-kanri"
                    defaultValue="koutei-kanri"
                  />
                  <span className="admin_help_text">
                    /cases?tag=koutei-kanri のように使われます
                  </span>
                </div>
                <div className="admin_form_group is_full">
                  <label className="admin_form_label">カラーテーマ</label>
                  <div className="admin_color_swatch" id="tag_color_swatch">
                    <div
                      className="admin_color_option is_selected is_field"
                      data-tag-color="field"
                    >
                      k2（ブルー）
                    </div>
                    <div
                      className="admin_color_option is_sales"
                      data-tag-color="sales"
                    >
                      s1（グリーン）
                    </div>
                    <div
                      className="admin_color_option is_matching"
                      data-tag-color="matching"
                    >
                      m2（イエロー）
                    </div>
                    <div
                      className="admin_color_option is_muted"
                      data-tag-color="gray"
                    >
                      グレー（デフォルト）
                    </div>
                  </div>
                </div>
                <div className="admin_form_group is_full">
                  <label className="admin_form_label">プレビュー</label>
                  <div className="admin_tag_preview_panel">
                    <span className="admin_tag_preview" id="tag_preview">
                      工程管理
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="admin_form_footer">
              <button
                className="admin_button admin_button_outline"
                data-admin-panel="admin_panel_tags_list"
              >
                キャンセル
              </button>
              <button className="admin_button admin_button_primary">
                保存する →
              </button>
            </div>
          </div>
          <div className="admin_panel" id="admin_panel_features_list">
            <div className="admin_topbar">
              <div className="admin_page_title">⚙️ 機能詳細 管理</div>
              <div className="flex_gap_9">
                <button
                  className="admin_button admin_button_primary"
                  data-admin-panel="admin_panel_features_edit"
                >
                  ＋ 新規作成
                </button>
              </div>
            </div>
            <div className="admin_stats grid_3col">
              <div className="admin_stat">
                <div className="admin_stat_label">現場管理</div>
                <div className="admin_stat_value text_field">3</div>
                <div className="admin_stat_sub">登録済み機能</div>
              </div>
              <div className="admin_stat">
                <div className="admin_stat_label">販売管理</div>
                <div className="admin_stat_value text_sales">2</div>
                <div className="admin_stat_sub">登録済み機能</div>
              </div>
              <div className="admin_stat">
                <div className="admin_stat_label">マッチング</div>
                <div className="admin_stat_value text_sales_dark">2</div>
                <div className="admin_stat_sub">登録済み機能</div>
              </div>
            </div>
            <div className="admin_filter_bar">
              <input
                className="admin_input admin_filter_search"
                type="text"
                placeholder="🔍 機能名で検索"
              />
              <select className="admin_select">
                <option>すべてのサービス</option>
                <option>建工管理 現場管理</option>
                <option>建工管理 販売管理</option>
                <option>建工管理 マッチング</option>
              </select>
            </div>
            <div className="admin_table_wrap">
              <div className="admin_table_head feature_header">
                <span>No.</span>
                <span>機能タイトル</span>
                <span>対象サービス</span>
                <span>操作</span>
              </div>
              <div
                className="admin_table_row feature_row"
                data-admin-panel="admin_panel_features_edit"
              >
                <span className="font_size_13 text_bold text_muted">
                  FEATURE 01
                </span>
                <span>
                  <strong className="font_size_16">
                    ガントチャート工程管理
                  </strong>
                  <br />
                  <span className="font_size_13 text_muted_strong">
                    現場の工程をリアルタイムで共有・管理
                  </span>
                </span>
                <span>
                  <span className="font_size_14 text_field text_bold">
                    現場管理
                  </span>
                </span>
                <span>
                  <button
                    className="admin_button admin_button_outline admin_button_compact"
                    data-admin-panel="admin_panel_features_edit"
                  >
                    編集
                  </button>
                </span>
              </div>
              <div
                className="admin_table_row feature_row"
                data-admin-panel="admin_panel_features_edit"
              >
                <span className="font_size_13 text_bold text_muted">
                  FEATURE 02
                </span>
                <span>
                  <strong className="font_size_16">出勤・勤怠管理</strong>
                  <br />
                  <span className="font_size_13 text_muted_strong">
                    GPSスタンプで正確な出退勤を記録
                  </span>
                </span>
                <span>
                  <span className="font_size_14 text_field text_bold">
                    現場管理
                  </span>
                </span>
                <span>
                  <button
                    className="admin_button admin_button_outline admin_button_compact"
                    data-admin-panel="admin_panel_features_edit"
                  >
                    編集
                  </button>
                </span>
              </div>
              <div
                className="admin_table_row feature_row"
                data-admin-panel="admin_panel_features_edit"
              >
                <span className="font_size_13 text_bold text_muted">
                  FEATURE 01
                </span>
                <span>
                  <strong className="font_size_16">見積・請求書自動作成</strong>
                  <br />
                  <span className="font_size_13 text_muted_strong">
                    工事単価マスタから即時作成
                  </span>
                </span>
                <span>
                  <span className="font_size_14 text_sales text_bold">
                    販売管理
                  </span>
                </span>
                <span>
                  <button
                    className="admin_button admin_button_outline admin_button_compact"
                    data-admin-panel="admin_panel_features_edit"
                  >
                    編集
                  </button>
                </span>
              </div>
              <div
                className="admin_table_row feature_row"
                data-admin-panel="admin_panel_features_edit"
              >
                <span className="font_size_13 text_bold text_muted">
                  FEATURE 01
                </span>
                <span>
                  <strong className="font_size_16">
                    エリア・工種別 検索機能
                  </strong>
                  <br />
                  <span className="font_size_13 text_muted_strong">
                    全国対応のマッチングプラットフォーム
                  </span>
                </span>
                <span>
                  <span className="font_size_14 text_sales_dark text_bold">
                    マッチング
                  </span>
                </span>
                <span>
                  <button
                    className="admin_button admin_button_outline admin_button_compact"
                    data-admin-panel="admin_panel_features_edit"
                  >
                    編集
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="admin_panel" id="admin_panel_features_edit">
            <div className="admin_topbar">
              <div className="flex_center_gap_12">
                <div
                  className="admin_back_button"
                  data-admin-panel="admin_panel_features_list"
                >
                  ← 一覧に戻る
                </div>
                <div className="admin_page_title">⚙️ 機能詳細 編集</div>
              </div>
              <div className="flex_gap_9">
                <button className="admin_button admin_button_outline admin_button_danger">
                  削除
                </button>
                <button className="admin_button admin_button_primary">
                  保存する
                </button>
              </div>
            </div>
            <div className="admin_card">
              <div className="admin_section_title">基本情報</div>
              <div className="admin_form_grid">
                <div className="admin_form_group">
                  <label className="admin_form_label">機能番号</label>
                  <input
                    className="admin_input"
                    type="text"
                    placeholder="例：FEATURE 01"
                    defaultValue="FEATURE 01"
                  />
                </div>
                <div className="admin_form_group">
                  <label className="admin_form_label">
                    対象サービス <span className="required">必須</span>
                  </label>
                  <select className="admin_select">
                    <option>建工管理 現場管理</option>
                    <option>建工管理 販売管理</option>
                    <option>建工管理 マッチング</option>
                  </select>
                </div>
                <div className="admin_form_group is_full">
                  <label className="admin_form_label">
                    機能タイトル <span className="required">必須</span>
                  </label>
                  <input
                    className="admin_input"
                    type="text"
                    placeholder="例：ガントチャート工程管理"
                    defaultValue="ガントチャート工程管理"
                  />
                </div>
                <div className="admin_form_group is_full">
                  <label className="admin_form_label">説明文</label>
                  <textarea
                    className="admin_textarea"
                    placeholder="この機能の説明を入力してください…"
                  >
                    現場の工程をリアルタイムで共有・管理できます。
                  </textarea>
                </div>
              </div>
            </div>
            <div className="admin_card">
              <div className="admin_section_title">ポイント（箇条書き）</div>
              <div className="admin_points_list" id="feature_points_list">
                <div className="admin_points_row">
                  <input
                    className="admin_input"
                    type="text"
                    placeholder="例：ガントチャートでリアルタイム工程共有"
                    defaultValue="ガントチャートでリアルタイム工程共有"
                  />
                  <button
                    className="admin_remove_button"
                    data-remove-row="true"
                  >
                    ×
                  </button>
                </div>
                <div className="admin_points_row">
                  <input
                    className="admin_input"
                    type="text"
                    placeholder="例：変更があれば全員に即通知"
                    defaultValue="変更があれば全員に即通知"
                  />
                  <button
                    className="admin_remove_button"
                    data-remove-row="true"
                  >
                    ×
                  </button>
                </div>
                <div className="admin_points_row">
                  <input
                    className="admin_input"
                    type="text"
                    placeholder="例：スマホアプリでどこでも確認"
                  />
                  <button
                    className="admin_remove_button"
                    data-remove-row="true"
                  >
                    ×
                  </button>
                </div>
              </div>
              <div className="admin_points_add" data-add-row="feat-pts-list">
                ＋ ポイントを追加
              </div>
            </div>
            <div className="admin_card">
              <div className="admin_section_title">画像</div>
              <div className="admin_form_grid">
                <div className="admin_form_group is_full">
                  <label className="admin_form_label">
                    機能紹介画像 / モックアップ
                  </label>
                  <div className="admin_upload">
                    <div className="admin_upload_icon">🖼️</div>
                    <div className="admin_upload_label">
                      クリックして画像をアップロード
                    </div>
                    <div className="admin_upload_sub">
                      PNG / JPG / WebP・推奨サイズ：900×600px
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="admin_form_footer">
              <button
                className="admin_button admin_button_outline"
                data-admin-panel="admin_panel_features_list"
              >
                キャンセル
              </button>
              <button className="admin_button admin_button_primary">
                保存する →
              </button>
            </div>
          </div>
          <div className="admin_panel" id="admin_panel_pricing_list">
            <div className="admin_topbar">
              <div className="admin_page_title">💴 料金プラン 管理</div>
              <div className="flex_gap_9">
                <button
                  className="admin_button admin_button_primary"
                  data-admin-panel="admin_panel_pricing_edit"
                >
                  ＋ 新規作成
                </button>
              </div>
            </div>
            <div className="admin_stats grid_3col">
              <div className="admin_stat">
                <div className="admin_stat_label">現場管理プラン数</div>
                <div className="admin_stat_value text_field">3</div>
                <div className="admin_stat_sub">STANDARD / PRO / PREMIUM</div>
              </div>
              <div className="admin_stat">
                <div className="admin_stat_label">販売管理 料金</div>
                <div className="admin_stat_value text_sales">従量</div>
                <div className="admin_stat_sub">基本+アカウント単価</div>
              </div>
              <div className="admin_stat">
                <div className="admin_stat_label">マッチング</div>
                <div className="admin_stat_value text_sales_dark">¥0</div>
                <div className="admin_stat_sub">完全無料</div>
              </div>
            </div>
            <div className="admin_table_wrap">
              <div className="admin_table_head pricing_header_cell">
                <span>プラン名</span>
                <span>月額料金</span>
                <span>対象サービス</span>
                <span>操作</span>
              </div>
              <div
                className="admin_table_row pricing_row_cell"
                data-admin-panel="admin_panel_pricing_edit"
              >
                <span>
                  <strong className="font_size_16">STANDARD</strong>
                </span>
                <span>
                  <span className="font_size_14 text_field text_bold">
                    現場管理
                  </span>
                </span>
                <span>
                  <button
                    className="admin_button admin_button_outline admin_button_compact"
                    data-admin-panel="admin_panel_pricing_edit"
                  >
                    編集
                  </button>
                </span>
              </div>
              <div
                className="admin_table_row pricing_row_cell"
                data-admin-panel="admin_panel_pricing_edit"
              >
                <span>
                  <strong className="font_size_16">
                    PRO <span className="admin_popular_badge">人気</span>
                  </strong>
                </span>
                <span>
                  <span className="font_size_14 text_field text_bold">
                    現場管理
                  </span>
                </span>
                <span>
                  <button
                    className="admin_button admin_button_outline admin_button_compact"
                    data-admin-panel="admin_panel_pricing_edit"
                  >
                    編集
                  </button>
                </span>
              </div>
              <div
                className="admin_table_row pricing_row_cell"
                data-admin-panel="admin_panel_pricing_edit"
              >
                <span>
                  <strong className="font_size_16">PREMIUM</strong>
                </span>
                <span>
                  <span className="font_size_14 text_field text_bold">
                    現場管理
                  </span>
                </span>
                <span>
                  <button
                    className="admin_button admin_button_outline admin_button_compact"
                    data-admin-panel="admin_panel_pricing_edit"
                  >
                    編集
                  </button>
                </span>
              </div>
              <div
                className="admin_table_row pricing_row_cell"
                data-admin-panel="admin_panel_pricing_edit"
              >
                <span>
                  <strong className="font_size_16">販売管理（従量）</strong>
                </span>
                <span className="font_size_16 text_bold">
                  ¥30,000〜
                  <span className="font_size_11 text_normal text_muted_strong">
                    /月
                  </span>
                </span>
                <span>
                  <span className="font_size_14 text_sales text_bold">
                    販売管理
                  </span>
                </span>
                <span>
                  <button
                    className="admin_button admin_button_outline admin_button_compact"
                    data-admin-panel="admin_panel_pricing_edit"
                  >
                    編集
                  </button>
                </span>
              </div>
              <div
                className="admin_table_row pricing_row_cell"
                data-admin-panel="admin_panel_pricing_edit"
              >
                <span>
                  <strong className="font_size_16">マッチング（無料）</strong>
                </span>
                <span className="admin_matching_price">
                  ¥0
                  <span className="font_size_11 text_normal text_muted_strong">
                    {" "}
                    完全無料
                  </span>
                </span>
                <span>
                  <span className="font_size_14 text_sales_dark text_bold">
                    マッチング
                  </span>
                </span>
                <span>
                  <button
                    className="admin_button admin_button_outline admin_button_compact"
                    data-admin-panel="admin_panel_pricing_edit"
                  >
                    編集
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="admin_panel" id="admin_panel_pricing_edit">
            <div className="admin_topbar">
              <div className="flex_center_gap_12">
                <div
                  className="admin_back_button"
                  data-admin-panel="admin_panel_pricing_list"
                >
                  ← 一覧に戻る
                </div>
                <div className="admin_page_title">💴 料金プラン 編集</div>
              </div>
              <div className="flex_gap_9">
                <button className="admin_button admin_button_outline admin_button_danger">
                  削除
                </button>
                <button className="admin_button admin_button_primary">
                  保存する
                </button>
              </div>
            </div>
            <div className="admin_card">
              <div className="admin_section_title">プラン基本情報</div>
              <div className="admin_form_grid">
                <div className="admin_form_group">
                  <label className="admin_form_label">
                    プラン名 <span className="required">必須</span>
                  </label>
                  <input
                    className="admin_input"
                    type="text"
                    placeholder="例：PRO"
                    defaultValue="PRO"
                  />
                </div>
                <div className="admin_form_group">
                  <label className="admin_form_label">
                    対象サービス <span className="required">必須</span>
                  </label>
                  <select className="admin_select">
                    <option>建工管理 現場管理</option>
                    <option>建工管理 販売管理</option>
                    <option>建工管理 マッチング</option>
                  </select>
                </div>
                <div className="admin_form_group">
                  <label className="admin_form_label">
                    月額料金（円・税別） <span className="required">必須</span>
                  </label>
                  <input
                    className="admin_input"
                    type="number"
                    placeholder="例：26800"
                    defaultValue="26800"
                  />
                </div>
                <div className="admin_form_group">
                  <label className="admin_form_label">
                    総アカウント数（上限）
                  </label>
                  <input
                    className="admin_input"
                    type="text"
                    placeholder="例：150人まで"
                    defaultValue="150人まで"
                  />
                </div>
                <div className="admin_form_group">
                  <label className="admin_form_label">管理者アカウント数</label>
                  <input
                    className="admin_input"
                    type="text"
                    placeholder="例：20人まで"
                    defaultValue="20人まで"
                  />
                </div>
                <div className="admin_form_group">
                  <label className="admin_form_label">
                    初期費用（円・税別）
                  </label>
                  <input
                    className="admin_input"
                    type="number"
                    placeholder="例：100000"
                    defaultValue="100000"
                  />
                </div>
                <div className="admin_form_group is_full">
                  <label className="admin_form_label">プラン説明文</label>
                  <textarea
                    className="admin_textarea"
                    placeholder="このプランの特徴・対象ユーザーなどを入力…"
                  >
                    中規模チームに最適。工程・出勤・書類・写真共有まですべて込み。
                  </textarea>
                </div>
                <div className="admin_form_group">
                  <label className="admin_form_label">
                    おすすめ表示（ハイライト）
                  </label>
                  <select className="admin_select">
                    <option>なし</option>
                    <option selected>おすすめ（ハイライト表示）</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="admin_card">
              <div className="admin_section_title">
                含まれる機能（チェックボックス）
              </div>
              <div className="admin_check_grid">
                <label className="admin_check_item">
                  <input type="checkbox" defaultChecked />{" "}
                  ガントチャート工程管理
                </label>
                <label className="admin_check_item">
                  <input type="checkbox" defaultChecked />{" "}
                  出勤・勤怠管理（GPSスタンプ）
                </label>
                <label className="admin_check_item">
                  <input type="checkbox" defaultChecked /> 書類・写真共有
                </label>
                <label className="admin_check_item">
                  <input type="checkbox" defaultChecked /> リアルタイム通知
                </label>
                <label className="admin_check_item">
                  <input type="checkbox" defaultChecked />{" "}
                  モバイルアプリ（iOS/Android）
                </label>
                <label className="admin_check_item">
                  <input type="checkbox" /> AI自動スケジューリング
                </label>
                <label className="admin_check_item">
                  <input type="checkbox" /> 外部システム連携（API）
                </label>
                <label className="admin_check_item">
                  <input type="checkbox" /> 専任カスタマーサクセス
                </label>
                <label className="admin_check_item">
                  <input type="checkbox" defaultChecked />{" "}
                  データエクスポート（CSV）
                </label>
                <label className="admin_check_item">
                  <input type="checkbox" /> 複数現場ダッシュボード
                </label>
              </div>
            </div>
            <div className="admin_form_footer">
              <button
                className="admin_button admin_button_outline"
                data-admin-panel="admin_panel_pricing_list"
              >
                キャンセル
              </button>
              <button className="admin_button admin_button_primary">
                保存する →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
