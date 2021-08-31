alert("Начнем!");
alert("3");
alert("2");
alert("1");
alert("GO!");


const bol = document.getElementById("bol");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
  jump();
});

function jump () {
  if (bol.classList != "jump") {
      bol.classList.add("jump")
  }
  setTimeout(function() {
    bol.classList.remove("jump")

  }, 300)
}

let isAlive = setInterval( function() {
  let bolTop = parseInt(window.getComputedStyle(bol).getPropertyValue("top"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if (cactusLeft < 50 && cactusLeft > 0 && bolTop >= 140) {
    alert("YOU DIED!!!")
  }
}, 10)
