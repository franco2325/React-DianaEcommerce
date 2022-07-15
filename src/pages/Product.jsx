import React, { useEffect } from 'react'
import Helmet from '../components/Helmet'
import productData from '../assets/fake-data/products'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import { useParams } from 'react-router-dom'
import ProductView from '../components/ProductView'

const Product = (props) => {
  const relatedProducts = productData.getProducts(4)
  const documentSlug = useParams().slug
  const product = productData.getProductBySlug(documentSlug)
  const productName = product.name
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [documentSlug])

  return (
    <Helmet title={productName.charAt(0).toUpperCase() + productName.slice(1)}>
      <div className='container main'>
        <Section>
          <SectionBody>
            <ProductView product={product} />
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>Discover More</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {relatedProducts.map((item, index) => (
                <ProductCard
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.name}
                  price={Number(item.price)}
                  slug={item.slug}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
      </div>
    </Helmet>
  )
}

export default Product
