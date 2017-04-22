import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import HomePageComponent from './components/home'
import ContactsPageComponent from './compnents/contact'


function AppComponenet() {
	return (
		<BrowserRouter>
			<div>
				<h1>Hello Devmeetings!</h1>
					<Route path="/home" component="HomePageComponent"></Route>
					<Route path="/contact" component="ContactsPageComponent"></Route>
			</div>
		</BrowserRouter>
		)
}
export default AppComponenet