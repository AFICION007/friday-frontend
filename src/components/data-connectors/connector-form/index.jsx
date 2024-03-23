import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Collapse, Form } from "antd";

import ScanningFilterValues from "./scanning-filter-values";
import CustomButton from "../../global/custom-button";
import useFormItems from "../../global/form-item/useFormItems";
import styles from "./styles.module.css";
import useFormControlsMapping, {
	useSshEnabledFormControls,
} from "./useFormControls";
import {
	useCommonFormControls,
	useAdvancedControls,
} from "./useAdvancedControls";
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

const renderFormControls = (formControl, control, formValues) => {
	if (formControl.showIf && !formControl.showIf()) {
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

	const { control, handleSubmit, watch } = useForm();
	const formValues = watch();
	const primaryFormControls = useFormControlsMapping(
		dataSourceId,
		formValues
	);
	const sshFormControls = useSshEnabledFormControls(formValues);
	const advancedFormControls = useAdvancedControls(dataSourceId, formValues);
	const commonFormControls = useCommonFormControls(formValues);

	const onSubmit = (data) => {
		console.log("Form data:", data);
	};

	const [activeKeys, setActiveKeys] = useState([]);
	console.log("key", activeKeys);
	const onCollapseChange = (keys) => {
		setActiveKeys(keys);
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
						renderFormControls(formControl, control)
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
						{[advancedFormControls, commonFormControls]
							.flat()
							.map((formControl) =>
								renderFormControls(
									formControl,
									control,
									formValues
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
