import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";


export default function CommentForm(props) {
	const [session, setSession] = useState("");
	const [comment, setComment] = useState("");
	const [name, setName] = useState("");
	const [isActive, setActive] = useState(true);

	const reset = () => {
		setSession("");
		setComment("");
		setName("");
		setActive(!isActive);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		const docRef = await addDoc(collection(db, "comments"), {
			session: session,
			comment: comment,
			name: name,
		});
		console.log(docRef)

		setSession();
		setComment();
		setName();

		reset();
	};

	return (
		<form className={isActive ? 'commentform' : 'hidden'} style={{ visibility: props.status ? "visible" : "hidden" }} onSubmit={handleSubmit}>
				<label>Session:<br/>
					<input
						placeholder="Session"
						value={session}
						onChange={(e) => setSession(e.target.value)}
						required							
					/>
				</label>
				<label>Comment:<br/>
					<textarea
						placeholder="Type your message"
						value={comment}
						onChange={(e) => setComment(e.target.value)}
						required							
					/>
				</label>
				<label>Name:<br/>
					<input
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required						
					/>
				</label>
				<button id="commentButtonEl" type="submit">Post</button>
			</form>
	)
}