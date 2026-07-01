import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, score, profile, goal, obstacle, solution, note, answers } = body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (!apiKey || !audienceId) {
      console.error("[Waitlist] RESEND_API_KEY or RESEND_AUDIENCE_ID is not set");
      return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
    }

    const res = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          first_name: name ?? "",
          unsubscribed: false,
        }),
      }
    );

    if (!res.ok) {
      const resBody = await res.text();
      console.error("[Waitlist] Resend error:", resBody);
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
    }

    // Log quiz data server-side for review
    if (score !== undefined) {
      console.log("[Quiz]", JSON.stringify({ email, name, score, profile, goal, obstacle, solution, note, answers }));
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Waitlist] Unexpected error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
