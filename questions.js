var questions = [
  {
    titles: "In what State is Miami in? ",
    choices: ["Georgia", "New York", "Minnesotta", "Florida"],
    answer: "alerts"
  },
  {
    titles: "What is peanut butter? ",
    choices: ["strings", "jbjsds", "kjbdjsbsd", "kjnbdsjb"],
    answer: "alerts"
  },
  {
    titles: "commonly used data types Do Not include ",
    choices: ["strings", "papa", "food", "progress"],
    answer: "alerts"
  },
  {
    titles: "commonly used data types Do Not include ",
    choices: ["strings", "jbjsds", "kjbdjsbsd", "kjnbdsjb"],
    answer: "alerts"
  },
  {
    titles: "commonly used data types Do Not include ",
    choices: ["strings", "jbjsds", "kjbdjsbsd", "kjnbdsjb"],
    answer: "alerts"
  }
];

var questionTag = document.getElementById("questions");
questionTag.innerText = questions[0].titles;

var answer1 = document.getElementById("ans1");
answer1.innerText = questions[0].choices[0];

var answer2 = document.getElementById("ans2");
answer2.innerText = questions[0].choices[1];

var answer3 = document.getElementById("ans3");
answer3.innerText = questions[0].choices[2];

var answer4 = document.getElementById("ans4");
answer4.innerText = questions[0].choices[3];

//var correctAnswer = choices[3];

var wrongAnswer = document
  .getElementById("ans1")
  .addEventListener("click", function() {
    document.getElementById("post").innerHTML = "Wrong";
  });
var wrongAnswer = document
  .getElementById("ans2")
  .addEventListener("click", function() {
    document.getElementById("post").innerHTML = "Nope";
  });
var wrongAnswer = document
  .getElementById("ans3")
  .addEventListener("click", function() {
    document.getElementById("post").innerHTML = "Not Even Close";
  });
var rightAnswer = document
  .getElementById("ans4")
  .addEventListener("click", function() {
    document.getElementById("post").innerHTML =
      "Miami is in the southern east region of Dade County, which belongs to the state of Florida";

    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Correct";
    document.body.appendChild(btn);
  });

document.getElementById("BUTTON").addEventListener("click", function() {
  alert("goog");
});
