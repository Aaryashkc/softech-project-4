import { Heart, Users, TrendingUp, Award, CheckCircle, Target, Briefcase } from 'lucide-react';
import Profile from '../assets/profile.jpg';

const Achievements = () => {
  const achievements = [
    {
      category: 'Healthcare Reform',
      icon: Heart,
      color: 'bg-red-500',
      items: [
        'Implemented progressive health sector reforms as Health and Population Minister (2016-2017)',
        'Advocated for free and quality healthcare access for all citizens',
        'Introduced policies to strengthen public health infrastructure',
        'Promoted preventive healthcare and community health programs'
      ]
    },
    {
      category: 'Parliamentary Initiatives',
      icon: Briefcase,
      color: 'bg-blue-500',
      items: [
        'Introduced motion to end protest bandhas and stop tire-burning during demonstrations',
        'Championed maternal citizenship rights legislation',
        'Advocated for transparency in government operations',
        'Promoted constitutional governance and rule of law'
      ]
    },
    {
      category: 'Youth Empowerment',
      icon: Users,
      color: 'bg-green-500',
      items: [
        'Encouraged youth entrepreneurship through personal example',
        'Established agricultural ventures to inspire youth-run businesses',
        'Promoted meaningful youth participation in democratic processes',
        'Advocated for employment opportunities and skill development programs'
      ]
    },
    {
      category: 'Party Reforms',
      icon: TrendingUp,
      color: 'bg-purple-500',
      items: [
        'Leading internal reforms within Nepali Congress since 2021',
        'Promoting transparency and accountability in party operations',
        'Working to eliminate corrupt practices and groupism',
        'Making the party more grassroots-driven and democratic'
      ]
    }
  ];

  const keyStats = [
    { number: '1', label: 'Ministerial Term', description: 'Health & Population Minister' },
    { number: '15+', label: 'Years', description: 'Active Political Career' },
    { number: '3', label: 'Elections Won', description: 'Parliamentary Victories' },
    { number: '5+', label: 'Major Reforms', description: 'Policy Initiatives' }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className=" text-white py-20" 
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(21, 128, 61, 1) 0%, rgba(5, 150, 105, 0.7) 50%, rgba(16, 185, 129, 1) 100%), 
                             url('https://images.unsplash.com/photo-1605538883669-825200433431?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Key Achievements & Impact
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            Transformative initiatives in healthcare, governance, youth empowerment, and democratic reform.
          </p>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {keyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-green-700 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements by Category */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Major <span className="text-green-700">Accomplishments</span>
            </h2>
            <p className="text-xl text-gray-600">
              Significant contributions across healthcare, governance, youth development, and institutional reform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${achievement.color}`}>
                    <achievement.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{achievement.category}</h3>
                </div>
                <div className="space-y-3">
                  {achievement.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-700 mt-0.5 flex-shrink-0" size={16} />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recognition & <span className="text-green-700">Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-lg text-center">
              <Award className="text-green-700 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Amnesty International Recognition</h3>
              <p className="text-gray-700">
                Labeled as "Prisoner of Conscience" by Amnesty International in 2005 for pro-democracy activism.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-lg text-center">
              <Users className="text-green-700 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Youth Leadership</h3>
              <p className="text-gray-700">
                Widely admired by Nepal's youth for outspoken leadership and challenging traditional hierarchies.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-lg text-center">
              <Target className="text-green-700 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Electoral Success</h3>
              <p className="text-gray-700">
                Consistent electoral victories, including winning Kathmandu-4 by significant margins in multiple elections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Health Ministry Highlights */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Health Ministry Tenure Highlights
            </h2>
            <p className="text-xl text-green-100">
              August 2016 - May 2017: Implementing Progressive Health Reforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Policy Reforms</h3>
              <ul className="space-y-2 text-green-100">
                <li>• Strengthened public health infrastructure</li>
                <li>• Improved healthcare accessibility</li>
                <li>• Enhanced preventive care programs</li>
                <li>• Promoted community health initiatives</li>
              </ul>
            </div>

            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Long-term Impact</h3>
              <ul className="space-y-2 text-green-100">
                <li>• Advanced health sector modernization</li>
                <li>• Improved maternal and child health</li>
                <li>• Enhanced disease prevention strategies</li>
                <li>• Strengthened health workforce capacity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 italic">
            "True leadership is not about holding positions, but about creating positive change 
            that improves the lives of ordinary citizens and strengthens democratic institutions."
          </blockquote>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <img src={Profile} alt="Gagan Kumar Thapa" className="w-full h-full rounded-full object-cover" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">Gagan Kumar Thapa</p>
              <p className="text-gray-600">General Secretary, Nepali Congress</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;