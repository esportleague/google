  function testGS(){
  
  const url = "https://script.google.com/macros/s/AKfycbw2uYTKeWRm--pdEcy5ynRELWCT_N7ThXeX9Xtas9QSpw97a0fa/exec";
  
  fetch(url)
  .then(d=> d.json())
  .then(d=> {
  document.GetElementById("app")textContent = d[0].status;
  });
  }
  
  document.getElementById("btn").addEvent.Listener("click", testGS);
  
