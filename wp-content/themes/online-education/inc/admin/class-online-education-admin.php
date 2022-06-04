<?php
/**
 *
 */

class Online_Education_Admin {

	/**
	 * Instance of class Online_Education_Admin.
	 *
	 * @var $instance
	 */
	private static $instance = null;

	/**
	 * Initiator.
	 *
	 * @return Online_Education_Admin|null
	 */
	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Constructor.
	 */
	private function __construct() {
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue' ) );
	}

	/**
	 * Enqueue admin scripts and styles.
	 *
	 * @return void
	 */
	public function enqueue() {
		wp_enqueue_style( 'online-education-admin', get_template_directory_uri() . '/inc/admin/assets/css/admin.css', array(), ONLINE_EDUCATION_VERSION );
		wp_enqueue_script( 'online-education-admin', get_stylesheet_directory_uri() . '/inc/admin/assets/js/admin.js', array( 'jquery' ), ONLINE_EDUCATION_VERSION, true );

		wp_localize_script(
			'online-education-admin',
			'onlineEducationAdmin',
			array(
				'uri'          => '/themes.php?page=demo-importer&browse=all',
				'installNonce' => wp_create_nonce( 'online_education_tdi_install_nonce' ),
				'dismissNonce' => wp_create_nonce( 'online_education_dismiss_welcome_notice_nonce' ),
				'btnText'      => ! file_exists( WP_PLUGIN_DIR . '/themegrill-demo-importer/themegrill-demo-importer.php' ) ?
					esc_html__( 'Processing...', 'online-education' ) :
					( file_exists( WP_PLUGIN_DIR . '/themegrill-demo-importer/themegrill-demo-importer.php' ) && is_plugin_inactive( 'themegrill-demo-importer/themegrill-demo-importer.php' ) ?
						esc_html__( 'Activating...', 'online-education' ) :
						esc_html__( 'Redirecting...', 'online-education' ) ),
			)
		);
	}
}

Online_Education_Admin::instance();
