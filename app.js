var timer = 60;
var rnhit;
const runtimer = () => {
  var timeclear = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else if (timer == 0) {
      document.querySelector(
        "#pbottom"
      ).innerHTML = `<h1>Game Over! <br/> Your final score is ${score} </h1> 
    `;
    } else {
      clearInterval(timeclear);
    }
    console.log(timeclear);
  }, 1000);
};
const makebubble = () => {
  var clutter = "";
  for (let i = 0; i <= 153; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">
      ${rn}
      </div>`;
  }
  document.querySelector("#pbottom").innerHTML = clutter;
};

var score = 0;
const increasescore = () => {
  score += 10;
  document.querySelector("#scoreincrease").textContent = score;
};

document.querySelector("#pbottom").addEventListener(
  "click",
  (detils = (d) => {
    const Clicknumber = Number(d.target.textContent);
    console.log(Clicknumber);
    if (rnhit === Clicknumber) {
      increasescore();
      gethitbubble();
      makebubble();
    } else if (timer == 0) {
      remove(alert(`click the right hit ${rnhit}`));
    } else {
      alert(`click the right hit ${rnhit}`);
    }
  })
);

const gethitbubble = () => {
  rnhit = Math.floor(Math.random() * 10);
  document.querySelector("#newhit").textContent = rnhit;
};
runtimer();
gethitbubble();
makebubble();
// increasescore();
