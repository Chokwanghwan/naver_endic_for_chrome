chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  switch(request.action) {
  case "get_selection":
    var sel;
    try {
      if (window.getSelection) {
        sel = window.getSelection().toString();
      } else {
        sel = "";
      }
    } catch(e) {
      console.log(e);
      
      sel = ""
    }
    sendResponse({
      code: 0, message: '',
      return_value: sel
    });
    break;
  
  default:
    sendResponse({
      code: -1, message: 'UNKNOWN ACTION',
      return_value: null
    }); // Send nothing..
    break;
  }
});