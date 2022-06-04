<?php
/**
 * Hooks for the content area of the site.
 *
 * @package Online_Education
 * @since   1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'online_education_excerpt_more' ) ) {

	/**
	 * Remove [...] from excerpts.
	 *
	 * @return void
	 */
	function online_education_excerpt_more() {
		return; // phpcs:ignore Squiz.PHP.NonExecutableCode.ReturnNotRequired
	}
	add_filter( 'excerpt_more', 'online_education_excerpt_more' );
}

if ( ! function_exists( 'online_education_excerpt_length' ) ) {

	/**
	 * Filters excerpt length.
	 *
	 * @param int $length Number of words in an excerpt.
	 * @return int Filtered number of words in an excerpt.
	 */
	function online_education_excerpt_length( $length ) {

		$customizer_length = get_theme_mod( 'online_education_excerpt_length', 18 );

		if ( $customizer_length ) {
			$length = $customizer_length;
		}

		return intval( $length );
	}
	add_filter( 'excerpt_length', 'online_education_excerpt_length' );
}

if ( ! function_exists( 'online_education_content_loop' ) ) {

	/**
	 * Main content loop.
	 *
	 * @return void
	 */
	function online_education_content_loop() {

		$classes = apply_filters(
			'online_education_posts_classes',
			array(
				'ole-posts',
			)
		);

		if ( have_posts() ) :
			?>
			<div class="<?php echo esc_attr( implode( ' ', array_unique( $classes ) ) ); ?>">
				<?php
				while ( have_posts() ) :
					the_post();
					get_template_part( 'template-parts/content/content', '' );
				endwhile;
				?>
			</div>
			<?php
			if ( get_theme_mod( 'online_education_blog_pagination_enable', true ) ) :
				online_education_pagination();
			endif;
		else :
			get_template_part( 'template-parts/content/content', 'none' );
		endif;
	}
	add_action( 'online_education_content', 'online_education_content_loop' );
	add_action( 'online_education_content_search', 'online_education_content_loop' );
	add_action( 'online_education_content_archive', 'online_education_content_loop' );
}

if ( ! function_exists( 'online_education_single_content_loop' ) ) {

	/**
	 * Single content loop.
	 *
	 * @return void
	 */
	function online_education_single_content_loop() {

		if ( have_posts() ) :
			?>

			<?php
			while ( have_posts() ) :
				the_post();

				get_template_part( 'template-parts/content/content', 'single' );

				online_education_post_navigation();

				online_education_related_posts();

				online_education_comments();
			endwhile; // End of the loop.
		else :

			get_template_part( 'template-parts/content/content', 'none' );
		endif;
	}
	add_action( 'online_education_content_single', 'online_education_single_content_loop' );
}


if ( ! function_exists( 'online_education_read_more_text' ) ) {

	/**
	 * Filters read more text.
	 *
	 * @param string $text read more text.
	 * @return string Modified read more text.
	 */
	function online_education_read_more_text( $text ) {

		$customizer_text = get_theme_mod( 'online_education_read_more_text', '' );

		if ( $customizer_text ) {
			$text = $customizer_text;
		}

		return $text;
	}
	add_filter( 'online_education_read_more_text', 'online_education_read_more_text' );
}

if ( ! function_exists( 'online_education_related_posts' ) ) :

	/**
	 * Display the related posts if it is enabled via Customize Option.
	 */
	function online_education_related_posts() {

		// Bail out if related posts is disabled.
		$is_related_posts_enabled = get_theme_mod( 'online_education_related_posts', true );

		if ( ! $is_related_posts_enabled ) {
			return;
		}

		// Related posts query.
		global $post;

		// Define shared post arguments.
		$args = array(
			'no_found_rows'          => true,
			'update_post_meta_cache' => false,
			'update_post_term_cache' => false,
			'ignore_sticky_posts'    => true,
			'orderby'                => 'rand',
			'post__not_in'           => array( $post->ID ),
			'posts_per_page'         => 2,
			'category__in'           => wp_get_post_categories( $post->ID, array( 'fields' => 'ids' ) ),
		);

		$related_posts_query = new WP_Query( $args );
		$grid_cols           = get_theme_mod( 'online_education_related_posts_column', '2' );

		if ( $related_posts_query->have_posts() ) :
			?>

			<div class="ole-related-posts">

				<h2 class="ole-related-posts-header">
					<?php esc_html_e( 'You May Also Like', 'online-education' ); ?>
				</h2>

				<div class="ole-posts ole-grid-col--<?php echo esc_attr( $grid_cols ); ?>">
					<?php
					while ( $related_posts_query->have_posts() ) :
						$related_posts_query->the_post();
						get_template_part( 'template-parts/related-post/related-post' );
						wp_reset_postdata();
					endwhile;
					?>
				</div>

			</div>
			<?php
		endif;
	}
endif;
