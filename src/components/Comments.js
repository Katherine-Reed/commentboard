import { useState } from "react";
import CommentForm from "./CommentForm";
import PostItComment from "./PostItComment";

export default function Comments() {
	const [show, setShow] = useState(false);
	return (
		<>
			<section id="positive">
				<h2>What went well?</h2>
				<p>How did the session impact you?<br/>Please list any comments below.</p>
				<button id="positive-btn" onClick={() => setShow(true)}>Add comment</button>
				<main className="comments" id="comments">
					<PostItComment />
				</main>
			</section>
			<CommentForm status={show} />
		</>
	)
}