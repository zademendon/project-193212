window.onload = function () {
    var formatNum = document.querySelector('a[href="tel:800.403.0688"]');
    if (formatNum) {
        formatNum.textContent = '1-800-403-0688';
    } else {
        console.log('Element not found!');
    }

    gtag('config', 'AW-1064804888/BrgACMicxl8QmMTe-wM', {
        'phone_conversion_number': '1-800-123-4567',
    });
}
