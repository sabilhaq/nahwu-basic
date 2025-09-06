import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, ChevronRight } from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Istilah_penting');

  const sections = [
    { id: 'Istilah_penting', title: 'Istilah penting' },
    { id: 'Isim_Marfu', title: 'Isim Marfu' },
    { id: 'Isim_Manshub', title: 'Isim Manshub' },
    { id: 'Isim_Majrur', title: 'Isim Majrur' },
    { id: 'Tawabi', title: 'Tawabi' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Navigation Sidebar */}
      <nav className={`
        fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:shadow-lg
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-8 h-8 text-white" />
            <h1 className="text-xl font-bold text-white">Nahwu Dasar</h1>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="lg:hidden text-white hover:text-blue-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="py-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`
                w-full text-left px-6 py-4 flex items-center justify-between group transition-all duration-200
                ${activeSection === section.id 
                  ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-600' 
                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }
              `}
            >
              <span className="font-medium">{section.title}</span>
              <ChevronRight className={`
                w-4 h-4 transition-transform duration-200
                ${activeSection === section.id ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}
              `} />
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="fixed top-4 left-4 z-30 lg:hidden bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow"
      >
        <Menu className="w-6 h-6 text-slate-700" />
      </button>

      {/* Main Content */}
      <main className="lg:ml-80 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          
          {/* Istilah Penting Section */}
          <section id="Istilah_penting" className="mb-16 scroll-mt-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 pb-4 border-b-2 border-blue-100">
                Istilah penting
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-600 leading-relaxed mb-6">
                  Nahwu adalah salah satu cabang ilmu bahasa Arab, ia mempelajari gramatika bahasa Arab. 
                  Dengan sebab ilmu nahwu, kita bisa mengetahui kedudukan dari kata-kata yang ada dalam 
                  kalimat bahasa Arab dan harokatnya.
                </p>
                
                <p className="text-slate-600 leading-relaxed mb-4">
                  Berikut adalah contoh kalimat bahasa Arab:
                </p>
                
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-6 mb-6 border-l-4 border-blue-500">
                  <code className="text-2xl lg:text-3xl font-arabic text-slate-800 block text-right leading-relaxed">
                    يَضْرِبُ مُحَمَّدٌ
                  </code>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  Artinya "Muhammad memukul." Kenapa harokat huruf ba' pada kata yadhribu berharokat dhommah, 
                  kenapa huruf dal pada kata Muhammad berharokat dhommah, bukan fathah atau kasroh? 
                  Jawabannya akan diketahui apabila mengenal ilmu nahwu.
                </p>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  Sebelum membahas hal-hal yang lebih dalam terkait nahwu, kita perlu mengenal berbagai 
                  istilah-istilah yang digunakan di dalam nahwu. Di antara istilah penting tersebut adalah sebagai berikut.
                </p>
                
                <div className="bg-blue-50 rounded-xl p-6">
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Al-Harf, Al-Kalimah, Al-Jumlah.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Isim dan Fi'il
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Al-I'rob dan Al-Bina'
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Isim Mu'rob dan Mabni.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Fi'il Madhi, Mudhori', dan Amr.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Dhomair.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Mudzakkar dan Muannats
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Ma'rifat dan Nakiroh
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Isim Marfu Section */}
          <section id="Isim_Marfu" className="mb-16 scroll-mt-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 pb-4 border-b-2 border-green-100">
                Isim Marfu
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-600 leading-relaxed mb-6">
                  Isim Marfu' adalah isim-isim yang memiliki tanda rofa' yaitu dhommah, atau penggantinya.
                </p>
                
                <p className="text-slate-600 leading-relaxed mb-4">
                  Berikut adalah contoh kalimat yang memiliki isim marfu':
                </p>
                
                <div className="bg-gradient-to-r from-slate-50 to-green-50 rounded-xl p-6 mb-6 border-l-4 border-green-500">
                  <code className="text-2xl lg:text-3xl font-arabic text-slate-800 block text-right leading-relaxed">
                    مُحَمَّدٌ مُجْتَهِدٌ
                  </code>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  Berikut adalah macam-macam isim marfu':
                </p>
                
                <div className="bg-green-50 rounded-xl p-6">
                  <ol className="space-y-3 text-slate-700">
                    {['Fa\'il', 'Naibul Fa\'il', 'Mubtada\'', 'Khobar', 'Isim Kaana dan saudaranya', 'Khobar Inna dan saudaranya', 'Tawabi\''].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Isim Manshub Section */}
          <section id="Isim_Manshub" className="mb-16 scroll-mt-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 pb-4 border-b-2 border-orange-100">
                Isim Manshub
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-600 leading-relaxed mb-6">
                  Isim Manshub adalah isim-isim yang memiliki tanda nashob yaitu fathah, atau penggantinya.
                </p>
                
                <p className="text-slate-600 leading-relaxed mb-4">
                  Berikut adalah contoh kalimat yang memiliki isim manshub:
                </p>
                
                <div className="bg-gradient-to-r from-slate-50 to-orange-50 rounded-xl p-6 mb-6 border-l-4 border-orange-500">
                  <code className="text-2xl lg:text-3xl font-arabic text-slate-800 block text-right leading-relaxed">
                    قَرَأَ مُحَمَّدٌ القُرْآنَ
                  </code>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  Berikut adalah macam-macam isim manshub:
                </p>
                
                <div className="bg-orange-50 rounded-xl p-6">
                  <ol className="space-y-3 text-slate-700">
                    {['Maf\'ul Bih', 'Maf\'ul li Ajlih', 'Maf\'ul Muthlaq', 'Maf\'ul Fih', 'Maf\'ul Ma\'ah', 'Haal', 'Tamyiz', 'Mustatsna', 'Isim Laa', 'Munada', 'Khobar Kaana dan saudaranya', 'Isim Inna dan saudaranya', 'Tawabi\''].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Isim Majrur Section */}
          <section id="Isim_Majrur" className="mb-16 scroll-mt-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 pb-4 border-b-2 border-purple-100">
                Isim Majrur
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-600 leading-relaxed mb-6">
                  Isim majrur adalah isim-isim yang memiliki tanda jarr yaitu kasroh, atau penggantinya.
                </p>
                
                <p className="text-slate-600 leading-relaxed mb-4">
                  Berikut adalah contoh kalimat yang memiliki isim majrur:
                </p>
                
                <div className="bg-gradient-to-r from-slate-50 to-purple-50 rounded-xl p-6 mb-6 border-l-4 border-purple-500">
                  <code className="text-2xl lg:text-3xl font-arabic text-slate-800 block text-right leading-relaxed">
                    بسمِ اللهِ الرحمنِ الرحيمِ
                  </code>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  Berikut adalah macam-macam isim majrur:
                </p>
                
                <div className="bg-purple-50 rounded-xl p-6">
                  <ol className="space-y-3 text-slate-700">
                    {['Majrur dengan huruf jarr', 'Majrur dengan Idhofah', 'Majrur dengan tawabi\''].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Tawabi Section */}
          <section id="Tawabi" className="mb-16 scroll-mt-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 pb-4 border-b-2 border-indigo-100">
                Tawabi
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-600 leading-relaxed mb-6">
                  Tawabi' adalah isim-isim yang mengikuti i'rob isim sebelumnya.
                </p>
                
                <p className="text-slate-600 leading-relaxed mb-4">
                  Berikut adalah contoh kalimat yang memiliki tawabi':
                </p>
                
                <div className="bg-gradient-to-r from-slate-50 to-indigo-50 rounded-xl p-6 mb-6 border-l-4 border-indigo-500">
                  <code className="text-2xl lg:text-3xl font-arabic text-slate-800 block text-right leading-relaxed">
                    جاء الطالبُ المجتهدُ
                  </code>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  Berikut adalah macam-macam tawabi':
                </p>
                
                <div className="bg-indigo-50 rounded-xl p-6">
                  <ol className="space-y-3 text-slate-700">
                    {['Na\'at/Sifat', '\'Athof', 'Taukid', 'Badal'].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

export default App;