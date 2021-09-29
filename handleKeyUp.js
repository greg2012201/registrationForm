const handleKeyUp = function (event, query, cleanUp) {
  const inputMaxLength = parseInt($(event.target).attr('maxlength'), 10);
  const inputCurrLength = event.target.value.length;
  const inputValue = event.target.value;
  if (inputCurrLength === 0) {
    cleanUp();
  }
  if (inputCurrLength === inputMaxLength) {
    return query(inputValue);
  }
};
