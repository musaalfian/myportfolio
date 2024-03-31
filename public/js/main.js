$(document).ready(function () {
  $('#darkIcon').click(function () {
    $('#darkIcon').addClass('hidden');
    $('#lightIcon').removeClass('hidden');
    $('body').addClass('dark');
  });

  $('#lightIcon').click(function () {
    $('#lightIcon').addClass('hidden');
    $('#darkIcon').removeClass('hidden');
    $('body').removeClass('dark');
  });
});
