// Variables
var markers = ["( :", ": ("]
var turns = 0;
var players = [];
var totals = [0,0];
var winCodes = [7, 56, 73, 84, 146, 273, 292, 448];
var gameOver = false;
// import audio to use for winning and losing sounds
let winSound = new Audio('./audio/Win.mp3');
let tieSound = new Audio('./audio/Tie.mp3');



function startGame()
{
        var counter = 1;
        var board = document.getElementById("game-board");
        var innerDivs = "";
        for (i = 1; i <=3; i++)
        {
                innerDivs += '<div id="square-' + i +'">';
        
                for (j = 1; j <=3; j++)
                {
                        innerDivs += '<div onclick="playGame(this,' + counter + ');"></div>';
                        counter *=2;
                    }
                    innerDivs += '</div>';
                }
                board.innerText = innerDivs;
            
            
            }
            
            
            function playGame(clickedDiv, divValue) 
            {
                // get the value of the user's input
                players[0] = document.getElementById("yourName").value;
                players[1] = document.getElementById("opponentName").value;   
                // display user names on the score board
                document.getElementById("playerOne").innerText = players[0];
                document.getElementById("playerTwo").innerText = players[1];
                // if the game is not over, this code helps display win and losing messages
                if (!gameOver) {
                    clickedDiv.innerText = markers[turns];
                    totals[turns] += divValue;
                    // isWin is a function being called to check for a winner 
                    if (isWin())
                    {
                        document.getElementById("game-message").innerText = players[turns] + " Wins!";
                        winSound.play(); 
                    }
                    else if (gameOver)
                    {
                        document.getElementById("game-message").innerText = players[turns] + " Evil Prevails!!";
                        tieSound.play();
                    }
                    else
                    {
                        // toggels players turns
                        if (turns == 1) turns = 0; else turns = 1;
                        // prevent player clicking on same div again 
                        clickedDiv.attributes[0].nodeValue = "";
                        // displays whose turn it is 
                        document.getElementById("game-message").innerText = players[turns] + "'s turn";
                        // if the game is over, display play again button
                        if (gameOver!=true)
                        {
                            // play again button used to display the play again button
                            var playAgain = document.getElementById("playAgain");
                            playAgain.style.opacity = 1.7; 
                            // score board variable used to display score board
                            var scoreBoardd = document.getElementById("scoreBoardd");
                            scoreBoardd.style.opacity = 1.7;
                        }
                    }
                }
            }
            
            function countScore(turns, gameOver)
            {
                 // win and tie variables
                 var player1Scorewin = 0;
                 var player2Scorewin = 0;
                 var player1Scoretie = 0;
                if (turns == 1, isWin())
                        {
                            player1Scorewin++;
                            document.getElementById("playeroneWin").innerText = player1Scorewin;
                        }
                        else if (turns == 1, gameOver)
                        {
                            player1Scoretie++;
                            document.getElementById("playeroneTie").innerText = player1Scoretie;
                        }
                        else
                        {
                            player2Scorewin++;
                            document.getElementById("playertwoWin").innerText = player2Scorewin;
                        }
            }
            
            // win code
            function isWin()
            {
                for (i = 0; i < winCodes.length; i++)
                {
                    if ((totals[turns] & winCodes[i]) == winCodes[i]) { gameOver = true; return true;}
                }
                if (totals[0] + totals[1] == 511){gameOver = true;}
                
                return false;
            }