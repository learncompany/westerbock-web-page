import { Outlet, redirect } from 'react-router'
import type { Route } from './+types/kontakt-intro';
import { contactFormSchema } from './components/kontakt-form';
import z from 'zod';


export async function action({ request }: Route.ActionArgs) {

  console.log("========== ACTION EXECUTED ==========");
  console.log("Method:", request.method);
  console.log("Content-Type:", request.headers.get("content-type"));

  try {

    const formData = await request.formData();


    /* =========================================================
       FormData auslesen
    ========================================================= */

    console.log("=== CONTACT FORM DATA ===");

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }


    /* =========================================================
       Daten für Zod vorbereiten
    ========================================================= */

    const dataToValidate = {

      firstName: formData.get("firstName"),

      lastName: formData.get("lastName"),

      company: formData.get("company") || "",

      email: formData.get("email"),

      phone: formData.get("phone") || "",

      address: formData.get("address"),

      zip: formData.get("zip"),

      city: formData.get("city"),

      objectType: formData.get("objectType"),

      services: formData.getAll("services"),

      interval: formData.get("interval") || "",

      area: formData.get("area") || "",

      startDate: formData.get("startDate") || "",

      message: formData.get("message") || "",

      privacy: formData.get("privacy") === "true",

    };


    /* =========================================================
       Zod Validierung
    ========================================================= */

    const result = contactFormSchema.safeParse(dataToValidate);


    if (!result.success) {

      console.log(
        "Contact form validation error:",
        result.error.issues
      );

      return {

        success: false,

        message: "Bitte überprüfe deine Eingaben.",

        errors: z.flattenError(result.error).fieldErrors,

      };

    }


    /* =========================================================
       Weiterleitung an Nodemailer Server
    ========================================================= */

    console.log("Sending contact form to mail server...");


    const response = await fetch(
      "http://host.docker.internal:5252/api/contact",
      // "http://localhost:5252/api/contact",

      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(result.data),
      }
    );


    /* =========================================================
       Server Response prüfen
    ========================================================= */

    if (!response.ok) {

      const errorResponse = await response.json().catch(() => null);

      console.error(
        "Mail server error:",
        response.status,
        errorResponse
      );

      return {

        success: false,

        message:
          errorResponse?.error ||
          "Deine Nachricht konnte nicht gesendet werden.",

      };

    }


    /* =========================================================
       Erfolgreicher Versand
    ========================================================= */

    console.log("Contact form successfully sent.");

    return redirect("/danke");


  } catch (error) {

    console.error("Contact form action error:", error);

    return {

      success: false,

      message: "Deine Nachricht konnte nicht gesendet werden.",

    };

  }

}


export default function KontaktIntro() {
    return (
        <Outlet />
    )
}
