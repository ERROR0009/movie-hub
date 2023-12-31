const timerElement = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");

let seconds = 15;
let countdownInterval;

function updateTimer() {
  if (seconds > 0) {
    seconds--;
    const formattedTime = seconds.toString().padStart(2, "0");
    timerElement.textContent = `00:${formattedTime}`;
  } else {
    clearInterval(countdownInterval);
    timerElement.textContent = "00:00";
    startButton.style.display = "none";
    resetButton.style.display = "block";
    openNewPage(); // Call the function to open a new page
  }
}

function openNewPage() {
  window.location.href = "https://fatednews.com/dl/?link=https://video-downloads.googleusercontent.com/AMBNGE1E1FTWS09ke6O_gy41AgF8iy7amKB2EsHeO-xeWeojnGgdOEGYtoEnxow3nAEncedDNkyyKMskUQ-qc2qWiHW0xjjtABAQ8uN1kEeR-reK7uc3tc5OmcY_cSYTruxV2XFFi7B3HnlZYeiORsp9VC92HsvPWWMKw7mvpE_T4pFUE7PEm3Yuvw8Rq52V6gcd9mdc_P5-sfoZtqlNiIM5ODvG4hnslEKiDz7KzD8K_sG935iHwAFt4ckoXP-FOYI7zI8vxgf82qhKGx3X887N6w2Mk2ypqx5LsDarZD8SqEjd18DRwVC69tjmMmJnqcFk62lk2GHscEhT0KV0Kyfak6bCxtArfxqsHlP5_W_m0CQ_gf4IP9TOwzidu_ljvu78SyobLxhOz23tVQt0LtA65cMPXURoPenU93Ksmrek8IgcNZeb3bWhLy6Stw0DYHV02F8Ev_oFDzqh2VujJj2pQLxbPMTodvcfsktkbFxGpNww4hgHoByWA3ALKRDV8G_86RKRu4-C8sgRngG3KMTnqkPupdWiD1OuTRn808bD2OvMU7ijVzGy4duKj5PwI3D1BR6LTSmz_UYr_mYaNIxkm8jmnqCGUz2BbWnSvMy-O_OY03FsX5uSVX_XwSuKOfRliNycSxC0qi_llmmOcCrByujW0YjMEKA0o8lv4Xxzm6csmJ32oSTpulor3ggoK_ELr2sWXLA3yFnNfGi6GxFecy9Py_umk2cpId8LNAvGwsxfcIXBD-NoxBJDtdUB3L7ppjAs6Yy3DMinjbHBYfGDcoSaZpcqLQj32hfRabVTy86w4WO6gyUmzStUKkhFHwHLvQo1SmI35pE1Br8uilYvY2TLp_k9ezhaomPHKXt3ipZg-nvp-YC89QOhgKmQzXLwGlgR08H1o4_e9gxFZK9fL35lCmdPxYqbTg5sv2sJFbpUk73WUNo5zGvp66aZndyUkP3SD7GqPf7Yf49Njn1nx3tuHKaIQb9h3jA11EVyaiNwbApn3lTqBVyAr5rQc9HJJHOKYlVClcLTjTAXkumsOZbvijFJlZjeo1OYLJYYU8mhmN8X9Twi-kmb0SPOiCaz3nIKYxOvJTfuHjtgwU1pgxKV_CliVwMTZWta1CFK6YL8P9IcZ0dCbYXapUd7kyiDmMPTcu75"; // Replace with the desired URL
}

startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  countdownInterval = setInterval(updateTimer, 1000);
});

resetButton.addEventListener("click", () => {
  clearInterval(countdownInterval);
  seconds = 15;
  timerElement.textContent = "00:15";
  resetButton.style.display = "none";
  startButton.style.display = "block";
});
