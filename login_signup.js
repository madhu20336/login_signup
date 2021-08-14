const fs= require("fs")
const { type } = require("os")
let readline = require("readline-sync")
const validation=require("validation")
let user_choice = readline.question("Enter your choice what you want to do login or sign-up:  ")
if (user_choice == "signup"){
    let user_choice_first_name = readline.question("Enter your first name:  ")
    let user_choice_last_name = readline.question("Enter your last name:  ")
    function validEmail(){
        let email = readline.question("enter the email id:  ")
        const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
        let confirm_Email = regx.test(email)
        if (confirm_Email==true){
            return(email)
        }
        else{
            console.log("your Email ID is worng enter your Email ID again")
            validEmail()
        }
        }
        valid_Email = validEmail()
    function validPassword(){
        let user_password = readline.question("enter your password your password(you password should contain 8 characters and it should contain atlest one special charcter,one small letter,one numbeer:  ")
        const re = (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/)
        let confirm_password = re.test(user_password)
        if (confirm_password==true){
            return (user_password)
        }
        else{
            console.log("your password is worng enter your password again")
            validPassword()
        }
    }
    valid_password=validPassword()
    obj={}
    list=[]
    object={
        First_name:user_choice_first_name,
        Last_Name:user_choice_last_name,
        Email:valid_Email,
        Password:valid_password
    }
    
    list.push(object)
    console.log(list)
    fs.readFile("function/data.json","utf-8",(err,result)=>{
        if (err) throw err;
        const res1 = JSON.parse(result);
        res1[valid_password]=list
        console.log(res1)
        fs.writeFile("function/data.json",JSON.stringify(res1),(err)=>{
            console.log("signup successfully")
        })
    
 
        
    })
        read=fs.readFileSync("function/data.json","utf-8")
//         const res1 = JSON.parse(read);
//         // console.log(res1)
//         list.push(object)
//         console.log(list)
//         console.log(res1)
//         res1[valid_password]=list
//         console.log(res1)
//         fs.writeFile("function/data.json",JSON.stringify(res1),(err)=>{
//             console.log("signup successfully")
//         })
    
//     })
                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    11                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             else if(user_choice == "login"){
    const user_choice = readline.question("Enter your name and last name: ");
    let user_password = readline.question("enter your password(you password should contain 8 characters and it should contain atlest one special charcter,one small letter,one numbeer ) ")
    let readFile = fs.readFileSync("data.json")
    let file = JSON.parse(readFile)
    list.push(object)
             obj[valid_password]=list
            fs.writeFile("data.json",JSON.stringify(obj),(err)=>{
                if (err) throw err;

            })
