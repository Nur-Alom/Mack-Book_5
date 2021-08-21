
// 1. Memory Part.

function totalMemoryAmount(depending1) {
    if (depending1 == true) {
        document.getElementById('memory-cost').innerText = 0;
    }
    else {
        document.getElementById('memory-cost').innerText = 180;
    }
    subTotal();
    total();
}
document.getElementById('8GB').addEventListener('click', function () {
    totalMemoryAmount(true);
});
document.getElementById('16GB').addEventListener('click', function () {
    totalMemoryAmount(false);
});


// 2. Storage Part.

function totalStorageAmount(depending2) {
    if (depending2 == 1) {
        document.getElementById('storage-cost').innerText = 100;
    }
    else if (depending2 == 2) {
        document.getElementById('storage-cost').innerText = 180;
    }
    else {
        document.getElementById('storage-cost').innerText = 0;
    }
    subTotal();
    total();
}
document.getElementById('256GB').addEventListener('click', function () {
    totalStorageAmount();
});
document.getElementById('512GB').addEventListener('click', function () {
    totalStorageAmount(1);
});
document.getElementById('1TB').addEventListener('click', function () {
    totalStorageAmount(2);
});


// 3. Delivery Option.

function totalDeliveryAmount(depending3) {
    if (depending3 == true) {
        document.getElementById('delivery-cost').innerText = 0;
    }
    else {
        document.getElementById('delivery-cost').innerText = 20;
    }
    subTotal();
    total();
}
document.getElementById('late-delivery').addEventListener('click', function () {
    totalDeliveryAmount(true);
});
document.getElementById('fast-delivery').addEventListener('click', function () {
    totalDeliveryAmount(false);
});


// 4. Total calculation

function getTotalPrice(added) {
    const productPrice = document.getElementById(added + '-cost');
    const product = parseInt(productPrice.innerText);
    return product;
}

function subTotal() {
    const memoryTotal = getTotalPrice('memory');
    const storageTotal = getTotalPrice('storage');
    const deliveryTotal = getTotalPrice('delivery');
    const subTotal = memoryTotal + storageTotal + deliveryTotal;
    document.getElementById('sub-total').innerText = subTotal + 1299;
}

//  5. inTotal Calculation.

function total() {
    const memoryTotal = getTotalPrice('memory');
    const storageTotal = getTotalPrice('storage');
    const deliveryTotal = getTotalPrice('delivery');
    const subTotal = memoryTotal + storageTotal + deliveryTotal;
    document.getElementById('total').innerText = subTotal + 1299;
}


