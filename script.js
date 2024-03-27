var btc=document.getElementById("bitcoin");
var eth=document.getElementById("ethereum");
var doge=document.getElementById("dogecoin");

var settings = {
    "async":true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr",
    "method":"GET",
    "headers":{}

}
$.ajax(settings).done(function(response){
    btc.innerHTML=response.bitcoin.inr;
    eth.innerHTML=response.ethereum.inr;
    doge.innerHTML=response.dogecoin.inr;
});

const handleClick = function() {
    window.location.assign("https://crypto.com/price");
  };

const moreButton = document.getElementById("more");
moreButton.addEventListener("click", handleClick);
