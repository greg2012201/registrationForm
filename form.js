const form = function () {
  let prevText;

  const fetchData = function (text) {
    if (prevText === text) return;

    cleanUp();

    prevText = text;

    getData(mocks);
    // $.get(`http://kodpocztowy.intami.pl/api/${text}`, (response) => {
    //   return getData(response);
    // }).fail((error) => {
    //   return onError(error);
    // });
  };
  const getElementsToAppend = function (options) {
    render(options);
  };

  const render = function (nodes) {
    nodes.forEach((node) => {
      const nodeName = node.children().attr('name');

      switch (nodeName) {
        case 'locality': {
          return $('select[name="locality"]').append(node);
        }
        case 'street': {
          return $('select[name="street"]').append(node);
        }

        default: {
          throw Error(
            'You must provide valid node name parameter, expected "locality", "street"'
          );
        }
      }
    });
  };
  const onError = function (error) {
    alert(
      `Coś poszło nie tak nie mogliśmy załadować danych szukanych po kodzie pocztowym.\n
       \n${
         error.responseText ? `KOMUNIKAT BŁĘDU: ${error.responseText}` : null
       }`
    );
    cleanUp();
  };
  const onSuccess = function ({
    name,
    surname,
    email,
    tel,
    locality,
    street,
    houseNumber,
    apartementNumber,
    postalCode,
  }) {
    return alert(
      `Zarejestrowaleś się poprawnie, Twoje dane: imię: ${name}, nazwisko: ${surname}, email: ${email}, telefon: ${tel}, miejscowość: ${locality}, ulica: ${street}, numer domu:${houseNumber}, numer mieszkania: ${apartementNumber}, kod pocztowy: ${postalCode}.`
    );
  };

  const handleSubmit = function () {
    const registrationMessage = {
      name: $('input[name=name]').val(),
      surname: $('input[name=surname]').val(),
      email: $('input[name=email]').val(),
      tel: $('input[name=tel]').val(),
      locality: $('select[name=locality]').val(),
      street: $('select[name=street]').val(),
      houseNumber: $('input[name=house-number]').val(),
      apartementNumber: $('input[name=apartement-number]').val(),
      postalCode: $('input[name=postal-code]').val(),
    };
    onSuccess(registrationMessage);
    return $(form).reset();
  };
  const {getData, cleanUp} = optionsFactory(getElementsToAppend);
  return {fetchData, cleanUp, handleSubmit};
};
