import { useEffect, useRef } from 'react'
import './WelcomeSection.scss'

const WelcomeSection = () => {
  const welcomeImageRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("fadeIn")
      })
    }, {
      threshold: 0.5
    })
    observer.observe(welcomeImageRef.current)
  }, [])

  return (    
    <section className="welcomeSection">
      <div className="welcomeText">
        <div className="motto">
          Find your next top tech job in 1 week.
        </div>
        <div className="mottoSubtitle">
        Are you a top 2% Software Engineer, Product Manager or Data Scientist?
Let leading Indian technology companies compete to hire you.
        </div>
        <div className="welcomeButtons">
          <button>Learn More</button>
          <button>Apply To Join</button>
        </div>
      </div>
      <div className="imageSection">
        <img 
          src='/img/Welcome.jpg' 
          alt='welcome.jpg'
          className='welcomeImage'
          ref={welcomeImageRef} 
          width={576*1.1} height={360*1.1}/>
      </div>
    </section>
  )
}

export default WelcomeSection
