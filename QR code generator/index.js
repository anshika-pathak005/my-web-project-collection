let imgBox = document.querySelector(".imgBox")
let QRimg = document.querySelector(".QRimg")
let QRtext = document.querySelector(".QRtext")
let errorMessage = document.querySelector(".error")

function generateQR(){
    if(QRtext.value.length > 0){
        errorMessage.classList.remove("show")
        QRimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${QRtext.value}`
        imgBox.classList.add("show_img");
    }
    else{
        errorMessage.classList.add("show")
        imgBox.classList.remove("show_img")
    }
}