$(document).ready(function () {
  $('#darkIcon').click(function () {
    $('#darkIcon').addClass('hidden');
    $('#lightIcon').removeClass('hidden');
    $('#lightIcon').addClass('flex');
    $('body').addClass('dark');
  });

  $('#lightIcon').click(function () {
    $('#lightIcon').addClass('hidden');
    $('#darkIcon').removeClass('hidden');
    $('body').removeClass('dark');
  });
});
