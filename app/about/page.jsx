import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">About</h1>
          <p className="text-xl text-gray-600 mb-8">간단한 투두리스트 앱입니다!</p>
          <Link 
            href="/" 
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  )
}