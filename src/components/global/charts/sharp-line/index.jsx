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

const SharpLine = ({ title, data, resultMetadata }) => {
	const options = useChartOptions();
	const { chartOptions, chartSeries } = getChartData(
		data,
		resultMetadata,
		options
	);

	return (
		<Card sx={{ width: "100%" }}>
			<CardHeader title={title} />
			<CardContent>
				<Chart
					width="100%"
					height="400px"
					options={chartOptions}
					series={chartSeries}
					type="area"
				/>
			</CardContent>
		</Card>
	);
};

export default SharpLine;
