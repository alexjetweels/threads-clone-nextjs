import * as z from 'zod';

export const UserValidation = z.object({
  profile_photo: z.string().optional(),
  name: z.string().min(3).max(30),
  userName: z.string().min(3).max(30),
  bio: z.string().max(1000).optional(),
});
