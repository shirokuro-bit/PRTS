export const setLandscape = () => {
  document.documentElement.requestFullscreen()
  screen.orientation.lock("landscape");
}