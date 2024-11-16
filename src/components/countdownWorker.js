self.onmessage = function () {
  const targetDate = new Date("2024-11-18T23:59:59").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;
    const timeLeft = Math.max(0, Math.floor(difference / 1000));

    self.postMessage(timeLeft);

    if (timeLeft > 0) {
      setTimeout(calculateTimeLeft, 1000);
    }
  };

  calculateTimeLeft();
};
