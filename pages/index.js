import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [turnPage, setTurnPage] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Resume - Wendell Veyra</title>
      </Head>

      <main className={styles.main}>

        <div className={styles.summary}>
          <p>I am a developer and a creative who is passionate and curious about creating solutions through development &amp; design. I believe that technology and creativity, despite their big gap in its meaning, are fundamental in building the path that our future is heading. It is my goal to merge these two elements and create an attractive yet functional outcomes. </p>
          <p>I am open for more fresh knowledge and experiencing new things as I think it is important in my development. I am hoping to grow more as a person and as an employee in this kind of environment.</p>
        </div>

        <div className={styles.grid}>

          <div className={styles.info}>

            <div className={styles.projects}>
              <h1>Projects</h1>
              <div>
                <ul>
                  <a href='https://dalaket.vercel.app' target='blank' rel='noopener noreferrer'>Dalaket</a>
                  <li>a local ceramics shop which sells handmade products, mainly vases. This is a project I made while attending a web development bootcamp. I do the design and the development of this e-commerce site. This is built using <small>Next Js</small>, <small>Stripe</small>, and <small>Sass</small>.</li>
                </ul>

                <ul>
                  <a href='https://vvndll.github.io/wendell-portfolio' target='blank' rel='noopener noreferrer'>Personal Portfolio</a>
                  <li>a collection of my personal projects. This is built using <small>HTML</small>, <small>CSS</small>, and <small>Javascript</small>.</li>
                </ul>

                <ul>
                  <a href='https://polaris-journal.vercel.app' target='blank' rel='noopener noreferrer'>Polaris</a>
                  <li>a journal/note taking app. This is built using <small>React Js</small> and <small>Sass</small>.</li>
                </ul>

                
              </div>
            </div>

            <div className={styles.skills}>
              <h1>Skills</h1>
              <div>
                <ul>
                  <li>Proficient in web development basics such as HTML, CSS &amp; Javascript.</li>
                  <li>Able to use frameworks such as SASS, for CSS, and React Js &amp; Next Js, for Javascript.</li>
                  <li>Familiar with backend language like PHP and frameworks like Node Js.</li>
                  <li>Have worked with MySQL database.</li>
                </ul>

                <span>Other Skills</span>

                <ul>
                  <li>Knowledgeable towards Web/Graphic design.</li>
                  <li>Able to do character illustrations. <small>see <a href='https://instagram.com/vvaryev/' target='blank' rel='noopener noreferrer'>instagram</a></small></li>
                  <li>Able to communicate in English.</li>
                </ul>
              </div>
            </div>

            <div className={styles.education}>
              <h1>Educational Background</h1>
              <div>
                <ul className={styles.disc}>
                  <li>Since 2022</li>
                  <ul className={styles.circle}>
                    <li><strong>KodeGo Bootcamp</strong></li>
                    <li>Full-Stack Web Development</li>
                  </ul>
                </ul>

                <ul className={styles.disc}>
                  <li>2019 - 2022</li>
                  <ul className={styles.circle}>
                    <li><strong>Batangas State University</strong></li>
                    <li>Bachelor Of Fine Arts</li>
                    <li>Visual Communication</li>
                  </ul>
                </ul>
              </div>
            </div>

          </div>

          <div className={styles.contact}>
            <div className={styles.important}>

              <ul>
                <li>Designer &amp; Developer</li>
                <li>Illustrator</li>
              </ul>

              <ul>
                <li>
                  Rizal Avenue Ext. <br />
                  Batangas City, Batangas 4200
                </li>
                <li><a href='mailto:vvendell0304@gmail.com' rel='noopener noreferrer'>vvendell0304@gmail.com</a></li>
                <li>+63 912 484 8866</li>
              </ul>

              <ul>
                  <a href='https://instagram.com/vvaryev/' target='blank' rel='noopener noreferrer'>@vvaryev</a>
                  <a href='https://vvndll.github.io/wendell-portfolio' target='blank' rel='noopener noreferrer'>https://vvndll.github.io/wendell-portfolio</a>
                </ul>


            </div>
            <div className={styles.image}>
              <Image src='/id.png' alt='Photo of Wendell Veyra' width={300} height={300} />
            </div>

          </div>
        </div>

        {turnPage && (
          <div className={styles.overlay}>
          <span>Hi,</span>
          <span>My name is</span>
          <span>Wendell Veyra.</span>
          <span>A designer &amp;</span>
          <span>Developer</span>
          <span>based in</span>
          <span>Batangas City</span>
        </div>
        )}

        <i className="bi bi-arrow-right" onClick={() => setTurnPage(!turnPage)}></i>
        
      </main>

    </div>
  );
}
