import { useState, useEffect } from "react"
import { db } from "../firebase"
import { collection, onSnapshot } from "firebase/firestore";

export default function PostItPride() {
	const [pridePosts, setPridePosts] = useState([]);

	useEffect(
		() => 
			onSnapshot(collection(db, "pride"), (snapshot) => 
				setPridePosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
			),
		[]
	);

	return (
		<>
			{pridePosts.map((pride) => (
				<article key={pride.id}>
					<p>{pride.pridecomment}</p>
					<p className="signature">{pride.pridename}</p>
				</article>
			))}
		</>
	)
}