"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { type SignInFormData, signInSchema } from "@/validation";
import { toast } from "../ui/toast";

export function SignInForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [pendingAction, setPendingAction] = useState<"github" | "email" | null>(
    null,
  );
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: SignInFormData) {
    setPendingAction("email");
    startTransition(async () => {
      try {
        await authClient.signIn.email(
          {
            ...values,
          },
          {
            onSuccess: () => {
              toast.add({
                type: "success",
                description: "Logged in successfully.",
              });
              router.push("/home");
            },
            onError: ({ error }) => {
              toast.add({
                type: "error",
                description:
                  error?.message || "Error occurred while logging in.",
              });
            },
          },
        );
      } finally {
        setPendingAction(null);
      }
    });
  }

  function loginWithGithub() {
    setPendingAction("github");
    startTransition(async () => {
      try {
        await authClient.signIn.social(
          {
            provider: "github",
            callbackURL: "/home",
          },
          {
            onSuccess: () => {
              toast.add({
                type: "success",
                description: "Logged in successfully.",
              });
            },
            onError: ({ error }) => {
              toast.add({
                type: "error",
                description:
                  error?.message ||
                  "Error occurred while logging in with Github.",
              });
            },
          },
        );
      } finally {
        setPendingAction(null);
      }
    });
  }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>Login to your Astra account</CardDescription>
        </CardHeader>
        <CardContent>
          <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <Button
                  variant="outline"
                  type="button"
                  onClick={loginWithGithub}
                >
                  <Image
                    src="/github.svg"
                    alt="Github Image"
                    width={20}
                    height={20}
                  />

                  {isPending && pendingAction === "github" ? (
                    <Loader2Icon className="size-4 animate-spin" />
                  ) : (
                    "Sign in with Github"
                  )}
                </Button>
              </Field>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Or continue with
              </FieldSeparator>
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-valid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-email">Email</FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-email"
                      type="email"
                      placeholder="john@example.com"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      required
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-password">
                      Password
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-password"
                      type="password"
                      placeholder="******"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      required
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Field>
                <Button type="submit" disabled={isPending}>
                  {isPending && pendingAction === "email" ? (
                    <Loader2Icon className="size-4 animate-spin" />
                  ) : (
                    "Sign In"
                  )}
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account?{" "}
                  <Link href="/sign-up">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
