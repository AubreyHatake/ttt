var markers = ["( :", ": ("]
var turns = 0;

function playGame(clickedDiv) 
{
    var players = [];
    players[0] = document.getElementById("yourName").value;
    players[1] = document.getElementById("opponentName").value;
    // console.log(players[0]);
    document.getElementById("game-message").innerHTML = players[turns] + "'s turn";
    clickedDiv.innerHTML = markers[turns];
    if (turns == 1) turns = 0; else turns = 1;
    clickedDiv.attributes[0].nodeValue = "";
}

function isWin()
{
    
}