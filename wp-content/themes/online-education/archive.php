<?php
/**
 * The template for displaying archive pages.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Online_Education
 * @since   1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header();
?>

	<main id="primary" class="site-main">

		<?php online_education_content_archive(); ?>

	</main><!-- #main -->

<?php
get_sidebar();
get_footer();
