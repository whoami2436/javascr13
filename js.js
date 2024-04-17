const button = document.querySelector("#id");
const search = document.querySelector(".search");

const messages = ["Bildirim-1", "Bildirim-2", "Bildirim-3", "Bildirim-4"];
const types = ["info", "warning", "error"];
const randomFunction = () => {
  const notificationBtn = document.createElement("button");
  notificationBtn.classList.add("notificationBtn");
  notificationBtn.classList.add(types[Math.floor(Math.random() * 3)])
  notificationBtn.textContent = messages[Math.floor(Math.random() * 4)]
  search.append(notificationBtn)
  setTimeout(() => {
    notificationBtn.remove()
  }, 2000);
};

button.addEventListener("click", randomFunction);