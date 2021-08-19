import React from 'react'
import about_img1 from '../img/aboutUs_img1.jpeg'
import about_img2 from '../img/profile_img1.png'

const AboutUs = () => {
  return (
    <>
      <main className="course-content">
        <div className="row-about">
          <h1>About Us</h1>
        </div>
        <div className="row2">
          <div className="column-about">
            <p>
              AIT, Creative Technology Educators (also known as the Academy of
              Information Technology) is a specialist higher education and
              vocational education institution based in Sydney, Australia, with
              a second campus opening in Melbourne, Australia in 2015. AIT was
              established in 1999, and specialises in three disciplines: digital
              media, information technology, and business. AIT is a member of
              the RedHill Education group, alongside Greenwich English College,
              Go Study Australia, and the International School of Colour and
              Design (ISCD).
            </p>
          </div>
          <div className="column-about">
            <img src={about_img1} alt="news-image" className="course-photo" />
          </div>
        </div>
        <div className="column-about">
          <p>
            AIT was the first in Australia to offer courses in Motion capture
            technology, and has the latest markerless Motion Capture system
            installed in its Sydney campus,in 2013, AIT was still the first
            Mobile Applications Development course provided. AIT holds and
            participates in many events, including the AIT Oscar Night, the AIT
            Games Night, and the Vivid Light Festival. AIT is recognised as a
            quality tertiary education provider by the Australian Government’s
            Tertiary Education Quality & Standards Agency (TEQSA) and the
            Australian Skills Quality Authority (ASQA).
          </p>
        </div>
        <div className="row-about">
          <h1>Staff Members</h1>
        </div>
        <div className="row-about1">
          <div className="column-about">
            <img src={about_img2} alt="news-image" className="profile-img" />
            <p>Florian jourdian</p>
            <p>Bachelor Student 2021</p>
          </div>
          <div className="column-about">
            <p>
              He is dedicated to proactively assisting students secure
              internships at organisations that are closely aligned to their
              personal and career goals, strengths and areas of interest. Tamara
              is committed to ensuring that students who embark on an internship
              benefit from meaningful work to develop skills in their chosen
              field.
            </p>
          </div>
        </div>
        <div className="row-about1">
          <div className="column-about">
            <img src={about_img2} alt="news-image" className="profile-img" />
            <p>Visanoukan Chalernphon</p>
            <p>Bachelor Student 2021</p>
          </div>
          <div className="column-about">
            <p>
              He is dedicated to proactively assisting students secure
              internships at organisations that are closely aligned to their
              personal and career goals, strengths and areas of interest. Tamara
              is committed to ensuring that students who embark on an internship
              benefit from meaningful work to develop skills in their chosen
              field.
            </p>
          </div>
        </div>
        <div className="row-about1">
          <div className="column-about">
            <img src={about_img2} alt="news-image" className="profile-img" />
            <p>Juan Javier Baque Garcia Margallo</p>
            <p>Bachelor Student 2021</p>
          </div>
          <div className="column-about">
            <p>
              He is dedicated to proactively assisting students secure
              internships at organisations that are closely aligned to their
              personal and career goals, strengths and areas of interest. Tamara
              is committed to ensuring that students who embark on an internship
              benefit from meaningful work to develop skills in their chosen
              field.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default AboutUs
