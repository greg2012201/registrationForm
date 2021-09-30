const inputs = function (getElementsToAppend) {
  let options = [];
  let nodesNumber = 0;

  const getData = function (data) {
    return transformData(data);
  };
  const transformData = function (data) {
    nodesNumber = data.length;
    data.forEach(({miejscowosc, ulica}, index) => {
      if (
        (index > 1 && data[index - 1].miejscowosc === miejscowosc) ||
        (index > 1 && data[index - 1].ulica === ulica)
      )
        return;
      createElement(miejscowosc, 'city');
      if (!ulica) return;
      createElement(ulica, 'street');
    });
  };

  const createElement = function (text, name) {
    const fragment = $(document.createDocumentFragment());
    const option = $(
      `<option value="${text.toLowerCase()}" name="${name}" ">${text}</option>`
    );

    $(fragment).append(option);
    options.push(fragment);
    console.log(options);
    if (options.length === nodesNumber) {
      getElementsToAppend(options);
      return (options = []);
    }
  };

  return {getData};
};
