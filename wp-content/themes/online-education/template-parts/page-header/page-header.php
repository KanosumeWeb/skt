<?php
/**
 * Page header template.
 *
 * @link    https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Online_Education
 * @since   1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
?>

<div class="ole-page-header">
	<div class="ole-container">

		<?php
		$args = array(
			'container_before' => '<div class="ole-breadcrumbs">',
			'container_after'  => '</div>',
		);

		if ( Online_Education_Utils::page_header_has_breadcrumbs() ) {
			online_education_breadcrumb( $args );
		}
		?>
		<?php if ( Online_Education_Utils::page_header_has_title() ) : ?>
			<div class="ole-page-header-title">
				<h1 class="ole-page-title">
					<?php online_education_page_title(); ?>
				</h1>
				<?php online_education_archive_description(); ?>
			</div>
		<?php endif; ?>
	</div>
</div><!-- .ole-page-header -->
