const hour = document.querySelector(".hour");
const second = document.querySelector(".second");
const minute = document.querySelector(".minute");

// setting timer for the rotation of the clock hands
function rotation() {
  const day = new Date();
  console.log(day.getMinutes());
  const minutes = day.getMinutes();
  const hours = day.getHours();
  const seconds = day.getSeconds();

  //   Rotating the second hand
  second.style.transform = `rotate(${seconds * 6 + 180}deg)`;
  //   Rotating the minute hand
  minute.style.transform = `rotate(${minutes * 6 + seconds / 10 + 180}deg)`;
  //   Rotating the hour hand
  hour.style.transform = `rotate(${hours * 30 + minutes * 0.5 + 180}deg)`;
}
rotation();
setInterval(rotation, 1000);
