var btn = document.querySelector('#btn')
var price = document.querySelector('#price')




btn.addEventListener('click', function(){
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function(){
        if( XHR.readyState == 4 && XHR.status == 200){
                var data = JSON.parse(XHR.responseText)
                var rate = data.bpi.USD.rate
                price.innerHTML = ` ${rate} ${data.bpi.USD.description}`
        }
    } 
    XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json')
    XHR.send()
})