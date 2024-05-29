import PostItArchive from "./PostItArchive"

export default function Archive() {
	return (
		<>
			<section id="archive">
				<h2>Archive</h2>
				<p>Click the links for previous posts</p>
				<main className="comments">
					<PostItArchive />
				</main>
			</section>
		</>
	)
}