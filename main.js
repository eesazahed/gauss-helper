const contestOptions = document.querySelector(".contest-options");
const contestInfo = document.querySelector(".contest-info");

const startTimer = () => {
  const timer = document.querySelector(".timer");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  timer.innerHTML = "Timer Started!";

  let sec = 0;

  const pad = (val) => (val > 9 ? val : "0" + val);

  const x = setInterval(() => {
    secondsEl.innerHTML = ":" + pad(++sec % 60);
    minutesEl.innerHTML = pad(parseInt(sec / 60, 10));
    if (sec > 3598) {
      timer.innerHTML = "Time's up!";
      clearInterval(x);
    }
  }, 1000);

  document.querySelector(".button").remove();
};

const showTest = (year) => {
  let video;
  if (year === 2021) {
    video =
      "https://www.youtube.com/watch?v=qXx94ysDNsI&list=PLoZ0gn0j87fdrKF2B2BR92h9Ct4pecG4t&index=70";
  } else if (year === 2020) {
    video =
      "https://www.youtube.com/watch?v=KzLghs-o36o&list=PLoZ0gn0j87fdrKF2B2BR92h9Ct4pecG4t&index=67";
  } else if (year === 2019) {
    video =
      "https://www.youtube.com/watch?v=SKfZvBYwEDk&list=PLoZ0gn0j87fdrKF2B2BR92h9Ct4pecG4t&index=64";
  } else if (year === 2018) {
    video =
      "https://www.youtube.com/watch?v=BN0iHmGFA7o&list=PLoZ0gn0j87fdrKF2B2BR92h9Ct4pecG4t&index=61";
  } else if (year === 2017) {
    video =
      "https://www.youtube.com/watch?v=ejfouMVW4ac&list=PLoZ0gn0j87fdrKF2B2BR92h9Ct4pecG4t&index=58";
  } else if (year === 2016) {
    video =
      "https://www.youtube.com/watch?v=IvH5laIW2WQ&list=PLoZ0gn0j87fdrKF2B2BR92h9Ct4pecG4t&index=55";
  } else if (year === 2015) {
    video =
      "https://www.youtube.com/watch?v=SUGmfbhNTbA&list=PLoZ0gn0j87fdrKF2B2BR92h9Ct4pecG4t&index=52";
  } else if (year === 2014) {
    video =
      "https://www.youtube.com/watch?v=7NlzEIePRIo&list=PLoZ0gn0j87fdrKF2B2BR92h9Ct4pecG4t&index=49";
  } else if (year === 2013) {
    video =
      "https://www.youtube.com/watch?v=n6RJ25xn_xY&list=PLoZ0gn0j87fdrKF2B2BR92h9Ct4pecG4t&index=46";
  } else if (year === 2012) {
    video =
      "https://www.youtube.com/watch?v=De0SYs9mqiI&list=PLoZ0gn0j87fdrKF2B2BR92h9Ct4pecG4t&index=43";
  } else if (year === 2011) {
    video =
      "https://www.youtube.com/watch?v=uonSJJ1wR6s&list=PLoZ0gn0j87fdrKF2B2BR92h9Ct4pecG4t&index=40";
  } else if (year === 2010) {
    video =
      "https://www.youtube.com/watch?v=XfVJ195ifjE&list=PLoZ0gn0j87fdrKF2B2BR92h9Ct4pecG4t&index=37";
  } else if (year === 2009) {
    video =
      "https://www.youtube.com/watch?v=KqLlNO0UNr0&list=PLoZ0gn0j87fdrKF2B2BR92h9Ct4pecG4t&index=34";
  } else if (year === 2008) {
    video =
      "https://www.youtube.com/watch?v=mqUvZB9DYCA&list=PLoZ0gn0j87fdrKF2B2BR92h9Ct4pecG4t&index=31";
  } else if (year === 2007) {
    video =
      "https://www.youtube.com/watch?v=qwqoP9Nvtjs&list=PLoZ0gn0j87fdrKF2B2BR92h9Ct4pecG4t&index=28";
  } else if (year === 2006) {
    video =
      "https://www.youtube.com/watch?v=MBc9XjVeags&list=PLoZ0gn0j87fdrKF2B2BR92h9Ct4pecG4t&index=25";
  } else if (year === 2005) {
    video =
      "https://www.youtube.com/watch?v=LRljR_zgVP4&list=PLoZ0gn0j87fdrKF2B2BR92h9Ct4pecG4t&index=22";
  } else if (year === 2004) {
    video =
      "https://www.youtube.com/watch?v=csg7smktVRM&list=PLoZ0gn0j87fdrKF2B2BR92h9Ct4pecG4t&index=19";
  } else if (year === 2003) {
    video =
      "https://www.youtube.com/watch?v=eOZQ0fXrp6c&list=PLoZ0gn0j87fdrKF2B2BR92h9Ct4pecG4t&index=16";
  } else if (year === 2002) {
    video =
      "https://www.youtube.com/watch?v=6vFbCY_U9-g&list=PLoZ0gn0j87fdrKF2B2BR92h9Ct4pecG4t&index=13";
  } else if (year === 2001) {
    video =
      "https://www.youtube.com/watch?v=ozExHEWzvKI&list=PLoZ0gn0j87fdrKF2B2BR92h9Ct4pecG4t&index=10";
  } else if (year === 2000) {
    video =
      "https://www.youtube.com/watch?v=8xLiPMYwCJg&list=PLoZ0gn0j87fdrKF2B2BR92h9Ct4pecG4t&index=7";
  } else if (year === 1999) {
    video =
      "https://www.youtube.com/watch?v=pUjtvx3F-yU&list=PLoZ0gn0j87fdrKF2B2BR92h9Ct4pecG4t&index=4";
  } else {
    video =
      "https://www.youtube.com/watch?v=X_MzXYoHSC8&list=PLoZ0gn0j87fdrKF2B2BR92h9Ct4pecG4t&index=1";
  }

  contestInfo.innerHTML = `
    <h2>Gauss Grade 8 (${year})</h2>
    <p><a href="https://www.cemc.uwaterloo.ca/contests/past_contests/${year}/${year}Gauss8Contest.pdf" target="_blank" rel="noreferrer">Do Contest</a></p>
    <p><a href="https://www.cemc.uwaterloo.ca/contests/past_contests/${year}/${year}GaussSolution.pdf" target="_blank" rel="noreferrer">See solutions</a></p>
    <p><a href="${video}" target="_blank" rel="noreferrer">See a video</a></p>
    <br />
    <hr />
    <br />
    <div class="button">
    <button onclick="startTimer();">Start Timer</button>
    </div>
    <div class="timer"></div>
    <p><span id="minutes"></span><span id="seconds"></span></p>
    `;
};

for (let i = 1998; i < 2022; i++) {
  const option = document.createElement("li");
  option.innerHTML = `<span onclick="showTest(${i});">Gauss Grade 8 (${i})</span>`;
  contestOptions.prepend(option);
}
