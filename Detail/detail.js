import Comment from "./Comment.js";

let listComment = []
// localStorage.setItem("Comment", JSON.stringify(listComment));

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
function detail(){
    var detailProduct = JSON.parse(localStorage.getItem("chitietsanpham"));
    var divImageProduct = document.getElementById("image_product");

    let imgProduct = document.createElement("img")
    let srcImgProduct = document.createAttribute("src")
    srcImgProduct.value = detailProduct.img
    imgProduct.setAttributeNode(srcImgProduct)
    divImageProduct.appendChild(imgProduct)

    
    var h1TitleProduct = document.getElementById('title_product')
    h1TitleProduct.innerHTML = detailProduct.name
    
    let priceProduct = document.getElementById('price_product')
    priceProduct.innerHTML = "$ " + detailProduct.price
    priceProduct.style.fontSize = '42px'
    

    let idAddCart = document.getElementById("add_to_cart")
    let addCartSuccess = document.getElementById('success-box')
    let addCartError = document.getElementById('error-box')

    let containerAddCartSuccess = document.getElementById('container_notify')
    let opacity = document.getElementById('opacity')
    
    let dataName = JSON.parse(localStorage.getItem('user'));
    let dataCart = JSON.parse(localStorage.getItem('Cart'));

    if(dataCart.length === 0){
        idAddCart.addEventListener('click', () =>{
        
            idAddCart.setAttribute('disabled', '');
            idAddCart.style.backgroundColor = '#AAA'
            if(dataName.name === ""){
                addCartError.style.display = 'block'
            }
            else{
                addCartSuccess.style.display = 'block'
                addCart(detailProduct)
            
            }
            containerAddCartSuccess.style.display = 'block'
            opacity.style.display = 'block'
        })
    }
    else{
        idAddCart.setAttribute('disabled', '');
        idAddCart.style.backgroundColor = '#AAA'
    }

    

    let continueBtn = document.getElementById("continue");
    let gotoCartBtn = document.getElementById("goToCart");
    let tryAgainBtn = document.getElementById("tryAgain");
    continueBtn.addEventListener('click', () =>{
        addCartSuccess.style.display = 'none'
        containerAddCartSuccess.style.display = 'none'
        opacity.style.display = 'none'
    })
    gotoCartBtn.addEventListener('click', () =>{
        location.replace("../Cart/cart.html");
    })
    tryAgainBtn.addEventListener('click', () =>{
        addCartSuccess.style.display = 'none'
        containerAddCartSuccess.style.display = 'none'
        opacity.style.display = 'none'
    })
    let rating = document.getElementById('rating')
    // for(let i = 0; i < detailProduct.rating; i++){
    //     rating.innerHTML = showRating[i];
        
    // }
    let idDescription = document.getElementById('description')
    idDescription.innerHTML = detailProduct.description
    switch (detailProduct.rating) {
        case 1:
            rating.innerHTML = "<i class=\"fa fa-star\"></i>";
            break;
        case 2:
            rating.innerHTML = "<i class=\"fa fa-star\"></i>"
            +"<i class=\"fa fa-star\"></i>";
            break;
        case 3:
            rating.innerHTML = "<i class=\"fa fa-star\"></i>"
            +"<i class=\"fa fa-star\"></i>"
            +"<i class=\"fa fa-star\"></i>"
            break;
        case 4:
            rating.innerHTML = "<i class=\"fa fa-star\"></i>"
            +"<i class=\"fa fa-star\"></i>"
            +"<i class=\"fa fa-star\"></i>"
            +"<i class=\"fa fa-star\"></i>";
            break;
        case 5:
            rating.innerHTML = "<i class=\"fa fa-star\"></i>"
            +"<i class=\"fa fa-star\"></i>"
            +"<i class=\"fa fa-star\"></i>"
            +"<i class=\"fa fa-star\"></i>"
            +"<i class=\"fa fa-star\"></i>"
            break;
    
        default:
            break;
    }

    let dataAllProduct = JSON.parse(localStorage.getItem("Product"));
let itemProduct3 = dataAllProduct[getRndInteger(0, 9)]
    

    let idFlipCardFront2 = document.getElementById('flip-card-front2')
    
    idFlipCardFront2.innerHTML += `<img src=\"${itemProduct3.img}\">`
    let idFlipCardBack2 = document.getElementById('flip-card-back2')
    idFlipCardBack2.innerHTML += `<h1>${itemProduct3.name}</h1>`
    
    +`<p class=\"price\">$ ${itemProduct3.price}</p>`
    +`<p>${itemProduct3.description}</p>`
    +"<button>Go to detail</button>"
    // item 2
    let itemProduct2 = dataAllProduct[getRndInteger(0, 9)]
    if(itemProduct3 === itemProduct2){
        itemProduct2 = dataAllProduct[getRndInteger(0, 9)]
    }
    let idFlipCardFront3 = document.getElementById('flip-card-front3')
    idFlipCardFront3.innerHTML += `<img src=\"${itemProduct2.img}\">`

    let idFlipCardBack3 = document.getElementById('flip-card-back3')
    idFlipCardBack3.innerHTML += `<h1>${itemProduct2.name}</h1>`
    
    +`<p class=\"price\">$ ${itemProduct2.price}</p>`
    +`<p>${itemProduct2.description}</p>`
    +"<button>Go to detail</button>"

    // item 3
    let itemProduct = dataAllProduct[getRndInteger(0, 9)]
    if(itemProduct2 === itemProduct){
        itemProduct = dataAllProduct[getRndInteger(0, 9)]
    }
    
    let idFlipCardFront = document.getElementById('flip-card-front')
    idFlipCardFront.innerHTML += `<img src=\"${itemProduct.img}\">`

    let idFlipCardBack = document.getElementById('flip-card-back')
    idFlipCardBack.innerHTML += `<h1>${itemProduct.name}</h1>`
    
    +`<p class=\"price\">$ ${itemProduct.price}</p>`
    +`<p>${itemProduct.description}</p>`
    +"<button>Go to detail</button>"

    

}
detail()

    let btnPlus = document.getElementById("btn_raise_2")
    let btnMinusCombo = document.getElementById("btn_raise_combo")
    let btnPlusCombo = document.getElementById("btn_raise_combo2")
    let btnMinus = document.getElementById("btn_raise")
    let showQuantity = document.getElementById("quantity");
    let showQuantityCombo = document.getElementById("quantity_combo");

    
let a = 1
let b= 1;
btnPlus.addEventListener('click', () => {
    quantityPlus()
})
function quantityPlus(){
    a++
    showQuantity.innerHTML = a
}
btnMinus.addEventListener('click', () => {
    quantityMinus()
})
function quantityMinus(){
    a--
    showQuantity.innerHTML = a
}
btnPlusCombo.addEventListener('click', () => {
    quantityPlusCombo()
})
function quantityPlusCombo(){
    b++
    showQuantityCombo.innerHTML = b
}
btnMinusCombo.addEventListener('click', () => {
    quantityMinusCombo()
})
function quantityMinusCombo(){
    b--
    showQuantityCombo.innerHTML = b
}
//add to cart
function addCart(id){
    var listCart = JSON.parse(localStorage.getItem("Cart"));
    listCart.push(id);
    localStorage.setItem("Cart", JSON.stringify(listCart));
    console.log(listCart)
    
}
// function addCart(id) {
//     if (JSON.parse(localStorage.getItem('user'))){
//         var listIDCart = JSON.parse(localStorage.getItem("Cart"));
//             listIDCart.push(id);
//             localStorage.setItem("Cart", JSON.stringify(listIDCart));
//             countPlus(); 
//             var x = document.getElementById("countProduct");
//             if (x.style.display === "none") {
//             x.style.display = "block";
//                                             //count------------------------------
//             }else {
//                 x.style.display = "block";
//             }
            
//     }
//     else{
//         Success()
//     }
// }
// function Success() {
//     var x = document.getElementById("notify");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
// }

// function countPlus(){
//     var click = JSON.parse(localStorage.getItem("Cart"));

//     var number = document.getElementById("count");   //---output---
    
//     if (click.length > 0 ){
//         number.innerHTML = click.length;
       
//         return;   
//     }
// }

// localStorage.removeItem("user");

//comment
function getName(){
    let dataName = JSON.parse(localStorage.getItem('user'));
    

    

    let idComment = document.getElementById("comment")
    let idPart4 = document.getElementById("part4")
    
    
    if(dataName.name === ""){
        idComment.style.display = 'flex'
    }
    else{
        idComment.style.display = 'none'
        let divCommentHasUser = document.createElement("div")
        let classCommentHasUser = document.createAttribute("id")
        classCommentHasUser.value = 'commentUser'
        divCommentHasUser.setAttributeNode(classCommentHasUser)
        idPart4.appendChild(divCommentHasUser)

        let rowComment = document.createElement("div")
        let classRowComment = document.createAttribute("class")
        classRowComment.value = 'rowComment'
        rowComment.setAttributeNode(classRowComment)
        divCommentHasUser.appendChild(rowComment)

        let imgComment = document.createElement("img")
        let srcImgComment = document.createAttribute("src")
        if(dataName.male){
            srcImgComment.value = '../hinhanh/profile.png'
        }
        else{
            srcImgComment.value = '../hinhanh/women.png'
        }
        imgComment.style.width = '70px'
        imgComment.setAttributeNode(srcImgComment)
        


        let inputComment = document.createElement("input")
        let typeComment = document.createAttribute('type')
        typeComment.value = "text"
        inputComment.setAttributeNode(typeComment)
        let idMyComment = document.createAttribute("id")
        idMyComment.value = 'idMyComment'
        inputComment.setAttributeNode(idMyComment)
        let placeholderComment = document.createAttribute('placeholder')
        placeholderComment.value = 'Your comment...'
        inputComment.setAttributeNode(placeholderComment)

        

        let containerComment = document.createElement("div")
        containerComment.style.width = "90%"
        containerComment.style.margin = 'auto'
        containerComment.style.display = 'flex'
        containerComment.style.padding = '15px 0'

        let divRightComment = document.createElement('div')

        divRightComment.style.width = '85%'
        let manageLike = document.createElement('div')
        let classManageLike = document.createAttribute('class')
        classManageLike.value = 'like'
        manageLike.setAttributeNode(classManageLike)

        // let btnLike = document.createElement('p')
        // let idBtnLike = document.createAttribute('id')
        // idBtnLike.value = 'idBtnLike'
        // btnLike.setAttributeNode(idBtnLike)
        // btnLike.innerHTML = "<i class=\"fa fa-thumbs-up\"></i>"  +"Like"

        // manageLike.appendChild(btnLike)

        let btnAddComment = document.createElement('button')
        let idBtnAddComment = document.createAttribute('id')
        idBtnAddComment.value = 'idAddComment'
        btnAddComment.innerHTML = "Comment"
        btnAddComment.setAttributeNode(idBtnAddComment)

        

        
        containerComment.appendChild(imgComment)
        divRightComment.appendChild(inputComment)
        containerComment.appendChild(divRightComment)
        rowComment.appendChild(containerComment)
        divRightComment.appendChild(manageLike)

        manageLike.appendChild(btnAddComment)
        
    }
}
getName()

// let inputComment  = document.getElementById('idMyComment')
// inputComment.addEventListener('change', ()=>{
//     console.log('1')
// })

//show comment


let comment = new Comment();


let btnComment = document.getElementById("idAddComment")
let idMyComment = document.getElementById("idMyComment")
let dataName = JSON.parse(localStorage.getItem('user'));
let dataComment = JSON.parse(localStorage.getItem('comment'));
let idCommentUser = document.getElementById("commentUser")
console.log(dataComment)
// if(dataComment.comment === ""){
//     btnComment.setAttribute('disabled', '');
//     btnComment.style.backgroundColor = "#aaa"
// }else{
//     console.log(dataComment.comment)
// }

btnComment.addEventListener('click', () => {
    // let check = true;
    setTimeout(()=>{
        comment.getAllComment()
    }, 1000)

    let data = {
        name: dataName.name,
        // username: txtUserName.value,
        // password: txtPassword.value,
        // male: txtGender.checked,
        avatar: dataName.male,
        comment: idMyComment.value
    }
    if(data.comment === ""){
        btnComment.setAttribute('disabled', '')
        btnComment.style.backgroundColor = "#aaa"
    }
    let divShowComment = document.createElement("div")
    let idShowComment = document.createAttribute("id")
    idShowComment.value = 'idShowComment'
    divShowComment.setAttributeNode(idShowComment)
    idCommentUser.appendChild(divShowComment)
    let imgComment = document.createElement("img")
    let srcImgComment = document.createAttribute("src")
    if(dataName.male){
        srcImgComment.value = '../hinhanh/profile.png'
    }
    else{
        srcImgComment.value = '../hinhanh/women.png'
    }
    let divShowComments = document.createElement("div")
    divShowComments.style.padding = '10px 45px'
    divShowComments.style.display = 'flex'
    divShowComment.appendChild(divShowComments)
    imgComment.style.width = '70px'
    imgComment.setAttributeNode(srcImgComment)
    divShowComments.appendChild(imgComment)
    
    let divMyComment = document.createElement('div')
    let pMyComment = document.createElement('p')
    pMyComment.innerHTML = data.comment
    divMyComment.appendChild(pMyComment)
    divShowComments.appendChild(divMyComment)

    let divLikeMyComment = document.createElement('div')
    divLikeMyComment.style.display = 'flex'


    let btnLikeMyComment = document.createElement("button")
    let classBtnLikeMyComment = document.createAttribute('class')
    classBtnLikeMyComment.value = 'classBtnLikeMyComment'
    btnLikeMyComment.setAttributeNode(classBtnLikeMyComment)
    btnLikeMyComment.innerHTML = '<i class=\"fa fa-thumbs-up\"></i>' +'Like'
    divLikeMyComment.appendChild(btnLikeMyComment)
    divMyComment.appendChild(divLikeMyComment)

    let btnRep = document.createElement('button')
    btnRep.innerHTML = "Comment"
    let idBtnRep = document.createAttribute('id')
    idBtnRep.value = 'idBtnRep'
    btnRep.setAttributeNode(idBtnRep)
    
    let classBtnRep = document.createAttribute('class')
    classBtnRep.value = 'classBtnRep'
    btnRep.setAttributeNode(classBtnRep)
    divLikeMyComment.appendChild(btnRep)


    let classMyComment = document.createAttribute('class')
    classMyComment.value = 'classMyComment'
    divMyComment.setAttributeNode(classMyComment)
    // comment.listComment.forEach(element => {
    //     // if(element.username === data.username){
    //         console.log(element.username)
    //         // check = false
    // //     }
        
    // })
    // if(check){

        comment.addComment(data);
        localStorage.setItem("comment",  JSON.stringify(data))
        idMyComment.value = ''
    // }
    // else{
    //     alert("Comment da duoc gui")
    // }
    // let dataComment = JSON.parse(localStorage.getItem('comment'));

        
})


// get Rating 
function getRating(){
    
}
// getRating()