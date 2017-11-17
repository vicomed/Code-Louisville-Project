//Load page w/ all iframe hidden
$('iframe').hide();	


//Yes, I realize this is very repetitive and could be simplified.
//Also, there is a bug. The code breaks after so many executions.
//I added all this javascript last minute. Changes will come soon.
var x1 = document.querySelector('.hs1');
var newHead1 = document.createElement('a');
newHead1.setAttribute('href', '#');
newHead1.innerHTML = "Hide Song One";

//Select 'show song' text //Add click handler
$('.hs1 a').click(function() {
	//Select song //Slide down
	$('.song1').slideDown([3000]);
	//Remove old head (anchor child)
	$('.hs1 a').hide();
	//Add new headline as child to <h2>
	x1.appendChild(newHead1);
});

$(newHead1).click(function() {
	$('.song1').slideUp([1000]);
	$(newHead1).remove();
	$('.hs1 a').show();
});

var x2 = document.querySelector('.hs2');
var newHead2 = document.createElement('a');
newHead2.setAttribute('href', '#');
newHead2.innerHTML = "Hide Song Two";

//Select 'show song' text //Add click handler
$('.hs2 a').click(function() {
	//Select song //Slide down
	$('.song2').slideDown([3000]);
	//Remove old head (anchor child)
	$('.hs2 a').hide();
	//Add new headline as child to <h2>
	x2.appendChild(newHead2);
});

$(newHead2).click(function() {
	$('.song2').slideUp([1000]);
	$(newHead2).remove();
	$('.hs2 a').show();
});

var x3 = document.querySelector('.hs3');
var newHead3 = document.createElement('a');
newHead3.setAttribute('href', '#');
newHead3.innerHTML = "Hide Song Three";

//Select 'show song' text //Add click handler
$('.hs3 a').click(function() {
	//Select song //Slide down
	$('.song3').slideDown([3000]);
	//Remove old head (anchor child)
	$('.hs3 a').hide();
	//Add new headline as child to <h2>
	x3.appendChild(newHead3);
});

$(newHead3).click(function() {
	$('.song3').slideUp([1000]);
	$(newHead3).remove();
	$('.hs3 a').show();
});

var x4 = document.querySelector('.hs4');
var newHead4 = document.createElement('a');
newHead4.setAttribute('href', '#');
newHead4.innerHTML = "Hide Song Four";

//Select 'show song' text //Add click handler
$('.hs4 a').click(function() {
	//Select song //Slide down
	$('.song4').slideDown([3000]);
	//Remove old head (anchor child)
	$('.hs4 a').hide();
	//Add new headline as child to <h2>
	x4.appendChild(newHead4);
});

$(newHead4).click(function() {
	$('.song4').slideUp([1000]);
	$(newHead4).remove();
	$('.hs4 a').show();
});
