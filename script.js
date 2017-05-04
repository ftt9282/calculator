$(document).ready(function(){
  var inputs = [];
  var operators = [];
  var validate_numbers = '0123456789.';
  var totalString;
  var num1, num2;
  
  function update() {
    totalString = inputs.join("");
    $("#input").html(totalString);
  }
  
  function divide(num1, num2) {
    return (parseFloat(Number(num1) / Number(num2)).toFixed(7));
  }
  
  function multiply(num1, num2) {
    return (Number(num1) * Number(num2));
  }
  
  function subtract(num1, num2) {
    return (Number(num1) - Number(num2));
  }
  
  function add(num1, num2) {
    return (Number(num1) + Number(num2));
  }
  
  $("button").on("click", function(){
    char = $(this).attr('id');
    if (validate_numbers.indexOf(char) > -1) {
      inputs.push(char);
      update();
    }
    else {
      operators.push(char)
      if (num1) {
        num2 = totalString;
        switch(operators[0]) {
          case '/': 
            num1 = divide(num1, num2);
            $("#input").html(num1);
            break;
          
          case '*':
            num1 = multiply(num1, num2);
            $("#input").html(num1);
            break;

          case '-':
            num1 = subtract(num1, num2);
            $("#input").html(num1);
            break;

          case '+':
            num1 = add(num1, num2);
            $("#input").html(num1);
            break;
        }
        num2 = null;
        inputs = [];
        if (operators[1] === '=') {
          num1 = null;
          operators = [];
        }
        else {
          operators.shift();
        }
      }
      else if (inputs.length > 0){
        num1 = totalString;
        inputs = [];
      }
      else {
        operators = [];
      }
    }
  });
});