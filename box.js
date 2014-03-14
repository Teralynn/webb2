// imgs är min array med bilder, som skall fyllas när användaren lägger in bilder
// antsl räknar ut antal bilder i arrayen
// bildspel är knappen till vänster på sidan
// bildspel2 är knappen till höger på sidan
// Använder mig av (this).attr för att fadeIn rätt bild
$(document).ready(function(){
	
var imgs = [								
           'photos/glad.jpg',
           'photos/mario.jpg',
		   'photos/placeholder.jpg',
		   'photos/boom.jpg'
		   ];
var antal = imgs.length;			
	 
		 $('#bildspel').click(function() {		
				 
			 $('#imageSlide').fadeOut("fast", function() {
				 
         	  	   $(this).attr('src', imgs[(imgs.length++) % antal ]).fadeIn("fast");
				 
			 });	 
		 });
		 
		 $('#bildspel2').click(function() {
			 
					 $('#imageSlide').fadeOut("fast", function() {
						 
				       	  	 $(this).attr('src', imgs[(imgs.length++) % antal ]).fadeIn("fast");
        	 		 });	 
		 });      
});
    