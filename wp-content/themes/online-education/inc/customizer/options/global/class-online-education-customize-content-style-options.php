<?php
	/**
	 * Class to include sidebar layout customize options.
	 *
	 * Class Online_Education_Customize_Sidebar_Layout_Options
	 *
	 * @package    ThemeGrill
	 * @since      1.0.0
	 */

// Exit if accessed directly.
	defined( 'ABSPATH' ) || exit;

/**
 * Class to include sidebar layout customize options.
 *
 * Class Online_Education_Customize_Sidebar_Layout_Options
 */
class Online_Education_Customize_Content_Style_Options extends Online_Education_Customize_Base_Option {

	/**
	 * Include customize options.
	 *
	 * @param array                 $options      Customize options provided via the theme.
	 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
	 *
	 * @return array Customizer options for registering panels, sections as well as controls.
	 */
	public function register_options( $options, $wp_customize ) {

		$choices = array(
			'default' => esc_html__( 'Default', 'online-education' ),
			'boxed'   => esc_html__( 'Boxed', 'online-education' ),
			'normal'  => esc_html__( 'Normal', 'online-education' ),
		);

		$configs = array(

			array(
				'name'     => 'online_education_content_style_default',
				'default'  => 'boxed',
				'type'     => 'control',
				'control'  => 'select',
				'label'    => esc_html__( 'Default', 'online-education' ),
				'section'  => 'online_education_content_style_section',
				'priority' => 10,
				'choices'  => array(
					'boxed'  => esc_html__( 'Boxed', 'online-education' ),
					'normal' => esc_html__( 'Normal', 'online-education' ),
				),
			),

			array(
				'name'     => 'online_education_content_style_archive',
				'default'  => 'default',
				'type'     => 'control',
				'control'  => 'select',
				'label'    => esc_html__( 'Archive', 'online-education' ),
				'section'  => 'online_education_content_style_section',
				'priority' => 30,
				'choices'  => $choices,
			),

			array(
				'name'     => 'online_education_content_style_page',
				'default'  => 'default',
				'type'     => 'control',
				'control'  => 'select',
				'label'    => esc_html__( 'Page', 'online-education' ),
				'section'  => 'online_education_content_style_section',
				'priority' => 40,
				'choices'  => $choices,
			),

			array(
				'name'     => 'online_education_content_style_single_post',
				'default'  => 'default',
				'type'     => 'control',
				'control'  => 'select',
				'label'    => esc_html__( 'Single Post', 'online-education' ),
				'section'  => 'online_education_content_style_section',
				'priority' => 50,
				'choices'  => $choices,
			),

		);

		return array_merge( $options, $configs );
	}
}

return new Online_Education_Customize_Content_Style_Options();
