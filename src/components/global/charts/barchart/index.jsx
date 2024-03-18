import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";

import { Chart } from "../Chart";
import getChartData from "../getChartData";
import response from "../data/days.json";

const useChartOptions = () => {
	const theme = useTheme();

	return {
		chart: {
			background: "transparent",
			stacked: false,
			toolbar: {
				show: false,
			},
		},
		colors: [theme.palette.primary.main],
		dataLabels: {
			enabled: false,
		},
		fill: {
			opacity: 1,
			type: "solid",
		},
		grid: {
			show: false,
		},
		legend: {
			show: false,
		},
		plotOptions: {
			bar: {
				columnWidth: "40",
			},
		},
		states: {
			active: {
				filter: {
					type: "none",
				},
			},
			hover: {
				filter: {
					type: "none",
				},
			},
		},
		stroke: {
			colors: ["transparent"],
			show: true,
			width: 2,
		},
		theme: {
			mode: theme.palette.mode,
		},
		xaxis: {
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			categories: [""],
			labels: {
				show: false,
			},
		},
		yaxis: {
			labels: {
				show: false,
			},
		},
	};
};

export const Barchart = () => {
	const options = useChartOptions();
	const { chartSeries, chartOptions } = getChartData(response, options);

	return (
		<Box
			sx={{
				backgroundColor: (theme) =>
					theme.palette.mode === "dark"
						? "neutral.800"
						: "neutral.100",
				p: 3,
			}}
		>
			<Container maxWidth="lg">
				<Card>
					<CardHeader
						subheader="Page views per second"
						title="Active users"
					/>
					<Chart
						height={200}
						width={500}
						options={chartOptions}
						series={chartSeries}
						type="bar"
					/>
				</Card>
			</Container>
		</Box>
	);
};
