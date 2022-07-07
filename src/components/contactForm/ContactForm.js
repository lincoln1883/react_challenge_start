import React from "react";

export const ContactForm = ({
	name,
	setName,
	phone,
	setPhone,
	email,
	setEmail,
	handleSubmit,
}) => {
	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input
					type="text"
					value={name}
					onChange={({ target }) => {
						setName(target.value);
					}}
					required
				/>
			</label>
			<label>
				Email:
				<input
					type="email"
					value={email}
					onChange={({ target }) => {
						setEmail(target.value);
					}}
					required
				/>
			</label>
			<label>
				Telephone:
				<input
					type="tele"
					value={phone}
					pattern="(/(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g)"
					onChange={({ target }) => {
						setPhone(target.value);
					}}
				/>
			</label>
			<input type="submit" />
		</form>
	);
};
