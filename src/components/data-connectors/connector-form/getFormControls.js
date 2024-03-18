const formControls = {
	amazon_athena: [
		{
			label: "Display name",
			placeholder: "Our Amazon Athena",
			type: "text",
		},
		{
			label: "Region",
			placeholder: "us-east-1",
			type: "text",
		},
		{
			label: "Workgroup",
			placeholder: "primary",
			type: "text",
		},
		{
			label: "S3 staging directory",
			placeholder: "s3://your_bucket",
			type: "text",
		},
		{
			label: "Catalog",
			placeholder: "AwsDataCatalog",
			type: "text",
		},
		{
			label: "Access key",
			placeholder: "",
			type: "text",
		},
		{
			label: "Secret key",
			placeholder: "",
			type: "password",
		},
	],
	amazon_redshift: [
		{
			label: "Display name",
			placeholder: "Our Amazon Redshift",
			type: "text",
		},
		{
			label: "Host",
			placeholder:
				"my-cluster-name.abcd1234.us-east-1.redshift.amazonaws.com",
			type: "text",
		},
		{
			label: "Port",
			placeholder: "5439",
			type: "number",
		},
		{
			label: "Database name",
			placeholder: "birds_of_the_world",
			type: "text",
		},
		{
			label: "Schemas",
			placeholder: "All",
			type: "text",
		},
		{
			label: "Username",
			placeholder: "username",
			type: "text",
		},
		{
			label: "Password",
			placeholder: "",
			type: "password",
		},
	],
	bigquery: [
		{
			label: "Display name",
			placeholder: "Our BigQuery",
			type: "text",
		},
		{
			label: "Project ID (override)",
			placeholder: "1w08oDRKPrOqBt06yxY8uiCz2sSvOp3u",
			type: "text",
		},
		{
			label: "Service account JSON file",
			placeholder: "Select a file",
			type: "file",
		},
		{
			label: "Datasets",
			placeholder: "All",
			type: "select",
		},
	],
	druid: [
		{
			label: "Display name",
			placeholder: "Our Druid",
			type: "text",
		},
		{
			label: "Host",
			placeholder: "name.database.com",
			type: "text",
		},
		{
			label: "Broker node port",
			placeholder: "8082",
			type: "number",
		},
		{
			label: "Use an SSH-tunnel",
			placeholder: "",
			type: "checkbox",
		},
	],
	mongodb: [
		{
			label: "Display name",
			placeholder: "Our MongoDB",
			type: "text",
		},
		{
			label: "Host",
			placeholder: "name.database.com",
			type: "text",
		},
		{
			label: "Database name",
			placeholder: "birds_of_the_world",
			type: "text",
		},
		{
			label: "Port",
			placeholder: "27017",
			type: "number",
		},
		{
			label: "Username",
			placeholder: "username",
			type: "text",
		},
		{
			label: "Password",
			placeholder: "",
			type: "password",
		},
		{
			label: "Authentication database (optional)",
			placeholder: "admin",
			type: "text",
		},
		{
			label: "Use a secure connection (SSL)",
			placeholder: "",
			type: "checkbox",
		},
		{
			label: "Use an SSH-tunnel",
			placeholder: "",
			type: "checkbox",
		},
	],
	mysql: [
		{
			label: "Display name",
			placeholder: "Our MySQL",
			type: "text",
		},
		{
			label: "Host",
			placeholder: "name.database.com",
			type: "text",
		},
		{
			label: "Port",
			placeholder: "3306",
			type: "number",
		},
		{
			label: "Database name",
			placeholder: "birds_of_the_world",
			type: "text",
		},
		{
			label: "Username",
			placeholder: "username",
			type: "text",
		},
		{
			label: "Password",
			placeholder: "",
			type: "password",
		},
		{
			label: "Use a secure connection (SSL)",
			placeholder: "",
			type: "checkbox",
		},
		{
			label: "Use an SSH-tunnel",
			placeholder: "",
			type: "checkbox",
		},
	],
	postgresql: [
		{
			label: "Display name",
			placeholder: "Our PostgreSQL",
			type: "text",
		},
		{
			label: "Host",
			placeholder: "name.database.com",
			type: "text",
		},
		{
			label: "Port",
			placeholder: "5432",
			type: "number",
		},
		{
			label: "Database name",
			placeholder: "birds_of_the_world",
			type: "text",
		},
		{
			label: "Username",
			placeholder: "username",
			type: "text",
		},
		{
			label: "Password",
			placeholder: "",
			type: "password",
		},
		{
			label: "Schemas",
			placeholder: "All",
			type: "select",
		},
		{
			label: "Use a secure connection (SSL)",
			placeholder: "",
			type: "checkbox",
		},
		{
			label: "Use an SSH-tunnel",
			placeholder: "",
			type: "checkbox",
		},
	],
	presto: [
		{
			label: "Display name",
			placeholder: "Our Presto",
			type: "text",
		},
		{
			label: "Host",
			placeholder: "name.database.com",
			type: "text",
		},
		{
			label: "Port",
			placeholder: "8080",
			type: "number",
		},
		{
			label: "Catalog",
			placeholder: "european_birds",
			type: "text",
		},
		{
			label: "Schema (optional)",
			placeholder: "just_crows",
			type: "text",
		},
		{
			label: "Username",
			placeholder: "username",
			type: "text",
		},
		{
			label: "Password",
			placeholder: "",
			type: "password",
		},
		{
			label: "Use a secure connection (SSL)",
			placeholder: "",
			type: "checkbox",
		},
	],
	snowflake: [
		{
			label: "Display name",
			placeholder: "Our Snowflake",
			type: "text",
		},
		{
			label: "Account name",
			placeholder: "xxxxxx.us-east-2.aws",
			type: "text",
		},
		{
			label: "Username",
			placeholder: "username",
			type: "text",
		},
		{
			label: "Password",
			placeholder: "",
			type: "password",
		},
		{
			label: "RSA private key (PKCS#8/p8)",
			placeholder: "Local file path",
			type: "text",
		},
		{
			label: "File path",
			placeholder: "",
			type: "text",
		},
		{
			label: "Warehouse",
			placeholder: "birds_main",
			type: "text",
		},
		{
			label: "Database name (case sensitive)",
			placeholder: "birds_of_the_world",
			type: "text",
		},
		{
			label: "Schemas",
			placeholder: "All",
			type: "select",
		},
		{
			label: "Role (required for connection impersonation)",
			placeholder: "user",
			type: "text",
		},
		{
			label: "Use an SSH-tunnel",
			placeholder: "",
			type: "checkbox",
		},
	],
	spark_sql: [
		{
			label: "Display name",
			placeholder: "Our Spark SQL",
			type: "text",
		},
		{
			label: "Host",
			placeholder: "name.database.com",
			type: "text",
		},
		{
			label: "Port",
			placeholder: "10000",
			type: "number",
		},
		{
			label: "Database name",
			placeholder: "default",
			type: "text",
		},
		{
			label: "Username",
			placeholder: "username",
			type: "text",
		},
		{
			label: "Password",
			placeholder: "",
			type: "password",
		},
		{
			label: "Use an SSH-tunnel",
			placeholder: "",
			type: "checkbox",
		},
	],
	sql_server: [
		{
			label: "Display name",
			placeholder: "Our SQL Server",
			type: "text",
		},
		{
			label: "Host",
			placeholder: "name.database.com",
			type: "text",
		},
		{
			label: "Port",
			placeholder:
				"Leave empty to use Dynamic Ports, or input specific port. Standard port is 1433.",
			type: "number",
		},
		{
			label: "Database name",
			placeholder: "BirdsOfTheWorld",
			type: "text",
		},
		{
			label: "Database instance name",
			placeholder: "N/A",
			type: "text",
		},
		{
			label: "Username",
			placeholder: "username",
			type: "text",
		},
		{
			label: "Password",
			placeholder: "",
			type: "password",
		},
		{
			label: "Use a secure connection (SSL)",
			placeholder: "",
			type: "checkbox",
		},
		{
			label: "ROWCOUNT Override",
			placeholder: "0",
			type: "number",
		},
		{
			label: "Use an SSH-tunnel",
			placeholder: "",
			type: "checkbox",
		},
	],
	sqlite: [
		{
			label: "Display name",
			placeholder: "Our SQLite",
			type: "text",
		},
		{
			label: "Filename",
			placeholder: "/home/camsaul/toucan_sightings.sqlite",
			type: "text",
		},
	],
};

export default formControls;
