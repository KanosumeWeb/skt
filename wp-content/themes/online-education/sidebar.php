<?php
/**
 * The template for displaying site's sidebar.
 *
 * @link    https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Online_Education
 * @since   1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( 'no-sidebar' === online_education_get_current_layout() || 'centered' === online_education_get_current_layout() ) {
	return;
}

$sidebar = apply_filters( 'online_education_get_sidebar', 'ole-right-sidebar' );
?>

<aside id="secondary" class="site-sidebar">
	<?php
	if ( is_active_sidebar( $sidebar ) ) {
		dynamic_sidebar( $sidebar );
	} elseif ( current_user_can( 'edit_theme_options' ) ) {
		?>
		<section class="ole-no-widget">
			<h2><?php echo esc_html( Online_Education_Utils::get_sidebar_name_by_id( $sidebar ) ); ?></h2>
			<a href="<?php echo esc_url( admin_url( 'widgets.php' ) ); ?>"><?php esc_html_e( 'Click here to add widgets for this area', 'online-education' ); ?></a>
		</section>
		<?php
	}
	?>
</aside><!-- #secondary -->
