import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
      return NextResponse.json({ error: "API key não configurada." }, { status: 500 });
    }
    const resend = new Resend(RESEND_API_KEY);
    const data = await resend.emails.send({
      from: "Contato Portfolio <onboarding@resend.dev>",
      to: ["bernardoschmitz0@gmail.com"],
      subject: `Nova mensagem de ${name} via portfólio`,
      replyTo: email,
      html: `<p><b>Nome:</b> ${name}<br/><b>Email:</b> ${email}<br/><b>Mensagem:</b><br/>${message.replace(/\n/g, '<br/>')}</p>`
    });
    // Log detalhado para debug
    console.log("RESEND DATA:", JSON.stringify(data));
    if (data.error) {
      return NextResponse.json({ error: "Erro ao enviar.", details: data.error }, { status: 500 });
    }
    return NextResponse.json({ ok: true, details: data });
  } catch (err) {
    // Log detalhado para debug
    console.error("RESEND CATCH:", err);
    return NextResponse.json({ error: "Erro inesperado.", details: String(err) }, { status: 500 });
  }
}
