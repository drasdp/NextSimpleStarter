import Fork from '../components/Fork'
import Todo from '../components/Todo'
import Link from 'next/link'

export default async function Index() {
const stars = await getStars();

	return (
		<main>
			<div className="flex justify-end p-4">
				<Link href="/about" className="text-blue-500 hover:text-blue-700 underline">
					About
				</Link>
			</div>
			<div className="text-center mb-8 px-4">
				<h1 className="text-4xl font-bold mb-6 text-gray-800">📝 스마트 할 일 관리</h1>
				<div className="max-w-2xl mx-auto">
					<p className="text-lg text-gray-700 mb-4">
						일상의 모든 할 일을 체계적으로 관리하세요! 
						<span className="font-semibold text-blue-600">간단하고 직관적인</span> 인터페이스로 
						생산성을 높여보세요.
					</p>
					<div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6">
						<h2 className="text-xl font-semibold text-gray-800 mb-3">✨ 주요 기능</h2>
						<div className="grid md:grid-cols-2 gap-4 text-left">
							<div className="flex items-center">
								<span className="text-green-500 mr-2">✅</span>
								<span className="text-gray-700">할 일 추가 및 완료 체크</span>
							</div>
							<div className="flex items-center">
								<span className="text-red-500 mr-2">🗑️</span>
								<span className="text-gray-700">불필요한 항목 삭제</span>
							</div>
							<div className="flex items-center">
								<span className="text-blue-500 mr-2">💾</span>
								<span className="text-gray-700">로컬 저장소 자동 저장</span>
							</div>
							<div className="flex items-center">
								<span className="text-purple-500 mr-2">📱</span>
								<span className="text-gray-700">모바일 친화적 디자인</span>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap justify-center gap-2 text-sm">
						<span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">Next.js 14</span>
						<span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">React 18</span>
						<span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full font-medium">TailwindCSS</span>
						<span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">반응형 디자인</span>
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



