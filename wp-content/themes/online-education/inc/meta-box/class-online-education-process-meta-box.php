<?php
/**
 *
 */

defined( 'ABSPATH' ) || exit;

/**
 * Class Online_Education_Process_Meta_Box.
 */
class Online_Education_Process_Meta_Box {

	/**
	 * Keep record if meta box is saved once.
	 *
	 * @var bool
	 */
	private static $saved_meta_boxes = false;

	/**
	 * Holds instance of this class.
	 *
	 * @var null
	 */
	protected static $instance = null;

	/**
	 * Initiator.
	 *
	 * @return Online_Education_Process_Meta_Box|null
	 */
	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Register, process and save post meta box fields.
	 */
	private function __construct() {
		add_action( 'add_meta_boxes', array( $this, 'register_meta_boxes' ) );
		add_action( 'save_post', array( $this, 'save_meta_boxes' ), 1, 2 );
		add_action( 'online_education_process_settings_meta', 'Online_Education_Meta_Boxes::save' );
	}

	/**
	 * Register meta boxes.
	 *
	 * @return void
	 */
	public function register_meta_boxes() {
		$post_types = get_post_types( array( 'public' => true ) );

		foreach ( $post_types as $post_type ) {
			if ( 'attachment' === $post_type ) {
				continue;
			}

			add_meta_box(
				'online-education-meta-box',
				ucfirst( $post_type ) . ' ' . __( 'Options', 'online-education' ),
				'Online_Education_Meta_Boxes::render',
				$post_type,
				'side'
			);
		}
	}

	/**
	 * Handle saving the meta box.
	 *
	 * @param int $post_id Post ID.
	 * @param WP_Post $post Post object.
	 * @return int|void
	 */
	public function save_meta_boxes( $post_id, $post ) {

		// Check the nonce.
		if ( ! isset( $_POST['online_education_meta_nonce'] ) || ! wp_verify_nonce( sanitize_key( $_POST['online_education_meta_nonce'] ), 'online_education_nonce_action' ) ) {
			return;
		}

		// $post_id and $post are required.
		if ( empty( $post_id ) || empty( $post ) || self::$saved_meta_boxes ) {
			return;
		}

		// Check for revisions or autosaves.
		if ( defined( 'DOING_AUTOSAVE' ) || is_int( wp_is_post_revision( $post ) ) || is_int( wp_is_post_autosave( $post ) ) ) {
			return;
		}

		// Check the post being saved == the $post_id to prevent triggering this call for other save_post events.
		if ( empty( $_POST['post_ID'] ) || intval( $_POST['post_ID'] ) !== $post_id ) {
			return;
		}

		// Check user's permission.
		if ( isset( $_POST['post_type'] ) && ( 'page' === $_POST['post_type'] ) ) {
			if ( ! current_user_can( 'edit_page', $post_id ) ) {
				return $post_id;
			}
		} else {
			if ( ! current_user_can( 'edit_post', $post_id ) ) {
				return $post_id;
			}
		}

		self::$saved_meta_boxes = true;
		$process_actions        = array( 'settings' );

		foreach ( $process_actions as $process_action ) {
			do_action( "online_education_process_{$process_action}_meta", $post_id, $post );
		}
	}
}

Online_Education_Process_Meta_Box::instance();
