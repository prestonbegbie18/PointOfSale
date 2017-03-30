var runningTotal = 0.0;

function addItem()
{
  var newItem;
  newItem = document.getElementById("price").value;
  var res = " ";
  res = isNaN(newItem);
  if (res == true)
  {
    document.getElementById("warning").innerHTML = "Enter price as a number.";
    console.log("Number is invalid");
  }
  else
  {
    newItem = Number(newItem);
    runningTotal = runningTotal + newItem;
    var dollars = asCurrency(runningTotal);
    document.getElementById("subtotal").innerHTML = dollars;
    document.getElementById("price").value = " ";
    setCookie("preTax", runningTotal, 1);
  }
}

function asCurrency(val)
{
  return "$" + val.toFixed(2);
}

function calculateReceipt()
{
  var receiptSubtotal = getCookie("preTax");
  receiptSubtotal = Number(receiptSubtotal);
  var receiptTax = receiptSubtotal * 0.075;
  var receiptTotal = (receiptTax + receiptSubtotal);
  document.getElementById("sub").innerHTML = asCurrency(receiptSubtotal);
  document.getElementById("tax").innerHTML = asCurrency(receiptTax);
  document.getElementById("tot").innerHTML = asCurrency(receiptTotal);
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
