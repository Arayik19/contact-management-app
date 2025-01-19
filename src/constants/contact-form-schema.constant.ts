import { z } from 'zod';
import { getBase64Info } from '../utils';
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from './upload-image.constant';

export const contactFormSchema = z.object({
    image: z
        .string()
        .transform((imageUrl) => {
            return getBase64Info(imageUrl)
        })
        .refine(({ sizeInBytes }) => {
            return sizeInBytes <= MAX_FILE_SIZE
        }, 'Max image size is 5MB.')
        .refine(
            ({ mimeType }) => ACCEPTED_IMAGE_TYPES.includes(mimeType),
            'Only .jpg, .jpeg, .png and .webp formats are supported.'
        ),
    userName: z
        .string()
        .min(3, { message: 'Must be 3 or more characters long' })
        .max(30, { message: 'Must be 30 or fewer characters long' }),
    socialMediaUrl: z
        .string()
        .url({ message: 'Invalid url' }),
    description: z
        .string()
        .min(6, { message: 'Must be 6 or more characters long' })
        .max(30, { message: 'Must be 30 or fewer characters long' })
})