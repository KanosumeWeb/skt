<?php
/**
 * Class to include site identity customize options.
 *
 * Class Online_Education_Customize_Site_Identity_Options
 *
 * @package    ThemeGrill
 * @since      1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Class to include site identity customize options.
 *
 * Class Online_Education_Customize_Site_Identity_Options
 */
class Online_Education_Customize_Site_Identity_Options extends Online_Education_Customize_Base_Option {

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
				'name'        => 'online_education_retina_logo',
				'type'        => 'control',
				'control'     => 'image',
				'label'       => esc_html__( 'Retina Logo', 'online-education' ),
				'description' => esc_html__( 'Upload 2X times the size of your current logo. Eg: If your current logo size is 115*50 then upload 230*100 sized logo.', 'online-education' ),
				'section'     => 'title_tagline',
				'priority'    => 7,
			),

			array(
				'name'        => 'online_education_site_logo_height',
				'default'     => '',
				'suffix'      => 'px',
				'type'        => 'control',
				'control'     => 'online-education-slider',
				'label'       => esc_html__( 'Logo Height', 'online-education' ),
				'section'     => 'title_tagline',
				'priority'    => 7,
				'input_attrs' => array(
					'min'  => 0,
					'max'  => 100,
					'step' => 1,
				),
			),

			array(
				'name'     => 'online_education_site_identity_colors_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'Colors', 'online-education' ),
				'section'  => 'title_tagline',
				'priority' => 15,
			),

			array(
				'name'     => 'online_education_site_title_colors_group',
				'default'  => '',
				'type'     => 'control',
				'control'  => 'online-education-group',
				'label'    => esc_html__( 'Site Title', 'online-education' ),
				'section'  => 'title_tagline',
				'priority' => 20,
			),

			array(
				'name'     => 'online_education_site_title_color',
				'default'  => '#121212',
				'type'     => 'sub-control',
				'control'  => 'online-education-color',
				'parent'   => 'online_education_site_title_colors_group',
				'tab'      => esc_html__( 'Normal', 'online-education' ),
				'section'  => 'title_tagline',
				'priority' => 20,
			),

			array(
				'name'     => 'online_education_site_title_hover_color',
				'default'  => '#FCA311',
				'type'     => 'sub-control',
				'control'  => 'online-education-color',
				'parent'   => 'online_education_site_title_colors_group',
				'tab'      => esc_html__( 'Hover', 'online-education' ),
				'section'  => 'title_tagline',
				'priority' => 20,
			),
		);

		$options = array_merge( $options, $configs );

		return $options;
	}
}

return new Online_Education_Customize_Site_Identity_Options();
