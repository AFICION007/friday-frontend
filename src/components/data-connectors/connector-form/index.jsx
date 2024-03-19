import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form } from "antd";

import CustomButton from "../../global/custom-button";
import useFormItems from "../../global/form-item/useFormItems";
import styles from "./styles.module.css";
import formControlsMapping from "./getFormControls";
import { dataSourcesMapping } from "../constants";

const ConnectorForm = () => {
	const { dataSourceId } = useParams();
	const { control, handleSubmit } = useForm();

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
				{formControlsMapping[dataSourceId].map((formControl) => (
					<Form.Item
						key={formControl.name}
						label={
							formControl.type === "checkbox" ||
							formControl.type === "toggle"
								? null
								: formControl.label
						}
						colon={false}
						className={styles.form_item}
					>
						{useFormItems(formControl, control)}
					</Form.Item>
				))}
				<Form.Item className={styles.submit_button}>
					<CustomButton buttonText="Save Changes" size="large" />
				</Form.Item>
			</Form>
		</div>
	);
};

export default ConnectorForm;
