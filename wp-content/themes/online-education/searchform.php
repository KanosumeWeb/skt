<?php
/**
 * The template for search form.
 *
 * @link    https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Online_Education
 * @since   1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
?>

<form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<label>
		<span class="screen-reader-text"><?php echo esc_attr_x( 'Search for:', 'label', 'online-education' ); ?></span>
		<input type="search" class="search-field" placeholder="<?php echo esc_attr_x( 'Search &hellip;', 'placeholder', 'online-education' ); ?>" value="<?php echo esc_attr( get_search_query() ); ?>" name="s" title="<?php echo esc_attr_x( 'Search for:', 'label', 'online-education' ); ?>">
	</label>
	<button type="submit" value="<?php echo esc_attr_x( 'Search', 'submit button', 'online-education' ); ?>">
		<?php online_education_get_icon( 'search' ); ?>
	</button>
</form>
