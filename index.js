$(document).ready(function () {
  const {fetchData, handleSubmit} = form();

  // LISTINERS

  $('input[name=postal-code]').keyup((e) => {
    handleKeyUp(e, fetchData);
  });
  $('form').submit(() => {
    handleSubmit();
    return false;
  });
});
