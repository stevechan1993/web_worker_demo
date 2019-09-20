var worker = new Worker('/javascripts/worker.js');
worker.onmessage = function (event) {
  document.getElementById('result').textContent = event.data;
};
