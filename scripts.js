
window.onload = function() {
    var footer = document.querySelector("footer");
    if (footer) { 
        var newParagraph = document.createElement("p");
        var currentDate = new Date();
        var textMessage = document.createTextNode("Page loaded on: " + currentDate);
        newParagraph.appendChild(textMessage);
        footer.appendChild(newParagraph);
    }
};

var contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.onsubmit = function(event) {
        var nameInput = document.getElementById("name").value;
        var emailInput = document.getElementById("email").value;

        if (nameInput === "" || emailInput === "") {
            alert("Please fill out all required fields.");
            event.preventDefault();
        }
    };
}

function toggleDescription(descId) {
    var desc = document.getElementById(descId);
    if (desc) {
        if (desc.style.display === "none") {
            desc.style.display = "block";
        } else {
            desc.style.display = "none";
        }
    }
}

var quote = document.getElementById("cvQuote");
if (quote) {
    quote.addEventListener("mouseover", function() {
        quote.style.backgroundColor = "#b3e5fc";
        quote.style.fontStyle = "normal";
    });

    quote.addEventListener("mouseout", function() {
        quote.style.backgroundColor = "#e1f5fe"; 
        quote.style.fontStyle = "italic";
    });
}
