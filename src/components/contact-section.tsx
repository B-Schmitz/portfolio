"use client";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export function ContactSection() {
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const toastId = toast.loading("Enviando mensagem...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        toast.success("Mensagem enviada com sucesso! 🚀", { id: toastId });
      } else {
        setStatus("error");
        toast.error("Erro ao enviar. Tente novamente.", { id: toastId });
      }
    } catch {
      setStatus("error");
      toast.error("Erro ao enviar. Tente novamente.", { id: toastId });
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-background/50">
      <Toaster position="top-center" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-xl">
        <h2 className="text-3xl font-bold mb-4 text-foreground">Contato</h2>
        <p className="mb-8 text-muted-foreground">Preencha o formulário para enviar uma mensagem diretamente para meu e-mail.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full rounded border border-border bg-card px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Seu nome"
            required
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            name="name"
            autoComplete="name"
          />
          <input
            className="w-full rounded border border-border bg-card px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Seu e-mail"
            required
            type="email"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            name="email"
            autoComplete="email"
          />
          <textarea
            className="w-full rounded border border-border bg-card px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
            placeholder="Sua mensagem"
            required
            value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            name="message"
          />
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground rounded py-2 font-semibold hover:bg-primary/90 transition"
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              <span className="flex items-center justify-center gap-2 animate-pulse">
                <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>
                Enviando...
              </span>
            ) : "Enviar"}
          </button>
        </form>
      </div>
    </section>
  );
}
