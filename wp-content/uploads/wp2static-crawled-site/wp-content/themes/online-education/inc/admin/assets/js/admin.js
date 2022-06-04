jQuery( document ).ready( function( $ ) {
	$( '.ole-get-started' ).on( 'click', function( e ) {
		e.preventDefault();
		$( this ).addClass( 'updating-message' ).text( onlineEducationAdmin.btnText );

		$.ajax( {
			type    : "POST",
			url     : ajaxurl, // URL to "wp-admin/admin-ajax.php"
			data    : {
				action   : 'install_plugin',
				security : onlineEducationAdmin.installNonce,
			},
			success : function( response ) {
				window.location.href = response.redirect;
			},
			error   : function( xhr, ajaxOptions, thrownError ){
				console.log(thrownError);
			}
		} );
	} );

	$( '.online-education-notice .notice-dismiss' ).on( 'click', function ( e ) {
		e.preventDefault();
		$( e.target ).parent( '.online-education-notice' ).css( 'display', 'none' );

		$.ajax( {
			type: 'POST',
			url: ajaxurl,
			data: {
				action: 'hide_notice',
				security: onlineEducationAdmin.dismissNonce
			},
			error   : function( xhr, ajaxOptions, thrownError ){
				console.log(thrownError);
			}
		} )
	} )
} );
