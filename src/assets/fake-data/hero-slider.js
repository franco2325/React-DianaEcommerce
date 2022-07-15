import img1 from '../images/slider/slide_1.png'
import img2 from '../images/slider/slide_2.png'
import img3 from '../images/slider/slide_3.png'

const heroSliderData = [
  {
    title: '30% off on your first purchase!',
    description:
      'The best discounts on clothes of last season. If you become our new customer, you will get a 30% discount on your first purchase.',
    img: img1,
    color: 'main',
    path: '/catalog',
  },
  {
    title: 'Shipping all over the country!',
    description:
      'Complete your data in your profile and you can receive your purchase at the door of your house.',
    img: img2,
    path: '/catalog',
    color: 'pink',
  },
  {
    title: 'New season clothes!',
    description:
      'The best and latest fashion of this season is on our website.',
    img: img3,
    path: '/catalog',
    color: 'orange',
  },
]

export default heroSliderData
