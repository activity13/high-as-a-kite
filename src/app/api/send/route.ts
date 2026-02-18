import { render } from '@react-email/render';
import { EmailTemplate } from '@/components/email/EmailTemplate';
import { resend } from '@/lib/resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, level, message, marketingConsent, persons, phone } =
      body;

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 },
      );
    }

    // Renderiza el componente de email a HTML
    const emailComponent = await EmailTemplate({
      name,
      email,
      level,
      message,
      persons,
      phone,
      marketingConsent,
    });

    const html = await render(emailComponent);

    // Plain-text fallback (helps deliverability and debugging)
    const text = `Nuevo mensaje de ${name}\n\nEmail: ${email}\nNivel: ${level || '-'}\nTeléfono: ${phone || '-'}\n 
    Personas: ${persons || '-'}\nMensaje:\n${message}`;

    //Correos configurados para recibir los mensajes
    const fromEmail = process.env.FROM_EMAIL;
    const haakEmail = process.env.HAAK_EMAIL;

    // Validación de variables de entorno
    if (!fromEmail || !haakEmail) {
      return NextResponse.json(
        { error: 'Configuración de email incompleta' },
        { status: 500 },
      );
    }

    // Envío y logging para depuración
    // NOTA: Si estás en modo prueba de Resend (sin dominio verificado),
    // debes usar 'onboarding@resend.dev' como remitente y tu correo personal como destinatario.
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Dominio de prueba de Resend
      to: ['highasakiteperu@gmail.com'], // Tu correo verificado para recibir pruebas
      subject: `Nuevo mensaje de ${name} - HAAK Web`,
      html,
      text,
      replyTo: email,
    });

    // Loguea la respuesta para poder verificar messageId/status en logs locales
    console.log('Resend send response:', JSON.stringify(data));

    return NextResponse.json({ data });
  } catch (error) {
    console.log('🚀 ~ route.ts error:', error);

    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
