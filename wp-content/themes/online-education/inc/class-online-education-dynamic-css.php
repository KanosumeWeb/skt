<?php
/**
 * Online Education dynamic CSS generation file for theme options.
 *
 * Class Online_Education_Dynamic_CSS
 *
 * @package    ThemeGrill
 * @since      1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Online Education dynamic CSS generation file for theme options.
 *
 * Class Online_Education_Dynamic_CSS
 */
class Online_Education_Dynamic_CSS {

	/**
	 * Return dynamic CSS output.
	 *
	 * @param string $dynamic_css          Dynamic CSS.
	 * @param string $dynamic_css_filtered Dynamic CSS Filters.
	 *
	 * @return string Generated CSS.
	 */
	public static function get_css( $dynamic_css = '', $dynamic_css_filtered = '' ) {
		$steps = apply_filters( 'online_education_color_darken_factor', -25 );

		/**
		 * Variable declarations.
		 */
		// Global.
		$primary_color   = get_theme_mod( 'online_education_primary_color', '#FCA311' );
		$base_color      = get_theme_mod( 'online_education_base_color', '#121212' );
		$headings_color  = get_theme_mod( 'online_education_headings_color', '#121212' );
		$container_width = get_theme_mod( 'online_education_container_width', 1170 );
		$sidebar_width   = get_theme_mod( 'online_education_sidebar_width', 25 );

		// Header.
		$logo_height               = get_theme_mod( 'online_education_site_logo_height', '' );
		$site_title_color          = get_theme_mod( 'online_education_site_title_color', '#121212' );
		$site_title_hover_color    = get_theme_mod( 'online_education_site_title_hover_color', '#FCA311' );
		$sec_menu_bg_color         = get_theme_mod( 'online_education_toggle_button_bg_color', '#EBEBEC' );
		$sec_menu_text_color       = get_theme_mod( 'online_education_toggle_button_text_color', '' );
		$sec_menu_text_hover_color = get_theme_mod( 'online_education_toggle_button_text_hover_color', '' );

		// Primary menu.
		$primary_menu_color         = get_theme_mod( 'online_education_primary_menu_color', '' );
		$primary_menu_hover_color   = get_theme_mod( 'online_education_primary_menu_hover_color', '' );
		$primary_menu_active_color  = get_theme_mod( 'online_education_primary_menu_active_color', '' );
		$hamburger_icon_color       = get_theme_mod( 'online_education_hamburger_icon_color', '' );
		$hamburger_icon_hover_color = get_theme_mod( 'online_education_hamburger_icon_hover_color', '' );

		$mobile_menu_color                  = get_theme_mod( 'online_education_mobile_menu_color', '' );
		$mobile_menu_hover_color            = get_theme_mod( 'online_education_mobile_menu_hover_color', '' );
		$mobile_menu_active_color           = get_theme_mod( 'online_education_mobile_menu_active_color', '' );
		$mobile_menu_close_icon_color       = get_theme_mod( 'online_education_mobile_menu_close_icon_color', '' );
		$mobile_menu_close_icon_hover_color = get_theme_mod( 'online_education_mobile_menu_close_icon_hover_color', '' );
		$mobile_menu_bg_color               = get_theme_mod( 'online_education_mobile_menu_bg_color', '' );

		// General.
		$general_background_color = get_theme_mod( 'online_education_secondary_header_bg_color', '' );

		// Sub menu.
		$sub_menu_color            = get_theme_mod( 'online_education_sub_menu_color', '' );
		$sub_menu_hover_color      = get_theme_mod( 'online_education_sub_menu_hover_color', '' );
		$sub_menu_active_color     = get_theme_mod( 'online_education_sub_menu_active_color', '' );
		$sub_menu_background_color = get_theme_mod( 'online_education_sub_menu_bg_color', '' );

		$primary_header_bg_color = get_theme_mod( 'online_education_header_bg_color', '#f8f8f8' );

		// Header button.
		$header_button_text_color             = get_theme_mod( 'online_education_header_button_text_color', '' );
		$header_button_text_hover_color       = get_theme_mod( 'online_education_header_button_text_hover_color', '' );
		$header_button_background_color       = get_theme_mod( 'online_education_header_button_bg_color', '' );
		$header_button_background_hover_color = get_theme_mod( 'online_education_header_button_bg_hover_color', '' );

		$page_header_padding_default        = array(
			'top'    => '1.25em',
			'right'  => '0',
			'bottom' => '1.25em',
			'left'   => '0',
		);
		$page_header_padding                = get_theme_mod( 'online_education_page_header_padding', $page_header_padding_default );
		$page_header_bg_default             = array(
			'background-color'      => '#EBEBEC',
			'background-image'      => '',
			'background-repeat'     => 'repeat',
			'background-position'   => 'top left',
			'background-size'       => 'contain',
			'background-attachment' => 'scroll',
		);
		$page_header_bg                     = get_theme_mod( 'online_education_page_header_bg', $page_header_bg_default );
		$page_header_title_color            = get_theme_mod( 'online_education_page_header_title_color', '' );
		$page_header_breadcrumbs_text_color = get_theme_mod( 'online_education_breadcrumbs_text_color', '' );
		$page_header_separator_color        = get_theme_mod( 'online_education_breadcrumbs_separator_color', '' );
		$page_header_link_color             = get_theme_mod( 'online_education_breadcrumbs_link_color', '' );
		$page_header_link_hover_color       = get_theme_mod( 'online_education_breadcrumbs_link_hover_color', '' );

		// Footer column.
		$footer_col_bg_default            = array(
			'background-color'      => '',
			'background-image'      => '',
			'background-repeat'     => 'repeat',
			'background-position'   => 'center center',
			'background-size'       => 'contain',
			'background-attachment' => 'scroll',
		);
		$footer_col_bg                    = get_theme_mod( 'online_education_footer_column_bg', $footer_col_bg_default );
		$footer_col_heading_color         = get_theme_mod( 'online_education_footer_column_heading_color', '' );
		$footer_col_text_color            = get_theme_mod( 'online_education_footer_column_text_color', '' );
		$footer_col_link_color            = get_theme_mod( 'online_education_footer_column_link_color', '' );
		$footer_col_list_link_color       = get_theme_mod( 'online_education_footer_column_list_link_color', '' );
		$footer_col_list_separator_enable = get_theme_mod( 'online_education_footer_column_list_sep', true );
		$footer_col_list_separator_color  = get_theme_mod( 'online_education_footer_column_list_sep_color', '' );

		// Footer bar.
		$footer_bar_content_alignment = get_theme_mod( 'online_education_footer_bar_content_alignment', 'left' );
		$footer_bar_bg_color          = get_theme_mod( 'online_education_footer_bar_background_color', '' );
		$footer_bar_text_color        = get_theme_mod( 'online_education_footer_bar_text_color', '' );
		$footer_bar_link_color        = get_theme_mod( 'online_education_footer_bar_link_color', '' );

		// Scroll to top.
		$footer_scroll_to_top_width                  = get_theme_mod( 'online_education_scroll_to_top_width', 54 );
		$footer_scroll_to_top_height                 = get_theme_mod( 'online_education_scroll_to_top_height', 54 );
		$footer_scroll_to_top_roundness              = get_theme_mod( 'online_education_scroll_to_top_roundness', 2 );
		$footer_scroll_to_top_icon_size              = get_theme_mod( 'online_education_scroll_to_top_icon_size', 24 );
		$footer_scroll_to_top_background_color       = get_theme_mod( 'online_education_scroll_to_top_bg_color', '' );
		$footer_scroll_to_top_icon_color             = get_theme_mod( 'online_education_scroll_to_top_icon_color', '' );
		$footer_scroll_to_top_background_hover_color = get_theme_mod( 'online_education_scroll_to_top_bg_hover_color', '' );
		$footer_scroll_to_top_icon_hover_color       = get_theme_mod( 'online_education_scroll_to_top_icon_hover_color', '' );

		// Blog.
		$blog_column_gap = get_theme_mod( 'online_education_blog_column_gap', 2 );
		$blog_row_gap    = get_theme_mod( 'online_education_blog_row_gap', 2.5 );

		/**
		 * Generate dynamic CSS.
		 */
		$parse_css = '';

		// Primary Color.
		$primary_color_css = array(
			'a,
			.site-header a:hover,
			.main-navigation li:hover > a,
			.main-navigation li:focus > a,
			.main-navigation li.focus > a,
			.main-navigation .current_page_item > a,
			.main-navigation .current-menu-item > a,
			.main-navigation .current_page_ancestor > a,
			.main-navigation .current-menu-ancestor > a,
			.entry-header a:hover,
			.entry-meta a:hover,
			.tertiary-menu-toggle:hover,
			.tertiary-menu-toggle:focus,
			.ole-page-header .trail-items a:hover,
			.ole-page-header .trail-items a:focus,
			.site-sidebar a:hover,
			.site-sidebar a:focus,
			.site-sidebar .ole-no-widget a,
			.no-results .page-content a,
			.site-footer li a:hover,
			.site-footer li a:focus,
			.post-navigation .nav-next a:hover,
			.post-navigation .nav-next a:focus,
			.post-navigation .nav-previous a:hover,
			.post-navigation .nav-previous a:focus,
			.ole-filter-sidebar-toggle:hover,
			.ole-filter-sidebar-toggle:focus,
			.ole-entry-cta .read-more-text'
			=> array(
				'color' => esc_html( $primary_color ),
			),

			'button, button:hover, button:active, button:focus,
			input[type="button"]:hover,
			input[type="button"]:active,
			input[type="button"]:focus,
			input[type="reset"]:hover,
			input[type="reset"]:active,
			input[type="reset"]:focus,
			input[type="submit"]:hover,
			input[type="submit"]:active,
			input[type="submit"]:focus,
			.wp-block-button__link:hover,
			.wp-block-button__link:active,
			.wp-block-button__link:focus,
			.button:hover,
			.button:active,
			.button:focus,
			.ole-filter-sidebar-toggle:hover,
			.ole-filter-sidebar-toggle:focus,
			.ole-scroll-to-top:hover,
			.entry-footer .ole-entry-cta:hover,
			.entry-footer .ole-entry-cta:active,
			.entry-footer .ole-entry-cta:focus'
			=> array(
				'border-color'     => Online_Education_Utils::adjust_color_brightness( $primary_color, $steps ),
				'background-color' => Online_Education_Utils::adjust_color_brightness( $primary_color, $steps ),
			),

			'button,
			input[type="button"],
			input[type="reset"],
			input[type="submit"],
			.wp-block-button__link,
			.button,
			button:hover, button:active, button:focus,
			input[type="button"]:hover,
			input[type="button"]:active,
			input[type="button"]:focus,
			input[type="reset"]:hover,
			input[type="reset"]:active,
			input[type="reset"]:focus,
			input[type="submit"]:hover,
			input[type="submit"]:active,
			input[type="submit"]:focus,
			.wp-block-button__link:hover,
			.wp-block-button__link:active,
			.wp-block-button__link:focus,
			.button:hover,
			.button:active,
			.button:focus,
			.error-404 .ole-btn,
			.error-404 .ole-btn:hover,
			.error-404 .ole-btn:active,
			.error-404 .ole-btn:focus,
			.page-numbers li:hover > a,
			.page-numbers .current'
			=> array(
				'color' => '#FFF',
			),

			'button,
			input[type="button"],
			input[type="reset"],
			input[type="submit"],
			.wp-block-button__link,
			.button,
			.ole-header-search:hover button,
			.ole-header-search:focus button,
			.page-numbers li:hover > a,
			.page-numbers .current,
			.widget-title::before,
			.ole-scroll-to-top,
			.site-sidebar .widget-title::before,
			.entry-footer .ole-entry-cta'
			=> array(
				'background-color' => esc_html( $primary_color ),
			),

			'input[type="text"],
			input[type="email"],
			input[type="url"],
			input[type="password"],
			input[type="search"],
			input[type="number"],
			input[type="tel"],
			input[type="range"],
			input[type="date"],
			input[type="month"],
			input[type="week"],
			input[type="time"],
			input[type="datetime"],
			input[type="datetime-local"],
			input[type="color"],
			textarea,
			.button,
			.entry-footer .ole-entry-cta'
			=> array(
				'border-color' => esc_html( $primary_color ),
			),

			'.ole-entry-cta .ole-icon,
			.entry-meta .ole-icon,
			.ole-header-search .ole-icon--search,
			.main-navigation li:hover > .ole-submenu-toggle .ole-icon,
			.main-navigation li:focus > .ole-submenu-toggle .ole-icon,
			.main-navigation li.focus > .ole-submenu-toggle .ole-icon,
			.main-navigation .current_page_item > .ole-submenu-toggle .ole-icon,
			.main-navigation .current-menu-item > .ole-submenu-toggle .ole-icon,
			.main-navigation .current_page_ancestor > .ole-submenu-toggle .ole-icon,
			.main-navigation .current-menu-ancestor > .ole-submenu-toggle .ole-icon'
			=> array(
				'fill' => esc_html( $primary_color ),
			),
		);

		$parse_css .= self::parse_css( '#FCA311', $primary_color, $primary_color_css );

		// Base Color.
		$base_color_css = array(
			'body,
			button,
			input,
			select,
			optgroup,
			a:hover,
			a:focus,
			a:active,
			input[type="text"],
			input[type="email"],
			input[type="url"],
			input[type="password"],
			input[type="search"],
			input[type="number"],
			input[type="tel"],
			input[type="range"],
			input[type="date"],
			input[type="month"],
			input[type="week"],
			input[type="time"],
			input[type="datetime"],
			input[type="datetime-local"],
			input[type="color"],
			textarea,
			input[type="text"]:focus,
			input[type="email"]:focus,
			input[type="url"]:focus,
			input[type="password"]:focus,
			input[type="search"]:focus,
			input[type="number"]:focus,
			input[type="tel"]:focus,
			input[type="range"]:focus,
			input[type="date"]:focus,
			input[type="month"]:focus,
			input[type="week"]:focus,
			input[type="time"]:focus,
			input[type="datetime"]:focus,
			input[type="datetime-local"]:focus,
			input[type="color"]:focus,
			textarea:focus,
			.site-footer li a,
			.no-results .page-content a:hover,
			.main-navigation a,
			.post-navigation a:hover,
			.page-numbers li > a,
			.page-numbers li > span,
			.entry-header a,
			.ole-entry-cta .read-more-text:hover,
			.site-sidebar .ole-no-widget a:hover,
			.site-sidebar .ole-no-widget a:focus'
			=> array(
				'color' => esc_html( $base_color ),
			),

			'blockquote,
			.menu-toggle span,
			.secondary-menu-toggle .toggle-icon span'
			=> array(
				'border-color' => esc_html( $base_color ),
			),

			'.tertiary-menu-toggle .toggle-icon span'
			=> array(
				'background-color' => esc_html( $base_color ),
			),

			'.main-navigation .ole-icon'
			=> array(
				'fill' => esc_html( $base_color ),
			),
		);

		$parse_css .= self::parse_css( '#121212', $base_color, $base_color_css );

		// Headings Color.
		$headings_color_css = array(
			'h1,
			h2,
			h3,
			h4,
			h5,
			h6'
			=> array(
				'color' => esc_html( $headings_color ),
			),
		);

		$parse_css .= self::parse_css( '#121212', $headings_color, $headings_color_css );

		// Container width.
		$container_width_css = array(
			'.ole-container'
			=> array(
				'max-width' => esc_html( $container_width ) . 'px',
			),
		);

		$parse_css .= self::parse_css( 1170, $container_width, $container_width_css );

		// Sidebar width.
		$sidebar_width_css = array(
			'.ole-sidebar-layout--right .site-sidebar'
			=> array(
				'width' => esc_html( $sidebar_width ) . '%',
			),
			'.ole-sidebar-layout--right .site-main'
			=> array(
				'width' => esc_html( 100 - (int) $sidebar_width ) . '%',
			),
		);

		$parse_css .= self::parse_css( 25, $sidebar_width, $sidebar_width_css, '48em' );

		$site_title_color_css = array(
			'.site-title a'
			=> array(
				'color' => esc_html( $site_title_color ),
			),
		);

		$parse_css .= self::parse_css( '#121212', $site_title_color, $site_title_color_css );

		$site_title_hover_color_css = array(
			'.site-title a:hover,
			.site-title a:focus'
			=> array(
				'color' => esc_html( $site_title_hover_color ),
			),
		);

		$parse_css .= self::parse_css( '#FCA311', $site_title_hover_color, $site_title_hover_color_css );

		// Site logo height.
		$logo_height_css = array(
			'.custom-logo'
			=> array(
				'max-height' => esc_html( (int) $logo_height ) . 'px',
			),
		);

		$parse_css .= self::parse_css( '', $logo_height, $logo_height_css );

		// General.
		$general_background_color_css = array(
			'.ole-masthead-lvl2 .ole-container'
			=> array(
				'background-color' => esc_html( $general_background_color ),
			),
		);

		$parse_css .= self::parse_css( '', $general_background_color, $general_background_color_css );

		// Primary menu.
		$primary_menu_color_css = array(
			'.main-navigation a'
			=> array(
				'color' => esc_html( $primary_menu_color ),
			),

			'.main-navigation .ole-icon'
			=> array(
				'fill' => esc_html( $primary_menu_color ),
			),
		);

		$parse_css .= self::parse_css( '#121212', $primary_menu_color, $primary_menu_color_css );

		$primary_menu_hover_color_css = array(
			'.main-navigation li:hover > a,
			.main-navigation li:focus > a,
			.main-navigation li.focus > a'
			=> array(
				'color' => esc_html( $primary_menu_hover_color ),
			),

			'.main-navigation li:hover > .ole-submenu-toggle .ole-icon,
			.main-navigation li:focus > .ole-submenu-toggle .ole-icon,
			.main-navigation li.focus > .ole-submenu-toggle .ole-icon'
			=> array(
				'fill' => esc_html( $primary_menu_hover_color ),
			),
		);

		$parse_css .= self::parse_css( '#FCA311', $primary_menu_hover_color, $primary_menu_hover_color_css );

		$primary_menu_active_color_css = array(
			'.main-navigation .current_page_item > a,
			.main-navigation .current-menu-item > a,
			.main-navigation .current_page_ancestor > a,
			.main-navigation .current-menu-ancestor > a'
			=> array(
				'color' => esc_html( $primary_menu_active_color ),
			),

			'.main-navigation .current_page_item > .ole-submenu-toggle .ole-icon,
			.main-navigation .current-menu-item > .ole-submenu-toggle .ole-icon,
			.main-navigation .current_page_ancestor > .ole-submenu-toggle .ole-icon,
			.main-navigation .current-menu-ancestor > .ole-submenu-toggle .ole-icon'
			=> array(
				'fill' => esc_html( $primary_menu_active_color ),
			),
		);

		$parse_css .= self::parse_css( '#FCA311', $primary_menu_active_color, $primary_menu_active_color_css );

		$hamburger_icon_color_css = array(
			'.menu-toggle span'
			=> array(
				'border-color' => esc_html( $hamburger_icon_color ),
			),
		);

		$parse_css .= self::parse_css( '', $hamburger_icon_color, $hamburger_icon_color_css );

		$hamburger_icon_hover_color_css = array(
			'.menu-toggle:hover span'
			=> array(
				'border-color' => esc_html( $hamburger_icon_hover_color ),
			),
		);

		$parse_css .= self::parse_css( '', $hamburger_icon_hover_color, $hamburger_icon_hover_color_css );

		// Sub menu.
		$sub_menu_color_css = array(
			'.main-navigation ul ul a'
			=> array(
				'color' => esc_html( $sub_menu_color ),
			),
		);

		$parse_css .= self::parse_css( '', $sub_menu_color, $sub_menu_color_css );

		$sub_menu_hover_color_css = array(
			'.main-navigation ul ul li:hover > a,
			.main-navigation ul ul li.current-menu-item:hover > a,
			.main-navigation ul ul li.current_page_item:hover > a'
			=> array(
				'color' => esc_html( $sub_menu_hover_color ),
			),

			'.main-navigation ul ul li.current-menu-item:hover > .ole-submenu-toggle .ole-icon,
			main-navigation ul ul li.current_page_item:hover > .ole-submenu-toggle .ole-icon'
			=> array(
				'fill' => esc_html( $sub_menu_hover_color ),
			),
		);

		$parse_css .= self::parse_css( '', $sub_menu_hover_color, $sub_menu_hover_color_css );

		$sub_menu_active_color_css = array(
			'.main-navigation ul ul li.current-menu-item > a,
			.main-navigation ul ul li.current_page_item > a'
			=> array(
				'color' => esc_html( $sub_menu_active_color ),
			),

			'.main-navigation ul ul li.current-menu-item > .ole-submenu-toggle .ole-icon,
			main-navigation ul ul li.current_page_item > .ole-submenu-toggle .ole-icon'
			=> array(
				'fill' => esc_html( $sub_menu_active_color ),
			),
		);

		$parse_css .= self::parse_css( '', $sub_menu_active_color, $sub_menu_active_color_css );

		$sub_menu_background_color_css = array(
			'.main-navigation ul ul'
			=> array(
				'background-color' => esc_html( $sub_menu_background_color ),
			),
		);

		$parse_css .= self::parse_css( '', $sub_menu_background_color, $sub_menu_background_color_css );

		// Mobile menu.
		$mobile_menu_color_css = array(
			'.ole-mobile-canvas .ole-mobile-navigation a'
			=> array(
				'color' => esc_html( $mobile_menu_color ),
			),

			'.ole-mobile-canvas .ole-mobile-navigation .ole-icon'
			=> array(
				'fill' => esc_html( $mobile_menu_color ),
			),
		);

		$parse_css .= self::parse_css( '', $mobile_menu_color, $mobile_menu_color_css );

		$mobile_menu_hover_color_css = array(
			'.ole-mobile-navigation li:hover > .menu-item-wrap > a,
			.ole-mobile-navigation li:focus > .menu-item-wrap > a,
			.ole-mobile-navigation li.focus > .menu-item-wrap > a'
			=> array(
				'color' => esc_html( $mobile_menu_hover_color ),
			),

			'.ole-mobile-navigation li:hover > .menu-item-wrap > .ole-submenu-toggle .ole-icon,
			.ole-mobile-navigation li:focus > .menu-item-wrap > .ole-submenu-toggle .ole-icon,
			.ole-mobile-navigation li.focus > .menu-item-wrap > .ole-submenu-toggle .ole-icon'
			=> array(
				'fill' => esc_html( $mobile_menu_hover_color ),
			),
		);

		$parse_css .= self::parse_css( '', $mobile_menu_hover_color, $mobile_menu_hover_color_css );

		$mobile_menu_active_color_css = array(
			'.ole-mobile-navigation .current_page_item > .menu-item-wrap > a,
			.ole-mobile-navigation .current-menu-item > .menu-item-wrap > a,
			.ole-mobile-navigation .current_page_ancestor > .menu-item-wrap > a,
			.ole-mobile-navigation .current-menu-ancestor > .menu-item-wrap > a'
			=> array(
				'color' => esc_html( $mobile_menu_active_color ),
			),

			'.ole-mobile-navigation .current_page_item > .menu-item-wrap > .ole-submenu-toggle .ole-icon,
			.ole-mobile-navigation .current-menu-item > .menu-item-wrap > .ole-submenu-toggle .ole-icon,
			.ole-mobile-navigation .current_page_ancestor > .menu-item-wrap > .ole-submenu-toggle .ole-icon,
			.ole-mobile-navigation .current-menu-ancestor > .menu-item-wrap > .ole-submenu-toggle .ole-icon'
			=> array(
				'fill' => esc_html( $mobile_menu_active_color ),
			),
		);

		$parse_css .= self::parse_css( '', $mobile_menu_active_color, $mobile_menu_active_color_css );

		$mobile_menu_close_icon_color_css = array(
			'.ole-mobile-canvas .ole-icon'
			=> array(
				'fill' => esc_html( $mobile_menu_close_icon_color ),
			),
		);

		$parse_css .= self::parse_css( '', $mobile_menu_close_icon_color, $mobile_menu_close_icon_color_css );

		$mobile_menu_close_icon_hover_color_css = array(
			'.ole-mobile-canvas .close-mobile-menu:hover .ole-icon'
			=> array(
				'fill' => esc_html( $mobile_menu_close_icon_hover_color ),
			),
		);

		$parse_css .= self::parse_css( '', $mobile_menu_close_icon_hover_color, $mobile_menu_close_icon_hover_color_css );

		$mobile_menu_bg_color_css = array(
			'.ole-mobile-canvas'
			=> array(
				'background-color' => esc_html( $mobile_menu_bg_color ),
			),
		);

		$parse_css .= self::parse_css( '', $mobile_menu_bg_color, $mobile_menu_bg_color_css );

		// Primary header.
		$primary_header_bg_color_css = array(
			'.ole-masthead-lvl1'
			=> array(
				'background-color' => esc_html( $primary_header_bg_color ),
			),
		);

		$parse_css .= self::parse_css( '#f8f8f8', $primary_header_bg_color, $primary_header_bg_color_css );

		// Header button.
		$header_button_text_color_css = array(
			'.ole-header-button .button'
			=> array(
				'color' => esc_html( $header_button_text_color ),
			),
		);

		$parse_css .= self::parse_css( '', $header_button_text_color, $header_button_text_color_css );

		$header_button_text_hover_color_css = array(
			'.ole-header-button .button:hover, .ole-header-button .button:focus'
			=> array(
				'color' => esc_html( $header_button_text_hover_color ),
			),
		);

		$parse_css .= self::parse_css( '', $header_button_text_hover_color, $header_button_text_hover_color_css );

		$header_button_background_color_css = array(
			'.ole-header-button .button'
			=> array(
				'background-color' => esc_html( $header_button_background_color ),
			),
		);

		$parse_css .= self::parse_css( '', $header_button_background_color, $header_button_background_color_css );

		$header_button_background_hover_color_css = array(
			'.ole-header-button .button:hover, .ole-header-button .button:focus'
			=> array(
				'background-color' => esc_html( $header_button_background_hover_color ),
			),
		);

		$parse_css .= self::parse_css( '', $header_button_background_hover_color, $header_button_background_hover_color_css );

		$parse_css .= self::parse_dimension_css( $page_header_padding_default, $page_header_padding, '.ole-page-header', 'padding' );

		$parse_css .= self::parse_background_css( $page_header_bg_default, $page_header_bg, '.ole-page-header' );

		$page_header_title_color_css = array(
			'.ole-page-header .ole-page-title'
			=> array(
				'color' => esc_html( $page_header_title_color ),
			),
		);

		$parse_css .= self::parse_css( '', $page_header_title_color, $page_header_title_color_css );

		$page_header_breadcrumbs_text_color_css = array(
			'.ole-page-header .trail-item, .ole-page-header-description p'
			=> array(
				'color' => esc_html( $page_header_breadcrumbs_text_color ),
			),
		);

		$parse_css .= self::parse_css( '', $page_header_breadcrumbs_text_color, $page_header_breadcrumbs_text_color_css );

		$page_header_separator_color_css = array(
			'.ole-page-header .trail-items li:after'
			=> array(
				'color' => esc_html( $page_header_separator_color ),
			),
		);

		$parse_css .= self::parse_css( '', $page_header_separator_color, $page_header_separator_color_css );

		$page_header_link_color_css = array(
			'.ole-page-header .trail-items a'
			=> array(
				'color' => esc_html( $page_header_link_color ),
			),
		);

		$parse_css .= self::parse_css( '', $page_header_link_color, $page_header_link_color_css );

		$page_header_link_hover_color_css = array(
			'.ole-page-header .trail-items a:hover'
			=> array(
				'color' => esc_html( $page_header_link_hover_color ),
			),
		);

		$parse_css .= self::parse_css( '', $page_header_link_hover_color, $page_header_link_hover_color_css );

		// Blog.
		$blog_column_gap_css = array(
			'.ole-posts'
			=> array(
				'column-gap' => esc_html( $blog_column_gap ) . 'em',
			),
		);

		$parse_css .= self::parse_css( '', $blog_column_gap, $blog_column_gap_css );

		$blog_row_gap_css = array(
			'.ole-posts'
			=> array(
				'row-gap' => esc_html( $blog_row_gap ) . 'em',
			),
		);

		$parse_css .= self::parse_css( '', $blog_row_gap, $blog_row_gap_css );

		// Footer column.
		$footer_col_heading_color_css = array(
			'.ole-footer-cols .widget-title'
			=> array(
				'color' => esc_html( $footer_col_heading_color ),
			),
		);

		$parse_css .= self::parse_background_css( $footer_col_bg_default, $footer_col_bg, '.ole-footer-cols' );

		$parse_css .= self::parse_css( '', $footer_col_heading_color, $footer_col_heading_color_css );

		$footer_col_text_color_css = array(
			'.ole-footer-cols'
			=> array(
				'color' => esc_html( $footer_col_text_color ),
			),
		);

		$parse_css .= self::parse_css( '', $footer_col_text_color, $footer_col_text_color_css );

		$footer_col_link_color_css = array(
			'.ole-footer-cols a'
			=> array(
				'color' => esc_html( $footer_col_link_color ),
			),
		);

		$parse_css .= self::parse_css( '', $footer_col_link_color, $footer_col_link_color_css );

		$footer_col_list_link_color_css = array(
			'.ole-footer-cols li a'
			=> array(
				'color' => esc_html( $footer_col_list_link_color ),
			),
		);

		$parse_css .= self::parse_css( '', $footer_col_list_link_color, $footer_col_list_link_color_css );

		if ( ! $footer_col_list_separator_enable ) {
			$parse_css .= '.ole-footer-cols li { border-width: 0px }';
		}

		$footer_col_list_separator_color_css = array(
			'.ole-footer-cols li'
			=> array(
				'border-color' => esc_html( $footer_col_list_separator_color ),
			),
		);

		$parse_css .= self::parse_css( '', $footer_col_list_separator_color, $footer_col_list_separator_color_css );

		// Footer bar.
		$footer_bar_content_alignment_css = array(
			'.ole-footer-bar > .ole-container'
			=> array(
				'justify-content' => esc_html( $footer_bar_content_alignment ),
			),
		);

		$parse_css .= self::parse_css( '', $footer_bar_content_alignment, $footer_bar_content_alignment_css );

		$footer_bar_bg_color_css = array(
			'.ole-footer-bar'
			=> array(
				'background-color' => esc_html( $footer_bar_bg_color ),
			),
		);

		$parse_css .= self::parse_css( '', $footer_bar_bg_color, $footer_bar_bg_color_css );

		$footer_bar_text_color_css = array(
			'.ole-footer-bar'
			=> array(
				'color' => esc_html( $footer_bar_text_color ),
			),
		);

		$parse_css .= self::parse_css( '', $footer_bar_text_color, $footer_bar_text_color_css );

		$footer_bar_link_color_css = array(
			'.ole-footer-bar a'
			=> array(
				'color' => esc_html( $footer_bar_link_color ),
			),
		);

		$parse_css .= self::parse_css( '', $footer_bar_link_color, $footer_bar_link_color_css );

		// Scroll to top.
		$footer_scroll_to_top_width_css = array(
			'.ole-scroll-to-top'
			=> array(
				'width' => esc_html( $footer_scroll_to_top_width ) . 'px',
			),
		);

		$parse_css .= self::parse_css( 54, $footer_scroll_to_top_width, $footer_scroll_to_top_width_css );

		$footer_scroll_to_top_height_css = array(
			'.ole-scroll-to-top'
			=> array(
				'height' => esc_html( $footer_scroll_to_top_height ) . 'px',
			),
		);

		$parse_css .= self::parse_css( 54, $footer_scroll_to_top_height, $footer_scroll_to_top_height_css );

		$footer_scroll_to_top_roundness_css = array(
			'.ole-scroll-to-top'
			=> array(
				'border-radius' => esc_html( $footer_scroll_to_top_roundness ) . 'px',
			),
		);

		$parse_css .= self::parse_css( 2, $footer_scroll_to_top_roundness, $footer_scroll_to_top_roundness_css );

		$footer_scroll_to_top_icon_size_css = array(
			'.ole-scroll-to-top .ole-icon'
			=> array(
				'height' => esc_html( $footer_scroll_to_top_icon_size ) . 'px',
				'width'  => esc_html( $footer_scroll_to_top_icon_size ) . 'px',
			),
		);

		$parse_css .= self::parse_css( 24, $footer_scroll_to_top_icon_size, $footer_scroll_to_top_icon_size_css );

		$footer_scroll_to_top_background_color_css = array(
			'.ole-scroll-to-top'
			=> array(
				'background-color' => esc_html( $footer_scroll_to_top_background_color ),
			),
		);

		$parse_css .= self::parse_css( '', $footer_scroll_to_top_background_color, $footer_scroll_to_top_background_color_css );

		$footer_scroll_to_top_icon_color_css = array(
			'.ole-scroll-to-top .ole-icon'
			=> array(
				'fill' => esc_html( $footer_scroll_to_top_icon_color ),
			),
		);

		$parse_css .= self::parse_css( '', $footer_scroll_to_top_icon_color, $footer_scroll_to_top_icon_color_css );

		$footer_scroll_to_top_background_hover_color_css = array(
			'.ole-scroll-to-top:hover'
			=> array(
				'background-color' => esc_html( $footer_scroll_to_top_background_hover_color ),
			),
		);

		$parse_css .= self::parse_css( '', $footer_scroll_to_top_background_hover_color, $footer_scroll_to_top_background_hover_color_css );

		$footer_scroll_to_top_icon_hover_color_css = array(
			'.ole-scroll-to-top .ole-icon:hover'
			=> array(
				'fill' => esc_html( $footer_scroll_to_top_icon_hover_color ),
			),
		);

		$parse_css .= self::parse_css( '', $footer_scroll_to_top_icon_hover_color, $footer_scroll_to_top_icon_hover_color_css );

		return $parse_css;
	}

	/**
	 * Parses CSS.
	 *
	 * @param string|array $default_value Default value.
	 * @param string|array $output_value  Updated value.
	 * @param array        $css_output    Array of CSS.
	 * @param string       $min_media     Min Media breakpoint.
	 * @param string       $max_media     Max Media breakpoint.
	 *
	 * @return string|void Generated CSS.
	 */
	public static function parse_css( $default_value, $output_value, $css_output = array(), $min_media = '', $max_media = '' ) {

		// Return if default value matches.
		if ( $default_value === $output_value ) {
			return;
		}

		$parse_css = '';

		if ( is_array( $css_output ) && count( $css_output ) > 0 ) {

			foreach ( $css_output as $selector => $properties ) {

				if ( null === $properties ) {
					break;
				}

				if ( ! count( $properties ) ) {
					continue;
				}

				$temp_parse_css   = $selector . '{';
				$properties_added = 0;

				foreach ( $properties as $property => $value ) {

					if ( '' === $value ) {
						continue;
					}

					$properties_added ++;
					$temp_parse_css .= $property . ':' . $value . ';';
				}

				$temp_parse_css .= '}';

				if ( $properties_added > 0 ) {
					$parse_css .= $temp_parse_css;
				}
			}

			if ( '' !== $parse_css && ( '' !== $min_media || '' !== $max_media ) ) {

				$media_css       = '@media ';
				$min_media_css   = '';
				$max_media_css   = '';
				$media_separator = '';

				if ( '' !== $min_media ) {
					$min_media_css = '(min-width:' . $min_media . ')';
				}

				if ( '' !== $max_media ) {
					$max_media_css = '(max-width:' . $max_media . ')';
				}

				if ( '' !== $min_media && '' !== $max_media ) {
					$media_separator = ' and ';
				}

				$media_css .= $min_media_css . $media_separator . $max_media_css . '{' . $parse_css . '}';

				return $media_css;

			}
		}

		return $parse_css;
	}

	/**
	 * Returns the background CSS property for dynamic CSS generation.
	 *
	 * @param string|array $default_value Default value.
	 * @param string|array $output_value  Updated value.
	 * @param string       $selector      CSS selector.
	 *
	 * @return string|void Generated CSS for background CSS property.
	 */
	public static function parse_background_css( $default_value, $output_value, $selector ) {

		if ( $default_value === $output_value ) {
			return;
		}

		$parse_css = $selector . '{';

		// For background color.
		if ( isset( $output_value['background-color'] ) && ! empty( $output_value['background-color'] ) && ( $output_value['background-color'] !== $default_value['background-color'] ) ) {
			$parse_css .= 'background-color:' . $output_value['background-color'] . ';';
		}

		// For background image.
		if ( isset( $output_value['background-image'] ) && ! empty( $output_value['background-image'] ) && ( $output_value['background-image'] !== $default_value['background-image'] ) ) {
			$parse_css .= 'background-image:url(' . $output_value['background-image'] . ');';
		}

		// For background position.
		if ( isset( $output_value['background-position'] ) && ! empty( $output_value['background-position'] ) && ( $output_value['background-position'] !== $default_value['background-position'] ) ) {
			$parse_css .= 'background-position:' . $output_value['background-position'] . ';';
		}

		// For background size.
		if ( isset( $output_value['background-size'] ) && ! empty( $output_value['background-size'] ) && ( $output_value['background-size'] !== $default_value['background-size'] ) ) {
			$parse_css .= 'background-size:' . $output_value['background-size'] . ';';
		}

		// For background attachment.
		if ( isset( $output_value['background-attachment'] ) && ! empty( $output_value['background-attachment'] ) && ( $output_value['background-attachment'] !== $default_value['background-attachment'] ) ) {
			$parse_css .= 'background-attachment:' . $output_value['background-attachment'] . ';';
		}

		// For background repeat.
		if ( isset( $output_value['background-repeat'] ) && ! empty( $output_value['background-repeat'] ) && ( $output_value['background-repeat'] !== $default_value['background-repeat'] ) ) {
			$parse_css .= 'background-repeat:' . $output_value['background-repeat'] . ';';
		}

		$parse_css .= '}';

		return $parse_css;
	}

	/**
	 * Returns the dimensions CSS property for dynamic CSS generation.
	 *
	 * @param array $default_value Default value.
	 * @param array $output_value Updated value.
	 * @param string $selector CSS selector.
	 * @param string $property CSS property.
	 *
	 * @return string|void
	 */
	public static function parse_dimension_css( $default_value, $output_value, $selector, $property ) {

		if ( $default_value === $output_value ) {
			return;
		}

		$parse_css = $selector . '{';

		if ( isset( $output_value['top'] ) && ! empty( $output_value['top'] ) && ( $output_value['top'] !== $default_value['top'] ) ) {
			$parse_css .= $property . '-top:' . $output_value['top'] . ';';
		}

		if ( isset( $output_value['top'] ) && ! empty( $output_value['top'] ) && ( $output_value['right'] !== $default_value['right'] ) ) {
			$parse_css .= $property . '-right:' . $output_value['right'] . ';';
		}

		if ( isset( $output_value['bottom'] ) && ! empty( $output_value['bottom'] ) && ( $output_value['bottom'] !== $default_value['bottom'] ) ) {
			$parse_css .= $property . '-bottom:' . $output_value['bottom'] . ';';
		}

		if ( isset( $output_value['left'] ) && ! empty( $output_value['left'] ) && ( $output_value['left'] !== $default_value['left'] ) ) {
			$parse_css .= $property . '-left:' . $output_value['left'] . ';';
		}

		$parse_css .= '}';

		return $parse_css;
	}
}
