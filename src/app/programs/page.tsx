import { companyConfig } from "@/config/company";
import Link from "next/link";

export default function ProgramsPage() {
  const { programs } = companyConfig;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Training Programs</h1>
          <p className="page-hero-subtitle">
            Choose the right program for your level and goals. Get professional training from the best coaches in Egypt.
          </p>
        </div>
      </section>

      <section className="section programs">
        <div className="container">
          <div className="programs-grid">
            {programs.map((program) => (
              <div key={program.id} className="program-card">
                <div className="program-image-wrapper">
                  <img src={program.image} alt={program.title} className="program-image" />
                </div>
                <div className="program-content">
                  <span className="program-age">{program.ageGroup}</span>
                  <h3 className="program-title">{program.title}</h3>
                  <p className="program-description">{program.description}</p>
                  <ul className="program-features">
                    {program.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <div className="program-footer">
                    <span className="program-price">{program.price}</span>
                    <span className="program-duration">{program.duration}</span>
                  </div>
                  <Link href="/contact" className="btn btn-primary" style={{ marginTop: '20px', width: '100%' }}>
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="section-title">Why Choose Cairo Courts Academy?</h2>
            <p className="section-subtitle">
              We are committed to developing the next generation of basketball players in Egypt through professional coaching and modern training methods.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px', marginTop: '40px' }}>
              <div style={{ padding: '30px', background: 'var(--bg-dark)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>🏀</div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px' }}>Professional Coaches</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.8' }}>
                  Our team consists of internationally certified coaches with extensive experience in professional training and player development. Each coach brings unique expertise from playing and coaching at the highest levels.
                </p>
              </div>
              <div style={{ padding: '30px', background: 'var(--bg-dark)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>📊</div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px' }}>Modern Curriculum</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.8' }}>
                  We use the latest training methods and international standards in basketball coaching. Our curriculum is continuously updated to incorporate the newest techniques and strategies from around the world.
                </p>
              </div>
              <div style={{ padding: '30px', background: 'var(--bg-dark)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>🏟️</div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px' }}>Advanced Facilities</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.8' }}>
                  Our facilities feature modern courts equipped with the latest training technology and tools. We maintain premium playing surfaces and training equipment for optimal performance.
                </p>
              </div>
              <div style={{ padding: '30px', background: 'var(--bg-dark)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>🎯</div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px' }}>Guaranteed Results</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.8' }}>
                  We provide individual progress tracking to ensure every player gets the maximum benefit from their training. Regular assessments and feedback help players improve continuously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title">Additional Benefits</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '40px' }}>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>📹</div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Video Analysis</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>We record and analyze your performance to identify areas for improvement.</p>
              </div>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>🎪</div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Tournaments</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>Participate in regular inter-academy tournaments and competitions.</p>
              </div>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>👕</div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Uniform Kit</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>Receive professional training uniforms and gear as part of your program.</p>
              </div>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>🏆</div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Certificates</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>Earn recognized certificates upon completing your training program.</p>
              </div>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>🍽️</div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Nutrition Guidance</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>Get meal plans and dietary advice to optimize your performance.</p>
              </div>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>👥</div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Parent Sessions</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>Regular meetings to discuss progress and training goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}