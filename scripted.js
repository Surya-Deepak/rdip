
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


function validateForm() {
    
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    
    
	
    var nameErr = emailErr = mobileErr  = true;
    
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
   
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    
    
    
    if((nameErr || emailErr || mobileErr) == true) {
       return false;
    } else {
       
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
        
        alert(dataPreview);
    }
    if((nameErr || emailErr || mobileErr) == false) {
       alert('Thank You!!! :)')
    }
}

 function checkPalindrome() {
var revStr = "";
var str = document.getElementById("str").value;
var i = str.length;
for(var j=i; j>=0; j--) {
revStr = revStr+str.charAt(j);
}
if(str == revStr) {
alert(str+" -is Palindrome");
return true;
} else {
alert(str+" -is not a Palindrome");
return false;
}
}
function anagrams() {
        var stringA = document.getElementById("str1").value;
        var stringB = document.getElementById("str2").value;
        stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
        stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

         if(sortString(stringA) === sortString(stringB))
         {
            alert("They are anagrams");
            return true;
         }
         else
         {
            alert("They are not anagrams");
            return false;
         }
    }
 
    function sortString(string) {
        return string.split('').sort().join('');
    }

    function objects3(){

        var n = document.getElementById("no1").value;
        var o = document.getElementById("no2").value;
        if((n<0 || o<0) || (n>1000 || o>1000) || (n==="") || (o===""))
        {
            alert("Please Enter a Value BEtween 0 and 1000");
            return ;
        }
        else 
        {
            var a = n%3;
            var b = o % 3;
        }
        if((a === 0 && b === 1) || (a === 1 && b === 0) )
        {
            alert("Human survies");
            return;
        }
        else if ((a===1 && b===2) || (a === 2 && b === 1)) {
            alert("Cockroach Survives");
            return;
        }
        else if ((a===0 && b===2) || (a === 2 && b === 0))
        {
            alert("Human dies");
            return ;
        }
        else
        {
            alert("Tie");
            return;
        }

    }

    function numone() {  
        var n1;  
        var n2;  
        var result;  
        var operations;
            if (document.ca.f.value == "0" || document.ca.f.value == result) {  
  
                document.ca.f.value = "1";  
  
            } else 
            {  
                documentdocument.ca.f.value = document.ca.f.value + "1";  
            }  
  
        }  
  
        function numtwo() {  
  
            if (document.ca.f.value == "0" || document.ca.f.value == result) {  
  
                document.ca.f.value = "2";  
  
            } else   
            {  
                documentdocument.ca.f.value = document.ca.f.value + "2";  
            }  
  
        }  
  
        function numthree() {  
  
            if (document.ca.f.value == "0" || document.ca.f.value == result) {  
  
                document.ca.f.value = "3";  
  
            } else    
            {  
                documentdocument.ca.f.value = document.ca.f.value + "3";  
            }  
  
        }  
  
        function numfour() {  
  
            if (document.ca.f.value == "0" || document.ca.f.value == result) {  
  
                document.ca.f.value = "4";  
  
            } else    
            {  
                documentdocument.ca.f.value = document.ca.f.value + "4";  
            }  
  
        }  
  
        function numfive() {  
  
            if (document.ca.f.value == "0" || document.ca.f.value == result) {  
  
                document.ca.f.value = "5";  
  
            } else   
            {  
                documentdocument.ca.f.value = document.ca.f.value + "5";  
            }  
  
        }  
  
        function numsix() {  
  
            if (document.ca.f.value == "0" || document.ca.f.value == result) {  
  
                document.ca.f.value = "6";  
  
            } else //if(document.ca.f.value != "0")    
            {  
                documentdocument.ca.f.value = document.ca.f.value + "6";  
            }  
  
        }  
  
        function numseven() {  
  
            if (document.ca.f.value == "0" || document.ca.f.value == result) {  
  
                document.ca.f.value = "7";  
  
            } else     
            {  
                documentdocument.ca.f.value = document.ca.f.value + "7";  
            }  
        }  
  
        function numeight() {  
  
            if (document.ca.f.value == "0") {  
  
                document.ca.f.value = "8";  
  
            } else if (document.ca.f.value == result) {  
                document.ca.f.value = "8";  
            } else     
            {  
                documentdocument.ca.f.value = document.ca.f.value + "8";  
            }  
  
        }  
  
        function numnine() {  
  
            if (document.ca.f.value == "0" || document.ca.f.value == result) {  
  
                document.ca.f.value = "9";  
  
            } else     
            {  
                documentdocument.ca.f.value = document.ca.f.value + "9";  
            }  
  
        }  
  
        function numzero() {  
  
            if (document.ca.f.value == "0") {  
  
                document.ca.f.value = "0";  
  
            } else if (document.ca.f.value == result) {  
                document.ca.f.value = "0";  
            } else    
            {  
                documentdocument.ca.f.value = document.ca.f.value + "0";  
            }  
  
        }  
  
        function numdobuzero() {  
  
            if (document.ca.f.value == "0" || document.ca.f.value == result) {  
  
                return;  
  
            } else  
            {  
                documentdocument.ca.f.value = document.ca.f.value + "00";  
            }  
  
        }  
  
        function clr() {  
            document.ca.f.value = "0";  
            document.ca.j.value = "";  
            return;  
        }  
  
        function plus() {  
  
            operation = "+";  
            n1 = parseInt(document.ca.f.value);  
            document.ca.f.value = "0";  
            document.ca.j.value = n1 + operation;  
            //alert(n1);    
  
        }  
  
        function mul() {  
  
            operation = "*";  
            n1 = parseInt(document.ca.f.value);  
            document.ca.f.value = "0";  
            document.ca.j.value = n1 + operation;  
  
        }  
  
        function minu() {  
  
            operation = "-";  
            n1 = parseInt(document.ca.f.value);  
            document.ca.f.value = "0";  
            document.ca.j.value = n1 + operation;  
  
        }  
  
        function di() {  
  
            operation = "/";  
            n1 = parseInt(document.ca.f.value);  
            document.ca.f.value = "0";  
            document.ca.j.value = n1 + operation;  
  
        }  
  
        function operationperc() {  
  
            operation = "%";  
            n1 = parseInt(document.ca.f.value);  
            document.ca.f.value = "0";  
            document.ca.j.value = n1 + operation;  
  
        }  
  
        function equalsto() {  
  
            n2 = parseInt(document.ca.f.value);  
  
            if (operation == "+") {  
                result = n1 + n2;  
            } else if (operation == "*") {  
  
                result = n1 * n2;  
  
            } else if (operation == "-") {  
  
                result = n1 - n2;  
  
            } else if (operation == "/") {  
  
                result = n1 / n2;  
  
            } else if (operation == "%") {  
  
                if (document.ca.f.value == "0") {  
  
                    result = n1 / 100;  
                    document.ca.j.value = n1 + operation + "100";  
                } else if (document.ca.f.value != "0") {  
                    result = n1 / n2 * 100;  
                    document.ca.j.value = n1 + operation + n2 + "*100 = " + result;  
                }  
            } else if (operation == "^") {  
  
                for (var i = 0; i < n2; i++) {  
  
                    result = n1 * i;  
                }  
  
  
            }  
            document.ca.f.value = "";  
            document.ca.f.value = result.toString();  
            document.ca.j.value = n1 + operation + n2 + " = " + result.toString();  
            return;  
  
        }  
  
        function sqrots() {  
            n1 = document.ca.f.value;  
            result = Math.sqrt(parseInt(document.ca.f.value));  
            document.ca.f.value = result;  
            document.ca.j.value = "sqrt(" + n1 + ") = " + result;  
  
        }  
  
        function power() {  
  
            operation = "^";  
            n1 = parseInt(document.ca.f.value);  
            document.ca.f.value = "0";  
  
        }