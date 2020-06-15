
// Assignment Chap-14-16 JS 
// Q-1 

var array = [];

document.write(array)


// <---------------------------->
// Q-2

var a ={
  array:[ ],
}
document.write()

// <---------------------------->

// Q-3
var name = ["Ali", "Hasan", "Zeeshan"];


// <---------------------------->
// Q-4

var x = [1,2,3]
console.log(x);

// <---------------------------->
// Q-5

var booleanArray = ['True','False']
console.log(booleanArray)

// <---------------------------->
// Q-6

var mixedArray = ['Ali','1']
console.log(mixedArray)

<---------------------------->
Q-7

var b = ['1)SSC',"<br>"+ '2)HSC',"<br>"+ '3)BCS',"<br>"+'4)BS', "<br>"+'5)BCOM',"<br>"+ '6)MS',"<br>"+ '7)M. Phil',"<br>"+'8)PHD']
document.write(b)

// <---------------------------->
// Q-8




var name = ["ALi","Hasan","Zesshan"];
var score = ['320','420','480'];
var total = 500;
var percentage1 = score[0]*100/500;
var percentage2 = score[1]*100/500;
var percentage3 = score[2]*100/500;
document.write("Score of Ali is " + score[0] + " "+ percentage1+"%");
document.write("<br>" + "Score of Hasan is " + score[1] + " "+ percentage2+"%");
document.write("<br>" + "Score of Zeeshan is " + score[2] + " "+ percentage3+"%");


// var cities = ["Karachi","Lahore","Multan"]
// for ( i=0; i<cities.length; i++){
//    console.log(cities[i])
// // document.write(cities[i])
// }


// <---------------------------->
// Q-8
 var color = ['Blue',"Green","Black","Purple"];

 var a = prompt("Enter Color First Name to add In the Beginning of Color Name")
 var a = prompt("Enter Color Second Name to add In the Beginning of Color Name")
 var a = prompt("Enter Color Third Name to add In the Beginning of Color Name")
 


 color.shift(a)
 var b = prompt("Enter Color Name to add In the End of Color Name")
 color.unshift(a)
 color.push(b)
 color.pop(b)
 document.write(color);


 // <---------------------------->
// Q-9

var points = [320, 230, 480, 120];


document.write(points);
points.sort()
document.write("<br>"+points);

// <---------------------------->
// Q-10
var cities = ["Karachi","Lahore","Islamabad","Multan","Peshawar"]
document.write("Cities List:"+"<br>"+cities)

var a = cities.slice(2,4);
document.write("<br>"+"Selected Cities List:"+"<br>"+a)

// <---------------------------->
// Q-11
var arr = ["Array :"+ "<br>"+"This ", " is ", " my " ," cat"];
document.write(arr)
var string = ["This is my cat"];
document.write("<br>"+"String :"+ "<br>"+" "+ string)


// <---------------------------->
// Q-12
 var device = ["keyboard","Mouse","printer","monitor"]

 document.write("Device :"+"<br>"+device)
 document.write("<br>"+"out :"+"<br>" + device[0]+"<br>" + "out :"+"<br>" + device[1]+"<br>" + "out :"+"<br>" + device[2]+"<br>" + "out :"+"<br>" + device[3])


// <---------------------------->
// Q-12
