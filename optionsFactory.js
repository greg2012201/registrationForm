const optionsFactory = function (getElementsToAppend) {
  let options = [];
  let nodesNumber = 0;

  const getData = function (data) {
    return setElementsProps(data);
  };
  const setElementsProps = function (data) {
    nodesNumber = data.length;
    data.forEach(({miejscowosc, ulica}, index) => {
      if (index === 0) {
        createElement({
          isSelected: true,
          value: miejscowosc,
          text: miejscowosc,
          name: 'city',
        });
      }

      if (!ulica) return;
      createElement({
        isSelected: index === 0,
        value: ulica,
        text: ulica,
        name: 'street',
      });
    });
  };

  const createElement = function ({isSelected, value, text, name}) {
    const fragment = $(document.createDocumentFragment());
    const option = $(
      `<option ${
        isSelected ? 'selected' : ''
      } value="${value}" name="${name}">${text}</option>`
    );

    $(fragment).append(option);
    options.push(fragment);
    if (options.length === nodesNumber) {
      getElementsToAppend(options);
      return (options = []);
    }
  };

  const cleanUp = function () {
    $('option[name="city"]').remove();
    $('option[name="street"]').remove();
    prevText = undefined;
  };
  return {getData, cleanUp};
};
