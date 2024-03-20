import { Controller } from "react-hook-form";
import { Select, DatePicker, Input, Checkbox, InputNumber, Switch } from "antd";

import UploadButton from "../upload-button";
import styles from "./styles.module.css";

const useFormItems = (
	{
		type = "",
		label = "",
		name = "",
		placeholder = "",
		items = [],
		validationRules = {},
	},
	control
) => {
	const useformItemsMapping = (field) => ({
		text: (
			<Input
				{...field}
				placeholder={placeholder}
				size="large"
				className={styles.text}
			/>
		),

		number: (
			<InputNumber
				{...field}
				placeholder={placeholder}
				size="large"
				className={styles.number}
			/>
		),

		password: (
			<Input.Password
				{...field}
				placeholder={placeholder}
				size="large"
				className={`${styles.text} ${styles.password}`}
			/>
		),

		textarea: (
			<Input.TextArea
				{...field}
				placeholder={placeholder}
				size="large"
				rows={3}
				className={`${styles.text} ${styles.textarea}`}
			/>
		),

		select: (
			<Select
				{...field}
				placeholder={placeholder}
				optionFilterProp="children"
				size="large"
				className={styles.select}
			>
				{items.map(({ label, value }) => (
					<Select.Option key={value} value={value}>
						{label}
					</Select.Option>
				))}
			</Select>
		),

		file: (
			<UploadButton
				size="regular"
				buttonTitle={placeholder}
				field={field}
			/>
		),

		toggle: (
			<div className={styles.toggle}>
				<div className={styles.left}>
					<span className={styles.label}>{label}</span>
					<span className={styles.placeholder}>{placeholder}</span>
				</div>
				<Switch {...field} className={styles.switch} />
			</div>
		),

		checkbox: (
			<Checkbox {...field} size="large" className={styles.select}>
				{label}
			</Checkbox>
		),

		date: (
			<DatePicker
				{...field}
				placeholder={placeholder}
				className={styles.date}
				size="large"
			/>
		),
	});

	return (
		<Controller
			control={control}
			name={name}
			rules={validationRules}
			render={({ field, fieldState: { error } }) => (
				<>
					{useformItemsMapping(field)[type]}
					{error && <p className={styles.error}>{error.message}</p>}
				</>
			)}
		/>
	);
};

export default useFormItems;
