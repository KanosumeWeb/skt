<?php
/**
 * Theme hooks.
 *
 * @package Online_Education
 * @since   1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;


if ( ! function_exists( 'online_education_header' ) ) {

	/**
	 * Header.
	 *
	 * @return void
	 */
	function online_education_header() {

		/**
		 * Hook for header.
		 *
		 * @hooked online_education_header_markup - 10.
		 */
		do_action( 'online_education_header' );
	}
}

if ( ! function_exists( 'online_education_masthead_lvl1' ) ) {

	/**
	 * First level header.
	 *
	 * @return void
	 */
	function online_education_masthead_lvl1() {

		/**
		 * Hook for first level header.
		 *
		 * @hooked online_education_masthead_lvl1_markup - 10.
		 */
		do_action( 'online_education_masthead_lvl1' );
	}
}

if ( ! function_exists( 'online_education_site_branding' ) ) {

	/**
	 * Header site branding.
	 *
	 * @return void
	 */
	function online_education_site_branding() {

		/**
		 * Hook for header branding.
		 *
		 * @hooked online_education_site_branding_markup - 10.
		 */
		do_action( 'online_education_site_branding' );
	}
}

if ( ! function_exists( 'online_education_site_title' ) ) :

	/**
	 * Site title.
	 *
	 * @return void
	 */
	function online_education_site_title() {

		/**
		 * Hook for site title.
		 *
		 * @hooked online_education_site_title_markup - 10.
		 */
		do_action( 'online_education_site_title' );
	}
endif;

if ( ! function_exists( 'online_education_mobile_navigation' ) ) {

	/**
	 * Mobile navigation.
	 *
	 * @return void
	 */
	function online_education_mobile_navigation() {

		/**
		 * Hook for mobile navigation.
		 *
		 * @hooked online_education_mobile_navigation_markup - 10.
		 */
		do_action( 'online_education_mobile_navigation' );
	}
}

if ( ! function_exists( 'online_education_main_navigation' ) ) {

	/**
	 * Header main navigation.
	 *
	 * @return void
	 */
	function online_education_main_navigation() {

		/**
		 * Hook for main navigation.
		 *
		 * @see online_education_main_navigation_markup() - 10.
		 */
		do_action( 'online_education_main_navigation' );
	}
}

/**
 * Content.
 */

if ( ! function_exists( 'online_education_page_header' ) ) {

	/**
	 * Page header.
	 *
	 * @return void
	 */
	function online_education_page_header() {

		/**
		 * Hook for page header markup.
		 *
		 * @hooked online_education_page_header_markup - 10.
		 */
		do_action( 'online_education_page_header' );
	}
}

/**
 * Footer.
 */

if ( ! function_exists( 'online_education_footer_columns' ) ) {

	/**
	 * Footer columns.
	 *
	 * @return void
	 */
	function online_education_footer_columns() {

		/**
		 * Hook for footer column markup.
		 *
		 * @hooked online_education_footer_columns_markup - 10.
		 */
		do_action( 'online_education_footer_columns' );
	}
}

if ( ! function_exists( 'online_education_footer_bar' ) ) {

	/**
	 * Footer bar.
	 *
	 * @return void
	 */
	function online_education_footer_bar() {

		/**
		 * Hook for online-education footer bar.
		 *
		 * @hooked online_education_footer_bar_markup - 10
		 */
		do_action( 'online_education_footer_bar' );
	}
}


if ( ! function_exists( 'online_education_footer_bottom' ) ) {

	/**
	 * Before wp_footer().
	 *
	 * @return void
	 */
	function online_education_footer_bottom() {

		/**
		 * Hook for footer bottom part.
		 *
		 * @hooked online_education_secondary_navigation_markup - 10
		 */
		do_action( 'online_education_footer_bottom' );
	}
}

if ( ! function_exists( 'online_education_content' ) ) {

	/**
	 * Online Education content.
	 *
	 * @return void
	 */
	function online_education_content() {

		/**
		 * Hook for content.
		 *
		 * @hooked online_education_content_loop - 10
		 */
		do_action( 'online_education_content' );
	}
}

if ( ! function_exists( 'online_education_content_search' ) ) {

	/**
	 * Online Education content search.
	 *
	 * @return void
	 */
	function online_education_content_search() {

		/**
		 * Hook for content search.
		 *
		 * @hooked online_education_content_loop - 10
		 */
		do_action( 'online_education_content_search' );
	}
}

if ( ! function_exists( 'online_education_content_archive' ) ) {

	/**
	 * Online Education content archive.
	 *
	 * @return void
	 */
	function online_education_content_archive() {

		/**
		 * Hook for content archive.
		 *
		 * @hooked online_education_content_loop - 10
		 */
		do_action( 'online_education_content_archive' );
	}
}

if ( ! function_exists( 'online_education_content_single' ) ) {

	/**
	 * Content single.
	 *
	 * @return void
	 */
	function online_education_content_single() {

		/**
		 * Hook for single content.
		 *
		 * @hooked online_education_single_content_loop - 10
		 */
		do_action( 'online_education_content_single' );
	}
}

if ( ! function_exists( 'online_education_footer_bar' ) ) {

	/**
	 * Footer bar 1.
	 *
	 * @return void
	 */
	function online_education_footer_bar() {

		/**
		 * Hook for footer bar 1.
		 *
		 * @hooked online_education_footer_bar_markup - 10
		 */
		do_action( 'online_education_footer_bar' );
	}
}
