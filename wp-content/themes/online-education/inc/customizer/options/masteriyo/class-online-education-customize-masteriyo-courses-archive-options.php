<?php
/**
 * Class to include Masteriyo courses archive customize options.
 *
 * Class Online_Education_Customize_Masteriyo_Courses_Archive_Options
 *
 * @package    ThemeGrill
 * @since      1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Class to include Masteriyo courses archive customize options.
 *
 * Class Online_Education_Customize_Masteriyo_Courses_Archive_Options
 */
class Online_Education_Customize_Masteriyo_Courses_Archive_Options extends Online_Education_Customize_Base_Option {

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
				'name'     => 'online_education_masteriyo_courses_archive_title_position',
				'default'  => 'page-header',
				'type'     => 'control',
				'control'  => 'select',
				'label'    => esc_html__( 'Title Position', 'online-education' ),
				'section'  => 'online_education_masteriyo_courses_archive_section',
				'priority' => 10,
				'choices'  => array(
					'content'     => esc_html__( 'Content', 'online-education' ),
					'page-header' => esc_html__( 'Page Header', 'online-education' ),
				),
			),
		);

		return array_merge( $options, $configs );
	}
}

return new Online_Education_Customize_Masteriyo_Courses_Archive_Options();
