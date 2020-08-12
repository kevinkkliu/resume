$(document).ready(function(){
	$('.skill-detail, .education-detail, .expect-job-detail, .language-detail, .project-detail').hide();
	$('.detail-btn1').hide();


	$('.skill-top').click(function(){		
		$(this).parent().find('.skill-detail').collapse('toggle');
		$(this).parent().find('.skill-detail').show();
	});

	$('.education-top').click(function(){
		$(this).parent().find('.education-detail').collapse('toggle');
		$(this).parent().find('.education-detail').show();

	});

	$('.expect-job-top').click(function(){
		$(this).parent().find('.expect-job-detail').collapse('toggle');
		$(this).parent().find('.expect-job-detail').show();
	});

	$('.language-top').click(function(){
		$(this).parent().find('.language-detail').collapse('toggle');
		$(this).parent().find('.language-detail').show();
	});

	$('.project-top').click(function(){
		$(this).parent().find('.project-detail').collapse('toggle');
		$(this).parent().find('.project-detail').show();
	});
	
	$('.collapse').on('show.bs.collapse',function(){
		$(this).parent().find('.detail-btn1').show();
		$(this).parent().find('.detail-btn2').hide();
		$('.collapse').collapse('hide');
	});

	$('.collapse').on('hide.bs.collapse',function(){
		$(this).parent().find('.detail-btn1').hide();
		$(this).parent().find('.detail-btn2').show();
	});

});


