import { redirect, RedirectType } from "next/navigation";

export default function RootPage() {
  redirect("/dashboard", RedirectType.replace);
}
