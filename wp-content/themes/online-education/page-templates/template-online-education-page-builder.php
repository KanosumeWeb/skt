<?php
/**
 * The template best suited for pages with Gutenberg blocks and pages using page builder plugins.
 *
 * Template Name: Gutenberg Block / Page Builder (Online Education)
 *
 * @link https://developer.wordpress.org/themes/template-files-section/page-template-files/
 *
 * Remove comments, page content area spacing.
 *
 * @package Online_Education
 */

get_header();
?>

	<main id="primary" class="site-main">

		<?php
		while ( have_posts() ) :
			the_post();
			the_content();
		endwhile; // End of the loop.
		?>

	</main><!-- #main -->

<?php
get_footer();
