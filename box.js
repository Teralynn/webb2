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
				  if(antal > 0) { 
         	  	      $(this).attr('src', imgs[(--antal) % imgs.length ]).fadeIn("fast");
				  }
			 });	 
		 });
		 
		 $('#bildspel2').click(function() {
			 
					 $('#imageSlide').fadeOut("fast", function() {						
				       	  	   $(this).attr('src', imgs[(++antal) % imgs.length ]).fadeIn("fast");  
        	 		 });	 
		 }); 
		 
var piclist = $("input[name=picture]").val(); 
var parentVar = $(this).parent().parent();
parentVar.toggleClass('checked');

var b = 1;
$("#laddaupp").submit(function(event)
	{
		event.preventDefault();
		var a = $("#picture").val();
		if(b < 9) 
		{
			$("#submitpictext").append("<p><b><a href=http://" + a + ">Imgur picture " + b + "</a></b></p>");
			b++;
		}
	});

});




    