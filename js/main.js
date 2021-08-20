
// 1. Memory Part
document.getElementById('8GB').addEventListener('click', function () {
    const memoryCost8gb = document.getElementById('memory-cost');
    const newCost8gb = memoryCost8gb.innerText;
    const totalMemoryCost = newCost8gb.innerText = 0;
    document.getElementById('memory-cost').innerText = totalMemoryCost;
});

document.getElementById('16GB').addEventListener('click', function () {
    const memoryCost16gb = document.getElementById('memory-cost');
    const newCost16gb = memoryCost16gb.innerText;
    const totalMemoryCost = newCost16gb.innerText = 180;
    document.getElementById('memory-cost').innerText = totalMemoryCost;
});


// 2. Storage Part.
document.getElementById('256GB').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    const newStorageCost = storageCost.innerText;
    const totalStorageCost = newStorageCost.innerText = 0;
    document.getElementById('storage-cost').innerText = totalStorageCost;
});


document.getElementById('512GB').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    const newStorageCost = storageCost.innerText;
    const totalStorageCost = newStorageCost.innerText = 100;
    document.getElementById('storage-cost').innerText = totalStorageCost;
});


document.getElementById('1TB').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    const newStorageCost = storageCost.innerText;
    const totalStorageCost = newStorageCost.innerText = 180;
    document.getElementById('storage-cost').innerText = totalStorageCost;
});


// 3. Delivery Option.

document.getElementById('late-delivery').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    const newDeliveryCost = deliveryCost.innerText;
    const totalDeliveryCost = newDeliveryCost.innerText = 0;
    document.getElementById('delivery-cost').innerText = totalDeliveryCost;
});


document.getElementById('fast-delivery').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    const newDeliveryCost = deliveryCost.innerText;
    const totalDeliveryCost = newDeliveryCost.innerText = 20;
    document.getElementById('delivery-cost').innerText = totalDeliveryCost;
});




// document.getElementById('sub-total');
const mainPrice = parseInt(document.getElementById('main-price').innerText);
const totalMemoryPrice = parseInt(totalMemoryCost.innerText);
const totalStoragePrice = parseInt(totalStorageCost.innerText);
const totalDeliveryPrice = parseInt(totalDeliveryCost.innerText);

const subTotalPrice = mainPrice + totalMemoryPrice + totalStoragePrice + totalDeliveryPrice;

document.getElementById('sub-total').innerText = subTotalPrice;


