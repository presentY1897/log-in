import { redirect } from "next/navigation";
import { getUser } from "@/app/lib/dal";

export default async function Page() {
  const user = await getUser();
  if (!user) {
    redirect("/log-in/username");
  } else {
    redirect("/user-info");
  }
}
