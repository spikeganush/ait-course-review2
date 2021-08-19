import React from 'react'
import Footer from '../components/Footer'
import bg_banner from '../img/news_img5.jpeg'
import news_img1 from '../img/news_img4.jpeg'
import news_img2 from '../img/news_img2.jpeg'
import news_img3 from '../img/new_img1.jpeg'
import news_img4 from '../img/news_img6.jpeg'
import news_img5 from '../img/news_img7.jpeg'
import news_img6 from '../img/news_img8.jpeg'
import news_img7 from '../img/news_img9.jpeg'

const News = () => {
  return (
    <>
      <div className="banner-content">
        <div
          className="banner"
          style={{ backgroundImage: `url(${bg_banner})` }}
        >
          <div className="text-banner">
            <h1>Enjoy Your New</h1>
            <h1>Experiences With Us</h1>
          </div>
        </div>
      </div>
      <main className="course-content">
        <div className="row1">
          <div className="column-news1">
            <div className="slide-frame">
              <div className="slide-image">
                <input type="radio" name="input-radio" id="radio1" />
                <input type="radio" name="input-radio" id="radio2" />
                <input type="radio" name="input-radio" id="radio3" />
                <input type="radio" name="input-radio" id="radio4" />
                <div className="img-container first">
                  <img
                    src={news_img3}
                    alt="news-image"
                    className="student-image"
                  />
                </div>
                <div className="img-container">
                  <img
                    src={news_img1}
                    alt="news-image"
                    className="student-image"
                  />
                </div>
                <div className="img-container">
                  <img
                    src={news_img2}
                    alt="news-image"
                    className="student-image"
                  />
                </div>
                <div className="img-container">
                  <img
                    src="../img/pineapple6.jpeg"
                    alt="news-image"
                    className="student-image"
                  />
                </div>
                <div className="nav-manual">
                  <label for="radio1" className="manual-btn"></label>
                  <label for="radio2" className="manual-btn"></label>
                  <label for="radio3" className="manual-btn"></label>
                  <label for="radio4" className="manual-btn"></label>
                </div>
              </div>
            </div>
          </div>
          <div className="column-news1">
            <h1>News</h1>
            <p>
              Welcome AIT students, let's explore our new websites that
              providing lots of reviews and suggestions from AIT students.
              Students cann freely give opinions in what the thing of some
              particular course and share their experiences to another students.
            </p>
          </div>
        </div>
        <div className="row1">
          <h1>Hot Topics</h1>
        </div>
        <div className="row2">
          <div className="column-news2">
            <img src={news_img4} alt="news-image" className="course-photo" />
            <p>13 AUGUST 2021</p>
            <h2>Campus reopen 2021</h2>
            <p>
              “Despite the disruption of the COVID-19 pandemic, we continue to
              advance our 2025 Strategy and make significant strides towards our
              goal of being among the world’s top 50 universities by 2025,”
            </p>
          </div>
          <div className="column-news2">
            <img src={news_img5} alt="news-image" className="course-photo" />
            <p>24 JUNE 2021</p>
            <h2>
              Helping students adapt to online learning sets them up for success
            </h2>
            <p>
              According to the study, adaptability – also known as the capacity
              to effectively adjust behaviour, thoughts and feelings in response
              to disruptions – can assist students in their online learning
              during COVID-19.
            </p>
          </div>
        </div>
        <div className="row2">
          <div className="column-news2">
            <img src={news_img6} alt="news-image" className="course-photo" />
            <p>13 AUGUST 2021</p>
            <h2>Top programming languages</h2>
            <p>
              “Despite the disruption of the COVID-19 pandemic, we continue to
              advance our 2025 Strategy and make significant strides towards our
              goal of being among the world’s top 50 universities by 2025,”
            </p>
          </div>
          <div className="column-news2">
            <img src={news_img7} alt="news-image" className="course-photo" />
            <p>24 JUNE 2021</p>
            <h2>Covid 19 Vaccination</h2>
            <p>
              According to the study, adaptability – also known as the capacity
              to effectively adjust behaviour, thoughts and feelings in response
              to disruptions – can assist students in their online learning
              during COVID-19.
            </p>
          </div>
          <div className="column-news2">
            <img src={news_img5} alt="news-image" className="course-photo" />
            <p>24 JUNE 2021</p>
            <h2>Most Reviews Subject</h2>
            <p>
              According to the study, adaptability – also known as the capacity
              to effectively adjust behaviour, thoughts and feelings in response
              to disruptions – can assist students in their online learning
              during COVID-19.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default News
