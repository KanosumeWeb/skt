<?php
/**
 * Hooks for Header HTML markups.
 *
 * @package Online_Education
 * @since   1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'online_education_header_markup' ) ) {

	/**
	 * Adds Online_Education header markup.
	 *
	 * @return void
	 */
	function online_education_header_markup() {

		do_action( 'online_education_header_markup_before' );
		?>

		<header id="masthead" class="site-header">
			<?php
			online_education_masthead_lvl1();
			online_education_page_header();
			?>
		</header><!-- #masthead -->
		<?php
		do_action( 'online_education_header_markup_after' );
	}
	add_action( 'online_education_header', 'online_education_header_markup' );
}

if ( ! function_exists( 'online_education_masthead_lvl1_markup' ) ) {

	/**
	 * Adds Online_Education masthead level 1 markup.
	 *
	 * @return void
	 */
	function online_education_masthead_lvl1_markup() {

		$transparent_header_wrap_open  = Online_Education_Utils::has_transparent_header() ? '<div class="ole-transparent-header-wrap">' : '';
		$transparent_header_wrap_close = Online_Education_Utils::has_transparent_header() ? '</div>' : '';

		echo wp_kses_post( $transparent_header_wrap_open );
		?>
		<div id="masthead-lvl1" class="ole-masthead-lvl1">
			<div class="ole-container">
				<div class="ole-row">
					<div class="ole-masthead-lvl1--left">
						<?php online_education_site_branding(); ?>
					</div>
					<div class="ole-masthead-lvl1--right">
						<!-- Toggle button for mobile menu. -->
						<a href="#" id="menu-toggle" class="menu-toggle" aria-controls="mobile-menu" aria-expanded="false">
							<span></span>
							<span></span>
							<span></span>
						</a>
						<?php online_education_main_navigation(); ?>
					</div>
				</div> <!-- .ole-row -->
			</div> <!-- .ole-container -->
		</div> <!-- /.ole-masthead-lvl1 -->
		<?php
		echo wp_kses_post( $transparent_header_wrap_close );
	}
	add_action( 'online_education_masthead_lvl1', 'online_education_masthead_lvl1_markup' );
}

if ( ! function_exists( 'online_education_site_branding_markup' ) ) {

	/**
	 * Adds Online_Education site branding markup.
	 *
	 * @return void
	 */
	function online_education_site_branding_markup() {
		?>

		<div id="site-branding" class="ole-site-branding">
			<?php the_custom_logo(); ?>
			<div class="site-info-wrap">
				<?php online_education_site_title(); ?>
			</div>
		</div><!-- .ole-site-branding -->
		<?php
	}
	add_action( 'online_education_site_branding', 'online_education_site_branding_markup' );
}

if ( ! function_exists( 'online_education_site_title_markup' ) ) {

	/**
	 * Adds Online_Education site title markup.
	 *
	 * @return void
	 */
	function online_education_site_title_markup() {

		$logo = get_theme_mod( 'custom_logo' );

		if ( ! has_custom_logo() && ! $logo ) :
			?>
			<p class="site-title">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
					<?php bloginfo( 'name' ); ?>
				</a>
			</p>
			<?php
		endif;
	}
	add_action( 'online_education_site_title', 'online_education_site_title_markup' );
}

if ( ! function_exists( 'online_education_main_navigation_markup' ) ) {

	/**
	 * Adds Online_Education main navigation markup.
	 *
	 * @return void
	 */
	function online_education_main_navigation_markup() {
		?>

		<nav id="site-navigation" class="main-navigation">
			<?php
			if ( has_nav_menu( 'ole-menu-primary' ) ) {
				wp_nav_menu(
					array(
						'theme_location' => 'ole-menu-primary',
						'menu_id'        => 'ole-primary-menu',
						'container'      => '',
					)
				);
			} else {
				wp_page_menu(
					array(
						'menu_class' => 'ole-primary-menu',
						'container'  => 'ul',
						'before'     => '',
						'after'      => '',
					)
				);
			}
			?>
		</nav><!-- #site-navigation -->
		<?php
	}
	add_action( 'online_education_main_navigation', 'online_education_main_navigation_markup' );
}

if ( ! function_exists( 'online_education_change_logo_attr' ) ) {

	/**
	 * Change the logo image attr while retina logo is set.
	 *
	 * @param array  $attr Array of attribute values for the image markup.
	 * @param object $attachment Image attachment post.
	 * @param int    $size Requested image size.
	 *
	 * @return array
	 */
	function online_education_change_logo_attr( $attr, $attachment, $size ) {

		$custom_logo = get_theme_mod( 'custom_logo' );
		$retina_logo = get_theme_mod( 'online_education_retina_logo' );

		if ( $custom_logo && $retina_logo && isset( $attr['class'] ) && 'custom-logo' === $attr['class'] ) {
			$custom_logo_src = wp_get_attachment_image_src( $custom_logo, 'full' );
			$custom_logo_url = $custom_logo_src[0];

			// Set srcset.
			$attr['srcset'] = $custom_logo_url . ' 1x, ' . $retina_logo . ' 2x';
		}

		return $attr;
	}
	add_filter( 'wp_get_attachment_image_attributes', 'online_education_change_logo_attr', 10, 3 );
}

if ( ! function_exists( 'online_education_page_header_markup' ) ) {

	/**
	 * Create markup for the page header.
	 *
	 * @return void
	 */
	function online_education_page_header_markup() {

		if ( ! Online_Education_Utils::has_page_header() ) {
			return;
		}

		get_template_part( 'template-parts/page-header/page-header' );
	}
	add_action( 'online_education_page_header', 'online_education_page_header_markup' );
}
