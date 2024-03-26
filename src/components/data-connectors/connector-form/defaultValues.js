import moment from "moment";

export const defaultValuesMapping = {
	amazon_athena: {
		include_user_id_and_hash: true,
	},
	amazon_redshift: {
		schema_filters_type: "all",
	},
	bigquery: {
		dataset_filters_type: "all",
		use_jvm_timezone: false,
		include_user_id_and_hash: true,
	},
	druid: {
		auth_enabled: false,
	},
	mongodb: {
		use_conn_uri: false,
		ssl_use_client_auth: false,
		client_ssl_key_options: "local",
		use_srv: false,
	},
	mysql: {
		json_unfolding: true,
	},
	postgresql: {
		schema_filters_type: "all",
		ssl_mode: "require",
		ssl_root_cert_options: "local",
		ssl_use_client_auth: false,
		ssl_client_certificate_options: "local",
		ssl_key_options: "local",
		json_unfolding: true,
	},
	presto: {
		ssl_use_keystore: false,
		ssl_keystore_options: "local",
		ssl_use_truststore: false,
		ssl_truststore_options: "local",
		kerberos: false,
		kerberos_use_canonical_hostname: false,
	},
	snowflake: {
		private_key_options: "local",
		schema_filters_type: "all",
		quote_db_name: false,
	},
	spark_sql: {},
	sql_server: {},
	sqlite: {},
};

export const commonDefaultValues = {
	auto_run_queries: true,
	let_user_control_scheduling: false,
	refingerprint: false,

	ssl: false,
	tunnel_enabled: false,
	tunnel_auth_option: "ssh-key",

	metadata_sync_schedule_type: "daily",
	metadata_sync_schedule_hour: moment().startOf("day"),
	metadata_sync_schedule_minute: 0,

	cache_sync_field_values: "never",
	cache_sync_schedule_type: "daily",
	cache_sync_schedule_frame: "first",
	cache_sync_schedule_day: "mon",
	cache_sync_schedule_hour: moment().startOf("day"),
};
