import css from "./page.module.css";

const Whislist = () => {
  return (
    <>
      <div className={css.main}>
        <div className={css.whislistpage}>
          <div className={css.whisheading}>
            <h3>
              My Whislist <span>(16 items)</span>
            </h3>
          </div>
          <div className={css.whislistitems}>
            <div className={css.item}>
              <div className={css.itemphoto}></div>
              <div>
                <div className={css.itemname}>
                  <h3>B&O headphone</h3>
                </div>
                <div className={css.itemprice}>
                  <h5>$5000</h5>
                </div>
                <div className={css.cartbtn}>
                     <button>Add to cart</button>
                </div>
              </div>
            </div>
            <div className={css.item}>
              <div className={css.itemphoto}></div>
              <div>
                <div className={css.itemname}>
                  <h3>B&O headphone</h3>
                </div>
                <div className={css.itemprice}>
                  <h5>$5000</h5>
                </div>
                <div className={css.cartbtn}>
                     <button>Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whislist;
