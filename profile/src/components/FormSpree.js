import React from 'react';
import '../index.css';

import { useForm, ValidationError } from '@formspree/react';
export const FormSpree = () => {
	const [state, handleSubmit] = useForm('xnqwvbrq');
	if (state.succeeded) {
		return <p>I hope to contact you soon!</p>;
	}

	return (
		<form className="Contact_Form " onSubmit={handleSubmit}>
			<div className="row m-3 ">
				<div className="input-group col ">
					<span className="input-group-text " id="addon-wrapping">
						Name
					</span>

					<input
						type="text"
						className="form-control"
						placeholder="Your Name"
						id="First Name"
						name="First Name"
					/>
					<ValidationError
						prefix="First Name"
						field="First Name"
						errors={state.errors}
					/>
				</div>

				{/* <div className="input-group col">
					<span className="input-group-text " id="addon-wrapping">
						Last name
					</span>

					<input
						type="text"
						className="form-control"
						placeholder="Last name"
						id="Last Name"
						name="Last Name"
					/>
					<ValidationError
						prefix="Last Name"
						field="Last Name"
						errors={state.errors}
					/>
				</div> */}
			</div>

			<div className="row m-3 ">
				<div className="input-group ">
					<span className="input-group-text col-1" id="addon-wrapping">
						Email
					</span>
					<input
						type="email"
						className="form-control"
						id="email"
						name="email"
						placeholder="I.e@example.com"
						aria-describedby="addon-wrapping"
					/>
					<ValidationError prefix="Email" field="email" errors={state.errors} />
				</div>
			</div>

			<div className="row m-3">
				<div className="form-floating ">
					<textarea
						className="form-control comments_section "
						placeholder="Leave a comment here"
						id="message"
						name="message"
						style={{ height: '150px' }}
					/>
					<label className="ps-4" for="message">
						Leave a comment here
					</label>
					<ValidationError
						prefix="Message"
						field="message"
						errors={state.errors}
					/>
				</div>
			</div>

			<div className="row m-3">
				<button
					type="submit"
					disabled={state.submitting}
					className="btn btn-outline-dark "
				>
					Send
				</button>
			</div>
		</form>
	);
};
