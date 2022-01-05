// Assignment Code

// Variables 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Password variable values

// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Numbers
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Alphabetical letters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Space is for the Uppercase conversion
space = [];

// Choices outside the if statement so they can be combined
var choices;

// Changes letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};

// Creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Creates function to generate the password
function generatePassword() {
    
    // Asks for user input
    enter = parseInt(prompt("How long do you want your password to be? Please choose between 8 and 128 characters"));
    
    // First if statement for user validation 
    if (!enter) {
        alert("You sure about this?");
    } else if (enter < 8 || enter > 128) {
        
        // Validates user input and start user input prompts
        enter = parseInt(prompt("Please choose between 8 and 128 characters."));

    } else {

        // Continues once user input is validated
        confirmNumber = confirm("Want this to contain numbers?");
        confirmCharacter = confirm("Want this to contain special characters?");
        confirmUppercase = confirm("Want this to contain UPPERCASE letters?");
        confirmLowercase = confirm("Want this this to contain lowercase letters?");
    };

    // Else if for 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You got to pick something!");

    }

    // First if statement that uses user input prompts to determine choices and else if for 4 options selected
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alpha, alpha2);
    }

    // Else if for 3 options selected
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
    }

    // Else if for 2 options selected
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alpha2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
    }

    // Else if for 1 option selected
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }

    // Created space variable to fill uppercase conversion
    else if (confirmUppercase) {
        choices = space.concat(alpha2);
    };

    // Password variable is an array placeholder for user generated amount of length
    var password = [];

    // Start random selection variables for all variables
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }

    // Combines the options chosen into a password
    var ps = password.join("");
    UserInput(ps);
    return ps;
}

// This puts the password into the textbox
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}






