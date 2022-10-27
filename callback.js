// function Bye() {
//     console.log('Good bye')
// }

// function Greet(callback){
   
//     setTimeout( () => {
//         console.log('HELLO')
//         callback()
//     }, 2000)
// }


// Greet(Bye);


let friend = {
    age : 20,
    name: 'Charles',
    gender: 'Male'
}

//! POSITILITY 1 : MODIFY AN PROPERTY
let otherFriend = { ...friend, age:15}

// console.log(otherFriend)


//! POSITILITY 2 : ADD AN PROPERTY
let otherFriendAdd = { ...friend, job:'Musician'}
console.log(otherFriendAdd)







