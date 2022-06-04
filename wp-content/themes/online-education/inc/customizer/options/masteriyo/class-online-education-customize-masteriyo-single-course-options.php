<?php
/**
 * Class to include Masteriyo single course customize options.
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
class Online_Education_Customize_Masteriyo_Single_Course_Options extends Online_Education_Customize_Base_Option {

	/**
	 * Include customize options.
	 *
	 * @param array                 $options      Customize options provided via the theme.
	 * @param \WP_Customize_Manager $wp_customize Theme Customizer object.
	 *
	 * @return array Customizer options for registering panels, sections as well as controls.
	 */
	public function register_options( $options, $wp_customize ) {

		$configs = array(

			array(
				'name'     => 'online_education_masteriyo_single_course_title_position',
				'default'  => 'page-header',
				'type'     => 'control',
				'control'  => 'select',
				'label'    => esc_html__( 'Title Position', 'online-education' ),
				'section'  => 'online_education_masteriyo_single_course_section',
				'priority' => 10,
				'choices'  => array(
					'content'     => esc_html__( 'Content', 'online-education' ),
					'page-header' => esc_html__( 'Page Header', 'online-education' ),
				),
			),

			array(
				'name'     => 'online_education_masteriyo_single_course_sidebar_position',
				'default'  => 'right',
				'type'     => 'control',
				'control'  => 'select',
				'label'    => esc_html__( 'Sidebar Position', 'online-education' ),
				'section'  => 'online_education_masteriyo_single_course_section',
				'priority' => 10,
				'choices'  => array(
					'right' => esc_html__( 'Right', 'online-education' ),
					'left'  => esc_html__( 'Left', 'online-education' ),
				),
			),
		);

		return array_merge( $options, $configs );
	}
}

return new Online_Education_Customize_Masteriyo_Single_Course_Options();
