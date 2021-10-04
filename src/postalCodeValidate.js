const postalCodeValidate = function () {
  const input = $('input[name=postal-code]');
  const inputValue = $('input[name=postal-code]').val();

  const pattern = new RegExp('^[0-9]{2}-[0-9]{3}$');
  if (!pattern.test(inputValue)) {
    input.addClass('invalid');
    return alert('Podaj prawidłowy kod pocztowy w formacie: 00-000.');
  } else {
    input.removeClass('invalid');
  }
  return pattern.test(inputValue);
};
