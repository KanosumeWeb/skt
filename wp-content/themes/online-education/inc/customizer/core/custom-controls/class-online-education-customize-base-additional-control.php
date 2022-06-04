<?php
/**
 * Online Education customizer base additional control class for theme customize options.
 *
 * Class Online_Education_Customize_Base_Additional_Control
 *
 * @package    ThemeGrill
 * @since      3.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class Online_Education_Customize_Base_Additional_Control
 */
class Online_Education_Customize_Base_Additional_Control extends WP_Customize_Control {

	/**
	 * Enqueue control related scripts/styles.
	 */
	public function enqueue() {

		$suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';

		/**
		 * Enqueue required Customize Controls CSS files.
		 */
		// SelectWoo CSS library file.
		wp_enqueue_style(
			'selectWoo',
			$this->get_assets_url() . '/assets/css/selectWoo' . $suffix . '.css',
			array(),
			ONLINE_EDUCATION_VERSION
		);

		// Main CSS file.
		wp_enqueue_style(
			'online-education-customize-controls',
			$this->get_assets_url() . '/assets/css/customize-controls' . $suffix . '.css',
			array( 'wp-color-picker' ),
			ONLINE_EDUCATION_VERSION
		);
		wp_style_add_data( 'online-education-customize-controls', 'rtl', 'replace' );

		/**
		 * Enqueue required Customize Controls JS files.
		 */
		// SelectWoo JS library file.
		wp_enqueue_script(
			'selectWoo',
			$this->get_assets_url() . '/assets/js/selectWoo' . $suffix . '.js',
			array(),
			ONLINE_EDUCATION_VERSION,
			true
		);

		// WP Color Picker Alpha JS library file.
		wp_enqueue_script(
			'wp-color-picker-alpha',
			$this->get_assets_url() . '/assets/js/wp-color-picker-alpha' . $suffix . '.js',
			array(
				'wp-color-picker',
			),
			ONLINE_EDUCATION_VERSION,
			true
		);

		// Main JS file.
		wp_enqueue_script(
			'online-education-customize-controls',
			$this->get_assets_url() . '/assets/js/customize-controls' . $suffix . '.js',
			array(
				'jquery',
			),
			ONLINE_EDUCATION_VERSION,
			true
		);

	}

	public function get_assets_url() {
		// Get correct URL and path to wp-content.
		$content_url = untrailingslashit( dirname( dirname( get_stylesheet_directory_uri() ) ) );
		$content_dir = wp_normalize_path( untrailingslashit( WP_CONTENT_DIR ) );

		$url = str_replace( $content_dir, $content_url, wp_normalize_path( __DIR__ ) );
		$url = set_url_scheme( $url );

		return $url;
	}

}
