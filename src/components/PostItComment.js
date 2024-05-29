import { useState, useEffect } from "react"
import { db } from "../firebase"
import { collection, onSnapshot } from "firebase/firestore";

export default function PostItComment() {
	const [posts, setPosts] = useState([]);

	useEffect(
		() => 
			onSnapshot(collection(db, "comments"), (snapshot) => 
				setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
			),
		[]
	);

	return (
		<>
			{posts.map((post) => (
				<article key={post.id}>
					<h3>{post.session}</h3>
					<p>{post.comment}</p>
					<p className="signature">{post.name}</p>
				</article>
			))}
		</>
	)
}