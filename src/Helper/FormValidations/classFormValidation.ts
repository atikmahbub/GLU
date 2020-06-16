import * as yup from 'yup';
export const classFormValidation = {
    validationSetting: yup.object().shape({
        className: yup.string().required(),
        section: yup.string().required(),

    }),
    errorMsg:{
        className: "class name is required.",
        section: "section name is required.",
    }
}

