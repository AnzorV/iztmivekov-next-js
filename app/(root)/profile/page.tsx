"use client";

import { getUserSession } from "@/shared/lib";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getUserSession();

  if (!session) {
    return redirect("/not-auth");
  }

  return <div>ЭТО ТВОЙ ПРОФИЛЬ</div>;
}
