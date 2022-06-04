<?php
/**
 * Extend WP_Customize_Control to add the background control.
 *
 * Class Online_Education_Color_Control
 *
 * @package    ThemeGrill
 * @since      3.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class to extend WP_Customize_Control to add the background customize control.
 *
 * Class Online_Education_Background_Control
 */
class Online_Education_Background_Control extends Online_Education_Customize_Base_Additional_Control {

	/**
	 * Control's Type.
	 *
	 * @var string
	 */
	public $type = 'online-education-background';

	/**
	 * Enqueue control related scripts/styles.
	 */
	public function enqueue() {

		parent::enqueue();

		wp_localize_script(
			'online-education-customize-controls',
			'OnlineEducationCustomizerControlBackground',
			array(
				'placeholder' => esc_html__( 'No file selected', 'online-education' ),
			)
		);

	}

	/**
	 * Refresh the parameters passed to the JavaScript via JSON.
	 *
	 * @see WP_Customize_Control::to_json()
	 */
	public function to_json() {

		parent::to_json();

		$this->json['default'] = $this->setting->default;
		if ( isset( $this->default ) ) {
			$this->json['default'] = $this->default;
		}
		$this->json['value'] = $this->value();

		$this->json['link']        = $this->get_link();
		$this->json['id']          = $this->id;
		$this->json['label']       = esc_html( $this->label );
		$this->json['description'] = $this->description;

	}

	/**
	 * An Underscore (JS) template for this control's content (but not its container).
	 *
	 * Class variables for this control class are available in the `data` JS object;
	 * export custom variables by overriding {@see WP_Customize_Control::to_json()}.
	 *
	 * @see WP_Customize_Control::print_template()
	 */
	protected function content_template() {
		?>

		<div class="customizer-text">
			<# if ( data.label ) { #>
			<span class="customize-control-title">{{{ data.label }}}</span>
			<# } #>

			<# if ( data.description ) { #>
			<span class="description customize-control-description">{{{ data.description }}}</span>
			<# } #>
		</div>

		<div class="customize-control-content">

			<div class="background-color">
				<span class="customize-control-title"><?php esc_html_e( 'Background Color', 'online-education' ); ?></span>
				<input data-name="{{ data.name }}"
						type="text"
						data-default-color="{{ data.default['background-color'] }}"
						data-alpha-enabled="true"
						value="{{ data.value['background-color'] }}"
						class="online-education-color-picker-alpha color-picker-hex"
				/>
			</div>

			<div class="background-image">
				<span class="customize-control-title"><?php esc_html_e( 'Background Image', 'online-education' ); ?></span>
				<div class="attachment-media-view background-image-upload">
					<# if ( data.value['background-image'] ) { #>
					<div class="thumbnail thumbnail-image"><img src="{{ data.value['background-image'] }}" alt="" />
					</div>
					<# } else { #>
					<div class="placeholder"><?php esc_html_e( 'No Image Selected', 'online-education' ); ?></div>
					<# } #>

					<div class="actions">
						<button data-name="{{ data.name }}"
								class="button background-image-upload-remove-button<# if ( ! data.value['background-image'] ) { #> hidden <# } #>"
						>
							<?php esc_attr_e( 'Remove', 'online-education' ); ?>
						</button>

						<button data-name="{{ data.name }}"
								type="button"
								class="button background-image-upload-button"
						>
							<?php esc_attr_e( 'Select Image', 'online-education' ); ?>
						</button>
					</div>
				</div>
			</div>

			<div class="background-repeat">
				<span class="customize-control-title"><?php esc_html_e( 'Background Repeat', 'online-education' ); ?></span>
				<select data-name="{{ data.name }}" {{{ data.inputAttrs }}}>
					<option value="no-repeat"
					<# if ( 'no-repeat' === data.value['background-repeat'] ) { #> selected <# }
					#>><?php esc_html_e( 'No Repeat', 'online-education' ); ?></option>
					<option value="repeat"
					<# if ( 'repeat' === data.value['background-repeat'] ) { #> selected <# }
					#>><?php esc_html_e( 'Repeat All', 'online-education' ); ?></option>
					<option value="repeat-x"
					<# if ( 'repeat-x' === data.value['background-repeat'] ) { #> selected <# }
					#>><?php esc_html_e( 'Repeat Horizontally', 'online-education' ); ?></option>
					<option value="repeat-y"
					<# if ( 'repeat-y' === data.value['background-repeat'] ) { #> selected <# }
					#>><?php esc_html_e( 'Repeat Vertically', 'online-education' ); ?></option>
				</select>
			</div>

			<div class="background-position">
				<span class="customize-control-title"><?php esc_html_e( 'Background Position', 'online-education' ); ?></span>
				<select data-name="{{ data.name }}" {{{ data.inputAttrs }}}>
					<option value="left top"
					<# if ( 'left top' === data.value['background-position'] ) { #> selected <# }
					#>><?php esc_html_e( 'Left Top', 'online-education' ); ?></option>
					<option value="left center"
					<# if ( 'left center' === data.value['background-position'] ) { #> selected <# }
					#>><?php esc_html_e( 'Left Center', 'online-education' ); ?></option>
					<option value="left bottom"
					<# if ( 'left bottom' === data.value['background-position'] ) { #> selected <# }
					#>><?php esc_html_e( 'Left Bottom', 'online-education' ); ?></option>
					<option value="right top"
					<# if ( 'right top' === data.value['background-position'] ) { #> selected <# }
					#>><?php esc_html_e( 'Right Top', 'online-education' ); ?></option>
					<option value="right center"
					<# if ( 'right center' === data.value['background-position'] ) { #> selected <# }
					#>><?php esc_html_e( 'Right Center', 'online-education' ); ?></option>
					<option value="right bottom"
					<# if ( 'right bottom' === data.value['background-position'] ) { #> selected <# }
					#>><?php esc_html_e( 'Right Bottom', 'online-education' ); ?></option>
					<option value="center top"
					<# if ( 'center top' === data.value['background-position'] ) { #> selected <# }
					#>><?php esc_html_e( 'Center Top', 'online-education' ); ?></option>
					<option value="center center"
					<# if ( 'center center' === data.value['background-position'] ) { #> selected <# }
					#>><?php esc_html_e( 'Center Center', 'online-education' ); ?></option>
					<option value="center bottom"
					<# if ( 'center bottom' === data.value['background-position'] ) { #> selected <# }
					#>><?php esc_html_e( 'Center Bottom', 'online-education' ); ?></option>
				</select>
			</div>

			<div class="background-size">
				<span class="customize-control-title"><?php esc_html_e( 'Background Size', 'online-education' ); ?></span>
				<select data-name="{{ data.name }}" {{{ data.inputAttrs }}}>
					<option value="cover"
					<# if ( 'cover' === data.value['background-size'] ) { #> selected <# }
					#>><?php esc_html_e( 'Cover', 'online-education' ); ?></option>
					<option value="contain"
					<# if ( 'contain' === data.value['background-size'] ) { #> selected <# }
					#>><?php esc_html_e( 'Contain', 'online-education' ); ?></option>
					<option value="auto"
					<# if ( 'auto' === data.value['background-size'] ) { #> selected <# }
					#>><?php esc_html_e( 'Auto', 'online-education' ); ?></option>
				</select>
			</div>

			<div class="background-attachment">
				<span class="customize-control-title"><?php esc_html_e( 'Background Attachment', 'online-education' ); ?></span>
				<select data-name="{{ data.name }}" {{{ data.inputAttrs }}}>
					<option value="scroll"
					<# if ( 'scroll' === data.value['background-attachment'] ) { #> selected <# }
					#>><?php esc_html_e( 'Scroll', 'online-education' ); ?></option>
					<option value="fixed"
					<# if ( 'fixed' === data.value['background-attachment'] ) { #> selected <# }
					#>><?php esc_html_e( 'Fixed', 'online-education' ); ?></option>
				</select>
			</div>

			<input class="background-hidden-value"
					value="{{ JSON.stringify( data.value ) }}"
					data-name="{{ data.name }}"
					type="hidden" {{{ data.link }}}
			>

		</div>

		<?php
	}

	/**
	 * Don't render the control content from PHP, as it's rendered via JS on load.
	 */
	public function render_content() {
	}

}
