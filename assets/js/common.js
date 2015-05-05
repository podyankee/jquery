$(function() {

	$('.list').on('click', function() {
		//$(this).next().remove();
		//$(this).siblings().addClass('special');
				  					$(this).find('li').filter(':first').addClass('special');
	});
	
	});  

 

