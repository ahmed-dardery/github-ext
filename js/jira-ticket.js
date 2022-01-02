$(document).bind('ext:load', function() {

  $(".js-issue-title, .markdown-title").each(function() {
   $(this).html(function(_, oldText){
      return oldText.replaceAll(/\[([a-zA-Z]*-[0-9]*)\]/g, '[<a href="https://instabug.atlassian.net/browse/$1">$1</a>]');
   });
  });
});
