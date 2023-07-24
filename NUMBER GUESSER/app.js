
// Declaring the variables

let minnum = 1
let maxnum = 10
let count = 3;

let random =  getrandomnum(minnum , maxnum);

const game = document.querySelector('#game')
const    UIminnum = document.querySelector('.min-num');
const    UImaxnum = document.querySelector('.max-num');
const    UIguessinput = document.querySelector('#guess-input');
const    UIguessbtn = document.querySelector('#guess-btn');
const    UImsg = document.querySelector('.message');

UImaxnum.textContent = maxnum;
UIminnum.textContent = minnum;


game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){

        window.location.reload();


    }


})



UIguessbtn.addEventListener('click', function(){

    let iv = parseInt(UIguessinput.value);
    // Validate the INput

    if( isNaN(iv) || iv<minnum || iv>maxnum){
        setmessage(`Please Enter a Number between ${minnum} and ${maxnum}` , 'red');
        UIguessinput.style.borderColor = 'red'
        UIguessinput.value='';
    }
    else if (iv === random){
        // If won 
        setmessage(`You Guessed Right! ${random} is the Right number Congrats!!` , 'green')           
        UIguessinput.style.borderColor = 'green';
        UIguessinput.disabled = true;
        UIguessbtn.value= 'Play Again';
        UIguessbtn.className += 'play-again'

    }else{
        // if lost

        count -= 1
        setmessage(`Wrong !  Now You have ${count} guesses left` , 'red')
        UIguessinput.value = '';
        if (count === 0){
            setmessage(`Game Over, You Lost! The Number Was ${random}` ,'red' );
            UIguessinput.disabled = true;

            UIguessbtn.value= 'Play Again';
            UIguessbtn.className += 'play-again'
        }




    }    

    
    


});


function setmessage(msg , color){
    UImsg.textContent = msg;
    UImsg.style.color = color;

}
function getrandomnum(min , max)
{
    let junk = (( Math.floor((Math.random() * ((max - min)+1)) + min))) 
    console.log(junk)
    return  junk ;
}

