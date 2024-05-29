import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";



export default function PrideForm(props) {
	const [prideComment, setPrideComment] = useState("");
	const [prideName, setPrideName] = useState("");
	const [isActive, setActive] = useState(true);

	const reset = () => {
		setPrideComment("");
		setPrideName("");
		setActive(!isActive);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		const docRef = await addDoc(collection(db, "pride"), {
			pridecomment: prideComment,
			pridename: prideName,
		});
		console.log(docRef)

		setPrideComment();
		setPrideName();

		reset();
	};

	return (
		<form className={isActive ? 'commentform' : 'hidden'} style={{ visibility: props.status ? "visible" : "hidden" }} onSubmit={handleSubmit}>
				<label>What makes you proud?<br/>
					<textarea
						placeholder="Type your message"
						value={prideComment}
						onChange={(e) => setPrideComment(e.target.value)}
						required							
					/>
				</label>
				<label>Name:<br/>
					<input
						placeholder="Name"
						value={prideName}
						onChange={(e) => setPrideName(e.target.value)}
						required						
					/>
				</label>
				<button id="commentButtonEl" type="submit">Post</button>
			</form>
	)
}