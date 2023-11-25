import React from 'react'
import './nav.css'
import { Button } from "@mui/material"



const Nav = () => {
  
  return (
    <body>
    <div className='contain-1'>
        <nav className='appbar'>
           <button className='button'>< a className='anchor' href='#home' >Home</a></button>
           <button className='button'>< a className='anchor' href='#about' >About</a></button>
           <button className='button'>< a className='anchor' href='#skills' >Skills</a></button>
           <button className='button'>< a className='anchor' href='#projects' >Projects</a></button>
        </nav>
        </div>
        <main className='container-1' id='home'>
          
          <section className='section-1'>
            <img className='img-1' src='Images/computer.png' alt='pic' height="200px" width="200px"></img>
            <h1 className='heading-1'>hello!,</h1>
            <div className='cursor-box'>
            <p className='word-1'>I'M </p>
            <p className='word-2'><span className='span-1'>SURIYA NARAYANAN</span>
            <p className='word-3'><span className='span-2'>SURIYA NARAYANAN</span></p>
            </p>
            </div>
            <p className='role'>Fullstack Developer</p>
          </section>
         </main>
        <main className='container-2' id='about'>
          <section className='section-2'>
            <img className='img-2' src='Images/computer-2.png' alt='pic' height="200px" width="200px"></img>
              <h1 className='heading-2'>About Me</h1>
              <div className='about-box'>
              <p className='about'>Hello, I'm Suriya Narayanan, a passionate and dedicated web 
                developer with a flair for creating beautiful, functional, and user-centric 
                websites and web applications. I have a deep-rooted love for all things web-related 
                and thrive on turning ideas into digital realities.
              </p>
              <br></br>
              <p className='about'>
              My journey in web development began with a curiosity-driven dive into the world
               of HTML, CSS, and JavaScript. Since then, I've continually expanded my skill set
                to include cutting-edge technologies and best practices in the industry. With a solid
                 foundation in the MERN (MongoDB, Express.js, React.js, Node.js) stack, I'm constantly 
                 exploring new tools and frameworks to stay at the forefront of web development trends.
              </p>
              </div>
          </section>
        </main>
        <main className='container-3' id='skills'>
          <section className='section-3'>
            <h1 className='heading-3'>My Skills</h1>

                <div className='skill-box'><img className='logo'
                 src="Images/html-logo.png"
                 alt='pic' height="100px" width='100px'>
                  </img>
                  <h3>HTML</h3> 
                </div>

                <div className='skill-box'>
                <img className='logo'
                 src="Images/css-logo.png"
                 alt='pic' height="100px" width='100px'>
                  </img>
                  <h3>CSS</h3> 
                </div>

                <div className='skill-box'>
                <img className='logo'
                 src="Images/javascript-logo.png"
                 alt='pic' height="100px" width='100px'>
                  </img>
                  <h3>JavaScript+</h3> 
                </div>

                <div className='skill-box'><img className='logo'
                 src="Images/react-logo.png"
                 alt='pic' height="100px" width='100px'>
                  </img>
                  <h3>React Js</h3> 
                  </div>

                <div className='skill-box'><img className='logo'
                 src="Images/node-logo.png"
                 alt='pic' height="100px" width='100px'>
                  </img>
                  <h3>Node Js</h3> 
                  </div>

                <div className='skill-box'>
                <img className='logo'
                 src="Images/express-logo.png"
                 alt='pic' height="100px" width='100px'>
                  </img>
                  <h3>Express Js</h3> 
                </div>

                <div className='skill-box'>
                <img className='logo'
                 src="Images/mongo-logo.png"
                 alt='pic' height="100px" width='100px'>
                  </img>
                  <h3>MongoDB</h3> 
                </div>

                <div className='skill-box'>
                <img className='logo'
                 src="Images/java-logo.png"
                 alt='pic' height="100px" width='100px'>
                  </img>
                  <h3>Java</h3> 
                </div>

                <div className='skill-box'>
                <img className='logo'
                 src="Images/coreldraw-logo.png"
                 alt='pic' height="100px" width='100px'>
                  </img>
                  <h3>CorelDraw</h3> 
                </div>
          </section>
        </main>
        <main className='container-4' id='projects'>
        
          <section className='section-4'>
            <h3 className='heading-4'>Projects</h3>
               <div className='project-box-1'>
               <img className='book-pic-1' src='Images/quiz.jpg' alt='pic' height="200px" width="200px"></img>
               <div className='image-overlay-1'>
                <div className='image-title'>QUIZ</div>
                <p> A web application for taking quiz speacially for competitive examinations training institutes
                  it consists of 2 apps one for admin which allows admin to update questionbank.
                  Another one is for user where users are allowed to take test.
                </p>
                <a className='github-link' href=''>GITHUB LINK</a>
               </div>
                  </div>
               <div  className='project-box-2'>
               <img className='book-pic-1' src='Images/5.jpg' alt='pic' height="200px" width="200px"></img>
               <div className='image-overlay-2'>
                <div className='image-title'>E-BOOKS</div>
                <p>	An E-commerce website for selling E- bokks with separate website for admin and user. 
                          	Frontend is made with the help of React js,Material UI  
	                           Backend is made with the help of MongoDB,Express JS and Node JS 
                            	Payment Facility made with paypal 
                </p>
                <a className='github-link' href=''>GITHUB LINK</a>
               </div>
               </div>
               
          </section>
          
        </main>
        
    </body>
  )
}

export default Nav