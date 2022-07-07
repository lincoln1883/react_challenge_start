import React from "react";
import { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
	/*
  Define state variables for 
  contact info and duplicate check
  */
	const contacts = props.contacts;
	const addContact = props.addContact;
	//Local states
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [duplicate, setDuplicate] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		/*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
		if (!duplicate) {
			addContact(name, phone, email);
			setName("");
			setEmail("");
			setPhone("");
		}
	};

	/*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
	useEffect(() => {
		for (const contact in contacts) {
			if (name === contact.name) {
				setDuplicate(true);
			}
			return;
		}
	}, [contacts, name]);

	return (
		<div>
			<section>
				<h2>Add Contact</h2>
				<ContactForm
					name={name}
					phone={phone}
					email={email}
					setName={setName}
					setPhone={setPhone}
					setEmail={setEmail}
					handleSubmit={handleSubmit}
				/>
			</section>
			<hr />
			<section>
				<h2>Contacts</h2>
				<TileList objArr={props.contacts} />
			</section>
		</div>
	);
};
