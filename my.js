  function testGS(){
  
  const url = "https://script.googleusercontent.com/macros/echo?user_content_key=yDZsmpyQ30Bv6EevVSF_5kzNKP2Ry81X-q8VyQ4pGLpyeNdXwUtridw3_ZzIXqdD3gB7GdE7M15w_a1wwysdZ5qRSUE5CcxXm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnD3nwiGdpHCEDMENffCu3FTz9TyPyTEPUXh6QYTKzrrfcvl5SYHp0flIdZi-nyhfEcrT2JDZYYW7&lib=MBsrXmou5jn3bvnyeNR826nWkdjhOZoOc";
  
  fetch(url)
  .then(d=> d.json())
  .then(d=> {
  document.GetElementById("app")textContent = d[0].status;
  });
  }
  
  document.getElementById("btn").addEvent.Listener("click", testGS);
  
