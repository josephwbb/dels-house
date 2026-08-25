import { NextRequest, NextResponse } from "next/server";

// Human-readable labels for each field, so the email Adele
// receives reads clearly instead of showing raw camelCase keys.
const FIELD_LABELS: Record<string, string> = {
  childName: "Child's full name",
  preferredName: "Preferred name / nickname",
  dob: "Date of birth / age",
  languages: "Languages spoken at home",
  personality: "Personality & temperament",
  likes: "Likes & interests",
  dislikes: "Dislikes & comfort",
  startDate: "Required start date",
  contractType: "Contract type",
  daysTimes: "Days & drop-off / pick-up times",
  medical: "Medical conditions / health concerns",
  allergies: "Allergies & intolerances",
  medication: "Regular medication",
  diet: "Dietary requirements",
  sleep: "Sleep / nap routine",
  potty: "Potty training",
  feeding: "Feeding routine",
  development: "Development & milestones",
  parentName: "Parent / carer full name",
  phone: "Contact number",
  email: "Email address",
  address: "Home address",
  emergency: "Emergency contact",
  school: "School / preschool",
  previousChildcare: "Previous childcare experience",
  expectations: "What they're looking for in a childminder",
  additional: "Anything else",
};

// Formspree form endpoint — replace YOUR_FORM_ID with your actual id.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Build a JSON payload with readable labels, in the same
    // order the fields appear in the form.
    const payload: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      const label = FIELD_LABELS[key] ?? key;
      payload[label] = value.toString();
    }

    // Clear subject line + reply-to so Adele can hit "reply"
    // and it goes straight back to the parent.
    payload["_subject"] = `New enquiry: ${payload["Child's full name"] ?? "New family"}`;
    payload["_replyto"] = formData.get("email")?.toString() ?? "";

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => null);
      console.error("Formspree error:", error);
      return NextResponse.json(
        { error: "Failed to send enquiry" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Enquiry route error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}