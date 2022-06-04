<?php
/**
 * Class to include Container customize options.
 *
 * Class Online_Education_Customize_Container_Options
 *
 * @package    ThemeGrill
 * @since      1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Class to include Container customize options.
 *
 * Class Online_Education_Customize_Container_Options
 */
class Online_Education_Customize_Container_Options extends Online_Education_Customize_Base_Option {

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
				'name'        => 'online_education_container_width',
				'default'     => 1170,
				'type'        => 'control',
				'control'     => 'online-education-slider',
				'suffix'      => 'px',
				'label'       => esc_html__( 'Container Width', 'online-education' ),
				'section'     => 'online_education_container_section',
				'priority'    => 10,
				'input_attrs' => array(
					'min'  => 768,
					'max'  => 1920,
					'step' => 1,
				),
			),

			array(
				'name'        => 'online_education_sidebar_width',
				'default'     => 25,
				'type'        => 'control',
				'control'     => 'online-education-slider',
				'suffix'      => '%',
				'label'       => esc_html__( 'Sidebar Width', 'online-education' ),
				'section'     => 'online_education_container_section',
				'priority'    => 20,
				'input_attrs' => array(
					'min'  => 20,
					'max'  => 50,
					'step' => 1,
				),
			),
		);

		$options = array_merge( $options, $configs );

		return $options;
	}
}

return new Online_Education_Customize_Container_Options();
