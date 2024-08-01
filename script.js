


const gameArea = document.querySelector(".game");
      const button = document.querySelector(".btn");
      const message = document.querySelector(".message");
      let gamePlay = false;
      let score = 0
      button.addEventListener("click", function () {
        if (!gamePlay) {
          gamePlay = true;
          gameArea.innerHTML = ""
          score = 0;
          maker();
          button.innerHTML = "check Combo";
        } else {
          console.log("checker");
          const Numbers = document.querySelectorAll(".numb");
          score++;
          win = 0;
          
          for (let x = 0; x < Numbers.length; x++) {
            if (Numbers[x].value == Numbers[x].correct) {
              Numbers[x].style.background = "green";
              Numbers[x].style.color = "white";
              win++;
            } else {
              let color =
                Numbers[x].value > Numbers[x].correct ? "blue" : "red";
              Numbers[x].style.background = color;
              Numbers[x].style.color = "black";
            }
            if (win == Numbers.length) {
              gameEnd();
            }
          }
        }
      });
      function gameEnd() {
        message.innerHTML = "your combo is => " + score;
        gamePlay = false;
        button.innerHTML = "restart"
      }

      function maker() {
        for (let i = 0; i < 6; i++) {
          let el = document.createElement("input");
          el.setAttribute("type", "Number");
          el.max = 9;
          el.min = 0;
          el.size = 1;
          el.style.width = "50px";
          el.classList.add("numb");
          el.correct = Math.floor(Math.random() * 10);
          el.value = 0;
          el.order = 1;
          console.log(el);
          gameArea.appendChild(el);
        }
      }
