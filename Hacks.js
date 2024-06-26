// Dependencies
window.dragElement = e => { var n = 0, t = 0, o = 0, u = 0; function d(e) { (e = e || window.event).preventDefault(), o = e.clientX, u = e.clientY, document.onmouseup = m, document.onmousemove = l } function l(d) { (d = d || window.event).preventDefault(), n = o - d.clientX, t = u - d.clientY, o = d.clientX, u = d.clientY, e.style.top = e.offsetTop - t + "px", e.style.left = e.offsetLeft - n + "px" } function m() { document.onmouseup = null, document.onmousemove = null } document.getElementById(e.id + "header") ? document.getElementById(e.id + "header").onmousedown = d : e.onmousedown = d };
window.showToast=(t,e)=>{let o=document.createElement("div"),d=document.createElement("div");o.style.cssText=`position: fixed; bottom: -100px; right: 20px; background-color: ${e||"green"}; color: white; border-radius: 10px; z-index: 9999; transition: bottom 0.5s ease-in-out; max-width: 300px; padding: 10px;`,d.style.cssText="font-size: 18px; word-wrap: break-word;",d.textContent=t,o.appendChild(d),document.body.appendChild(o),setTimeout(()=>{o.style.bottom="20px"},100),setTimeout(()=>{o.style.bottom=`-${o.offsetHeight+20}px`,setTimeout(()=>{document.body.removeChild(o)},500)},Math.max(3e3,50*t.length))};
window.currQues = 0;



// Watermark
var copyrightDiv = document.createElement('div');
copyrightDiv.style.cssText = 'position: fixed; bottom: 10px; width: 100%; color: black; font-size: 12px; text-align: center;';
copyrightDiv.textContent = 'Made By Anchovy';
document.body.appendChild(copyrightDiv);

// Welcome Toast
if (document.getElementsByClassName("username_display")[0]) {
  showToast("Welcome back to Brainify, "+document.getElementsByClassName("username_display")[0].innerHTML+"!", "green")
}

// Gui
var UI = document.createElement("div");
UI.innerHTML = `<div id="Brainify" style="position: absolute; top: 158px; left: 132px; padding: 4pt; background: linear-gradient(to top, rgba(0, 255, 0), rgb(0, 255, 0)); color: rgb(0, 255, 0); font-size: 15px; backdrop-filter: blur(5px); z-index: 9999; border-radius: 17pt; box-shadow: rgba(0, 255, 0, 0.6) 0px 0px 10px; width: 300px; display: block;">
<div class="dh-box" style="background-color: rgba(0, 0, 0, 1); border-radius: 15pt; backdrop-filter: blur(5px); padding: 40px;">


    <div class="Brainifyheader" style="
    font-weight: bold; text-align: center; font-size: 50px; cursor: move; background: linear-gradient(to left, rgba(0, 255, 0), rgb(0, 255, 0)); color: transparent; font-family: 'Roboto', sans-serif; font-weight: 500; 
        -webkit-background-clip: text; line-height:80px; margin-top:-35px; text-align: center;">
      Brainify
    </div>
        <div style="padding: 1.3pt; background: linear-gradient(to left, rgba(0, 255, 0), rgb(0, 255, 0)); color: rgb(0, 255, 0); margin-bottom: 10px; border-radius: 12px;">
    <div class="modMenuItem" style="cursor: pointer; padding: 12px; background-color: rgba(16, 16, 24, 255); border-radius: 12px; text-align: center; transition: all .2s ease-out;">
      <span id="skip" style="font-family: 'Roboto', sans-serif; letter-spacing: 1px; font-weight: 500;">Quiz Skipper</span>
    </div>
    </div>
    <br>
    <h4>  Made By Anchovy 👍
          YT:@SHOCKanchovy</h4>
</div>
`;
document.body.appendChild(UI);
dragElement(UI.firstElementChild);

// Buttons
document.getElementById("skip").addEventListener("click", () => {

  if (!document.getElementById("quiz_intro")) {showToast("Go to a quiz!", "red");return}

  if (quiz_obj.player.options.quiz_mode == "review" && document.getElementById("question_text").innerHTML == quiz_obj.player.options.quiz_content.quizFeature.questions[0].questionText) {
    window.skip()
    showToast("Do NOT click anything until the bot is finished.")
    const loop = setInterval(function () {
      if (window.currQues < 10) {
        window.skip()
      } else {
        clearInterval(loop);
        window.currQues = 0;
        showToast("Done!", "green")
      }
    }, 4000);

  } else if (quiz_obj.player.options.quiz_mode == "graded" && document.getElementById("question_text").innerHTML == quiz_obj.player.options.quiz_content.quizFeature.questions[0].questionText) {

    showToast("Do NOT click anything until the bot is finished.")
    window.skip()
    const loop = setInterval(function () {
      if (window.currQues < 10) {
        window.skip()
      } else {
        clearInterval(loop);
        window.currQues = 0;
        showToast("Done!", "green")
      }
    }, 1000);

  } else {
    showToast("Go the first question of a quiz!", "red")
  }

});

// Functions
window.skip = () => {
  window.quizHook = quiz_obj.player.options.quiz_content.quizFeature.questions[window.currQues];
  if (quizHook.correctAnswer == 0) {
    // A
    window.currQues++;
    document.getElementById("answer_a").click()
  }
  if (quizHook.correctAnswer == 1) {
    // B
    window.currQues++;
    document.getElementById("answer_b").click()
  }
  if (quizHook.correctAnswer == 2) {
    // C
    window.currQues++;
    document.getElementById("answer_c").click()
  }
  if (quizHook.correctAnswer == 3) {
    // D
    window.currQues++;
    document.getElementById("answer_d").click()
  }
}
