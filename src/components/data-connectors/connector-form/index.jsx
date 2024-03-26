import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Collapse, Form } from "antd";

import ScanningFilterValues from "./scanning-filter-values";
import CustomButton from "../../global/custom-button";
import useFormItems from "../../global/form-item/useFormItems";
import styles from "./styles.module.css";
import useFormControlsMapping, { sshFormControls } from "./useFormControls";
import {
	useAdvancedControls,
	commonAdvancedFormControls,
} from "./useAdvancedControls";

import formSchema from "./jsonSchemas";
import { defaultValuesMapping, commonDefaultValues } from "./defaultValues";

import { dataSourcesMapping } from "../constants";
import maincarat from "../../../assets/maincarat.svg";

const Labels = ({ formControl }) => (
	<div className={styles.labels}>
		<span className={styles.label}>{formControl.label}</span>
		{formControl.sublabel ? (
			<label className={styles.sublabel}>{formControl.sublabel}</label>
		) : null}
	</div>
);

const renderFormControls = (formControl, formValues, control) => {
	if (formControl.showIf && !formControl.showIf(formValues)) {
		return null;
	}

	if (formControl.type === "labels") {
		return <Labels formControl={formControl} />;
	} else if (formControl.type === "custom_radio") {
		return (
			<ScanningFilterValues control={control} formValues={formValues} />
		);
	}

	const labelNoShowCondition =
		formControl.type === "checkbox" ||
		formControl.type === "toggle" ||
		(formControl.type === "file" && !formControl.label);

	return (
		<Form.Item
			key={formControl.name}
			label={
				!labelNoShowCondition && <Labels formControl={formControl} />
			}
			colon={false}
			className={styles.form_item}
		>
			{useFormItems(formControl, control)}
		</Form.Item>
	);
};

const ConnectorForm = () => {
	const { dataSourceId } = useParams();

	const { control, handleSubmit, watch } = useForm({
		defaultValues: {
			...defaultValuesMapping[dataSourceId],
			...commonDefaultValues,
		},
	});
	const formValues = watch();
	const primaryFormControls = useFormControlsMapping(dataSourceId);
	const advancedFormControls = useAdvancedControls(dataSourceId);

	const [activeKeys, setActiveKeys] = useState([]);
	const onCollapseChange = (keys) => {
		setActiveKeys(keys);
	};

	const onSubmit = (data) => {
		console.log("Form data:", data);
		console.log(
			"Network payload",
			formSchema(data, dataSourceId, activeKeys.length !== 0)
		);
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
				{[primaryFormControls, sshFormControls]
					.flat()
					.map((formControl) =>
						renderFormControls(formControl, formValues, control)
					)}

				<Collapse
					ghost
					activeKey={activeKeys}
					onChange={onCollapseChange}
					expandIcon={({ isActive }) => (
						<span>{isActive ? <img src={maincarat} /> : null}</span>
					)}
					expandIconPosition="right"
					className={styles.advanced_options_collapse}
				>
					<Collapse.Panel
						header={
							activeKeys.length === 0
								? "Show advanced options"
								: "Hide advanced options"
						}
						key={"1"}
					>
						{[advancedFormControls, commonAdvancedFormControls]
							.flat()
							.map((formControl) =>
								renderFormControls(
									formControl,
									formValues,
									control
								)
							)}
					</Collapse.Panel>
				</Collapse>

				<Form.Item className={styles.submit_button}>
					<CustomButton buttonText="Save Changes" size="large" />
				</Form.Item>
			</Form>
		</div>
	);
};

export default ConnectorForm;
