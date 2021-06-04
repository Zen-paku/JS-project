// //1. console API
// //console.warn("WARNING");
// //console.error("Error");
// //console.assert(4 = 8);
// //console.clear();

// //2. JAVASCRIPT variables
// //Containers to store data value
// // var number1 = 52;
// // var number2 = 56;
// // console.log(number1+number2);

// //3. Datatypes in JS
// var str1 = "this is a string"; // string
// var number3 = 1998;//number
// //objects in JS key value pairs
// var marks = {
//     ravi: 34, 
//     shiva: 98, 
//     harray: 32.55
// }
// // console.log(marks);
// // var a = true;
// // console.log(a);
// var ar = [12,3,8,"hello",5];
// // console.log(ar[2]);

// var a = 23;
// var b = 45;
// function sum(a, b) {
//     return a+b;
// // }
// // c = sum(1,9);
// // console.log(c);
// let myDate = new Date();
// console.log(myDate.getHours());
// console.log(myDate.getMilliseconds())
// //#document
// let elemClass = document.getElementsByClassName("container");
// elemClass[0].classList.add("text_success");
// elemClass[1].classList.remove("container");
// let created = document.createElement("p");
// created.innerText = "This is a created para";
// tn = document.getElementsByTagName("p");
// tn[0].appendChild(created);
// //elemClass[1].classList.add("test-success");
// // elemClass[1].appendChild(created);
// newElement = document.createElement("b");
// newElement.innerText = "I am bold";
// elemClass[0].appendChild(newElement);

// function clicked(){
//     console.log("the first button was clicked");
// }

// function clicked2(){
//     console.log("the second button was clickled");
// }
// window.onload = function(){
//     console.log("Document loaded");
// }
// function clicked2(){
//     console.log("para clicked");



// SecondContainer.addEventListener("mouseout", function(){
//     console.log('Mouse out of Container 2');    
// })
// ThirdConatiner.addEventListener('mouseup', function(){
//     console.log('mouseup on container 3')
// })

let prevHTML = document.querySelectorAll('.container2')[0].innerHTML;

firstContainer.addEventListener('mousedown', function(){
         document.querySelectorAll('.container2')[0].innerHTML = "<b> We have clicked</b>"
        console.log("Mouse down when clicked on Container");
})
firstContainer.addEventListener('mouseup', function(){
    document.querySelectorAll('.container2')[0].innerHTML = prevHTML;
})  

















