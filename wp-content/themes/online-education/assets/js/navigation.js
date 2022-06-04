/**
 * Online Education Navigation JS file.
 *
 * @package
 * @since   1.0.0
 */

/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
( function() {
	const oleNavigation = function() {
		const self             = this;
		this.primaryMenu       = document.getElementById( 'site-navigation' );
		this.mobileCanvas      = document.querySelector( '.ole-mobile-canvas' );
		this.mobileMenu        = this.mobileCanvas && this.mobileCanvas.querySelector( '#mobile-navigation' );
		this.links             = this.primaryMenu && this.primaryMenu.getElementsByTagName( 'a' );
		this.linksWithChildren = this.primaryMenu && this.primaryMenu.querySelectorAll( '.menu-item-has-children > a, .page_item_has_children > a' );
		this.mobileSubMenu     = this.mobileMenu && this.mobileMenu.querySelectorAll( '.sub-menu' );
		this.subMenu           = this.primaryMenu && this.primaryMenu.querySelectorAll( '.sub-menu' );
		this.toggleBtn         = document.getElementById( 'menu-toggle' );
		this.closeMobileMenu   = document.querySelector( '.close-mobile-menu' );
		this.search            = this.primaryMenu && this.primaryMenu.querySelector( '.ole-header-search' )
		this.searchToggle      = this.search && this.search.querySelector( '.ole-header-search-toggle' )

		this.slideUp = function( target, duration = 300 ) {
			target.style.transitionProperty = 'height, margin, padding';
			target.style.transitionDuration = duration + 'ms';
			target.style.boxSizing = 'border-box';
			target.style.height = target.offsetHeight + 'px';

			target.offsetHeight;

			target.style.overflow = 'hidden';
			target.style.height = 0;
			target.style.paddingTop = 0;
			target.style.paddingBottom = 0;
			target.style.marginTop = 0;
			target.style.marginBottom = 0;

			setTimeout( () => {
				target.style.display = 'none';
				target.style.removeProperty( 'height' );
				target.style.removeProperty( 'padding-top' );
				target.style.removeProperty( 'padding-bottom' );
				target.style.removeProperty( 'margin-top' );
				target.style.removeProperty( 'margin-bottom' );
				target.style.removeProperty( 'overflow' );
				target.style.removeProperty( 'transition-duration' );
				target.style.removeProperty( 'transition-property' );
			}, duration );
		};

		this.slideDown = function( target, duration = 500 ) {
			target.style.removeProperty( 'display' );

			let display = window.getComputedStyle( target ).display;

			if ( display === 'none' ) {
				display = 'block';
			}

			target.style.display = display;

			const height = target.offsetHeight;
			target.style.overflow = 'hidden';
			target.style.height = 0;
			target.style.paddingTop = 0;
			target.style.paddingBottom = 0;
			target.style.marginTop = 0;
			target.style.marginBottom = 0;

			target.offsetHeight;

			target.style.boxSizing = 'border-box';
			target.style.transitionProperty = 'height, margin, padding';
			target.style.transitionDuration = duration + 'ms';
			target.style.height = height + 'px';

			target.style.removeProperty( 'padding-top' );
			target.style.removeProperty( 'padding-bottom' );
			target.style.removeProperty( 'margin-top' );
			target.style.removeProperty( 'margin-bottom' );

			setTimeout( () => {
				target.style.removeProperty( 'height' );
				target.style.removeProperty( 'overflow' );
				target.style.removeProperty( 'transition-duration' );
				target.style.removeProperty( 'transition-property' );
			}, duration );
		};

		this.trapFocus = function( container, initialFocusIndex = 0 ) {
			const elements = 'a, button, input[type="search"]';
			const focusableElements = Array.prototype.slice.call( container.querySelectorAll( elements ) );
			const firstEl = container.querySelectorAll( elements )[ 0 ];
			const lastEl = focusableElements[ focusableElements.length - 1 ];

			focusableElements[ initialFocusIndex ].focus();

			container.addEventListener( 'keydown', ( e ) => {
				if ( 'Tab' === e.key ) {
					if ( e.shiftKey ) {
						if ( document.activeElement === firstEl ) {
							e.preventDefault();
							lastEl.focus();
						}
					} else {
						if ( document.activeElement === lastEl ) {
							e.preventDefault();
							firstEl.focus();
						}
					}
				}
			} );
		}

		this.slideToggle = function( target, duration = 300 ) {
			if ( window.getComputedStyle( target ).display === 'none' ) {
				target.classList.add( 'show' );
				return self.slideDown( target, duration );
			}

			target.classList.remove( 'show' );
			return self.slideUp( target, duration );
		};

		this.toggleSearch = function( e ) {
			e.preventDefault();
			const target = self.search.querySelector( '.ole-header-searchform' );
			self.search.classList.toggle( 'active' );
			self.slideToggle( target, 200 );

			if ( self.search.classList.contains( 'active' ) ) {
				self.trapFocus( self.search, 1 );
				document.addEventListener( 'click', e => {
					if ( ! self.search.contains( e.target ) ) {
						self.slideUp( target, 300 );
						self.search.classList.remove( 'active' );
					}
				} )
			} else {
				this.focus();
			}
		}

		/**
		 * Toggle mobile nav.
		 *
		 * @param e
		 */
		this.toggleMobileNavigation = function( e ) {
			e.preventDefault();
			self.mobileCanvas.classList.toggle( 'active' );

			if ( 'true' === self.closeMobileMenu.getAttribute( 'aria-expanded' ) ) { // If toggle off, slide menu.
				self.closeMobileMenu.setAttribute( 'aria-expanded', 'false' );
				self.toggleBtn.focus();
				document.body.style.removeProperty( 'overflow' );
			} else {
				self.closeMobileMenu.setAttribute( 'aria-expanded', 'true' );
				document.body.style.overflow = 'hidden';
				self.trapFocus( self.mobileCanvas, 1 );
			}
		};

		/**
		 * Toggle submenu.
		 *
		 * @param e
		 */
		this.toggleSubMenu = function( e ) {
			e.preventDefault();

			this.classList.toggle( 'active' );

			const targetSubMenu = e.currentTarget.parentNode.nextElementSibling;

			self.slideToggle( targetSubMenu );
		};

		/**
		 * Sets or removes .focus class on an element.
		 *
		 * @param event
		 */
		this.toggleFocus = function( event ) {
			if ( event.type === 'focus' || event.type === 'blur' ) {
				let selfNav = this;

				// Move up through the ancestors of the current link until we hit .nav-menu.
				while ( ! selfNav.classList.contains( 'nav-menu' ) ) {
					// On li elements toggle the class .focus.
					if ( 'li' === selfNav.tagName.toLowerCase() ) {
						selfNav.classList.toggle( 'focus' );
					}

					selfNav = selfNav.parentNode;
				}
			}

			if ( event.type === 'touchstart' ) {
				const menuItem = this.parentNode;

				event.preventDefault();

				for ( const link of menuItem.parentNode.children ) {
					if ( menuItem !== link ) {
						link.classList.remove( 'focus' );
					}
				}

				menuItem.classList.toggle( 'focus' );
			}
		};

		/**
		 * Init.
		 */
		this.init = function(){

			// Hide menu toggle button if menu is empty and return early.
			if ( ! self.primaryMenu ) {
				self.toggleBtn.style.display = 'none';

				return;
			}

			if ( ! self.primaryMenu.classList.contains( 'nav-menu' ) ) {
				self.primaryMenu.classList.add( 'nav-menu' );
			}

			if ( self.toggleBtn ) {
				self.toggleBtn.addEventListener( 'click', this.toggleMobileNavigation );
				self.closeMobileMenu.addEventListener( 'click', this.toggleMobileNavigation );
			}

			if ( self.mobileSubMenu ) {
				self.mobileSubMenu.forEach( ( item ) => {
					item.parentNode.querySelector( '.ole-submenu-toggle' ).addEventListener( 'click', self.toggleSubMenu );
				} );
			}

			if ( self.search ) {
				self.searchToggle.addEventListener( 'click', this.toggleSearch );
			}

			// Toggle focus each time a menu link is focused or blurred.
			for ( const link of this.links ) {
				link.addEventListener( 'focus', this.toggleFocus, true );
				link.addEventListener( 'blur', this.toggleFocus, true );
			}

			// Toggle focus each time a menu link with children receive a touch event.
			for ( const link of this.linksWithChildren ) {
				link.addEventListener( 'touchstart', this.toggleFocus, { passive: true} );
			}
		};

		this.init();
	};

	window.oleNavigation = new oleNavigation();
}() );
