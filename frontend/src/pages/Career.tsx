import { Calendar, Briefcase, Users, Award, TrendingUp } from 'lucide-react';

const Career = () => {
  const timelineEvents = [
    {
      year: '1990s',
      title: 'Student Activism Begins',
      description: 'Joined movements against Panchayat-era monarchy, fighting for democratic rights.',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      year: '1998-2000',
      title: 'NSU Central Committee Member',
      description: 'Served as Central Committee Member of Nepal Students Union.',
      icon: Briefcase,
      color: 'bg-green-500'
    },
    {
      year: '2000-2002',
      title: 'NSU Vice-President',
      description: 'Elected as Vice-President of Nepal Students Union.',
      icon: TrendingUp,
      color: 'bg-purple-500'
    },
    {
      year: '2002-2004',
      title: 'NSU General Secretary',
      description: 'Served as General Secretary of Nepal Students Union.',
      icon: Award,
      color: 'bg-orange-500'
    },
    {
      year: '2005',
      title: 'Prisoner of Conscience',
      description: 'Arrested during pro-democracy protests, labeled "Prisoner of Conscience" by Amnesty International.',
      icon: Users,
      color: 'bg-red-500'
    },
    {
      year: '2008',
      title: 'First Constituent Assembly',
      description: 'Elected to First Constituent Assembly under proportional representation.',
      icon: Briefcase,
      color: 'bg-green-700'
    },
    {
      year: '2013',
      title: 'Second Constituent Assembly',
      description: 'Won Second Constituent Assembly election from Kathmandu-4.',
      icon: TrendingUp,
      color: 'bg-green-700'
    },
    {
      year: '2016-2017',
      title: 'Health and Population Minister',
      description: 'Served as Health and Population Minister, implementing progressive health reforms.',
      icon: Award,
      color: 'bg-green-700'
    },
    {
      year: '2017',
      title: 'House of Representatives MP',
      description: 'Elected MP from Kathmandu-4 constituency.',
      icon: Briefcase,
      color: 'bg-green-700'
    },
    {
      year: '2021',
      title: 'NC General Secretary',
      description: 'Elected as General Secretary of Nepali Congress.',
      icon: Award,
      color: 'bg-green-700'
    },
    {
      year: '2022',
      title: 'Re-elected MP',
      description: 'Re-elected from Kathmandu-4 with 21,302 votes, defeating UML candidate by ~7,747 votes.',
      icon: TrendingUp,
      color: 'bg-green-700'
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="text-white py-20"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(21, 128, 61, 2) 0%, rgba(5, 150, 105, 0.7) 50%, rgba(16, 185, 129, 1) 100%), 
                             url('https://images.unsplash.com/photo-1605538883669-825200433431?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Political Career Journey
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            From student leadership to national politics - a timeline of dedication to democratic values and public service.
          </p>
        </div>
      </section>

      {/* Career Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">15+</div>
              <div className="text-gray-600">Years in Politics</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">4</div>
              <div className="text-gray-600">NSU Leadership Roles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">3</div>
              <div className="text-gray-600">Parliamentary Terms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">1</div>
              <div className="text-gray-600">Ministerial Position</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Career <span className="text-green-700">Timeline</span>
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in a journey of public service and democratic leadership.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-200"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${event.color} shadow-lg z-10`}>
                    <event.icon className="text-white" size={24} />
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="text-green-700" size={16} />
                      <span className="text-green-700 font-semibold">{event.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Position */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Current <span className="text-green-700">Position</span>
              </h2>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Award className="text-green-700" size={24} />
                    <h3 className="text-xl font-semibold text-gray-900">General Secretary, Nepali Congress</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Since December 2021, leading party reforms and working towards making Nepali Congress 
                    a more transparent, grassroots-driven organization.
                  </p>
                  <div className="text-sm text-gray-600">
                    <p><strong>Elected:</strong> December 2021</p>
                    <p><strong>Key Focus:</strong> Party reform, transparency, youth engagement</p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Briefcase className="text-green-700" size={24} />
                    <h3 className="text-xl font-semibold text-gray-900">Member of Parliament</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Representing Kathmandu-4 constituency since 2017, focusing on healthcare, education, 
                    and youth employment initiatives.
                  </p>
                  <div className="text-sm text-gray-600">
                    <p><strong>Constituency:</strong> Kathmandu-4</p>
                    <p><strong>Latest Election:</strong> 2022 (21,302 votes)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Responsibilities</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-700 rounded-full"></div>
                  <span className="text-gray-700">Leading Nepali Congress organizational reforms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-700 rounded-full"></div>
                  <span className="text-gray-700">Representing Kathmandu-4 in Parliament</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-700 rounded-full"></div>
                  <span className="text-gray-700">Advocating for healthcare and education reforms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-700 rounded-full"></div>
                  <span className="text-gray-700">Promoting youth entrepreneurship and employment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-700 rounded-full"></div>
                  <span className="text-gray-700">Ensuring democratic values and transparency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Aspirations */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Future Aspirations
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Committed to pursuing higher leadership roles to implement transformative policies for Nepal's development.
          </p>
          <div className="bg-green-800 p-6 rounded-lg">
            <p className="text-lg">
              "I am actively pursuing leadership within Nepali Congress, including potential presidential candidacy by 2032, 
              aligning with my commitment to political retirement by age 55 to make way for the next generation of leaders."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;