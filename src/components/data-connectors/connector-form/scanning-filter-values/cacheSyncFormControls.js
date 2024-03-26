const cacheSyncFormControls = [
	{
		label: "",
		placeholder: "Select",
		type: "select",
		items: [
			{ label: "Daily", value: "daily" },
			{ label: "Weekly", value: "weekly" },
			{ label: "Monthly", value: "monthly" },
		],
		name: "cache_sync_schedule_type",
		width: "full",
		noTransform: true,
	},
	{
		label: "on the",
		placeholder: "",
		type: "select",
		items: [
			{ label: "First", value: "first" },
			{ label: "Last", value: "last" },
			{ label: "15th (Midpoint)", value: "mid" },
		],
		name: "cache_sync_schedule_frame",
		width: "full",
		showIf: (formValues) =>
			formValues.cache_sync_schedule_type === "monthly",
		noTransform: true,
	},
	{
		label: "on",
		placeholder: "",
		type: "select",
		items: [
			{ label: "Sunday", value: "sun" },
			{ label: "Monday", value: "mon" },
			{ label: "Tuesday", value: "tue" },
			{ label: "Wednesday", value: "wed" },
			{ label: "Thursday", value: "thu" },
			{ label: "Friday", value: "fri" },
			{ label: "Saturday", value: "sat" },
		],
		name: "cache_sync_schedule_day",
		width: "full",
		showIf: (formValues) =>
			formValues.cache_sync_schedule_type === "weekly" ||
			(formValues.cache_sync_schedule_type === "monthly" &&
				(formValues.cache_sync_schedule_frame === "first" ||
					formValues.cache_sync_schedule_frame === "last")),
		noTransform: true,
	},
	{
		label: "at",
		placeholder: "",
		type: "hour",
		name: "cache_sync_schedule_hour",
		width: "full",
		noTransform: true,
	},
];

export default cacheSyncFormControls;
