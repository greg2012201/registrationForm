const form = function () {
  let prevText;

  const fetchData = function (text) {
    console.log({prevText, text});
    if (prevText === text) return;
    cleanUp();
    prevText = text;

    // getData(mocks);
    $.get(`http://kodpocztowy.intami.pl/api/${text}`, (response) => {
      return getData(response);
    }).fail((error) => {
      return showError(error);
    });
  };
  const getElementsToAppend = function (options) {
    render(options);
  };

  const render = function (nodes) {
    nodes.forEach((node) => {
      const nodeName = node.children().attr('name');

      switch (nodeName) {
        case 'city': {
          return $('.input-control[name="city"]').append(node);
        }
        case 'street': {
          return $('.input-control[name="street"]').append(node);
        }
        default: {
          throw Error(
            'You must provide valid node name parameter, expected "city", "street"'
          );
        }
      }
    });
  };
  const showError = function () {
    alert(`error`);
    cleanUp();
  };
  const cleanUp = function () {
    console.log('clean');
    $('option[name="city"]').remove();
    $('option[name="street"]').remove();
    prevText = undefined;
  };
  $('.submit-button').click(cleanUp);
  const {getData} = inputs(getElementsToAppend);
  return {fetchData, cleanUp};
};
