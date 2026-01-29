import { NextRequest, NextResponse } from "next/server";

// Rate limiting simple (à améliorer en production)
const requestCounts = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = 5; // 5 requêtes
  const window = 60 * 1000; // par minute

  const record = requestCounts.get(ip);

  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + window });
    return true;
  }

  if (record.count >= limit) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Trop de requêtes. Veuillez réessayer dans 1 minute." },
        { status: 429 }
      );
    }

    const formData = await request.formData();

    // Extraction des données
    const nom = formData.get("nom") as string;
    const email = formData.get("email") as string;
    const telephone = formData.get("telephone") as string;
    const ville = formData.get("ville") as string;
    const typeProjet = formData.get("typeProjet") as string;
    const budget = formData.get("budget") as string;
    const message = formData.get("message") as string;
    const photos = formData.getAll("photos") as File[];

    // Validation basique
    if (!nom || !email || !telephone || !ville || !typeProjet || !message) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    // Validation des photos
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
    const ACCEPTED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

    for (const photo of photos) {
      if (photo.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: "Chaque photo doit faire moins de 5MB" },
          { status: 400 }
        );
      }
      if (!ACCEPTED_TYPES.includes(photo.type)) {
        return NextResponse.json(
          { error: "Format de photo non accepté. Utilisez JPG, PNG ou WebP" },
          { status: 400 }
        );
      }
    }

    if (photos.length > 3) {
      return NextResponse.json(
        { error: "Maximum 3 photos autorisées" },
        { status: 400 }
      );
    }

    // TODO: Intégration Resend pour l'envoi d'email
    // Pour le moment, on simule un envoi réussi

    // Exemple d'intégration Resend (à décommenter quand configuré):
    /*
    const { Resend } = require("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Convertir les photos en attachments
    const attachments = await Promise.all(
      photos.map(async (photo) => ({
        filename: photo.name,
        content: Buffer.from(await photo.arrayBuffer()),
      }))
    );

    await resend.emails.send({
      from: "contact@votredomaine.fr",
      to: "votre-email@exemple.fr",
      subject: `Nouvelle demande de devis - ${typeProjet}`,
      html: `
        <h2>Nouvelle demande de devis</h2>
        <p><strong>Nom:</strong> ${nom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${telephone}</p>
        <p><strong>Ville:</strong> ${ville}</p>
        <p><strong>Type de projet:</strong> ${typeProjet}</p>
        <p><strong>Budget:</strong> ${budget || "Non renseigné"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        ${photos.length > 0 ? `<p><strong>Photos jointes:</strong> ${photos.length}</p>` : ""}
      `,
      attachments,
    });
    */

    // Simulation de succès
    console.log("Formulaire reçu:", {
      nom,
      email,
      telephone,
      ville,
      typeProjet,
      budget,
      message,
      photosCount: photos.length,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Votre demande a bien été envoyée",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors du traitement du formulaire:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors du traitement de votre demande" },
      { status: 500 }
    );
  }
}
