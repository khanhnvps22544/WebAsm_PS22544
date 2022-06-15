

function Cart(item){
    let myCart = JSON.parse(localStorage.getItem('Cart'));
    let idShowCart = document.getElementById('table-container')

    let getUser = JSON.parse(localStorage.getItem('user'));
    let itemPrice;
    if(item.status === 'sale'){
         itemPrice = item.price - 3
    }
    else{
         itemPrice = item.price 
    }
    idShowCart.innerHTML += '<tr>'
   + `<td><img src=\"${item.img}\" width=\"100px\"></td>`
    +`<td>${item.name}</td>`
    +`<th>${itemPrice}</th>`
    +`<th>1</th>`
    +'<td>No</td>'
    +`<td><img onclick=\"removeItem\(${item.id}\)\" id=\"idBtnRemove\" src=\"../hinhanh/x-button.png\" width=\"20px\"></td>`
  +'</tr>'
    let idName = document.getElementById('name')
    idName.innerHTML = getUser.name;


    
}


function loadSP(listSP) {
    
    var listSP = JSON.parse(localStorage.getItem("Product"));
    var listCart = JSON.parse(localStorage.getItem("Cart"));
    var userCart = JSON.parse(localStorage.getItem("user"));
    var number = 0;
    var idListSP = document.getElementById("table-container");
    idListSP.innerHTML = '<tr>'
    +'<td></td>'
    +'<td>Name</td>'
    +'<td>Price</td>'
    +'<td>Quantity</td>'
    +'<td>More infor</td>'
  +'</tr>';
  let idPrice = document.getElementById('price')
    listSP.forEach(item => { 
        
                listCart.forEach(item1 =>{
                    
                    if(item.id === (item1 + "")){
                        number += item.price
                        Cart(item)
                        idPrice.innerHTML = "$" + number
                    // console.log(number);
                    }
                    if(item.id === item1.id){
                        console.log(item.id);
                        Cart(item)
                        console.log(number)
                        idPrice.innerHTML = "$" + number
                    }
            });
    });
    let discount = document.getElementById('btnDiscount')
let inputDiscount = document.getElementById('inputDiscount')
const codeDiscount = '123abc';
discount.addEventListener('click', () =>{
    let notifySuccess = document.getElementById("addCartSuccess")
    let notifyError = document.getElementById("addCartError")
console.log(number)
    if(codeDiscount === inputDiscount.value){
        idPrice.innerHTML = "$" + Math.round((number * 0.95) * 100) / 100;
        notifySuccess.style.display = 'block'

    setTimeout(() => {
        notifySuccess.style.display = 'none'

      }, 2000)
    }
    else{
        notifyError.style.display = 'block'

    setTimeout(() => {
        notifyError.style.display = 'none'

      }, 2000)
    }
    inputDiscount.value = ''
})

};
loadSP()

function removeItem(id) {
    var listCart = JSON.parse(localStorage.getItem("Cart"));
    
    console.log(listCart)
    var index = listCart.indexOf(id)
    console.log(id)
    listCart.splice(index, 1);
    console.log(index)
    let idPrice = document.getElementById('price')

    if(index === 0){
            idPrice.innerHTML = "$" + 0
        }
    
    localStorage.setItem("Cart", JSON.stringify(listCart));
    loadSP()
    location.reload()
}
