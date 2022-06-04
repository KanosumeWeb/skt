<?php
/**
 * Template part for displaying posts
 *
 * @link    https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Online_Education
 * @since   1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<?php
	$entry_elements = get_theme_mod(
		'online_education_single_post_elements',
		array(
			'thumbnail',
			'header',
			'meta',
			'content',
			'author-bio',
		)
	);

	foreach ( $entry_elements as $entry_element ) {
		get_template_part( 'template-parts/entry/entry', $entry_element );
	}
	?>
</article><!-- #post-<?php the_ID(); ?> -->
