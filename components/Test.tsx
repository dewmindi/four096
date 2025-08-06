<section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-6xl  text-gray-900 mb-4 font-dm-sans">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of professional services designed to elevate your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Summary Box */}
            <Link href={'/about'}>
              <div
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"

              >
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">About Us</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Over 2 decades of experience in software development, integration, and consulting with specialized
                    expertise in business solutions.
                  </p>
                  <div className="text-blue-600 font-semibold flex items-center justify-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Services Summary Box */}
            <Link href={'/services'}>
              <div
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => handleNavClick("services")}
              >
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Code className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Services</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    ERP consulting, custom software development, and cloud integration services tailored to your business
                    needs.
                  </p>
                  <div className="text-green-600 font-semibold flex items-center justify-center">
                    Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
            {/* Contact Summary Box */}
            <div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => handleNavClick("contact")}
            >
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Ready to transform your business? Get in touch with our team of experts for a consultation.
                </p>
                <div className="text-purple-600 font-semibold flex items-center justify-center">
                  Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>