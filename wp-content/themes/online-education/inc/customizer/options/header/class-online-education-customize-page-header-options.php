<?php
/**
 * Class to include page header customize options.
 *
 * Class Online_Education_Customize_Page_Header_Options
 *
 * @package    ThemeGrill
 * @since      1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Class to include page header customize options.
 *
 * Class Online_Education_Customize_Page_Header_Options
 */
class Online_Education_Customize_Page_Header_Options extends Online_Education_Customize_Base_Option {

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
				'name'     => 'online_education_page_header_title_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'Title', 'online-education' ),
				'section'  => 'online_education_page_header_section',
				'priority' => 5,
			),

			array(
				'name'     => 'online_education_page_header_title',
				'default'  => true,
				'type'     => 'control',
				'control'  => 'online-education-toggle',
				'label'    => esc_html__( 'Enable', 'online-education' ),
				'section'  => 'online_education_page_header_section',
				'priority' => 10,
			),

			array(
				'name'     => 'online_education_breadcrumbs_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'Breadcrumbs', 'online-education' ),
				'section'  => 'online_education_page_header_section',
				'priority' => 15,
			),

			array(
				'name'     => 'online_education_breadcrumbs',
				'default'  => true,
				'type'     => 'control',
				'control'  => 'online-education-toggle',
				'label'    => esc_html__( 'Enable', 'online-education' ),
				'section'  => 'online_education_page_header_section',
				'priority' => 20,
			),

			array(
				'name'     => 'online_education_page_header_dimension_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'Dimensions', 'online-education' ),
				'section'  => 'online_education_page_header_section',
				'priority' => 25,
			),

			array(
				'name'     => 'online_education_page_header_padding',
				'default'  => array(
					'top'    => '1.25em',
					'right'  => '0',
					'bottom' => '1.25em',
					'left'   => '0',
				),
				'type'     => 'control',
				'control'  => 'online-education-dimensions',
				'label'    => esc_html__( 'Padding', 'online-education' ),
				'section'  => 'online_education_page_header_section',
				'priority' => 30,
			),

			array(
				'name'     => 'online_education_page_header_colors_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'Colors', 'online-education' ),
				'section'  => 'online_education_page_header_section',
				'priority' => 35,
			),

			array(
				'name'     => 'online_education_page_header_bg_group',
				'type'     => 'control',
				'control'  => 'online-education-group',
				'label'    => esc_html__( 'Background', 'online-education' ),
				'section'  => 'online_education_page_header_section',
				'priority' => 40,
			),

			array(
				'name'     => 'online_education_page_header_bg',
				'default'  => array(
					'background-color'      => '#EBEBEC',
					'background-image'      => '',
					'background-repeat'     => 'repeat',
					'background-position'   => 'top left',
					'background-size'       => 'contain',
					'background-attachment' => 'scroll',
				),
				'type'     => 'sub-control',
				'control'  => 'online-education-background',
				'parent'   => 'online_education_page_header_bg_group',
				'section'  => 'online_education_page_header_section',
				'priority' => 45,
			),

			array(
				'name'     => 'online_education_page_header_title_color_group',
				'type'     => 'control',
				'control'  => 'online-education-group',
				'label'    => esc_html__( 'Title', 'online-education' ),
				'section'  => 'online_education_page_header_section',
				'priority' => 50,
			),

			array(
				'name'     => 'online_education_page_header_title_color',
				'default'  => '',
				'type'     => 'sub-control',
				'control'  => 'online-education-color',
				'parent'   => 'online_education_page_header_title_color_group',
				'section'  => 'online_education_page_header_section',
				'priority' => 55,
			),

			array(
				'name'     => 'online_education_breadcrumbs_text_color_group',
				'type'     => 'control',
				'control'  => 'online-education-group',
				'label'    => esc_html__( 'Text', 'online-education' ),
				'section'  => 'online_education_page_header_section',
				'priority' => 60,
			),

			array(
				'name'     => 'online_education_breadcrumbs_text_color',
				'default'  => '',
				'type'     => 'sub-control',
				'control'  => 'online-education-color',
				'section'  => 'online_education_page_header_section',
				'parent'   => 'online_education_breadcrumbs_text_color_group',
				'priority' => 65,
			),

			array(
				'name'     => 'online_education_breadcrumbs_separator_color_group',
				'type'     => 'control',
				'control'  => 'online-education-group',
				'label'    => esc_html__( 'Separator', 'online-education' ),
				'section'  => 'online_education_page_header_section',
				'priority' => 70,
			),

			array(
				'name'     => 'online_education_breadcrumbs_separator_color',
				'default'  => '',
				'type'     => 'sub-control',
				'control'  => 'online-education-color',
				'section'  => 'online_education_page_header_section',
				'parent'   => 'online_education_breadcrumbs_separator_color_group',
				'priority' => 80,
			),

			array(
				'name'     => 'online_education_breadcrumbs_link_color_group',
				'type'     => 'control',
				'control'  => 'online-education-group',
				'label'    => esc_html__( 'Link', 'online-education' ),
				'section'  => 'online_education_page_header_section',
				'priority' => 100,
			),

			array(
				'name'     => 'online_education_breadcrumbs_link_color',
				'default'  => '',
				'type'     => 'sub-control',
				'control'  => 'online-education-color',
				'parent'   => 'online_education_breadcrumbs_link_color_group',
				'tab'      => esc_html__( 'Normal', 'online-education' ),
				'section'  => 'online_education_page_header_section',
				'priority' => 100,
			),

			array(
				'name'     => 'online_education_breadcrumbs_link_hover_color',
				'default'  => '',
				'type'     => 'sub-control',
				'control'  => 'online-education-color',
				'parent'   => 'online_education_breadcrumbs_link_color_group',
				'tab'      => esc_html__( 'Hover', 'online-education' ),
				'section'  => 'online_education_page_header_section',
				'priority' => 100,
			),
		);

		return array_merge( $options, $configs );
	}
}

return new Online_Education_Customize_Page_Header_Options();
