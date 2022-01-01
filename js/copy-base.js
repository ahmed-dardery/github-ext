$(document).bind('ext:load', function() {

  $(".commit-ref").each(function() {
    if($(this).next().has("clipboard-copy").length) return;
    branch_name = $(this).find("a").text()

    clipboard = $("clipboard-copy:first").clone().attr("value", branch_name);
    $(this).after(clipboard);
  });
});

