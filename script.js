// Sahifani yangilaganda raqamni saqlash
let counter = localStorage.getItem("counter")
  ? parseInt(localStorage.getItem("counter"))
  : 0;

const display = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

// Raqamni ekranda ko'rsatish
display.textContent = counter; // localStorage dan olingan qiymatni ko'rsatish

incrementButton.addEventListener("click", () => {
  counter++;
  display.textContent = counter; // Yangilangan qiymatni ko'rsatish

  incrementButton.classList.add("animate");
  setTimeout(() => {
    incrementButton.classList.remove("animate");
  }, 300);

  localStorage.setItem("counter", counter); // Yangilangan raqamni saqlash
  if (counter === 1) {
    alert("Subhanallah");
  }
  if (counter === 33) {
    alert("Alhamdulillah");
  }
  if (counter === 66) {
    alert("Allahu Akbar");
  }
  if (counter === 99) {
    alert("La Ilaha Illallah");
  }
});

decrementButton.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    display.textContent = counter; // Yangilangan qiymatni ko'rsatish
    localStorage.setItem("counter", counter); // Yangilangan raqamni saqlash
  }
});

resetButton.addEventListener("click", () => {
  counter = 0;
  display.textContent = counter; // Yangilangan qiymatni ko'rsatish
  localStorage.setItem("counter", counter); // Yangilangan raqamni saqlash
});
