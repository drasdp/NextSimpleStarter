import Fork from '../components/Fork'
import Todo from '../components/Todo'
import Link from 'next/link'

export default async function Index() {
const stars = await getStars();

	return (
		<main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50">
			<div className="fixed top-0 right-0 p-6 z-10">
				<Link 
					href="/about" 
					className="px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 text-gray-700 hover:text-blue-600"
				>
					<span>ℹ️</span>
					<span>소개</span>
				</Link>
			</div>
			<div className="text-center pt-20 pb-12 px-4 relative overflow-hidden">
				<div className="absolute top-0 left-0 w-full h-full">
					<div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
					<div className="absolute bottom-10 right-10 w-20 h-20 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>
				</div>
				<div className="relative">
					<h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">📝 스마트 할일 관리</h1>
					<div className="max-w-3xl mx-auto">
						<p className="text-xl text-gray-700 mb-8 leading-relaxed">
							체계적으로 일상의 모든 할일을 관리하세요! 
							<span className="font-semibold text-blue-600">간단하고 직관적인</span> 인터페이스로 
							<br className="hidden md:block" />
							생산성을 높여보세요.
						</p>
						<div className="bg-white/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl mb-8 hover:shadow-2xl transition-all duration-300">
							<h2 className="text-2xl font-semibold text-gray-800 mb-6">✨ 주요 기능</h2>
							<div className="grid md:grid-cols-2 gap-6 text-left">
								<div className="bg-white/80 p-4 rounded-xl hover:shadow-md transition-all duration-300">
									<span className="text-green-500 text-2xl mr-3">✅</span>
									<span className="text-gray-700 font-medium">할일 추가 및 완료 체크</span>
								</div>
								<div className="bg-white/80 p-4 rounded-xl hover:shadow-md transition-all duration-300">
									<span className="text-red-500 text-2xl mr-3">🗑️</span>
									<span className="text-gray-700 font-medium">불필요한 항목 삭제</span>
								</div>
								<div className="bg-white/80 p-4 rounded-xl hover:shadow-md transition-all duration-300">
									<span className="text-blue-500 text-2xl mr-3">💾</span>
									<span className="text-gray-700 font-medium">자동 저장 기능</span>
								</div>
								<div className="bg-white/80 p-4 rounded-xl hover:shadow-md transition-all duration-300">
									<span className="text-purple-500 text-2xl mr-3">📱</span>
									<span className="text-gray-700 font-medium">모바일 친화적 디자인</span>
								</div>
							</div>
						</div>
						<div className="flex flex-wrap justify-center gap-3">
							<span className="bg-white/80 backdrop-blur-sm text-gray-700 px-6 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300">Next.js 14</span>
							<span className="bg-white/80 backdrop-blur-sm text-blue-700 px-6 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300">React 18</span>
							<span className="bg-white/80 backdrop-blur-sm text-cyan-700 px-6 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300">TailwindCSS</span>
							<span className="bg-white/80 backdrop-blur-sm text-green-700 px-6 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300">반응형 디자인</span>
						</div>
					</div>
				</div>
			</div>
			<Fork stars={stars} />
			<Todo />
		</main>
	)
}



export async function getStars() {
	try {
		const res = await fetch(
			'https://api.github.com/repos/ooade/NextSimpleStarter'
		)
		const json = await res.json()

		return  json.stargazers_count;
			
	} catch (error) {
		return 0
	}
}







