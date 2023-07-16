var randomNumber = Math.round(Math.random()*100);
console.log(randomNumber);
var submitButton = document.getElementById("submit");
var message = document.getElementById("message");
var msg
let lives=document.getElementById("lives");
let s=10;

submitButton.onclick = () => {
    console.log();
    var input = document.getElementById("input-number").value;
    s--;
    if(input == randomNumber)
    {
        location.href="./win.html";
    }
    else if(input > randomNumber)
    {
        msg = "Oops! Your guess is too high!"
    }
    else if(input < randomNumber)
    {
        msg = "Oops! Your guess is too low!"
    }
    if(s == 1)
    {
        submitButton.onclick = () =>
        {
            location.href="./lose.html";
        }
    }
    //message.innerHTML=msg;
    message.style.display ="inherit";
    message.innerHTML =msg;
    lives.innerHTML=`${s} lives more`;
}