//Function to determine if input is not a number. Returns 'true' if not a number
function isNotNumber(string) {
  var regex = /[^0-9]/;
  return regex.test(string);
}









//User Interface
$(document).ready(function() {

  $("#formOne").submit(function(event) {
    var userInput = $("#inputBox").val();
    alert(isNotNumber(userInput));
    var outputResult;
  })

})
