import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { useTheme } from "@mui/material/styles";

import { Chart } from "../Chart";
import getChartData from "../getChartData";
import response from "../data/quarter.json";

const useChartOptions = () => {
	const theme = useTheme();

	return {
		chart: {
			background: "transparent",
			toolbar: {
				show: false,
			},
		},
		dataLabels: {
			enabled: false,
		},
		fill: {
			opacity: 1,
			type: "solid",
		},
		grid: {
			borderColor: theme.palette.divider,
			strokeDashArray: 2,
			xaxis: {
				lines: {
					show: false,
				},
			},
			yaxis: {
				lines: {
					show: true,
				},
			},
		},
		legend: {
			labels: {
				colors: theme.palette.text.secondary,
			},
			show: true,
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
			labels: {
				style: {
					colors: theme.palette.text.secondary,
				},
			},
		},
		yaxis: {
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			labels: {
				style: {
					colors: theme.palette.text.secondary,
				},
			},
		},
	};
};

export const BasicColumn = () => {
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
			<Card>
				<CardHeader title="Sales" />
				<CardContent>
					<Chart
						height={300}
						width={800}
						options={chartOptions}
						series={chartSeries}
						type="bar"
					/>
				</CardContent>
			</Card>
		</Box>
	);
};
