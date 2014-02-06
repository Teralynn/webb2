// JavaScript Document
$(document).ready(function(){
	
var elems = document.getElementsByTagName( "pic" );
// Convert the NodeList to an Array
var arr = jQuery.makeArray( elems );
// Use an Array method on list of dom elements
arr.reverse();

$( arr ).appendTo( document.body );
		
    $('#bildspel').click(function(){	 
		  $('imgArray[0]').fadeIn('swing');
		  $('imgArray[1]').fadeOut('swing');
	});
	
	$('#bildspel2').click(function() {
		  $('imgArray[0]').fadeOut('swing');
		  $('imgArray[1]').fadeIn('swing');
	});
});
