const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = "Log in to get started";
      containerApp.style.opacity = 0;
      // Logout functions
      localStorage.setItem("currentUser", JSON.stringify({}));
    }

    // Decrease 1s
    time--;
  };

  // Set time to 5 minutes
  let time = 5;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};
