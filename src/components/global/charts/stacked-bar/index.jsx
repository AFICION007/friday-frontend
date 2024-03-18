import { alpha } from "@mui/system/colorManipulator";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import { Chart } from "../Chart";
import { Scrollbar } from "../../Global/Scrollbar";
import getChartData from "../getChartData";
import response from "../data/employees.json";

const useChartOptions = () => {
	const theme = useTheme();

	return {
		chart: {
			background: "transparent",
			stacked: true,
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
			show: false,
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
			labels: {
				style: {
					colors: theme.palette.text.secondary,
				},
			},
		},
		yaxis: {
			labels: {
				offsetX: -12,
				style: {
					colors: theme.palette.text.secondary,
				},
			},
		},
	};
};

export const StackedBar = () => {
	const options = useChartOptions();
	const { chartOptions, chartSeries } = getChartData(response, options);

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
				<CardHeader
					subheader={
						<Typography color="text.secondary" variant="body2">
							Trimester
						</Typography>
					}
					title="Total Transactions"
				/>
				<Scrollbar>
					<Box
						sx={{
							height: 336,
							minWidth: 500,
							px: 2,
						}}
					>
						<Chart
							height={300}
							width={1000}
							options={chartOptions}
							series={chartSeries}
							type="bar"
						/>
					</Box>
				</Scrollbar>
			</Card>
		</Box>
	);
};
