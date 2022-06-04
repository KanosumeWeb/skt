<?php
/**
 * Class to include footer column customize options.
 *
 * Class Online_Education_Customize_Footer_Column_Options
 *
 * @package    ThemeGrill
 * @since      1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Class to include footer column customize options.
 *
 * Class Online_Education_Customize_Footer_Column_Options
 */
class Online_Education_Customize_Footer_Column_Options extends Online_Education_Customize_Base_Option {

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
				'name'     => 'online_education_footer_column_bg_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'Background', 'online-education' ),
				'section'  => 'online_education_footer_column_section',
				'priority' => 10,
			),

			array(
				'name'     => 'online_education_footer_column_bg',
				'default'  => array(
					'background-color'      => '',
					'background-image'      => '',
					'background-repeat'     => 'repeat',
					'background-position'   => 'center center',
					'background-size'       => 'contain',
					'background-attachment' => 'scroll',
				),
				'type'     => 'control',
				'control'  => 'online-education-background',
				'section'  => 'online_education_footer_column_section',
				'priority' => 10,
			),

			// Colors.
			array(
				'name'     => 'online_education_footer_column_colors_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'Colors', 'online-education' ),
				'section'  => 'online_education_footer_column_section',
				'priority' => 10,
			),

			array(
				'name'     => 'online_education_footer_column_heading_color',
				'default'  => '',
				'type'     => 'control',
				'control'  => 'online-education-color',
				'label'    => esc_html__( 'Heading Color', 'online-education' ),
				'section'  => 'online_education_footer_column_section',
				'priority' => 30,
			),

			array(
				'name'     => 'online_education_footer_column_text_color',
				'default'  => '',
				'type'     => 'control',
				'control'  => 'online-education-color',
				'label'    => esc_html__( 'Text Color', 'online-education' ),
				'section'  => 'online_education_footer_column_section',
				'priority' => 40,
			),

			array(
				'name'     => 'online_education_footer_column_link_color',
				'default'  => '',
				'type'     => 'control',
				'control'  => 'online-education-color',
				'label'    => esc_html__( 'Link Color', 'online-education' ),
				'section'  => 'online_education_footer_column_section',
				'priority' => 50,
			),

			array(
				'name'     => 'online_education_footer_column_list_link_color',
				'default'  => '',
				'type'     => 'control',
				'control'  => 'online-education-color',
				'label'    => esc_html__( 'List Link Color', 'online-education' ),
				'section'  => 'online_education_footer_column_section',
				'priority' => 60,
			),

			array(
				'name'     => 'online_education_footer_column_list_sep_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'List Separator', 'online-education' ),
				'section'  => 'online_education_footer_column_section',
				'priority' => 70,
			),

			array(
				'name'     => 'online_education_footer_column_list_sep',
				'default'  => true,
				'type'     => 'control',
				'control'  => 'online-education-toggle',
				'label'    => esc_html__( 'Enable', 'online-education' ),
				'section'  => 'online_education_footer_column_section',
				'priority' => 80,
			),

			array(
				'name'       => 'online_education_footer_column_list_sep_color',
				'default'    => '',
				'type'       => 'control',
				'control'    => 'online-education-color',
				'label'      => esc_html__( 'Color', 'online-education' ),
				'section'    => 'online_education_footer_column_section',
				'priority'   => 90,
				'dependency' => array(
					'online_education_footer_column_list_sep',
					'==',
					true,
				),
			),
		);

		$options = array_merge( $options, $configs );

		return $options;
	}
}

return new Online_Education_Customize_Footer_Column_Options();
