<?php
/**
 * Template part for displaying related posts.
 *
 * @link    https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Online_Education
 * @since   1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

$thumbnail_size = get_theme_mod( 'online_education_blog_post_featured_image_size', 'full' )
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<?php if ( has_post_thumbnail() ) : ?>
		<div class="entry-thumbnail">
			<a class="entry-thumbnail__link" href="<?php the_permalink(); ?>">
				<?php
				the_post_thumbnail(
					$thumbnail_size,
					array(
						'alt' => the_title_attribute(
							array(
								'echo' => false,
							)
						),
					)
				);
				?>
			</a>
		</div>
	<?php endif; ?>

	<header class="entry-header">
		<?php the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' ); ?>
	</header>

	<div class="entry-meta">
		<?php
		online_education_entry_meta_author();
		online_education_entry_meta_date();
		?>
	</div>
</article><!-- #post-<?php the_ID(); ?> -->
