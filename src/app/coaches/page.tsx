import { companyConfig } from "@/config/company";

export default function CoachesPage() {
  const { coaches, company } = companyConfig;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Our Coaching Team</h1>
          <p className="page-hero-subtitle">
            Learn from the best coaches in Egypt and the Middle East - experts in developing players at all levels
          </p>
        </div>
      </section>

      <section className="section coaches">
        <div className="container">
          <div className="coaches-grid">
            {coaches.map((coach) => (
              <div key={coach.id} className="coach-card">
                <div className="coach-image-wrapper">
                  <img src={coach.image} alt={coach.name} className="coach-image" />
                </div>
                <h3 className="coach-name">{coach.name}</h3>
                <p className="coach-title">{coach.title}</p>
                <p className="coach-specialization">{coach.specialization}</p>
                <p className="coach-experience">{coach.experience}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '12px', lineHeight: '1.6' }}>
                  {coach.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="section-title">Coaching Philosophy</h2>
            <p className="section-subtitle">
              Our coaching approach combines international best practices with understanding of local culture and player development needs.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginTop: '50px' }}>
              <div style={{ padding: '30px', background: 'var(--bg-dark)', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎯</div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px' }}>Individual Focus</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7' }}>
                  Every player is unique. We assess each player's strengths and weaknesses to create a personalized development plan that maximizes their potential.
                </p>
              </div>
              <div style={{ padding: '30px', background: 'var(--bg-dark)', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>📈</div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px' }}>Progressive Training</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7' }}>
                  Our training programs evolve with each player. We gradually increase intensity and complexity as players develop new skills and build confidence.
                </p>
              </div>
              <div style={{ padding: '30px', background: 'var(--bg-dark)', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🧠</div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px' }}>Mental Development</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7' }}>
                  Basketball is as much a mental game as physical. We teach players to stay focused, handle pressure, and build confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Coach Credentials</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', marginTop: '40px' }}>
            <div style={{ padding: '30px', background: 'var(--bg-surface)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ fontSize: '22px', color: 'var(--text-primary)', marginBottom: '16px' }}>International Certifications</h3>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '2', listStyle: 'none' }}>
                <li style={{ paddingRight: '24px', position: 'relative' }}><span style={{ position: 'absolute', right: 0, color: 'var(--primary)' }}>✓</span> FIBA Certified Coaches</li>
                <li style={{ paddingRight: '24px', position: 'relative' }}><span style={{ position: 'absolute', right: 0, color: 'var(--primary)' }}>✓</span> USA Basketball Licensed</li>
                <li style={{ paddingRight: '24px', position: 'relative' }}><span style={{ position: 'absolute', right: 0, color: 'var(--primary)' }}>✓</span> European Coaching Badges</li>
                <li style={{ paddingRight: '24px', position: 'relative' }}><span style={{ position: 'absolute', right: 0, color: 'var(--primary)' }}>✓</span> Sports Science Degrees</li>
              </ul>
            </div>
            <div style={{ padding: '30px', background: 'var(--bg-surface)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ fontSize: '22px', color: 'var(--text-primary)', marginBottom: '16px' }}>Playing Experience</h3>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '2', listStyle: 'none' }}>
                <li style={{ paddingRight: '24px', position: 'relative' }}><span style={{ position: 'absolute', right: 0, color: 'var(--primary)' }}>✓</span> Professional Leagues</li>
                <li style={{ paddingRight: '24px', position: 'relative' }}><span style={{ position: 'absolute', right: 0, color: 'var(--primary)' }}>✓</span> National Teams</li>
                <li style={{ paddingRight: '24px', position: 'relative' }}><span style={{ position: 'absolute', right: 0, color: 'var(--primary)' }}>✓</span> International Competitions</li>
                <li style={{ paddingRight: '24px', position: 'relative' }}><span style={{ position: 'absolute', right: 0, color: 'var(--primary)' }}>✓</span> College Basketball</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--secondary)', padding: '60px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', color: 'var(--text-primary)', marginBottom: '20px' }}>Join Our Coaching Team</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
            Are you a certified basketball coach? Join our team and be part of developing the next generation of Egyptian basketball players.
          </p>
          <a href="/contact" className="btn btn-primary">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}