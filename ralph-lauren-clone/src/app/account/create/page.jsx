"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

function SocialButton({ label }) {
  return (
    <button
      type="button"
      className="flex-1 h-11 border border-gray-300 flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.14em] hover:bg-gray-50"
    >
      {label}
    </button>
  );
}

function Input({ placeholder, type = "text", value, onChange, error }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-12 border border-gray-300 px-4 text-[11px] tracking-[0.12em] outline-none focus:border-black placeholder:text-gray-500"
      />
      {error ? <p className="mt-2 text-[11px] text-red-600">{error}</p> : null}
    </div>
  );
}

export default function CreateAccountPage() {
  const [tab, setTab] = useState("create"); // "signin" | "create"

  const [form, setForm] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    name: "",
    surname: "",
    remember: false,
    consentNews: false,
  });

  const errors = useMemo(() => {
    const e = {};
    if (tab === "create") {
      if (!form.email.includes("@")) e.email = "Enter a valid email.";
      if (form.confirmEmail && form.confirmEmail !== form.email)
        e.confirmEmail = "Emails do not match.";
      if (form.password && form.password.length < 6)
        e.password = "Password must be at least 6 characters.";
      if (form.confirmPassword && form.confirmPassword !== form.password)
        e.confirmPassword = "Passwords do not match.";
      if (!form.name.trim()) e.name = "Required.";
      if (!form.surname.trim()) e.surname = "Required.";
    }
    return e;
  }, [form, tab]);

  const onChange = (key) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((p) => ({ ...p, [key]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    alert("Create Account submitted (hook your API here).");
  };

  return (
    <main className="min-h-[calc(100vh-110px)] bg-white">
      <div className="max-w-[560px] mx-auto px-4 py-10">
        <div className="border border-gray-200">
          {/* Tabs */}
          <div className="grid grid-cols-2">
            <button
              type="button"
              onClick={() => setTab("signin")}
              className={`py-5 text-[16px] font-medium ${
                tab === "signin" ? "bg-gray-100" : "bg-white"
              } border-b border-gray-200`}
            >
              Sign In
            </button>

            <button
              type="button"
              onClick={() => setTab("create")}
              className={`py-5 text-[16px] font-medium ${
                tab === "create" ? "bg-gray-100" : "bg-white"
              } border-b border-gray-200 border-l`}
            >
              Create Account
            </button>
          </div>

          <div className="p-8">
            {/* Social */}
            <div className="flex gap-3">
              <SocialButton label="Facebook" />
              <SocialButton label="Google" />
              <SocialButton label="Apple" />
            </div>

            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-200" />
              <span className="mx-4 text-[12px] text-gray-600">Or</span>
              <div className="flex-1 border-t border-gray-200" />
            </div>

            {/* Consent blocks */}
            <div className="space-y-5 text-[11px] text-gray-700 leading-5">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={form.remember}
                  onChange={onChange("remember")}
                  className="mt-[3px] accent-black"
                />
                <span>
                  Remember me - I want Ralph Lauren to personalise my shopping experience
                </span>
              </label>

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={form.consentNews}
                  onChange={onChange("consentNews")}
                  className="mt-[3px] accent-black"
                />
                <span>
                  Tick here if you would like to receive the latest news, special offers
                  and/or exclusive events relating to Ralph Lauren products and services,
                  by e-mail or targeted social media ads. By signing up, you consent to
                  the use of tracking technologies for personalisation and analytics. You
                  may unsubscribe at any time by clicking on the unsubscribe link in each
                  e-mail.
                </span>
              </label>
            </div>

            {/* Create form */}
            {tab === "create" ? (
              <form onSubmit={onSubmit} className="mt-8 space-y-5">
                <Input
                  placeholder="EMAIL ADDRESS *"
                  value={form.email}
                  onChange={onChange("email")}
                  error={errors.email}
                />
                <Input
                  placeholder="CONFIRM EMAIL ADDRESS"
                  value={form.confirmEmail}
                  onChange={onChange("confirmEmail")}
                  error={errors.confirmEmail}
                />
                <Input
                  placeholder="PASSWORD *"
                  type="password"
                  value={form.password}
                  onChange={onChange("password")}
                  error={errors.password}
                />
                <Input
                  placeholder="RE-ENTER PASSWORD *"
                  type="password"
                  value={form.confirmPassword}
                  onChange={onChange("confirmPassword")}
                  error={errors.confirmPassword}
                />
                <Input
                  placeholder="NAME *"
                  value={form.name}
                  onChange={onChange("name")}
                  error={errors.name}
                />
                <Input
                  placeholder="SURNAME *"
                  value={form.surname}
                  onChange={onChange("surname")}
                  error={errors.surname}
                />

                <button
                  type="submit"
                  className="w-full h-12 bg-[#001f2a] text-white text-[11px] tracking-[0.22em] uppercase"
                >
                  Create Account
                </button>

                <p className="text-[12px] text-gray-600">
                  Already have an account?{" "}
                  <Link className="underline" href="/account/signin">
                    Sign in
                  </Link>
                </p>
              </form>
            ) : (
              <div className="mt-8 text-[12px] text-gray-700">
                Go to{" "}
                <Link className="underline" href="/account/signin">
                  /account/signin
                </Link>{" "}
                to implement the Sign In screen.
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
