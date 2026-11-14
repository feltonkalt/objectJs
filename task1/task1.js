const product = {
    title: 'Блокнот',
    price: 150,
    stock: 4,
};


totalPrice = 0;

while (true) {
    quantity = Number(prompt());

    if (quantity > product.stock) {
        alert('Недостаточное кол-во товара');
    }
    else if (quantity <= product.stock) {
        sell(quantity);
    }

    function sell(quantity) {
        product.stock = product.stock - quantity;
        totalPrice = product.price * quantity;
        alert(`Итоговая цена:${totalPrice}`);
    }
    alert(`Остаток:${product.stock}`);

    if (product.stock <= 0) {
        alert('Весь товар распродан');
        break;
    }
}
