'use client'

import { useState, useEffect } from 'react'

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interest: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  // Apply dark mode to document - THIS IS CRUCIAL FOR DARK MODE TO WORK
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  // Handle contact form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Using Formspree with your actual form ID
      const response = await fetch('https://formspree.io/f/xzzvpzqz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setContactForm({ name: '', email: '', company: '', message: '', interest: 'general' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    }

    setIsSubmitting(false)
    setTimeout(() => setSubmitStatus(''), 5000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Dark Mode Toggle */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg transition-all duration-300 text-xl"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Hero Section */}
        <header className="py-16 px-4 text-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            MihiraX
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-700 dark:text-gray-300 mt-2">
            Intelligent AI Solutions
          </p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Transform Your Business with Cutting-Edge AI Technology
          </p>
          <p className="mt-2 text-gray-500 dark:text-gray-500 max-w-3xl mx-auto">
            Empowering enterprises with intelligent automation, document processing, and conversational AI solutions that drive real results.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#contact" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium">
              Get Started
            </a>
            <button className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 font-medium">
              View Demo
            </button>
            <a href="#contact" className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium">
              Contact Sales
            </a>
          </div>
        </header>

        <main className="px-6 py-12 max-w-7xl mx-auto space-y-24">
          {/* About */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">About MihiraX</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Mihirax specializes in developing enterprise-grade AI solutions that seamlessly integrate into your existing workflows.
              Our advanced technology stack combines machine learning, natural language processing, and computer vision to solve complex business challenges.
            </p>
          </section>

          {/* Founder Section */}
          <section className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">Meet the Founder</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1 text-center">
                  <div className="w-52 h-52 mx-auto bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-7xl font-bold shadow-2xl ring-4 ring-white dark:ring-gray-700">
                    YP
                  </div>
                  <h3 className="text-2xl font-bold mt-6 text-gray-900 dark:text-gray-100">Yeragudipati Pratap</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">Founder & CEO</p>
                </div>
                <div className="lg:col-span-2">
                  <div className="space-y-6 text-gray-700 dark:text-gray-300">
                    <p className="text-xl leading-relaxed">
                      <strong className="text-gray-900 dark:text-gray-100">Visionary AI Engineer & Entrepreneur</strong> with a passion for transforming complex business challenges into elegant, intelligent solutions.
                    </p>
                    <p className="text-lg">
                      With deep expertise in <strong className="text-gray-900 dark:text-gray-100">machine learning, computer vision, and natural language processing</strong>, Pratap founded MihiraX with a mission to democratize AI technology for businesses of all sizes.
                    </p>
                    <p className="text-lg">
                      His hands-on approach to AI development ensures that every MihiraX solution is not just technically advanced, but practically valuable for real-world business operations.
                    </p>
                    <div className="pt-4">
                      <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-4 text-lg">Core Expertise:</h4>
                      <div className="flex flex-wrap gap-3">
                        <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">Machine Learning</span>
                        <span className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium">Computer Vision</span>
                        <span className="bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium">NLP & LLMs</span>
                        <span className="bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium">Document AI</span>
                        <span className="bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 px-4 py-2 rounded-full text-sm font-medium">Enterprise Architecture</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Solutions */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">Our Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Intelligent Document Processing</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">AI-powered extraction with 99%+ accuracy across all document types, from invoices to contracts.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💬</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Conversational AI Platform</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Advanced chatbots with natural language understanding and multi-channel support.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📊</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Workflow Automation</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">End-to-end process orchestration with intelligent routing and real-time monitoring.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏢</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Enterprise AI Platform</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Multi-tenant, scalable solutions with custom model training and enterprise security.</p>
              </div>
            </div>
          </section>

          {/* Featured Product */}
          <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">Featured Product: Vritti</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                Our flagship AI-powered invoice processing platform that transforms financial workflows with mindful automation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">99%+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">&lt;3s</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Processing Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">95%</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Time Savings</div>
                </div>
              </div>
              <a href="https://vritti.us" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-lg">
                Learn More About Vritti
              </a>
            </div>
          </section>

          {/* Why Choose */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">Why Choose MihiraX?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "⚡", title: "Rapid Deployment", desc: "Get up and running in days, not months, with our pre-built solutions." },
                { icon: "🎯", title: "Proven Accuracy", desc: "Industry-leading accuracy rates backed by real-world validation." },
                { icon: "🔧", title: "Seamless Integration", desc: "RESTful APIs and pre-built connectors for smooth integration." },
                { icon: "📈", title: "Scalable Architecture", desc: "Cloud-native solutions that scale from startups to enterprises." },
                { icon: "🛡️", title: "Enterprise Security", desc: "Bank-grade security and compliance features protect your data." },
                { icon: "🎓", title: "Expert Support", desc: "Dedicated specialists provide ongoing optimization and support." }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100 text-lg">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Success Metrics */}
          <section className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-800 dark:to-slate-800 rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">Proven Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">99%+</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">AI Accuracy</div>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">87%</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Cost Reduction</div>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">4 Months</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Average ROI</div>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">24/7</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Support Available</div>
              </div>
            </div>
          </section>

          {/* Contact Form Section - THE NEW ADDITION! */}
          <section id="contact" className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">Get Started Today</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-10 max-w-2xl mx-auto">
                Ready to transform your business with AI? Let's discuss your specific needs and show you how MihiraX can deliver results.
              </p>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={contactForm.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={contactForm.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={contactForm.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Primary Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={contactForm.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="document-processing">Document Processing</option>
                    <option value="conversational-ai">Conversational AI</option>
                    <option value="workflow-automation">Workflow Automation</option>
                    <option value="enterprise-platform">Enterprise Platform</option>
                    <option value="vritti">Vritti Invoice Processing</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={contactForm.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, challenges, or questions..."
                  />
                </div>

                <div className="md:col-span-2 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-lg disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {submitStatus === 'success' && (
                    <p className="mt-4 text-green-600 dark:text-green-400 font-medium">
                      ✅ Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                  )}

                  {submitStatus === 'error' && (
                    <p className="mt-4 text-red-600 dark:text-red-400 font-medium">
                      ❌ Sorry, there was an error sending your message. Please try again or email us directly.
                    </p>
                  )}
                </div>
              </form>

              <div className="mt-12 text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Prefer to Contact Us Directly?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl mb-2">📧</div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Email</p>
                    <a href="mailto:hello@mihirax.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                      hello@mihirax.com
                    </a>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">📞</div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Phone</p>
                    <a href="tel:+15551234567" className="text-blue-600 dark:text-blue-400 hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">📍</div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Location</p>
                    <p className="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-white mb-4 text-xl">MihiraX</h3>
                <p className="text-sm leading-relaxed">Intelligent AI Solutions for Modern Business</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Solutions</h4>
                <ul className="text-sm space-y-2">
                  <li className="hover:text-white transition-colors cursor-pointer">Document Processing</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Conversational AI</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Workflow Automation</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Enterprise Platform</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Company</h4>
                <ul className="text-sm space-y-2">
                  <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Press</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Legal</h4>
                <ul className="text-sm space-y-2">
                  <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Security</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Support</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 dark:border-gray-800 mt-10 pt-8 text-center text-sm">
              © 2025 MihiraX Inc. All rights reserved. Founded by Yeragudipati Pratap.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}