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

