<?php
/**
 * Class to include footer bar customize options.
 *
 * Class Online_Education_Customize_Footer_Bar_Options
 *
 * @package    ThemeGrill
 * @since      1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Class to include footer bar customize options.
 *
 * Class Online_Education_Customize_Footer_Bar_Options
 */
class Online_Education_Customize_Footer_Bar_Options extends Online_Education_Customize_Base_Option {

	/**
	 * Include customize options.
	 *
	 * @param array                 $options      Customize options provided via the theme.
	 * @param \WP_Customize_Manager $wp_customize Theme Customizer object.
	 *
	 * @return mixed|void Customizer options for registering panels, sections as well as controls.
	 */
	public function register_options( $options, $wp_customize ) {

		$configs = array(

			array(
				'name'        => 'online_education_footer_copyright_heading',
				'type'        => 'control',
				'control'     => 'online-education-title',
				'label'       => esc_html__( 'Copyright', 'online-education' ),
				'description' => esc_html__( 'Available Placeholders: {copyright} {site-title} {year} {theme-credit}', 'online-education' ),
				'section'     => 'online_education_footer_bar_section',
			),

			array(
				'name'      => 'online_education_footer_copyright',
				'default'   => sprintf(
					/* translators: 1: Copyright, 2: Site title, 3: Current year, 4: Theme credit */
					esc_html__( '%1$s %2$s %3$s | %4$s', 'online-education' ),
					'{copyright}',
					'{site-title}',
					'{year}',
					'{theme-credit}'
				),
				'type'      => 'control',
				'control'   => 'online-education-editor',
				'section'   => 'online_education_footer_bar_section',
				'transport' => 'postMessage',
				'partial'   => array(
					'selector'        => '.ole-footer-bar-section',
					'render_callback' => 'Online_Education_Customizer_Partials::render_customize_partial_footer_bar_copyright',
				),
			),

			array(
				'name'    => 'online_education_footer_bar_content_alignment_heading',
				'type'    => 'control',
				'control' => 'online-education-title',
				'label'   => esc_html__( 'Alignment', 'online-education' ),
				'section' => 'online_education_footer_bar_section',
			),

			array(
				'name'    => 'online_education_footer_bar_content_alignment',
				'default' => 'left',
				'type'    => 'control',
				'control' => 'select',
				'choices' => array(
					'left'   => esc_html__( 'Left', 'online-education' ),
					'center' => esc_html__( 'Center', 'online-education' ),
					'right'  => esc_html__( 'Right', 'online-education' ),
				),
				'section' => 'online_education_footer_bar_section',
			),

			// Colors.
			array(
				'name'    => 'online_education_footer_bar_colors_heading',
				'type'    => 'control',
				'control' => 'online-education-title',
				'label'   => esc_html__( 'Colors', 'online-education' ),
				'section' => 'online_education_footer_bar_section',
			),

			array(
				'name'    => 'online_education_footer_bar_background_color',
				'default' => '',
				'type'    => 'control',
				'control' => 'online-education-color',
				'label'   => esc_html__( 'Background Color', 'online-education' ),
				'section' => 'online_education_footer_bar_section',
			),

			array(
				'name'    => 'online_education_footer_bar_text_color',
				'default' => '',
				'type'    => 'control',
				'control' => 'online-education-color',
				'label'   => esc_html__( 'Text Color', 'online-education' ),
				'section' => 'online_education_footer_bar_section',
			),

			array(
				'name'    => 'online_education_footer_bar_link_color',
				'default' => '',
				'type'    => 'control',
				'control' => 'online-education-color',
				'label'   => esc_html__( 'Link Color', 'online-education' ),
				'section' => 'online_education_footer_bar_section',
			),
		);

		return array_merge( $options, $configs );
	}
}

return new Online_Education_Customize_Footer_Bar_Options();
