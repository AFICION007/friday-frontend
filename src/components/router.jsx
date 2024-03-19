import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout";
import HomePage from "./home";
import DataConnectors from "./data-connectors";
import ConnectorForm from "./data-connectors/connector-form";

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
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="" element={<HomePage />} />
						<Route
							path="data-sources"
							element={<DataConnectors />}
						></Route>
						<Route
							path="data-sources/connect-new-data-source/:dataSourceId"
							element={<ConnectorForm />}
						></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default Router;
