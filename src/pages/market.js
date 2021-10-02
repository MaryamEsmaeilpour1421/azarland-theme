import React from "react"
import { Container, Carousel, Button } from "react-bootstrap"
import Layout from "../components/layout"
import * as marketStyles from "./Market.module.css"

const Market = () => {
  return (
    <div>
      <Layout>
        <Container className={marketStyles.sliderContainer}>
          <Carousel className={marketStyles.slider}>
            <Carousel.Item>
              <img
                className={marketStyles.slider}
                src="https://alborzmobin.net/wp-content/uploads/2021/05/laptop01-1536x864.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>یا علی</h3>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={marketStyles.slider}
                src="https://alborzmobin.net/wp-content/uploads/2021/05/laptop01-1536x864.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>بنر اولیه</h3>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <Carousel className={marketStyles.slider}>
            <Carousel.Item>
              <img
                className={marketStyles.slider}
                src="https://images.prismic.io/frameworkmarketplace/cca31de3-3b75-4932-af96-7646b7eba6c7__DSC3630-Edit-cropped.jpg?auto=compress,format&w=1280"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>یا مهدی</h3>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={marketStyles.slider}
                src="https://images.prismic.io/frameworkmarketplace/cca31de3-3b75-4932-af96-7646b7eba6c7__DSC3630-Edit-cropped.jpg?auto=compress,format&w=1280"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>بنر اولیه</h3>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <Carousel className={marketStyles.mainSlider}>
            <Carousel.Item>
              <img
                className={marketStyles.mainSlider}
                src="https://francescocolumbu.com/wp-content/uploads/2021/01/Best-Laptop-for-Hot-Climate-1024x683.jpg"
                alt="First slide"
                height="500px"
              />
              <Carousel.Caption>
                <h3>یا الله</h3>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={marketStyles.mainSlider}
                src="https://francescocolumbu.com/wp-content/uploads/2021/01/Best-Laptop-for-Hot-Climate-1024x683.jpg"
                alt="Second slide"
                height="500px"
              />
              <Carousel.Caption>
                <h3>بنر اولیه</h3>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>

        <Container className={marketStyles.smallBannerContainer}>
          <img
            className={marketStyles.images}
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/c08819507bedc589acae37f72c57cc7bbf154aba_1632321359.jpg?x-oss-process=image/quality,q_80"
            alt="First slide"
            height="100px"
          />

          <img
            className={marketStyles.images}
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/c08819507bedc589acae37f72c57cc7bbf154aba_1632321359.jpg?x-oss-process=image/quality,q_80"
            alt="First slide"
            height="100px"
          />
        </Container>

        <Container className={marketStyles.products}>
          <div class={marketStyles.box}>
            <div class="image">
              <img
                src="https://i.guim.co.uk/img/media/2c19c3b2fcbb78358eb734c8cba2bfb02388df0a/0_92_1750_1050/master/1750.jpg?width=620&quality=85&auto=format&fit=max&s=343db44db460cf1b90b3af5b362d46f1"
                alt=""
                height="80%"
                width="100%"
              />
            </div>
            <div class="contect">
              <h4>محصول </h4>
              <p>لورم ایپسوم متن ساختگی</p>
              <Button variant="primary">سبد خرید</Button>
              <span class="price">$12.99</span>
            </div>
          </div>

          <div class={marketStyles.box}>
            <div class="image">
              <img
                src="https://i.guim.co.uk/img/media/2c19c3b2fcbb78358eb734c8cba2bfb02388df0a/0_92_1750_1050/master/1750.jpg?width=620&quality=85&auto=format&fit=max&s=343db44db460cf1b90b3af5b362d46f1"
                alt=""
                height="80%"
                width="100%"
              />
            </div>
            <div class="contect">
              <h4>محصول </h4>
              <p>لورم ایپسوم متن ساختگی</p>
              <Button variant="primary">سبد خرید</Button>
              <span class="price">$12.99</span>
            </div>
          </div>

          <div class={marketStyles.box}>
            <div class="image">
              <img
                src="https://i.guim.co.uk/img/media/2c19c3b2fcbb78358eb734c8cba2bfb02388df0a/0_92_1750_1050/master/1750.jpg?width=620&quality=85&auto=format&fit=max&s=343db44db460cf1b90b3af5b362d46f1"
                alt=""
                height="80%"
                width="100%"
              />
            </div>
            <div class="contect">
              <h4>محصول </h4>
              <p>لورم ایپسوم متن ساختگی</p>
              <Button variant="primary">سبد خرید</Button>
              <span class="price">$12.99</span>
            </div>
          </div>

          <div class={marketStyles.box}>
            <div class="image">
              <img
                src="https://i.guim.co.uk/img/media/2c19c3b2fcbb78358eb734c8cba2bfb02388df0a/0_92_1750_1050/master/1750.jpg?width=620&quality=85&auto=format&fit=max&s=343db44db460cf1b90b3af5b362d46f1"
                alt=""
                height="80%"
                width="100%"
              />
            </div>
            <div class="contect">
              <h4>محصول </h4>
              <p>لورم ایپسوم متن ساختگی</p>
              <Button variant="primary">سبد خرید</Button>
              <span class="price">$12.99</span>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  )
}

export default Market
