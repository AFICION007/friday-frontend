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
			placeholder: "All",
			type: "text",
			name: "schemas",
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
	],
	bigquery: [
		{
			label: "Display name",
			placeholder: "Our BigQuery",
			type: "text",
			name: "display_name",
		},
		{
			label: "Project ID (override)",
			placeholder: "1w08oDRKPrOqBt06yxY8uiCz2sSvOp3u",
			type: "text",
			name: "project_id_override",
		},
		{
			label: "Service account JSON file",
			placeholder: "Select a file",
			type: "file",
			name: "service_account_json_file",
		},
		{
			label: "Datasets",
			placeholder: "All",
			type: "select",
			name: "datasets",
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
			name: "use_an_ssh-tunnel",
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
			label: "Host",
			placeholder: "name.database.com",
			type: "text",
			name: "host",
		},
		{
			label: "Database name",
			placeholder: "birds_of_the_world",
			type: "text",
			name: "database_name",
		},
		{ label: "Port", placeholder: "27017", type: "number", name: "port" },
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
			label: "Authentication database (optional)",
			placeholder: "admin",
			type: "text",
			name: "authentication_database_(optional)",
		},
		{
			label: "Use a secure connection (SSL)",
			placeholder: "",
			type: "toggle",
			name: "use_a_secure_connection_(ssl)",
		},
		{
			label: "Use an SSH-tunnel",
			placeholder:
				"If a direct connection to your database isn't possible, you may want to use an SSH tunnel.",
			type: "toggle",
			name: "use_an_ssh-tunnel",
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
		{ label: "Port", placeholder: "3306", type: "number", name: "port" },
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
			name: "use_a_secure_connection_(ssl)",
		},
		{
			label: "Use an SSH-tunnel",
			placeholder:
				"If a direct connection to your database isn't possible, you may want to use an SSH tunnel.",
			type: "toggle",
			name: "use_an_ssh-tunnel",
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
		{ label: "Port", placeholder: "5432", type: "number", name: "port" },
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
			placeholder: "All",
			type: "select",
			name: "schemas",
		},
		{
			label: "Use a secure connection (SSL)",
			placeholder: "",
			type: "toggle",
			name: "use_a_secure_connection_(ssl)",
		},
		{
			label: "Use an SSH-tunnel",
			placeholder:
				"If a direct connection to your database isn't possible, you may want to use an SSH tunnel.",
			type: "toggle",
			name: "use_an_ssh-tunnel",
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
		{ label: "Port", placeholder: "8080", type: "number", name: "port" },
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
			name: "use_a_secure_connection_(ssl)",
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
			placeholder: "Local file path",
			type: "text",
			name: "rsa_private_key_(pkcs#8/p8)",
		},
		{
			label: "File path",
			placeholder: "",
			type: "text",
			name: "file_path",
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
			placeholder: "All",
			type: "select",
			name: "schemas",
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
			name: "use_an_ssh-tunnel",
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
		{ label: "Port", placeholder: "10000", type: "number", name: "port" },
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
			name: "use_an_ssh-tunnel",
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
			placeholder:
				"Leave empty to use Dynamic Ports, or input specific port. Standard port is 1433.",
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
			name: "use_a_secure_connection_(ssl)",
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
			name: "use_an_ssh-tunnel",
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

export default formControlsMapping;
