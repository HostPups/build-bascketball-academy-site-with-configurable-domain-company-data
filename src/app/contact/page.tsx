import { companyConfig } from "@/config/company";

export default function ContactPage() {
  const { company } = companyConfig;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Contact Us</h1>
          <p className="page-hero-subtitle">
            Have questions? We are here to help. Contact us today and start your basketball journey
          </p>
        </div>
      </section>

      <section className="section contact">
        <div className="container">
          <div className="contact-grid">
            <form className="contact-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="email@example.com" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+20 10 xxxx xxxx" />
              </div>
              <div className="form-group">
                <label>Program Interested In</label>
                <select style={{ width: '100%', padding: '14px 18px', background: 'var(--bg-dark)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', color: 'var(--text-primary)', fontSize: '16px' }}>
                  <option value="">Select a Program</option>
                  <option value="youth">Youth Development</option>
                  <option value="elite">Elite Training</option>
                  <option value="private">Private Coaching</option>
                  <option value="summer">Summer Camp</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Tell us about your goals and training needs..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Message
              </button>
            </form>

            <div className="contact-info">
              <h3>Contact Information</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
                We are available to answer all your questions. You can visit our academy location, contact us by phone, or email us.
              </p>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </div>
                <div className="contact-details">
                  <strong>Address</strong>
                  {company.address}
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <div className="contact-details">
                  <strong>Email</strong>
                  {company.email}
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                </div>
                <div className="contact-details">
                  <strong>Phone</strong>
                  {company.phone}
                </div>
              </div>

              <div style={{ marginTop: '40px', padding: '30px', background: 'var(--bg-surface)', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '16px', fontSize: '18px' }}>Business Hours</h4>
                <div style={{ display: 'grid', gap: '12px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Saturday - Thursday</span>
                    <span style={{ color: 'var(--primary)' }}>Morning: 9 AM - 1 PM</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Saturday - Thursday</span>
                    <span style={{ color: 'var(--primary)' }}>Evening: 4 PM - 10 PM</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Friday</span>
                    <span style={{ color: 'var(--text-secondary)' }}>Closed</span>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href={company.social.facebook} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href={company.social.instagram} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href={company.social.youtube} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div style={{ marginTop: '40px' }}>
            <div style={{ marginBottom: '30px', padding: '24px', background: 'var(--bg-dark)', borderRadius: '8px' }}>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '18px', marginBottom: '12px' }}>What should I bring to my first session?</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7' }}>Bring comfortable sports clothing, athletic shoes, and water. We provide basketballs and all necessary equipment. If you have your own basketball, feel free to bring it.</p>
            </div>
            <div style={{ marginBottom: '30px', padding: '24px', background: 'var(--bg-dark)', borderRadius: '8px' }}>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '18px', marginBottom: '12px' }}>Do I need prior basketball experience?</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7' }}>No prior experience is required for our Youth Development program. We have programs designed for all skill levels, from complete beginners to advanced players.</p>
            </div>
            <div style={{ marginBottom: '30px', padding: '24px', background: 'var(--bg-dark)', borderRadius: '8px' }}>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '18px', marginBottom: '12px' }}>Can I try a session before committing?</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7' }}>Yes! We offer a FREE trial session for all new students. This allows you to experience our training methods and facility before making any commitment.</p>
            </div>
            <div style={{ marginBottom: '30px', padding: '24px', background: 'var(--bg-dark)', borderRadius: '8px' }}>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '18px', marginBottom: '12px' }}>What is your cancellation policy?</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7' }}>You can cancel or reschedule sessions with at least 24 hours notice. For monthly programs, we offer pro-rated refunds for unused time with proper notice.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--secondary)', padding: '60px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', color: 'var(--text-primary)', marginBottom: '20px' }}>Visit Our Academy</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
            We welcome you for a free consultation and to learn about our training programs in person. Our location is easily accessible and clearly signposted.
          </p>
          <a href={`https://maps.google.com/?q=${encodeURIComponent(company.address)}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View on Map
          </a>
        </div>
      </section>
    </>
  );
}