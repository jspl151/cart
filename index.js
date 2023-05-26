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
//const getDiscountPercent = (productName)=> discounts[productName] ? discounts[productName]/100 : 0 ;

const getTaxPercent = (productName) => taxes[productName] / 100 || 0;

const getUnitPrice = (itemName) => {
  let discounts = rates[itemName] * getDiscountPercent(itemName);
  let tax = rates[itemName] * getTaxPercent(itemName);
  let unitPrice = rates[itemName] - discounts + tax;
  return unitPrice;
};

const getLineItemPrice = (lineItem) => lineItem.units * getUnitPrice(lineItem.item)

const getSum = () => {
let total = purchases.reduce((acc, currentvalue) => acc + 
  getLineItemPrice(currentvalue), 0);
  
  /* let lineItemPriceList=purchases.map((item,i)=>
     getLineItemPrice(purchases[i]));
   let total=lineItemPriceList.reduce((acc,currentvalue)=> acc+currentvalue,0);
 return total;
  const a= purchases.map((item,i)=>
     {
       total+=getLineItemPrice(purchases[i])
     });*/
 /* let total=0;
   for(let i=0;i<purchases.length;i++)
   {
     total+=getLineItemPrice(purchases[i]);
   }*/
 
   return total
};

const main = () => console.log(getSum());
main();