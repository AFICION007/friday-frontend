import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { useTheme } from "@mui/material/styles";

import { Chart } from "../Chart";

const chartSeries = [
	{
		name: "BTC",
		data: [56, 77, 54, 65, 55, 72, 80, 74, 67, 77, 83, 94],
	},
	{
		name: "ETH",
		data: [65, 64, 32, 45, 54, 76, 82, 80, 85, 78, 82, 95],
	},
];

const useChartOptions = () => {
	const theme = useTheme();

	return {
		chart: {
			background: "transparent",
			toolbar: {
				show: false,
			},
		},
		colors: [theme.palette.primary.main, theme.palette.success.main],
		dataLabels: {
			enabled: false,
		},
		fill: {
			gradient: {
				opacityFrom: 0.5,
				opacityTo: 0,
				stops: [0, 100],
			},
			type: "gradient",
		},
		grid: {
			borderColor: theme.palette.divider,
			strokeDashArray: 2,
		},
		stroke: {
			width: 2,
		},
		theme: {
			mode: theme.palette.mode,
		},
		xaxis: {
			axisTicks: {
				show: false,
			},
			axisBorder: {
				show: false,
			},
			categories: [
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
			],
			tickAmount: 5,
		},
	};
};

export const CurvedLine = () => {
	const chartOptions = useChartOptions();

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
				<CardHeader title="Analytics" />
				<CardContent>
					<Chart
						height={280}
						width={700}
						options={chartOptions}
						series={chartSeries}
						type="area"
					/>
				</CardContent>
			</Card>
		</Box>
	);
};
