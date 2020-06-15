
// Assignment Chap-12-13 JS 
// Q-1 

var x=prompt("enter a character");
if(x>='A' && x<='Z')
{
    document.write("uppercase");
}

else if(x>='a' && x<='z')
{
    document.write("lowercase");
}
else
{
    document.write("Number")
}


// <---------------------------->
// Q-2


var x=prompt("Enter first Number");
var y=prompt("Enter Second Number");
var a =parseInt(x);
var b =parseInt(y);
if(a>b)
{
    document.write(a+" is greater than "+b)
}
else if(b>a)
{
    document.write(b+" is greater than "+a);
}
else
{
    document.write("both are equal")
}

// <---------------------------->

// Q-3


var x=prompt("Enter first Number");
           var a =parseInt(x);
         
           if(a>0)
           {
               document.write(a+" is a positive integer ");
           }
           else if(a<0)
           {
               document.write(a+" is a negetive ");
           }
           else
           {
               document.write("zero");
           }





// <---------------------------->
// Q-5
var pass="iqra";
var a=prompt("Enter passward");
if(a.length==0)
{
    alert("please enter passward");
}
else{

if(a==pass)
{
    alert("correct! The passward you entered matches the original passward");
}
else
{
    alert("Incorrect passward");
}
}     

// <---------------------------->
// Q-6


var greeting;
var hour = 13;
if (hour < 18) {
document.write("greeting = Good day");
}
else{   
document.write("greeting = Good evening");
}


// <---------------------------->
// Q-7



var T=prompt("Enter time in 24 hours clock formate");
if(T>=0000 && T<1200)
{
    document.write("Good Morning");
}
else if(T<=1200 && T<1700)
{
    document.write("Good Afternoon");
}
  else if(T>=1700 && T<2100)
  {
      document.write("Good Evening");
  }
  else if(T>=2100 && T<=2359)
  {
      document.write("Good Night");
  }