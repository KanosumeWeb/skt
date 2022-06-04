<?php
/**
 * Online Education svg icons class
 *
 * @since 1.0.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'Online_Education_SVG_Icons' ) ) {

	/**
	 * Class Online_Education_SVG_Icons
	 */
	class Online_Education_SVG_Icons {

		/**
		 * Allowed HTML.
		 *
		 * @var bool[][]
		 */
		public static $allowed_html = array(
			'svg'     => array(
				'class'       => true,
				'xmlns'       => true,
				'width'       => true,
				'height'      => true,
				'viewbox'     => true,
				'aria-hidden' => true,
				'role'        => true,
				'focusable'   => true,
			),
			'path'    => array(
				'fill'      => true,
				'fill-rule' => true,
				'd'         => true,
				'transform' => true,
			),
			'circle'  => array(
				'cx' => true,
				'cy' => true,
				'r'  => true,
			),
			'polygon' => array(
				'fill'      => true,
				'fill-rule' => true,
				'points'    => true,
				'transform' => true,
				'focusable' => true,
			),
		);


		/**
		 * Get the SVG icon.
		 *
		 * @param string $icon Default is empty.
		 * @param bool   $echo Default is true.
		 * @param array  $args Default is empty.
		 * @return string|null
		 */
		public static function get_svg( $icon = '', $echo = true, $args = array() ) {

			$icons = self::get_icons();
			$atts  = '';
			$svg   = '';

			if ( ! empty( $args ) ) {

				foreach ( $args as $key => $value ) {

					if ( ! empty( $value ) ) {
						$atts .= esc_html( $key ) . '="' . esc_attr( $value ) . '" ';
					}
				}
			}

			if ( array_key_exists( $icon, $icons ) ) {
				$repl = sprintf( '<svg class="ole-icon ole-icon--%1$s" %2$s', $icon, $atts );
				$svg  = preg_replace( '/^<svg /', $repl, trim( $icons[ $icon ] ) );
				$svg  = preg_replace( "/([\n\t]+)/", ' ', $svg );
				$svg  = preg_replace( '/>\s*</', '><', $svg );
			}

			if ( ! $svg ) {
				return null;
			}

			if ( $echo ) {
				echo wp_kses( $svg, self::$allowed_html );
			} else {
				return wp_kses( $svg, self::$allowed_html );
			}
		}

		/**
		 * Get all SVG icons.
		 *
		 * @return mixed|void
		 */
		public static function get_icons() {
			return apply_filters( 'online_education_svg_icons', self::$icons );
		}

		/**
		 * SVG icons.
		 *
		 * @var string[]
		 */
		public static $icons = array(
			'chevron-right' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.707 11.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L13.586 12 8.293 6.707a1 1 0 011.414-1.414l6 6z" /></svg>',
			'chevron-left'  => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.293 12.707a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L10.414 12l5.293 5.293a1 1 0 01-1.414 1.414l-6-6z"/></svg>',
			'cart'          => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.05261 0.880524C0.500328 0.880524 0.0526123 1.32824 0.0526123 1.88052C0.0526123 2.43281 0.500328 2.88052 1.05261 2.88052H3.63131L4.60679 7.74865C4.6114 7.7787 4.61736 7.80832 4.62458 7.83743L6.5369 17.3808L6.53703 17.3815C6.68761 18.1379 7.09965 18.8172 7.70075 19.3005C8.2993 19.7818 9.04739 20.0383 9.81512 20.0261H20.9209C21.6886 20.0383 22.4367 19.7818 23.0353 19.3005C23.6365 18.817 24.0486 18.1375 24.1991 17.3808L24.1991 17.3808L24.2006 17.3733L26.0315 7.78324C26.0874 7.49047 26.0098 7.18802 25.8199 6.95834C25.6299 6.72866 25.3474 6.5957 25.0493 6.5957H6.41552L5.43132 1.68405C5.33769 1.21679 4.92735 0.880524 4.45081 0.880524H1.05261ZM8.4982 16.9893L6.81628 8.5957H23.8403L22.2375 16.9907L22.2369 16.994C22.1775 17.2884 22.0167 17.5531 21.782 17.7419C21.5464 17.9313 21.2514 18.032 20.9487 18.0262L20.9296 18.0261H9.80641L9.78727 18.0262C9.48456 18.032 9.18959 17.9313 8.95401 17.7419C8.71845 17.5525 8.55731 17.2865 8.49849 16.9907L8.4982 16.9893ZM9.02717 24.5888C8.94934 24.5888 8.88281 24.6526 8.88281 24.7355C8.88281 24.8184 8.94934 24.8822 9.02717 24.8822C9.105 24.8822 9.17153 24.8184 9.17153 24.7355C9.17153 24.6526 9.105 24.5888 9.02717 24.5888ZM6.88281 24.7355C6.88281 23.5518 7.84098 22.5888 9.02717 22.5888C10.2134 22.5888 11.1715 23.5518 11.1715 24.7355C11.1715 25.9192 10.2134 26.8822 9.02717 26.8822C7.84098 26.8822 6.88281 25.9192 6.88281 24.7355ZM21.6153 24.5888C21.5374 24.5888 21.4709 24.6526 21.4709 24.7355C21.4709 24.8184 21.5374 24.8822 21.6153 24.8822C21.6931 24.8822 21.7596 24.8184 21.7596 24.7355C21.7596 24.6526 21.6931 24.5888 21.6153 24.5888ZM19.4709 24.7355C19.4709 23.5518 20.4291 22.5888 21.6153 22.5888C22.8015 22.5888 23.7596 23.5518 23.7596 24.7355C23.7596 25.9192 22.8015 26.8822 21.6153 26.8822C20.4291 26.8822 19.4709 25.9192 19.4709 24.7355Z" /></svg>',
			'user'          => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a5 5 0 100 10 5 5 0 000-10zM9 7a3 3 0 116 0 3 3 0 01-6 0z" /><path d="M7.5 14c-1.423 0-2.808.502-3.846 1.424C2.612 16.35 2 17.634 2 19v2a1 1 0 102 0v-2c0-.755.336-1.507.982-2.081C5.632 16.341 6.536 16 7.5 16h9c.964 0 1.868.341 2.518.919.646.574.982 1.326.982 2.081v2a1 1 0 102 0v-2c0-1.367-.612-2.65-1.654-3.576C19.308 14.502 17.923 14 16.5 14h-9z"/></svg>',
			'search'        => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 4a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0z"/><path d="M15.943 15.943a1 1 0 011.414 0l4.35 4.35a1 1 0 01-1.414 1.414l-4.35-4.35a1 1 0 010-1.414z"/></svg>',
			'calender'      => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2V3H9V2C9 1.44772 8.55228 1 8 1C7.44772 1 7 1.44772 7 2V3H5C3.34315 3 2 4.34315 2 6V10V20C2 21.6569 3.34315 23 5 23H19C20.6569 23 22 21.6569 22 20V10V6C22 4.34315 20.6569 3 19 3H17V2ZM20 9V6C20 5.44772 19.5523 5 19 5H17V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6V5H9V6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6V5H5C4.44772 5 4 5.44772 4 6V9H20ZM4 11H20V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11Z" /></svg>',
			'edit'          => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M17.207 4.207a1.121 1.121 0 011.586 1.586L6.489 18.097l-2.115.529.529-2.115L17.207 4.207zM18 1.88c-.828 0-1.622.329-2.207.914l-12.5 12.5a1 1 0 00-.263.464l-1 4a1 1 0 001.213 1.213l4-1a1 1 0 00.464-.263l12.5-12.5a3.12 3.12 0 00-1.012-5.09A3.121 3.121 0 0018 1.878zM12 19a1 1 0 100 2h9a1 1 0 100-2h-9z" /></svg>',
			'comment'       => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M5 4a1 1 0 00-1 1v13.586l2.293-2.293A1 1 0 017 16h12a1 1 0 001-1V5a1 1 0 00-1-1H5zM2.879 2.879A3 3 0 015 2h14a3 3 0 013 3v10a3 3 0 01-3 3H7.414l-3.707 3.707A1 1 0 012 21V5a3 3 0 01.879-2.121z" /></svg>',
			'arrow-right'   => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z" clip-rule="evenodd"/><path d="M11.293 4.293a1 1 0 011.414 0l7 7a1 1 0 010 1.414l-7 7a1 1 0 01-1.414-1.414L17.586 12l-6.293-6.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>',
			'arrow-down'    => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"/></svg>',
			'arrow-up'      => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 20a1 1 0 01-1-1V5a1 1 0 112 0v14a1 1 0 01-1 1z"></path><path fill-rule="evenodd" d="M4.293 12.707a1 1 0 010-1.414l7-7a1 1 0 011.414 0l7 7a1 1 0 01-1.414 1.414L12 6.414l-6.293 6.293a1 1 0 01-1.414 0z"></path></svg>',
			'filter'        => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M4 2a1 1 0 011 1v7a1 1 0 11-2 0V3a1 1 0 011-1zm1 13h2a1 1 0 100-2H1a1 1 0 100 2h2v6a1 1 0 102 0v-6zm8-3a1 1 0 10-2 0v9a1 1 0 102 0v-9zM12 2a1 1 0 011 1v4h2a1 1 0 110 2H9a1 1 0 110-2h2V3a1 1 0 011-1zm8 13h3a1 1 0 110 2h-2v4a1 1 0 11-2 0v-4h-2a1 1 0 110-2h3zm0-13a1 1 0 011 1v9a1 1 0 11-2 0V3a1 1 0 011-1z"/></svg>',
			'tag'           => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 1a1 1 0 00-1 1v10a1 1 0 00.293.707l8.59 8.58a2.999 2.999 0 004.244 0l7.17-7.17-.707-.707.71.705a3 3 0 000-4.23l-.003-.002-8.59-8.59A1 1 0 0012 1H2zm17.882 11.704l-.001.001-7.168 7.168a1 1 0 01-1.415 0h-.001L3 11.584V3h8.586l8.295 8.295a1 1 0 010 1.41zM7 6a1 1 0 000 2h.01a1 1 0 000-2H7z" /></svg>',
			'close'         => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.293 5.293a1 1 0 011.414 0L12 10.586l5.293-5.293a1 1 0 111.414 1.414L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 12 5.293 6.707a1 1 0 010-1.414z" /></svg>',
			'grid'          => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1H3zm1 7V4h5v5H4zM14 2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1h-7zm1 7V4h5v5h-5zM13 14a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-7zm2 1v5h5v-5h-5zM3 13a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1v-7a1 1 0 00-1-1H3zm1 7v-5h5v5H4z"/></svg>',
			'close-circle'  => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z" /><path d="M15.707 8.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414l6-6a1 1 0 011.414 0z" /><path d="M8.293 8.293a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414z" /></svg>',
		);
	}
}
