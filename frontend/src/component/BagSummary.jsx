import {useSelector} from "react-redux"


const BagSummary = () => {

  const bagItemsIds = useSelector(store => store.bag)
  const items = useSelector(store => store.items)

  const finalItems = items.filter(item => {
    const itemIndex= bagItemsIds.indexOf(item.id);
    return itemIndex >= 0
  })

  const CONVENIENCE_FEES = 99;
  const NO_CONVENIENCE_FEES = 0
    let totalItem = bagItemsIds.length;
    let totalMRP = 0;
    let totalDiscount = 0;
  
    finalItems.forEach(bagItem => {
      totalMRP += bagItem.original_price;
      totalDiscount += bagItem.original_price - bagItem.current_price;
    });
  
    let finalPayment = 0
      if(finalItems >= 1){
       finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
      }else{
      finalPayment = totalMRP - totalDiscount + NO_CONVENIENCE_FEES;

    }

    
  

  return <><div className="bag-details-container">
  <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
  <div className="price-item">
    <span className="price-item-tag">Total MRP</span>
    <span className="price-item-value">₹{totalMRP}</span>
  </div>
  <div className="price-item">
    <span className="price-item-tag">Discount on MRP</span>
    <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
  </div>
  <div className="price-item">
    <span className="price-item-tag">Convenience Fee</span>
    <span className="price-item-value">{totalMRP === 0 ? NO_CONVENIENCE_FEES : CONVENIENCE_FEES}</span>
  </div>
  <hr />
  <div className="price-footer">
    <span className="price-item-tag">Total Amount</span>
    <span className="price-item-value">₹{finalPayment}</span>
  </div>
</div>
<button className="btn-place-order">
  <div className="css-xjhrni">PLACE ORDER</div>
</button>
</>
};

export default BagSummary;
