$(document).ready(function () {
  // Show hide popover
  $(".cl-dropdown").click(function () {
    $(this).find(".cl-dropmenu-item").slideToggle("fast");
  });
});
$(document).on("click", function (event) {
  var $trigger = $(".cl-dropdown");
  if ($trigger !== event.target && !$trigger.has(event.target).length) {
    $(".cl-dropmenu-item").slideUp("fast");
  }
});