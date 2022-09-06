// ques1:- Write one example explaining how you can write a callback function ?

// function greeting(name) {
//     alert(`Hello, ${name}`);
//   }
  
//   function processUserInput(callback) {
//     const name = prompt('Please enter your name.');
//     callback(name);
//   }
  
//   processUserInput(greeting);

//-------------------------------------------------------------
// ques2:- "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7" 



let num = ()=>{
    setTimeout(()=>{
        console.log("1");
        setTimeout(()=>{
            console.log("2");
            setTimeout(()=>{
                console.log("3");
                setTimeout(()=>{
                    console.log("4");
                    setTimeout(()=>{
                        console.log("5");
                        setTimeout(()=>{
                            console.log("6");
                            setTimeout(()=>{
                                console.log("7");
                            },7000)
                        },6000)
                    },5000)
                },4000)
            },3000)
        },2000)
    },1000)
};
num();


//   Callback Hell: Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code.

//------------------------------------------------------

// ques3:-"Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

// const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// let chain = Promise.resolve();
// for (let count = 7; count >= 0; count++) {
//   chain = chain.then(() => {
//     console.log(count);
//     return wait(2000);
//   });
// }






//----------------------------------------------



// ques4:-Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected .

const prom =()=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            let a=1+1;
            if (a===2){
                resolve("promise is resolved");
            }else{
                reject("promise is rejected");
            }
        },1000);
    });
};

prom()
    .then((resolve)=>{
        console.log(resolve);
    })
    .catch((reason)=>{
        console.log(reason);
    });

    
    //---------------------------------------------------------------------------
    
    
    // Create examples to explain callback function.

    // function
    function greet(name, callback) {
        console.log('Hello' + ' ' + name);
        callback();
    }
    
    // callback function
    function callMe() {
        console.log('I am callback function');
    }
    
    // passing function as an argument
    greet('harshita', callMe);

    //--------------------------------------------------------------- 

//Create examples to explain callback hell function.

const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const btn = document.querySelector('.btn')

btn.addEventListener('click', ()=>{
    setTimeout(()=>{
        one.style.color ='red'
        setTimeout(()=>{
            two.style.color ='green'
            setTimeout(()=>{
                three.style.color ='blue'
            },2000)
        },3000)
    },1000)
})


// ---------------------------------------------------------------------------------------------

// Create examples to explain promises function.

const p= new Promise((resolve,reject)=>{
    let a=2+1
    if (a===3){
        resolve('success')
    }else{
        reject('failed')
    }
})

p.then((message)=>{
    console.log('this is the then' + message);
}).catch((message)=>{
    console.log('this is in the catch' + message);
})

// ----------------------------------------------

// Create examples to explain async await function


async function small(){
    console.log('Inside small function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved')
    return users;
    
}

console.log("before small");
let a= small();
console.log(("after calling small"));
console.log(a);
a.then(data => console.log(data))
console.log("last line.");







//---------------------------------------------------

// Create examples to explain promise.all function

// Promise.all([...]) is a useful helper function that lets you execute asynchronous operations in parallel, using a fail-fast strategy, and aggregate the results into an array.

const p1 = Promise.resolve(3);
const p2 = 2445;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 1000);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); 
});
