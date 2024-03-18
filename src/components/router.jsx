import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./home";
import SideMenu from "./side-menu";

import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "../theme/index";

const theme = createTheme({
	colorPreset: "indigo",
	contrast: "normal",
	direction: "ltr",
	paletteMode: "light",
	responsiveFontSizes: true,
});

const Router = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<HomePage setMenuOpen={setMenuOpen} />}
					/>
				</Routes>
			</BrowserRouter>
			<SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
		</ThemeProvider>
	);
};

export default Router;
