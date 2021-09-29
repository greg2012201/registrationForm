const handleKeyUp = function (event, query) {
  const inputMaxLength = parseInt($(event.target).attr('maxlength'), 10);
  const inputCurrLength = event.target.value.length;
  const inputValue = event.target.value;
  if (inputCurrLength === inputMaxLength) {
    return query(inputValue);
  }
};
