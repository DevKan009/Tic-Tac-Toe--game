window.addEventListener('load', function () {
    let turn = 'x';
    let p = document.querySelector("p")
    let cells = document.querySelectorAll(".cell");
    let btn = document.getElementsByClassName("btn")[0];
    p.innerText = "Turn of X";
    // let turn="x";
    const iswin = () => {
        let cells = document.querySelectorAll(".cell");
        let dec = document.querySelectorAll(".turn")[0];
        let win = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        win.forEach(e => {
            if ((cells[e[0]].innerText === cells[e[1]].innerText) && (cells[e[2]].innerText === cells[e[1]].innerText) && (cells[e[0]].innerText !== "")) {
                dec.innerText = cells[e[0]].innerText + "won !";
            }
        })

    }

    for (let item of cells) {
        item.addEventListener('click', (event) => {
            // console.log(event);
            // event.target.innerText= "hello1";
            if (event.target.innerText == "X" || event.target.innerText == "O") {

            }
            else if (turn == 'x') {
                event.target.innerText = "X";
                turn = 'o';
                p.innerText = `Turn of ${turn}`;
            } else {
                event.target.innerText = "O";
                turn = 'x';
                p.innerText = `Turn of ${turn}`;

            }
            iswin();

        })
    }

    btn.addEventListener('click', () => {
        this.location.reload();

    });

    console.log("something works atleast!");
    btn.addEventListener('click', (event) => {
        console.log("button was clicked");
    })
})

