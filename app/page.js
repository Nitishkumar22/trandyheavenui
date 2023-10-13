import Link from 'next/link'
import React from 'react'



const Page = () => {
  return (
    <div>
        <Link href="/product">Product</Link>
        <br />
        <Link href="/profile">Profile</Link>
    </div>
  )
}

export default Page