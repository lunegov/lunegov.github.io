var readURL = 'http://chat.lunegov.dev';
var writeURL = 'http://chat.lunegov.dev/write';

function read() {
  fetch(readURL, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
  }).then(function(response) {
    if (response.status === 200) {
      return response.json();
    }
  }).then(function(data) {
    if (typeof message === 'function') {
      message(data);
      setTimeout(function() {
        read();
      }, 1000)
    }
  });
}

function write(from, message) {
  const data = new FormData();
  data.append('from', from);
  data.append('message', message);

  const options = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    body: data,
  };
}

function message(msg) {
  console.log('object', msg);
}
read();