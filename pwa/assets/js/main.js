


var am;
      
	  var id= "fliecgkhmmfignfkpfieenmkpnjgfgcb" ;
	  let p3


	  var myVar = setInterval(myTimer, 3000);

function myTimer() {

	
	chrome.runtime.sendMessage(id,{messageFromeWeb:"get data"},function(response){
		let p3 = JSON.parse(JSON.stringify(response));
		console.log(p3.cpu.archName);
		document.getElementById("archname").innerHTML = p3.cpu.archName;
	   
		 
		 tcap=p3.memory.capacity;
		 tcap=(tcap/1073741824).toFixed(2);
		 document.getElementById("tcap").innerHTML =tcap;
		 am= p3.memory.availableCapacity;
		 am=(am/1073741824).toFixed(2);
		 var avc=parseInt(tcap) - parseInt(am);
		 document.getElementById("am").innerHTML =avc;
		 let tzero= JSON.parse(JSON.stringify(p3.storage[0].capacity));
		 var diskone=(tzero/1073741824).toFixed(2);
		 
		 let tone= JSON.parse(JSON.stringify(p3.storage[1].capacity));
		 var disktwo=(tone/1073741824).toFixed(2);
		 let ttwo= JSON.parse(JSON.stringify(p3.storage[1].capacity));
		 var diskthree=(ttwo/1073741824).toFixed(2);
		 var total=parseInt(diskthree) + parseInt(disktwo) + parseInt(diskone);
		 document.getElementById("tdisk").innerHTML =total;
		 let ht=JSON.parse(JSON.stringify(p3.display[0].bounds.height));
		 let wd=JSON.parse(JSON.stringify(p3.display[0].bounds.width));
		 document.getElementById("D-height").innerHTML =ht;
		 document.getElementById("D-width").innerHTML =wd;
		 document.getElementById("modelname").innerHTML = p3.cpu.modelName;
		 var pronum=JSON.parse(JSON.stringify(p3.cpu.numOfProcessors));
		 document.getElementById("pro").innerHTML =pronum;
		 var d1=JSON.parse(JSON.stringify(p3.display[0].dpiX));
		 document.getElementById("Dpi-x").innerHTML =d1;
		 var d2=JSON.parse(JSON.stringify(p3.display[0].dpiY));
		 document.getElementById("Dpi-y").innerHTML =d2;
		 var dname=JSON.parse(JSON.stringify(p3.display[0].name));
		 document.getElementById("Disname").innerHTML =dname;
		 var did=JSON.parse(JSON.stringify(p3.display[0].id));
		 document.getElementById("Disid").innerHTML =did;
		 var isp=JSON.parse(JSON.stringify(p3.display[0].isPrimary));
		 document.getElementById("primary").innerHTML =isp;
		 var isi=JSON.parse(JSON.stringify(p3.display[0].isInternal));
		 document.getElementById("internal").innerHTML =isi;
		 var ise=JSON.parse(JSON.stringify(p3.display[0].isEnabled));
		 document.getElementById("enabled").innerHTML =ise;
		 var rot=JSON.parse(JSON.stringify(p3.display[0].rotation));
		 document.getElementById("rota").innerHTML =rot;
		 var fea = JSON.parse(JSON.stringify(p3.cpu.features));
		 for (var i = 0; i < p3.cpu.features.length; i++) {
	  document.getElementById("cpufeature").innerHTML = p3.cpu.features[i];
  
	  document.getElementById("cpufeature").innerHTML = p3.cpu.features.join(" ");
	}
	
	 var ar=JSON.parse(JSON.stringify(p3.cpu.processors[0].usage));
	 var ar1=JSON.parse(JSON.stringify(p3.cpu.processors[1].usage));
	 var arr=JSON.parse(JSON.stringify(p3.cpu.processors));
	 
var kar=new Array(pronum);
	for(let i=0;i<pronum;i++)
	{
		 kar[i]=p3.cpu.processors[i].usage.kernel;
	}
	
	 

	 module.exports = {kar};



})
  
}

function myStopFunction() {
  clearInterval(myVar);
}
	

	
   