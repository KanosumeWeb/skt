<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @link    https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package Online_Education
 * @since   1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header();
?>

	<main id="primary" class="site-main">

		<section class="error-404 not-found">
			<header class="page-header">
				<h1 class="page-title"><?php esc_html_e( '404', 'online-education' ); ?></h1>
				<p><?php esc_html_e( 'Oops! Page not found', 'online-education' ); ?></p>
			</header><!-- .page-header -->

			<div class="page-content">
				<p><?php esc_html_e( 'Try searching or go back to Home', 'online-education' ); ?></p>

				<?php get_search_form(); ?>

				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="ole-btn">
					<span><?php esc_html_e( 'Go back to Home', 'online-education' ); ?></span>
				</a>


			</div><!-- .page-content -->
		</section><!-- .error-404 -->

	</main><!-- #main -->

<?php
get_sidebar();
get_footer();
