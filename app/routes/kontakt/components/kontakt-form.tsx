import { motion } from "motion/react";
import { useSubmit, useNavigation } from "react-router";
import { useForm, Controller } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Card } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";

import {
    Field,
    FieldError,
    FieldLabel,
} from "../../../components/ui/field";

import { ArrowUpRight, LoaderCircle } from "lucide-react";



/* =========================================================
   Validation
========================================================= */

export const contactFormSchema = z.object({
    firstName: z.string().min(2, "Bitte gib deinen Vornamen ein."),

    lastName: z.string().min(2, "Bitte gib deinen Nachnamen ein."),

    company: z.string().optional(),

    email: z.email("Bitte gib eine gültige E-Mail-Adresse ein."),

    phone: z.string().optional(),

    address: z.string().optional(),

    zip: z.string().optional(),

    city: z.string().optional(),

    objectType: z.string().min(1, "Bitte wähle eine Objektart aus."),

    services: z.array(z.string()).min(
        1,
        "Bitte wähle mindestens eine gewünschte Leistung aus."
    ),

    interval: z.string().optional(),

    area: z.string().optional(),

    startDate: z.string().optional(),

    message: z.string()
        .max(3000, "Deine Nachricht darf maximal 3000 Zeichen enthalten.")
        .optional(),

    privacy: z.boolean().refine(
        (value) => value === true,
        {
            message: "Bitte akzeptiere die Datenschutzerklärung.",
        }
    ),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;


/* =========================================================
   Services
========================================================= */

const services = [
    "Unterhaltsreinigung",
    "Büroreinigung",
    "Treppenhausreinigung",
    "Glasreinigung",
    "Grundreinigung",
    "Baureinigung",
    "Fassaden- und Bodenreinigung",
    "Gartenpflege",
    "Rasenpflege",
    "Hecken- und Strauchschnitt",
    "Laubbeseitigung",
    "Außenanlagenpflege",
    "Winterdienst",
    "Hausmeisterservice",
    "Objektbetreuung",
    "Entrümpelung",
    "Photovoltaik Reinigung",
    "Schädlingsbekämpfung",
    "Sonstiges",
];



/* =========================================================
   Component
========================================================= */

export default function KontaktForm() {

    const submit = useSubmit();
    const navigation = useNavigation();

    const isSubmitting =
        navigation.state === "submitting" ||
        navigation.state === "loading";

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),

        defaultValues: {
            firstName: "",
            lastName: "",
            company: "",
            email: "",
            phone: "",
            address: "",
            zip: "",
            city: "",
            objectType: "",
            services: [],
            interval: "",
            area: "",
            startDate: "",
            message: "",
            privacy: false,
        },
    });


    /* =====================================================
       Submit
    ===================================================== */

    async function onSubmit(data: ContactFormValues) {

        const formData = new FormData();

        formData.append("firstName", data.firstName);
        formData.append("lastName", data.lastName);
        formData.append("company", data.company ?? "");
        formData.append("email", data.email);
        formData.append("phone", data.phone ?? "");
        formData.append("address", data.address ?? "");
        formData.append("zip", data.zip ?? "");
        formData.append("city", data.city ?? "");
        formData.append("objectType", data.objectType);

        data.services.forEach((service) => {
            formData.append("services", service);
        });

        formData.append("interval", data.interval ?? "");
        formData.append("area", data.area ?? "");
        formData.append("startDate", data.startDate ?? "");
        formData.append("message", data.message ?? "");
        formData.append("privacy", String(data.privacy));

        submit(formData, {
            action: "/kontakt",
            method: "post",
            encType: "multipart/form-data",
        });
    }


    /* =====================================================
       UI
    ===================================================== */

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                margin: "-100px",
            }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            }}
        >

            <Card className="overflow-hidden rounded-[2rem] border-slate-200 bg-white p-6 shadow-xl shadow-[#0F446A]/5 sm:p-9" id="angebot-anfragen">

                {/* Header */}

                <div className="mb-8">

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#139033]">
                        Kontaktformular
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold text-[#0F446A]">
                        Anfrage senden
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#6F7782]">
                        Füllen Sie das Formular aus. Wir melden uns persönlich bei Ihnen.
                    </p>

                </div>

                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                    noValidate
                >

{/* NAME */}

<div className="grid gap-5 sm:grid-cols-2">

    {/* Vorname */}

    <Controller
        control={form.control}
        name="firstName"
        render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>

                <FieldLabel htmlFor="firstName">
                    Vorname <span className="text-destructive">*</span>
                </FieldLabel>

                <Input
                    {...field}
                    id="firstName"
                    autoComplete="given-name"
                    placeholder="Max"
                    aria-invalid={fieldState.invalid}
                    className="h-12 rounded-xl border-slate-200 bg-white focus-visible:ring-[#139033]"
                />

                <FieldError errors={[fieldState.error]} />

            </Field>
        )}
    />


    {/* Nachname */}

    <Controller
        control={form.control}
        name="lastName"
        render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>

                <FieldLabel htmlFor="lastName">
                    Nachname <span className="text-destructive">*</span>
                </FieldLabel>

                <Input
                    {...field}
                    id="lastName"
                    autoComplete="family-name"
                    placeholder="Mustermann"
                    aria-invalid={fieldState.invalid}
                    className="h-12 rounded-xl border-slate-200 bg-white focus-visible:ring-[#139033]"
                />

                <FieldError errors={[fieldState.error]} />

            </Field>
        )}
    />

</div>


{/* COMPANY */}

<Controller
    control={form.control}
    name="company"
    render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>

            <FieldLabel htmlFor="company">
                Unternehmen
                <span className="ml-1 text-xs font-normal text-slate-400">
                    (optional)
                </span>
            </FieldLabel>

            <Input
                {...field}
                id="company"
                autoComplete="organization"
                placeholder="Unternehmen / Organisation"
                aria-invalid={fieldState.invalid}
                className="h-12 rounded-xl border-slate-200 bg-white focus-visible:ring-[#139033]"
            />

            <FieldError errors={[fieldState.error]} />

        </Field>
    )}
/>


{/* CONTACT */}

<div className="grid gap-5 sm:grid-cols-2">

    {/* E-Mail */}

    <Controller
        control={form.control}
        name="email"
        render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>

                <FieldLabel htmlFor="email">
                    E-Mail-Adresse <span className="text-destructive">*</span>
                </FieldLabel>

                <Input
                    {...field}
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="max@beispiel.de"
                    aria-invalid={fieldState.invalid}
                    className="h-12 rounded-xl border-slate-200 bg-white focus-visible:ring-[#139033]"
                />

                <FieldError errors={[fieldState.error]} />

            </Field>
        )}
    />


    {/* Telefon */}

    <Controller
        control={form.control}
        name="phone"
        render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>

                <FieldLabel htmlFor="phone">
                    Telefonnummer
                </FieldLabel>

                <Input
                    {...field}
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="0202 123456"
                    aria-invalid={fieldState.invalid}
                    className="h-12 rounded-xl border-slate-200 bg-white focus-visible:ring-[#139033]"
                />

                <FieldError errors={[fieldState.error]} />

            </Field>
        )}
    />


</div>

{/* ADDRESS */}

<Controller
    control={form.control}
    name="address"
    render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>

            <FieldLabel htmlFor="address">
                Straße und Hausnummer des Objektes
            </FieldLabel>

            <Input
                {...field}
                id="address"
                autoComplete="street-address"
                placeholder="Musterstraße 12"
                aria-invalid={fieldState.invalid}
                className="h-12 rounded-xl border-slate-200 bg-white focus-visible:ring-[#139033]"
            />

            <FieldError errors={[fieldState.error]} />

        </Field>
    )}
/>


<div className="grid gap-5 sm:grid-cols-2">

    {/* PLZ */}

    <Controller
        control={form.control}
        name="zip"
        render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>

                <FieldLabel htmlFor="zip">
                    PLZ
                </FieldLabel>

                <Input
                    {...field}
                    id="zip"
                    autoComplete="postal-code"
                    placeholder="42103"
                    aria-invalid={fieldState.invalid}
                    className="h-12 rounded-xl border-slate-200 bg-white focus-visible:ring-[#139033]"
                />

                <FieldError errors={[fieldState.error]} />

            </Field>
        )}
    />


    {/* ORT */}

    <Controller
        control={form.control}
        name="city"
        render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>

                <FieldLabel htmlFor="city">
                    Ort
                </FieldLabel>

                <Input
                    {...field}
                    id="city"
                    autoComplete="address-level2"
                    placeholder="Wuppertal"
                    aria-invalid={fieldState.invalid}
                    className="h-12 rounded-xl border-slate-200 bg-white focus-visible:ring-[#139033]"
                />

                <FieldError errors={[fieldState.error]} />

            </Field>
        )}
    />

</div>


{/* OBJECT */}

<Controller
    control={form.control}
    name="objectType"
    render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>

            <FieldLabel htmlFor="objectType">
                Art des Objektes <span className="text-destructive">*</span>
            </FieldLabel>

            <select
                {...field}
                id="objectType"
                aria-invalid={fieldState.invalid}
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-[#0F446A] outline-none transition focus:border-[#139033] focus:ring-2 focus:ring-[#139033]/10"
            >

                <option value="" disabled>
                    Bitte auswählen
                </option>

                <option value="buero">Büro</option>
                <option value="wohngebaeude">Wohngebäude</option>
                <option value="gewerbe">Gewerbe</option>
                <option value="schule">Schule oder Bildungseinrichtung</option>
                <option value="soziale-einrichtung">Soziale Einrichtung</option>
                <option value="praxis">Praxis</option>
                <option value="industrie">Industrie</option>
                <option value="oeffentliche-einrichtung">Öffentliche Einrichtung</option>
                <option value="sonstiges">Sonstiges</option>

            </select>

            <FieldError errors={[fieldState.error]} />

        </Field>
    )}
/>

{/* SERVICES */}

<Controller
    control={form.control}
    name="services"
    render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>

            <FieldLabel>
                Gewünschte Leistung <span className="text-destructive">*</span>
            </FieldLabel>

            <div className="grid gap-3 sm:grid-cols-2">

                {services.map((service) => {

                    const isChecked = field.value.includes(service);

                    return (
                        <label
                            key={service}
                            className="group flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-3 transition-colors hover:border-[#139033]/30 hover:bg-[#139033]/5"
                        >

                            <input
                                type="checkbox"
                                value={service}
                                checked={isChecked}
                                onChange={(event) => {

                                    const updatedServices = event.target.checked
                                        ? [...field.value, service]
                                        : field.value.filter(
                                            (item) => item !== service
                                        );

                                    field.onChange(updatedServices);
                                }}
                                className="size-4 accent-[#139033]"
                            />

                            <span className="text-sm text-[#6F7782] transition-colors group-hover:text-[#0F446A]">
                                {service}
                            </span>

                        </label>
                    );
                })}

            </div>

            <FieldError errors={[fieldState.error]} />

        </Field>
    )}
/>

{/* DETAILS */}

<div className="grid gap-5 sm:grid-cols-2">

    {/* INTERVAL */}

    <Controller
        control={form.control}
        name="interval"
        render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>

                <FieldLabel htmlFor="interval">
                    Gewünschtes Reinigungsintervall
                </FieldLabel>

                <Input
                    {...field}
                    id="interval"
                    placeholder="z. B. 2× wöchentlich"
                    aria-invalid={fieldState.invalid}
                    className="h-12 rounded-xl border-slate-200 bg-white focus-visible:ring-[#139033]"
                />

                <FieldError errors={[fieldState.error]} />

            </Field>
        )}
    />


    {/* AREA */}

    <Controller
        control={form.control}
        name="area"
        render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>

                <FieldLabel htmlFor="area">
                    Ungefähre Fläche in m²
                </FieldLabel>

                <Input
                    {...field}
                    id="area"
                    type="number"
                    min="0"
                    placeholder="z. B. 500"
                    aria-invalid={fieldState.invalid}
                    className="h-12 rounded-xl border-slate-200 bg-white focus-visible:ring-[#139033]"
                />

                <FieldError errors={[fieldState.error]} />

            </Field>
        )}
    />

</div>


{/* START DATE */}

<Controller
    control={form.control}
    name="startDate"
    render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>

            <FieldLabel htmlFor="startDate">
                Gewünschter Starttermin
            </FieldLabel>

            <Input
                {...field}
                id="startDate"
                type="date"
                aria-invalid={fieldState.invalid}
                className="h-12 rounded-xl border-slate-200 bg-white focus-visible:ring-[#139033]"
            />

            <FieldError errors={[fieldState.error]} />

        </Field>
    )}
/>


{/* MESSAGE */}

<Controller
    control={form.control}
    name="message"
    render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>

            <FieldLabel htmlFor="message">
                Nachricht
            </FieldLabel>

            <Textarea
                {...field}
                id="message"
                rows={5}
                maxLength={3000}
                placeholder="Erzählen Sie uns kurz von Ihrem Objekt und Ihrem Bedarf ..."
                aria-invalid={fieldState.invalid}
                className="min-h-[150px] resize-y rounded-xl border-slate-200 bg-white focus-visible:ring-[#139033]"
            />

            <div className="flex items-center justify-between gap-3">

                <FieldError errors={[fieldState.error]} />

                <span className="ml-auto text-xs text-slate-400">
                    {field.value?.length ?? 0} / 3000
                </span>

            </div>

        </Field>
    )}
/>

{/* PRIVACY */}

<Controller
    control={form.control}
    name="privacy"
    render={({ field, fieldState }) => (
        <Field
            orientation="horizontal"
            data-invalid={fieldState.invalid}
            className="items-start"
        >

            <input
                type="checkbox"
                id="privacy"
                name={field.name}
                ref={field.ref}
                checked={field.value}
                onBlur={field.onBlur}
                onChange={(event) =>
                    field.onChange(event.target.checked)
                }
                aria-invalid={fieldState.invalid}
                className="mt-1 size-4 shrink-0 accent-[#139033]"
            />

            <div className="grid gap-1.5">

                <FieldLabel
                    htmlFor="privacy"
                    className="text-xs font-normal leading-5 text-[#6F7782]"
                >
                    Ich habe die{" "}
                    <a
                        href="/datenschutz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#139033] underline underline-offset-2 hover:text-[#12641A]"
                    >
                        Datenschutzerklärung
                    </a>{" "}
                    gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu.

                    <span className="ml-1 text-destructive">*</span>
                </FieldLabel>

                <FieldError errors={[fieldState.error]} />

            </div>

        </Field>
    )}
/>


{/* SUBMIT */}

<Button
    type="submit"
    size="lg"
    disabled={isSubmitting}
    className="group h-13 w-full bg-gradient-to-r from-[#139033] to-[#12641A] text-white shadow-xl shadow-[#139033]/20 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
>

    {isSubmitting ? (

        <span className="flex items-center justify-center gap-2">
            Anfrage wird gesendet...
            <LoaderCircle className="size-4 animate-spin" />
        </span>

    ) : (

        <span className="flex items-center justify-center gap-2">
            Kostenlose Anfrage senden

            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>

    )}

</Button>


{/* FORM END */}

</form>

</Card>

</motion.div>

);
}
