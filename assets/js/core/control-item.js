/* 
$('.movie-cover').scrollFix({
    side: 'top',
    topPosition: 0,
});
*/
// copy => movie_info(comment), admin dashboard (comment, ticekts)
var cartOpen = false;
var numberOfProducts = 0;

$('body').on('click', '.js-toggle-cart', toggleCart);
$('body').on('click', '.js-add-product', addProduct);
$('body').on('click', '.js-remove-product', removeProduct);

function toggleCart(e) {
    e.preventDefault();
    cartOpen ? closeCart() : openCart();
}

function openCart() {
    cartOpen = true;
    $('body').addClass('open');
}

function closeCart() {
    cartOpen = false;
    $('body').removeClass('open');
}

function addProduct(e) {
    e.preventDefault();
    openCart();
    $('.js-cart-empty').addClass('hide');
    var product = $('.js-cart-product-template').html();
    $('.js-cart-products').prepend(product);
    numberOfProducts++;
}

function removeProduct(e) {
    e.preventDefault();
    console.log('click');
    // $(this).closest('.js-cart-product').hide(250);
    $(this).closest('.js-cart-product').addClass(".hide-product");
    numberOfProducts--;
    if (numberOfProducts == 0) {
        $('.js-cart-empty').removeClass('hide');
    }
}
