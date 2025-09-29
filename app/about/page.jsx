import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 mb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 mb-6">The beginning of smart daily management</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎯 Our Mission</h2>
              <p className="text-gray-600">We provide the best tools to organize and manage complex daily life simply.</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">💡 Core Values</h2>
              <p className="text-gray-600">We pursue simplicity, efficiency, and user-centered design.</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">🛠️ Tech Stack</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                <span className="text-blue-600 font-semibold">Next.js 14</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                <span className="text-green-600 font-semibold">React 18</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                <span className="text-purple-600 font-semibold">TailwindCSS</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span className="mr-2">🏠</span>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

