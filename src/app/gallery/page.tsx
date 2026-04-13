import { companyConfig } from "@/config/company";

export default function GalleryPage() {
  const { gallery, company } = companyConfig;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Training Gallery</h1>
          <p className="page-hero-subtitle">
            Explore moments of training, competitions, and achievements at Cairo Courts Academy
          </p>
        </div>
      </section>

      <section className="section gallery">
        <div className="container">
          <div className="gallery-grid">
            {gallery.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <h2 className="section-title">Academy Activities</h2>
          <p className="section-subtitle">
            We organize various activities throughout the year to develop well-rounded athletes
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginTop: '40px' }}>
            <div style={{ padding: '24px', background: 'var(--bg-dark)', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>🏀</div>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '18px', marginBottom: '8px' }}>Regular Training</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>Daily sessions for all skill levels</p>
            </div>
            <div style={{ padding: '24px', background: 'var(--bg-dark)', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>🏆</div>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '18px', marginBottom: '8px' }}>Tournaments</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>Monthly inter-academy competitions</p>
            </div>
            <div style={{ padding: '24px', background: 'var(--bg-dark)', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>🎪</div>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '18px', marginBottom: '8px' }}>Summer Camps</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>Intensive holiday programs</p>
            </div>
            <div style={{ padding: '24px', background: 'var(--bg-dark)', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>🎓</div>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '18px', marginBottom: '8px' }}>Clinic Days</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>Specialized workshops</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title">Our Training Philosophy</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '20px', lineHeight: '1.9', fontSize: '16px' }}>
              At Cairo Courts Academy, we believe in developing the complete athlete. Our training sessions go beyond just teaching basketball skills - we focus on building character, teamwork, and life skills through sports. Every session is designed to challenge players physically while nurturing their mental growth and love for the game.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginTop: '20px', lineHeight: '1.9', fontSize: '16px' }}>
              Our state-of-the-art facilities provide the perfect environment for learning and improvement. From beginner clinics to advanced competitive training, every player finds their place at Cairo Courts. We take pride in seeing our players grow - not just as athletes, but as individuals who carry the lessons learned on the court into their everyday lives.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--primary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '40px', color: 'white', marginBottom: '16px' }}>
            Are You Ready to Start?
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)', marginBottom: '30px' }}>
            Sign up now and get a FREE trial session to experience our training firsthand
          </p>
          <a href="/contact" className="btn" style={{ background: 'white', color: 'var(--primary)' }}>
            Enroll Now
          </a>
        </div>
      </section>
    </>
  );
}