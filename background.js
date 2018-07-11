chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
  var element = document.createElement('div');
  element.innerHTML = request.html;
  // TODO: Manipulate `element` based on `request.service`...
  sendResponse({html: element.innerHTML});
  // Alternatively, you could just manipulate the HTML string itself.
});