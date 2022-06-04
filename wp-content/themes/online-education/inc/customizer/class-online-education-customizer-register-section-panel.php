<?php
/**
 * Class to register panels and sections for customize options.
 *
 * Class Online_Education_Customizer_Register_Section_Panel
 *
 * @package    ThemeGrill
 * @since      1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Class to register panels and sections for customize options.
 *
 * Class Online_Education_Customizer_Register_Section_Panel
 */
class Online_Education_Customizer_Register_Section_Panel extends Online_Education_Customize_Base_Option {

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

			/**
			 * Panels.
			 */
			array(
				'name'     => 'online_education_global_panel',
				'type'     => 'panel',
				'title'    => esc_html__( 'Global', 'online-education' ),
				'priority' => 5,
			),

			array(
				'name'     => 'online_education_header_panel',
				'type'     => 'panel',
				'title'    => esc_html__( 'Header', 'online-education' ),
				'priority' => 5,
			),

			array(
				'name'     => 'online_education_content_panel',
				'type'     => 'panel',
				'title'    => esc_html__( 'Content', 'online-education' ),
				'priority' => 5,
			),

			array(
				'name'     => 'online_education_footer_panel',
				'type'     => 'panel',
				'title'    => esc_html__( 'Footer', 'online-education' ),
				'priority' => 5,
			),

			/**
			 * Global.
			 */
			// Colors.
			array(
				'name'     => 'online_education_global_colors_section',
				'type'     => 'section',
				'title'    => esc_html__( 'Colors', 'online-education' ),
				'panel'    => 'online_education_global_panel',
				'priority' => 10,
			),

			/**
			 * Layout.
			 */
			array(
				'name'     => 'online_education_container_section',
				'type'     => 'section',
				'title'    => esc_html__( 'Container', 'online-education' ),
				'panel'    => 'online_education_global_panel',
				'priority' => 20,
			),

			array(
				'name'     => 'online_education_sidebar_layout_section',
				'type'     => 'section',
				'title'    => esc_html__( 'Sidebar Layout', 'online-education' ),
				'panel'    => 'online_education_global_panel',
				'priority' => 30,
			),

			array(
				'name'     => 'online_education_content_style_section',
				'type'     => 'section',
				'title'    => esc_html__( 'Content Style', 'online-education' ),
				'panel'    => 'online_education_global_panel',
				'priority' => 40,
			),

			/**
			 * Header.
			 */
			array(
				'name'     => 'title_tagline',
				'type'     => 'section',
				'title'    => esc_html__( 'Site Identity', 'online-education' ),
				'panel'    => 'online_education_header_panel',
				'priority' => 5,
			),

			array(
				'name'     => 'online_education_header_general_section',
				'type'     => 'section',
				'title'    => esc_html__( 'General', 'online-education' ),
				'panel'    => 'online_education_header_panel',
				'priority' => 10,
			),

			array(
				'name'     => 'online_education_primary_menu_section',
				'type'     => 'section',
				'title'    => esc_html__( 'Primary Menu', 'online-education' ),
				'panel'    => 'online_education_header_panel',
				'priority' => 10,
			),

			array(
				'name'     => 'online_education_mobile_menu_section',
				'type'     => 'section',
				'title'    => esc_html__( 'Mobile Menu', 'online-education' ),
				'panel'    => 'online_education_header_panel',
				'priority' => 20,
			),

			array(
				'name'     => 'online_education_header_button_section',
				'type'     => 'section',
				'title'    => esc_html__( 'Header Button', 'online-education' ),
				'panel'    => 'online_education_header_panel',
				'priority' => 30,
			),

			array(
				'name'     => 'online_education_page_header_section',
				'type'     => 'section',
				'title'    => esc_html__( 'Page Header', 'online-education' ),
				'panel'    => 'online_education_header_panel',
				'priority' => 40,
			),

			/**
			 * Content.
			 */
			array(
				'name'     => 'online_education_blog_section',
				'type'     => 'section',
				'title'    => esc_html__( 'Blog/Archive', 'online-education' ),
				'panel'    => 'online_education_content_panel',
				'priority' => 10,
			),

			/**
			 * Content.
			 */
			// Single Post.
			array(
				'name'     => 'online_education_single_post_section',
				'type'     => 'section',
				'title'    => esc_html__( 'Single Post', 'online-education' ),
				'panel'    => 'online_education_content_panel',
				'priority' => 10,
			),

			/**
			 * Footer.
			 */
			// Footer Column.
			array(
				'name'     => 'online_education_footer_column_section',
				'type'     => 'section',
				'title'    => esc_html__( 'Footer Column', 'online-education' ),
				'panel'    => 'online_education_footer_panel',
				'priority' => 10,
			),

			// Footer Column.
			array(
				'name'     => 'online_education_footer_column_section',
				'type'     => 'section',
				'title'    => esc_html__( 'Footer Column', 'online-education' ),
				'panel'    => 'online_education_footer_panel',
				'priority' => 10,
			),

			array(
				'name'     => 'online_education_footer_bar_section',
				'type'     => 'section',
				'title'    => esc_html__( 'Footer Bar', 'online-education' ),
				'panel'    => 'online_education_footer_panel',
				'priority' => 20,
			),

			array(
				'name'     => 'online_education_scroll_to_top',
				'type'     => 'section',
				'title'    => esc_html__( 'Scroll to Top', 'online-education' ),
				'panel'    => 'online_education_footer_panel',
				'priority' => 30,
			),

			array(
				'name'             => 'online_education_panel_separator',
				'type'             => 'section',
				'priority'         => 75,
				'section_callback' => 'Online_Education_WP_Customize_Separator',
			),
		);

		$options = array_merge( $options, $configs );

		if ( Online_Education_Utils::is_masteriyo_active() ) {
			$configs[] = array(
				'name'     => 'online_education_masteriyo_panel',
				'type'     => 'panel',
				'title'    => esc_html__( 'Masteriyo', 'online-education' ),
				'priority' => 5,
			);

			$configs[] = array(
				'name'     => 'online_education_masteriyo_courses_archive_section',
				'type'     => 'section',
				'title'    => esc_html__( 'Courses Archive', 'online-education' ),
				'panel'    => 'online_education_masteriyo_panel',
				'priority' => 5,
			);

			$configs[] = array(
				'name'     => 'online_education_masteriyo_single_course_section',
				'type'     => 'section',
				'title'    => esc_html__( 'Single Course', 'online-education' ),
				'panel'    => 'online_education_masteriyo_panel',
				'priority' => 10,
			);

			$options = array_merge( $options, $configs );
		}

		return $options;
	}
}

return new Online_Education_Customizer_Register_Section_Panel();
