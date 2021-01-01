$(function () {
  count = 0;
  textArray = [
    "We do not build, we write. We do not see, we read architecture as a spatial text through multiple environments and situations.",
    "We are in constant search for creative solutions and new ways of doing and thinking architecture through exploration and innovative answers.",
    "We develop projects in which form, materialization, and vision are in balance.",
  ];
  setInterval(function () {
    count++;
    $("#switchingText").fadeOut(400, function () {
      $(this)
        .text(textArray[count % textArray.length])
        .fadeIn(400);
    });
  }, 5000);
});
