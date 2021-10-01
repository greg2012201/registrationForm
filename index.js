$(document).ready(function () {
  const {fetchData, cleanUp, handleSubmit} = form();

  // LISTINERS

  $('input[name=postal-code]').keyup((e) => {
    handleKeyUp(e, fetchData, cleanUp);
  });
  $('.form').submit((e) => {
    handleSubmit(e);
    return false;
  });
});
