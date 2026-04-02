/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  MapPin, 
  Clock, 
  Phone, 
  Star, 
  ChevronRight, 
  ArrowRight, 
  Check,
  ShoppingBag,
  Info,
  Mail
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-[var(--accent-color)] selection:text-[var(--dark-background-color)]">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <img 
                src="https://assets.ls-assets.com/uploads/6a48d796-7dd8-4ebf-9155-0cb371280e62/72303900-0653-4e88-bfa8-4cd1a0d1c96e.webp?w=160" 
                alt="Brillakis Import Foods" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {['About Us', 'Products', 'Visit Us', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className={`font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--accent-color)] after:transition-all after:duration-300 hover:after:w-full ${
                    isScrolled ? 'text-[var(--dark-text-color)] hover:text-[var(--primary-color)]' : 'text-white hover:text-[var(--accent-color)]'
                  }`}
                >
                  {item}
                </a>
              ))}
              <a 
                href="#visit-us" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary-color)] text-white font-semibold rounded-[var(--button-rounded-radius)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              type="button" 
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'hover:bg-[var(--light-background-color)] text-[var(--dark-text-color)]' : 'hover:bg-white/10 text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden pb-6 overflow-hidden"
              >
                <div className="flex flex-col gap-4 pt-4 border-t border-[var(--light-border-color)]">
                  {['About Us', 'Products', 'Visit Us', 'Contact'].map((item) => (
                    <a 
                      key={item}
                      href={`#${item.toLowerCase().replace(' ', '-')}`} 
                      className="text-[var(--dark-text-color)] hover:text-[var(--primary-color)] font-medium py-2 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                  <a 
                    href="#visit-us" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary-color)] text-white font-semibold rounded-[var(--button-rounded-radius)] mt-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://raw.githubusercontent.com/thegreekdirectory/listings/main/images/grocery-imports/brillakis-import-foods/photos/photos/photo-1.jpeg?w=1920" 
            alt="Authentic Greek Imports & Specialty Foods" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--dark-background-color)]/90 via-[var(--dark-background-color)]/70 to-[var(--dark-background-color)]/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>

        {/* Greek Meander Pattern Decoration */}
        <div className="absolute top-0 left-0 right-0 h-2 z-10 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 20" preserveAspectRatio="none">
            <pattern id="meander" x="0" y="0" width="80" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 L10 10 L10 0 L20 0 L20 10 L30 10 L30 20 L40 20 L40 10 L50 10 L50 0 L60 0 L60 10 L70 10 L70 20 L80 20 L80 10" fill="none" stroke="#d4af37" strokeWidth="2" />
            </pattern>
            <rect x="0" y="0" width="1200" height="20" fill="url(#meander)" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-[var(--accent-color)] fill-current" />
                <span className="text-white font-semibold">4.8</span>
              </div>
              <span className="text-white/80">|</span>
              <span className="text-white/90 text-sm">50+ Happy Customers</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Authentic Greek Imports<br />
              <span className="text-[var(--accent-color)]">& Specialty Foods</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Bringing the finest products from Chania, Crete to the Chicago area.
              Family-owned since 1979, serving our community with passion and
              tradition.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a href="#visit-us" className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent-color)] text-[var(--dark-background-color)] font-bold text-lg rounded-[var(--button-rounded-radius)] hover:bg-[var(--accent3-color)] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                <MapPin className="w-5 h-5" />
                Get Directions
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="tel:+18479661250" className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[var(--primary-color)] font-bold text-lg rounded-[var(--button-rounded-radius)] hover:bg-[var(--light-background-color)] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            {/* Quick Info Bar */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 px-4 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <MapPin className="w-6 h-6 text-[var(--accent-color)]" />
                <span className="text-white font-medium">Niles, Illinois</span>
              </div>
              <div className="flex items-center justify-center gap-3 px-4 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <Clock className="w-6 h-6 text-[var(--accent-color)]" />
                <span className="text-white font-medium">Mon-Sat 9AM-6PM</span>
              </div>
              <div className="flex items-center justify-center gap-3 px-4 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <Phone className="w-6 h-6 text-[var(--accent-color)]" />
                <span className="text-white font-medium">(847) 966-1250</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <ArrowRight className="w-8 h-8 text-white/60 rotate-90" />
        </motion.div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10 rotate-180">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about-us" className="py-20 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 bg-[var(--light-background-color)] text-[var(--primary-color)] font-semibold text-sm rounded-full mb-6">Our Story</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark-text-color)] mb-6 leading-tight">
                A Greek Family Tradition<br />
                <span className="text-[var(--accent-color)]">Since 1979</span>
              </h2>
              <p className="text-lg text-[var(--gray-text-color)] mb-6 leading-relaxed">
                Founded by John Brillakis, a proud son of Chania, Crete, our store has
                been bringing the authentic flavors of Greece to the Chicago area for
                over four decades. Today, John's son Manolis continues this cherished
                family tradition.
              </p>
              <p className="text-lg text-[var(--gray-text-color)] mb-8 leading-relaxed">
                Every product on our shelves tells a story of Greek heritage,
                craftsmanship, and the Mediterranean way of life. From extra virgin
                olive oils pressed in Crete's sun-drenched groves to barrel-aged feta
                cheeses, we import only the finest authentic Greek products.
              </p>

              {/* Feature List */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  'Family Owned',
                  'Direct Imports',
                  'Cretan Heritage',
                  'Community First'
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent-color)]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-[var(--accent-color)]" />
                    </div>
                    <span className="text-[var(--dark-text-color)] font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <a href="#products" className="inline-flex items-center gap-2 text-[var(--primary-color)] font-semibold hover:text-[var(--accent-color)] transition-colors duration-300 group">
                Explore Our Products
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Image Grid */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img 
                  src="https://assets.ls-assets.com/provider/istock/2179191945.jpg?w=800" 
                  alt="Greek grocery store shelves with imported products" 
                  className="w-full rounded-2xl shadow-2xl"
                />
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-[var(--light-border-color)] max-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-6 h-6 text-[var(--accent-color)] fill-current" />
                    <span className="font-bold text-[var(--dark-text-color)]">4.8 Stars</span>
                  </div>
                  <p className="text-sm text-[var(--gray-text-color)]">
                    Rated by 50+ satisfied customers
                  </p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-[var(--accent-color)]/20 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[var(--accent-color)]/10 rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 lg:py-32 bg-[var(--light-background-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark-text-color)] mb-4">Our Specialty Products</h2>
            <p className="text-lg text-[var(--gray-text-color)] max-w-2xl mx-auto">
              We take pride in sourcing the highest quality ingredients directly from Greece and local producers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Extra Virgin Olive Oil',
                desc: 'Directly imported from Chania, Crete. Cold-pressed and full of flavor.',
                icon: <ShoppingBag className="w-6 h-6" />,
                image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80'
              },
              {
                title: 'Authentic Greek Feta',
                desc: 'Barrel-aged and creamy, our feta is the real deal from Greek dairies.',
                icon: <ShoppingBag className="w-6 h-6" />,
                image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?w=800&q=80'
              },
              {
                title: 'Greek Wines & Spirits',
                desc: 'A curated selection of Ouzo, Tsipouro, and fine wines from across Greece.',
                icon: <ShoppingBag className="w-6 h-6" />,
                image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80'
              },
              {
                title: 'Wild Thyme Honey',
                desc: 'Pure, aromatic honey harvested from the mountains of Crete.',
                icon: <ShoppingBag className="w-6 h-6" />,
                image: 'https://images.unsplash.com/photo-1584473457406-623028fed5e8?w=800&q=80'
              },
              {
                title: 'Greek Coffee & Frappe',
                desc: 'Traditional blends for that perfect morning ritual or afternoon break.',
                icon: <ShoppingBag className="w-6 h-6" />,
                image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?w=800&q=80'
              },
              {
                title: 'Olives & Meze',
                desc: 'Kalamata olives, stuffed grape leaves, and other traditional appetizers.',
                icon: <ShoppingBag className="w-6 h-6" />,
                image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?w=800&q=80'
              }
            ].map((product, idx) => (
              <motion.div 
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-[var(--primary-color)]/10 rounded-xl flex items-center justify-center mb-6 text-[var(--primary-color)]">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--dark-text-color)] mb-3">{product.title}</h3>
                  <p className="text-[var(--gray-text-color)] leading-relaxed">
                    {product.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section id="visit-us" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark-text-color)] mb-8">Visit Our Store</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent-color)]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[var(--accent-color)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[var(--dark-text-color)] mb-1">Location</h4>
                    <p className="text-[var(--gray-text-color)]">
                      8534 W Golf Rd<br />
                      Niles, IL 60714
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent-color)]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[var(--accent-color)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[var(--dark-text-color)] mb-1">Store Hours</h4>
                    <div className="text-[var(--gray-text-color)] grid grid-cols-2 gap-x-4">
                      <span>Mon - Sat:</span>
                      <span>9:00 AM - 6:00 PM</span>
                      <span>Sunday:</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent-color)]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[var(--accent-color)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[var(--dark-text-color)] mb-1">Contact</h4>
                    <p className="text-[var(--gray-text-color)]">
                      (847) 966-1250
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=8534+W+Golf+Rd,+Niles,+IL+60714" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary-color)] text-white font-bold rounded-[var(--button-rounded-radius)] hover:bg-[var(--primary-button-hover-bg-color)] transition-all duration-300 shadow-lg"
                >
                  Open in Google Maps
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-[var(--light-border-color)]"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d2962.81057813544!2d-87.842777!3d42.041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb92555555555%3A0x7230390006534e88!2sBrillakis%20Import%20Foods!5e0!3m2!1sen!2sus!4v1712056000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Brillakis Import Foods Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[var(--dark-background-color)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="col-span-1 lg:col-span-1">
              <img 
                src="https://assets.ls-assets.com/uploads/6a48d796-7dd8-4ebf-9155-0cb371280e62/72303900-0653-4e88-bfa8-4cd1a0d1c96e.webp?w=160" 
                alt="Brillakis Import Foods" 
                className="h-12 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-white/60 leading-relaxed">
                Authentic Greek grocery store bringing the finest products from Crete to the heart of Illinois since 1979.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {['About Us', 'Products', 'Visit Us', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-[var(--accent-color)] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/60">
                  <MapPin className="w-5 h-5 text-[var(--accent-color)] flex-shrink-0" />
                  <span>8534 W Golf Rd, Niles, IL 60714</span>
                </li>
                <li className="flex items-center gap-3 text-white/60">
                  <Phone className="w-5 h-5 text-[var(--accent-color)] flex-shrink-0" />
                  <span>(847) 966-1250</span>
                </li>
                <li className="flex items-center gap-3 text-white/60">
                  <Mail className="w-5 h-5 text-[var(--accent-color)] flex-shrink-0" />
                  <span>info@brillakis.com</span>
                </li>
              </ul>
            </div>

            {/* Newsletter/Social */}
            <div>
              <h4 className="text-lg font-bold mb-6">Follow Us</h4>
              <p className="text-white/60 mb-6">Stay updated with our latest imports and seasonal specialties.</p>
              <div className="flex gap-4">
                {/* Social icons could go here */}
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--accent-color)] transition-colors cursor-pointer">
                  <Info className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Brillakis Import Foods. All rights reserved.
            </p>
            <div className="flex gap-6 text-white/40 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
