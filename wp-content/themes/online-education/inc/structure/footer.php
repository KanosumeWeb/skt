<?php
/**
 * Hooks for Footer HTML markups.
 *
 * @package Online_Education
 * @since   1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'online_education_mobile_navigation_markup' ) ) {

	/**
	 * Adds Online_Education mobile navigation markup.
	 *
	 * @return void
	 */
	function online_education_mobile_navigation_markup() {
		?>
		<div class="ole-mobile-canvas">
			<div class="ole-mobile-canvas--actions">
				<div class="ole-site-branding">
					<?php the_custom_logo(); ?>
				</div>
				<a href="#" class="close-mobile-menu" aria-controls="mobile-menu" aria-expanded="false">
					<?php online_education_get_icon( 'close' ); ?>
				</a>
			</div>
			<nav id="mobile-navigation" class="ole-mobile-navigation">
				<?php
				if ( has_nav_menu( 'ole-menu-mobile' ) || has_nav_menu( 'ole-menu-primary' ) ) {
					wp_nav_menu(
						array(
							'theme_location' => has_nav_menu( 'ole-menu-mobile' ) ? 'ole-menu-mobile' : 'ole-menu-primary',
							'menu_class'     => 'ole-mobile-menu',
							'menu_id'        => 'ole-mobile-menu',
							'container'      => '',
						)
					);
				} else {
					wp_page_menu(
						array(
							'menu_class' => 'ole-mobile-menu',
							'menu_id'    => 'ole-mobile-menu',
							'container'  => 'ul',
							'before'     => '',
							'after'      => '',
						)
					);
				}
				?>
			</nav>
		</div>
		<?php
	}
	add_action( 'online_education_footer_bottom', 'online_education_mobile_navigation_markup' );
}

if ( ! function_exists( 'online_education_scroll_to_top' ) ) {

	/**
	 * Adds scrol to top markup.
	 *
	 * @return void
	 */
	function online_education_scroll_to_top() {

		if ( get_theme_mod( 'online_education_scroll_to_top', true ) ) {
			?>
				<a href="#" id="ole-scroll-to-top" class="ole-scroll-to-top">
					<?php online_education_get_icon( 'arrow-up' ); ?>
				</a>
			<?php
		}
	}
	add_action( 'online_education_footer_bottom', 'online_education_scroll_to_top' );
}

if ( ! function_exists( 'online_education_footer_columns_markup' ) ) {

	/**
	 * Adds Online_Education footer columns markup.
	 *
	 * @return void
	 */
	function online_education_footer_columns_markup() {

		$has_active_sidebar = false;

		// Change the value of $has_active_sidebar to true if any of footer sidebar is active.
		for ( $col = 1; $col <= 4; $col++ ) {
			if ( is_active_sidebar( 'ole-footer-' . $col ) ) {
				$has_active_sidebar = true;

				break;
			}
		}

		// Return, if none of the footer sidebar is active.
		if ( ! $has_active_sidebar ) {
			return;
		}
		?>
		<div class="ole-footer-cols">
			<div class="ole-container">
				<?php
				for ( $col = 1; $col <= 4; $col++ ) :

					$sidebar_id = 'ole-footer-' . $col;

					if ( is_active_sidebar( $sidebar_id ) ) :
						?>
						<div class="ole-footer-col ole-footer-col--<?php echo esc_attr( $col ); ?>">
							<?php dynamic_sidebar( $sidebar_id ); ?>
						</div>
						<?php
					endif;
				endfor;
				?>
			</div>
		</div><!-- .ole-footer-cols -->
		<?php
	}
	add_action( 'online_education_footer_columns', 'online_education_footer_columns_markup' );
}

if ( ! function_exists( 'online_education_footer_bar_markup' ) ) {

	/**
	 * Adds Online_Education bar markup.
	 *
	 * @return void
	 */
	function online_education_footer_bar_markup() {
		?>
		<div class="ole-footer-bar">
			<div class="ole-container">
				<?php online_education_footer_bar_copyright(); ?>
			</div>
		</div><!-- .ole-footer-bar -->
		<?php
	}
	add_action( 'online_education_footer_bar', 'online_education_footer_bar_markup' );
}

if ( ! function_exists( 'online_education_footer_bar_content' ) ) {

	/**
	 * Markup for footer bar copyright.
	 *
	 * @return void
	 * @since  1.0.0
	 */
	function online_education_footer_bar_copyright() {

		$default = sprintf(
		/* translators: 1: Copyright, 2: Site title, 3: Current year, 4: Theme credit */
			esc_html__( '%1$s %2$s %3$s | %4$s', 'online-education' ),
			'{copyright}',
			'{site-title}',
			'{year}',
			'{theme-credit}'
		);

		$content = get_theme_mod( 'online_education_footer_copyright', $default );

		$theme_credit = '<a href="https://themegrill.com/" target="_blank"
							title="' . esc_attr__( 'Online Education -  Complete Package for Your eLearning Site.', 'online-education' ) . '"
							rel="noreferrer">' . esc_html__( 'Built with Online Education by ThemeGrill', 'online-education' ) . '</a>';

		if ( $content || is_customize_preview() ) {
			$content = str_replace( '{copyright}', '&copy;', $content );
			$content = str_replace( '{site-title}', get_bloginfo( 'name' ), $content );
			$content = str_replace( '{year}', date_i18n( 'Y' ), $content );
			$content = str_replace( '{theme-credit}', $theme_credit, $content );
		}
		?>
		<div class="ole-footer-bar-section">
			<?php echo do_shortcode( wp_kses_post( $content ) ); ?>
		</div><!-- .ole-footer-bar-section -->
		<?php
	}
}
