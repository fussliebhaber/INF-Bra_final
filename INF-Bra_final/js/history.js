const scrollInput = document.getElementById("history-toggle");
const target = document.getElementById("history");

scrollInput.addEventListener("change", () => {
  if (scrollInput.checked) {
    target.scrollIntoView({ behavior: "smooth" });
    addMessageConsole("opened gallery", "Gallerie geöffnet");
  } else {
    addMessageConsole("closed gallery", "Gallerie geschlossen");
  }
});
