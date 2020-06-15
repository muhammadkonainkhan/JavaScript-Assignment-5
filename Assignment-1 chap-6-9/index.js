
// Assignment Chap-6-9 JS 
// Q-1 

var  a =10;

document.write("The value of a is "+ a);
document.write("<br>" + " --------------------------");
++a;
document.write("<br>" + " The value of ++a is "+ a);
document.write("<br>" + " Now the value of a is "+ a);

document.write("<br>" + "<br>" + " The value of a++ is "+ a);
a++;
document.write("<br>" + " The value of a is "+ a);

--a;
document.write("<br>" + "<br>" +  " The value of --a is "+ a);
document.write("<br>" + " The value of a is "+ a);


document.write("<br>" + "<br>" +  " The value of a-- is "+ a);
a--
document.write("<br>" + " The value of a is "+ a);


// <---------------------------->
// Q-2

var a=2;
var b=1;
var c=--a - --b + ++b + b--;
3
document.write(c);





// <---------------------------->

// Q-3

var name = prompt("Enter Name");
var a = name;

document.write(" Welcome " + a);



// <---------------------------->
// Q-4
var a =+prompt("Enter a Number");
for(i=0;i<=10;i++){
    for(j=0; j<+10; j++)
    document.write()
}

for (a=0;a<=10;a++){
    for(b=0;b<+10;b++)
    document.write(a+"x"+b+"="+a)
}

var a = prompt("Enter a Number",5)
var i;

for(i=1; i<=10; i++){
    document.write(+ a + " x "+ i + "=" + a*i + "<br>")
   
    }



// <---------------------------->
// Q-5

var a = prompt("Enter First Subject Name")
var b = prompt("Enter Second Subject Name")
var c = prompt("Enter Third Subject Name")
var d=100;
var e = +prompt("Enter First Subject Marks")
var f = +prompt("Enter Second Subject Marks")
var g = +prompt("Enter Third Subject Marks")
var total = 100;
  var h=e*100/100;
  var i=f*100/100;
  var j=g*100/100;
document.write(" Subject Name " +  " Total Marks " + " Obtained Marks " + " Percentage " )

document.write("<br>" + a + " " +  total +" " + e +" " + h+"%" )
document.write("<br>" + b + " " + total +" " + f +" " + i+"%" )
document.write("<br>" + c + " " + total +" " + g +" " + j+"%" )


var x = total+total+total;
var y = e+f+g;
var z = y*100/x;
document.write("<br>" + " " + x + " " + y + " " + z+"%")
// document.write("<br>" + total +" "+ total +" " + total);
// document.write("<br>" + e +" "+ f +" " + g);
// document.write("<br>" + h +" "+ i +" " + j);

