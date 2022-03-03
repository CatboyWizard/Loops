// remove (iteam) whean typed in (input)
// x = input

/* <h1 id="demo">orange juice</h1>
<h1 id="banns">bananas</h1>
<h1 id="beans">coffee beans</h1>
<h1 id="rice">brown rice</h1>
<h1 id="pasta">pasta</h1>
<h1 id="oil">coconut oil</h1>
<h1 id="plant">plantains</h1> */


function myFunction() {
    var x = document.getElementById("fun").value;
    var juice = ['orange juice'];
    var banns = ['bananas'];
    var beans = ['coffee beans'];
    var rice = ['brown rice'];
    var noodles = ['pasta'];
    var oil = ['coconut oil'];
    var plant = ['plantains'];
//x = "Orange juice"
if (x == juice) {
    var myobj = document.getElementById("demo");
  myobj.remove();
} else if (x == banns) {
    var myobj = document.getElementById("banns");
  myobj.remove();
} else if (x == beans) {
    var myobj = document.getElementById("beans");
  myobj.remove();
} else if (x == rice) {
    var myobj = document.getElementById("rice");
  myobj.remove();
}else if (x == noodles) {
    var myobj = document.getElementById("pasta");
    myobj.remove(); 
} else if (x == oil) {
    var myobj = document.getElementById("oil");
  myobj.remove();
} else if (x == plant) {
    var myobj = document.getElementById("plant");
  myobj.remove();
} else {
    document.getElementById("home").innerHTML = "You still got the list to get"  
}
}