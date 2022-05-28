console.log('hello clever programmer')
 //variable

 //var a ='halo'

/*  var age =prompt('what is your age');

  document.getElementById('heloo there').innerHTML = age;*/

 // numericals
  // var num1 = 5;
  // num1 = num1 + 1;
  // console.log(50/5);
  // console.log(num1);
  /*increment by 1
  num1++;
  decrement by 1 
  num1--;
  concole.log (num1);*/

  //Divide /, Multiply *,reminder %

    /*increment or decrement by any number
    num1+=10;
    console.log (num1);*/

    //function
    // function fun() {
    //     alert('this is a function');
    // }

     //call
     // fun();
     /* fumction that ask name and say hello name*/
      
    
    //  function greeting() {
    //      var name = prompt('what is your name?');
    //      var result = 'Hello' +' '+ name;
    //      console.log(result);
    //  }
    //  greeting(name);

    //  //how to add 2 num together in a function

    //  function sumnumbers(num1,num2){
    //    var result = num1 + num2;
    //    console.log(num1+num2);

    //  }

    //sumnumbers(10 ,12);

    /* while 

     var num = 0;

     while (num <100) {
       num+= 1;
       console.log(num);
     }
     */
    //for loop
    for (let num = 0; num <= 10; num++) 
    {
      if (num%2==0) {
         console.log(num);
      } 
    }



    // datatypes 
    let yourage = 18;                                 // num
    let yourname = 'bob';                             // string
    let name = {first: 'jane',last:'doe'};            // object
    let truth= false;                                 // boolean
    let grasories = ['apple','banana','oranges'];     //array
    let random;                                       //undefined
    let nothing = null;                               //value null


    // strings in javascript(common method)
    let fruit = 'banana';
    let morefruits = 'banana\napple';

    console.log(fruit.length);
    console.log(fruit.indexOf('an'));
    console.log(fruit.slice(2,6));
    console.log(fruit.replace ('ban','123'));
    console.log(fruit.toLowerCase(fruit));
    console.log(fruit.toUpperCase(fruit));
    console.log(fruit[2]);
    console.log(fruit.charAt(2));
    console.log(fruit.split(''));//split by char
    console.log(fruit.split(','));//split by comma means split a list
    