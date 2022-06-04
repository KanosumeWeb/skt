<?php
/**
 * Register meta boxes.
 */

defined( 'ABSPATH' ) || exit;

/**
 * Online_Education_Meta_Boxes
 */
class Online_Education_Meta_Boxes {

	/**
	 * Meta box render content callback.
	 */
	public static function render() {

		// Add nonce for security and authentication.
		wp_nonce_field( 'online_education_nonce_action', 'online_education_meta_nonce' );

		$transparent_header = get_post_meta( get_the_ID(), 'online_education_transparent_header' );
		$transparent_header = isset( $transparent_header[0] ) ? $transparent_header[0] : 0;
		$content_style      = get_post_meta( get_the_ID(), 'online_education_content_style' );
		$content_style      = isset( $content_style[0] ) ? isset( $content_style[0] ) : 'customizer';
		?>
		<div class="ole-ui-content">
			<div class="options-group-wrap">
				<div class="options-group" style="display: flex; flex-direction: column; margin: 15px 0;">
					<label for="ole-content-style">
						<?php esc_html_e( 'Content Style', 'online-education' ); ?>
					</label>
					<select name="online_education_content_style" id="ole-content-style">
						<option value="customizer" <?php selected( $content_style, 'customizer' ); ?>><?php esc_html_e( 'From customizer', 'online-education' ); ?></option>
						<option value="boxed" <?php selected( $content_style, 'boxed' ); ?>><?php esc_html_e( 'Boxed', 'online-education' ); ?></option>
						<option value="normal" <?php selected( $content_style, 'normal' ); ?>><?php esc_html_e( 'Normal', 'online-education' ); ?></option>
					</select>
				</div>
				<div class="options-group" style="display: flex; align-items: center; margin: 15px 0;">
					<input type="checkbox" id="ole-transparent-header" name="online_education_transparent_header" style="margin: 0 10px 0 0" value="1" <?php checked( $transparent_header, 1 ); ?>>
					<label for="ole-transparent-header">
						<?php esc_html_e( 'Transparent Header', 'online-education' ); ?>
					</label>
				</div>
			</div>
		</div>
		<?php
	}

	/**
	 * Save meta box.
	 *
	 * @param $post_id
	 * @return void
	 */
	public static function save( $post_id ) {

		$transparent_header = ( isset( $_POST['online_education_transparent_header'] ) && '1' === $_POST['online_education_transparent_header'] ) ? 1 : 0; // phpcs:ignore -- Nonce verification is not required here.
		$content_style      = isset( $_POST['online_education_content_style'] ) ? $_POST['online_education_content_style'] : 'customizer'; // phpcs:ignore -- Nonce verification is not required here.

		update_post_meta( $post_id, 'online_education_transparent_header', $transparent_header );
		update_post_meta( $post_id, 'online_education_content_style', $content_style );

		/**
		 * Hook for page settings data save.
		 */
		do_action( 'online_education_meta_settings_save', $post_id );
	}
}
