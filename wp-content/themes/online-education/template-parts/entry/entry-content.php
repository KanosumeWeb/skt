<?php
/**
 * Template part for entry content.
 *
 * @link    https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Online_Education
 * @since   1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
?>

<div class="entry-content">
	<?php
	if ( is_single() ) {
		the_content(
			sprintf(
				wp_kses(
				/* translators: %s: Name of current post. Only visible to screen readers */
					__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'online-education' ),
					array(
						'span' => array(
							'class' => array(),
						),
					)
				),
				wp_kses_post( get_the_title() )
			)
		);
	} else {
		the_content();
	}

	wp_link_pages(
		array(
			'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'online-education' ),
			'after'  => '</div>',
		)
	);
	?>
</div><!-- .entry-content -->
