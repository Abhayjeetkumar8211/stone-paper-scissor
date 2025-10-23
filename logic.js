let usrChoice = 0;
        let symbols = document.querySelectorAll("button");
        let result = document.getElementById("result");
        let usr_history = document.getElementById("usr_history");
        let comp_history = document.getElementById("comp_history");
        let round_result = document.getElementById("round_result");
        let round_no = document.getElementById("rounds");
        let win = document.getElementById("usr-win");
        symbols.forEach((symbol, idx) => {
            symbol.addEventListener("click", () => {
                userChoice = idx;
                if (idx == 0) {
                    console.log("User Choice : stone");
                    usr_history.innerText += `\nStone`;
                    compChoice = comp();
                    if (compChoice == 0) {
                        console.log("Computer Choice : stone");
                        comp_history.innerText += `\nStone`;
                    }
                    else if (compChoice == 1) {
                        console.log("Computer Choice : paper");
                        comp_history.innerText += `\nPaper`;
                    }
                    else if (compChoice == 2) {
                        console.log("Computer Choice : scissor");
                        comp_history.innerText += `\nScissor`;
                    }
                    chkwin(idx, compChoice);
                }
                else if (idx == 1) {
                    console.log("User Choice : paper");
                    usr_history.innerText += `\nPaper`;
                    compChoice = comp();
                    if (compChoice == 0) {
                        console.log("Computer Choice : stone");
                        comp_history.innerText += `\nStone`;
                    }
                    else if (compChoice == 1) {
                        console.log("Computer Choice : paper");
                        comp_history.innerText += `\nPaper`;

                    }
                    else if (compChoice == 2) {
                        console.log("Computer Choice : scissor");
                        comp_history.innerText += `\nScissor`;
                    }
                    chkwin(idx, compChoice);
                }
                else if (idx == 2) {
                    console.log("User Choice : stone");
                    usr_history.innerText += `\nScissor`;
                    compChoice = comp();
                    if (compChoice == 0) {
                        console.log("Computer Choice : stone");
                        comp_history.innerText += `\nStone`;
                    }
                    else if (compChoice == 1) {
                        console.log("Computer Choice : paper");
                        comp_history.innerText += `\nPaper`;

                    }
                    else if (compChoice == 2) {
                        console.log("Computer Choice : scissor");
                        comp_history.innerText += `\nScissor`;
                    }
                    chkwin(idx, compChoice);
                }
            });
        });
        function comp() {
            return Math.floor(Math.random() * 3)
        }
        let user = document.getElementById("usr_score");
        let computerl = document.getElementById("comp_score");
        let usr_score = 0;
        let comp_score = 0;
        let round = 0;
        function score_update(player, plus) {
            if (player == "user") {
                usr_score += 1;
                console.log(`User score:${usr_score}\nComputer score:${comp_score}`);
                user.innerText = `${usr_score}`;
                round += 1;
                round_no.innerText += `\n${round}`;
            }
            else if (player == "computer") {
                comp_score += 1;
                console.log(`Computer score:${comp_score}\nUser score:${usr_score}`);
                computerl.innerText = `${comp_score}`;
                round += 1;
                round_no.innerText += `\n${round}`;
            }
            else if (player == "") {
                round += 1;
                round_no.innerText += `\n${round}`;
            }
        }
        let player = "";
        function chkwin(usr, comp) {
            if (usr == comp) {
                console.log("Its a draw");
                result.innerText = "It's a Draw!";
                round_result.innerText += `\nDraw`;
                score_update("", 0);
                // win.classList.add("hide");
            }
            else if (usr == 0 && comp == 2) {
                console.log("User won");
                result.innerText = "You Won!";
                player = "user";
                // win.classList.remove("hide");
                score_update(player, 1);
                round_result.innerText += `\nYou`;
            }
            else if (usr == 1 && comp == 0) {
                console.log("User won");
                result.innerText = "You Won!";
                player = "user";
                // win.classList.remove("hide");
                round_result.innerText += `\nYou`;
                score_update(player, 1);
            }
            else if (usr == 2 && comp == 1) {
                console.log("User won");
                result.innerText = "You Won!";
                player = "user";
                // win.classList.remove("hide");
                round_result.innerText += `\nYou`;
                score_update(player, 1);
            }
            else {
                console.log("Computer won");
                result.innerText = "Computer Won!";
                player = "computer";
                round_result.innerText += `\nComputer`;
                score_update(player, 1);
                // win.classList.add("hide");
            }
        }
        let reset=document.getElementById("reset");
        reset.addEventListener("click",()=>{
            usr_score=0;
                console.log(`User score:${usr_score}\nComputer score:${comp_score}`);
                user.innerText = `${usr_score}`;
                round=0;
                round_no.innerText="";
                round_result.innerText="";
                comp_score=0;
                computerl.innerText = `${comp_score}`;
                comp_history.innerText="";
                usr_history.innerText="";
                result.innerText = "";
        })