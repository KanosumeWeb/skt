<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link    https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Online_Education
 * @since   1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
?>

			</div> <!-- /.ole-row from header.php -->
		</div> <!-- /.ole-container from header.php -->
	</div> <!-- /#content from header.php -->

	<footer id="colophon" class="site-footer">
		<?php online_education_footer_columns(); ?>
		<?php online_education_footer_bar(); ?>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php online_education_footer_bottom(); ?>
<?php wp_footer(); ?>

</body>
</html>
