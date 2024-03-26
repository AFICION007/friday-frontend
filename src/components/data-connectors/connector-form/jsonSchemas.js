import useFormControlsMapping, { sshFormControls } from "./useFormControls";
import {
	useAdvancedControls,
	commonAdvancedFormControls,
} from "./useAdvancedControls";

import cacheSyncFormControls from "./scanning-filter-values/cacheSyncFormControls";

import { enginesMapping } from "../constants";

const generateJsonFromControls = (formValues, formControls) => {
	return formControls
		.filter(
			(formControl) =>
				!formControl.showIf || formControl.showIf(formValues)
		)
		.reduce((accumulator, formControl) => {
			if (
				formControl.type === "labels" ||
				formControl.type === "custom_radio"
			) {
				return accumulator;
			}

			if (formControl.noTransform) {
				if (formControl.type === "hour") {
					accumulator[formControl.name] =
						formValues[formControl.name].hour();

					return accumulator;
				}

				accumulator[formControl.name] = formValues[formControl.name];

				return accumulator;
			}

			const key = formControl.name.replace(/_/g, "-");

			if (formControl.type === "hour") {
				accumulator[key] = formValues[formControl.name].hour();

				return accumulator;
			}

			accumulator[key] = formValues[formControl.name];
			return accumulator;
		}, {});
};

const distributeKeys = (jsonSchema) => {
	const mainKeys = ["name", "refingerprint", "auto_run_queries"];

	mainKeys.forEach((key) => {
		if (key in jsonSchema.details) {
			jsonSchema[key] = jsonSchema.details[key];
			delete jsonSchema.details[key];
		}
	});

	const metadataSyncKeys = [
		"metadata_sync_schedule_type",
		"metadata_sync_schedule_hour",
		"metadata_sync_schedule_minute",
	];

	metadataSyncKeys.forEach((key) => {
		if (key in jsonSchema.details) {
			if (!jsonSchema.schedules?.metadata_sync) {
				jsonSchema.schedules.metadata_sync = {};
			}

			const extractedKey = key.split("metadata_sync_")[1];

			jsonSchema.schedules.metadata_sync[extractedKey] =
				jsonSchema.details[key];
			delete jsonSchema.details[key];
		}
	});

	const cacheSyncKeys = [
		"cache_sync_schedule_type",
		"cache_sync_schedule_frame",
		"cache_sync_schedule_day",
		"cache_sync_schedule_hour",
	];

	cacheSyncKeys.forEach((key) => {
		if (key in jsonSchema.details) {
			if (!jsonSchema.schedules?.cache_field_values) {
				jsonSchema.schedules.cache_field_values = {};
			}

			const extractedKey = key.split("cache_sync_")[1];

			jsonSchema.schedules.cache_field_values[extractedKey] =
				jsonSchema.details[key];
			delete jsonSchema.details[key];
		}
	});
};

const formSchema = (formValues, dataSourceId, advancedOptionsEnabled) => {
	const formControls = useFormControlsMapping(dataSourceId);
	const jsonSchema = {
		details: generateJsonFromControls(formValues, formControls),
	};

	jsonSchema.engine = enginesMapping[dataSourceId];

	if (formValues.tunnel_enabled) {
		Object.assign(
			jsonSchema.details,
			generateJsonFromControls(formValues, sshFormControls)
		);
	}

	jsonSchema.details["advanced-options"] = advancedOptionsEnabled;
	if (advancedOptionsEnabled) {
		const advancedControls = useAdvancedControls(dataSourceId);
		Object.assign(
			jsonSchema.details,
			generateJsonFromControls(formValues, advancedControls)
		);

		Object.assign(
			jsonSchema.details,
			generateJsonFromControls(formValues, commonAdvancedFormControls)
		);

		jsonSchema.is_full_sync = !formValues.let_user_control_scheduling;

		jsonSchema.is_on_demand =
			formValues.cache_sync_field_values === "only_when";

		if (formValues.cache_sync_field_values === "regularly") {
			Object.assign(
				jsonSchema.details,
				generateJsonFromControls(formValues, cacheSyncFormControls)
			);
		}
	} else {
		Object.assign(jsonSchema, {
			auto_run_queries: true,
			is_full_sync: true,
			is_on_demand: false,
			refingerprint: false,
		});
	}

	Object.assign(jsonSchema, {
		cache_ttl: null,
		is_sample: false,
	});
	jsonSchema.schedules = {};

	distributeKeys(jsonSchema);

	return jsonSchema;
};

export default formSchema;
