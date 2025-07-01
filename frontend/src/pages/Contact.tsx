import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, MessageCircle, Calendar, Users } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'Kathmandu-4 Constituency Office',
        'Kathmandu, Nepal'
      ]
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        '+977-1-XXXXXXX (Office)',
        '+977-98XXXXXXXX (Public Relations)'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'contact@gaganthapa.com',
        'office@nc-gaganthapa.org'
      ]
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 5:00 PM',
        'Saturday: 10:00 AM - 2:00 PM (By Appointment)'
      ]
    }
  ];

  const officeLocations = [
    {
      name: 'Constituency Office',
      address: 'Kathmandu-4, Kathmandu',
      description: 'Main office for constituent services and meetings',
      hours: 'Mon-Fri 9:00 AM - 5:00 PM'
    },
    {
      name: 'Nepali Congress Party Office',
      address: 'Sanepa, Lalitpur',
      description: 'Party headquarters and administrative office',
      hours: 'Mon-Sat 9:00 AM - 6:00 PM'
    },
    {
      name: 'Parliament Office',
      address: 'Federal Parliament Building, New Baneshwor',
      description: 'Parliamentary duties and legislative work',
      hours: 'During Parliamentary Sessions'
    }
  ];

  const connectReasons = [
    {
      icon: MessageCircle,
      title: 'Policy Consultation',
      description: 'Share your views on healthcare, education, and employment policies'
    },
    {
      icon: Users,
      title: 'Community Issues',
      description: 'Report local issues and seek assistance for community development'
    },
    {
      icon: Calendar,
      title: 'Event Invitations',
      description: 'Invite for community events, discussions, and public gatherings'
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            Your voice matters. Connect with us to share your concerns, ideas, and be part of Nepal's democratic process.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact <span className="text-green-700">Information</span>
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to reach out and connect with our office and team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-700 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Office <span className="text-green-700">Locations</span>
            </h2>
            <p className="text-xl text-gray-600">
              Visit us at any of our office locations for meetings and consultations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="text-green-700" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">{office.name}</h3>
                </div>
                <p className="text-gray-700 mb-3">{office.address}</p>
                <p className="text-gray-600 text-sm mb-3">{office.description}</p>
                <div className="flex items-center space-x-2 text-sm text-green-700">
                  <Clock size={16} />
                  <span>{office.hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Connect */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why <span className="text-green-700">Connect?</span>
            </h2>
            <p className="text-xl text-gray-600">
              Your engagement helps shape better policies and stronger democratic governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {connectReasons.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <reason.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Follow on Social Media
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Stay updated with the latest news, policies, and activities through our social media channels.
          </p>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
            >
              <Facebook size={32} />
            </a>
            <a 
              href="#" 
              className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
            >
              <Twitter size={32} />
            </a>
            <a 
              href="#" 
              className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
            >
              <Instagram size={32} />
            </a>
          </div>

          <div className="mt-8 text-green-100">
            <p>@GaganThapaNC | @NepalCongress | #ProgressiveNepal</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Send a <span className="text-green-700">Message</span>
            </h2>
            <p className="text-xl text-gray-600">
              We value your input and will respond to your messages promptly.
            </p>
          </div>

          <form className="bg-gray-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-green-700"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-green-700"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <select
                id="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-green-700"
              >
                <option value="">Select a subject</option>
                <option value="policy">Policy Consultation</option>
                <option value="community">Community Issue</option>
                <option value="event">Event Invitation</option>
                <option value="media">Media Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-green-700"
                placeholder="Please describe your message, concern, or inquiry..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;