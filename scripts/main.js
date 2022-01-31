// //DATA TYPE
// //Combining Strings and Numbers
// var arr = [21+20+"hola", "hola"+52+10, 5+10+"hola"+15+22];
// //typeOf Operator
// var datatype = ["hola", true, 25];

// for(bucle = 0; bucle < arr.length; bucle++){
//     document.write(arr[bucle] + "&nbsp &nbsp" + typeof datatype[bucle] + "<br>" );
// }
// //JS Ternary Operator
// document.write("Ternary:&nbsp", (datatype[2] > 15)?"Hola a todos":"Adios a todos", "<br>");

// //JS Objects & Objects Method & An Object in a Object
// var objeto = {
//     nombre: "Moises",
//     apellido: "Montiel",
//     edad: 21,
//     hobbies: ["Jugar","Comer","Dormir"],
//     //Object Method
//     showName: function(){document.write(this.nombre + " " + this.apellido + "<br> Me gusta: " + this.hobbies[1]);},
//     showAgeAndName: function(){
//         this.showName();
//         document.write("<br> Mi edad es: " + this.edad); },
//     //Object in an Object
//     comida:{frituras:["Empanadas","Arepas","Tequeños"],
//             pastas:["Pasta Napolitana","Pasticho","Ramen"],
//             verduras:["Crema de papa","Ensalada"]}
// }
// objeto.showAgeAndName();
// document.write("<br> Me gusta comer: " + objeto.comida.frituras[0]);

// // To escape characters, use a backslash (\)

// //String Methods
// var methodString = "<br> Mañana vamos a buscar a tu tia";
// // Finding a Substring in a String 
// var substring = methodString.indexOf(" a ");
// // Finding the index of the last occurence
// var lassubstr = methodString.lastIndexOf(" a ");
// /* The search() Method 
// (the indexOf cannot take regular expressions as parameter)*/
// var srchmethod = methodString.search(/ a /i);
// //Extracting a String
// //The slice() Method (Returns a section of a string and returns it as a new string)
// var slicemth = methodString.slice(7, 15);
// //The substring() Method works as the same way as the slice() method
// var substringmth = methodString.substring(12);

// document.write("<br> Frase: "+ methodString +
// "<br> Total de letras: " + methodString.length +
// "<br> primera a encontrada: " + substring +
// "<br> Segunda a encontrada: " + lassubstr +
// "<br> Usando search() method: " + srchmethod +
// "<br> Usando slice() method: " + slicemth + 
// "<br> Usando substring() method: " + substringmth);


// //AMBITO GLOBAL Y A LVL DE Function

// var a = 2; 
// console.log(a); // Aquí accedemos a la "a" global, que vale 1 
  
// function x() { 
// console.log(a); // En esta línea el valor de "a" es 1 
// a = 5; // Aquí creamos una variable "a" en el ámbito anterior 
  
// console.log(a); // Aquí el valor de "a" es 5 (a nivel de función) 
// console.log(window.a); // Aquí el valor de "a" es 5 (ámbito global) 
// } 
  
// x(); // Aquí se ejecuta el código de la función x() 
// console.log(a); // En esta línea el valor de "a" es 5

// //USO DE LET Y VAR

// /** Opción 1: Bucle con let **/ 
  
// console.log("Antes: ", p); // Antes: undefined 
// for (let p = 0; p < 3; p++) 
// console.log("- ", p); // Durante: 0, 1, 2 
// console.log("Después: ", p); // Después: undefined 
  
// /** Opción 2: Bucle con var **/ 
  
// console.log("Antes: ", p); // Antes: undefined 
// for (var p = 0; p < 3; p++) 
// console.log("- ", p); // Durante: 0, 1, 2 
// console.log("Después: ", p); // Después: 3 (WTF!)


// //USO DE BOM (BROWSER OBJECT MODEL)

// //All functions and variables declared in the glpbal scope become properties of the window object
// var texto = "hola a todos <br>";
// function sayHello(){
//     document.write(window.texto);
// }
// sayHello();

// //Window width and height
// // innerWidth
// //innerHeight

// //These properties return the width and height of the current browser window in pixels
// var height = window.innerHeight;
// var width = window.innerWidth;
// document.write(`Window width: ${width}<br>Window height: ${height} <br>`);

// //BOM Screen
// //is used to ispect properties of the screen
// //it can be accessed without the window prefix

// document.write(`Using window.screen: ${screen.width}<br>`);

// //The availWidth
// //returns the amount of horizontal space in pixels available to the window

// document.write(`Using availableWidth: ${screen.availWidth}<br>`)

// // The availableHeight
// //returns the amount of vertical space in pixels available to the window

// document.write(`Using availableHeight: ${screen.availHeight}<br>`);

// //height returns the height of the screen
// document.write(`Using height: ${screen.height}<br>`);

// //The orientation property returns ScreenOrientation object associated with the screen
// document.write(`Using orientation:${screen.orientation}<br>`);

// //The pixelDepth returnss the bit of depth of the screen
// document.write(`Using pixelDepth: ${screen.pixelDepth}<br>`);

// //colorDepth property returns the color depth of the screen 
// document.write(`Using colorDepth: ${screen.colorDepth}<br>`);

// // Javascript BOM location 
// //is used to return information about the current location of the page

// //href property returns the whole URL of the current page
// document.write(`Using href property: ${location.href}<br>`);

// //protocol property returns the protocol scheme of the URl of the page
// // e.g "http" and "https"
// document.write(`Using protocol property: ${location.protocol}`);

// //hotsname property returns the domain name of the URL
// document.write(`Using hostname property:${location.hostname}`);

// //pathname property returns the path of the URL of the page
// document.write(`Using pathname property: ${location.pathname}`);

// //JavaScript BOM history 
// //provides an interface for manipulating the browser history

// //the length property returns an integer representing the number of pages in the session history
// //e.g history.length
// //the back() method loads the previous page from the history list
// //e.g history.back()
// //the forward() method loads the next page from the history list
// //e.g history.forward

// //JavaScript BOM Navigator 
// //Represents the state and the indentify of the user's browser

// //the platform property returns a string representing the platform of the browser 
// document.write(`Using platform property: ${navigator.platform}<br>`);

// //the language property returns a string representing the language of the browser
// document.write(`Using language property: ${navigator.language}<br>`);

// //the appname property returns a string representing the official name of the browser 
// document.write(`Using appname property:${navigator.appName}<br>`);

// //the appCodeName property returns the internal "code" name of the browser
// document.write(`Using appCodeNamen: ${navigator.appCodeName}<br>`);

// //the appVersion Property returns the version of the browser
// document.write(`Using appVersion property: ${navigator.appVersion}<br>`);

// //the userAgent property returns the user agent string for the browser
// document.write(`Using userAgent property: ${navigator.userAgent}<br>`);

// // the onLine property returns a boolean indicanding whether the browser is working online
// document.write(`Using onLine property: ${navigator.onLine}<br>`);

//About Cookies -----------------------

//To create a cookie we use the document.cookie property
document.cookie = "nombre=Moises";

//to create multiple cookies, separate the nombre=Moises pairs with a semicolon (;)
document.cookie = "firstName = Moises2 ; lastName = Roberto";

//Add an expiry date (in UTC) so that it does no get deleted when the browser is closed
document.cookie = "lastName = Roberto1; expires= Mon, 21 Fre 2022 10:00:00 UTC";

//getting a cookie value
//the document.cookie returns a string that contains all the cookies 
var cookies = document.cookie;
document.write(cookies,"<br>");
//to delete a cookie, set the its name to a empty value and use max-age=0
document.cookie = "firstName=; max-age=0";
document.write(cookies);




