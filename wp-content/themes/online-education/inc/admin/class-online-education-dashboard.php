<?php
/**
 * Online Education dashboard page.
 *
 * Class Online_Education_Dashboard
 *
 * @package    ThemeGrill
 * @since      1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Class Online_Education_Dashboard
 */
class Online_Education_Dashboard {

	/**
	 * Instance of class Online_Education_Dashboard.
	 *
	 * @var $instance
	 * @since 1.0.0
	 */
	private static $instance;

	/**
	 * Initiator.
	 *
	 * @since 1.0.0
	 *
	 * @return object Online_Education_Dashboard
	 */
	public static function instance() {

		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Online_Education_Dashboard constructor.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	private function __construct() {
		$this->setup_hooks();
	}

	/**
	 * Setup hooks.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	private function setup_hooks() {
		add_action( 'admin_menu', array( $this, 'admin_menu' ) );
	}

	/**
	 * Create menu.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function admin_menu() {

		/* translators: %s: Theme Name. */
		$theme_page_name = sprintf( esc_html__( '%s Options', 'online-education' ), 'Online Education' );

		$theme_page = add_theme_page(
			$theme_page_name,
			$theme_page_name,
			'edit_theme_options',
			'online-education-options',
			array(
				$this,
				'option_page',
			)
		);
	}

	/**
	 * Option page markup.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function option_page() {

		$btn_text = ! file_exists( WP_PLUGIN_DIR . '/themegrill-demo-importer/themegrill-demo-importer.php' ) ?
					esc_html__( 'Install ThemeGrill Demo Importer Plugin', 'online-education' ) :
					( file_exists( WP_PLUGIN_DIR . '/themegrill-demo-importer/themegrill-demo-importer.php' ) && is_plugin_inactive( 'themegrill-demo-importer/themegrill-demo-importer.php' ) ?
						esc_html__( 'Activate ThemeGrill Demo Importer Plugin', 'online-education' ) :
						esc_html__( 'Demo Library', 'online-education' ) );

		$customize_options = array(
			'site_logo' => array(
				'label' => __( 'Upload Logo', 'online-education' ),
				'link'  => admin_url( 'customize.php?autofocus[control]=custom_logo' ),
				'icon'  => 'dashicons-format-image',
			),
			'colors'    => array(
				'label' => __( 'Set Color', 'online-education' ),
				'link'  => admin_url( 'customize.php?autofocus[section]=online_education_global_colors_section' ),
				'icon'  => 'dashicons-admin-appearance',
			),
			'header'    => array(
				'label' => __( 'Header Options', 'online-education' ),
				'link'  => admin_url( 'customize.php?autofocus[panel]=online_education_header_panel' ),
				'icon'  => 'dashicons-insert-before',
			),
			'blog'      => array(
				'label' => __( 'Blog Options', 'online-education' ),
				'link'  => admin_url( 'customize.php?autofocus[section]=online_education_blog_section' ),
				'icon'  => ' dashicons-editor-bold',
			),
			'footer'    => array(
				'label' => __( 'Footer Options', 'online-education' ),
				'link'  => admin_url( 'customize.php?autofocus[panel]=online_education_footer_panel' ),
				'icon'  => 'dashicons-insert-after',
			),
		);
		?>
		<div class="wrap">
			<div class="metabox-holder">
				<div class="ole-header" >
					<div class="ole-container">
						<div class="ole-title">
							<img class="ole-icon" src="<?php echo esc_url( get_stylesheet_directory_uri() . '/inc/admin/assets/icons/online-education.png' ); ?>" alt="online-education">
							<span class="ole-version">
									<?php
									echo esc_html( self::get_theme()->Version );
									?>
							</span>
						</div>
					</div><!--/.ole-container-->
				</div> <!--/.ole-header-->
				<div class="ole-container">
					<div class="postbox-container" style="float: none;">
						<div class="col-70">
							<h2 style="height:0;margin:0;"><!-- admin notices below this element --></h2>
							<div class="postbox">
								<h3 class="hndle"><?php esc_html_e( 'Quick customize settings', 'online-education' ); ?></h3>
								<div class="inside ole-quick-settings-section" style="padding: 0;margin: 0;">
									<ul>
										<?php foreach ( $customize_options as $customize_option ) : ?>
											<li>
												<a href="<?php echo esc_url( $customize_option['link'] ); ?>" target="_blank">
													<span class="dashicons <?php echo esc_attr( $customize_option['icon'] ); ?>"></span>
													<h4><?php echo esc_html( $customize_option['label'] ); ?></h4>
												</a>
											</li>
										<?php endforeach; ?>
									</ul>
								</div>
							</div>
						</div> <!--/.col-70-->
						<div class="col-30">
							<div class="postbox">
								<h3 class="hndle" ><span class="dashicons dashicons-download"></span><span><?php esc_html_e( 'Starter Demo', 'online-education' ); ?></span></h3>
								<div class="inside">
									<p><?php esc_html_e( 'You do not need to build your store from scratch, Online Education provides a starter demo site.', 'online-education' ); ?></p>
									<p><?php esc_html_e( 'Import demo site and start editing as you like.', 'online-education' ); ?></p>
									<a
										href="#"
										class="ole-get-started"
										data-name="<?php esc_attr_e( 'themegrill-demo-importer', 'online-education' ); ?>"
										aria-label="<?php esc_attr_e( 'Get started with Online Education', 'online-education' ); ?>"
									>
										<?php echo esc_html( $btn_text ); ?>
									</a>
								</div>
							</div>
						</div><!--/.col-30-->
					</div><!--/.postbox-container-->
				</div><!--/.ole-container-->
			</div><!--/.metabox-holder-->
		</div><!--/.wrap-->
		<?php
	}

	/**
	 * Get theme.
	 *
	 * @since 1.0.0
	 * @return false|WP_Theme
	 */
	public static function get_theme() {

		if ( ! is_child_theme() ) {
			$theme = wp_get_theme();
		} else {
			$theme = wp_get_theme()->parent();
		}

		return $theme;
	}
}

Online_Education_Dashboard::instance();
