import React from 'react'

import Header from 'parts/Header'
import Breadcrumb from 'components/Breadcrumb'
// import ProductDetails from 'parts/Details/ProductDetails'
// import Suggestion from 'parts/Details/Suggestion'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'
import ShoppingCart from 'parts/Cart/ShoppingCart'
import ShippingDetails from 'parts/Cart/ShippingDetails'

export default function Cart() {
  return (
    <>
        <Header theme="black"/>
        <Breadcrumb list={[
          {url: "/", name: "Home"},
          {url: "/cart/1", name: "Shopping Cart"}
        ]}/>
        <section className="md:py-16">
            <div className="container mx-auto px-4">
                <div className="flex -mx-4 flex-wrap">
                  <ShoppingCart/>
                  <ShippingDetails/>
                </div>
            </div>
        </section>
        <Sitemap/>
        <Footer/>
    </>
  )
}
