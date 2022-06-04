<?php
/**
 *
 */

class Online_Education_Welcome_Notice {

	/**
	 * Instance of class Online_Education_Welcome_Notice.
	 *
	 * @var $instance
	 */
	private static $instance = null;

	/**
	 * Initiator.
	 *
	 * @return Online_Education_Welcome_Notice|null
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
		add_action( 'admin_notices', array( $this, 'welcome_notice' ) );
		add_action( 'wp_ajax_hide_notice', array( $this, 'hide_notice' ) );
		add_action( 'wp_ajax_install_plugin', array( $this, 'install_plugin' ) );
	}

	/**
	 * Welcome notice markup.
	 *
	 * @return void
	 */
	public function welcome_notice() {
		if ( get_option( 'online_education_hide_welcome_notice' ) ) {
			return;
		}
		?>
		<div id="message" class="notice notice-success online-education-notice">
			<a class="online-education-message-close notice-dismiss" href="#"></a>
			<div class="online-education-message__content">
				<div class="online-education-message__image">
					<img class="online-education-screenshot" src="<?php echo esc_url( get_template_directory_uri() . '/screenshot.jpg' ); ?>" alt="<?php esc_attr_e( 'Online Education', 'online-education' ); ?>" />
				</div>

				<div class="online-education-message__text">
					<h2 class="online-education-message__heading">
						<?php
							printf(
							/* translators: 1: welcome page link starting html tag, 2: welcome page link ending html tag. */
								esc_html__( 'Welcome! Thank you for choosing Online Education! To fully take advantage of the best our theme can offer, please make sure you visit our %1$swelcome page%2$s.', 'online-education' ),
								'<a href="' . esc_url( admin_url( 'themes.php?page=online-education-options' ) ) . '">',
								'</a>'
							);
						?>
					</h2>

					<div class="online-education-message__cta">
						<a
							href="#"
							class="ole-get-started button button-primary button-hero"
							data-name="<?php esc_attr_e( 'themegrill-demo-importer', 'online-education' ); ?>"
							aria-label="<?php esc_attr_e( 'Get started with Online Education', 'online-education' ); ?>"
						>
							<?php esc_html_e( 'Get started with Online Education', 'online-education' ); ?>
						</a>
						<span class="plugin-install-notice"><?php esc_html_e( 'Clicking the button will install and activate the ThemeGrill demo importer plugin.', 'online-education' ); ?></span>
					</div>
				</div>
			</div>
		</div> <!-- /.online-education-message__content -->
		<?php
	}

	public function hide_notice() {
		check_ajax_referer( 'online_education_dismiss_welcome_notice_nonce', 'security' );
		update_option( 'online_education_hide_welcome_notice', 1 );
		wp_send_json_success();
		exit();
	}

	public function install_plugin() {
		check_ajax_referer( 'online_education_tdi_install_nonce', 'security' );
		update_option( 'online_education_hide_welcome_notice', 1 );

		$state = '';

		if ( class_exists( 'themegrill_demo_importer' ) ) {
			$state = 'activated';
		} elseif ( file_exists( WP_PLUGIN_DIR . '/themegrill-demo-importer/themegrill-demo-importer.php' ) ) {
			$state = 'installed';
		}

		if ( 'activated' === $state ) {
			$response['redirect'] = admin_url( '/themes.php?page=demo-importer&browse=all' );
		} elseif ( 'installed' === $state ) {
			$response['redirect'] = admin_url( '/themes.php?page=demo-importer&browse=all' );
			if ( current_user_can( 'activate_plugin' ) ) {
				$result = activate_plugin( 'themegrill-demo-importer/themegrill-demo-importer.php' );

				if ( is_wp_error( $result ) ) {
					$response['errorCode']    = $result->get_error_code();
					$response['errorMessage'] = $result->get_error_message();
				}
			}
		} else {
			wp_enqueue_style( 'plugin-install' );
			wp_enqueue_script( 'plugin-install' );

			$response['redirect'] = admin_url( '/themes.php?page=demo-importer&browse=all' );

			/**
			 * Install Plugin.
			 */
			include_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
			include_once ABSPATH . 'wp-admin/includes/plugin-install.php';

			$api = plugins_api(
				'plugin_information',
				array(
					'slug'   => sanitize_key( wp_unslash( 'themegrill-demo-importer' ) ),
					'fields' => array(
						'sections' => false,
					),
				)
			);

			$skin     = new WP_Ajax_Upgrader_Skin();
			$upgrader = new Plugin_Upgrader( $skin );
			$result   = $upgrader->install( $api->download_link );

			if ( $result ) {
				$response['installed'] = 'succeed';
			} else {
				$response['installed'] = 'failed';
			}

			// Activate plugin.
			if ( current_user_can( 'activate_plugin' ) ) {
				$result = activate_plugin( 'themegrill-demo-importer/themegrill-demo-importer.php' );

				if ( is_wp_error( $result ) ) {
					$response['errorCode']    = $result->get_error_code();
					$response['errorMessage'] = $result->get_error_message();
				}
			}
		}
		wp_send_json( $response );
		exit();
	}
}

Online_Education_Welcome_Notice::instance();
