import { Target, Heart, BookOpen, Users, TrendingUp, CheckCircle, ArrowRight, Star } from 'lucide-react';

const Vision = () => {
  const visionAreas = [
    {
      icon: Heart,
      title: 'Quality Healthcare',
      description: 'Universal access to free and quality healthcare services for all citizens.',
      goals: [
        'Strengthen public health infrastructure nationwide',
        'Ensure affordable medicines and treatments',
        'Improve maternal and child health services',
        'Enhance preventive healthcare programs'
      ]
    },
    {
      icon: BookOpen,
      title: 'Education Excellence',
      description: 'World-class education system that prepares youth for the modern economy.',
      goals: [
        'Modernize curriculum and teaching methods',
        'Ensure equal access to quality education',
        'Promote technical and vocational training',
        'Strengthen higher education institutions'
      ]
    },
    {
      icon: Users,
      title: 'Youth Employment',
      description: 'Creating abundant employment opportunities for Nepal\'s young population.',
      goals: [
        'Promote entrepreneurship and innovation',
        'Support skill development programs',
        'Create job opportunities in emerging sectors',
        'Encourage youth-led businesses and startups'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Democratic Reform',
      description: 'Strengthening democratic institutions and ensuring transparent governance.',
      goals: [
        'Eliminate corruption and promote transparency',
        'Strengthen democratic institutions',
        'Ensure constitutional governance',
        'Promote grassroots participation'
      ]
    }
  ];

  const longTermGoals = [
    {
      title: 'Progressive Nepal by 2030',
      description: 'Transform Nepal into a progressive, inclusive nation with strong public services and democratic institutions.',
      timeline: '2025-2030'
    },
    {
      title: 'Party Leadership',
      description: 'Actively pursue higher leadership roles within Nepali Congress to implement transformative policies.',
      timeline: '2025-2032'
    },
    {
      title: 'Constitutional Integrity',
      description: 'Ensure full implementation of federal policies and strengthen constitutional governance.',
      timeline: 'Ongoing'
    },
    {
      title: 'Youth Empowerment',
      description: 'Create a generation of empowered youth with skills, opportunities, and leadership capabilities.',
      timeline: '2025-2035'
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Vision for Nepal's Future
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            Building a progressive, inclusive Nepal with quality public services, democratic values, and opportunities for all.
          </p>
        </div>
      </section>

      {/* Core Vision Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-50 p-8 rounded-lg">
            <Target className="text-green-700 mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <blockquote className="text-xl text-gray-700 italic leading-relaxed">
              "To create a progressive, inclusive Nepal where every citizen has access to quality healthcare, 
              education, and employment opportunities. A Nepal built on democratic values, transparency, 
              and grassroots participation, where the next generation can thrive and lead."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Priority <span className="text-green-700">Areas</span>
            </h2>
            <p className="text-xl text-gray-600">
              Four pillars of transformation for Nepal's sustainable development and progress.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {visionAreas.map((area, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center">
                    <area.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{area.title}</h3>
                </div>
                <p className="text-gray-700 mb-6">{area.description}</p>
                <div className="space-y-3">
                  {area.goals.map((goal, goalIndex) => (
                    <div key={goalIndex} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-700 mt-0.5 flex-shrink-0" size={16} />
                      <p className="text-gray-600">{goal}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-term Goals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Long-term <span className="text-green-700">Goals</span>
            </h2>
            <p className="text-xl text-gray-600">
              Strategic objectives for Nepal's transformation over the next decade and beyond.
            </p>
          </div>

          <div className="space-y-8">
            {longTermGoals.map((goal, index) => (
              <div key={index} className="bg-green-50 p-8 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <Star className="text-green-700" size={20} />
                      <h3 className="text-xl font-bold text-gray-900">{goal.title}</h3>
                    </div>
                    <p className="text-gray-700">{goal.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <span className="inline-block bg-green-700 text-white px-4 py-2 rounded-lg font-medium">
                      {goal.timeline}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Leadership Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Grassroots Leadership</h3>
              <p className="text-green-100">
                Leadership that stays connected to the people and their everyday challenges and aspirations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Progressive Approach</h3>
              <p className="text-green-100">
                Embracing innovation, change, and forward-thinking solutions to complex societal challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Accountable Governance</h3>
              <p className="text-green-100">
                Transparent, accountable leadership that serves the people's interests above personal or party gains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Commitment to the <span className="text-green-700">Future</span>
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My commitment extends beyond personal political ambitions. I am dedicated to creating 
              lasting institutional changes that will benefit Nepal for generations to come. This includes 
              my pledge to retire from active politics by age 55 to make way for fresh leadership 
              while continuing to contribute to nation-building in other capacities.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <ArrowRight className="text-green-700" size={20} />
              <span className="text-green-700 font-semibold">Political Retirement by 2032</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Vision
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Be part of Nepal's transformation. Together, we can build the progressive nation our children deserve.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Involved
            </a>
            <a 
              href="/achievements" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-all duration-200"
            >
              See Our Progress
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;