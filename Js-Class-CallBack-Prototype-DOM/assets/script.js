"use strict"
// setTimeout(()=>{
//     window.location.reload();
// },3000);       

// function checkOddNum(num){
//     return num%2==0;
// }
// function checkEvenNum(num){
//     return num%2==0;
// }
// function sumOfNumsByCondition(arr,callback){
//     let sum=0;
//     for (const item of arr) {
       
//        if(callback(item)){
//         sum+=item;
//        }
//     }
//     console.log(sum);
// }

// let nums=[1,4,5,6,9,8];
// sumOfNumsByCondition(nums,checkOddNum)
// sumOfNumsByCondition(nums,checkEvenNum)
// sumOfNumsByCondition(nums,m=>m%2==0)
// let nums=[1,4,5,6,9,8];
// let result=nums.filter(m=>m>5)
// console.log(nums);
// console.log(result);

// let result=nums.find(m=>m>5);
// console.log(result);
// let result=nums.findIndex(m=>m==5)
// console.log(result);

// class Animal{
//     constructor(height,width){
//        this.height=height;
//        this.width=width;
       
//     }
// }
//let animal =new Animal(100,200);
// console.log(animal.height)
// let animal =new Animal();
// animal.name="salam"
// console.log(animal.name)

// let animal =new Animal(100,200);

// class Bird extends Animal{
//     constructor(){
//         super(100,200); 
//         this.name="Devequshu";
  
//     }
//     //constructor bir dene olmalidir
// getName(t){
//     console.log("test")
// }

// }

// console.log(animal.width)
// let bird =new Bird();
// console.log(bird.name)
// console.log(bird.height)
// bird.getName(100)

// let name="sasa";
// let surname=new String("salamlar");
// console.log(surname)
// let isMarried=new Boolean();
// isMarried=true;
// console.log(isMarried)

// class Test{
//     constructor(name){
//         this.name=name;
//     }
// }

// Test.prototype.surname="surname for test";
// // let test=new Test("salam");
// //console.log(test.surname)

// Test.prototype.getName=function(){
//     console.log("this is a test name");
// }
// let test=new Test("salam");
// test.getName()

// String.prototype.customContains=function(searchText){
//     return this.includes(searchText)
// }
// let name="Reshad";
// let surnameame="Aghayev";
// console.log(name.customContains("c"));
// console.log(surname.customContains("v"));

// let date=new Date();
// console.log(date);
// let year=date.getFullYear();
// console.log(year);
// let month=date.getUTCMonth();
// console.log(month);
// let result=`${month+1}-${year}`;
// console.log(result);
// let data=Math.sqrt(65);
// console.log(data);

////////////////DOM (Document Object Model)

// let elems=document.getElementsByTagName("h1");
// for (let i = 0; i < elems.length; i++) {
//     const element = elems[i];
//     console.log(element);
// }
// let elem=document.getElementsByClassName("test");

// console.log(elem);


//important
// let elems=document.getElementById("products");
// console.log(elems);

// let elem=document.querySelector("#products .test");
// let elems=document.querySelectorAll("#products h1");
// console.log(elems);

// let elems=document.querySelectorAll("#products h1");
// elems[1].style.backgroundColor="Red"
// for (const item of elems) {
//   item.style.backgroundColor="Red"
// }

// let h1=document.querySelector("h1");
// console.log(h1.innerText);
// console.log(h1.innerHTML);

// h1.innerText="<span>Reshad bey</span>";
// h1.innerHTML="<span>Reshad bey</span>";

// h1.style.color="Teal";
// h1.style.margin="200px";
// h1.className="active";// var olan klassin silir yerine bunu qoyur
// h1.classList.add("active");
// h1.classList.remove("active");

//console.log(h1.classList.contains("active"))
//console.log(document.querySelector("products ul li:nth-child(2) "))

// h1.setAttribute("id","text")
// console.log(h1.getAttribute("id"))
// console.log(h1.hasAttribute("id"))
// console.log(h1.classList.contains("active"))
let button=document.querySelector(".add-product");
// button.addEventListener("click",function(){
//     alert("Hello World");
// })

// button.addEventListener("dblclick",function(){
//     alert("Hello World");
// })
// button.addEventListener("mouseover",function(){
//     alert("Hello World");
// })
let h1=document.querySelector("h1");
button.addEventListener("click",function(){
  this.style.backgroundColor="Magenta"

  h1.style.backgroundColor="Green";
  h1.style.color="White"
  h1.style.witdh="200px";
  let btnText=this.innerText;
  this.innerText=h1.innerText;
  h1.innerText=btnText;
})