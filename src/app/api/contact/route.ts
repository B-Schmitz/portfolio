import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // Envio via Resend (https://resend.com/) - gratuito e confiável
  // Você precisa criar uma conta e obter uma API KEY gratuita
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    return NextResponse.json({ error: "API key não configurada." }, { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Contato Portfolio <contato@bernardoschmitz.is-a.dev>",
      to: ["bernardo_schmitz@live.com"],
      subject: `Nova mensagem de ${name} via portfólio` ,
      reply_to: email,
      html: `<p><b>Nome:</b> ${name}<br/><b>Email:</b> ${email}<br/><b>Mensagem:</b><br/>${message.replace(/\n/g, '<br/>')}</p>`
    })
  });

  if (res.ok) {
    return NextResponse.json({ ok: true });
  } else {
    return NextResponse.json({ error: "Erro ao enviar." }, { status: 500 });
  }
}

