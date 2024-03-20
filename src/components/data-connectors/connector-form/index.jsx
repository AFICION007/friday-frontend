import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form } from "antd";

import CustomButton from "../../global/custom-button";
import useFormItems from "../../global/form-item/useFormItems";
import styles from "./styles.module.css";
import useFormControlsMapping, {
	useSshEnabledFormControls,
} from "./getFormControls";
import { dataSourcesMapping } from "../constants";

const ConnectorForm = () => {
	const { dataSourceId } = useParams();

	const { control, handleSubmit, watch } = useForm();
	const formValues = watch();
	const primaryFormControls = useFormControlsMapping(
		dataSourceId,
		formValues
	);
	const sshFormControls = useSshEnabledFormControls(formValues);

	const onSubmit = (data) => {
		console.log("Form data:", data);
	};

	return (
		<div className={styles.main_container}>
			<span className={styles.title}>
				Connect Your {dataSourcesMapping[dataSourceId]}
			</span>
			<Form
				layout="vertical"
				onFinish={handleSubmit(onSubmit)}
				className={styles.form_container}
			>
				{[primaryFormControls, sshFormControls].map((formControls) =>
					formControls.map((formControl) => {
						const labelNoShowCondition =
							formControl.type === "checkbox" ||
							formControl.type === "toggle" ||
							(formControl.type === "file" && !formControl.label);

						if (!formControl.showIf || formControl.showIf()) {
							return (
								<>
									<Form.Item
										key={formControl.name}
										label={
											!labelNoShowCondition ? (
												<div className={styles.labels}>
													<span>
														{formControl.label}
													</span>
													{formControl.sublabel ? (
														<label
															className={
																styles.sublabel
															}
														>
															{
																formControl.sublabel
															}
														</label>
													) : null}
												</div>
											) : null
										}
										colon={false}
										className={styles.form_item}
									>
										{useFormItems(formControl, control)}
									</Form.Item>
								</>
							);
						}

						return null;
					})
				)}
				<Form.Item className={styles.submit_button}>
					<CustomButton buttonText="Save Changes" size="large" />
				</Form.Item>
			</Form>
		</div>
	);
};

export default ConnectorForm;
