"use client";
import { useState } from "react";

export function ContactSection() {
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-background/50">
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
            {status === "sending" ? "Enviando..." : "Enviar"}
          </button>
          {status === "success" && <p className="text-green-600 mt-2">Mensagem enviada com sucesso!</p>}
          {status === "error" && <p className="text-red-600 mt-2">Erro ao enviar. Tente novamente.</p>}
        </form>
      </div>
    </section>
  );
}

