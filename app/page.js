"use client"
import Link from 'next/link'
import React, { useRef, useState } from 'react';
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const Page = () => {
  return (
    <>
      <div className='main w-full'>
        <div style={{ width: "100%", height: "50vh", backgroundColor: "red" }} className='!w-[50vw] !h-[40vh] bg-gray-500'>

          <Swiper pagination={true} autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }} modules={[Pagination, Autoplay]} className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
        <div>

          <Link href="/product">Product</Link>
          <br />
          <Link href="/profile">Profile</Link>
          <br />
          <Link href="/cart">Cart</Link>
          <br />
          <Link href="/whislist">Whislist</Link>


        </div>
      </div>
    </>
  )
}

export default Page