// // // // // // // // // // // // // // // // // let i=10;
// // // // // // // // // // // // // // // // // console.log(i);
// // // // // // // // // // // // // // // // // while(i-->1){
// // // // // // // // // // // // // // // // //     if(i==5){
// // // // // // // // // // // // // // // // //         continue;
// // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // //     console.log(i);
// // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // console.log(null==null)
// // // // // // // // // // // // // // // var a=null;
// // // // // // // // // // // // // // // var b;
// // // // // // // // // // // // // // // console.log(a)
// // // // // // // // // // // // // // // console.log(b)
// // // // // // // // // // // // // // let a=1
// // // // // // // // // // // // // // let b=a
// // // // // // // // // // // // // // let a=2
// // // // // // // // // // // // // // let b=a
// // // // // // // // // // // // // // console.log(b)

// // // // // // // // // // // // // for(let i=2;i<=9;i++){
// // // // // // // // // // // // //     var c=0
// // // // // // // // // // // // //     for(let a=1;a<=i;a++){
// // // // // // // // // // // // //         if(i%a==0){
// // // // // // // // // // // // //             c+=1
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //     if(c==2){
// // // // // // // // // // // // //         console.log(i)
// // // // // // // // // // // // //     }
// // // // // // // // // // // // // }
// // // // // // // // // // // a=10
// // // // // // // // // // // console.log(a);
// // // // // // // // // // // var a;

// // // // // // // // // // let i=10;
// // // // // // // // // // console.log(i+"\n");   
// // // // // // // // // const i = 5;
// // // // // // // // // // console.log(j);
// // // // // // // // // function show() {
// // // // // // // // //     // let i = 7;
// // // // // // // // //     console.log(i+"\n");    
// // // // // // // // // }
// // // // // // // // // show()
// // // // // // // // // console.log(i)

// // // // // // // // // // // var a;
// // // // // // // // // // // console.log(a);
// // // // // // // // // // // let b;
// // // // // // // // // // // console.log(b)


// // // // // // // // // // passing anonymous function as an argument
// // // // // // // // // // function display(myfun){
// // // // // // // // // //     return(myfun());
// // // // // // // // // // }

// // // // // // // // // // console.log(display(function(){
// // // // // // // // // //     return("hello");
// // // // // // // // // // }
// // // // // // // // // // ));

// // // // // // // // // //  returning an anonymoous function
// // // // // // // // // // function display(a){
// // // // // // // // // //     return function(){
// // // // // // // // // //         return a;
        
// // // // // // // // // //     }
// // // // // // // // // // }

// // // // // // // // // // console.log(display("hello")())


// // // // // // // // // const num=10;
// // // // // // // // // console.log(num)

// // // // // // // // // console.log(Boolean(undefined))
// // // // // // // // console.log(0.1+0.2)

// // // // // // // let user = {
// // // // // // //     name: "John",
// // // // // // //     age: 30,
// // // // // // //     likes_birds: true  // multiword property name must be quoted
// // // // // // //   };
// // // // // // // // console.log(delete user["likes birds"])
// // // // // // // console.log(user['name'])

// // // // // // let user = {
// // // // // //     1: "John",
// // // // // //     age: 30
// // // // // //   };
// // // // // // console.log(user[1])
// // // // // // //   let key = prompt("What do you want to know about the user?", "name");
// // // // // // //   console.log(key);

// // // // // // // let age = prompt('How old are you?', 100);

// // // // // // // alert(`You are ${age} years old!`);
// // // // // let obj = {
// // // // //     "+1": "test" // same as "0": "test"
// // // // //   };
  
// // // // //   // both alerts access the same property (the number 0 is converted to string "0")
// // // // //   console.log( obj["+1"] ); // test
// // // // //   console.log( obj[+1]); // test (same property)



// // // // // // let user = { name: "John", a$ : 30 };

// // // // // // console.log( a$ in user ); // true, user.age exists
// // // // // // console.log( "blabla" in user ); 



// // // // console .log(a)
// // // // let a;
// // // let user = {
// // //     name: "John",
// // //     age: 30
// // //   };
  
// // // //   let clone = {}; // the new empty object
  
// // //   // let's copy all user properties into it
// // //   for (let key in user) {
// // //     // clone[key] = user[key];
// // //     console.log(user[key])
// // //   }
  

// // let user = {
// //     name: "John",
// //     age: 30
// //   };
// //   let clone ={}; 
// // clone={...user}
// // console.log(clone.name)

// function fun(){
//     return("You are in fun")
// }
// function ab(){
//     var a=10;
//     ac();
//     function ac(){
//         console.log(a);
//     }
// }
// console.log(a);
// ab();

function User(){
    this.name="Shitanshu"
};

let user=new User();
console.log(user.name);