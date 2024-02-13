import { PASSWORD_REGEX } from '@/helpers/constants/regex';
import Joi from 'joi';

const registerSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().regex(new RegExp(PASSWORD_REGEX)).required(),
  image: Joi.string(),
  role: Joi.string(),
});

export default registerSchema;
