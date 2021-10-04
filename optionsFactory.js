const optionsFactory = function (getElementsToAppend) {
  let options = [];

  const getData = function (data) {
    return transformData(data);
  };
  const transformData = function (data) {
    const transformedData = {
      localities: new Set(data.map(({miejscowosc}) => miejscowosc)),
      streets: new Set(data.map(({ulica}) => ulica)),
    };
    setElementProps({texts: transformedData.localities, name: 'locality'});
    setElementProps({texts: transformedData.streets, name: 'street'});
  };

  const setElementProps = function ({texts, name}) {
    Array.from(texts).forEach((text, index) => {
      if (!text) return;
      createElement({
        isSelected: index === 0,
        value: text,
        text: text,
        name: `${name}`,
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

    getElementsToAppend(options);
    return (options = []);
  };

  const cleanUp = function () {
    $('option[name="locality"]').remove();
    $('option[name="street"]').remove();
    cache = undefined;
  };
  return {getData, cleanUp};
};
