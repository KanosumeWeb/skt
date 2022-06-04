<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package Online_Education
 * @since   1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header();
?>

	<main id="primary" class="site-main">

		<?php online_education_content_search(); ?>

	</main><!-- #main -->

<?php
get_sidebar();
get_footer();
