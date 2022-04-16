// fetching the json data.
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => console.log(data));

// variables declarations for dom ids
const daily_btn = document.getElementById("daily");
const weekly_btn = document.getElementById("weekly");
const monthly_btn = document.getElementById("monthly");

const work_current_time = document.getElementById("work-current-time");
const play_current_time = document.getElementById("play-current-time");
const study_current_time = document.getElementById("study-current-time");
const exercise_current_time = document.getElementById("exercise-current-time");
const social_current_time = document.getElementById("social-current-time");
const selfCare_current_time = document.getElementById("selfCare-current-time");

const work_previous_time = document.getElementById("work-previous-time");
const play_previous_time = document.getElementById("play-previous-time");
const study_previous_time = document.getElementById("study-previous-time");
const exercise_previous_time = document.getElementById(
  "exercise-previous-time"
);
const social_previous_time = document.getElementById("social-previous-time");
const selfCare_previous_time = document.getElementById(
  "selfCare-previous-time"
);

const lower_text = document.querySelector(".lower-text");
const test = document.querySelectorAll(".test");
lower_text.addEventListener("click", (e) => {
  test.forEach((element) => {
    if (element.className === "active") {
      e.target.classList.toggle("inactive");
    } else {
      e.target.classList.toggle("active");
    }
  });
});
