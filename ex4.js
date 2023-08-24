var answer;
(function (answer) {
    answer["Rock"] = "pock";
    answer["Scissors"] = "scissors";
    answer["Paper"] = "Paper";
})(answer || (answer = {}));
function playGame(player1, player2) {
    if (!player1.chois || !player2.chois)
        return 'error';
    if (player1.chois === player2.chois)
        return 'tie';
    if (player1.chois === answer.Rock)
        return player2.chois === answer.Paper ? 'player2' : 'player1';
    if (player1.chois === answer.Scissors)
        return player2.chois === answer.Rock ? 'player2' : 'player1';
    else
        return player2.chois === answer.Scissors ? 'player2' : 'player1';
}
var player1 = {
    name: 'avi',
    chois: 'scissors'
};
var player2 = {
    name: 'ory',
    chois: 'Paper'
};
var play = playGame(player1, player2);
console.log(play);
//Output: player1 or player2 or tie
