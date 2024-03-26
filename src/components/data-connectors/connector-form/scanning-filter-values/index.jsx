import { Controller } from "react-hook-form";
import { Form, Radio } from "antd";

import useFormItems from "../../../global/form-item/useFormItems";
import parentStyles from "../styles.module.css";
import styles from "./styles.module.css";
import cacheSyncFormControls from "./cacheSyncFormControls";

const useOptionsArray = (control, formValues) => {
	return [
		{
			Content: (
				<div className={styles.option_content}>
					<span
						className={`${parentStyles.label} ${
							formValues.cache_sync_field_values ===
								"regularly" && styles.active_label
						}`}
					>
						Regularly, on a schedule
					</span>
					{formValues.cache_sync_field_values === "regularly" && (
						<div className={styles.option_form}>
							{cacheSyncFormControls.map(
								(formControl) =>
									(!formControl.showIf ||
										formControl.showIf(formValues)) && (
										<Form.Item
											label={
												formControl.label !== "" && (
													<span
														className={
															parentStyles.label
														}
													>
														{formControl.label}
													</span>
												)
											}
											colon={false}
											className={styles.form_item}
										>
											{useFormItems(formControl, control)}
										</Form.Item>
									)
							)}
						</div>
					)}
				</div>
			),
			value: "regularly",
		},
		{
			Content: (
				<div className={styles.option_content}>
					<span
						className={`${parentStyles.label} ${
							formValues.cache_sync_field_values ===
								"only_when" && styles.active_label
						}`}
					>
						Only when adding a new filter widget
					</span>
					{formValues.cache_sync_field_values === "only_when" && (
						<span className={parentStyles.sublabel}>
							When a user adds a new filter to a dashboard or a
							SQL question, Metabase will scan the field(s) mapped
							to that filter in order to show the list of
							selectable values.
						</span>
					)}
				</div>
			),
			value: "only_when",
		},
		{
			Content: (
				<span
					className={`${parentStyles.label} ${
						formValues.cache_sync_field_values === "never" &&
						styles.active_label
					}`}
				>
					Never, I'll do this manually if I need to
				</span>
			),
			value: "never",
		},
	];
};

const ScanningFilterValues = ({ control, formValues }) => {
	const optionsArray = useOptionsArray(control, formValues);

	return (
		<div className={styles.container}>
			<Controller
				name="cache_sync_field_values"
				control={control}
				render={({ field, fieldState: { error } }) => (
					<>
						<Radio.Group
							{...field}
							className={styles.options_group}
						>
							{optionsArray.map(({ Content, value }) => (
								<Radio
									key={value}
									value={value}
									className={styles.option}
								>
									{Content}
								</Radio>
							))}
						</Radio.Group>
						{error && (
							<p className={styles.error}>{error.message}</p>
						)}
					</>
				)}
			/>
		</div>
	);
};

export default ScanningFilterValues;
