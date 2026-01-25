import { PropsWithChildren } from "react";
import { TRPCProvider } from "./trpc";

export function Providers({ children }: PropsWithChildren) {
  return <TRPCProvider>{children}</TRPCProvider>;
}
