<?php
/**
 * Class to include Single Post General customize options.
 *
 * Class Online_Education_Customize_Single_Post_Options
 *
 * @package    ThemeGrill
 * @since      1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Class to include Single Post General customize options.
 *
 * Class Online_Education_Customize_Single_Post_Options
 */
class Online_Education_Customize_Single_Post_Options extends Online_Education_Customize_Base_Option {

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
				'name'     => 'online_education_single_post_title_position',
				'default'  => 'page-header',
				'type'     => 'control',
				'control'  => 'select',
				'label'    => esc_html__( 'Title Position', 'online-education' ),
				'section'  => 'online_education_single_post_section',
				'priority' => 5,
				'choices'  => array(
					'content'     => esc_html__( 'Content', 'online-education' ),
					'page-header' => esc_html__( 'Page Header', 'online-education' ),
				),
			),

			array(
				'name'     => 'online_education_single_post_elements_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'Post', 'online-education' ),
				'section'  => 'online_education_single_post_section',
				'priority' => 10,
			),

			array(
				'name'     => 'online_education_single_post_featured_image_ratio',
				'default'  => '4:3',
				'type'     => 'control',
				'control'  => 'select',
				'label'    => esc_html__( 'Featured Image Ratio', 'online-education' ),
				'section'  => 'online_education_single_post_section',
				'priority' => 20,
				'choices'  => array(
					'original' => esc_html__( 'Original', 'online-education' ),
					'4:3'      => esc_html__( '4:3', 'online-education' ),
				),
			),

			array(
				'name'       => 'online_education_single_post_elements',
				'default'    => array(
					'thumbnail',
					'header',
					'meta',
					'content',
					'author-bio',
				),
				'type'       => 'control',
				'control'    => 'online-education-sortable',
				'label'      => esc_html__( 'Post Elements', 'online-education' ),
				'section'    => 'online_education_single_post_section',
				'choices'    => array(
					'thumbnail'  => esc_html__( 'Featured Image', 'online-education' ),
					'header'     => esc_html__( 'Title', 'online-education' ),
					'meta'       => esc_html__( 'Meta', 'online-education' ),
					'content'    => esc_html__( 'Content', 'online-education' ),
					'author-bio' => esc_html__( 'Author Bio', 'online-education' ),
				),
				'unsortable' => array(
					'thumbnail',
					'header',
					'meta',
					'content',
					'author-bio',
				),
				'priority'   => 20,
			),

			array(
				'name'     => 'online_education_single_post_meta_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'Meta', 'online-education' ),
				'section'  => 'online_education_single_post_section',
				'priority' => 30,
			),

			array(
				'name'       => 'online_education_single_post_meta',
				'default'    => array(
					'author',
					'date',
					'category',
					'comment',
				),
				'type'       => 'control',
				'control'    => 'online-education-sortable',
				'section'    => 'online_education_single_post_section',
				'choices'    => array(
					'author'   => esc_attr__( 'Author', 'online-education' ),
					'date'     => esc_attr__( 'Date', 'online-education' ),
					'category' => esc_attr__( 'Category', 'online-education' ),
					'comment'  => esc_attr__( 'Comment', 'online-education' ),
					'tags'     => esc_attr__( 'Tags', 'online-education' ),
				),
				'unsortable' => array(
					'author',
					'date',
					'category',
					'comment',
					'tags',
				),
				'priority'   => 40,
			),

			array(
				'name'     => 'online_education_related_post_heading',
				'type'     => 'control',
				'control'  => 'online-education-title',
				'label'    => esc_html__( 'Related Posts', 'online-education' ),
				'section'  => 'online_education_single_post_section',
				'priority' => 50,
			),

			array(
				'name'     => 'online_education_related_posts',
				'default'  => true,
				'type'     => 'control',
				'control'  => 'online-education-toggle',
				'label'    => esc_html__( 'Enable', 'online-education' ),
				'section'  => 'online_education_single_post_section',
				'priority' => 60,
			),

			array(
				'name'       => 'online_education_related_posts_column',
				'default'    => '2',
				'type'       => 'control',
				'control'    => 'select',
				'label'      => esc_html__( 'Columns', 'online-education' ),
				'section'    => 'online_education_single_post_section',
				'choices'    => array(
					'1' => esc_html__( '1', 'online-education' ),
					'2' => esc_html__( '2', 'online-education' ),
				),
				'priority'   => 70,
				'dependency' => array(
					'online_education_related_posts',
					'==',
					true,
				),
			),
		);

		$options = array_merge( $options, $configs );

		return $options;
	}

}

return new Online_Education_Customize_Single_Post_Options();
