import Link from "next/link";
import { companyConfig } from "@/config/company";

interface LegalPageProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, children }: LegalPageProps) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">{title}</h1>
          <p className="page-hero-subtitle">
            آخر تحديث: أبريل 2026
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-content">
            {children}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">هل لديك أسئلة؟</h2>
          <p className="cta-subtitle">
            تواصل معنا إذا كان لديك أي استفسار حول سياساتنا
          </p>
          <Link href="/contact" className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
            تواصل معنا
          </Link>
        </div>
      </section>
    </>
  );
}
