$(document).ready(function () {
  const {fetchData, cleanUp} = form();

  // LISTINERS
  $('.input-control[name=postal-code]').keyup((e) => {
    handleKeyUp(e, fetchData, cleanUp);
  });
});
