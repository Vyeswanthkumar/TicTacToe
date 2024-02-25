let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true; //PlayerO, PlayerX
let count=0; //To track draw

const winPatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame =()=>
{
    turnO=true;
    count=0;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO)
        {
            //playerO
            box.innerHTML="<span class='player-symbol1'>O</span>";
            turnO=false;
        }else{
            //playerX
            box.innerHTML="<span class='player-symbol'>X</span>";
            turnO=true;
        }
        box.disabled=true;
        count++

        let isWinner=checkWinner();
        if(count===9&&!isWinner)
        {
            gameDraw();
        }
    })
})

const gameDraw = () =>{
    msg.innerText="Game was a Draw..";
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = ()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};

const enableBoxes = ()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner = (winner)=>{
    msg.innerHTML=`Congratulations the winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = ()=>{
    for(let pattern of winPatterns)
    {
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !="")
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
                showWinner(pos1Val);
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);