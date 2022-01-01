$(function() {
  $(document).trigger('ext:load');

  $(document).on('pjax:success', function() {
      $(document).trigger('ext:load');
  });
});