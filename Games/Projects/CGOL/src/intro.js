const WELCOME = $("#welcome");
const INSTRUX = $("#instrux");
const START = $("#start")
const RUN = $("#run");
const TOGGLE = $("#toggle");


WELCOME.fadeIn(1000, function () {
     INSTRUX.fadeIn(1000)
})
START.click(function () {
     WELCOME.hide();
     INSTRUX.hide();
})
TOGGLE.click(function () {
     placeMode = !placeMode;
})
