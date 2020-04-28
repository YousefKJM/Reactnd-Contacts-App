import React, { Component } from "react";
import ListContacts from "./ListContacts";

const contacts = [
	{
		id: "karen",
		name: "Karen Isgrigg",
		handle: "@karen_isgrigg",
		avatarURL: "http://localhost:5001/michael.jpg",
	},
	{
		id: "richard",
		name: "Richard Kalehoff",
		handle: "@richardkalehoff",
		avatarURL: "http://localhost:5001/ryan.jpg",
	},
	{
		id: "tyler",
		name: "Tyler McGinnis",
		handle: "@tylermcginnis",
		avatarURL: "http://localhost:5001/tyler.jpg",
	},
];

class App extends Component {
	render() {
		return (
			<div>
				<ListContacts contacts={contacts} />
			</div>
		);
	}
}

export default App;
