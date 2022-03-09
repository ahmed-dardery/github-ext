$(document).bind('ext:load', function() {

  $(".commit-ref").each(function() {
    if($(this).hasClass("head-ref")) return;
    if($(this).hasClass("copy-base")) return;
    $(this).addClass("copy-base");

    branch_name = $(this).find("a").text()

    clipboard = $("clipboard-copy:first").clone().attr("value", branch_name);
    $(this).after(clipboard);
  });
});

