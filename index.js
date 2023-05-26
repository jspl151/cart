var rates = {
  Carrot: 10,
  Apple: 200,
  Guava: 50,
};

var discounts = {
  // values are in percentages.
  Apple: 10
};

var taxes = {
  // values are in percentages.
  Carrot: 5,
  Guava: 10
};

var purchases = [
  {
    item: 'Carrot',
    units: 20,
  },
  {
    item: 'Apple',
    units: 2,
  },
  {
    item: 'Guava',
    units: 1,
  }
];

const getDiscountPercent = (productName) => discounts[productName] / 100 || 0;

const getTaxPercent = (productName) => taxes[productName] / 100 || 0;

const getUnitPrice = (itemName) => {
  const discount = rates[itemName] * getDiscountPercent(itemName);
  const tax = rates[itemName] * getTaxPercent(itemName);
  const unitPrice = rates[itemName] - discount + tax;
  
  return {discount,tax,unitPrice};
};

const getLineItemPrice = (lineItem) => {
  const { discount , tax , unitPrice}=getUnitPrice(lineItem.item);
  const subTotal = lineItem.units * unitPrice;

  return {...lineItem ,discount , tax , subTotal};
};

const getSum = () => {
  const lineItemPriceList=purchases.map((purchase)=> getLineItemPrice(purchase));
  console.log(lineItemPriceList);
  const total=lineItemPriceList.reduce((acc,currentvalue)=> acc + currentvalue.subTotal,0);

  return total;
};

const main = () => console.log(getSum());
main();