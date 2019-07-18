$.noConflict();

jQuery(document).ready(function($) {

	"use strict";

	// Menu Trigger
	$('#menuToggle').on('click', function(event) {
		var windowWidth = $(window).width();   		 
			$('body').toggleClass('open');
			 
	}); 
 
});