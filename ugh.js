new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
});

//methods
fullpage_api.setAllowScrolling(false);
new fullpage("#fullpage", {
  anchors: ["firstPage", "secondPage", "thirdPage"],
});
