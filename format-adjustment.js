window.onload = function () {
  var formatNum = document.querySelector('a[href="tel:800.403.0688"]');
  if (formatNum) {
    formatNum.textContent = '1-800-403-0688';
  } else {
    console.log('Element not found!');
  }

  window.dataLayer = [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-BC4L5E2B6N');
  gtag('config', 'AW-1064804888');

  gtag('config', 'AW-1064804888/BrgACMicxl8QmMTe-wM', {
    'phone_conversion_number': formatNum,
  });
}
