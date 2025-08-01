import React, { useState, useEffect } from "react";
import "./Homepage.css";
import Logo from "./assets/Logo.png";

const Homepage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setWaitlistSubmitted(true);
      setEmail("");
      setTimeout(() => setWaitlistSubmitted(false), 3000);
    }
  };

  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={Logo} alt="Bogle" />
          </div>
          <div className="nav-links">
            <a href="#payment-options" className="nav-link">
              Payment Options
            </a>
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#discount-strategy" className="nav-link">
              Pricing
            </a>
            <a href="#nonprofits" className="nav-link">
              Nonprofits
            </a>
            <button
              className="nav-cta"
              onClick={() =>
                document
                  .getElementById("waitlist")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      <div className="full-container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-container">
            <div className="hero-content">
              <div className={`hero-badge ${isVisible ? "animate-in" : ""}`}>
                <span className="badge-text">🚀 Launching Soon</span>
              </div>
              <h1 className={`hero-title ${isVisible ? "animate-in" : ""}`}>
                Smart Payments for
                <span className="hero-title-accent"> Modern Businesses</span>
              </h1>
              <p className={`hero-subtitle ${isVisible ? "animate-in" : ""}`}>
                Add Pay by Bank and crypto payment options to your existing
                setup. Reduce fees, eliminate chargebacks, and give customers
                more flexible ways to pay while keeping all your current payment
                methods.
              </p>
              <div className={`hero-actions ${isVisible ? "animate-in" : ""}`}>
                <button
                  className="btn-primary"
                  onClick={() =>
                    document
                      .getElementById("waitlist")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get Early Access
                </button>
              </div>
              <div className={`hero-stats ${isVisible ? "animate-in" : ""}`}>
                <div className="stat">
                  <span className="stat-number">80%</span>
                  <span className="stat-label">Lower fees</span>
                </div>
                <div className="stat">
                  <span className="stat-number">$0</span>
                  <span className="stat-label">Setup costs</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5min</span>
                  <span className="stat-label">Setup time</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="savings-showcase">
                <div className="savings-header">
                  <span className="showcase-label">
                    Monthly Payment Processing
                  </span>
                </div>

                <div className="savings-comparison">
                  <div className="cost-display before">
                    <div className="cost-label">Before Bogle</div>
                    <div className="cost-amount">$2,900</div>
                    <div className="cost-detail">Credit card fees</div>
                  </div>

                  <div className="savings-arrow">
                    <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                      <path
                        d="M2 10H38M38 10L32 4M38 10L32 16"
                        stroke="#22c55e"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="cost-display after">
                    <div className="cost-label">With Bogle</div>
                    <div className="cost-amount savings">$580</div>
                    <div className="cost-detail">Pay by Bank + crypto mix</div>
                  </div>
                </div>

                <div className="savings-summary">
                  <div className="savings-amount">
                    <span className="save-label">You save</span>
                    <span className="save-value">&nbsp;$2,320&nbsp;</span>
                    <span className="save-period">per month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Options Section */}
        <section className="payment-options" id="payment-options">
          <div className="payment-options-container">
            <div className="section-header">
              <h2 className="section-title">Choose Your Payment Method</h2>
              <p className="section-subtitle">
                Multiple options to fit your business needs and customer
                preferences
              </p>
            </div>
            <div className="payment-methods-grid">
              <div className="payment-method-card">
                <div className="method-icon-container">
                  <div className="method-icon credit-card">💳</div>
                </div>
                <h3 className="method-title">Credit Cards</h3>
                <p className="method-subtitle">Powered by Stripe</p>
                <div className="method-features">
                  <div className="feature-item">
                    <span className="feature-icon">⚡</span>
                    <span>Industry-leading processing with Stripe</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🔗</span>
                    <span>Seamless integration into your system</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🛡️</span>
                    <span>Advanced fraud protection</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🌐</span>
                    <span>Global acceptance and recognition</span>
                  </div>
                </div>
                <div className="method-rate">
                  <span className="rate-number">2.9%</span>
                  <span className="rate-detail">+ 30¢ per transaction</span>
                </div>
              </div>

              <div className="payment-method-card featured">
                <div className="featured-badge">Best Value</div>
                <div className="method-icon-container">
                  <div className="method-icon ach">🏦</div>
                </div>
                <h3 className="method-title">Pay by Bank</h3>
                <p className="method-subtitle">Direct bank transfers</p>
                <div className="method-features">
                  <div className="feature-item">
                    <span className="feature-icon">💰</span>
                    <span>Lower fees and reduced chargeback risk</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🔐</span>
                    <span>Pre-payment account and balance verification</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🛡️</span>
                    <span>Credit card backup for purchases over $1,000</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🔄</span>
                    <span>Lower bounce rates than credit card chargebacks</span>
                  </div>
                </div>
                <div className="method-rate">
                  <span className="rate-number">0.5%</span>
                  <span className="rate-detail">+ 25¢ per transaction</span>
                </div>
                <div className="savings-badge">Save up to 80%</div>
              </div>

              <div className="payment-method-card">
                <div className="method-icon-container">
                  <div className="method-icon crypto">₿</div>
                </div>
                <h3 className="method-title">Cryptocurrency</h3>
                <p className="method-subtitle">Digital payments</p>
                <div className="method-features">
                  <div className="feature-item">
                    <span className="feature-icon">🚫</span>
                    <span>Completely eliminate chargeback risk</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">⚡</span>
                    <span>Irreversible payments received instantly</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🪙</span>
                    <span>Multiple top tokens and coins accepted</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">💵</span>
                    <span>Receive payments in USD, no crypto volatility</span>
                  </div>
                </div>
                <div className="method-rate">
                  <span className="rate-number">0.75%</span>
                  <span className="rate-detail">No fixed fee</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Discount Strategy Section */}
        <section className="discount-strategy" id="discount-strategy">
          <div className="discount-strategy-container">
            <div className="section-header">
              <h2 className="section-title">Smart Discount Strategy</h2>
              <p className="section-subtitle">
                Encourage customers to use payment methods that save you both
                money.
              </p>
              <div className="strategy-explanation">
                <p className="explanation-text">
                  <strong>Here’s how it works:</strong> You know that credit
                  card fees are high. Bogle lets you offer customers a small
                  discount if they choose to pay with lower-cost options like
                  Pay by Bank or Crypto. This optional discount makes them feel
                  smart for choosing a better deal, and it directly reduces your
                  processing fees. You decide the discount, or if you want to
                  offer one at all. It's a win-win: your customers save money,
                  and you increase your profit on every sale.
                </p>
              </div>
            </div>
            <div className="discount-comparison">
              <div className="comparison-card">
                <div className="comparison-header">
                  <h3>Credit Cards</h3>
                  <div className="discount-badge cc-fee">
                    Standard Processing
                  </div>
                </div>
                <div className="comparison-breakdown">
                  <div className="breakdown-item">
                    <span className="label">Original price:</span>
                    <span className="value">$100.00</span>
                  </div>
                  <div className="breakdown-item">
                    <span className="label">Customer saves:</span>
                    <span className="value">$0.00 (no discount)</span>
                  </div>
                  <div className="breakdown-item">
                    <span className="label">Processing fees:</span>
                    <span className="value">$3.20 (2.9% + 30¢)</span>
                  </div>
                  <div className="breakdown-item total">
                    <span className="label">Your net revenue:</span>
                    <span className="value">$96.80</span>
                  </div>
                </div>
              </div>

              <div className="comparison-card featured">
                <div className="featured-badge">Best Value</div>
                <div className="comparison-header">
                  <h3>Pay by Bank with Optional Discount</h3>
                  <div className="discount-badge ach-discount">
                    Example: 2% Customer Discount
                  </div>
                </div>
                <div className="comparison-breakdown">
                  <div className="breakdown-item">
                    <span className="label">Original price:</span>
                    <span className="value">$100.00</span>
                  </div>
                  <div className="breakdown-item">
                    <span className="label">Customer saves:</span>
                    <span className="value">$2.00 (2% discount you offer)</span>
                  </div>
                  <div className="breakdown-item">
                    <span className="label">Processing fees:</span>
                    <span className="value">$0.74 (0.5% + 25¢)</span>
                  </div>
                  <div className="breakdown-item total">
                    <span className="label">Your net revenue:</span>
                    <span className="value">$97.26</span>
                  </div>
                  <div className="savings-highlight">
                    <span className="savings-amount">Customer saves $2.00</span>
                    <span className="savings-text">
                      You earn $0.46 more vs credit cards
                    </span>
                  </div>
                </div>
              </div>

              <div className="comparison-card">
                <div className="comparison-header">
                  <h3>Crypto with Optional Discount</h3>
                  <div className="discount-badge crypto-discount">
                    Example: 1.5% Customer Discount
                  </div>
                </div>
                <div className="comparison-breakdown">
                  <div className="breakdown-item">
                    <span className="label">Original price:</span>
                    <span className="value">$100.00</span>
                  </div>
                  <div className="breakdown-item">
                    <span className="label">Customer saves:</span>
                    <span className="value">
                      $1.50 (1.5% discount you offer)
                    </span>
                  </div>
                  <div className="breakdown-item">
                    <span className="label">Processing fees:</span>
                    <span className="value">$0.75 (0.75%)</span>
                  </div>
                  <div className="breakdown-item total">
                    <span className="label">Your net revenue:</span>
                    <span className="value">$97.75</span>
                  </div>
                  <div className="savings-highlight">
                    <span className="savings-amount">Customer saves $1.50</span>
                    <span className="savings-text">
                      You earn $0.95 more vs credit cards
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="discount-benefits">
              <div className="benefit-item">
                <span className="benefit-icon">💰</span>
                <div className="benefit-content">
                  <h4>Reduce Your Fees</h4>
                  <p>Lower processing costs mean higher profit margins</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🛡️</span>
                <div className="benefit-content">
                  <h4>Prevent Chargebacks</h4>
                  <p>
                    Pay by Bank and crypto eliminate chargeback risk entirely
                  </p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">😊</span>
                <div className="benefit-content">
                  <h4>Improve Customer Experience</h4>
                  <p>
                    Give customers more payment options and potential savings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services" id="services">
          <div className="services-container">
            <div className="section-header">
              <h2 className="section-title">Complete Payment Solutions</h2>
              <p className="section-subtitle">
                Everything you need to streamline your payment operations
              </p>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">📄</div>
                <h3 className="service-title">Smart Invoicing</h3>
                <p className="service-description">
                  Send beautiful digital or paper invoices and let customers
                  choose their preferred payment method
                </p>
                <ul className="service-features">
                  <li>Customizable invoice templates</li>
                  <li>Automatic payment reminders</li>
                  <li>Multi-payment option display</li>
                  <li>Real-time payment tracking</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon">🛍️</div>
                <h3 className="service-title">Shopify Integration</h3>
                <p className="service-description">
                  Seamlessly add Bogle to your Shopify payment portal for
                  enhanced checkout options
                </p>
                <ul className="service-features">
                  <li>One-click Shopify integration</li>
                  <li>Native checkout experience</li>
                  <li>Automatic order synchronization</li>
                  <li>Real-time payment status updates</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon">🌐</div>
                <h3 className="service-title">Website Integration</h3>
                <p className="service-description">
                  Integrate our payment services directly into your custom
                  website with our developer-friendly API
                </p>
                <ul className="service-features">
                  <li>RESTful API and SDKs</li>
                  <li>Customizable payment widgets</li>
                  <li>Webhook notifications</li>
                  <li>Comprehensive documentation</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon">📅</div>
                <h3 className="service-title">Calendar Booking</h3>
                <p className="service-description">
                  Track bookings simply and secure payments upfront so you never
                  worry about no-shows
                </p>
                <ul className="service-features">
                  <li>Integrated booking calendar</li>
                  <li>Automated payment collection</li>
                  <li>Deposit and full payment options</li>
                  <li>Cancellation protection</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon">📱</div>
                <h3 className="service-title">Mobile Payments</h3>
                <p className="service-description">
                  Accept payments on-the-go with our mobile-optimized payment
                  links and QR codes
                </p>
                <ul className="service-features">
                  <li>QR code payment generation</li>
                  <li>Mobile-optimized checkout</li>
                  <li>Text and email payment links</li>
                  <li>Instant payment notifications</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon">🔄</div>
                <h3 className="service-title">Recurring Payments</h3>
                <p className="service-description">
                  Set up automatic recurring payments for subscriptions,
                  memberships, and regular services
                </p>
                <ul className="service-features">
                  <li>Flexible billing cycles</li>
                  <li>Automatic retry logic</li>
                  <li>Customer portal access</li>
                  <li>Dunning management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Differently Section */}
        <section className="differentiators">
          <div className="differentiators-container">
            <div className="section-header">
              <h2 className="section-title">What Makes Bogle Different</h2>
              <p className="section-subtitle">
                We're not just another payment processor – we're your strategic
                partner
              </p>
            </div>
            <div className="differentiators-grid">
              <div className="differentiator-card">
                <div className="diff-number">01</div>
                <div className="diff-content">
                  <h3>Complete Price Transparency</h3>
                  <p>
                    No hidden fees, no surprises, no upfront costs. You only pay
                    when you process payments. Every fee is clearly outlined
                    upfront.
                  </p>
                </div>
              </div>
              <div className="differentiator-card">
                <div className="diff-number">02</div>
                <div className="diff-content">
                  <h3>Dedicated Technical Support</h3>
                  <p>
                    Our technical support team helps you help your customers.
                    Get expert assistance when you need it most.
                  </p>
                </div>
              </div>
              <div className="differentiator-card">
                <div className="diff-number">03</div>
                <div className="diff-content">
                  <h3>Smart Payment Guidance</h3>
                  <p>
                    Intelligent recommendations guide customers to the most
                    cost-effective payment methods through optional discounts
                    you control.
                  </p>
                </div>
              </div>
              <div className="differentiator-card">
                <div className="diff-number">04</div>
                <div className="diff-content">
                  <h3>Expand Your Customer Base</h3>
                  <p>
                    More payment options mean more customers can complete
                    purchases. Capture sales you're currently losing due to
                    limited payment methods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nonprofits Section */}
        <section className="nonprofits" id="nonprofits">
          <div className="nonprofits-container">
            <div className="nonprofits-content">
              <div className="nonprofits-text">
                <h2 className="section-title">Bogle for Nonprofits</h2>
                <p className="section-subtitle">
                  Maximize your impact by minimizing payment costs
                </p>
                <div className="nonprofit-benefits">
                  <div className="nonprofit-benefit">
                    <div className="benefit-icon">💚</div>
                    <div className="benefit-text">
                      <h4>Reduce Donation Fees</h4>
                      <p>
                        Give donors cheaper payment options that reduce your
                        processing costs
                      </p>
                    </div>
                  </div>
                  <div className="nonprofit-benefit">
                    <div className="benefit-icon">🛡️</div>
                    <div className="benefit-text">
                      <h4>Minimize Risk</h4>
                      <p>
                        Reduce chargeback risk and credit card fraud with safer
                        payment methods
                      </p>
                    </div>
                  </div>
                  <div className="nonprofit-benefit">
                    <div className="benefit-icon">🚀</div>
                    <div className="benefit-text">
                      <h4>Streamline Operations</h4>
                      <p>
                        Use our complete suite of features to simplify your
                        payment processes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nonprofits-visual">
                <div className="nonprofit-impact-card">
                  <div className="impact-header">
                    <h3>Your Impact</h3>
                    <span className="impact-period">This Month</span>
                  </div>
                  <div className="impact-stats">
                    <div className="impact-stat">
                      <span className="stat-value">$2,840</span>
                      <span className="stat-label">Saved in fees</span>
                    </div>
                    <div className="impact-stat">
                      <span className="stat-value">847</span>
                      <span className="stat-label">Donations processed</span>
                    </div>
                    <div className="impact-stat">
                      <span className="stat-value">0</span>
                      <span className="stat-label">Chargebacks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="integrations">
          <div className="integrations-container">
            <div className="section-header">
              <h2 className="section-title">Seamless Integrations</h2>
              <p className="section-subtitle">
                Connect with your favorite tools to make setup effortless
              </p>
            </div>
            <div className="integrations-grid">
              <div className="integration-card">
                <div className="integration-icon">📊</div>
                <h3 className="integration-title">QuickBooks</h3>
                <p className="integration-description">
                  Integrate with QuickBooks to manage your accounting simply and
                  automatically sync transactions
                </p>
                <div className="integration-status">
                  <span className="status-badge available">Available</span>
                </div>
              </div>

              <div className="integration-card">
                <div className="integration-icon">🛍️</div>
                <h3 className="integration-title">Shopify</h3>
                <p className="integration-description">
                  Use one or multiple payment options on your Shopify site with
                  native checkout integration
                </p>
                <div className="integration-status">
                  <span className="status-badge available">Available</span>
                </div>
              </div>

              <div className="integration-card">
                <div className="integration-icon">📦</div>
                <h3 className="integration-title">Inventory Management</h3>
                <p className="integration-description">
                  Manage your inventory and track order flow seamlessly with
                  real-time updates
                </p>
                <div className="integration-status">
                  <span className="status-badge coming-soon">Coming Soon</span>
                </div>
              </div>

              <div className="integration-card">
                <div className="integration-icon">📈</div>
                <h3 className="integration-title">Data Analytics</h3>
                <p className="integration-description">
                  View customer spend patterns, payment method selection, and
                  detailed transaction analytics
                </p>
                <div className="integration-status">
                  <span className="status-badge available">Available</span>
                </div>
              </div>

              <div className="integration-card">
                <div className="integration-icon">📧</div>
                <h3 className="integration-title">Email Marketing</h3>
                <p className="integration-description">
                  Connect with Mailchimp, Klaviyo, and other email platforms for
                  automated customer communications
                </p>
                <div className="integration-status">
                  <span className="status-badge coming-soon">Coming Soon</span>
                </div>
              </div>

              <div className="integration-card">
                <div className="integration-icon">💬</div>
                <h3 className="integration-title">Customer Support</h3>
                <p className="integration-description">
                  Integrate with Zendesk, Intercom, and other support tools for
                  seamless customer service
                </p>
                <div className="integration-status">
                  <span className="status-badge coming-soon">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section className="waitlist" id="waitlist">
          <div className="waitlist-container">
            <div className="waitlist-content">
              <h2 className="section-title">Join the Waitlist</h2>
              <p className="section-subtitle">
                Be among the first to access Bogle and start expanding payment
                options for your customers
              </p>
              <form className="waitlist-form" onSubmit={handleWaitlistSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="email-input"
                    required
                  />
                  <button type="submit" className="waitlist-button">
                    {waitlistSubmitted ? "✓ Added!" : "Join Waitlist"}
                  </button>
                </div>
                <p className="waitlist-note">
                  Get early access • No spam, ever • Unsubscribe anytime
                </p>
              </form>
              {waitlistSubmitted && (
                <div className="success-message">
                  <span className="success-icon">🎉</span>
                  <span>Thanks! We'll be in touch soon.</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="cta">
          <div className="cta-container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Transform Your Payments?</h2>
              <p className="cta-subtitle">
                Join our group of pioneering businesses already reducing costs
                and expanding options for customers with Bogle.
              </p>
              <button
                className="cta-button"
                onClick={() =>
                  document
                    .getElementById("waitlist")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Get Early Access
              </button>
              <div className="cta-note">
                No setup fees • No upfront costs • Cancel anytime
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-brand">
                <img src={Logo} alt="Bogle" className="footer-logo" />
                <p className="footer-tagline">
                  Smart payments for modern businesses
                </p>
              </div>
              <div className="footer-links">
                <div className="footer-section">
                  <h4>Product</h4>
                  <a href="#payment-options">Payment Options</a>
                  <a href="#services">Services</a>
                  <a href="#discount-strategy">Pricing</a>
                  <a href="#integrations">Integrations</a>
                </div>
                <div className="footer-section">
                  <h4>Solutions</h4>
                  <a href="#nonprofits">Nonprofits</a>
                  <a href="#">Small Business</a>
                  <a href="#">Enterprise</a>
                  <a href="#">E-commerce</a>
                </div>
                <div className="footer-section">
                  <h4>Support</h4>
                  <a href="#">Help Center</a>
                  <a href="#">Documentation</a>
                  <a href="#">API Reference</a>
                  <a href="#">Contact Support</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 Bogle. All rights reserved.</p>
              <div className="footer-legal">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Security</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Homepage;
