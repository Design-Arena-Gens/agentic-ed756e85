'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [activeImage, setActiveImage] = useState(0)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const images = [
    { url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80', alt: 'Ocean view from villa' },
    { url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80', alt: 'Modern living room' },
    { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80', alt: 'Master bedroom' },
    { url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1600&q=80', alt: 'Luxury bathroom' },
    { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80', alt: 'Kitchen' }
  ]

  const features = [
    { icon: '🏊', title: 'Infinity Pool', desc: 'Stunning infinity edge pool with ocean views' },
    { icon: '🛏️', title: '5 Bedrooms', desc: 'Spacious master suite with 4 guest rooms' },
    { icon: '🚿', title: '6 Bathrooms', desc: 'Luxury spa-inspired bathrooms with premium fixtures' },
    { icon: '🍳', title: 'Gourmet Kitchen', desc: 'Chef-grade appliances and Italian marble countertops' },
    { icon: '🎬', title: 'Home Theater', desc: 'Private cinema with surround sound system' },
    { icon: '💪', title: 'Fitness Center', desc: 'Fully equipped private gym with ocean views' },
    { icon: '🌊', title: 'Beach Access', desc: 'Direct private access to pristine white sand beach' },
    { icon: '🚗', title: '3-Car Garage', desc: 'Climate-controlled garage with storage' }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your inquiry! We will contact you shortly.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.logo}>LUXURY ESTATES</div>
        <div className={styles.navLinks}>
          <a href="#gallery">Gallery</a>
          <a href="#details">Details</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Oceanfront Paradise Villa</h1>
          <p className={styles.heroSubtitle}>Malibu, California</p>
          <div className={styles.heroPrice}>$24,500,000</div>
          <a href="#contact" className={styles.ctaButton}>Schedule a Viewing</a>
        </div>
        <div className={styles.heroImage}>
          <img src={images[0].url} alt={images[0].alt} />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className={styles.gallery}>
        <h2 className={styles.sectionTitle}>Property Gallery</h2>
        <div className={styles.mainImage}>
          <img src={images[activeImage].url} alt={images[activeImage].alt} />
        </div>
        <div className={styles.thumbnails}>
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`${styles.thumbnail} ${activeImage === idx ? styles.active : ''}`}
              onClick={() => setActiveImage(idx)}
            >
              <img src={img.url} alt={img.alt} />
            </div>
          ))}
        </div>
      </section>

      {/* Property Details */}
      <section id="details" className={styles.details}>
        <div className={styles.detailsContainer}>
          <div className={styles.detailsText}>
            <h2 className={styles.sectionTitle}>Property Details</h2>
            <p className={styles.description}>
              This stunning contemporary masterpiece offers unparalleled luxury living with breathtaking
              panoramic ocean views. Positioned on a prime coastal bluff, this architectural gem seamlessly
              blends indoor and outdoor living spaces.
            </p>
            <p className={styles.description}>
              Floor-to-ceiling windows flood the home with natural light while showcasing spectacular sunsets.
              The open-concept design features soaring ceilings, premium finishes, and state-of-the-art technology
              throughout.
            </p>
            <div className={styles.specs}>
              <div className={styles.spec}>
                <div className={styles.specValue}>8,500</div>
                <div className={styles.specLabel}>Sq. Ft.</div>
              </div>
              <div className={styles.spec}>
                <div className={styles.specValue}>5</div>
                <div className={styles.specLabel}>Bedrooms</div>
              </div>
              <div className={styles.spec}>
                <div className={styles.specValue}>6</div>
                <div className={styles.specLabel}>Bathrooms</div>
              </div>
              <div className={styles.spec}>
                <div className={styles.specValue}>2023</div>
                <div className={styles.specLabel}>Built</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <h2 className={styles.sectionTitle}>Premium Features</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.feature}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <h2 className={styles.sectionTitle}>Schedule a Private Tour</h2>
            <p className={styles.contactText}>
              Experience this magnificent property in person. Our team is ready to arrange
              a private viewing at your convenience.
            </p>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <strong>📞 Phone:</strong> +1 (310) 555-0123
              </div>
              <div className={styles.contactItem}>
                <strong>📧 Email:</strong> luxury@estates.com
              </div>
              <div className={styles.contactItem}>
                <strong>📍 Location:</strong> Pacific Coast Highway, Malibu, CA
              </div>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            <textarea
              placeholder="Message (Optional)"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
            <button type="submit" className={styles.submitButton}>Request Information</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2024 Luxury Estates. All rights reserved.</p>
        <p>Licensed Real Estate Broker | DRE #01234567</p>
      </footer>
    </main>
  )
}
