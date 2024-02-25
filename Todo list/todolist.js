// var data=document.querySelector("input").value;
// console.log(data);
function add()
{
    var data=document.querySelector("input").value;
    var inputTag=document.createElement("input");
    var but=document.createElement("button");
    var but1=document.createElement("button");
    document.querySelector("span").appendChild(inputTag);
    inputTag.style.width="180px"
    document.querySelector("span").appendChild(but);
    document.querySelector("span").appendChild(but1);
    but1.innerText="Delete"
    // but1.style.width="50px"
    // but.style.width="50px"
    but.style.color="white"
    but.innerText="Mark"
    but.addEventListener("onclick",del)
    but1.style.color="white"
    inputTag.value=data;
    inputTag.style.marginTop="10px"
    // inputTag.style.marginRight="5px"
}
var allBut=document.querySelectorAll("button");
console.log(allBut)
// allBut[0].addEventListener("onclick",del);
function del()
{
    // addEventListener.but1=onclick
    var allInp=document.querySelectorAll(input);
    allInp.style.display="none"
}
// allBut[2].addEventListener("onclick",col);
function col()
{
    var allInp=document.querySelectorAll("input");
    allInp[1].style.backgroundColor="lightcoral"
}