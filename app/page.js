import Link from 'next/link'
import React from 'react'



const Page = () => {
  return (
    <div>
        <Link href="/product">Product</Link>
        <br />
        <Link href="/profile">Profile</Link>
        <br />
        <Link href="/cart">Cart</Link>

    </div>
  )
}

export default Page