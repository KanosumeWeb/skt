<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package Online_Education
 * @since   1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'online_education_body_classes' ) ) :

	/**
	 * Adds custom classes to the array of body classes.
	 *
	 * @param array $classes Classes for the body element.
	 * @return array
	 */
	function online_education_body_classes( $classes ) {

		// Adds a class of hfeed to non-singular pages.
		if ( ! is_singular() ) {
			$classes[] = 'hfeed';
		}

		$hide_title = get_post_meta( get_the_ID(), 'online_education_hide_title', true );

		if ( $hide_title ) {
			$classes[] = 'ole-page-header--hidden';
		}

		if ( Online_Education_Utils::has_transparent_header() ) {
			$classes[] = 'ole-header--transparent';
		}

		if ( ! is_page_template( 'page-templates/template-online-education-page-builder.php' ) ) {
			$classes[] = 'ole-sidebar-layout--' . online_education_get_current_layout();
			$classes[] = 'ole-content-style--' . online_education_get_current_style();
		} else {
			$classes[] = 'ole-sidebar-layout--no-sidebar';
		}

		return $classes;
	}
	add_filter( 'body_class', 'online_education_body_classes' );
endif;

if ( ! function_exists( 'online_education_pingback_header' ) ) :

	/**
	 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
	 */
	function online_education_pingback_header() {

		if ( is_singular() && pings_open() ) {
			printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
		}
	}
	add_action( 'wp_head', 'online_education_pingback_header' );
endif;

if ( ! function_exists( 'online_education_get_current_layout' ) ) :

	/**
	 * Get the current layout of the page
	 *
	 * @return string layout.
	 */
	function online_education_get_current_layout() {

		$default_layout = get_theme_mod( 'online_education_sidebar_layout_default', 'no-sidebar' );

		switch ( true ) {

			case ( is_singular( 'page' ) || is_404() ):
				$page_layout = get_theme_mod( 'online_education_sidebar_layout_page', 'default' );
				$layout      = 'default' !== $page_layout ? $page_layout : $default_layout;

				break;

			case ( is_singular() ):
				$single_post_layout = get_theme_mod( 'online_education_sidebar_layout_single_post', 'default' );
				$layout             = 'default' !== $single_post_layout ? $single_post_layout : $default_layout;

				break;

			case ( is_archive() || is_home() ):
				$archive_layout   = get_theme_mod( 'online_education_sidebar_layout_archive', 'default' );
				$masteriyo_layout = get_theme_mod( 'online_education_sidebar_layout_masteriyo_courses_archive', 'default' );

				if ( Online_Education_Utils::is_masteriyo_active() && ( function_exists( 'masteriyo_is_courses_page' ) && masteriyo_is_courses_page() ) ) {
					$layout = 'default' !== $masteriyo_layout ? $masteriyo_layout : $default_layout;
				} else {
					$layout = 'default' !== $archive_layout ? $archive_layout : $default_layout;
				}

				break;

			default:
				$layout = get_theme_mod( 'online_education_sidebar_layout_default', 'no-sidebar' );
		}

		return apply_filters( 'online_education_current_layout', $layout );
	}
endif;

if ( ! function_exists( 'online_education_get_current_style' ) ) :

	/**
	 * Get the current style of the page
	 *
	 * @return string Style.
	 */
	function online_education_get_current_style() {

		$style         = '';
		$default_style = get_theme_mod( 'online_education_content_style_default', 'boxed' );
		$meta_style    = get_post_meta( Online_Education_Utils::get_the_id(), 'online_education_content_style', true );

		if ( isset( $meta_style ) && ! empty( $meta_style ) && 'customizer' !== $meta_style ) {
			$style = $meta_style;
		} else {
			switch ( true ) {

				case ( is_singular( 'page' ) || is_404() ):
					$page_style = get_theme_mod( 'online_education_content_style_page', 'default' );
					$style      = 'default' !== $page_style ? $page_style : $default_style;

					break;

				case ( is_singular() ):
					$single_post_style = get_theme_mod( 'online_education_content_style_single_post', 'default' );
					$style             = 'default' !== $single_post_style ? $single_post_style : $default_style;

					break;

				case ( is_archive() || is_home() || is_search() ):
					$archive_style = get_theme_mod( 'online_education_content_style_archive', 'default' );
					$style         = 'default' !== $archive_style ? $archive_style : $default_style;

					break;

				default:
					$style = get_theme_mod( 'online_education_content_style_default', 'boxed' );
			}
		}

		return apply_filters( 'online_education_current_style', $style );
	}
	endif;

if ( ! function_exists( 'online_education_posts_classes' ) ) :

	/**
	 * Add classes to the posts wrapper.
	 *
	 * @param array $classes Posts wrapper classnames.
	 * @return array
	 */
	function online_education_posts_classes( $classes ) {

		$grid_cols = get_theme_mod( 'online_education_blog_grid_column', '3' );
		$classes[] = "ole-grid-col--$grid_cols";

		return $classes;
	}
	add_filter( 'online_education_posts_classes', 'online_education_posts_classes' );
endif;

if ( ! function_exists( 'online_education_add_submenu_icon' ) ) :

	/**
	 * Add submenu icon after the menu title.
	 *
	 * @since 1.0.0
	 *
	 * @param string   $item_output The menu item's starting HTML output.
	 * @param WP_Post  $item        Menu item data object.
	 * @param int      $depth       Depth of menu item. Used for padding.
	 * @param stdClass $args        An object of wp_nav_menu() arguments.
	 * @return array|mixed|string|string[]
	 */
	function online_education_add_submenu_icon( $item_output, $item, $depth, $args ) {

		if (
			'ole-menu-primary' === $args->theme_location ||
			'ole-menu-mobile' === $args->theme_location
		) {
			if (
				in_array( 'menu-item-has-children', $item->classes, true ) ||
				in_array( 'page_item_has_children', $item->classes, true )
			) {
				$opening_wrap = 'ole-mobile-menu' === $args->menu_class ? '<div class="menu-item-wrap">' : '';
				$closing_wrap = 'ole-mobile-menu' === $args->menu_class ? '</div>' : '';
				$submenu_tag  = 'ole-mobile-menu' === $args->menu_class ? 'button' : 'span';
				$submenu_icon = online_education_get_icon( 'arrow-down', false );

				return sprintf( '%1$s%2$s%3$s%4$s', $opening_wrap, $item_output, "<$submenu_tag class=\"ole-submenu-toggle\">$submenu_icon</$submenu_tag>", $closing_wrap );
			}
		}

		return $item_output;
	}
	add_filter( 'walker_nav_menu_start_el', 'online_education_add_submenu_icon', 10, 4 );
endif;

if ( ! function_exists( 'online_education_get_icon' ) ) :

	/**
	 * Get SVG icon.
	 *
	 * @param string $icon Default is empty.
	 * @param bool   $echo Default is true.
	 * @param array  $args Default is empty.
	 * @return string|null
	 */
	function online_education_get_icon( $icon = '', $echo = true, $args = array() ) {
		return Online_Education_SVG_Icons::get_svg( $icon, $echo, $args );
	}
endif;

if ( ! function_exists( 'online_education_add_items_to_menu' ) ) {

	function online_education_add_items_to_menu( $items, $args ) {

		$header_button_text        = get_theme_mod( 'online_education_header_button_text', '' );
		$header_button_link        = get_theme_mod( 'online_education_header_button_link', '' );
		$header_button_target      = get_theme_mod( 'online_education_header_button_target', 0 );
		$header_button_target_attr = $header_button_target ? 'target=_blank' : '';

		$header_button_markup = sprintf(
			'<li class="ole-header-button">
						<a class="button" href="%1$s" %2$s>%3$s</a>
					</li>',
			$header_button_link,
			$header_button_target_attr,
			$header_button_text
		);

		if (
			'ole-primary-menu' === $args->menu_id &&
			'' !== $header_button_text
		) {
			$items .= $header_button_markup;
		}

		$search_enabled = get_theme_mod( 'online_education_header_search', true );
		$search_form    = sprintf(
			'<form method="get" action="%1$s" class="ole-header-searchform">
						<label>
							<span class="screen-reader-text">%2$s</span>
							<input type="search" name="s" autocomplete="off" placeholder="%3$s" />
						</label>
					</form>',
			esc_url( home_url( '/' ) ),
			esc_html__( 'Search for:', 'online-education' ),
			esc_attr__( 'Search', 'online-education' )
		);
		$search_markup  = sprintf(
			'<li class="ole-header-search">
						<a class="ole-header-search-toggle" href="#">%1$s</a>
						%2$s
					</li>',
			online_education_get_icon( 'search', false ),
			$search_form
		);

		if ( 'ole-primary-menu' === $args->menu_id && $search_enabled ) {
			$items .= $search_markup;
		}

		if ( 'ole-mobile-menu' === $args->menu_id && $search_enabled ) {
			$items .= $search_form;
		}

		return $items;
	}
	add_filter( 'wp_nav_menu_items', 'online_education_add_items_to_menu', 11, 2 );
}
