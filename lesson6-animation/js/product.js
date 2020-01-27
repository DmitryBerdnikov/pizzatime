;(function() {
  var catalog = document.querySelector('.catalog');

  if (catalog === null) {
    return;
  }

  var changeProductSize = function(target) {
    var product = myLib.closestItemByClass(target, 'product');
    var previousBtnActive = product.querySelector('.product__size.is-active');
    
    previousBtnActive.classList.remove('is-active');
    target.classList.add('is-active');
  };

  var changeProductOrderInfo = function(target) {
    var product = myLib.closestItemByClass(target, 'product');
    var order = document.querySelector('.popup-order');

    var productTitle = product.querySelector('.product__title').textContent;
    var productSize = product.querySelector('.product__size.is-active').textContent;
    var productPrice = product.querySelector('.product__price-value').textContent;
    var productImgSrc = product.querySelector('.product__img').getAttribute('src');

    order.querySelector('.order-info-title').setAttribute('value', productTitle);
    order.querySelector('.order-info-price').setAttribute('value', productPrice);
    order.querySelector('.order-info-size').setAttribute('value', productSize);

    order.querySelector('.order__img').setAttribute('src', productImgSrc);
    order.querySelector('.order-product-title').textContent = productTitle;
    order.querySelector('.order-product-price').textContent = productPrice;
    order.querySelector('.order__size').textContent = productSize;
  };

  catalog.addEventListener('click', function(e) {
    var target = e.target;
    console.log(target)

    if (target.classList.contains('product__size')) {
      e.preventDefault();
      changeProductSize(target);
    }

    if (target.classList.contains('product__btn')) {
      e.preventDefault();
      changeProductOrderInfo(target);
    }
  });
})();