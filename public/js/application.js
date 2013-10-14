  var player1_counter = 0
  var player2_counter = 0
  
  console.log("hiiii");
  $(document).on('keyup', function(event) {
    if (event.keyCode == 80) {
      $('#player1_strip .active').next().addClass("active");
      $('#player1_strip .active').prev().removeClass("active");
      player1_counter += 1;
      if (player1_counter == 9)
      {
         alert("Player 1 wins!!");
         window.location.reload();
      } 
    }
  });

  console.log("hiiii");
  $(document).on('keyup', function(event) {
    if (event.keyCode == 81) {
      $('#player2_strip .active').next().addClass("active");
      $('#player2_strip .active').prev().removeClass("active");
       player2_counter += 1;
       if (player2_counter == 9)
       {
         alert("Player 2 wins!!");
         window.location.reload();
        }  
    }
  });


if (player1_counter == 9)
{
  alert("Player 1 wins!!");
  console.log("Player 1 wins!");
}

// $("td:last-child").find(.active).append("<p>You win!</p>");


//P - 80
//Q - 81 - player 2
