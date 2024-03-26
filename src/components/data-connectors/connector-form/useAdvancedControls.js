export const commonAdvancedFormControls = [
	{
		label: "Rerun queries for simple explorations",
		placeholder:
			"We execute the underlying query when you explore data using Summarize or Filter. This is on by default but you can turn it off if performance is slow.",
		type: "toggle",
		name: "auto_run_queries",
		noTransform: true,
	},
	{
		label: "Choose when syncs and scans happen",
		placeholder:
			"By default, Metabase does a lightweight hourly sync and an intensive daily scan of field values. If you have a large database, turn this on to make changes.",
		type: "toggle",
		name: "let_user_control_scheduling",
	},
	{
		label: "Database syncing",
		sublabel:
			"This is a lightweight process that checks for updates to this database’s schema. In most cases, you should be fine leaving this set to sync hourly.",
		type: "labels",
		showIf: (formValues) => formValues.let_user_control_scheduling,
	},
	{
		label: "Sync",
		placeholder: "Select",
		type: "select",
		items: [
			{ label: "Daily", value: "daily" },
			{ label: "Hourly", value: "hourly" },
		],
		name: "metadata_sync_schedule_type",
		width: "half",
		showIf: (formValues) => formValues.let_user_control_scheduling,
		noTransform: true,
	},
	{
		label: "at time each day",
		placeholder: "",
		type: "hour",
		name: "metadata_sync_schedule_hour",
		width: "half",
		showIf: (formValues) =>
			formValues.let_user_control_scheduling &&
			formValues.metadata_sync_schedule_type === "daily",
		noTransform: true,
	},
	{
		label: "at minutes past the hour",
		placeholder: "0",
		type: "select",
		items: Array.from({ length: 60 }, (_, index) => ({
			label: index,
			value: parseInt(index, 10),
		})),
		name: "metadata_sync_schedule_minute",
		width: "half",
		showIf: (formValues) =>
			formValues.let_user_control_scheduling &&
			formValues.metadata_sync_schedule_type === "hourly",
		noTransform: true,
	},
	{
		label: "Scanning for Filter Values",
		sublabel:
			"Metabase can scan the values present in each field in this database to enable checkbox filters in dashboards and questions. This can be a somewhat resource-intensive process, particularly if you have a very large database. When should Metabase automatically scan and cache field values?",
		type: "labels",
		showIf: (formValues) => formValues.let_user_control_scheduling,
	},
	{
		type: "custom_radio",
		showIf: (formValues) => formValues.let_user_control_scheduling,
	},
	{
		label: "Periodically refingerprint tables",
		placeholder:
			"This enables Metabase to scan for additional field values during syncs allowing smarter behavior, like improved auto-binning on your bar charts.",
		type: "toggle",
		name: "refingerprint",
		noTransform: true,
	},
];

export const useAdvancedControls = (dataSourceId) => {
	const advancedControlsMapping = {
		amazon_athena: [
			{
				label: "Additional Athena connection string options",
				placeholder: "UseResultSetStreaming=0;LogLevel=6",
				type: "text",
				name: "additional_options",
			},
			{
				label: "Include User ID and query hash in queries",
				placeholder:
					"This can be useful for auditing and debugging, but prevents databases from caching results and may increase your costs.",
				type: "toggle",
				name: "include_user_id_and_hash",
			},
		],
		amazon_redshift: [
			{
				label: "Additional JDBC connection string options",
				placeholder: "SocketTimeout=0",
				type: "text",
				name: "additional_options",
			},
		],
		bigquery: [
			{
				label: "Use the Java Virtual Machine (JVM) timezone",
				placeholder:
					"We suggest you leave this off unless you plan on doing a lot of manual timezone casting with this data.",
				type: "toggle",
				name: "use_jvm_timezone",
			},
			{
				label: "Include User ID and query hash in queries",
				placeholder:
					"This can be useful for auditing and debugging, but prevents databases from caching results and may increase your costs.",
				type: "toggle",
				name: "include_user_id_and_hash",
			},
		],
		druid: [
			{
				label: "Authentication header",
				placeholder: "",
				type: "toggle",
				name: "auth_enabled",
			},
			{
				label: "Username",
				placeholder: "",
				type: "text",
				name: "auth_username",
				showIf: (formValues) => formValues.auth_enabled === true,
			},
			{
				label: "Token",
				placeholder: "",
				type: "text",
				name: "auth_token_value",
				showIf: (formValues) => formValues.auth_enabled === true,
			},
		],
		mongodb: [
			{
				label: "Additional connection string options (optional)",
				placeholder:
					"retryWrites=true&w=majority&authSource=admin&readPreference=nearest",
				type: "text",
				name: "additional_options",
			},
			{
				label: "Connect using DNS SRV",
				placeholder:
					"If you're connecting to an Atlas cluster, you might need to turn this on. Note that your provided host must be a fully qualified domain name.",
				type: "toggle",
				name: "use_srv",
			},
		],
		mysql: [
			{
				label: "Allow unfolding of JSON columns",
				placeholder:
					"This enables unfolding JSON columns into their component fields. Disable unfolding if performance is slow. If enabled, you can still disable unfolding for individual fields in their settings.",
				type: "toggle",
				name: "json_unfolding",
			},
			{
				label: "Additional JDBC connection string options",
				placeholder: "tinyInt1isBit=false",
				type: "text",
				name: "additional_options",
			},
		],
		postgresql: [
			{
				label: "Allow unfolding of JSON columns",
				placeholder:
					"This enables unfolding JSON columns into their component fields. Disable unfolding if performance is slow. If enabled, you can still disable unfolding for individual fields in their settings.",
				type: "toggle",
				name: "json_unfolding",
			},
			{
				label: "Additional JDBC connection string options",
				placeholder: "prepareThreshold=0",
				type: "text",
				name: "additional_options",
			},
		],
		presto: [
			{
				label: "Authenticate with Kerberos",
				placeholder: "",
				type: "toggle",
				name: "kerberos",
			},
			{
				label: "Kerberos principal",
				placeholder: "service/instance@REALM",
				type: "text",
				name: "kerberos_principal",
				showIf: (formValues) => formValues.kerberos === true,
			},
			{
				label: "Kerberos coordinator service",
				placeholder: "presto",
				type: "text",
				name: "kerberos_remote_service_name",
				showIf: (formValues) => formValues.kerberos === true,
			},
			{
				label: "Use canonical hostname",
				placeholder:
					"If you're connecting to an Atlas cluster, you might need to turn this on. Note that your provided host must be a fully qualified domain name.",
				type: "toggle",
				name: "kerberos_use_canonical_hostname",
				showIf: (formValues) => formValues.kerberos === true,
			},
			{
				label: "Kerberos credential cache file",
				placeholder: "/tmp/kerberos-credential-cache",
				type: "text",
				name: "kerberos_credential_cache_path",
				showIf: (formValues) => formValues.kerberos === true,
			},
			{
				label: "Kerberos keytab file",
				placeholder: "/path/to/kerberos.keytab",
				type: "text",
				name: "kerberos_keytab_path",
				showIf: (formValues) => formValues.kerberos === true,
			},
			{
				label: "Kerberos configuration file",
				placeholder: "/etc/krb5.conf",
				type: "text",
				name: "kerberos_config_path",
				showIf: (formValues) => formValues.kerberos === true,
			},
			{
				label: "Presto coordinator Kerberos service principal pattern",
				placeholder: "${SERVICE}@${HOST}.${SERVICE}",
				type: "text",
				name: "kerberos_service_principal_pattern",
				showIf: (formValues) => formValues.kerberos === true,
			},
			{
				label: "Additional JDBC options",
				placeholder:
					"SSLKeyStorePath=/path/to/keystore.jks&SSLKeyStorePassword=whatever",
				type: "text",
				name: "additional_options",
			},
		],
		snowflake: [
			{
				label: "Additional JDBC connection string options",
				placeholder: "queryTimeout=0",
				type: "text",
				name: "additional_options",
			},
			{
				label: "Quote DB name (to ensure case sensitive matching)",
				placeholder: "",
				type: "toggle",
				name: "quote_db_name",
			},
		],
		spark_sql: [
			{
				label: "Additional JDBC connection string options",
				placeholder: ";transportMode=http",
				type: "text",
				name: "jdbc_flags",
			},
		],
		sql_server: [
			{
				label: "Additional JDBC connection string options",
				placeholder: "trustServerCertificate=false",
				type: "text",
				name: "additional_options",
			},
		],
		sqlite: [],
	};

	return advancedControlsMapping[dataSourceId];
};
