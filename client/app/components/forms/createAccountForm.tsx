import { Button, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { accountSchema } from "app/schemas";
import { trpc } from "app/trpc";
import { zod4Resolver } from "mantine-form-zod-resolver";

export default function CreateAccountForm() {
  const createAccount = trpc.account.createAccount.useMutation();
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      name: "",
      password: "",
    },
    validate: zod4Resolver(accountSchema),
  });

  return (
    <form
      onSubmit={form.onSubmit(async (values) => {
        try {
          const result = await createAccount.mutateAsync(values);
          console.log("Account created successfully:", result);
          form.reset();
        } catch (error) {
          console.error("Failed to create account:", error);
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
          withAsterisk
          label="Name"
          placeholder="John Doe"
          key={form.key("name")}
          {...form.getInputProps("name")}
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
