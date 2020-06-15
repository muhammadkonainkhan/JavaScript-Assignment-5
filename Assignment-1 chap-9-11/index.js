
// Assignment Chap-9-11 JS 
// Q-1 
var x=prompt("enter Your City Name")
if(x=="karachi")
{
    alert("welcome to the City of light");
}
// <---------------------------->
// Q-2

var x=prompt("Enter Your Gender")
if(x=="Male")
{
    alert("Good Morning Sir.");
}
else if(x=="Female")
{
    alert("Good Morning Ma'am.");
}





// <---------------------------->

// Q-3


var x=prompt("Enter Color of Traffic Light")
if(x=="red")
{
    alert("Must Stop");
}
else if(x=="yellow")
{
    alert("Ready to move");
}
else if(x=="green")
{
    alert("Move now");
}


// <---------------------------->
// Q-4

var x=prompt("Enter the Remaing fule of your car in liters")
if(x<0.25)
{
    alert("Refill the fuel in your car");
}


// <---------------------------->
// Q-5


// <!–– part a ––> 
      
            var a = 4;
        if (++a === 5){
                alert("given condition for variable a is true");
       }
        
     
   
   

// <!–– part b ––> 


            var b = 82;
  if (b++ === 83){
alert("given condition for variable b is true");

        

// <---------------------------->
// Q-6
document.write("MARKS SHEET")

        
        var x=prompt("enter obtained marks in three subject")
        var y=prompt("enter total marks");
        var z=(x/y)*100;
        document.write("Total marks : "+y);
        document.write("<br/>"+"Obtained marks : "+x);
        document.write("<br/>"+"Percentage : "+z);
        if(z>=80)
        {
            document.write("<br/>"+"A-one");
            document.write("<br/>"+"Excellent");
        }
        else if(z>=70)
        {
            document.write("<br/>"+"A");
            document.write("<br/>"+"Good");
        }
        else if(z>=60)
        {
            document.write("<br/>"+"You Need to improve");
            document.write("<br/>"+"B");
        }
        else
        {
            document.write("<br/>"+"Fail");
            document.write("<br/>"+"Sorry");
        }
        





// <---------------------------->
// Q-7


var guessnumber=4;
var x=prompt("Guess a number");
if(x==guessnumber)
{
    alert("Bingo! Correct answer");
}
else if(x==guessnumber+1)
{
    alert("Close enough to the correct answer");
}



// <---------------------------->
// Q-8

 
var x=prompt("enter any number")
if(x%3==0)
{
    alert("number is divisible by 3");
}
else 
{
    alert("number is not divisible by 3");
}

// <---------------------------->
// Q-9



var x=prompt("enter any number");
           if(x==0)
           {
               alert("Given Number is Even");
           }
          else if(x%2==0)
           {
               alert("Given Number is Even");
           }
           else 
           {
               alert("Given Number is Odd");
           }
// <---------------------------->
// Q-10

var T=prompt("Enter temperature");
           if(T>40)
           {
               alert("It is too hot outside");
           }
        else  if(T>30)
           {
               alert("The whether today is Normal");
           }
           else if(T>20)
           {
               alert( "Today's whether is cool");
           }
        else if(T>10)
           {
               alert("OMG Today's whether is so cool");
           }
          
// <---------------------------->
// Q-11
        
var x=prompt("Enter first number");
var y=prompt("enter second mumber");
var z=prompt("Enter Operation");
if(z==="-")
 {
    a=x-y;
    alert(a);
  }

  if(z==="+")
 {
    b=parseInt(x)+parseInt(y);
    alert(b);
  }

  if(z==="*")
 {
   c=x*y;
   alert(c);
  }
  if(z==="/")
 {
   d=x/y;
   alert(d);
  }

  if(z==="%")
 {
   e=x%y;
   alert(e);
  }