import { Button, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { signInSchema } from "app/schemas";
import { trpc } from "app/trpc";
import { zod4Resolver } from "mantine-form-zod-resolver";

export default function SignInForm() {
  const signInAccount = trpc.account.signInAccount.useMutation();
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
    validate: zod4Resolver(signInSchema),
  });
  return (
    <form
      onSubmit={form.onSubmit(async (values) => {
        try {
          const result = await signInAccount.mutateAsync(values);
          console.log("Account signed in successfully:", result);
          form.reset();
        } catch (error) {
          console.error("Failed to sign in account:", error);
        }
      })}
    >
      <Stack>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          key={form.key("email")}
          {...form.getInputProps("email")}
        />
        <TextInput
          type="password"
          withAsterisk
          label="Password"
          key={form.key("password")}
          {...form.getInputProps("password")}
        />
      </Stack>
      <Button type="submit" mt={8}>
        Submit
      </Button>
    </form>
  );
}
