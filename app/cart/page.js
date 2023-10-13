import css from "./page.module.css";

const Cart = () => {
  return (
    <>
      <div className={css.main}>
        <div className={css.cartpage}>
          <div className={css.heading}>
            <h3>Shoping cart</h3>
          </div>
          <div className={css.maincart}>
            <div className={css.cartitem}>
              <div className={css.items}>
                <div className={css.itemimg}></div>
                <div className={css.itemsdetails}>
                  <div className={css.itemname}>
                    <h3>B&O Headphone</h3>
                  </div>
                  <div className={css.itemprice}>
                    <h6>$5000</h6>
                  </div>
                  <div className="incrementDecrement">
                    <button className={css.btndecrement}>-</button>
                    <span className={css.count}>1</span>
                    <button className={css.btnincrement}>+</button>
                  </div>
                  <div className={css.btns}>
                    <div className={css.removebtn}>
                      <button>Remove</button>
                    </div>
                    <div className={css.buynowbtn}>
                      <button>Buy now</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className={css.items}>
                <div className={css.itemimg}></div>
                <div className={css.itemsdetails}>
                  <div className={css.itemname}>
                    <h3>B&O Headphone</h3>
                  </div>
                  <div className={css.itemprice}>
                    <h6>$5000</h6>
                  </div>
                  <div className="incrementDecrement">
                    <button className={css.btndecrement}>-</button>
                    <span className={css.count}>1</span>
                    <button className={css.btnincrement}>+</button>
                  </div>
                  <div className={css.btns}>
                    <div className={css.removebtn}>
                      <button>Remove</button>
                    </div>
                    <div className={css.buynowbtn}>
                      <button>Buy now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={css.address}>
              <div className={css.priceheading}>
                <h4>PRICE DETAILS</h4>
              </div>
              <div className={css.pricedetails}>
                <div className={css.pricedets}>
                  <div className={css.totalitem}>
                    <h6>Price(4 item)</h6>
                  </div>
                  <div className={css.totalprice}>$10,000</div>
                </div>
                <div className={css.salesfee}>
                  <div className={css.seles}>
                    <h6>Sale FEE</h6>
                  </div>
                  <div className={css.salepaid}>Paid</div>
                </div>
                <div className={css.delivery}>
                  <div className={css.deliveryfee}>
                    <h6>Delivery Charges</h6>
                  </div>
                  <div className={css.deliveryamount}>
                    $20 <span>Free</span>
                  </div>
                </div>
                <div className={css.totalamountpaid}>
                    <div className={css.totalheading}>
                              <h4>Total Amount</h4>
                    </div>
                    <div className={css.totalamount}>
                         <h5>$10,000</h5>
                    </div>
                </div>
                <div className={css.ordertheitems}>
                      <button>Place Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
