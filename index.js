const gridContainer = document.querySelector("main")
const playerOneLabel = document.querySelector(".player1")
const playerTwoLabel = document.querySelector(".player2")
let gameWon = false
let score = {
    player1: [],
    player2: [],
    findWinner: () => {
        const result = document.createElement("div")
        result.classList.add("result-container")
        checkWinner(score.player1, score.player2, result)
    },                  
    clearScore: () => {
        gameWon = false
        score.player1.splice(0, score.player1.length)
        score.player2.splice(0, score.player2.length)
    }
}
// make 3 x 3 grid
const makeGrid = (
    () => {
        for (let i = 0; i < 9; i++)
        {
            const grid = document.createElement("div");
            grid.classList.add("cell")
            grid.setAttribute("id", `${i}`);
            gridContainer.appendChild(grid)
        }
    }
)();

// player factory
const playerFactory = (marker) => {
    let turn = false
    function changeTurn(player) {
        if (player.turn)
        {
            player.turn = false
        } else
        {
            player.turn = true
        }
    }
    return{marker, changeTurn, turn}
}

// create players
const player1 = playerFactory("X");
player1.changeTurn(player1)
const player2 = playerFactory("O");

// event listeners
const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
    cell.addEventListener("click", () => {
       game(cell)
    });
});
// [x, o, x]
// [x,x,o]
// [o,_,x]

function game(cell) {
    if (!gameWon)
    {
        if (player1.turn)
        {
            if (cell.textContent === "")
            {
                cell.textContent = player1.marker
                player1.changeTurn(player1)
                player2.changeTurn(player2)
                playerOneLabel.classList.remove("green-light")
                playerTwoLabel.classList.add("green-light")
                score.player1[parseInt(cell.id)] = player1.marker
                score.findWinner()
            }
            
        } else if (player2.turn)
        {
            if (cell.textContent === "")
            {
                cell.textContent = player2.marker
                player2.changeTurn(player2)
                player1.changeTurn(player1)
                playerOneLabel.classList.add("green-light")
                playerTwoLabel.classList.remove("green-light")
                score.player2[parseInt(cell.id)] = player2.marker // score.key[<specificIndex>] = marker
                score.findWinner()
            }
            
        }
    }
}

function checkWinner(player1, player2, result) {
    let records = [player1, player2]
    for (let i = 0; i < records.length; i++)
    {
        
            if (records[i][0] && records[i][1] && records[i][2])
            {
                if (records[i]===records[0])
                {
                    result.textContent = "Winner, player 1"
                    document.querySelector("body").appendChild(result)
                    gameWon = true
                } else
                {
                    result.textContent = "Winner, player 2"
                    document.querySelector("body").appendChild(result)
                    gameWon = true
                }
                
            } else if (records[i][3] && records[i][4] && records[i][5])
            {
                if (records[i]===records[0])
                {
                    result.textContent = "Winner, player 1"
                    document.querySelector("body").appendChild(result)
                    gameWon = true
                } else
                {
                    result.textContent = "Winner, player 2"
                    document.querySelector("body").appendChild(result)
                    gameWon = true
                }
                
            } else if (records[i][6] && records[i][7] && records[i][8])
            {
                
                if (records[i]===records[0])
                {
                    result.textContent = "Winner, player 1"
                    document.querySelector("body").appendChild(result)
                    gameWon = true
                } else
                {
                    result.textContent = "Winner, player 2"
                    document.querySelector("body").appendChild(result)
                    gameWon = true
                }
                
                
                
            } else if (records[i][0] && records[i][3] && records[i][6])
            {
                result.textContent = "Winner, player 1"
                document.querySelector("body").appendChild(result)
                gameWon = true
            } else if (records[i][1] && records[i][4] && records[i][7])
            {
                if (records[i]===records[0])
                {
                    result.textContent = "Winner, player 1"
                    document.querySelector("body").appendChild(result)
                    gameWon = true
                } else
                {
                    result.textContent = "Winner, player 2"
                    document.querySelector("body").appendChild(result)
                    gameWon = true
                }
                
            } else if (records[i][2] && records[i][5] && records[i][8])
            {
                if (records[i]===records[0])
                {
                    result.textContent = "Winner, player 1"
                    document.querySelector("body").appendChild(result)
                    gameWon = true
                } else
                {
                    result.textContent = "Winner, player 2"
                    document.querySelector("body").appendChild(result)
                    gameWon = true
                }
                
            } else if (records[i][0] && records[i][4] && records[i][8])
            {
                if (records[i]===records[0])
                {
                    result.textContent = "Winner, player 1"
                    document.querySelector("body").appendChild(result)
                    gameWon = true
                } else
                {
                    result.textContent = "Winner, player 2"
                    document.querySelector("body").appendChild(result)
                    gameWon = true
                }
                
            } else if (records[i][2] && records[i][4] && records[i][6])
            {
                if (records[i]===records[0])
                {
                    result.textContent = "Winner, player 1"
                    document.querySelector("body").appendChild(result)
                    gameWon = true
                } else
                {
                    result.textContent = "Winner, player 2"
                    document.querySelector("body").appendChild(result)
                    gameWon = true
                }
                
            }
        
    }
}

document.querySelector(".reset-btn").addEventListener("click", () => {
    cells.forEach(cell => { cell.textContent = ""; score.clearScore()});
});