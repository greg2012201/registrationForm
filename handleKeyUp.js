const handleKeyUp = function (event, query, cleanUp) {
  const inputMaxLength = parseInt($(event.target).attr('maxlength'), 10);
  const inputCurrLength = event.target.value.length;
  const inputValue = event.target.value;
  if (inputCurrLength === 0) {
    cleanUp();
  }
  if (inputCurrLength <= 1) {
  }
  if (inputCurrLength === inputMaxLength) {
    const isValidated = postalCodeValidate();
    if (!isValidated) return;
    return query(inputValue);
  }
};
