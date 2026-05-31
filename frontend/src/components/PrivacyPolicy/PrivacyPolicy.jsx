import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <section className="privacy-policy">
      <div className="container">
        <div className="privacy-header">
          <span className="section-label">Legal</span>
          <h1>Privacy Policy</h1>
          <p>
            Last Updated: <strong>May 31, 2026</strong>
          </p>
        </div>

        <div className="policy-card">
          <p>
            Welcome to <strong>Tech Savvy School</strong> ("Company", "we",
            "our", or "us"). We are committed to protecting your privacy and
            ensuring that your personal information is handled safely and
            responsibly.
          </p>

          <p>
            This Privacy Policy explains how we collect, use, store, and
            protect your information when you visit our website, enroll in our
            courses, or interact with our services.
          </p>
        </div>

        <div className="policy-grid">

          <div className="policy-card">
            <h2>1. Information We Collect</h2>

            <h3>A. Personal Information</h3>
            <ul>
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Address</li>
              <li>Date of Birth</li>
              <li>Educational Details</li>
              <li>Payment Information</li>
              <li>Parent/Guardian Details (for minors)</li>
            </ul>

            <h3>B. Technical Information</h3>
            <ul>
              <li>IP Address</li>
              <li>Browser Type</li>
              <li>Device Information</li>
              <li>Operating System</li>
              <li>Website Usage Data</li>
              <li>Cookies and Analytics Data</li>
            </ul>

            <h3>C. Student Learning Data</h3>
            <ul>
              <li>Course Progress</li>
              <li>Assignments</li>
              <li>Quiz Results</li>
              <li>Attendance Records</li>
              <li>Certifications Earned</li>
              <li>AI Tool Usage Activity</li>
            </ul>
          </div>

          <div className="policy-card">
            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>Provide educational services and courses</li>
              <li>Manage student enrollments</li>
              <li>Process payments</li>
              <li>Improve courses and website</li>
              <li>Communicate important updates</li>
              <li>Provide technical support</li>
              <li>Issue certificates and records</li>
              <li>Personalize learning experiences</li>
              <li>Ensure platform security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className="policy-card">
            <h2>3. Sharing of Information</h2>
            <p>We do not sell your personal information.</p>

            <ul>
              <li>Payment Gateway Providers</li>
              <li>Cloud Hosting Providers</li>
              <li>Educational Partners & Trainers</li>
              <li>Legal Authorities</li>
              <li>Analytics & Marketing Providers</li>
            </ul>
          </div>

          <div className="policy-card">
            <h2>4. Cookies & Tracking Technologies</h2>
            <ul>
              <li>Improve user experience</li>
              <li>Analyze website traffic</li>
              <li>Remember user preferences</li>
              <li>Track course engagement</li>
              <li>Provide personalized content</li>
            </ul>
          </div>

          <div className="policy-card">
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures
              to protect your information from unauthorized access, data loss,
              misuse, alteration, and disclosure.
            </p>
          </div>

          <div className="policy-card">
            <h2>6. Student & Parent Rights</h2>
            <ul>
              <li>Access personal information</li>
              <li>Request corrections</li>
              <li>Request deletion</li>
              <li>Withdraw consent</li>
              <li>Opt-out of marketing</li>
              <li>Request stored data copies</li>
            </ul>
          </div>

          <div className="policy-card">
            <h2>7. Third-Party Services</h2>
            <ul>
              <li>Video Conferencing Tools</li>
              <li>AI Learning Tools</li>
              <li>Payment Gateways</li>
              <li>Social Media Platforms</li>
              <li>Coding Practice Platforms</li>
            </ul>
          </div>

          <div className="policy-card">
            <h2>8. Children's Privacy</h2>
            <p>
              For students under 18 years of age, parental or guardian consent
              may be required before enrollment or data collection.
            </p>
          </div>

          <div className="policy-card">
            <h2>9. Payment Information</h2>
            <p>
              Payments are processed through secure third-party payment
              gateways. We do not store sensitive banking or card information
              on our servers.
            </p>
          </div>

          <div className="policy-card">
            <h2>10. Data Retention</h2>
            <ul>
              <li>Provide services</li>
              <li>Maintain academic records</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce agreements</li>
            </ul>
          </div>

          <div className="policy-card">
            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Updated versions
              will be published on this page.
            </p>
          </div>

          <div className="policy-card contact-card">
            <h2>12. Contact Us</h2>

            <p><strong>Tech Savvy School</strong></p>
            <p>Email: support@techsavvyschool.tech</p>
            <p>Phone: +91 XXXXXXXXXX</p>
            <p>Website: www.techsavvyschool.tech</p>
          </div>

          <div className="policy-card consent-card">
            <h2>13. Consent</h2>
            <p>
              By using our website and services, you consent to the collection
              and use of information as described in this Privacy Policy.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;