<?php
/**
 * Class to include site identity customize options.
 *
 * Class Online_Education_Customize_Header_Button_Options
 *
 * @package    ThemeGrill
 * @since      1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Class to include site identity customize options.
 *
 * Class Online_Education_Customize_Header_Button_Options
 */
class Online_Education_Customize_Header_Button_Options extends Online_Education_Customize_Base_Option {

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

			// CTA.
			array(
				'name'     => 'online_education_header_button_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'Button', 'online-education' ),
				'section'  => 'online_education_header_button_section',
				'priority' => 10,
			),

			array(
				'name'     => 'online_education_header_button_text',
				'default'  => '',
				'type'     => 'control',
				'control'  => 'text',
				'label'    => esc_html__( 'Text', 'online-education' ),
				'section'  => 'online_education_header_button_section',
				'priority' => 15,
			),

			array(
				'name'        => 'online_education_header_button_link',
				'default'     => '',
				'type'        => 'control',
				'control'     => 'text',
				'label'       => esc_html__( 'Link', 'online-education' ),
				'section'     => 'online_education_header_button_section',
				'priority'    => 20,
				'input_attrs' => array(
					'placeholder' => esc_attr__( 'https://example.com', 'online-education' ),
				),
			),

			array(
				'name'     => 'online_education_header_button_target',
				'default'  => 0,
				'type'     => 'control',
				'control'  => 'online-education-toggle',
				'label'    => esc_html__( 'Open Link in a New Tab', 'online-education' ),
				'section'  => 'online_education_header_button_section',
				'priority' => 25,
			),

			array(
				'name'     => 'online_education_header_button_colors_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'Colors', 'online-education' ),
				'section'  => 'online_education_header_button_section',
				'priority' => 30,
			),

			array(
				'name'     => 'online_education_header_button_text_color_group',
				'type'     => 'control',
				'control'  => 'online-education-group',
				'label'    => esc_html__( 'Text', 'online-education' ),
				'section'  => 'online_education_header_button_section',
				'priority' => 35,
			),

			array(
				'name'     => 'online_education_header_button_text_color',
				'default'  => '',
				'type'     => 'sub-control',
				'control'  => 'online-education-color',
				'parent'   => 'online_education_header_button_text_color_group',
				'tab'      => esc_html__( 'Normal', 'online-education' ),
				'section'  => 'online_education_header_button_section',
				'priority' => 40,
			),

			array(
				'name'     => 'online_education_header_button_text_hover_color',
				'default'  => '',
				'type'     => 'sub-control',
				'control'  => 'online-education-color',
				'parent'   => 'online_education_header_button_text_color_group',
				'tab'      => esc_html__( 'Hover', 'online-education' ),
				'section'  => 'online_education_header_button_section',
				'priority' => 45,
			),

			array(
				'name'     => 'online_education_header_button_bg_group',
				'type'     => 'control',
				'control'  => 'online-education-group',
				'label'    => esc_html__( 'Background', 'online-education' ),
				'section'  => 'online_education_header_button_section',
				'priority' => 50,
			),

			array(
				'name'     => 'online_education_header_button_bg_color',
				'default'  => '',
				'type'     => 'sub-control',
				'control'  => 'online-education-color',
				'parent'   => 'online_education_header_button_bg_group',
				'tab'      => esc_html__( 'Normal', 'online-education' ),
				'section'  => 'online_education_header_button_section',
				'priority' => 55,
			),

			array(
				'name'     => 'online_education_header_button_bg_hover_color',
				'default'  => '',
				'type'     => 'sub-control',
				'control'  => 'online-education-color',
				'parent'   => 'online_education_header_button_bg_group',
				'tab'      => esc_html__( 'Hover', 'online-education' ),
				'section'  => 'online_education_header_button_section',
				'priority' => 60,
			),
		);

		$options = array_merge( $options, $configs );

		return $options;
	}
}

return new Online_Education_Customize_Header_Button_Options();
