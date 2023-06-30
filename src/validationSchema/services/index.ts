import * as yup from 'yup';

export const serviceValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  agency_id: yup.string().nullable(),
});
