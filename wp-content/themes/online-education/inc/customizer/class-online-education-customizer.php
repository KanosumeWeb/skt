<?php
/**
 * Online Education customizer class for theme customize options.
 *
 * Class Online_Education_Customizer
 *
 * @package    ThemeGrill
 * @since      1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Online Education customizer class.
 *
 * Class Online_Education_Customizer
 */
class Online_Education_Customizer {

	/**
	 * Constructor - Sets up customizer.
	 */
	public function __construct() {
		// Load files extending customizer features.
		add_action( 'customize_register', array( $this, 'customize_register' ) );
		// load core customizer files.
		add_action( 'customize_register', array( $this, 'customize_include_core' ), 1 );
		// Load customizer files necessary for registering customizer options.
		add_action( 'customize_register', array( $this, 'customize_include' ), 1 );

		add_action( 'wp_enqueue_scripts', array( $this, 'customizer_dynamic_css' ) );
	}

	/**
	 * Include the required files for extending the custom Customize controls.
	 *
	 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
	 */
	public function customize_register( $wp_customize ) {
		// Override default.
		require get_template_directory() . '/inc/customizer/override-defaults.php';
	}

	/**
	 * Load core file for theme customizer framework.
	 */
	public function customize_include_core() {

		// load customizer framework.
		require dirname( __FILE__ ) . '/core/class-online-education-customizer-framework.php';
		require dirname( __FILE__ ) . '/core/class-online-education-customize-base-option.php';
	}

	/**
	 * Load the required files for Customize option.
	 */
	public function customize_include() {

		// Selective refresh partial.
		require get_template_directory() . '/inc/customizer/class-online-education-customizer-partials.php';

		// Register sections and panels.
		require get_template_directory() . '/inc/customizer/class-online-education-customizer-register-section-panel.php';

		/**
		 * Register options.
		 */
		// Global.
		require get_template_directory() . '/inc/customizer/options/global/class-online-education-customize-colors-options.php';
		require get_template_directory() . '/inc/customizer/options/global/class-online-education-customize-container-options.php';
		require get_template_directory() . '/inc/customizer/options/global/class-online-education-customize-sidebar-layout-options.php';
		require get_template_directory() . '/inc/customizer/options/global/class-online-education-customize-content-style-options.php';

		// Header.
		require get_template_directory() . '/inc/customizer/options/header/class-online-education-customize-site-identity-options.php';
		require get_template_directory() . '/inc/customizer/options/header/class-online-education-customize-general-header-options.php';
		require get_template_directory() . '/inc/customizer/options/header/class-online-education-customize-menu-options.php';
		require get_template_directory() . '/inc/customizer/options/header/class-online-education-customize-page-header-options.php';
		require get_template_directory() . '/inc/customizer/options/header/class-online-education-customize-header-button-options.php';

		// Content.
		require get_template_directory() . '/inc/customizer/options/content/class-online-education-customize-blog-options.php';
		require get_template_directory() . '/inc/customizer/options/content/class-online-education-customize-single-post-options.php';

		// Footer.
		require get_template_directory() . '/inc/customizer/options/footer/class-online-education-customize-footer-column-options.php';
		require get_template_directory() . '/inc/customizer/options/footer/class-online-education-customize-footer-bar-options.php';
		require get_template_directory() . '/inc/customizer/options/footer/class-online-education-customize-scroll-to-top-options.php';

		if ( Online_Education_Utils::is_masteriyo_active() ) {
			require get_template_directory() . '/inc/customizer/options/masteriyo/class-online-education-customize-masteriyo-courses-archive-options.php';
			require get_template_directory() . '/inc/customizer/options/masteriyo/class-online-education-customize-masteriyo-single-course-options.php';
		}
	}

	/**
	 * Adds inline styles.
	 *
	 * @return void
	 */
	public function customizer_dynamic_css() {

		wp_add_inline_style( 'online-education-style', Online_Education_Dynamic_CSS::get_css() );
	}
}

return new Online_Education_Customizer();
