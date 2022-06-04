<?php
/**
 * Custom template tags for this theme.
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package Online_Education
 * @since   1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'wp_body_open' ) ) :

	/**
	 * Shim for sites older than 5.2.
	 *
	 * @link https://core.trac.wordpress.org/ticket/12563
	 */
	function wp_body_open() {
		do_action( 'wp_body_open' );
	}
endif;

if ( ! function_exists( 'online_education_page_title' ) ) :

	/**
	 * Get the title.
	 *
	 * Returns the title of a blog page, archive page etc.
	 */
	function online_education_page_title() {

		if ( is_archive() ) {
			if ( is_author() ) :
				/**
				 * Queue the first post, that way we know
				 * what author we're dealing with (if that is the case).
				 */
				the_post();
				/* translators: %s: author. */
				$page_title = sprintf( esc_html__( 'Author: %s', 'online-education' ), '<span class="vcard">' . get_the_author() . '</span>' );
				/**
				 * Since we called the_post() above, we need to
				 * rewind the loop back to the beginning that way
				 * we can run the loop properly, in full.
				 */
				rewind_posts();

			elseif ( is_post_type_archive() ) :
				$page_title = post_type_archive_title( '', false );

			elseif ( is_day() ) :
				/* translators: %s: day */
				$page_title = sprintf( esc_html__( 'Day: %s', 'online-education' ), '<span>' . get_the_date() . '</span>' );

			elseif ( is_month() ) :
				/* translators: %s: month */
				$page_title = sprintf( esc_html__( 'Month: %s', 'online-education' ), '<span>' . get_the_date( 'F Y' ) . '</span>' );

			elseif ( is_year() ) :
				/* translators: %s: year. */
				$page_title = sprintf( esc_html__( 'Year: %s', 'online-education' ), '<span>' . get_the_date( 'Y' ) . '</span>' );

			else :
				$page_title = single_cat_title( '', false );

			endif;
		} elseif ( is_404() ) {
			$page_title = esc_html__( 'Page Not Found', 'online-education' );
		} elseif ( is_search() ) {
			$page_title = esc_html__( 'Search Results', 'online-education' );
		} elseif ( is_page() ) {
			$page_title = get_the_title();
		} elseif ( is_single() ) {
			$page_title = get_the_title();
		} elseif ( is_home() ) {
			$queried_id = get_option( 'page_for_posts' );
			$page_title = get_the_title( $queried_id );
		} else {
			$page_title = '';
		}

		$page_title = apply_filters( 'online_education_title', $page_title );

		echo wp_kses_post( $page_title );
	}
endif;

if ( ! function_exists( 'online_education_archive_description' ) ) :

	/**
	 * Output the archive description.
	 *
	 * @since 1.0.0
	 */
	function online_education_archive_description() {

		the_archive_description( '<div class="ole-page-header-description">', '</div>' );
	}
endif;

if ( ! function_exists( 'online_education_entry_meta_date' ) ) :

	/**
	 * Prints HTML with meta information for the current post-date/time.
	 */
	function online_education_entry_meta_date() {

		$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';

		if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
			$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
		}

		$time_string = sprintf(
			$time_string,
			esc_attr( get_the_date( DATE_W3C ) ),
			esc_html( get_the_date() ),
			esc_attr( get_the_modified_date( DATE_W3C ) ),
			esc_html( get_the_modified_date() )
		);

		$allowed_time_html = array(
			'time' => array(
				'datetime' => true,
				'class'    => true,
			),
		);

		echo '<span class="post-date">' . wp_kses( online_education_get_icon( 'calender', false ), Online_Education_SVG_Icons::$allowed_html ) . '<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . wp_kses( $time_string, $allowed_time_html ) . '</a></span>';
	}
endif;

if ( ! function_exists( 'online_education_entry_meta_author' ) ) :

	/**
	 * Prints HTML with meta information for the current author.
	 */
	function online_education_entry_meta_author() {
		echo '<span class="post-author"><span class="screen-reader-text">' . esc_html__( 'Posted by', 'online-education' ) . '</span>' . wp_kses( online_education_get_icon( 'user', false ), Online_Education_SVG_Icons::$allowed_html ) . '<span><span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a></span></span></span>';
	}
endif;

if ( ! function_exists( 'online_education_entry_category' ) ) :

	/**
	 * Prints HTML with meta information for the categories assigned.
	 */
	function online_education_entry_category() {

		// Hide category and tag text for pages.
		if ( 'post' === get_post_type() ) {
			$categories_list = get_the_category_list( ' ' );

			if ( $categories_list ) {
				/* translators: 1: list of categories. */
				printf(
					'<span class="post-categories">' . wp_kses(
						$categories_list,
						array(
							'a' => array(
								'href' => true,
								'rel'  => true,
							),
						)
					) . '</span>'
				);
			}
		}
	}
endif;

if ( ! function_exists( 'online_education_entry_tag' ) ) :

	/**
	 * Prints HTML with meta information for the tag assigned.
	 */
	function online_education_entry_tag() {

		// Hide category and tag text for pages.
		if ( 'post' === get_post_type() && get_the_tag_list() ) {
			echo '<span class="post-tags">' . wp_kses( online_education_get_icon( 'tag', false ), Online_Education_SVG_Icons::$allowed_html ) . wp_kses(
				get_the_tag_list( '', ', ' ),
				array(
					'a' => array(
						'href' => true,
						'rel'  => true,
					),
				)
			) . '</span>';
		}
	}
endif;

if ( ! function_exists( 'online_education_entry_comments' ) ) :

	/**
	 * Prints HTML with meta information for the comments.
	 */
	function online_education_entry_comments() {

		if ( ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
			echo '<span class="comments-link">';

			online_education_get_icon( 'comment' );

			comments_popup_link(
				sprintf(
					wp_kses(
					/* translators: %s: post title */
						__( 'Leave a Comment<span class="screen-reader-text"> on %s</span>', 'online-education' ),
						array(
							'span' => array(
								'class' => array(),
							),
						)
					),
					wp_kses_post( get_the_title() )
				)
			);
			echo '</span>';
		}
	}
endif;

if ( ! function_exists( 'online_education_entry_thumbnail' ) ) :

	/**
	 * Displays an optional post thumbnail.
	 *
	 * Wraps the post thumbnail in an anchor element on index views, or a div
	 * element when on single views.
	 */
	function online_education_entry_thumbnail() {

		if ( post_password_required() || is_attachment() || ! has_post_thumbnail() ) {
			return;
		}

		$thumbnail_size  = get_theme_mod( 'online_education_blog_post_featured_image_size', 'full' );
		$thumbnail_ratio = is_single() ? get_theme_mod( 'online_education_single_post_featured_image_ratio', '4:3' ) : get_theme_mod( 'online_education_blog_post_featured_image_ratio', '4:3' );
		$thumbnail_attr  = '4:3' === $thumbnail_ratio ? "data-image-ratio=$thumbnail_ratio" : '';
		?>
		<div class="entry-thumbnail" <?php echo esc_attr( $thumbnail_attr ); ?>>
			<?php
			if ( is_singular() ) :
				the_post_thumbnail();
			else :
				?>
				<a class="entry-thumbnail__link" href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
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
			<?php endif; // End is_singular(). ?>
		</div><!-- .entry-thumbnail -->
		<?php
	}
endif;

if ( ! function_exists( 'online_education_comments' ) ) :

	/**
	 * Prints comment form and comments in single post and page.
	 */
	function online_education_comments() {

		// If comments are open or we have at least one comment, load up the comment template.
		if ( comments_open() || get_comments_number() ) :
			comments_template();
		endif;
	}
endif;

if ( ! function_exists( 'online_education_pagination' ) ) :

	/**
	 * Adds pagination links for posts.
	 *
	 * @return void
	 */
	function online_education_pagination() {

		$left_icon  = online_education_get_icon( 'chevron-left', false );
		$right_icon = online_education_get_icon( 'chevron-right', false );
		$args       = array(
			'type'      => 'list',
			'class'     => 'ole-pagination',
			'prev_text' => ( is_rtl() ? $right_icon : $left_icon ) . '<span class="screen-reader-text">' . __( 'Previous page', 'online-education' ) . '</span>',
			'next_text' => '<span class="screen-reader-text">' . __( 'Next page', 'online-education' ) . '</span>' . ( is_rtl() ? $left_icon : $right_icon ),
		);

		the_posts_pagination( $args );
	}
endif;

if ( ! function_exists( 'online_education_infinite_scroll_pagination' ) ) :

	/**
	 * Infinite load pagination
	 */
	function online_education_infinite_load_pagination() {

		global $wp_query;
		$event = get_theme_mod( 'online_education_blog_infinite_load_event', 'button' );

		if ( $wp_query->max_num_pages > 1 ) :
			?>
			<nav class="ole-infinite-pagination ole-infinite-pagination--<?php echo esc_attr( $event ); ?>">
				<div class="ole-load-more">

					<?php if ( 'button' === $event ) : ?>
						<a href="#" class="ole-load-more-btn">
					<?php endif; ?>

						<div class="ole-load-more-icon">
							<div class="spinner"></div>
						</div>

					<?php if ( 'button' === $event ) : ?>
							<span class="ole-load-more-text"><?php esc_html_e( 'Load More', 'online-education' ); ?></span>
						</a>
					<?php endif; ?>
				</div>
			</nav> <!-- /.ole-infinite-pagination -->
			<?php
		endif;
		?>
		<?php
	}
endif;

if ( ! function_exists( 'online_education_post_navigation' ) ) :

	/**
	 * Template part post-navigation.
	 *
	 * @return void
	 */
	function online_education_post_navigation() {
		get_template_part( 'template-parts/entry/entry', 'post-navigation' );
	}
endif;

if ( ! function_exists( 'online_education_breadcrumb' ) ) :

	/**
	 * Get breadcrumb markup.
	 *
	 * @param array $args Array for breadcrumb before and after container.
	 */
	function online_education_breadcrumb( $args = array() ) {

		$args = wp_parse_args(
			$args,
			array(
				'container_before' => '',
				'container_after'  => '',
			)
		);

		echo wp_kses_post( $args['container_before'] );

		online_education_breadcrumb_trail(
			array(
				'show_browse' => false,
			)
		);

		echo wp_kses_post( $args['container_after'] );
	}
endif;
