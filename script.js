const travelNumber = function () {
  let travelNodes = document.querySelectorAll(".card");
  console.log(travelNodes.length);
};

const deleteCards = function () {
  let travelNodes = document.querySelectorAll(".card");
  for (let i = travelNodes.length - 1; i >= 0; i--) {
    travelNodes[i].parentElement.removeChild(travelNodes[i]);
  }
};

const addHotBadge = function () {
  let hotBadgeNode = document.querySelectorAll(".hot-badge");
  for (let badge of hotBadgeNode) {
    badge.style.display = "block";
  }
};
window.onload = travelNumber;
