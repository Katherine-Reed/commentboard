import { useState } from "react";
import PrideForm from "./PrideForm";
import PostItPride from "./PostItPride";

export default function Pride() {
	const [reveal, setReveal] = useState(false);
	return (
		<>
			<section id="pride">
				<h2>What makes you proud?</h2>
				<p>What makes you proud to be LGBTQ+</p>
				<button id="pride-btn" onClick={() => setReveal(true)}>Add comment</button>
				<main className="comments" id="prideComments">
					<PostItPride />
				</main>
			</section>
			<PrideForm status={reveal} />
		</>
	)
}