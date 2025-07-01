import { Heart, Users, Home, Calendar, BookOpen, Star, Shield } from 'lucide-react';
import Profile from '../assets/profile.jpg';

const Personal = () => {
  const familyMembers = [
    {
      name: 'Dr. Anjana KC Thapa',
      relation: 'Spouse',
      description: 'Married in 2008. Daughter of politician Arjun Narasingh KC.',
      icon: Heart
    },
    {
      name: 'Gargi Thapa',
      relation: 'Daughter',
      description: 'Elder daughter, representing the next generation of Nepal.',
      icon: Star
    },
    {
      name: 'Gia Thapa',
      relation: 'Daughter',
      description: 'Younger daughter, bringing joy and inspiration to the family.',
      icon: Star
    }
  ];

  const coreValues = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Maintaining ethical standards and honest leadership in all aspects of life and politics.'
    },
    {
      icon: Users,
      title: 'Public Service',
      description: 'Dedicated commitment to serving the people of Nepal and improving their quality of life.'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Embracing knowledge, education, and staying updated with global best practices.'
    },
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Understanding and addressing the needs and struggles of ordinary citizens.'
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Personal Life & Values
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            The personal foundation that shapes leadership philosophy and commitment to public service.
          </p>
        </div>
      </section>

      {/* Family Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Family <span className="text-green-700">Life</span>
            </h2>
            <p className="text-xl text-gray-600">
              A strong family foundation that provides support, inspiration, and grounding for public service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-green-50 p-8 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Home className="text-green-700" size={24} />
                  <h3 className="text-2xl font-semibold text-gray-900">Family Overview</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Gagan Kumar Thapa's family life reflects his commitment to balancing public service 
                  with personal responsibilities. His family provides the emotional support and 
                  grounding necessary for effective leadership while sharing his vision for a better Nepal.
                </p>
              </div>

              <div className="bg-green-50 p-8 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="text-green-700" size={24} />
                  <h3 className="text-2xl font-semibold text-gray-900">Marriage</h3>
                </div>
                <p className="text-gray-700">
                  <strong>Married:</strong> 2008<br/>
                  <strong>Spouse:</strong> Dr. Anjana KC Thapa<br/>
                  <strong>Background:</strong> Daughter of politician Arjun Narasingh KC
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {familyMembers.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-700">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <member.icon className="text-green-700" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                      <p className="text-green-700 font-medium mb-2">{member.relation}</p>
                      <p className="text-gray-700 text-sm">{member.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core <span className="text-green-700">Values</span>
            </h2>
            <p className="text-xl text-gray-600">
              The fundamental principles that guide personal conduct and political leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center">
                    <value.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                </div>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Personal <span className="text-green-700">Philosophy</span>
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Grounded Leadership</h3>
              <p className="text-gray-700 leading-relaxed">
                Gagan emphasizes grounded leadership through public interaction and maintaining integrity. 
                He runs entrepreneurial ventures not just for income diversification, but to stay connected 
                with the challenges of ordinary business owners and entrepreneurs in Nepal.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Work-Life Balance</h3>
              <p className="text-gray-700 leading-relaxed">
                Despite the demanding nature of political life, Gagan prioritizes family time and 
                personal relationships. He believes that leaders who are grounded in family values 
                are better equipped to understand and serve the needs of other families in society.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Next Generation Focus</h3>
              <p className="text-gray-700 leading-relaxed">
                As a father of two daughters, Gagan is particularly motivated to create a Nepal where 
                the next generation can thrive. His policies and vision are often shaped by considering 
                what kind of country he wants to leave for his children and all Nepalese youth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Entrepreneurial Ventures */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Beyond Politics
            </h2>
            <p className="text-xl text-green-100">
              Entrepreneurial activities that demonstrate commitment to economic development and youth inspiration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Agricultural Ventures</h3>
              <p className="text-green-100">
                Personally runs agricultural businesses to inspire and support youth-led enterprises, 
                demonstrating that political leaders should also contribute to economic development 
                through entrepreneurship.
              </p>
            </div>

            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Youth Inspiration</h3>
              <p className="text-green-100">
                Uses personal business experience to mentor young entrepreneurs and advocate for 
                policies that support startup culture and innovation in Nepal's emerging economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Quote */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 italic">
            "A leader's personal values and family life are not separate from their public service. 
            They are the foundation upon which authentic, grounded leadership is built."
          </blockquote>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
              <img src={Profile} alt="Gagan Kumar Thapa" className="w-full h-full rounded-full object-cover" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">Gagan Kumar Thapa</p>
              <p className="text-gray-600">On Leadership & Family Values</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Personal;