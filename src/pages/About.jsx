
import aboutImgLg from '../assets/about-lg.png'

export default function About() {
  return (
    <section className='about-section'>
      <div className='about-info'>
        <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
          (Hitch costs extra 😉)</p>
        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        <section className='about-cta'>
          <h3>Your destination is waiting. Your van is ready.</h3>
          <button>Explore your vans</button>
        </section>
      </div>
      <img src={aboutImgLg} alt="van image" />
    </section>
  )
}