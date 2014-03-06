// imgs är min array med bilder
// cnt hjälper till räkna ut antal bilder i arrayen
// bildspel är knappen till vänster på sidan
// bildspel2 är knappen till höger på sidan
// Använder mig av (this).attr för att fadeIn rätt bild
$(document).ready(function(){
	
var imgs = [								
           'photos/glad.jpg',
           'photos/mario.jpg',
		   'photos/placeholder.jpg'
		   ];
var cnt = imgs.length;
		
		 
		 $('#bildspel').click(function() {
			 
			 $('#imageSlide').fadeOut("fast", function() {
				 
         	  	  $(this).attr('src', imgs[(imgs.length++) % cnt ]).fadeIn("fast");
				 
			 });	 
		 });
		 
		 $('#bildspel2').click(function() {
			 
					 $('#imageSlide').fadeOut("fast", function() {
				
         	  	 		 $(this).attr('src', imgs[(imgs.length++) % cnt ]).fadeIn("fast");
        	 		 });	 
		 });      
});
    