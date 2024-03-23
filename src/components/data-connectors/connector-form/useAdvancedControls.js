export const useCommonFormControls = (formValues) => [
	{
		label: "Rerun queries for simple explorations",
		placeholder:
			"We execute the underlying query when you explore data using Summarize or Filter. This is on by default but you can turn it off if performance is slow.",
		type: "toggle",
		name: "rerun_queries_for_simple_explorations",
	},
	{
		label: "Choose when syncs and scans happen",
		placeholder:
			"By default, Metabase does a lightweight hourly sync and an intensive daily scan of field values. If you have a large database, turn this on to make changes.",
		type: "toggle",
		name: "choose_when_syncs_and_scans_happen",
	},
	{
		label: "Database syncing",
		sublabel:
			"This is a lightweight process that checks for updates to this database’s schema. In most cases, you should be fine leaving this set to sync hourly.",
		type: "labels",
		name: "database_syncing",
		showIf: () => formValues.choose_when_syncs_and_scans_happen,
	},
	{
		label: "Sync",
		placeholder: "Select",
		type: "select",
		items: [
			{ label: "Daily", value: "daily" },
			{ label: "Hourly", value: "hourly" },
		],
		name: "sync",
		width: "half",
		showIf: () => formValues.choose_when_syncs_and_scans_happen,
	},
	{
		label: "at",
		placeholder: "",
		type: "hour",
		name: "at_time",
		width: "half",
		showIf: () => formValues.choose_when_syncs_and_scans_happen,
	},
	{
		label: "Scanning for Filter Values",
		sublabel:
			"Metabase can scan the values present in each field in this database to enable checkbox filters in dashboards and questions. This can be a somewhat resource-intensive process, particularly if you have a very large database. When should Metabase automatically scan and cache field values?",
		type: "labels",
		name: "scanning_for_filter_values",
		showIf: () => formValues.choose_when_syncs_and_scans_happen,
	},
	{
		type: "custom_radio",
		showIf: () => formValues.choose_when_syncs_and_scans_happen,
	},
	{
		label: "Periodically refingerprint tables",
		placeholder:
			"This enables Metabase to scan for additional field values during syncs allowing smarter behavior, like improved auto-binning on your bar charts.",
		type: "toggle",
		name: "periodically_refingerprint_tables",
	},
];

export const useAdvancedControls = (dataSourceId, formValues) => {
	const advancedControlsMapping = {
		amazon_athena: [
			{
				label: "Additional Athena connection string options",
				placeholder: "UseResultSetStreaming=0;LogLevel=6",
				type: "text",
				name: "additional_athena_connection_string_options",
			},
			{
				label: "Include User ID and query hash in queries",
				placeholder:
					"This can be useful for auditing and debugging, but prevents databases from caching results and may increase your costs.",
				type: "toggle",
				name: "include_user_id_and_query_hash_in_queries",
			},
		],
		amazon_redshift: [
			{
				label: "Additional JDBC connection string options",
				placeholder: "SocketTimeout=0",
				type: "text",
				name: "additional_jdbc_connection_string_options",
			},
		],
		bigquery: [
			{
				label: "Use the Java Virtual Machine (JVM) timezone",
				placeholder:
					"We suggest you leave this off unless you plan on doing a lot of manual timezone casting with this data.",
				type: "toggle",
				name: "use_the_java_virtual_machine_jvm_timezone",
			},
			{
				label: "Include User ID and query hash in queries",
				placeholder:
					"This can be useful for auditing and debugging, but prevents databases from caching results and may increase your costs.",
				type: "toggle",
				name: "include_user_id_and_query_hash_in_queries",
			},
		],
		druid: [
			{
				label: "Authentication header",
				placeholder: "",
				type: "toggle",
				name: "authentication_header",
			},
			{
				label: "Username",
				placeholder: "",
				type: "text",
				name: "username",
				showIf: () => formValues.authentication_header === true,
			},
			{
				label: "Token",
				placeholder: "",
				type: "text",
				name: "token",
				showIf: () => formValues.authentication_header === true,
			},
		],
		mongodb: [
			{
				label: "Additional connection string options (optional)",
				placeholder:
					"retryWrites=true&w=majority&authSource=admin&readPreference=nearest",
				type: "text",
				name: "additional_connection_string_options_optional",
			},
			{
				label: "Connect using DNS SRV",
				placeholder:
					"If you're connecting to an Atlas cluster, you might need to turn this on. Note that your provided host must be a fully qualified domain name.",
				type: "toggle",
				name: "connect_using_dns_srv",
			},
		],
		mysql: [
			{
				label: "Allow unfolding of JSON columns",
				placeholder:
					"This enables unfolding JSON columns into their component fields. Disable unfolding if performance is slow. If enabled, you can still disable unfolding for individual fields in their settings.",
				type: "toggle",
				name: "allow_unfolding_of_json_columns",
			},
			{
				label: "Additional JDBC connection string options",
				placeholder: "tinyInt1isBit=false",
				type: "text",
				name: "additional_jdbc_connection_string_options",
			},
		],
		postgresql: [
			{
				label: "Allow unfolding of JSON columns",
				placeholder:
					"This enables unfolding JSON columns into their component fields. Disable unfolding if performance is slow. If enabled, you can still disable unfolding for individual fields in their settings.",
				type: "toggle",
				name: "allow_unfolding_of_json_columns",
			},
			{
				label: "Additional JDBC connection string options",
				placeholder: "prepareThreshold=0",
				type: "text",
				name: "additional_jdbc_connection_string_options",
			},
		],
		presto: [
			{
				label: "Authenticate with Kerberos",
				placeholder: "",
				type: "toggle",
				name: "authenticate_with_kerberos",
			},
			{
				label: "Kerberos principal",
				placeholder: "service/instance@REALM",
				type: "text",
				name: "kerberos_principal",
				showIf: () => formValues.authenticate_with_kerberos === true,
			},
			{
				label: "Kerberos coordinator service",
				placeholder: "presto",
				type: "text",
				name: "kerberos_coordinator_service",
				showIf: () => formValues.authenticate_with_kerberos === true,
			},
			{
				label: "Use canonical hostname",
				placeholder:
					"If you're connecting to an Atlas cluster, you might need to turn this on. Note that your provided host must be a fully qualified domain name.",
				type: "toggle",
				name: "use_canonical_hostname",
				showIf: () => formValues.authenticate_with_kerberos === true,
			},
			{
				label: "Kerberos credential cache file",
				placeholder: "/tmp/kerberos-credential-cache",
				type: "text",
				name: "kerberos_credential_cache_file",
				showIf: () => formValues.authenticate_with_kerberos === true,
			},
			{
				label: "Kerberos keytab file",
				placeholder: "/path/to/kerberos.keytab",
				type: "text",
				name: "kerberos_keytab_file",
				showIf: () => formValues.authenticate_with_kerberos === true,
			},
			{
				label: "Kerberos configuration file",
				placeholder: "/etc/krb5.conf",
				type: "text",
				name: "kerberos_configuration_file",
				showIf: () => formValues.authenticate_with_kerberos === true,
			},
			{
				label: "Presto coordinator Kerberos service principal pattern",
				placeholder: "${SERVICE}@${HOST}.${SERVICE}",
				type: "text",
				name: "presto_coordinator_kerberos_service_principal_pattern",
				showIf: () => formValues.authenticate_with_kerberos === true,
			},
			{
				label: "Additional JDBC options",
				placeholder:
					"SSLKeyStorePath=/path/to/keystore.jks&SSLKeyStorePassword=whatever",
				type: "text",
				name: "additional_jdbc_options",
			},
		],
		snowflake: [
			{
				label: "Additional JDBC connection string options",
				placeholder: "queryTimeout=0",
				type: "text",
				name: "additional_jdbc_connection_string_options_query_timeout",
			},
			{
				label: "Quote DB name (to ensure case sensitive matching)",
				placeholder: "",
				type: "toggle",
				name: "quote_db_name_to_ensure_case_sensitive_matching",
			},
		],
		spark_sql: [
			{
				label: "Additional JDBC connection string options",
				placeholder: ";transportMode=http",
				type: "text",
				name: "additional_jdbc_connection_string_options_transport_mode",
			},
		],
		sql_server: [
			{
				label: "Additional JDBC connection string options",
				placeholder: "trustServerCertificate=false",
				type: "text",
				name: "additional_jdbc_connection_string_options_trust_server_certificate",
			},
		],
		sqlite: [],
	};

	return advancedControlsMapping[dataSourceId];
};
