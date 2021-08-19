import React from 'react'
import bg_banner from '../img/news_img5.jpeg'
import news_img1 from '../img/news_img4.jpeg'
import news_img2 from '../img/news_img2.jpeg'
import news_img3 from '../img/new_img1.jpeg'

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
                  <img src={news_img3} alt="news" className="student-image" />
                </div>
                <div className="img-container">
                  <img src={news_img1} alt="news" className="student-image" />
                </div>
                <div className="img-container">
                  <img src={news_img2} alt="news" className="student-image" />
                </div>
                <div className="img-container">
                  <img
                    src="../img/pineapple6.jpeg"
                    alt="news"
                    className="student-image"
                  />
                </div>
                <div className="nav-manual">
                  <label htmlFor="radio1" className="manual-btn"></label>
                  <label htmlFor="radio2" className="manual-btn"></label>
                  <label htmlFor="radio3" className="manual-btn"></label>
                  <label htmlFor="radio4" className="manual-btn"></label>
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
        <div className="row1">
          <div className="column1">
            <h1>Most Reviews Subject</h1>
          </div>
          <div className="column1">
            <a href="view_all">View all</a>
          </div>
        </div>
      </main>
    </>
  )
}

export default News
