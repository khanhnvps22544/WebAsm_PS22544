import Register from "./Register.js";


let users = [
    {
        "email": "email 11",
        "username": "admin",
        "password": "12",
        "name": "khanh"
    },
    {
        "email": "email 11",
        "username": "admin1",
        "password": "12",
        "name": "khanh"
    },
    {
        "email": "email 11",
        "username": "admin2",
        "password": "12",
        "name": "khanh"
    },
    {
        "email": "email 11",
        "username": "admin3",
        "password": "12",
        "name": "khanh"
    },
]

let register = new Register();
register.getAllUser()
console.log()

localStorage.setItem("Cart", JSON.stringify([]));

let addUserDefault = () =>{
    setTimeout(()=>{
        register.getAllUser()
    }, 1000)
    let check = false
    register.listUser.forEach(element => {
        if(element.username === users[0].username){
            check = false
        }
        
    })
    if(check){
        users.forEach(element =>{
            register.addUser(element)
        })
    }
}

let btnRegister = document.getElementById("btn-sign-up")
let txtName = document.getElementById("name-sign-up")
let txtUserName = document.getElementById("userName-sign-up")
let txtPassword = document.getElementById("pass-sign-up")
let txtGender = document.getElementById("male")
let txtConfirmPassword = document.getElementById("pass-confirm-sign-up")

console.log(txtGender)
btnRegister.addEventListener("click", () =>{
    let check = true;
    setTimeout(()=>{
        register.getAllUser()
    }, 1000)
    

    let addCartSuccess = document.getElementById('success-box')
    let addCartError = document.getElementById('my-error-box')
    let containerAddCartSuccess = document.getElementById('container_notify')
    let opacity = document.getElementById('opacity')

    if(txtPassword.value !== txtConfirmPassword.value){
        console.log("A")
    }
    else {
        let data = {
            name: txtName.value,
            username: txtUserName.value,
            password: txtPassword.value,
            male: txtGender.checked,
        }
        register.listUser.forEach(element => {
            if(element.username === data.username){
                
                check = false
            }
            
        })
        if(check){
            register.addUser(data);
            addCartSuccess.style.display = 'block'
            localStorage.setItem("user",  JSON.stringify(data))
            setTimeout(()=>{
                 location.replace('../index.html')
            }, 2000)
           
        }
        else{
            addCartError.style.display = 'block'
        }
        containerAddCartSuccess.style.display = 'block'
        opacity.style.display = 'block'
    }
    let continueBtn = document.getElementById("continue");
    let tryAgainBtn = document.getElementById("tryAgain");
    continueBtn.addEventListener('click', () =>{
        addCartSuccess.style.display = 'none'
        containerAddCartSuccess.style.display = 'none'
        opacity.style.display = 'none'
    })
    tryAgainBtn.addEventListener('click', () =>{
        addCartSuccess.style.display = 'none'
        containerAddCartSuccess.style.display = 'none'
        opacity.style.display = 'none'
    })
    
    
    
})

let login = document.getElementById("login")
let txtUserNameLogin = document.getElementById("userName")
let txtPasswordLogin = document.getElementById("passWord")
let txtNameSignUp = document.getElementById("name-sign-up")




login.addEventListener("click", () =>{
    let checkLogin = false
    let data = {
        username: txtUserNameLogin.value,
        password: txtPasswordLogin.value,
        name: txtName.value,
        male: txtGender.checked,

    }
    console.log(register.listUser)
    register.listUser.forEach(element => {
        console.log(element)
        if(element.username === data.username && element.password === data.password){
            checkLogin = true
        }
    })

    let addCartSuccess = document.getElementById('success-box')
    let addCartError = document.getElementById('my-error-box')
    let containerAddCartSuccess = document.getElementById('container_notify')
    let opacity = document.getElementById('opacity')
    let idUserName = document.getElementById('userName')
    let pNotify = document.getElementById('p_notify')

    if(checkLogin){
        localStorage.setItem("user",  JSON.stringify(data))
        addCartSuccess.style.display = 'block'
setTimeout(()=>{
                 location.replace('../index.html')
            }, 2000)
    }
    else{
        addCartError.style.display = 'block'
        if(idUserName.value === ""){
            pNotify.innerHTML = "Fields cannot be empty"
        }
        else{
            pNotify.innerHTML = "Username or password is incorrect"
        }
    }
    containerAddCartSuccess.style.display = 'block'
    opacity.style.display = 'block'
    let continueBtn = document.getElementById("continue");
    let tryAgainBtn = document.getElementById("tryAgain");
    continueBtn.addEventListener('click', () =>{
        addCartSuccess.style.display = 'none'
        containerAddCartSuccess.style.display = 'none'
        opacity.style.display = 'none'
    })
    tryAgainBtn.addEventListener('click', () =>{
        addCartSuccess.style.display = 'none'
        containerAddCartSuccess.style.display = 'none'
        opacity.style.display = 'none'
    })
})

