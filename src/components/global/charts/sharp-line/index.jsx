import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { useTheme } from "@mui/material/styles";

import { Chart } from "../Chart";
import getChartData from "../getChartData";

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
		dataLabels: {
			enabled: false,
		},
		fill: {
			type: "solid",
			opacity: 0,
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
		markers: {
			strokeColors: theme.palette.background.paper,
			size: 6,
		},
		stroke: {
			curve: "straight",
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
		},
	};
};

const SharpLine = ({ data, resultMetadata }) => {
	const options = useChartOptions();
	const { chartOptions, chartSeries } = getChartData(
		data,
		resultMetadata,
		options
	);

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
				<CardHeader title="Sales Revenue" />
				<CardContent>
					<Chart
						height={300}
						width={1000}
						options={chartOptions}
						series={chartSeries}
						type="area"
					/>
				</CardContent>
			</Card>
		</Box>
	);
};

export default SharpLine;
