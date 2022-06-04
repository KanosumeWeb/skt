<?php
/**
 * Template part for entry footer.
 *
 * @link    https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Online_Education
 * @since   1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

$ws_read_more_text = apply_filters( 'online_education_read_more_text', __( 'Read More', 'online-education' ) );
?>

<footer class="entry-footer">
	<a href="<?php the_permalink(); ?>" class="ole-entry-cta">
		<span class="read-more-text"><?php echo esc_html( $ws_read_more_text ); ?></span>
		<?php online_education_get_icon( 'arrow-right' ); ?>
	</a>
</footer><!-- .entry-summary -->
