import { Button, InputError, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { TRPCClientError } from "@trpc/client";
import { signInSchema } from "app/schemas";
import { trpc } from "app/trpc";
import Cookies from "js-cookie";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { useNavigate } from "react-router";

export default function SignInForm() {
  let navigate = useNavigate();

  function handleSignin() {
    Cookies.set("user", form.getValues().email, { expires: 7 });
    navigate("/", { replace: true });
  }
  const signInAccount = trpc.account.signInAccount.useMutation({
    onSuccess: () => {
      handleSignin();
    },
  });

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
          if (error instanceof TRPCClientError)
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
      {signInAccount.error?.message && (
        <InputError bg={"red"} bdrs={"md"} c={"black"} p={16} my={8}>
          {signInAccount.error?.message && "Invalid email or password"}
        </InputError>
      )}

      <Button type="submit" mt={8}>
        Submit
      </Button>
    </form>
  );
}
