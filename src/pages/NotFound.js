import React from 'react'

import Breadcrumb from 'components/Breadcrumb'
import Header from 'parts/Header'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'
import PageErrorMessage from 'parts/PageErrorMessage'

export default function NotFound() {
  return (
      <>
        <Header/>
        <Breadcrumb list={[
          {url: "/", name: "Home"},
          {url: "/congratulation", name: "Success Checkout"}
        ]}/>
        <PageErrorMessage/>
        <Sitemap/>
        <Footer/>
      </>
  )
}
