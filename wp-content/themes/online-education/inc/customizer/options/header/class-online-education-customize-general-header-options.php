<?php
/**
 * Class to include general header customize options.
 *
 * Class Online_Education_Customize_General_Header_Options
 *
 * @package    ThemeGrill
 * @since      1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Class to include general header customize options.
 *
 * Class Online_Education_Customize_General_Header_Options
 */
class Online_Education_Customize_General_Header_Options extends Online_Education_Customize_Base_Option {

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
				'name'     => 'online_education_transparent_header_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'Transparent Header', 'online-education' ),
				'section'  => 'online_education_header_general_section',
				'priority' => 10,
			),

			array(
				'name'     => 'online_education_transparent_header',
				'default'  => false,
				'type'     => 'control',
				'control'  => 'online-education-toggle',
				'label'    => esc_html__( 'Enable', 'online-education' ),
				'section'  => 'online_education_header_general_section',
				'priority' => 20,
			),

			array(
				'name'     => 'online_education_header_search_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'Search', 'online-education' ),
				'section'  => 'online_education_header_general_section',
				'priority' => 30,
			),

			array(
				'name'     => 'online_education_header_search',
				'default'  => true,
				'type'     => 'control',
				'control'  => 'online-education-toggle',
				'label'    => esc_html__( 'Enable', 'online-education' ),
				'section'  => 'online_education_header_general_section',
				'priority' => 40,
			),

			array(
				'name'     => 'online_education_header_colors_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'Color', 'online-education' ),
				'section'  => 'online_education_header_general_section',
				'priority' => 50,
			),

			array(
				'name'     => 'online_education_header_bg_color',
				'default'  => '#f8f8f8',
				'type'     => 'control',
				'control'  => 'online-education-color',
				'label'    => esc_html__( 'Background Color', 'online-education' ),
				'section'  => 'online_education_header_general_section',
				'priority' => 60,
			),
		);

		return array_merge( $options, $configs );
	}
}

return new Online_Education_Customize_General_Header_Options();
