<?php
/**
 * Class to include Colors customize options.
 *
 * Class Online_Education_Customize_Colors_Options
 *
 * @package    ThemeGrill
 * @since      1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Class to include Colors customize options.
 *
 * Class Online_Education_Customize_Colors_Options
 */
class Online_Education_Customize_Colors_Options extends Online_Education_Customize_Base_Option {

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
				'name'     => 'online_education_primary_color_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'Primary Colors', 'online-education' ),
				'section'  => 'online_education_global_colors_section',
				'priority' => 10,
			),

			array(
				'name'     => 'online_education_primary_color',
				'default'  => '#FCA311',
				'type'     => 'control',
				'control'  => 'online-education-color',
				'label'    => esc_html__( 'Primary Color', 'online-education' ),
				'section'  => 'online_education_global_colors_section',
				'priority' => 20,
			),

			array(
				'name'     => 'online_education_base_color',
				'default'  => '#121212',
				'type'     => 'control',
				'control'  => 'online-education-color',
				'label'    => esc_html__( 'Base Color', 'online-education' ),
				'section'  => 'online_education_global_colors_section',
				'priority' => 30,
			),

			array(
				'name'     => 'online_education_headings_color_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'Headings', 'online-education' ),
				'section'  => 'online_education_global_colors_section',
				'priority' => 40,
			),

			array(
				'name'     => 'online_education_headings_color',
				'default'  => '#121212',
				'type'     => 'control',
				'control'  => 'online-education-color',
				'label'    => esc_html__( 'Headings', 'online-education' ),
				'section'  => 'online_education_global_colors_section',
				'priority' => 50,
			),
		);

		$options = array_merge( $options, $configs );

		return $options;
	}
}

return new Online_Education_Customize_Colors_Options();
