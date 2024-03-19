import { Controller } from "react-hook-form";
import { Select, DatePicker, Input, Checkbox, InputNumber } from "antd";

import styles from "./styles.module.css";

const useGetFormItems = (
	{
		type = "",
		label = "",
		name = "",
		placeholder = "",
		items = [],
		validationRules = {},
		className = "",
	},
	control
) => {
	const formItemsMapping = {
		text: (
			<Controller
				control={control}
				name={name}
				rules={validationRules}
				render={({ field, fieldState: { error } }) => (
					<>
						<Input
							{...field}
							placeholder={placeholder}
							size="large"
						/>
						{error && (
							<p className={styles.error}>{error.message}</p>
						)}
					</>
				)}
			/>
		),

		number: (
			<Controller
				control={control}
				name={name}
				rules={validationRules}
				render={({ field, fieldState: { error } }) => (
					<>
						<InputNumber
							{...field}
							placeholder={placeholder}
							className={styles[`${className}_number`]}
							size="large"
						/>
						{error && (
							<p className={styles.error}>{error.message}</p>
						)}
					</>
				)}
			/>
		),

		textarea: (
			<Controller
				control={control}
				name={name}
				rules={validationRules}
				render={({ field, fieldState: { error } }) => (
					<>
						<Input.TextArea
							{...field}
							placeholder={placeholder}
							size="large"
						/>
						{error && (
							<p className={styles.error}>{error.message}</p>
						)}
					</>
				)}
			/>
		),

		select: (
			<Controller
				control={control}
				rules={validationRules}
				name={name}
				render={({ field, fieldState: { error } }) => (
					<>
						<Select
							{...field}
							placeholder={placeholder}
							showSearch={showSearch}
							optionFilterProp="children"
							size="large"
							className={styles[`${className}_select`]}
						>
							{items.map(({ label, value }) => (
								<Select.Option key={value} value={value}>
									{label}
								</Select.Option>
							))}
						</Select>
						{error && (
							<p className={styles.error}>{error.message}</p>
						)}
					</>
				)}
			/>
		),

		checkbox: (
			<Controller
				control={control}
				name={name}
				rules={validationRules}
				render={({ field, fieldState: { error } }) => (
					<>
						<Checkbox
							{...field}
							size="large"
							className={styles[`${className}_select`]}
						>
							{label}
						</Checkbox>
						{error && (
							<p className={styles.error}>{error.message}</p>
						)}
					</>
				)}
			/>
		),

		date: (
			<Controller
				control={control}
				name={name}
				rules={validationRules}
				render={({ field, fieldState: { error } }) => (
					<>
						<DatePicker
							{...field}
							placeholder={placeholder}
							className={styles[`${className}_date`]}
							size="large"
						/>
						{error && (
							<p className={styles.error}>{error.message}</p>
						)}
					</>
				)}
			/>
		),
	};

	return formItemsMapping[type];
};

export default useGetFormItems;
