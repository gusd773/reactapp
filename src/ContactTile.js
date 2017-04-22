import React from 'react';

function ContactTile ({contact}){
	return (
			<div>
			<header> {contact.name} </header>
			<p> {contact.number} </p>

		</div>
			
	)}	

export default ContactTile