const useFormControlsMapping = (dataSourceId) => {
	const formControlsMapping = {
		amazon_athena: [
			{
				label: "Display name",
				placeholder: "Our Amazon Athena",
				type: "text",
				name: "name",
			},
			{
				label: "Region",
				placeholder: "us-east-1",
				type: "text",
				name: "region",
			},
			{
				label: "Workgroup",
				placeholder: "primary",
				type: "text",
				name: "workgroup",
			},
			{
				label: "S3 staging directory",
				placeholder: "s3://your_bucket",
				type: "text",
				name: "s3_staging_dir",
				noTransform: true,
			},
			{
				label: "Catalog",
				placeholder: "AwsDataCatalog",
				type: "text",
				name: "catalog",
			},
			{
				label: "Access key",
				placeholder: "",
				type: "text",
				name: "access_key",
				noTransform: true,
			},
			{
				label: "Secret key",
				placeholder: "••••••••",
				type: "password",
				name: "secret_key",
				noTransform: true,
			},
		],
		amazon_redshift: [
			{
				label: "Display name",
				placeholder: "Our Amazon Redshift",
				type: "text",
				name: "name",
			},
			{
				label: "Host",
				placeholder:
					"my-cluster-name.abcd1234.us-east-1.redshift.amazonaws.com",
				type: "text",
				name: "host",
			},
			{
				label: "Port",
				placeholder: "5439",
				type: "number",
				name: "port",
			},
			{
				label: "Database name",
				placeholder: "birds_of_the_world",
				type: "text",
				name: "db",
			},
			{
				label: "Schemas",
				placeholder: "Select",
				type: "select",
				items: [
					{ label: "All", value: "all" },
					{ label: "Only these", value: "inclusion" },
					{ label: "All except", value: "exclusion" },
				],
				name: "schema_filters_type",
			},
			{
				label: `Comma separated names of schemas that should appear in Metabase`,
				placeholder: "E.g. public,auth*",
				type: "textarea",
				name: "schema_filters_patterns",
				showIf: (formValues) =>
					formValues?.schema_filters_type === "inclusion",
			},
			{
				label: `Comma separated names of schemas that should NOT appear in Metabase`,
				placeholder: "E.g. public,auth*",
				type: "textarea",
				name: "schema_filters_patterns",
				showIf: (formValues) =>
					formValues?.schema_filters_type === "exclusion",
			},
			{
				label: "Username",
				placeholder: "username",
				type: "text",
				name: "user",
			},
			{
				label: "Password",
				placeholder: "••••••••",
				type: "password",
				name: "password",
			},
			{
				label: "Use an SSH-tunnel",
				placeholder:
					"If a direct connection to your database isn't possible, you may want to use an SSH tunnel.",
				type: "toggle",
				name: "tunnel_enabled",
			},
		],
		bigquery: [
			{
				label: "Display name",
				placeholder: "Our BigQuery",
				type: "text",
				name: "name",
			},
			{
				label: "Project ID (override)",
				placeholder: "1w08oDRKPrOqBt06yxY8uiCz2sSvOp3u",
				type: "text",
				name: "project_id",
			},
			{
				label: "Service account JSON file",
				placeholder: "Select a file",
				type: "file",
				name: "service_account_json",
			},
			{
				label: "Datasets",
				placeholder: "Select",
				type: "select",
				items: [
					{ label: "All", value: "all" },
					{ label: "Only these", value: "inclusion" },
					{ label: "All except", value: "exclusion" },
				],
				name: "dataset_filters_type",
			},
			{
				label: `Comma separated names of schemas that should appear in Metabase`,
				placeholder: "E.g. public,auth*",
				type: "textarea",
				name: "dataset_filters_patterns",
				showIf: (formValues) =>
					formValues?.dataset_filters_type === "inclusion",
			},
			{
				label: `Comma separated names of schemas that should NOT appear in Metabase`,
				placeholder: "E.g. public,auth*",
				type: "textarea",
				name: "dataset_filters_patterns",
				showIf: (formValues) =>
					formValues?.dataset_filters_type === "exclusion",
			},
		],
		druid: [
			{
				label: "Display name",
				placeholder: "Our Druid",
				type: "text",
				name: "name",
			},
			{
				label: "Host",
				placeholder: "name.database.com",
				type: "text",
				name: "host",
			},
			{
				label: "Broker node port",
				placeholder: "8082",
				type: "number",
				name: "port",
			},
			{
				label: "Use an SSH-tunnel",
				placeholder:
					"If a direct connection to your database isn't possible, you may want to use an SSH tunnel.",
				type: "toggle",
				name: "tunnel_enabled",
			},
		],
		mongodb: [
			{
				label: "Display name",
				placeholder: "Our MongoDB",
				type: "text",
				name: "name",
			},
			{
				label: "Connection method",
				placeholder: "Select",
				type: "select",
				items: [
					{
						label: "Fill out individual fields",
						value: false,
					},
					{
						label: "Paste a connection string",
						value: true,
					},
				],
				name: "use_conn_uri",
			},
			{
				label: "Host",
				placeholder: "name.database.com",
				type: "text",
				name: "host",
				showIf: (formValues) => formValues?.use_conn_uri === false,
			},
			{
				label: "Database name",
				placeholder: "birds_of_the_world",
				type: "text",
				name: "dbname",
				showIf: (formValues) => formValues?.use_conn_uri === false,
			},
			{
				label: "Port",
				placeholder: "27017",
				type: "number",
				name: "port",
				showIf: (formValues) => formValues?.use_conn_uri === false,
			},
			{
				label: "Username",
				placeholder: "username",
				type: "text",
				name: "user",
				showIf: (formValues) => formValues?.use_conn_uri === false,
			},
			{
				label: "Password",
				placeholder: "••••••••",
				type: "pass",
				name: "password",
				showIf: (formValues) => formValues?.use_conn_uri === false,
			},
			{
				label: "Authentication database (optional)",
				placeholder: "admin",
				type: "text",
				name: "authdb",
				showIf: (formValues) => formValues?.use_conn_uri === false,
			},
			{
				label: "Use a secure connection (SSL)",
				placeholder: "",
				type: "toggle",
				name: "ssl",
				showIf: (formValues) => formValues?.use_conn_uri === false,
			},
			{
				label: "Server SSL certificate chain",
				placeholder:
					"Paste the contents of the server's SSL certificate chain here",
				type: "textarea",
				name: "ssl_cert",
				showIf: (formValues) =>
					formValues?.use_conn_uri === false &&
					formValues?.ssl === true,
			},
			{
				label: "Authenticate client certificate?",
				placeholder: "",
				type: "toggle",
				name: "ssl_use_client_auth",
				showIf: (formValues) =>
					formValues?.use_conn_uri === false &&
					formValues?.ssl === true,
			},
			{
				label: "Client SSL certificate chain (PEM)",
				placeholder:
					"Paste the contents of the client's SSL certificate chain here",
				type: "textarea",
				name: "client_ssl_cert",
				showIf: (formValues) =>
					formValues?.use_conn_uri === false &&
					formValues?.ssl === true &&
					formValues?.ssl_use_client_auth === true,
			},
			{
				label: "Client SSL private key (PEM)",
				placeholder: "Select",
				type: "select",
				items: [
					{ label: "Local file path", value: "local" },
					{
						label: "Uploaded file path",
						value: "uploaded",
					},
				],
				name: "client_ssl_key_options",
				showIf: (formValues) =>
					formValues?.use_conn_uri === false &&
					formValues?.ssl === true &&
					formValues?.ssl_use_client_auth === true,
			},
			{
				label: "File path",
				placeholder: "",
				type: "text",
				name: "client_ssl_key_path",
				showIf: (formValues) =>
					formValues?.use_conn_uri === false &&
					formValues?.ssl === true &&
					formValues?.ssl_use_client_auth === true &&
					formValues?.client_ssl_key_options === "local",
			},
			{
				placeholder: "Select a file",
				type: "file",
				name: "client_ssl_key_value",
				showIf: (formValues) =>
					formValues?.use_conn_uri === false &&
					formValues?.ssl === true &&
					formValues?.ssl_use_client_auth === true &&
					formValues?.client_ssl_key_options === "uploaded",
			},
			{
				label: "Paste your connection string",
				placeholder:
					"mongodb://[username:password@host1:port1,...hostN:portN]/[dbname]",
				type: "text",
				name: "conn_uri",
				showIf: (formValues) => formValues?.use_conn_uri === true,
			},
			{
				label: "Use an SSH-tunnel",
				placeholder:
					"If a direct connection to your database isn't possible, you may want to use an SSH tunnel.",
				type: "toggle",
				name: "tunnel_enabled",
			},
		],
		mysql: [
			{
				label: "Display name",
				placeholder: "Our MySQL",
				type: "text",
				name: "name",
			},
			{
				label: "Host",
				placeholder: "name.database.com",
				type: "text",
				name: "host",
			},
			{
				label: "Port",
				placeholder: "3306",
				type: "number",
				name: "port",
			},
			{
				label: "Database name",
				placeholder: "birds_of_the_world",
				type: "text",
				name: "dbname",
			},
			{
				label: "Username",
				placeholder: "username",
				type: "text",
				name: "user",
			},
			{
				label: "Password",
				placeholder: "••••••••",
				type: "password",
				name: "password",
			},
			{
				label: "Use a secure connection (SSL)",
				placeholder: "",
				type: "toggle",
				name: "ssl",
			},
			{
				label: "Server SSL certificate chain",
				placeholder:
					"Paste the contents of the server's SSL certificate chain here",
				type: "textarea",
				name: "server_ssl",
				showIf: (formValues) => formValues?.ssl === true,
			},
			{
				label: "Use an SSH-tunnel",
				placeholder:
					"If a direct connection to your database isn't possible, you may want to use an SSH tunnel.",
				type: "toggle",
				name: "tunnel_enabled",
			},
		],
		postgresql: [
			{
				label: "Display name",
				placeholder: "Our PostgreSQL",
				type: "text",
				name: "name",
			},
			{
				label: "Host",
				placeholder: "name.database.com",
				type: "text",
				name: "host",
			},
			{
				label: "Port",
				placeholder: "5432",
				type: "number",
				name: "port",
			},
			{
				label: "Database name",
				placeholder: "birds_of_the_world",
				type: "text",
				name: "dbname",
			},
			{
				label: "Username",
				placeholder: "username",
				type: "text",
				name: "user",
			},
			{
				label: "Password",
				placeholder: "••••••••",
				type: "password",
				name: "password",
			},
			{
				label: "Schemas",
				placeholder: "Select",
				type: "select",
				items: [
					{ label: "All", value: "all" },
					{ label: "Only these", value: "inclusion" },
					{ label: "All except", value: "exclusion" },
				],
				name: "schema_filters_type",
			},
			{
				label: `Comma separated names of schemas that should appear in Metabase`,
				placeholder: "E.g. public,auth*",
				type: "textarea",
				name: "schema_filters_patterns",
				showIf: (formValues) =>
					formValues?.schema_filters_type === "inclusion",
			},
			{
				label: `Comma separated names of schemas that should NOT appear in Metabase`,
				placeholder: "E.g. public,auth*",
				type: "textarea",
				name: "schema_filters_patterns",
				showIf: (formValues) =>
					formValues?.schema_filters_type === "exclusion",
			},
			{
				label: "Use a secure connection (SSL)",
				placeholder: "",
				type: "toggle",
				name: "ssl",
			},
			{
				label: "SSL Mode",
				placeholder: "Select",
				type: "select",
				items: [
					{ label: "allow", value: "allow" },
					{ label: "prefer", value: "prefer" },
					{ label: "require", value: "require" },
					{ label: "verify-ca", value: "verify-ca" },
					{ label: "verify-full", value: "verify-full" },
				],
				name: "ssl_mode",
				showIf: (formValues) => formValues?.ssl === true,
			},
			{
				label: "SSL Root Certificate (PEM)",
				placeholder: "Select",
				type: "select",
				items: [
					{ label: "Local file path", value: "local" },
					{
						label: "Uploaded file path",
						value: "uploaded",
					},
				],
				name: "ssl_root_cert_options",
				showIf: (formValues) =>
					formValues?.ssl === true &&
					(formValues?.ssl_mode === "verify-ca" ||
						formValues?.ssl_mode === "verify-full"),
			},
			{
				label: "File path",
				placeholder: "",
				type: "text",
				name: "ssl_root_cert_path",
				showIf: (formValues) =>
					formValues?.ssl === true &&
					(formValues?.ssl_mode === "verify-ca" ||
						formValues?.ssl_mode === "verify-full") &&
					formValues?.ssl_root_cert_options === "local",
			},
			{
				placeholder: "Select a file",
				type: "file",
				name: "ssl_root_cert_value",
				showIf: (formValues) =>
					formValues?.ssl === true &&
					(formValues?.ssl_mode === "verify-ca" ||
						formValues?.ssl_mode === "verify-full") &&
					formValues?.ssl_root_cert_options === "uploaded",
			},
			{
				label: "Authenticate client certificate?",
				placeholder: "",
				type: "toggle",
				name: "ssl_use_client_auth",
				showIf: (formValues) => formValues?.ssl === true,
			},
			{
				label: "SSL Client Certificate (PEM)",
				placeholder: "Select",
				type: "select",
				items: [
					{ label: "Local file path", value: "local" },
					{
						label: "Uploaded file path",
						value: "uploaded",
					},
				],
				name: "ssl_client_certificate_options",
				showIf: (formValues) =>
					formValues?.ssl === true &&
					formValues?.ssl_use_client_auth === true,
			},
			{
				label: "File path",
				placeholder: "",
				type: "text",
				name: "ssl_client_cert_path",
				showIf: (formValues) =>
					formValues?.ssl === true &&
					formValues?.ssl_use_client_auth === true &&
					formValues?.ssl_client_certificate_options === "local",
			},
			{
				placeholder: "Select a file",
				type: "file",
				name: "ssl_client_cert_value",
				showIf: (formValues) =>
					formValues?.ssl === true &&
					formValues?.ssl_use_client_auth === true &&
					formValues?.ssl_client_certificate_options === "uploaded",
			},
			{
				label: "SSL Client Key (PKCS-8/DER)",
				sublabel:
					"If you have a PEM SSL client key, you can convert that key to the PKCS-8/DER format using OpenSSL.",
				placeholder: "Select",
				type: "select",
				items: [
					{ label: "Local file path", value: "local" },
					{
						label: "Uploaded file path",
						value: "uploaded",
					},
				],
				name: "ssl_key_options",
				showIf: (formValues) =>
					formValues?.ssl === true &&
					formValues?.ssl_use_client_auth === true,
			},
			{
				label: "File path",
				placeholder: "",
				type: "text",
				name: "ssl_key_path",
				showIf: (formValues) =>
					formValues?.ssl === true &&
					formValues?.ssl_use_client_auth === true &&
					formValues?.ssl_key_options === "local",
			},
			{
				placeholder: "Select a file",
				type: "file",
				name: "ssl_key_value",
				showIf: (formValues) =>
					formValues?.ssl === true &&
					formValues?.ssl_use_client_auth === true &&
					formValues?.ssl_key_options === "uploaded",
			},
			{
				label: "SSL Client Key Password",
				placeholder: "",
				type: "password",
				name: "ssl_key_password_value",
				showIf: (formValues) =>
					formValues?.ssl === true &&
					formValues?.ssl_use_client_auth === true,
			},
			{
				label: "Use an SSH-tunnel",
				placeholder:
					"If a direct connection to your database isn't possible, you may want to use an SSH tunnel.",
				type: "toggle",
				name: "tunnel_enabled",
			},
		],
		presto: [
			{
				label: "Display name",
				placeholder: "Our Presto",
				type: "text",
				name: "name",
			},
			{
				label: "Host",
				placeholder: "name.database.com",
				type: "text",
				name: "host",
			},
			{
				label: "Port",
				placeholder: "8080",
				type: "number",
				name: "port",
			},
			{
				label: "Catalog",
				placeholder: "european_birds",
				type: "text",
				name: "catalog",
			},
			{
				label: "Schema (optional)",
				placeholder: "just_crows",
				type: "text",
				name: "schema",
			},
			{
				label: "Username",
				placeholder: "username",
				type: "text",
				name: "user",
			},
			{
				label: "Password",
				placeholder: "••••••••",
				type: "password",
				name: "password",
			},
			{
				label: "Use a secure connection (SSL)",
				placeholder: "",
				type: "toggle",
				name: "ssl",
			},
			{
				label: "Use SSL server certificate?",
				placeholder: "",
				type: "toggle",
				name: "ssl_use_keystore",
				showIf: (formValues) => formValues?.ssl === true,
			},
			{
				label: "Keystore",
				placeholder: "Select",
				type: "select",
				items: [
					{ label: "Local file path", value: "local" },
					{
						label: "Uploaded file path",
						value: "uploaded",
					},
				],
				name: "ssl_keystore_options",
				showIf: (formValues) => formValues?.ssl_use_keystore === true,
			},
			{
				label: "File path",
				placeholder: "/path/to/keystore.jks",
				type: "text",
				name: "ssl_keystore_path",
				showIf: (formValues) =>
					formValues?.ssl_use_keystore === true &&
					formValues?.ssl_keystore_options === "local",
			},
			{
				placeholder: "Select a file",
				type: "file",
				name: "ssl_keystore_value",
				showIf: (formValues) =>
					formValues?.ssl_use_keystore === true &&
					formValues?.ssl_keystore_options === "uploaded",
			},
			{
				label: "Keystore password",
				placeholder: "",
				type: "password",
				name: "ssl_keystore_password_value",
				showIf: (formValues) => formValues?.ssl_use_keystore === true,
			},
			{
				label: "Use SSL truststore?",
				placeholder: "",
				type: "toggle",
				name: "ssl_use_truststore",
				showIf: (formValues) => formValues?.ssl === true,
			},
			{
				label: "Truststore",
				placeholder: "Select",
				type: "select",
				items: [
					{ label: "Local file path", value: "local" },
					{
						label: "Uploaded file path",
						value: "uploaded",
					},
				],
				name: "ssl_truststore_options",
				showIf: (formValues) => formValues?.ssl_use_truststore === true,
			},
			{
				label: "File path",
				placeholder: "/path/to/truststore.jks",
				type: "text",
				name: "ssl_truststore_path",
				showIf: (formValues) =>
					formValues?.ssl_use_truststore === true &&
					formValues?.ssl_truststore_options === "local",
			},
			{
				placeholder: "Select a file",
				type: "file",
				name: "ssl_truststore_value",
				showIf: (formValues) =>
					formValues?.ssl_use_truststore === true &&
					formValues?.ssl_truststore_options === "uploaded",
			},
			{
				label: "Truststore password",
				placeholder: "",
				type: "password",
				name: "ssl_truststore_password_value",
				showIf: (formValues) => formValues?.ssl_use_truststore === true,
			},
		],
		snowflake: [
			{
				label: "Display name",
				placeholder: "Our Snowflake",
				type: "text",
				name: "name",
			},
			{
				label: "Account name",
				placeholder: "xxxxxx.us-east-2.aws",
				type: "text",
				name: "account",
			},
			{
				label: "Username",
				placeholder: "username",
				type: "text",
				name: "user",
			},
			{
				label: "Password",
				placeholder: "••••••••",
				type: "password",
				name: "password",
			},
			{
				label: "RSA private key (PKCS#8/p8)",
				placeholder: "Select",
				type: "select",
				items: [
					{ label: "Local file path", value: "local" },
					{
						label: "Uploaded file path",
						value: "uploaded",
					},
				],
				name: "private_key_options",
			},
			{
				label: "File path",
				placeholder: "",
				type: "text",
				name: "private_key_path",
				showIf: (formValues) =>
					formValues?.private_key_options === "local",
			},
			{
				placeholder: "Select a file",
				type: "file",
				name: "private_key_value",
				showIf: (formValues) =>
					formValues?.private_key_options === "uploaded",
			},
			{
				label: "Warehouse",
				placeholder: "birds_main",
				type: "text",
				name: "warehouse",
			},
			{
				label: "Database name (case sensitive)",
				placeholder: "birds_of_the_world",
				type: "text",
				name: "db",
			},
			{
				label: "Schemas",
				placeholder: "Select",
				type: "select",
				items: [
					{ label: "All", value: "all" },
					{ label: "Only these", value: "inclusion" },
					{ label: "All except", value: "exclusion" },
				],
				name: "schema_filters_type",
			},
			{
				label: `Comma separated names of schemas that should appear in Metabase`,
				placeholder: "E.g. public,auth*",
				type: "textarea",
				name: "schema_filters_patterns",
				showIf: (formValues) =>
					formValues?.schema_filters_type === "inclusion",
			},
			{
				label: `Comma separated names of schemas that should NOT appear in Metabase`,
				placeholder: "E.g. public,auth*",
				type: "textarea",
				name: "schema_filters_patterns",
				showIf: (formValues) =>
					formValues?.schema_filters_type === "exclusion",
			},
			{
				label: "Role (required for connection impersonation)",
				placeholder: "user",
				type: "text",
				name: "role",
			},
			{
				label: "Use an SSH-tunnel",
				placeholder:
					"If a direct connection to your database isn't possible, you may want to use an SSH tunnel.",
				type: "toggle",
				name: "tunnel_enabled",
			},
		],
		spark_sql: [
			{
				label: "Display name",
				placeholder: "Our Spark SQL",
				type: "text",
				name: "name",
			},
			{
				label: "Host",
				placeholder: "name.database.com",
				type: "text",
				name: "host",
			},
			{
				label: "Port",
				placeholder: "10000",
				type: "number",
				name: "port",
			},
			{
				label: "Database name",
				placeholder: "default",
				type: "text",
				name: "dbname",
			},
			{
				label: "Username",
				placeholder: "username",
				type: "text",
				name: "user",
			},
			{
				label: "Password",
				placeholder: "••••••••",
				type: "password",
				name: "password",
			},
			{
				label: "Use an SSH-tunnel",
				placeholder:
					"If a direct connection to your database isn't possible, you may want to use an SSH tunnel.",
				type: "toggle",
				name: "tunnel_enabled",
			},
		],
		sql_server: [
			{
				label: "Display name",
				placeholder: "Our SQL Server",
				type: "text",
				name: "name",
			},
			{
				label: "Host",
				placeholder: "name.database.com",
				type: "text",
				name: "host",
			},
			{
				label: "Port",
				sublabel:
					"Leave empty to use Dynamic Ports, or input specific port. Standard port is 1433.",
				placeholder: "",
				type: "number",
				name: "port",
			},
			{
				label: "Database name",
				placeholder: "BirdsOfTheWorld",
				type: "text",
				name: "db",
			},
			{
				label: "Database instance name",
				placeholder: "N/A",
				type: "text",
				name: "instance",
			},
			{
				label: "Username",
				placeholder: "username",
				type: "text",
				name: "user",
			},
			{
				label: "Password",
				placeholder: "••••••••",
				type: "password",
				name: "password",
			},
			{
				label: "Use a secure connection (SSL)",
				placeholder: "",
				type: "toggle",
				name: "ssl",
			},
			{
				label: "ROWCOUNT Override",
				placeholder: "0",
				type: "text",
				name: "rowcount_override",
			},
			{
				label: "Use an SSH-tunnel",
				placeholder:
					"If a direct connection to your database isn't possible, you may want to use an SSH tunnel.",
				type: "toggle",
				name: "tunnel_enabled",
			},
		],
		sqlite: [
			{
				label: "Display name",
				placeholder: "Our SQLite",
				type: "text",
				name: "name",
			},
			{
				label: "Filename",
				placeholder: "/home/camsaul/toucan_sightings.sqlite",
				type: "text",
				name: "db",
			},
		],
	};

	return formControlsMapping[dataSourceId];
};

export default useFormControlsMapping;

export const sshFormControls = [
	{
		label: "SSH tunnel host",
		placeholder: "hostname",
		type: "text",
		name: "tunnel_host",
		showIf: (formValues) => formValues?.tunnel_enabled === true,
	},
	{
		label: "SSH tunnel port",
		placeholder: "22",
		type: "number",
		name: "tunnel_port",
		showIf: (formValues) => formValues?.tunnel_enabled === true,
	},
	{
		label: "SSH tunnel username",
		placeholder: "username",
		type: "text",
		name: "tunnel_user",
		showIf: (formValues) => formValues?.tunnel_enabled === true,
	},
	{
		label: "SSH authentication",
		placeholder: "Select",
		type: "select",
		items: [
			{ label: "SSH Key", value: "ssh-key" },
			{ label: "Password", value: "password" },
		],
		name: "tunnel_auth_option",
		showIf: (formValues) => formValues?.tunnel_enabled === true,
	},
	{
		label: "SSH private key",
		placeholder: "Paste the contents of your ssh private key here",
		type: "textarea",
		name: "tunnel_private_key",
		showIf: (formValues) =>
			formValues?.tunnel_enabled === true &&
			formValues?.tunnel_auth_option === "ssh-key",
	},
	{
		label: "Passphrase for the SSH private key",
		placeholder: "••••••••",
		type: "password",
		name: "tunnel_private_key_passphrase",
		showIf: (formValues) =>
			formValues?.tunnel_enabled === true &&
			formValues?.tunnel_auth_option === "ssh-key",
	},
	{
		label: "SSH tunnel password",
		placeholder: "••••••••",
		type: "password",
		name: "tunnel_pass",
		showIf: (formValues) =>
			formValues?.tunnel_enabled === true &&
			formValues?.tunnel_auth_option === "password",
	},
];
