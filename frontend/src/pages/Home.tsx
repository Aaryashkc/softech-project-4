import { Link } from 'react-router-dom';
import { ChevronRight, Award, Users, Heart, Target, TrendingUp, BookOpen, Briefcase } from 'lucide-react';
import Profile from '../assets/profile.jpg'; 

const Home = () => {
  return (
    <div>
      {/* Hero Section with Mountain Background */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(21, 128, 61, 1) 0%, rgba(5, 150, 105, 0.7) 50%, rgba(16, 185, 129, 1) 100%), 
                             url('https://images.unsplash.com/photo-1605538883669-825200433431?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        
        {/* Animated floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-16 h-16 bg-green-300/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/15 rounded-full animate-pulse delay-700"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                  Gagan Kumar
                  <span className="text-green-200"> Thapa</span>
                </h1>
                <p className="text-xl md:text-2xl text-green-100 font-medium drop-shadow-md">
                  General Secretary, Nepali Congress
                </p>
                <p className="text-lg text-white/90 leading-relaxed drop-shadow-md">
                  A progressive leader committed to transforming Nepal through quality healthcare, 
                  education, and employment opportunities for all citizens.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/vision"
                  className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>View Vision</span>
                  <ChevronRight size={20} />
                </Link>
                <Link 
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get in Touch
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white drop-shadow-lg">15+</div>
                  <div className="text-sm text-green-100">Years in Politics</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white drop-shadow-lg">3</div>
                  <div className="text-sm text-green-100">Parliamentary Terms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white drop-shadow-lg">1</div>
                  <div className="text-sm text-green-100">Ministerial Role</div>
                </div>
              </div>
            </div>

            {/* Right side - Professional photo section */}
            <div className="relative">
              <div className="relative bg-white/95 backdrop-blur-sm shadow-2xl overflow-hidden border border-green-200 rounded-lg">
                <div className="aspect-[4/5] flex items-center justify-center">
                  <div className="text-red-500 text-center">
                    <img src={Profile} loading='lazy' alt="gagan thapa profile" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-300/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview Section with Subtle Pattern */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leading with <span className="text-green-700">Purpose</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to building a progressive Nepal through democratic values, social reform, and inclusive governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/about" className="group bg-gradient-to-br from-green-50 to-green-100/50 p-6 rounded-xl hover:from-green-100 hover:to-green-200/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">About</h3>
              <p className="text-gray-600 mb-4">Learn about background, education, and early activism.</p>
              <span className="text-green-700 font-medium group-hover:text-green-800">Learn More →</span>
            </Link>

            <Link to="/career" className="group bg-gradient-to-br from-green-50 to-green-100/50 p-6 rounded-xl hover:from-green-100 hover:to-green-200/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Career</h3>
              <p className="text-gray-600 mb-4">Explore political journey and key positions held.</p>
              <span className="text-green-700 font-medium group-hover:text-green-800">Explore →</span>
            </Link>

            <Link to="/achievements" className="group bg-gradient-to-br from-green-50 to-green-100/50 p-6 rounded-xl hover:from-green-100 hover:to-green-200/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Achievements</h3>
              <p className="text-gray-600 mb-4">Discover major accomplishments and initiatives.</p>
              <span className="text-green-700 font-medium group-hover:text-green-800">Discover →</span>
            </Link>

            <Link to="/vision" className="group bg-gradient-to-br from-green-50 to-green-100/50 p-6 rounded-xl hover:from-green-100 hover:to-green-200/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vision</h3>
              <p className="text-gray-600 mb-4">Understand goals and future plans for Nepal.</p>
              <span className="text-green-700 font-medium group-hover:text-green-800">Understand →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Highlights Section with Nepal Temple Background */}
      <section className="py-20 relative overflow-hidden">
        {/* Background with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(249, 250, 251, 0.95), rgba(249, 250, 251, 0.95)), 
                             url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key <span className="text-green-700">Highlights</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Heart className="text-green-700" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Healthcare Champion</h3>
              </div>
              <p className="text-gray-600">
                Served as Health and Population Minister (2016-2017), implementing progressive health sector reforms 
                and advocating for quality healthcare access for all citizens.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Users className="text-green-700" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Youth Leader</h3>
              </div>
              <p className="text-gray-600">
                From student activism to national politics, consistently championing youth rights, 
                entrepreneurship, and meaningful participation in democratic processes.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="text-green-700" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Reform Advocate</h3>
              </div>
              <p className="text-gray-600">
                Pushing for internal party reforms, transparency, and democratic values while working 
                to eliminate corruption and promote grassroots-driven governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section with Flag Colors Background */}
      <section className="py-20 relative overflow-hidden">
        {/* Nepal flag inspired gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, 
              #dc2626 0%, 
              #dc2626 40%, 
              #1d4ed8 40%, 
              #1d4ed8 60%, 
              #059669 60%, 
              #059669 100%), 
              linear-gradient(rgba(21, 128, 61, 0.9), rgba(21, 128, 61, 0.9))`
          }}
        />
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/15 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-md animate-pulse delay-500"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-lg">
            Join the Movement for Progressive Nepal
          </h2>
          <p className="text-xl mb-8 text-green-100 drop-shadow-md">
            Together, we can build a Nepal with quality healthcare, education, and opportunities for all.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Involved
            </Link>
            <Link 
              to="/vision" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Learn About Vision
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;