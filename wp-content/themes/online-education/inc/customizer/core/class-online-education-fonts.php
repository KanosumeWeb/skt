<?php
/**
 * Helper class for font settings for this theme.
 *
 * Class Online_Education_Fonts
 *
 * @package    ThemeGrill
 * @since      3.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Helper class for font settings for this theme.
 *
 * Class Online_Education_Fonts
 */
class Online_Education_Fonts {

	/**
	 * System Fonts
	 *
	 * @var array
	 */
	public static $system_fonts = array();

	/**
	 * Google Fonts
	 *
	 * @var array
	 */
	public static $google_fonts = array();

	/**
	 * Custom Fonts
	 *
	 * @var array
	 */
	public static $custom_fonts = array();

	/**
	 * Font variants
	 *
	 * @var array
	 */
	public static $font_variants = array();

	/**
	 * Google font subsets
	 *
	 * @var array
	 */
	public static $google_font_subsets = array();

	/**
	 * Get system fonts.
	 *
	 * @return mixed|void
	 */
	public static function get_system_fonts() {

		if ( empty( self::$system_fonts ) ) :

			self::$system_fonts = array(

				'default'                               => array(
					'family' => 'default',
					'label'  => 'Default',
				),
				'Georgia,Times,"Times New Roman",serif' => array(
					'family' => 'Georgia,Times,"Times New Roman",serif',
					'label'  => 'serif',
				),
				'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif' => array(
					'family' => '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif',
					'label'  => 'sans-serif',
				),
				'Monaco,"Lucida Sans Typewriter","Lucida Typewriter","Courier New",Courier,monospace' => array(
					'family' => 'Monaco,"Lucida Sans Typewriter","Lucida Typewriter","Courier New",Courier,monospace',
					'label'  => 'monospace',
				),

			);

		endif;

		return apply_filters( 'online_education_system_fonts', self::$system_fonts );

	}

	/**
	 * Get Google fonts.
	 * It's array is generated from the google-fonts.json file.
	 *
	 * @return mixed|void
	 */
	public static function get_google_fonts() {

		if ( empty( self::$google_fonts ) ) :

			global $wp_filesystem;
			$google_fonts_file = apply_filters( 'online_education_google_fonts_json_file', dirname( __FILE__ ) . '/custom-controls/typography/google-fonts.json' );

			if ( ! file_exists( dirname( __FILE__ ) . '/custom-controls/typography/google-fonts.json' ) ) {
				return array();
			}

			// Require `file.php` file of WordPress to include filesystem check for getting the file contents.
			if ( ! $wp_filesystem ) {
				require_once ABSPATH . '/wp-admin/includes/file.php';
			}

			// Proceed only if the file is readable.
			if ( is_readable( $google_fonts_file ) ) {
				WP_Filesystem();

				$file_contents     = $wp_filesystem->get_contents( $google_fonts_file );
				$google_fonts_json = json_decode( $file_contents, 1 );

				foreach ( $google_fonts_json['items'] as $key => $font ) {

					$google_fonts[ $font['family'] ] = array(
						'family'   => $font['family'],
						'label'    => $font['family'],
						'variants' => $font['variants'],
						'subsets'  => $font['subsets'],
					);

					self::$google_fonts = $google_fonts;

				}
			}

		endif;

		return apply_filters( 'online_education_system_fonts', self::$google_fonts );

	}

	/**
	 * Get custom fonts.
	 *
	 * @return mixed|void
	 */
	public static function get_custom_fonts() {

		return apply_filters( 'online_education_custom_fonts', self::$custom_fonts );

	}

	/**
	 * Get font variants.
	 *
	 * @return mixed|void
	 */
	public static function get_font_variants() {

		if ( empty( self::$font_variants ) ) :

			self::$font_variants = array(
				'100'       => esc_html__( 'Thin 100', 'online-education' ),
				'100italic' => esc_html__( 'Thin 100 Italic', 'online-education' ),
				'200'       => esc_html__( 'Extra-Light 200', 'online-education' ),
				'200italic' => esc_html__( 'Extra-Light 200 Italic', 'online-education' ),
				'300'       => esc_html__( 'Light 300', 'online-education' ),
				'300italic' => esc_html__( 'Light 300 Italic', 'online-education' ),
				'regular'   => esc_html__( 'Regular 400', 'online-education' ),
				'italic'    => esc_html__( 'Regular 400 Italic', 'online-education' ),
				'500'       => esc_html__( 'Medium 500', 'online-education' ),
				'500italic' => esc_html__( 'Medium 500 Italic', 'online-education' ),
				'600'       => esc_html__( 'Semi-Bold 600', 'online-education' ),
				'600italic' => esc_html__( 'Semi-Bold 600 Italic', 'online-education' ),
				'700'       => esc_html__( 'Bold 700', 'online-education' ),
				'700italic' => esc_html__( 'Bold 700 Italic', 'online-education' ),
				'800'       => esc_html__( 'Extra-Bold 800', 'online-education' ),
				'800italic' => esc_html__( 'Extra-Bold 800 Italic', 'online-education' ),
				'900'       => esc_html__( 'Black 900', 'online-education' ),
				'900italic' => esc_html__( 'Black 900 Italic', 'online-education' ),
			);

		endif;

		return apply_filters( 'online_education_font_variants', self::$font_variants );

	}

	/**
	 * Get Google font subsets.
	 *
	 * @return mixed|void
	 */
	public static function get_google_font_subsets() {

		if ( empty( self::$google_font_subsets ) ) :

			self::$google_font_subsets = array(
				'arabic'              => esc_html__( 'Arabic', 'online-education' ),
				'bengali'             => esc_html__( 'Bengali', 'online-education' ),
				'chinese-hongkong'    => esc_html__( 'Chinese (Hong Kong)', 'online-education' ),
				'chinese-simplified'  => esc_html__( 'Chinese (Simplified)', 'online-education' ),
				'chinese-traditional' => esc_html__( 'Chinese (Traditional)', 'online-education' ),
				'cyrillic'            => esc_html__( 'Cyrillic', 'online-education' ),
				'cyrillic-ext'        => esc_html__( 'Cyrillic Extended', 'online-education' ),
				'devanagari'          => esc_html__( 'Devanagari', 'online-education' ),
				'greek'               => esc_html__( 'Greek', 'online-education' ),
				'greek-ext'           => esc_html__( 'Greek Extended', 'online-education' ),
				'gujarati'            => esc_html__( 'Gujarati', 'online-education' ),
				'gurmukhi'            => esc_html__( 'Gurmukhi', 'online-education' ),
				'hebrew'              => esc_html__( 'Hebrew', 'online-education' ),
				'japanese'            => esc_html__( 'Japanese', 'online-education' ),
				'kannada'             => esc_html__( 'Kannada', 'online-education' ),
				'khmer'               => esc_html__( 'Khmer', 'online-education' ),
				'korean'              => esc_html__( 'Korean', 'online-education' ),
				'latin'               => esc_html__( 'Latin', 'online-education' ),
				'latin-ext'           => esc_html__( 'Latin Extended', 'online-education' ),
				'malayalam'           => esc_html__( 'Malayalam', 'online-education' ),
				'myanmar'             => esc_html__( 'Myanmar', 'online-education' ),
				'oriya'               => esc_html__( 'Oriya', 'online-education' ),
				'sinhala'             => esc_html__( 'Sinhala', 'online-education' ),
				'tamil'               => esc_html__( 'Tamil', 'online-education' ),
				'telugu'              => esc_html__( 'Telugu', 'online-education' ),
				'thai'                => esc_html__( 'Thai', 'online-education' ),
				'tibetan'             => esc_html__( 'Tibetan', 'online-education' ),
				'vietnamese'          => esc_html__( 'Vietnamese', 'online-education' ),
			);

		endif;

		return apply_filters( 'online_education_font_variants', self::$google_font_subsets );

	}

}
