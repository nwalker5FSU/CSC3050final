

// 8. Hide the item with the id #answer2 
//*******TO DO**********COMPLETE STEP 8*********
$("#answer2").hide();
$("#answer3").hide();

// 9. Show the item with the id #answer1 
//*******TO DO**********COMPLETE STEP 9*********
$("#answer1").show();



// 10. When #question2 is clicked: //done
	// a) Slide down #answer2
	// b) Slide up #answer1
	// c) Remove the active class from all list items
	// d) Add the active class to #question2


$('#question2').on('click', function () {
	$('#answer2').slideDown();
	$('#answer1').slideUp();
	$("#answer3").slideUp();
	$('li').removeClass('active');
	$('#question2').addClass('active');
});

// 11. When #question1 is clicked:
	// a) Slide down #answer1
	// b) Slide up #answer2
	// c) Remove the active class from all list items
	// d) Add the active class to #question1

//*******TO DO**********COMPLETE STEP 11********
$("#question1").on("click", function () {
	$("#answer1").slideDown();
	$("#answer2").slideUp();
	$("#answer3").slideUp();
	$("li").removeClass("active");
	$("#question1").addClass("active");
});

$("#question3").on("click", function () {
	$("#answer3").slideDown();
	$("#answer2").slideUp();
	$("#answer1").slideUp();
	$("li").removeClass("active");
	$("#question3").addClass("active");
});

//hide all explanations at first
$("#explain1").hide();
$("#explain2").hide();
$("#explain3").hide();
$("#explain4").hide();
$("#explain5").hide();


//show each explanation one at atime when clicked
$('#service1').on('click', function () {
	$('#explain1').slideDown();
	$('#explain2').slideUp();
	$('#explain3').slideUp();
	$('#explain4').slideUp();
	$('#explain5').slideUp();
	$('li').removeClass('active');
	$('#service1').addClass('active');
});

$('#service2').on('click', function () {
	$('#explain2').slideDown();
	$('#explain1').slideUp();
	$('#explain3').slideUp();
	$('#explain4').slideUp();
	$('#explain5').slideUp();
	$('li').removeClass('active');
	$('#service2').addClass('active');
});

$('#service3').on('click', function () {
	$('#explain3').slideDown();
	$('#explain1').slideUp();
	$('#explain2').slideUp();
	$('#explain4').slideUp();
	$('#explain5').slideUp();
	$('li').removeClass('active');
	$('#service3').addClass('active');
});

$('#service4').on('click', function () {
	$('#explain4').slideDown();
	$('#explain1').slideUp();
	$('#explain2').slideUp();
	$('#explain3').slideUp();
	$('#explain5').slideUp();
	$('li').removeClass('active');
	$('#service4').addClass('active');
});

$('#service5').on('click', function () {
	$('#explain5').slideDown();
	$('#explain1').slideUp();
	$('#explain2').slideUp();
	$('#explain3').slideUp();
	$('#explain4').slideUp();
	$('li').removeClass('active');
	$('#service5').addClass('active');
});