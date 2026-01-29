import { PropsWithChildren } from "react";
import { AuthProvider } from "./contexts/authContext";
import { TRPCProvider } from "./trpc";

export function Providers({ children }: PropsWithChildren) {
  return (
    <TRPCProvider>
      <AuthProvider>{children}</AuthProvider>
    </TRPCProvider>
  );
}
