//This Javascript Form is heavily influenced by other code
//Original code can be found at https://www.formget.com/javascript-contact-form/

// Fetching HTML Elements in Variables by ID.
var x = document.getElementById("contactForm");
var createform = document.createElement('form'); // Create New Element Form
createform.setAttribute("action", ""); // Setting Action Attribute on Form
createform.setAttribute("method", "post"); // Setting Method Attribute on Form
x.appendChild(createform);

var heading = document.createElement('h2');
heading.innerHTML = 'Fill Out Below';
createform.appendChild(heading);

var line = document.createElement('hr'); // Giving Horizontal Row After Heading
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var namelabel = document.createElement('label'); // Create Label for Name Field
namelabel.innerHTML = "Name : "; // Set Field Labels
createform.appendChild(namelabel);

var inputelement = document.createElement('input'); // Create Input Field for Name
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
inputelement.setAttribute("placeholder", "Type your name here...");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var emaillabel = document.createElement('label'); // Create Label for E-mail Field
emaillabel.innerHTML = "Email : ";
createform.appendChild(emaillabel);

var emailelement = document.createElement('input'); // Create Input Field for E-mail
emailelement.setAttribute("type", "text");
emailelement.setAttribute("name", "demail");
emailelement.setAttribute("placeholder", "Type your e-mail here...");
createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
createform.appendChild(emailbreak);

var messagelabel = document.createElement('label'); // Append Textarea
messagelabel.innerHTML = "Message : ";
createform.appendChild(messagelabel);

var texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "dmessage");
texareaelement.setAttribute("placeholder", "Psst...Click on the submit button below for more javascript!");
createform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var submitelement = document.createElement('input'); // Append Submit Button
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
createform.appendChild(submitelement);
 
 
// All Javascript below written by me

//Hide form when page load
$('#contactForm').hide();
$('.hide1').hide();

//Select 'Contact Us' //Add click handler
$('.contactBox').click(function() {
	//Show form 
	$('#contactForm').show();
	//Show hide btn 
	$('.hide1').show();
});

$('.hide1').click(function () {
	//Hide form when button clicked
	$('#contactForm').hide();
	$('.hide1').hide();
});

//Display alert when user submits form
$(submitelement).click(function() {
	alert('Thank you for your interest! We will be in touch once your message is received.');
});

