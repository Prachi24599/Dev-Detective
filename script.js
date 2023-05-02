"use strict";
//variables
const searchbar = document.querySelector(".searchbar-container");
const profilecontainer = document.querySelector(".profile-container");
const root = document.documentElement.style;
const get = (param) => document.getElementById(`${param}`);
const url = "https://api.github.com/users/";
const noresults = get("no-result");
const btnmode = get("btn-mode");
const modetext = get("mode-text");
const modeicon = get("mode-icon");
const btnsubmit = get("submit");
const input = get("input");
const avatar = get("avatar");
const userName = get("name");
const user = get("user");
const date = get("date");
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const bio = get("bio");
const repos = get("repos");
const followers = get("followers");
const following = get("following");
const user_location = get("location");
const page = get("page");
const twitter = get("twitter");
const company = get("company");
let darkMode = false;

//Event Listeners
btnsubmit.addEventListener("click", function () {
  if (input.value != "") {
    getUserData(url + input.value);
  }
});
btnmode.addEventListener("click", function () {
  if (darkMode) {
    lightModeProperties();
  } else {
    darkModeProperties();
  }
});

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    if (input.value != "") {
      getUserData(url + input.value);
    }
  }
});

input.addEventListener("input", function () {
  noresults.style.display = "none";
});
