
import { useCallback } from "react";
import generateToast from "../components/ToastGenerator";

//yup validation resolver
export const useYupValidationResolver = validationSchema =>
	useCallback(
		async data => {
			try {
				const values = await validationSchema.validate(data, {
					abortEarly: false
				});
				return {
					values,
					errors: {}
				};
			} catch (errors) {
				return {
					values: {},
					errors: errors.inner.reduce(
					(allErrors, currentError) => ({
						...allErrors,
						[currentError.path]: {
						type: currentError.type ?? "validation",
						message: currentError.message
						}
					}),
					{}
					)
				};
			}
		},
	[validationSchema]
);

export const handleToast = (toast, message, messageId) => {
	const id = messageId
	if (!toast.isActive(id)) {
		toast(generateToast(message, id))
	}
}

export const makeSelectOptions = (array, setArray) => {

	const options = []
	array.forEach(element => options.push({label: element.name, value: element.id}))
	setArray(options)

	return options
}

export const makeSelectOptionsConto = (array, setArray) => {

	const options = []
	array.forEach(element => options.push({label: `${element.label} - ${element.description}`, value: element.id}))
	setArray(options)

	return options
}