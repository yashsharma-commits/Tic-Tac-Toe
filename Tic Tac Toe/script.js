 let buttons=document.querySelectorAll(".btn")   //  These are the buttons used in game
let turnx=true
let count=5;    //The timer count after a win

const wincondition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],             //The win condition which decide if any win or not
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

buttons.forEach((btn=>{
    btn.addEventListener("click",()=>{
        turnx=!turnx
        if(turnx){
            btn.innerText="X"
            document.querySelector(".turn").innerHTML=`O's Turn`
            
        }
        else{
            btn.innerText="O"
            document.querySelector(".turn").innerHTML=`X's Turn`

        }
        btn.disabled=true
        btn.style.color="black"
        checkwinner()
    })
}))

const checkwinner=()=>{
    for(let pattern of wincondition){
        console.log(buttons[pattern[0]].innerText,buttons[pattern[1]].innerText,buttons[pattern[2]].innerText)
        let pos1=buttons[pattern[0]].innerText
        let pos2=buttons[pattern[1]].innerText
        let pos3=buttons[pattern[2]].innerText

        if(pos1,pos2,pos3){
            if(pos1==pos3 && pos2==pos3){
            document.querySelector(".turn").innerHTML=`${pos1} Won the Game`

                autoreset();

                
                
            }
        }
    }
}

const resetgame=()=>{


    buttons.forEach(btn=>{
        btn.innerHTML=""
        btn.disabled=false
    })
    

}

const autoreset=()=>{
   let intervalid= setInterval(() => {
        count--
        document.querySelector(".timer").innerText=`${count}`
        if(count<=0){
            clearInterval(intervalid)
        document.querySelector(".timer").innerText=""
        count=5;

            resetgame();
      document.querySelector(".turn").innerHTML=`X's Turn`
        }


    }, 1000);

}

    document.querySelector(".reset-btn").addEventListener("click",()=>{
             resetgame();
    })

