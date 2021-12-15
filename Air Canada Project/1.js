// counter
// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    // if the dislike button is hit, the counter goes down by 1
    } else if (styles.contains("increase")) {
      count ++;
      count ++;
    // if the like button is hit, the counter goes up by 2
    } else {
      count = 0;
    // if the reset button is hit, the counter value returns to 0
    }

    if (count > 0) {
      value.style.color = "white";
    // positive counter values are white
    }
    if (count < 0) {
      value.style.color = "red";
    // negative counter values are red
    }
    if (count === 0) {
      value.style.color = "black";
    // the counter value 0 is black
    }
    value.textContent = count;
  });
});

// colour flipper
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// 6 of these values will be combined to make a hex colour. Letters represent double digit numbers
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // The function will get 6 values that will be used to make a hex colour
  // console.log(hexColor);

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
// This rounds down to the nearest integer multipled by the hex length in order to get a value from 0 to f
}

//reviews 
const reviews = [
  {
    id: 1,
    name: "Jelly James",
    job: "Pilot",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "It is great to be a pilot for Air Canada. I get to fly to all sorts of new places.",
  },
  {
    id: 2,
    name: "Joan Gully",
    job: "Airport Manager",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "The staff and visitors here are always friendly, which makes my job really easy",
  },
  {
    id: 3,
    name: "Justin Horace",
    job: "Aerospace Engineer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Being an engineer at Air Canada is fun. They really let me express my creativity.",
  },
  {
    id: 4,
    name: "Jonas Flynn",
    job: "Flight Attendant",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      " Being a flight attendant is sick! I get to take a lot of breaks during the flight, and we get to eat as many airplane peanuts as we want.",
  },
];

// this selects the image, employee, job, and info
const img = document.getElementById("person-img");
const author = document.getElementById("employee");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;
// this makes the default person Jelly James

// this loads the intial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
// this variable gets the image, job, and review of the correct person.
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// this button allows you to go forward and see the second, third, and fourth employee. Once the button hits employee 4, it goes back to employee 1

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// this button allows you to go backwards and see the fourth, third, and second employee in that order. Once the button hits employee 4, it goes back to employee 1

//animation
function myMove() {
  let id = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
  // the airplane initially starts at 0
  clearInterval(id);
  id = setInterval(frame, 1);
  // the animation occurs once every millisecond
  function frame() {
    if (pos == 1920 ) {
      clearInterval(id);
    // once the airplace reachs the position 1920, the animation will stop
    } else {
      pos++; 
      elem.style.left = pos + "px"; 
    // if the position is not 1920, the airplace will move a pixel away from the left. 
    }
  }
}

// toggle button
const navToggle = document.querySelector(".nav_toggle");
const buttons = document.querySelector(".nav_buttons");

navToggle.addEventListener("click", function () {
  buttons.classList.toggle("show-buttons");
});
