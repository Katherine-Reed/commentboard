import { useState, useEffect } from "react"
import { db } from "../firebase"
import { collection, onSnapshot } from "firebase/firestore";

export default function PostItArchive() {
	const [archivePosts, setArchivePosts] = useState([]);

	useEffect(
		() => 
			onSnapshot(collection(db, "archive"), (snapshot) => 
				setArchivePosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
			),
		[]
	);

	return (
		<>
			{archivePosts.map((archive) => (
				<article className="archived" key={archive.id}>
					<h3>{archive.archivesession}</h3>
					<a href={archive.archivelink} target="_blank" rel="noreferrer">Read post</a>
				</article>
			))}
		</>
	)
}