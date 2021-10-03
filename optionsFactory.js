const optionsFactory = function (getElementsToAppend) {
  let options = [];

  const getData = function (data) {
    return setElementsProps(data);
  };
  const setElementsProps = function (data) {
    nodesNumber = data.length;
    data
      .reduce((acc, curr) => {
        const duplicate = acc.find(
          (item) => item.miejscowosc === curr.miejscowosc
        );
        if (!duplicate) {
          return [...acc, curr];
        } else {
          return acc;
        }
      }, [])
      .forEach(({miejscowosc, ulica}, index) => {
        const isSelected = index === 0;
        createElement({
          isSelected,
          value: miejscowosc,
          text: miejscowosc,
          name: 'locality',
        });

        if (!ulica) return;
        createElement({
          isSelected,
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

    getElementsToAppend(options);
    return (options = []);
  };

  const cleanUp = function () {
    $('option[name="locality"]').remove();
    $('option[name="street"]').remove();
    prevText = undefined;
  };
  return {getData, cleanUp};
};
