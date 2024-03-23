const useFormControlsMapping = (dataSourceId, formValues) => {
	const formControlsMapping = {
		amazon_athena: [
			{
				label: "Display name",
				placeholder: "Our Amazon Athena",
				type: "text",
				name: "display_name",
			},
			{
				label: "Region",
				name: "region",
				placeholder: "us-east-1",
				type: "text",
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
				name: "s3_staging_directory",
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
			},
			{
				label: "Secret key",
				placeholder: "••••••••",
				type: "password",
				name: "secret_key",
			},
		],
		amazon_redshift: [
			{
				label: "Display name",
				placeholder: "Our Amazon Redshift",
				type: "text",
				name: "display_name",
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
				name: "database_name",
			},
			{
				label: "Schemas",
				placeholder: "Select",
				type: "select",
				items: [
					{ label: "All", value: "all" },
					{ label: "Only these", value: "only_these" },
					{ label: "All except", value: "all_except" },
				],
				name: "schemas",
			},
			{
				label: `Comma separated names of schemas that should ${
					formValues.schemas === "all_except" ? "NOT" : ""
				} appear in Metabase`,
				placeholder: "E.g. public,auth*",
				type: "textarea",
				name: "schemas_in_metabase",
				showIf: () =>
					formValues.schemas === "only_these" ||
					formValues.schemas === "all_except",
			},
			{
				label: "Username",
				placeholder: "username",
				type: "text",
				name: "username",
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
				name: "use_ssh_tunnel",
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
				name: "datasets_filters_type",
			},
			{
				label: `Comma separated names of schemas that should ${
					formValues.datasets_filters_type === "all_except"
						? "NOT"
						: ""
				} appear in Metabase`,
				placeholder: "E.g. public,auth*",
				type: "textarea",
				name: "dataset_filters_patterns",
				showIf: () =>
					formValues.datasets_filters_type === "only_these" ||
					formValues.datasets_filters_type === "all_except",
			},
		],
		druid: [
			{
				label: "Display name",
				placeholder: "Our Druid",
				type: "text",
				name: "display_name",
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
				name: "broker_node_port",
			},
			{
				label: "Use an SSH-tunnel",
				placeholder:
					"If a direct connection to your database isn't possible, you may want to use an SSH tunnel.",
				type: "toggle",
				name: "use_ssh_tunnel",
			},
		],
		mongodb: [
			{
				label: "Display name",
				placeholder: "Our MongoDB",
				type: "text",
				name: "display_name",
			},
			{
				label: "Connection method",
				placeholder: "Select",
				type: "select",
				items: [
					{
						label: "Fill out individual fields",
						value: "individual_fields",
					},
					{
						label: "Paste a connection string",
						value: "connection_string",
					},
				],
				name: "connection_method",
			},
			{
				label: "Host",
				placeholder: "name.database.com",
				type: "text",
				name: "host",
				showIf: () =>
					formValues.connection_method === "individual_fields",
			},
			{
				label: "Database name",
				placeholder: "birds_of_the_world",
				type: "text",
				name: "database_name",
				showIf: () =>
					formValues.connection_method === "individual_fields",
			},
			{
				label: "Port",
				placeholder: "27017",
				type: "number",
				name: "port",
				showIf: () =>
					formValues.connection_method === "individual_fields",
			},
			{
				label: "Username",
				placeholder: "username",
				type: "text",
				name: "username",
				showIf: () =>
					formValues.connection_method === "individual_fields",
			},
			{
				label: "Password",
				placeholder: "••••••••",
				type: "password",
				name: "password",
				showIf: () =>
					formValues.connection_method === "individual_fields",
			},
			{
				label: "Authentication database (optional)",
				placeholder: "admin",
				type: "text",
				name: "authentication_database_(optional)",
				showIf: () =>
					formValues.connection_method === "individual_fields",
			},
			{
				label: "Use a secure connection (SSL)",
				placeholder: "",
				type: "toggle",
				name: "use_secure_connection",
				showIf: () =>
					formValues.connection_method === "individual_fields",
			},
			{
				label: "Server SSL certificate chain",
				placeholder:
					"Paste the contents of the server's SSL certificate chain here",
				type: "textarea",
				name: "server_ssl_certificate_chain",
				showIf: () =>
					formValues.connection_method === "individual_fields" &&
					formValues.use_secure_connection === true,
			},
			{
				label: "Authenticate client certificate?",
				placeholder: "",
				type: "toggle",
				name: "authenticate_client_certificate",
				showIf: () =>
					formValues.connection_method === "individual_fields" &&
					formValues.use_secure_connection === true,
			},
			{
				label: "Client SSL certificate chain (PEM)",
				placeholder:
					"Paste the contents of the client's SSL certificate chain here",
				type: "textarea",
				name: "client_ssl_certificate_chain_pem",
				showIf: () =>
					formValues.connection_method === "individual_fields" &&
					formValues.use_secure_connection === true &&
					formValues.authenticate_client_certificate === true,
			},
			{
				label: "Client SSL private key (PEM)",
				placeholder: "Select",
				type: "select",
				items: [
					{ label: "Local file path", value: "local_file_path" },
					{
						label: "Uploaded file path",
						value: "uploaded_file_path",
					},
				],
				name: "client_ssl_private_key_pem",
				showIf: () =>
					formValues.connection_method === "individual_fields" &&
					formValues.use_secure_connection === true &&
					formValues.authenticate_client_certificate === true,
			},
			{
				label: "File path",
				placeholder: "",
				type: "text",
				name: "client_ssl_private_key_pem_file_path",
				showIf: () =>
					formValues.connection_method === "individual_fields" &&
					formValues.use_secure_connection === true &&
					formValues.authenticate_client_certificate === true &&
					formValues.client_ssl_private_key_pem === "local_file_path",
			},
			{
				placeholder: "Select a file",
				type: "file",
				name: "client_ssl_private_key_pem_file",
				showIf: () =>
					formValues.connection_method === "individual_fields" &&
					formValues.use_secure_connection === true &&
					formValues.authenticate_client_certificate === true &&
					formValues.client_ssl_private_key_pem ===
						"uploaded_file_path",
			},
			{
				label: "Paste your connection string",
				placeholder:
					"mongodb://[username:password@host1:port1,...hostN:portN]/[dbname]",
				type: "text",
				name: "paste_your_connection_string",
				showIf: () =>
					formValues.connection_method === "connection_string",
			},
			{
				label: "Use an SSH-tunnel",
				placeholder:
					"If a direct connection to your database isn't possible, you may want to use an SSH tunnel.",
				type: "toggle",
				name: "use_ssh_tunnel",
			},
		],
		mysql: [
			{
				label: "Display name",
				placeholder: "Our MySQL",
				type: "text",
				name: "display_name",
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
				name: "database_name",
			},
			{
				label: "Username",
				placeholder: "username",
				type: "text",
				name: "username",
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
				name: "use_secure_connection",
			},
			{
				label: "Server SSL certificate chain",
				placeholder:
					"Paste the contents of the server's SSL certificate chain here",
				type: "textarea",
				name: "server_ssl_certificate_chain",
				showIf: () => formValues.use_secure_connection === true,
			},
			{
				label: "Use an SSH-tunnel",
				placeholder:
					"If a direct connection to your database isn't possible, you may want to use an SSH tunnel.",
				type: "toggle",
				name: "use_ssh_tunnel",
			},
		],
		postgresql: [
			{
				label: "Display name",
				placeholder: "Our PostgreSQL",
				type: "text",
				name: "display_name",
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
				name: "database_name",
			},
			{
				label: "Username",
				placeholder: "username",
				type: "text",
				name: "username",
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
					{ label: "Only these", value: "only_these" },
					{ label: "All except", value: "all_except" },
				],
				name: "schemas",
			},
			{
				label: `Comma separated names of schemas that should ${
					formValues.schemas === "all_except" ? "NOT" : ""
				} appear in Metabase`,
				placeholder: "E.g. public,auth*",
				type: "textarea",
				name: "schemas_in_metabase",
				showIf: () =>
					formValues.schemas === "only_these" ||
					formValues.schemas === "all_except",
			},
			{
				label: "Use a secure connection (SSL)",
				placeholder: "",
				type: "toggle",
				name: "use_secure_connection",
			},
			{
				label: "SSL Mode",
				placeholder: "Select",
				type: "select",
				items: [
					{ label: "allow", value: "allow" },
					{ label: "prefer", value: "prefer" },
					{ label: "require", value: "require" },
					{ label: "verify-ca", value: "verify_ca" },
					{ label: "verify-full", value: "verify_full" },
				],
				name: "ssl_mode",
				showIf: () => formValues.use_secure_connection === true,
			},
			{
				label: "SSL Root Certificate (PEM)",
				placeholder: "Select",
				type: "select",
				items: [
					{ label: "Local file path", value: "local_file_path" },
					{
						label: "Uploaded file path",
						value: "uploaded_file_path",
					},
				],
				name: "ssl_root_certificate",
				showIf: () =>
					formValues.use_secure_connection === true &&
					(formValues.ssl_mode === "verify_ca" ||
						formValues.ssl_mode === "verify_full"),
			},
			{
				label: "File path",
				placeholder: "",
				type: "text",
				name: "ssl_root_certificate_file_path",
				showIf: () =>
					formValues.use_secure_connection === true &&
					(formValues.ssl_mode === "verify_ca" ||
						formValues.ssl_mode === "verify_full") &&
					formValues.ssl_root_certificate === "local_file_path",
			},
			{
				placeholder: "Select a file",
				type: "file",
				name: "ssl_root_certificate_file",
				showIf: () =>
					formValues.use_secure_connection === true &&
					(formValues.ssl_mode === "verify_ca" ||
						formValues.ssl_mode === "verify_full") &&
					formValues.ssl_root_certificate === "uploaded_file_path",
			},
			{
				label: "Authenticate client certificate?",
				placeholder: "",
				type: "toggle",
				name: "authenticate_client_certificate",
				showIf: () => formValues.use_secure_connection === true,
			},
			{
				label: "SSL Client Certificate (PEM)",
				placeholder: "Select",
				type: "select",
				items: [
					{ label: "Local file path", value: "local_file_path" },
					{
						label: "Uploaded file path",
						value: "uploaded_file_path",
					},
				],
				name: "ssl_client_certificate",
				showIf: () =>
					formValues.use_secure_connection === true &&
					formValues.authenticate_client_certificate === true,
			},
			{
				label: "File path",
				placeholder: "",
				type: "text",
				name: "ssl_client_certificate_file_path",
				showIf: () =>
					formValues.use_secure_connection === true &&
					formValues.authenticate_client_certificate === true &&
					formValues.ssl_client_certificate === "local_file_path",
			},
			{
				placeholder: "Select a file",
				type: "file",
				name: "ssl_client_certificate_file",
				showIf: () =>
					formValues.use_secure_connection === true &&
					formValues.authenticate_client_certificate === true &&
					formValues.ssl_client_certificate === "uploaded_file_path",
			},
			{
				label: "SSL Client Key (PKCS-8/DER)",
				sublabel:
					"If you have a PEM SSL client key, you can convert that key to the PKCS-8/DER format using OpenSSL.",
				placeholder: "Select",
				type: "select",
				items: [
					{ label: "Local file path", value: "local_file_path" },
					{
						label: "Uploaded file path",
						value: "uploaded_file_path",
					},
				],
				name: "ssl_client_key",
				showIf: () =>
					formValues.use_secure_connection === true &&
					formValues.authenticate_client_certificate === true,
			},
			{
				label: "File path",
				placeholder: "",
				type: "text",
				name: "ssl_client_key_file_path",
				showIf: () =>
					formValues.use_secure_connection === true &&
					formValues.authenticate_client_certificate === true &&
					formValues.ssl_client_key === "local_file_path",
			},
			{
				placeholder: "Select a file",
				type: "file",
				name: "ssl_client_key_file",
				showIf: () =>
					formValues.use_secure_connection === true &&
					formValues.authenticate_client_certificate === true &&
					formValues.ssl_client_key === "uploaded_file_path",
			},
			{
				label: "SSL Client Key Password",
				placeholder: "",
				type: "password",
				name: "ssl_client_key_password",
				showIf: () =>
					formValues.use_secure_connection === true &&
					formValues.authenticate_client_certificate === true,
			},
			{
				label: "Use an SSH-tunnel",
				placeholder:
					"If a direct connection to your database isn't possible, you may want to use an SSH tunnel.",
				type: "toggle",
				name: "use_ssh_tunnel",
			},
		],
		presto: [
			{
				label: "Display name",
				placeholder: "Our Presto",
				type: "text",
				name: "display_name",
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
				name: "schema_(optional)",
			},
			{
				label: "Username",
				placeholder: "username",
				type: "text",
				name: "username",
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
				name: "use_secure_connection",
			},
			{
				label: "Use SSL server certificate?",
				placeholder: "",
				type: "toggle",
				name: "use_ssl_server_certificate",
				showIf: () => formValues.use_secure_connection === true,
			},
			{
				label: "Keystore",
				placeholder: "Select",
				type: "select",
				items: [
					{ label: "Local file path", value: "local_file_path" },
					{
						label: "Uploaded file path",
						value: "uploaded_file_path",
					},
				],
				name: "keystore",
				showIf: () => formValues.use_ssl_server_certificate === true,
			},
			{
				label: "File path",
				placeholder: "/path/to/keystore.jks",
				type: "text",
				name: "keystore_file_path",
				showIf: () =>
					formValues.use_ssl_server_certificate === true &&
					formValues.keystore === "local_file_path",
			},
			{
				placeholder: "Select a file",
				type: "file",
				name: "keystore_file",
				showIf: () =>
					formValues.use_ssl_server_certificate === true &&
					formValues.keystore === "uploaded_file_path",
			},
			{
				label: "Keystore password",
				placeholder: "",
				type: "password",
				name: "keystore_password",
				showIf: () => formValues.use_ssl_server_certificate === true,
			},
			{
				label: "Use SSL truststore?",
				placeholder: "",
				type: "toggle",
				name: "use_ssl_truststore",
				showIf: () => formValues.use_secure_connection === true,
			},
			{
				label: "Truststore",
				placeholder: "Select",
				type: "select",
				items: [
					{ label: "Local file path", value: "local_file_path" },
					{
						label: "Uploaded file path",
						value: "uploaded_file_path",
					},
				],
				name: "truststore",
				showIf: () => formValues.use_ssl_truststore === true,
			},
			{
				label: "File path",
				placeholder: "/path/to/truststore.jks",
				type: "text",
				name: "truststore_file_path",
				showIf: () =>
					formValues.use_ssl_truststore === true &&
					formValues.truststore === "local_file_path",
			},
			{
				placeholder: "Select a file",
				type: "file",
				name: "truststore_file",
				showIf: () =>
					formValues.use_ssl_truststore === true &&
					formValues.truststore === "uploaded_file_path",
			},
			{
				label: "Truststore password",
				placeholder: "",
				type: "password",
				name: "truststore_password",
				showIf: () => formValues.use_ssl_truststore === true,
			},
		],
		snowflake: [
			{
				label: "Display name",
				placeholder: "Our Snowflake",
				type: "text",
				name: "display_name",
			},
			{
				label: "Account name",
				placeholder: "xxxxxx.us-east-2.aws",
				type: "text",
				name: "account_name",
			},
			{
				label: "Username",
				placeholder: "username",
				type: "text",
				name: "username",
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
					{ label: "Local file path", value: "local_file_path" },
					{
						label: "Uploaded file path",
						value: "uploaded_file_path",
					},
				],
				name: "rsa_private_key",
			},
			{
				label: "File path",
				placeholder: "",
				type: "text",
				name: "rsa_private_key_file_path",
				showIf: () => formValues.rsa_private_key === "local_file_path",
			},
			{
				placeholder: "Select a file",
				type: "file",
				name: "rsa_private_key_file",
				showIf: () =>
					formValues.rsa_private_key === "uploaded_file_path",
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
				name: "database_name_(case_sensitive)",
			},
			{
				label: "Schemas",
				placeholder: "Select",
				type: "select",
				items: [
					{ label: "All", value: "all" },
					{ label: "Only these", value: "only_these" },
					{ label: "All except", value: "all_except" },
				],
				name: "schemas",
			},
			{
				label: `Comma separated names of schemas that should ${
					formValues.schemas === "all_except" ? "NOT" : ""
				} appear in Metabase`,
				placeholder: "E.g. public,auth*",
				type: "textarea",
				name: "schemas_in_metabase",
				showIf: () =>
					formValues.schemas === "only_these" ||
					formValues.schemas === "all_except",
			},
			{
				label: "Role (required for connection impersonation)",
				placeholder: "user",
				type: "text",
				name: "role_(required_for_connection_impersonation)",
			},
			{
				label: "Use an SSH-tunnel",
				placeholder:
					"If a direct connection to your database isn't possible, you may want to use an SSH tunnel.",
				type: "toggle",
				name: "use_ssh_tunnel",
			},
		],
		spark_sql: [
			{
				label: "Display name",
				placeholder: "Our Spark SQL",
				type: "text",
				name: "display_name",
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
				name: "database_name",
			},
			{
				label: "Username",
				placeholder: "username",
				type: "text",
				name: "username",
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
				name: "use_ssh_tunnel",
			},
		],
		sql_server: [
			{
				label: "Display name",
				placeholder: "Our SQL Server",
				type: "text",
				name: "display_name",
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
				name: "database_name",
			},
			{
				label: "Database instance name",
				placeholder: "N/A",
				type: "text",
				name: "database_instance_name",
			},
			{
				label: "Username",
				placeholder: "username",
				type: "text",
				name: "username",
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
				name: "use_secure_connection",
			},
			{
				label: "ROWCOUNT Override",
				placeholder: "0",
				type: "number",
				name: "rowcount_override",
			},
			{
				label: "Use an SSH-tunnel",
				placeholder:
					"If a direct connection to your database isn't possible, you may want to use an SSH tunnel.",
				type: "toggle",
				name: "use_ssh_tunnel",
			},
		],
		sqlite: [
			{
				label: "Display name",
				placeholder: "Our SQLite",
				type: "text",
				name: "display_name",
			},
			{
				label: "Filename",
				placeholder: "/home/camsaul/toucan_sightings.sqlite",
				type: "text",
				name: "filename",
			},
		],
	};

	return formControlsMapping[dataSourceId];
};

export default useFormControlsMapping;

export const useSshEnabledFormControls = (formValues) => [
	{
		label: "SSH tunnel host",
		placeholder: "hostname",
		type: "text",
		name: "ssh_tunnel_host",
		showIf: () => formValues.use_ssh_tunnel === true,
	},
	{
		label: "SSH tunnel port",
		placeholder: "22",
		type: "number",
		name: "ssh_tunnel_port",
		showIf: () => formValues.use_ssh_tunnel === true,
	},
	{
		label: "SSH tunnel username",
		placeholder: "username",
		type: "text",
		name: "ssh_tunnel_username",
		showIf: () => formValues.use_ssh_tunnel === true,
	},
	{
		label: "SSH authentication",
		placeholder: "Select",
		type: "select",
		items: [
			{ label: "SSH Key", value: "ssh_key" },
			{ label: "Password", value: "password" },
		],
		name: "ssh_authentication",
		showIf: () => formValues.use_ssh_tunnel === true,
	},
	{
		label: "SSH private key",
		placeholder: "Paste the contents of your ssh private key here",
		type: "textarea",
		name: "ssh_private_key",
		showIf: () =>
			formValues.use_ssh_tunnel === true &&
			formValues.ssh_authentication === "ssh_key",
	},
	{
		label: "Passphrase for the SSH private key",
		placeholder: "••••••••",
		type: "password",
		name: "passphrase_for_the_ssh_private_key",
		showIf: () =>
			formValues.use_ssh_tunnel === true &&
			formValues.ssh_authentication === "ssh_key",
	},
	{
		label: "SSH tunnel password",
		placeholder: "••••••••",
		type: "password",
		name: "ssh_tunnel_password",
		showIf: () =>
			formValues.use_ssh_tunnel === true &&
			formValues.ssh_authentication === "password",
	},
];
