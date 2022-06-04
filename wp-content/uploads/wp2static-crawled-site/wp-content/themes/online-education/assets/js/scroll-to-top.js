/**
 * Scroll to top.
 */
( function () {

	document.addEventListener('DOMContentLoaded', function () {
		let scrollToTopButton = document.getElementById( 'ole-scroll-to-top' );

		// Only proceed when the button is present.
		if ( scrollToTopButton ) {

			// On scroll and show and hide button.
			window.addEventListener(
				'scroll',
				function() {
					if ( 500 < window.scrollY ) {
						scrollToTopButton.classList.add( 'ole-scroll-to-top--show' );
					} else if ( 500 > window.scrollY ) {
						scrollToTopButton.classList.remove(
							'ole-scroll-to-top--show'
						);
					}
				}
			);

			// Scroll to top when clicked on button.
			scrollToTopButton.addEventListener(
				'click',
				function( e ) {
					e.preventDefault();

					// Only scroll to top if we are not in top.
					if ( 0 !== window.scrollY ) {
						window.scrollTo(
							{
								top: 0,
								behavior: 'smooth'
							}
						);
					}
				}
			);
		}
	});

} )();

