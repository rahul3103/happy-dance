import { NavigationConfig } from "@/types/navigation";
import { AppLayout } from "./app-layout/index";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/navigation`, {
    next: { revalidate: false },
    cache: "force-cache",
  });
  const data: NavigationConfig = await res.json();

  return <AppLayout navigationConfig={data}>{children}</AppLayout>;
}
