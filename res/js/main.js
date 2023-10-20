const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoclickerUpgrade = document.getElementById("autoclickerUpgrade");

let numberOfCookies = 0;
let cookieincreaseNumber = 1;
let cookieAutoclickerincreaseNumber = 0;
let autoclickerInterval;
let clickUpgradePrice = 50;

cookie.onclick = () => {
  numberOfCookies += cookieincreaseNumber;

  counter.innerText = "Sušenky: " + numberOfCookies;
};

clickUpgrade.onclick = () => {
  if (numberOfCookies >= clickUpgradePrice) {
    numberOfCookies -= clickUpgradePrice;
    clickUpgradePrice *= 2;
    clickUpgrade.innerText = "Buy click upgrade: {clickupgradeprice}";
    counter.innerText = "Sušenky: " + numberOfCookies;
    cookieincreaseNumber++;
  }
};

autoclickerUpgrade.onclick = () => {
  if (numberOfCookies >= 100) {
    numberOfCookies -= 100;
    counter.innerText = "Sušenky: " + numberOfCookies;
    cookieAutoclickerincreaseNumber++;
    clearInterval(autoclickerInterval);
    autoclickerInterval = setInterval(() => {
      numberOfCookies += cookieAutoclickerincreaseNumber;
      counter.innerText = "Sušenky: " + numberOfCookies;
    }, 1000);
  }
};
