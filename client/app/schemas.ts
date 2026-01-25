import z from "zod";

export const accountSchema = z.object({
  email: z.email({ error: "Invalid email" }),
  name: z.string().min(3, { error: "Name should have at least 3 characters" }),
  password: z
    .string()
    .min(6, { error: "Password should be at least 6 characters" }),
});
