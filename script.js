let gamebox = document.querySelectorAll(".gameBox");
let reset = document.querySelector(".reset");
let dialog = document.querySelector(".dialogdata");

let turn0 = true; // player 0's turn

const winning_pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

gamebox.forEach((element) => {
    element.addEventListener("click", () => {
        if (turn0) {
            element.innerHTML = "X";
            turn0 = false;
            if (turn0) {
                dialog.innerHTML = "1's Turn";
            }
            else {
                dialog.innerHTML = "O's Turn";
            }
        }
        else {
            element.innerHTML = "O";
            turn0 = true;
            if (turn0) {
                dialog.innerHTML = "1's Turn";
            }
            else {
                dialog.innerHTML = "O's Turn";
            }
        }
        element.disabled = true;
        checkWinner();
    })
})

const checkWinner = ()=>{
    for(let pattern of winning_pattern){
        let [a, b, c] = pattern;
        if(gamebox[a].innerHTML == gamebox[b].innerHTML && gamebox[b].innerHTML == gamebox[c].innerHTML && gamebox[a].innerHTML != ""){
            dialog.innerHTML = gamebox[a].innerHTML + " Won";
            gamebox[a].style.backgroundColor = "pink";
            gamebox[b].style.backgroundColor = "pink";
            gamebox[c].style.backgroundColor = "pink";
            dialog.innerHTML = gamebox[a].innerHTML + " Won";
            for (let i = 0; i< gamebox.length;i++){
                gamebox[i].disabled = true;
            }
            break;
        }
    }
}


reset.addEventListener('click', ()=>{
    window.location.reload();
})
