//Function to determine if input is not a number. Returns 'true' if not a number
function isNotNumber(string) {
  var regex = /[^0-9]/;
  return regex.test(string);
}

//Converts user input into an array of strings containing one digit.
function toArray(string) {
  if (isNotNumber(string)) {
    alert("Please enter a valid number.")
  } else {
    var numArray = string.split("");
    var arrayLength = numArray.length;
    var output = convertToNumerals(numArray, arrayLength);
    return output;
  }
}

//Main function to convert numbers to numerals
function convertToNumerals(array, length) {
  var roundedArray = getRoundNum(array, length);
  var romNum = getNumerals(roundedArray);
  return romNum;
}

//Function to add zeroes to end of number to match original input.
//Puts all numbers into array and returns it.
function getRoundNum(array, length) {
  var getRoundArray = [];
  for (i = 0; i < length; i++) {
    var zeros = "";
    for (j = i + 1; j < length; j++) {
      zeros = zeros + "0";
    }
    var stringNumber = array[i] + zeros;
    var roundNumber = parseInt(stringNumber);
    getRoundArray.push(roundNumber);
  }
  return getRoundArray;
}

//Function to convert roundedArray into roman numerals. Returns as string.
function getNumerals(array) {
  var returnString = "";
  for (i = 0; i < array.length; i++) {
    if (array[i] >= 1000) {
      for (t = 0; t < array[i] % 5000 / 1000; t++) {
        returnString = returnString + "M";
      }
    } else if (array[i] >= 100) {
      if (array[i] === 900) {
        returnString = returnString + "CM";
      } else if (array[i] === 400) {
        returnString = returnString + "CD";
      } else {
        if (array[i] >= 500) {
          returnString = returnString + "D";
        }
        for (h = 0; h < array[i] % 500 / 100; h++) {
          returnString = returnString + "C";
        }
      }
    } else if (array[i] >= 10) {
      if (array[i] === 90) {
        returnString = returnString + "XC";
      } else if (array[i] === 40) {
        returnString = returnString + "XL";
      } else {
        if (array[i] >= 50) {
          returnString = returnString + "L";
        }
        for (k = 0; k < array[i] % 50 / 10; k++) {
          returnString = returnString + "X";
        }
      }
    } else if (array[i] >=1) {
      if (array[i] === 9) {
        returnString = returnString + "IX";
      } else if (array[i] === 4) {
        returnString = returnString + "IV";
      } else {
        if (array[i] >= 5) {
          returnString = returnString + "V";
        }
        for (j = 0; j < array[i] % 5; j++) {
          returnString = returnString + "I";
        }
      }
    }
  }
  return returnString;
}

//User Interface
$(document).ready(function() {

  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("#inputBox").val();

    var outputResult = toArray(userInput);
    $("#output").text(outputResult);
  })

})
