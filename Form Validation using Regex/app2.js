document.querySelector('#name').addEventListener('blur' , Validatename)
document.querySelector('#zip').addEventListener('blur' , Validatezip)
document.querySelector('#email').addEventListener('blur' , Validateemail)
document.querySelector('#phone').addEventListener('blur' , Validatephone)


function Validatename(){

    const name = document.getElementById('name');
    let reg = /^[a-zA-Z]{2,8}$/
    if (!reg.test(name.value)) {
        name.classList.add('is-invalid')
    }else{
        name.classList.remove("is-invalid")  // remove the error message when input is
    }




}


function Validatezip(){
    const name = document.getElementById('zip');
    let reg = /^[0-9]{5}$/ ;


    if (!reg.test(zip.value)) {
        name.classList.add('is-invalid')
    }else{
        name.classList.remove("is-invalid")  // remove the error message when input is
    }



}


function Validateemail(){

    const name = document.getElementById('email');


    let reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/    
    

    if (!reg.test(name.value)) {
        name.classList.add('is-invalid')
    }else{
        name.classList.remove("is-invalid")  // remove the error message when input is
    }



}


function Validatephone(){

    const name = document.getElementById('phone');


    let reg = /^[0-9]{11}$/    
    

    if (!reg.test(phone.value)) {
        name.classList.add('is-invalid')
    }else{
        name.classList.remove("is-invalid")  // remove the error message when input is
    }

}