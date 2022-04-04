var One = 0 ;
function concatOne(one)
{
   One+=one;
   document.getElementById("inputLabel").innerHTML+=one;  
}

var Two = 0 ;
function concatTwo(two)
{
   Two+=two;
   document.getElementById("inputLabel").innerHTML+=two;  
}

var Three = 0 ;
function concatThree(three)
{
   Three+=three;
   document.getElementById("inputLabel").innerHTML+=three;  
}
var Four = 0 ;
function concatFour(four)
{
   Four+=four;
   document.getElementById("inputLabel").innerHTML+=four;  
}
var Five = 0 ;
function concatFive(five)
{
   Five+=five;
   document.getElementById("inputLabel").innerHTML+=five;  
}
var Six = 0 ;
function concatSix(six)
{
   Six+=six;
   document.getElementById("inputLabel").innerHTML+=six;  
}
var Seven = 0 ;
function concatSeven(seven)
{
   Seven+=seven;
   document.getElementById("inputLabel").innerHTML+=seven;  
}
var Eight = 0 ;
function concatEight(eight)
{
   Eight+=eight;
   document.getElementById("inputLabel").innerHTML+=eight;  
}
var Nine = 0 ;
function concatNine(nine)
{
   Nine+=nine;
   document.getElementById("inputLabel").innerHTML+=nine;  
}
var Zero = 0 ;
function concatZero(zero)
{
   Zero+=zero;
   document.getElementById("inputLabel").innerHTML+=zero;  
}

var multiply = 0;
function concatMultiply()
{
    concatEqual();
    multiply = document.getElementById("inputLabel").innerHTML;
    document.getElementById("inputLabel").innerHTML = " ";             
}
var divide = 0;
function concatDivide()
{
    divide = document.getElementById("inputLabel").innerHTML;
    document.getElementById("inputLabel").innerHTML = " ";        
}
var plus = 0;
function concatPlus()
{
    plus = document.getElementById("inputLabel").innerHTML;
    document.getElementById("inputLabel").innerHTML = " ";       
}
var minus = 0;
function concatMinus()
{
    minus = document.getElementById("inputLabel").innerHTML;
    document.getElementById("inputLabel").innerHTML = " ";        
}
var equal = 0;
function concatEqual()
{
    if(multiply && !divide && !plus && !minus)
    {
      var secondNumber = document.getElementById("inputLabel").innerHTML;
      equal = multiply*secondNumber;
      document.getElementById("inputLabel").innerHTML=equal;      
    }       
    if(!multiply && divide && !plus && !minus)
    {
      var secondNumber = document.getElementById("inputLabel").innerHTML;
      console.log(secondNumber);
      equal = divide/secondNumber;
      document.getElementById("inputLabel").innerHTML=equal;      
    } 
    if(!multiply && !divide && plus && !minus)
    {
      var secondNumber = document.getElementById("inputLabel").innerHTML;
      equal = plus+secondNumber;
      document.getElementById("inputLabel").innerHTML=equal;      
    }
    if(!multiply && !divide && !plus && minus)
    {
      var secondNumber = document.getElementById("inputLabel").innerHTML;
      equal = minus-secondNumber;
      document.getElementById("inputLabel").innerHTML=equal;      
    }
    else
    equal =  0;    
}
