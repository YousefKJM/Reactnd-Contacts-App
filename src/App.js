import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as ConTactsAPI from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";

class App extends Component {
	state = {
		contacts: [
			// {
			// 	id: "karen",
			// 	name: "Karen Isgrigg",
			// 	handle: "@karen_isgrigg",
			// 	avatarURL: "http://localhost:5001/michael.jpg",
			// },
			// {
			// 	id: "richard",
			// 	name: "Richard Kalehoff",
			// 	handle: "@richardkalehoff",
			// 	avatarURL: "http://localhost:5001/ryan.jpg",
			// },
			// {
			// 	id: "tyler",
			// 	name: "Tyler McGinnis",
			// 	handle: "@tylermcginnis",
			// 	avatarURL: "http://localhost:5001/tyler.jpg",
			// },
		],
		screen: "list",
	};

	componentDidMount() {
		ConTactsAPI.getAll().then((contacts) => {
			this.setState(() => ({
				contacts,
			}));
		});
	}
	removeContact = (contact) => {
		// this.setState({
		// 	key: "tyler",
		// });
		this.setState((currentState) => ({
			contacts: currentState.contacts.filter((c) => {
				return c.id !== contact.id;
			}),
		}));

		ConTactsAPI.remove(contact);
	};

	render() {
		return (
			<div>
				{this.state.screen === "list" && (
					<ListContacts
						contacts={this.state.contacts}
						onDeleteContact={this.removeContact}
						onNavigate={() => {
							this.setState(() => ({
								screen: "create",
							}));
						}}
					/>
				)}
				{this.state.screen === "create" && <CreateContact />}
			</div>
		);
	}
}

export default App;
