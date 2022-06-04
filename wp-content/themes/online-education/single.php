<?php
/**
 * The template for displaying all single posts.
 *
 * @link    https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Online_Education
 * @since   1.0.0
 */

get_header();
?>

	<main id="primary" class="site-main">

		<?php online_education_content_single(); ?>

	</main><!-- #main -->

<?php
get_sidebar();
get_footer();
