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
class Online_Education_Customize_Sidebar_Layout_Options extends Online_Education_Customize_Base_Option {

	/**
	 * Include customize options.
	 *
	 * @param array                 $options      Customize options provided via the theme.
	 * @param \WP_Customize_Manager $wp_customize Theme Customizer object.
	 *
	 * @return mixed|void Customizer options for registering panels, sections as well as controls.
	 */
	public function register_options( $options, $wp_customize ) {

		$choices = array(
			'default'    => esc_html__( 'Default', 'online-education' ),
			'right'      => esc_html__( 'Right Sidebar', 'online-education' ),
			'no-sidebar' => esc_html__( 'No Sidebar', 'online-education' ),
		);

		$configs = array(

			array(
				'name'     => 'online_education_sidebar_layout_default',
				'default'  => 'no-sidebar',
				'type'     => 'control',
				'control'  => 'select',
				'label'    => esc_html__( 'Default', 'online-education' ),
				'section'  => 'online_education_sidebar_layout_section',
				'priority' => 10,
				'choices'  => array(
					'right'      => esc_html__( 'Right Sidebar', 'online-education' ),
					'no-sidebar' => esc_html__( 'No Sidebar', 'online-education' ),
				),
			),

			array(
				'name'     => 'online_education_sidebar_layout_archive',
				'default'  => 'default',
				'type'     => 'control',
				'control'  => 'select',
				'label'    => esc_html__( 'Archive', 'online-education' ),
				'section'  => 'online_education_sidebar_layout_section',
				'priority' => 30,
				'choices'  => $choices,
			),

			array(
				'name'     => 'online_education_sidebar_layout_page',
				'default'  => 'default',
				'type'     => 'control',
				'control'  => 'select',
				'label'    => esc_html__( 'Page', 'online-education' ),
				'section'  => 'online_education_sidebar_layout_section',
				'priority' => 40,
				'choices'  => $choices,
			),

			array(
				'name'     => 'online_education_sidebar_layout_single_post',
				'default'  => 'default',
				'type'     => 'control',
				'control'  => 'select',
				'label'    => esc_html__( 'Single Post', 'online-education' ),
				'section'  => 'online_education_sidebar_layout_section',
				'priority' => 50,
				'choices'  => $choices,
			),
		);

		$options = array_merge( $options, $configs );

		if ( Online_Education_Utils::is_masteriyo_active() ) {

			$configs[] = array(
				'name'     => 'online_education_sidebar_layout_masteriyo_courses_archive',
				'default'  => 'default',
				'type'     => 'control',
				'control'  => 'select',
				'label'    => esc_html__( 'Masteriyo Courses Archive', 'online-education' ),
				'section'  => 'online_education_sidebar_layout_section',
				'priority' => 60,
				'choices'  => $choices,
			);

			$options = array_merge( $options, $configs );
		}

		return $options;
	}
}

return new Online_Education_Customize_Sidebar_Layout_Options();
