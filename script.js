// Your code here
$( document ).ready(function() {
  console.log("DOM is ready!");

  var playerTurn = "X";
  var array =[0,0,0,
              0,0,0,
              0,0,0];
  var moves = 8;

  $button = $('td');

  $('#reset').click(function (){reset()});
  $button.click(function(){
    if ($(this).html() == '' && moves > 0) {
      $(this).html(playerTurn);
      if (playerTurn=="X"){
        array[parseInt($(this).attr("data-num"))] = 1;
      } else {
        array[parseInt($(this).attr("data-num"))] = -1;
      }
      $(this).toggleClass(playerTurn);
      checkWin();
      switchTurn();
      moves--;
    } else {
      if (moves <=0){
        if (setTimeout(confirm("Its a draw, do you want to play again?")),10) {
          reset();
        }
      }

    }
  })

  function switchTurn() {
    if (playerTurn == "X") {
      playerTurn = "O";
      $('.playerTurn').html("It is O's Turn");
    } else {
      playerTurn = "X";
      $('.playerTurn').html("It is X's Turn");
    }
  }
  function checkWin() {

    var winConditions =[[0,1,2], //rows
                        [3,4,5],
                        [6,7,8],
                        [0,3,6], // cols
                        [1,4,7],
                        [2,5,8],
                        [0,4,8], // diags
                        [2,4,6]];
    $.each(winConditions,function(){
      var sum = 0;
      $.each(this,function(){sum+=array[this];});
      if (sum>=3){
        // $('td')[this].css('background-color', 'red');
        $('.playerTurn').html("Player "+playerTurn+" wins!");
        console.log("p1 win");
        // if (setTimeout(confirm("Congratulations, Player "+playerTurn+" wins! Do you want to play again?")),10) {
        //   reset();
        // }
      } else if (sum <= -3) {

        console.log("p2 win");
        $('.playerTurn').html("Player "+playerTurn+" wins!");
        // if (setTimeout(confirm("Congratulations, Player "+playerTurn+" wins! Do you want to play again?")),10) {
        //   reset();
        // }

      } else {
      }
    })

  }
  function reset() {
    console.log('ive been Reset');
    moves = 9;
    $button.removeClass()
    $button.empty()
    array = [0,0,0,0,0,0,0,0,0]
    $('.playerTurn').html("It is "+playerTurn+"'s Turn");
  }
});
