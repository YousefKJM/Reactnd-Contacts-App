import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as ConTactsAPI from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";
import { Route } from "react-router-dom";

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

	createContact = (contact) => {
		ConTactsAPI.create(contact).then((contact) => {
			this.setState((currentState) => ({
				contacts: currentState.contacts.concat([contact]),
			}));
		});
	};

	render() {
		return (
			<div>
				<Route
					exact
					path="/"
					render={() => (
						<ListContacts
							contacts={this.state.contacts}
							onDeleteContact={this.removeContact}
						/>
					)}
				/>
				{/* <Route path="/create" component={CreateContact} /> */}
				<Route
					path="/create"
					render={({ history }) => (
						<CreateContact
							onCreateContact={(contact) => {
								this.createContact(contact);
								history.push("/");
							}}
						/>
					)}
				/>
			</div>
		);
	}
}

export default App;
