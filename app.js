// header words
const positif = document.querySelectorAll("#positif div");
const negatif = document.querySelectorAll("#negatif div");
positif.forEach((e) => {
  const top = Math.round(
    Math.random() * (window.screen.height * 0.9 - window.screen.height * 1)
  );
  const left = Math.round(
    Math.random() * (window.screen.width * 0.9 - window.screen.width * 1)
  );
  e.style.top = `${top}px`;
  e.style.left = `${left}px`;
});
negatif.forEach((e) => {
  const top =
    Math.round(
      Math.random() * (window.screen.height * 0.8 - window.screen.height * 0.2)
    ) + 50;
  const left =
    Math.round(
      Math.random() * (window.screen.width * 0.8 - window.screen.width * 0.2)
    ) + 50;
  e.style.top = `${top}px`;
  e.style.left = `${left}px`;
});

function loadcookies() {
  if (!document.cookie) {
    uniqueId = Math.random().toString(36).substr(2, 9) + Math.random().toString(36).substr(2, 9) + Math.random().toString(36).substr(2, 9) + Math.random().toString(36).substr(2, 9);
    const cookie = `cookie=${uniqueId}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = cookie;
  }
  console.log(document.cookie);
}
loadcookies();