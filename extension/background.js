// EXTERNAL MESSAGE LISTENER
var mVar = setInterval(mTimer, 3000);

function mTimer() {
  chrome.runtime.onMessageExternal.addListener(async function(request, sender, sendResponse) {
  console.log(request, sender);
  const data = await fetchData();
  sendResponse(data);
});
  
}

function myStopFunction() {
  clearInterval(mVar);
}


// METRICS FUNCTIONS

const fetchData = () => {
  return new Promise(async (resolve, reject) => {
    const memory = await Memoryinfo();
    const cpu = await Processorinfo();
     const display = await Displayinfo();
    const storage = await Storageinfo();
   
    let senddata = {
      memory,
      cpu,
      display,
      storage,
      time: new Date()
    };
    resolve(senddata);
  });
};

const Processorinfo = () => {
  return new Promise((resolve, reject) => {
    chrome.system.cpu.getInfo((data) => {
      resolve(data);
      console.log(data);
    });
  });
};

const Memoryinfo = () => {
  return new Promise((resolve, reject) => {
    chrome.system.memory.getInfo((data) => {
      resolve(data);
      console.log(data);
    });
  });
};
const Displayinfo = () => {
  return new Promise((resolve, reject) => {
    chrome.system.display.getInfo((data) => {
      resolve(data);
      console.log(data);
    });
  });
};



const Storageinfo = () => {
  return new Promise((resolve, reject) => {
    chrome.system.storage.getInfo((data) => {
      resolve(data);
      console.log(data);
    });
  });
};




















