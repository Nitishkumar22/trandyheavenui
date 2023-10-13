import React from 'react'
import css from './page.module.css'

const Products = () => {
  return (
    <>
       <div className={css.main}>
          <div className={css.productlangingpage}>
             <div className={css.productimg}>
                 <div className={css.allimg}>
                 <div className={css.mainimg}>
                    <img src="https://images.unsplash.com/photo-1481207801830-97f0f9a1337e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
                 </div>
                 <div className={css.otherimgs}>
                     <div className={css.allotherimgs}>
                        <img src="https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80" alt="" />
                     </div>
                     <div className={css.allotherimgs}>
                         <img src="https://images.unsplash.com/photo-1620360642570-72f7b6a09e01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="" />
                     </div>
                     <div className={css.allotherimgs}>
                           <img src="https://images.unsplash.com/photo-1485264665953-9e26e530d5fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
                     </div>
                 </div>
                 </div>
             </div>
             <div className={css.productdetails}>
                   <div className={css.productname}>
                    <h1>B&O Headphones</h1>
                   </div>
                   <div className={css.productprice}>
                       <h4>₹5000</h4>
                   </div>
                   <div className={css.productdets}>
                     <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi omnis ducimus voluptatem, soluta perferendis sed similique earum magnam accusantium tempore, illo est! Facere voluptate quisquam porro, veritatis soluta magni, necessitatibus nesciunt explicabo quae rem reprehenderit eligendi, dolorum dignissimos qui suscipit.</h6>
                   </div>
                   <div className={css.addtocart}>
                      <h4>Add to cart</h4>
                   </div>
                   <div className={css.buytheproduct}>
                      <h4>Buy now</h4>
                   </div>
             </div>
          </div>
       </div>
    </>
  )
}

export default Products