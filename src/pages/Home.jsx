import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import heroSliderData from '../assets/fake-data/hero-slider'
import PolicyCard from '../components/PolicyCard'
import policy from '../assets/fake-data/policy'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import productData from '../assets/fake-data/products'
import banner from '../assets/images/banner.png'

const Home = () => {
  return (
    <Helmet title='Home'>
      <div className='container main'>
        <HeroSlider
          data={heroSliderData}
          control={true}
          auto={true}
          timeOut={5000}
        />
        <Section>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {policy.map((item, index) => (
                <Link key={index} to='/about'>
                  <PolicyCard
                    name={item.name}
                    description={item.description}
                    icon={item.icon}
                  />
                </Link>
              ))}
            </Grid>
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>Top products of the month!</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {productData.getProducts(4).map((item, index) => (
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
        <Section>
          <SectionTitle>New Arrivals!</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {productData.getProducts(4).map((item, index) => (
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
        <Section>
          <SectionTitle>Popular Products!</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {productData.getProducts(4).map((item, index) => (
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
        <Section>
          <SectionBody>
            <Link to='/catalog'>
              <img src={banner} alt='' />
            </Link>
          </SectionBody>
        </Section>
      </div>
    </Helmet>
  )
}

export default Home
