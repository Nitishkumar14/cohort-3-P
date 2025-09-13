function greet(user){
                if(user.gender === "male")
                {
                    console.log("Hello Mr "+ user.name + " ur age is " + user.age)
                }
                else{
                    console.log("Hello Mrs "+ user.name + " ur age is " + user.age)
                }
}


let user1={
    name: "Nitish",
    age: 20,
    gender: male
}

let user2={
    name: "shikha",
    age: 20,
    gender: female
}

greet(user)