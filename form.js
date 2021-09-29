const form = function () {
  let prevText;

  const fetchData = function (text) {
    if (prevText === text) return;
    prevText = text;
    $.get(`http://kodpocztowy.intami.pl/api/${text}`, (response) => {
      return response;
    });
  };

  return {fetchData};
};
