import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, message } = await req.json();

  await resend.emails.send({
    from: "Client <onboarding@resend.dev>",
    to: "amitkumarmaurya10122005@gmail.com",
    subject: "New Contact Message",
    html: `
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p>${message}</p>
    `,
  });

  return Response.json({ success: true });
}
