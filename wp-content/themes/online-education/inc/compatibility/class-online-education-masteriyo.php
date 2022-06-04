<?php
/**
 * Masteriyo compatibility.
 */

defined( 'ABSPATH' ) || exit;

if ( ! Online_Education_Utils::is_masteriyo_active() ) {
	return;
}

/**
 * Class Online_Education_Masteriyo.
 */
class Online_Education_Masteriyo {

	/**
	 * Variable.
	 *
	 * @var null
	 */
	private static $instance = null;

	/**
	 * Initiator.
	 *
	 * @return Online_Education_Masteriyo|null
	 */
	public static function instance() {

		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'after_setup_theme', array( $this, 'masteriyo_setup' ) );
		add_action( 'masteriyo_sidebar', array( $this, 'init_sidebar' ) );
		add_action( 'masteriyo_before_main_content', array( $this, 'wrapper_before' ), 9 );
		add_action( 'masteriyo_after_main_content', array( $this, 'wrapper_after' ), 11 );
		add_action( 'template_redirect', array( $this, 'archive_courses_title_position' ) );
		add_action( 'template_redirect', array( $this, 'single_course_title_position' ) );
		add_filter( 'body_class', array( $this, 'add_body_class' ) );
		add_filter( 'online_education_has_page_header', array( $this, 'single_course_page_header' ) );
	}

	/**
	 * Masteriyo setup.
	 *
	 * @return void
	 */
	public function masteriyo_setup() {
		add_theme_support( 'masteriyo' );
	}

	/**
	 * Initialize sidebar.
	 *
	 * @return void
	 */
	public function init_sidebar() {
		get_sidebar();
	}

	/**
	 * Wrapper before.
	 *
	 * @return void
	 */
	public function wrapper_before() {
		?>
		<main id="primary" class="site-main">
		<?php
	}

	/**
	 * Wrapper after.
	 *
	 * @return void
	 */
	public function wrapper_after() {
		?>
		</main>
		<?php
	}

	/**
	 * Change position of archive courses title.
	 *
	 * @return void
	 */
	public function archive_courses_title_position() {

		if ( ! masteriyo_is_courses_page() ) {
			return;
		}

		$position = get_theme_mod( 'online_education_masteriyo_courses_archive_title_position', 'page-header' );

		if ( 'page-header' === $position ) {
			add_filter( 'masteriyo_show_page_title', '__return_false' );
		} else {
			add_filter( 'online_education_page_header_has_title', '__return_true' );
		}
	}

	/**
	 * Change position of single course title.
	 *
	 * @return void
	 */
	public function single_course_title_position() {

		if ( ! masteriyo_is_single_course_page() ) {
			return;
		}

		$position = get_theme_mod( 'online_education_masteriyo_single_course_title_position', 'page-header' );

		if ( 'page-header' === $position ) {
			remove_action( 'masteriyo_single_course_content', 'masteriyo_single_course_title', 30 );
		} else {
			add_filter( 'online_education_page_header_has_title', '__return_false' );
		}
	}

	/**
	 * Add body class.
	 *
	 * @param array $classes Classes.
	 * @return array Array of classes.
	 */
	public function add_body_class( $classes ) {

		if ( ! masteriyo_is_single_course_page() ) {
			return $classes;
		}

		if ( 'left' === get_theme_mod( 'online_education_masteriyo_single_course_sidebar_position', 'right' ) ) {
			$classes[] = 'ole-masteriyo-single-course-sidebar-layout--left';
		}

		return $classes;
	}

	/**
	 * Page header on single course page.
	 *
	 * @param bool $page_header Has page header.
	 * @return bool
	 */
	public function single_course_page_header( $page_header ) {

		if (
			is_singular( 'mto-course' ) &&
			'page-header' === get_theme_mod( 'online_education_masteriyo_single_course_title_position', 'page-header' ) &&
			( Online_Education_Utils::page_header_has_breadcrumbs() || Online_Education_Utils::page_header_has_title() )
		) {
			return true;
		}

		return $page_header;
	}
}

Online_Education_Masteriyo::instance();


