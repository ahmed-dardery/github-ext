$(function() {
  $(document).trigger('ext:load');
  $(document).on('pjax:end', function() {
    $(document).trigger('ext:load');
  });
});
