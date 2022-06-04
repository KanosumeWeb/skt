<?php
/**
 * Class to include Blog General customize options.
 *
 * Class Online_Education_Customize_Blog_Options
 *
 * @package    ThemeGrill
 * @since      1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Class to include Blog General customize options.
 *
 * Class Online_Education_Customize_Blog_Options
 */
class Online_Education_Customize_Blog_Options extends Online_Education_Customize_Base_Option {

	/**
	 * Include customize options.
	 *
	 * @param array                 $options      Customize options provided via the theme.
	 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
	 *
	 * @return array Customizer options for registering panels, sections as well as controls.
	 */
	public function register_options( $options, $wp_customize ) {

		$size_choices = Online_Education_Utils::get_image_sizes( array( 'full', 'medium_large', 'large', 'thumbnail' ) );

		$configs = array(
			array(
				'name'    => 'online_education_blog_layout_heading',
				'type'    => 'control',
				'control' => 'online-education-title',
				'label'   => esc_html__( 'Layout', 'online-education' ),
				'section' => 'online_education_blog_section',
			),

			array(
				'name'     => 'online_education_blog_grid_column',
				'default'  => '3',
				'type'     => 'control',
				'control'  => 'select',
				'label'    => esc_html__( 'Column', 'online-education' ),
				'section'  => 'online_education_blog_section',
				'priority' => 30,
				'choices'  => array(
					'1' => esc_html__( '1', 'online-education' ),
					'2' => esc_html__( '2', 'online-education' ),
					'3' => esc_html__( '3', 'online-education' ),
					'4' => esc_html__( '4', 'online-education' ),
				),
			),

			array(
				'name'     => 'online_education_blog_post_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'Post', 'online-education' ),
				'section'  => 'online_education_blog_section',
				'priority' => 70,
			),

			array(
				'name'     => 'online_education_blog_post_featured_image_size',
				'default'  => 'full',
				'type'     => 'control',
				'control'  => 'select',
				'label'    => esc_html__( 'Featured Image Size', 'online-education' ),
				'section'  => 'online_education_blog_section',
				'priority' => 80,
				'choices'  => $size_choices,
			),

			array(
				'name'     => 'online_education_blog_post_featured_image_ratio',
				'default'  => '4:3',
				'type'     => 'control',
				'control'  => 'select',
				'label'    => esc_html__( 'Featured Image Ratio', 'online-education' ),
				'section'  => 'online_education_blog_section',
				'priority' => 80,
				'choices'  => array(
					'original' => esc_html__( 'Original', 'online-education' ),
					'4:3'      => esc_html__( '4:3', 'online-education' ),
				),
			),

			array(
				'name'     => 'online_education_excerpt_length',
				'default'  => 18,
				'type'     => 'control',
				'control'  => 'number',
				'label'    => esc_html__( 'Excerpt Length', 'online-education' ),
				'section'  => 'online_education_blog_section',
				'priority' => 90,
			),

			array(
				'name'     => 'online_education_read_more_text',
				'default'  => esc_html__( 'Read More', 'online-education' ),
				'type'     => 'control',
				'control'  => 'text',
				'label'    => esc_html__( 'CTA Text', 'online-education' ),
				'section'  => 'online_education_blog_section',
				'priority' => 100,
			),

			array(
				'name'       => 'online_education_blog_post_elements',
				'default'    => array(
					'thumbnail',
					'header',
					'meta',
					'summary',
					'footer',
				),
				'type'       => 'control',
				'control'    => 'online-education-sortable',
				'label'      => esc_html__( 'Post Elements', 'online-education' ),
				'section'    => 'online_education_blog_section',
				'choices'    => array(
					'thumbnail' => esc_html__( 'Featured Image', 'online-education' ),
					'header'    => esc_html__( 'Title', 'online-education' ),
					'meta'      => esc_html__( 'Meta Tags', 'online-education' ),
					'summary'   => esc_html__( 'Content', 'online-education' ),
					'footer'    => esc_html__( 'Read More', 'online-education' ),
				),
				'unsortable' => array(
					'thumbnail',
					'header',
					'meta',
					'summary',
					'footer',
				),
				'priority'   => 110,
			),

			array(
				'name'            => 'online_education_blog_meta',
				'default'         => array(
					'author',
					'date',
					'category',
				),
				'type'            => 'control',
				'control'         => 'online-education-sortable',
				'label'           => esc_html__( 'Meta', 'online-education' ),
				'section'         => 'online_education_blog_section',
				'choices'         => array(
					'author'   => esc_html__( 'Author', 'online-education' ),
					'date'     => esc_html__( 'Date', 'online-education' ),
					'category' => esc_html__( 'Category', 'online-education' ),
					'comment'  => esc_html__( 'Comment', 'online-education' ),
				),
				'unsortable'      => array(
					'author',
					'date',
					'category',
					'comment',
				),
				'priority'        => 120,
				'active_callback' => function() {
					if (
						! in_array(
							'meta',
							get_theme_mod(
								'online_education_blog_post_elements',
								array(
									'thumbnail',
									'header',
									'meta',
									'summary',
									'footer',
								)
							),
							true
						)
					) {
						return false;
					}

					return true;
				},
			),

			array(
				'name'     => 'online_education_blog_pagination_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'Pagination', 'online-education' ),
				'section'  => 'online_education_blog_section',
				'priority' => 130,
			),

			array(
				'name'     => 'online_education_blog_pagination_enable',
				'default'  => true,
				'type'     => 'control',
				'control'  => 'online-education-toggle',
				'label'    => esc_html__( 'Enable', 'online-education' ),
				'section'  => 'online_education_blog_section',
				'priority' => 140,
			),
		);

		return array_merge( $options, $configs );
	}

}

return new Online_Education_Customize_Blog_Options();
