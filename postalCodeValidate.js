const postalCodeValidate = function () {
  const inputValue = $('input[name=postal-code]').val();

  const pattern = new RegExp('^[0-9]{2}-[0-9]{3}$');
  if (!pattern.test(inputValue)) {
    return alert('Podaj prawidłowy kod pocztowy w formacie: 00-000.');
  }
  return pattern.test(inputValue);
};
