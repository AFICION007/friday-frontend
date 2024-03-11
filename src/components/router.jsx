import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SideMenu from "./SideMenu";

const Router = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<HomePage setMenuOpen={setMenuOpen} />}
					></Route>
				</Routes>
			</BrowserRouter>
			<SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
		</>
	);
};

export default Router;
