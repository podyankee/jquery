$(function() {

	//$('#btn1').html('my button');
	//$('#panel1').html('my panel <strohg>my bold</strong>');
	//$('#btn1').on('click', function(){
		//$('#panel1').slideToggle(200);
	//});
	//$('#btn1').on('mouseover', function(){
		//$('#panel1').slideToggle(200);
	//});
	
	var content = "My new awesome content.";
	
	$('.panel-button').on('click', function(){
		var panelId = $(this).attr('id');
	//alert(panelId);
	$('#'+panelId).toggle();
	$('#'+panelId+' .panel-body').html('');
		 });
	
	});  

 

