const apiKey = '3dd1c748eaa64e2398e04eca01d67f9f';
const endPoint = `https://api.rebrandly.com/v1/links`;
async function getURL(){
  const url = document.getElementById("url").value;
  let payload = {
    destination: url,
    domain:{
      fullName: "rebrand.ly"
    }
  };
  let config = {
    method: 'post',
    headers: {
      "Content-Type": "application/json",
      "apikey": apiKey
    },
    body: JSON.stringify(payload)
  }
  await fetch(endPoint,config)
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      document.getElementById("small-url").innerHTML = `Short URL is <a href="https://${data.shortUrl}" target="_blank">${data.shortUrl}</a>`;
    })
    .catch(function(err){
      console.log(err);
    });
}
