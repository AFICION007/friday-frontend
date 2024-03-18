import { useTheme } from "@mui/material/styles";

const getChartData = (data, resultMetadata, options) => {
	const cols = resultMetadata.length,
		rows = data.length;

	var valuesX = [],
		chartSeries = Array.from({ length: cols - 1 }, () => ({ data: [] }));

	for (let i = 0; i < cols; i += 1) {
		const name = resultMetadata[i].display_name;

		for (let j = 0; j < rows; j += 1) {
			if (i === 0) {
				valuesX.push(data[j][name]);
			} else {
				if (j === 0) {
					chartSeries[i - 1].name = name;
				}

				chartSeries[i - 1].data.push(data[j][name]);
			}
		}
	}

	console.log("valuesX", valuesX);
	console.log("resultMetadata", resultMetadata);

	const transformValues = (values, unit) => {
		const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		const months = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];

		const unitMapping = {
			category: values,
			"day-of-week": values.map((value) => days[value - 1]),
			"month-of-year": values.map((value) => months[value - 1]),
			"quarter-of-year": values.map((value) => `Q${value}`),
			year: values.map((value) => new Date(value).getFullYear()),
		};

		return unitMapping[unit];
	};

	const unitX = resultMetadata[0].semantic_type
		? resultMetadata[0].semantic_type.split("/")[1].toLowerCase()
		: resultMetadata[0].unit;

	valuesX = transformValues(valuesX, unitX);

	const theme = useTheme();
	const colors = [
		"primary",
		"success",
		"info",
		"warning",
		"error",
		"green",
		"blue",
		"purple",
	];

	var pickedColors = colors
		.slice(0, cols - 1)
		.map((color) => theme.palette[color].main);

	return {
		chartSeries: chartSeries,
		chartOptions: {
			...options,
			colors: pickedColors,
			xaxis: { ...options.xaxis, categories: valuesX },
		},
	};
};

export default getChartData;

// const getChartData = (response, options) => {
// 	const rows = response.data.rows.length,
// 		cols = response.data.rows[0].length;

// 	var valuesX = [];
// 	var chartSeries = Array.from({ length: cols - 1 }, () => ({ data: [] }));

// 	console.log(chartSeries);

// 	for (let i = 0; i < rows; i += 1) {
// 		const row = response.data.rows[i];

// 		valuesX.push(row[0]);

// 		for (let j = 1; j < cols; j += 1) {
// 			chartSeries[j - 1].data.push(row[j]);
// 		}
// 	}

// 	console.log(chartSeries);

// 	// adding names for each series
// 	chartSeries.forEach(
// 		(series, index) =>
// 			(series["name"] = response.data.cols[index + 1].display_name)
// 	);

// 	const transformValues = (values, unit) => {
// 		const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// 		const months = [
// 			"Jan",
// 			"Feb",
// 			"Mar",
// 			"Apr",
// 			"May",
// 			"Jun",
// 			"Jul",
// 			"Aug",
// 			"Sep",
// 			"Oct",
// 			"Nov",
// 			"Dec",
// 		];

// 		const unitMapping = {
// 			category: values,
// 			"day-of-week": values.map((value) => days[value - 1]),
// 			"month-of-year": values.map((value) => months[value - 1]),
// 			"quarter-of-year": values.map((value) => `Q${value}`),
// 			year: values.map((value) => new Date(value).getFullYear()),
// 		};

// 		return unitMapping[unit];
// 	};

// 	const unitX = response.data.cols[0].semantic_type
// 		? response.data.cols[0].semantic_type.split("/")[1].toLowerCase()
// 		: response.data.cols[0].unit;

// 	valuesX = transformValues(valuesX, unitX);

// 	const theme = useTheme();
// 	const colors = [
// 		"primary",
// 		"success",
// 		"info",
// 		"warning",
// 		"error",
// 		"green",
// 		"blue",
// 		"purple",
// 	];

// 	console.log(theme.palette);

// 	var pickedColors = colors
// 		.slice(0, cols - 1)
// 		.map((color) => theme.palette[color].main);

// 	return {
// 		chartSeries: chartSeries,
// 		chartOptions: {
// 			...options,
// 			colors: pickedColors,
// 			xaxis: { ...options.xaxis, categories: valuesX },
// 		},
// 	};
// };
