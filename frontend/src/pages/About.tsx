import { Calendar,Users, BookOpen, GraduationCap, Trophy } from 'lucide-react';
import AboutImage from '../assets/about.jpg'; // Replace with the actual image path

const About = () => {
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
            About Gagan Kumar Thapa
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            From student activist to national leader - a journey of dedication to democratic values and social progress.
          </p>
        </div>
      </section>

      {/* Personal Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Personal <span className="text-green-700">Background</span>
              </h2>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Calendar className="text-green-700" size={24} />
                    <h3 className="text-xl font-semibold text-gray-900">Birth & Origin</h3>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Date of Birth:</strong> July 16, 1976</p>
                    <p><strong>Place of Birth:</strong> Kathmandu, Nepal</p>
                    <p><strong>Parents:</strong> Mahendra Kumar Thapa and Rameshwari Thapa</p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="text-green-700" size={24} />
                    <h3 className="text-xl font-semibold text-gray-900">Family Values</h3>
                  </div>
                  <p className="text-gray-700">
                    Born into a family that valued education and public service, Gagan's upbringing 
                    instilled in him the principles of democracy, social justice, and commitment to 
                    the welfare of Nepal and its people.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-lg">
              <div className="text-center">
                <div className="w-80 h-80 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img
                    src={AboutImage} 
                    alt="Gagan Kumar Thapa"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Gagan Kumar Thapa</h3>
                <p className="text-lg text-gray-700">Born in Kathmandu, 1976</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Journey */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Educational <span className="text-green-700">Journey</span>
            </h2>
            <p className="text-xl text-gray-600">
              A strong foundation in both sciences and social studies shaped his analytical approach to politics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 bg-green-700 rounded-lg mb-4">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">School Education</h3>
              <p className="text-gray-600 mb-2"><strong>Siddhartha Vanasthali School</strong></p>
              <p className="text-sm text-gray-500">Completed in 1992</p>
              <p className="text-gray-700 mt-3">
                Laid the foundation for academic excellence and early exposure to social awareness.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 bg-green-700 rounded-lg mb-4">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bachelor's Degree</h3>
              <p className="text-gray-600 mb-2"><strong>B.Sc. in Chemistry</strong></p>
              <p className="text-sm text-gray-500">Tri Chandra College, 1998</p>
              <p className="text-gray-700 mt-3">
                Developed analytical thinking and scientific approach to problem-solving.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 bg-green-700 rounded-lg mb-4">
                <Trophy className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Master's Degree</h3>
              <p className="text-gray-600 mb-2"><strong>M.A. in Sociology</strong></p>
              <p className="text-sm text-gray-500">Tribhuvan University, 2003</p>
              <p className="text-gray-700 mt-3">
                Deepened understanding of social structures and human behavior in society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Early Activism */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Early <span className="text-green-700">Activism</span>
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Gagan's political journey began in the early 1990s when he joined student movements 
                  against the Panchayat-era monarchy, fighting for democratic rights and freedoms.
                </p>
                <p>
                  His commitment to democratic values was tested when he was arrested during pro-democracy 
                  protests under the royal regime and was labeled a "Prisoner of Conscience" by 
                  Amnesty International in 2005.
                </p>
                <p>
                  This experience only strengthened his resolve to work for a democratic Nepal where 
                  every citizen's rights are protected and respected.
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Leadership Roles</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Central Committee Member</p>
                    <p className="text-sm text-gray-600">Nepal Students Union (1998-2000)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Vice-President</p>
                    <p className="text-sm text-gray-600">Nepal Students Union (2000-2002)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900">General Secretary</p>
                    <p className="text-sm text-gray-600">Nepal Students Union (2002-2004)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Philosophy */}
      <section className="py-20 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Core Values & Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Democratic Values</h3>
              <p className="text-green-100">
                Unwavering commitment to democratic principles, constitutional governance, and the rule of law.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Social Justice</h3>
              <p className="text-green-100">
                Fighting for equality, inclusion, and opportunities for all citizens regardless of background.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Progressive Leadership</h3>
              <p className="text-green-100">
                Embracing change, innovation, and forward-thinking policies for Nepal's development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;