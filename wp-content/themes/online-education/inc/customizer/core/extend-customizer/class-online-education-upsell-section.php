<?php
/**
 * Customize upsell section.
 *
 * Class Online_Education_Upsell_Section
 *
 * @package    ThemeGrill
 * @since      Online_Education 2.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class to include upsell link campaign for theme.
 *
 * Class Online_Education_Upsell_Section
 */
class Online_Education_Upsell_Section extends WP_Customize_Section {

	/**
	 * Control type.
	 *
	 * @var string
	 */
	public $type = 'online_education_upsell_section';

	/**
	 * Control URL.
	 *
	 * @var string
	 */
	public $url = '';

	/**
	 * Control ID.
	 *
	 * @var string
	 */
	public $id = '';

	/**
	 * Gather the parameters passed to client JavaScript via JSON.
	 *
	 * @return array The array to be exported to the client as JSON.
	 */
	public function json() {

		$json        = parent::json();
		$json['url'] = esc_url( $this->url );
		$json['id']  = $this->id;

		return $json;

	}

	/**
	 * An Underscore (JS) template for rendering this section.
	 */
	protected function render_template() {
		?>
		<li id="accordion-section-{{ data.id }}"
			class="online-education-upsell-accordion-section control-section-{{ data.type }} cannot-expand accordion-section"
		>
			<h3 class="accordion-section-title"><a href="{{{ data.url }}}" target="_blank">{{ data.title }}</a></h3>
		</li>
		<?php
	}
}
