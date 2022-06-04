<?php
/**
 * Template part for author bio box.
 *
 * @link    https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Online_Education
 * @since   1.0.0
 */

if ( post_password_required() || ! is_single() ) {
	return;
}
?>

<div class="author-bio-box">
	<div class="author-bio-avatar">
		<?php echo get_avatar( get_the_author_meta( 'email' ), 100 ); ?>
	</div>
	<div class="author-bio-details">
		<h3 class="author-name">
			<?php the_author_meta( 'display_name' ); ?>
		</h3>

		<?php if ( get_the_author_meta( 'description' ) ) : ?>
			<p class="author-description">
				<?php the_author_meta( 'description' ); ?>
			</p>
		<?php endif; ?>
	</div>
</div>
