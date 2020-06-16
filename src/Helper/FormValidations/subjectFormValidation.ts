import * as yup from 'yup';
export const subjectFormValidation = {
    validationSetting: yup.object().shape({
        class: yup.string().required(),
        subject: yup.string().required(),
    }),
    errorMsg:{
        class: "class name is required.",
        subject: "subject name is required.",
    }
}

