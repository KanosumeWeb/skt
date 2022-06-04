<?php
/**
 * Class to include scroll to top customize options.
 *
 * Class Online_Education_Customize_Scroll_To_Top_Options
 *
 * @package    ThemeGrill
 * @since      1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Class to include scroll to top customize options.
 *
 * Class Online_Education_Customize_Scroll_To_Top_Options
 */
class Online_Education_Customize_Scroll_To_Top_Options extends Online_Education_Customize_Base_Option {

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
				'name'     => 'online_education_scroll_to_top',
				'default'  => true,
				'type'     => 'control',
				'control'  => 'online-education-toggle',
				'label'    => esc_html__( 'Enable', 'online-education' ),
				'section'  => 'online_education_scroll_to_top',
				'priority' => 10,
			),

			array(
				'name'       => 'online_education_scroll_to_top_dimension_heading',
				'type'       => 'control',
				'control'    => 'online-education-title',
				'label'      => esc_html__( 'Dimension', 'online-education' ),
				'section'    => 'online_education_scroll_to_top',
				'priority'   => 20,
				'dependency' => array(
					'online_education_scroll_to_top',
					'==',
					true,
				),
			),

			array(
				'name'        => 'online_education_scroll_to_top_width',
				'default'     => 54,
				'suffix'      => 'px',
				'type'        => 'control',
				'control'     => 'online-education-slider',
				'label'       => esc_html__( 'Width', 'online-education' ),
				'section'     => 'online_education_scroll_to_top',
				'priority'    => 30,
				'input_attrs' => array(
					'min'  => 40,
					'max'  => 64,
					'step' => 1,
				),
				'dependency'  => array(
					'online_education_scroll_to_top',
					'==',
					true,
				),
			),

			array(
				'name'        => 'online_education_scroll_to_top_height',
				'default'     => 54,
				'suffix'      => 'px',
				'type'        => 'control',
				'control'     => 'online-education-slider',
				'label'       => esc_html__( 'Height', 'online-education' ),
				'section'     => 'online_education_scroll_to_top',
				'priority'    => 40,
				'input_attrs' => array(
					'min'  => 40,
					'max'  => 64,
					'step' => 1,
				),
				'dependency'  => array(
					'online_education_scroll_to_top',
					'==',
					true,
				),
			),

			array(
				'name'        => 'online_education_scroll_to_top_roundness',
				'default'     => 2,
				'suffix'      => 'px',
				'type'        => 'control',
				'control'     => 'online-education-slider',
				'label'       => esc_html__( 'Roundness', 'online-education' ),
				'section'     => 'online_education_scroll_to_top',
				'priority'    => 60,
				'input_attrs' => array(
					'min'  => 0,
					'max'  => 32,
					'step' => 1,
				),
				'dependency'  => array(
					'online_education_scroll_to_top',
					'==',
					true,
				),
			),

			array(
				'name'        => 'online_education_scroll_to_top_icon_size',
				'default'     => 24,
				'suffix'      => 'px',
				'type'        => 'control',
				'control'     => 'online-education-slider',
				'label'       => esc_html__( 'Icon Size', 'online-education' ),
				'section'     => 'online_education_scroll_to_top',
				'priority'    => 70,
				'input_attrs' => array(
					'min'  => 20,
					'max'  => 40,
					'step' => 1,
				),
				'dependency'  => array(
					'online_education_scroll_to_top',
					'==',
					true,
				),
			),

			array(
				'name'       => 'online_education_scroll_to_top_colors_heading',
				'type'       => 'control',
				'control'    => 'online-education-title',
				'label'      => esc_html__( 'Colors', 'online-education' ),
				'section'    => 'online_education_scroll_to_top',
				'priority'   => 80,
				'dependency' => array(
					'online_education_scroll_to_top',
					'==',
					true,
				),
			),

			array(
				'name'       => 'online_education_scroll_to_top_bg_group',
				'type'       => 'control',
				'control'    => 'online-education-group',
				'label'      => esc_html__( 'Background', 'online-education' ),
				'section'    => 'online_education_scroll_to_top',
				'priority'   => 90,
				'dependency' => array(
					'online_education_scroll_to_top',
					'==',
					true,
				),
			),

			array(
				'name'       => 'online_education_scroll_to_top_bg_color',
				'default'    => '',
				'type'       => 'sub-control',
				'control'    => 'online-education-color',
				'parent'     => 'online_education_scroll_to_top_bg_group',
				'tab'        => esc_html__( 'Normal', 'online-education' ),
				'section'    => 'online_education_scroll_to_top',
				'priority'   => 90,
				'dependency' => array(
					'online_education_scroll_to_top',
					'==',
					true,
				),
			),

			array(
				'name'       => 'online_education_scroll_to_top_bg_hover_color',
				'default'    => '',
				'type'       => 'sub-control',
				'control'    => 'online-education-color',
				'parent'     => 'online_education_scroll_to_top_bg_group',
				'tab'        => esc_html__( 'Hover', 'online-education' ),
				'section'    => 'online_education_scroll_to_top',
				'priority'   => 90,
				'dependency' => array(
					'online_education_scroll_to_top',
					'==',
					true,
				),
			),

			array(
				'name'       => 'online_education_scroll_to_top_icon_color_group',
				'type'       => 'control',
				'control'    => 'online-education-group',
				'label'      => esc_html__( 'Icon', 'online-education' ),
				'section'    => 'online_education_scroll_to_top',
				'priority'   => 100,
				'dependency' => array(
					'online_education_scroll_to_top',
					'==',
					true,
				),
			),

			array(
				'name'       => 'online_education_scroll_to_top_icon_color',
				'default'    => '',
				'type'       => 'sub-control',
				'control'    => 'online-education-color',
				'parent'     => 'online_education_scroll_to_top_icon_color_group',
				'tab'        => esc_html__( 'Normal', 'online-education' ),
				'section'    => 'online_education_scroll_to_top',
				'priority'   => 100,
				'dependency' => array(
					'online_education_scroll_to_top',
					'==',
					true,
				),
			),

			array(
				'name'       => 'online_education_scroll_to_top_icon_hover_color',
				'default'    => '',
				'type'       => 'sub-control',
				'control'    => 'online-education-color',
				'parent'     => 'online_education_scroll_to_top_icon_color_group',
				'tab'        => esc_html__( 'Hover', 'online-education' ),
				'section'    => 'online_education_scroll_to_top',
				'priority'   => 100,
				'dependency' => array(
					'online_education_scroll_to_top',
					'==',
					true,
				),
			),
		);

		$options = array_merge( $options, $configs );

		return $options;
	}
}

return new Online_Education_Customize_Scroll_To_Top_Options();
