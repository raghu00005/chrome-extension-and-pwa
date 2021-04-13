chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.greeting == "hello")
        sendResponse({farewell: "goodbye"});
    }
  );
// console.log("Hello from Extension")
// let item=document.querySelector(".card h2")
// item.innerHTML="Hello vedant"

// let button=document.querySelector(".button")
// button.addEventListener("click",()=>{
//   let message="Button Clicked from PWA"
//     console.log(message)
//     chrome.runtime.sendMessage(message);
// })

// chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
//     console.log(request)
// // })

  // chrome.runtime.onMessage.addListener(
  //   function(request, sender, sendResponse) {
  //     console.log(sender.tab ?
  //                 "from a content script:" + sender.tab.url :
  //                 "from the extension");
  //     if (request.greeting == "hello")
  //       sendResponse({farewell: "goodbye"});
  //   }
  // )