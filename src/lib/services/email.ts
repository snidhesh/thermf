import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.EMAIL_FROM || "RMF <noreply@thermf.org>";

export async function sendInvitationEmail(to: string, name: string) {
  return resend.emails.send({
    from: FROM_EMAIL,
    to,
    subject: "Welcome to the Regenerative Medicine Federation",
    html: `
      <h1>Welcome, ${name}!</h1>
      <p>Your membership application has been approved. Click the link below to set up your account and access the RMF Members Portal.</p>
      <p><a href="${process.env.NEXTAUTH_URL}/login?email=${encodeURIComponent(to)}">Access Your Account</a></p>
      <p>Best regards,<br/>The RMF Team</p>
    `,
  });
}

export async function sendApplicationConfirmation(
  to: string,
  name: string,
  referenceNumber: string
) {
  return resend.emails.send({
    from: FROM_EMAIL,
    to,
    subject: "RMF Application Received",
    html: `
      <h1>Thank you, ${name}!</h1>
      <p>We have received your application to join the Regenerative Medicine Federation.</p>
      <p>Your reference number is: <strong>${referenceNumber}</strong></p>
      <p>You can track your application status at: <a href="${process.env.NEXTAUTH_URL}/apply/${referenceNumber}">${process.env.NEXTAUTH_URL}/apply/${referenceNumber}</a></p>
      <p>We will review your application and get back to you shortly.</p>
      <p>Best regards,<br/>The RMF Team</p>
    `,
  });
}

export async function sendIntroductionEmail(
  fromName: string,
  fromEmail: string,
  toName: string,
  toEmail: string
) {
  return resend.emails.send({
    from: FROM_EMAIL,
    to: toEmail,
    subject: `RMF Member Introduction: ${fromName}`,
    html: `
      <h1>Hello ${toName},</h1>
      <p>${fromName} (${fromEmail}) would like to connect with you through the Regenerative Medicine Federation network.</p>
      <p>Feel free to reach out to them directly to start a conversation.</p>
      <p>Best regards,<br/>The RMF Team</p>
    `,
  });
}
