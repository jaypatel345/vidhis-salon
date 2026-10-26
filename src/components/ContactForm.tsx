"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

type Fields = { name: string; email: string; phone: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[+()\-\s0-9]{7,18}$/;

export function ContactForm() {
  const [values, setValues] = useState<Fields>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(v: Fields): Errors {
    const e: Errors = {};
    if (!v.name.trim()) e.name = "Please enter your name.";
    if (!v.email.trim()) e.email = "Please enter your email.";
    else if (!emailRe.test(v.email)) e.email = "Please enter a valid email address.";
    if (v.phone && !phoneRe.test(v.phone)) e.phone = "Please enter a valid phone number.";
    if (!v.message.trim()) e.message = "Please tell us how we can help.";
    else if (v.message.trim().length < 10) e.message = "Please add a little more detail.";
    return e;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) setSubmitted(true);
  }

  function update(key: keyof Fields, val: string) {
    setValues((v) => ({ ...v, [key]: val }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 border border-espresso/15 bg-cream/60 p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-bronze/15 text-bronze">
          <Check size={24} />
        </span>
        <h3 className="font-display text-2xl text-espresso">Thank you, {values.name.split(" ")[0]}.</h3>
        <p className="text-sm leading-relaxed text-mocha">
          Your message has been captured in this demo form. Note: this is a
          front-end demonstration — your message is <strong>not</strong> actually
          sent or stored anywhere. Connect a form backend or email service to go live.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setSubmitted(false);
            setValues({ name: "", email: "", phone: "", subject: "", message: "" });
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <Field label="Full name" error={errors.name} htmlFor="c-name">
        <input
          id="c-name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          className={inputCls(!!errors.name)}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" error={errors.email} htmlFor="c-email">
          <input
            id="c-email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputCls(!!errors.email)}
          />
        </Field>
        <Field label="Phone (optional)" error={errors.phone} htmlFor="c-phone">
          <input
            id="c-phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputCls(!!errors.phone)}
          />
        </Field>
      </div>

      <Field label="Subject (optional)" htmlFor="c-subject">
        <input
          id="c-subject"
          type="text"
          value={values.subject}
          onChange={(e) => update("subject", e.target.value)}
          className={inputCls(false)}
        />
      </Field>

      <Field label="Message" error={errors.message} htmlFor="c-message">
        <textarea
          id="c-message"
          rows={5}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          className={cn(inputCls(!!errors.message), "resize-none")}
        />
      </Field>

      <Button type="submit" size="lg">
        Send Message
      </Button>
      <p className="text-xs text-stone">
        Demo form — submissions are validated in the browser but not transmitted.
      </p>
    </form>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    "w-full border bg-ivory px-4 py-3 font-sans text-sm text-espresso placeholder:text-stone transition-colors focus:outline-none focus:ring-0",
    hasError
      ? "border-red-600/60 focus:border-red-600"
      : "border-espresso/20 focus:border-bronze"
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-[0.7rem] font-medium uppercase tracking-[0.16em] text-espresso/70"
      >
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
