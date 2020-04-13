const play = $("#play");
const restart = $("#restart");
const gameOverUI = $("#gameOverUI");
const settings = $("#settings");
const settings2 = $("#settings2");
const mainMenu = $("#mainMenuUI");
const settingsUI = $("#settingsUI");
const exit = $("#exit");
const clearSettings = $("#clearSettings");
const switchColors = $("#switchColors");
const scoreText = $("#scoreText");

play.click(function() {
  mainMenu.hide();
  playingGame = true;
});

restart.click(function() {
  gameOverUI.hide();
  playingGame = true;
  enemies = [];
  frameCount = 0;
  player = new Player();
});

settings.click(function() {
  settingsUI.show();
});
settings2.click(function() {
  settingsUI.show();
});
exit.click(function() {
  settingsUI.hide();
});
clearSettings.click(function() {
  localStorage.clear();
  MAIN_COLOR = DEFAULT_MAIN_COLOR;
  SECOND_COLOR = DEFAULT_SECOND_COLOR;
  $("#mainColor").val(MAIN_COLOR);
  $("#secondColor").val(SECOND_COLOR);
});

switchColors.click(function() {
  let t = SECOND_COLOR;
  SECOND_COLOR = MAIN_COLOR;
  MAIN_COLOR = t;
  $("#mainColor").val(MAIN_COLOR);
  $("#secondColor").val(SECOND_COLOR);
});
