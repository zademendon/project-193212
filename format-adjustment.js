window.onload = function () {

  var targetNum = document.querySelector('a[href="tel:800.403.0688"]');
  targetNum.setAttribute("id", "number")

  var callback = function (formatted_number, mobile_number) {
    var e = document.getElementById("number");
    e.href = "tel:" + mobile_number;
    e.innerHTML = "";
    e.appendChild(document.createTextNode(formatted_number));
  };

  window.dataLayer = [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-BC4L5E2B6N');
  gtag('config', 'AW-1064804888');

  gtag('config', 'AW-1064804888/BrgACMicxl8QmMTe-wM', {
    'phone_conversion_number': '1-800-403-0688',
    'phone_conversion_callback': callback
  });
}
