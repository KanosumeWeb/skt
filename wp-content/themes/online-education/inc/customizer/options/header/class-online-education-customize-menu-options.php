<?php
/**
 * Class to include menu customize options.
 *
 * Class Online_Education_Customize_Menu_Options
 *
 * @package    ThemeGrill
 * @since      1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Class to include menu customize options.
 *
 * Class Online_Education_Customize_Menu_Options
 */
class Online_Education_Customize_Menu_Options extends Online_Education_Customize_Base_Option {

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
				'name'     => 'online_education_primary_menu_color_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'Menu', 'online-education' ),
				'section'  => 'online_education_primary_menu_section',
				'priority' => 10,
			),

			array(
				'name'     => 'online_education_primary_menu_color_group',
				'default'  => '',
				'type'     => 'control',
				'control'  => 'online-education-group',
				'label'    => esc_html__( 'Color', 'online-education' ),
				'section'  => 'online_education_primary_menu_section',
				'priority' => 20,
			),

			array(
				'name'     => 'online_education_primary_menu_color',
				'default'  => '',
				'type'     => 'sub-control',
				'control'  => 'online-education-color',
				'parent'   => 'online_education_primary_menu_color_group',
				'tab'      => esc_html__( 'Normal', 'online-education' ),
				'section'  => 'online_education_primary_menu_section',
				'priority' => 20,
			),

			array(
				'name'     => 'online_education_primary_menu_hover_color',
				'default'  => '',
				'type'     => 'sub-control',
				'control'  => 'online-education-color',
				'parent'   => 'online_education_primary_menu_color_group',
				'tab'      => esc_html__( 'Hover', 'online-education' ),
				'section'  => 'online_education_primary_menu_section',
				'priority' => 20,
			),

			array(
				'name'     => 'online_education_primary_menu_active_color',
				'default'  => '',
				'type'     => 'sub-control',
				'control'  => 'online-education-color',
				'parent'   => 'online_education_primary_menu_color_group',
				'tab'      => esc_html__( 'Active', 'online-education' ),
				'section'  => 'online_education_primary_menu_section',
				'priority' => 20,
			),

			array(
				'name'     => 'online_education_sub_menu_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'Sub Menu', 'online-education' ),
				'section'  => 'online_education_primary_menu_section',
				'priority' => 30,
			),

			array(
				'name'     => 'online_education_sub_menu_color_group',
				'default'  => '',
				'type'     => 'control',
				'control'  => 'online-education-group',
				'label'    => esc_html__( 'Color', 'online-education' ),
				'section'  => 'online_education_primary_menu_section',
				'priority' => 40,
			),

			array(
				'name'     => 'online_education_sub_menu_color',
				'default'  => '',
				'type'     => 'sub-control',
				'control'  => 'online-education-color',
				'parent'   => 'online_education_sub_menu_color_group',
				'tab'      => esc_html__( 'Normal', 'online-education' ),
				'section'  => 'online_education_primary_menu_section',
				'priority' => 40,
			),

			array(
				'name'     => 'online_education_sub_menu_hover_color',
				'default'  => '',
				'type'     => 'sub-control',
				'control'  => 'online-education-color',
				'parent'   => 'online_education_sub_menu_color_group',
				'tab'      => esc_html__( 'Hover', 'online-education' ),
				'section'  => 'online_education_primary_menu_section',
				'priority' => 40,
			),

			array(
				'name'     => 'online_education_sub_menu_active_color',
				'default'  => '',
				'type'     => 'sub-control',
				'control'  => 'online-education-color',
				'parent'   => 'online_education_sub_menu_color_group',
				'tab'      => esc_html__( 'Active', 'online-education' ),
				'section'  => 'online_education_primary_menu_section',
				'priority' => 40,
			),

			array(
				'name'     => 'online_education_sub_menu_bg_color',
				'default'  => '',
				'type'     => 'control',
				'control'  => 'online-education-color',
				'label'    => esc_html__( 'Background Color', 'online-education' ),
				'section'  => 'online_education_primary_menu_section',
				'priority' => 50,
			),

			array(
				'name'     => 'online_education_hamburger_icon_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'Hamburger Icon', 'online-education' ),
				'section'  => 'online_education_primary_menu_section',
				'priority' => 60,
			),

			array(
				'name'     => 'online_education_hamburger_icon_color_group',
				'type'     => 'control',
				'control'  => 'online-education-group',
				'label'    => esc_html__( 'Color', 'online-education' ),
				'section'  => 'online_education_primary_menu_section',
				'priority' => 60,
			),

			array(
				'name'     => 'online_education_hamburger_icon_color',
				'default'  => '',
				'type'     => 'sub-control',
				'control'  => 'online-education-color',
				'tab'      => esc_html__( 'Normal', 'online-education' ),
				'parent'   => 'online_education_hamburger_icon_color_group',
				'section'  => 'online_education_primary_menu_section',
				'priority' => 70,
			),

			array(
				'name'     => 'online_education_hamburger_icon_hover_color',
				'default'  => '',
				'type'     => 'sub-control',
				'control'  => 'online-education-color',
				'tab'      => esc_html__( 'Hover', 'online-education' ),
				'parent'   => 'online_education_hamburger_icon_color_group',
				'section'  => 'online_education_primary_menu_section',
				'priority' => 80,
			),

			array(
				'name'     => 'online_education_mobile_menu_color_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'Menu', 'online-education' ),
				'section'  => 'online_education_mobile_menu_section',
				'priority' => 10,
			),

			array(
				'name'     => 'online_education_mobile_menu_color_group',
				'default'  => '',
				'type'     => 'control',
				'control'  => 'online-education-group',
				'label'    => esc_html__( 'Color', 'online-education' ),
				'section'  => 'online_education_mobile_menu_section',
				'priority' => 20,
			),

			array(
				'name'     => 'online_education_mobile_menu_color',
				'default'  => '',
				'type'     => 'sub-control',
				'control'  => 'online-education-color',
				'parent'   => 'online_education_mobile_menu_color_group',
				'tab'      => esc_html__( 'Normal', 'online-education' ),
				'section'  => 'online_education_mobile_menu_section',
				'priority' => 20,
			),

			array(
				'name'     => 'online_education_mobile_menu_hover_color',
				'default'  => '',
				'type'     => 'sub-control',
				'control'  => 'online-education-color',
				'parent'   => 'online_education_mobile_menu_color_group',
				'tab'      => esc_html__( 'Hover', 'online-education' ),
				'section'  => 'online_education_mobile_menu_section',
				'priority' => 20,
			),

			array(
				'name'     => 'online_education_mobile_menu_active_color',
				'default'  => '',
				'type'     => 'sub-control',
				'control'  => 'online-education-color',
				'parent'   => 'online_education_mobile_menu_color_group',
				'tab'      => esc_html__( 'Active', 'online-education' ),
				'section'  => 'online_education_mobile_menu_section',
				'priority' => 20,
			),

			array(
				'name'     => 'online_education_mobile_menu_color',
				'default'  => '',
				'type'     => 'sub-control',
				'control'  => 'online-education-color',
				'parent'   => 'online_education_mobile_menu_color_group',
				'tab'      => esc_html__( 'Active', 'online-education' ),
				'section'  => 'online_education_mobile_menu_section',
				'priority' => 20,
			),

			array(
				'name'     => 'online_education_mobile_menu_bg_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'Background', 'online-education' ),
				'section'  => 'online_education_mobile_menu_section',
				'priority' => 20,
			),

			array(
				'name'     => 'online_education_mobile_menu_bg_color',
				'type'     => 'control',
				'control'  => 'online-education-color',
				'label'    => esc_html__( 'Color', 'online-education' ),
				'section'  => 'online_education_mobile_menu_section',
				'priority' => 20,
			),

			array(
				'name'     => 'online_education_mobile_menu_close_icon_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'Close Icon', 'online-education' ),
				'section'  => 'online_education_mobile_menu_section',
				'priority' => 20,
			),

			array(
				'name'     => 'online_education_mobile_menu_close_icon_color_group',
				'type'     => 'control',
				'control'  => 'online-education-group',
				'label'    => esc_html__( 'Color', 'online-education' ),
				'section'  => 'online_education_mobile_menu_section',
				'priority' => 20,
			),

			array(
				'name'     => 'online_education_mobile_menu_close_icon_color',
				'default'  => '',
				'type'     => 'sub-control',
				'control'  => 'online-education-color',
				'parent'   => 'online_education_mobile_menu_close_icon_color_group',
				'tab'      => esc_html__( 'Normal', 'online-education' ),
				'section'  => 'online_education_mobile_menu_section',
				'priority' => 20,
			),

			array(
				'name'     => 'online_education_mobile_menu_close_icon_hover_color',
				'default'  => '',
				'type'     => 'sub-control',
				'control'  => 'online-education-color',
				'parent'   => 'online_education_mobile_menu_close_icon_color_group',
				'tab'      => esc_html__( 'Hover', 'online-education' ),
				'section'  => 'online_education_mobile_menu_section',
				'priority' => 20,
			),
		);

		return array_merge( $options, $configs );
	}
}

return new Online_Education_Customize_Menu_Options();
