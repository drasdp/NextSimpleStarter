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
			<div className="text-center mb-8">
				<h1 className="text-3xl font-bold mb-4">Next.js 할 일 관리 앱</h1>
				<p className="text-gray-600">간단하고 효율적인 할 일 관리를 위한 웹 애플리케이션입니다.</p>
				<p className="text-gray-600 mt-2">Next.js, React, TailwindCSS를 활용하여 제작되었습니다.</p>
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


