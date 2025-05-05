import { NavigationConfig } from "@/types/navigation";
import { FooterConfig } from "@/types/footer";
import { AppLayout } from "./app-layout/index";
import { fetchData } from "@/lib/fetchData";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navigationData, footerData] = await Promise.all([
    fetchData<NavigationConfig | null>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/navigation`,
      {
        next: { revalidate: false, tags: ["layout", "navigation"] },
        cache: "force-cache",
      },
    ),
    fetchData<FooterConfig | null>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/footer`,
      {
        next: { revalidate: false, tags: ["layout", "footer"] },
        cache: "force-cache",
      },
    ),
  ]);

  if (!navigationData || !footerData) {
    return null;
  }

  return (
    <AppLayout navigationConfig={navigationData} footerConfig={footerData}>
      {children}
    </AppLayout>
  );
}
