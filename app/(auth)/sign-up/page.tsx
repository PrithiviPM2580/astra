import { SignUpForm } from "@/components/auth/sign-up-form";
import Logo from "@/components/logo";

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Logo title="Astra" color="#ffffff" size="size-8" />
        <SignUpForm />
      </div>
    </div>
  );
}
