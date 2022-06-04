<?php
/**
 * Template part for displaying post navigation.
 *
 * @link    https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Online_Education
 * @since   1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
?>

<nav class="navigation post-navigation" role="navigation" aria-label="Posts">
	<h2 class="screen-reader-text"><?php esc_html_e( 'Post navigation', 'online-education' ); ?></h2>
	<div class="nav-links">
		<?php
		$previous_post = get_previous_post();
		$next_post     = get_next_post();

		if ( $previous_post ) :
			?>
			<div class="nav-previous">
				<?php
				previous_post_link(
					'%link',
					'<span class="nav-title-wrap"><span class="nav-title">%title</span><span class="nav-meta">' . esc_html_x( 'Previous', 'Previous post link', 'online-education' ) . '</span></span>'
				);
				?>
			</div>
			<?php
		endif;

		if ( $next_post ) :
			?>
			<div class="nav-next">
				<?php
				next_post_link(
					'%link',
					'<span class="nav-title-wrap"><span class="nav-title">%title</span><span class="nav-meta">' . esc_html_x( 'Next', 'Next post link', 'online-education' ) . '</span></span>'
				);
				?>
			</div>
		<?php endif; ?>
	</div>
</nav>
