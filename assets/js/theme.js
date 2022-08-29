const audio = document.getElementById("music");

window.addEventListener("click", () => {
  audio.play();
  audio.volume = 0.2;
});

const switchTheme = () => {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");

  const theme = document.body.classList[0];
  const music =
    theme === "light-theme" ? "normal-world.mpeg" : "inverted-world.mpeg";

  audio.src = `assets/musics/${music}`;
  audio.play();
  audio.volume = 0.2;
};
