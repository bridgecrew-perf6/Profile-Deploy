import React from 'react';
import '../index.css';

export const ContactForm = () => {
	return (
		<form className="Contact_Form ">
			<div className="row m-3 ">
				<div className="input-group col ">
					<span className="input-group-text " id="addon-wrapping">
						First name
					</span>

					<input
						type="text"
						className="form-control"
						placeholder="First name"
						id="First Name"
					/>
				</div>
				{/* <label for="Last Name" className="col-1 form-label">
					Last Name
				</label> */}
				<div className="input-group col">
					<span className="input-group-text " id="addon-wrapping">
						Last name
					</span>

					<input
						type="text"
						className="form-control"
						placeholder="Last name"
						id="Last Name"
					/>
				</div>
			</div>

			{/* <label for="email" className="col-1 col-form-label">
					Email
				</label> */}

			<div className="row m-3 ">
				<div className="input-group ">
					<span className="input-group-text col-1" id="addon-wrapping">
						Email
					</span>
					<input
						type="email"
						className="form-control"
						id="email"
						aria-describedby="addon-wrapping"
					/>
				</div>
			</div>

			<div className="row m-3">
				<div className="form-floating ">
					<textarea
						className="form-control comments_section "
						placeholder="Leave a comment here"
						id="floatingTextarea"
						style={{ height: '150px' }}
					/>
					<label className="ps-4" for="floatingTextarea">
						Add comments here
					</label>
				</div>
			</div>

			<div className="row m-3">
				<button type="submit" className="btn btn-outline-dark ">
					Send
				</button>
			</div>
		</form>
	);
};
