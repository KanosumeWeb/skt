<?php
/**
 * Online Education functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Online_Education
 * @since   1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! defined( 'ONLINE_EDUCATION_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( 'ONLINE_EDUCATION_VERSION', '1.0.2' );
}

if ( ! function_exists( 'online_education_setup' ) ) :

	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function online_education_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Online_Education, use a find and replace
		 * to change 'online-education' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'online-education', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// Register menus.
		register_nav_menus(
			array(
				'ole-menu-primary' => esc_html__( 'Primary', 'online-education' ),
				'ole-menu-mobile'  => esc_html__( 'Mobile', 'online-education' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'width'       => 115,
				'height'      => 50,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);

		/**
		 * Gutenberg.
		 */
		// Add support for wide images.
		add_theme_support( 'align-wide' );

		// Editor Styles.
		add_theme_support( 'editor-styles' );
		add_editor_style( array( 'assets/css/editor-style.css', online_education_get_google_fonts() ) );
	}
endif;
add_action( 'after_setup_theme', 'online_education_setup' );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function online_education_widgets_init() {

	register_sidebar(
		array(
			'name'          => esc_html__( 'Right Sidebar', 'online-education' ),
			'id'            => 'ole-right-sidebar',
			'description'   => esc_html__( 'Widgets added here will appear on the right sidebar of the page.', 'online-education' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);

	for ( $col = 1; $col <= 4; $col++ ) {
		register_sidebar(
			array(
				'name'          => sprintf(
					/* translators: 1: Footer column number. */
					__( 'Footer Column %1$d', 'online-education' ),
					$col
				),
				'id'            => sprintf( 'ole-footer-%d', $col ),
				'description'   => sprintf(
					/* translators: 1: Footer column number. */
					__( 'Widgets added here will appear inside %1$d of footer', 'online-education' ),
					$col
				),
				'before_widget' => '<section id="%1$s" class="widget %2$s">',
				'after_widget'  => '</section>',
				'before_title'  => '<h2 class="widget-title">',
				'after_title'   => '</h2>',
			)
		);
	}
}
add_action( 'widgets_init', 'online_education_widgets_init' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function online_education_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'online_education_content_width', 640 );
}
add_action( 'after_setup_theme', 'online_education_content_width', 0 );

/**
 * Get Google fonts.
 *
 * Generate Google fonts source link.
 *
 * @return string
 */
function online_education_get_google_fonts() {

	$fonts = array(
		'Be Vietnam Pro:400,500,600',
	);

	return add_query_arg(
		array(
			'family'  => rawurlencode( implode( '|', $fonts ) ),
			'subset'  => rawurlencode( 'latin,latin-ext' ),
			'display' => 'swap',
		),
		'https://fonts.googleapis.com/css'
	);
}

/**
 * Enqueue scripts and styles.
 */
function online_education_scripts() {

	$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

	wp_enqueue_style( 'online-education-style', get_stylesheet_uri(), array(), ONLINE_EDUCATION_VERSION );
	wp_style_add_data( 'online-education-style', 'rtl', 'replace' );

	wp_enqueue_script( 'online-education-navigation', get_template_directory_uri() . "/assets/js/navigation{$suffix}.js", array(), ONLINE_EDUCATION_VERSION, true );
	wp_enqueue_script( 'online-education-scroll-to-top', get_template_directory_uri() . "/assets/js/scroll-to-top{$suffix}.js", array(), ONLINE_EDUCATION_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	// Google font.
	wp_enqueue_style( 'online-education-google-font', online_education_get_google_fonts(), array(), ONLINE_EDUCATION_VERSION, 'all' );
}

add_action( 'wp_enqueue_scripts', 'online_education_scripts' );

/**
 * Utils methods.
 */
require get_template_directory() . '/inc/class-online-education-utils.php';

/**
 * Structure.
 */
require get_template_directory() . '/inc/hooks.php';
require get_template_directory() . '/inc/structure/header.php';
require get_template_directory() . '/inc/structure/content.php';
require get_template_directory() . '/inc/structure/footer.php';

/**
 * Breadcrumb trail file.
 */
require get_template_directory() . '/inc/class-online-education-breadcrumb-trail.php';
require get_template_directory() . '/inc/class-online-education-svg-icons.php';

/**
 * Masteriyo.
 */
require get_template_directory() . '/inc/compatibility/class-online-education-masteriyo.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer/class-online-education-customizer.php';
require get_template_directory() . '/inc/class-online-education-dynamic-css.php';

if ( is_admin() ) {
	require get_template_directory() . '/inc/meta-box/class-online-education-meta-boxes.php';
	require get_template_directory() . '/inc/meta-box/class-online-education-process-meta-box.php';
	require get_template_directory() . '/inc/admin/class-online-education-admin.php';
	require get_template_directory() . '/inc/admin/class-online-education-dashboard.php';
	require get_template_directory() . '/inc/admin/class-online-education-welcome-notice.php';
}
