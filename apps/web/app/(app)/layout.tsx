import { NavigationConfig } from "@/types/navigation";
import { FooterConfig } from "@/types/footer";
import { AppLayout } from "./app-layout/index";
import { fetchData } from "@/lib/fetchData";
import { docsConfig } from "@/config/docs";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navigationData, footerData] = await Promise.all([
    fetchData<NavigationConfig | null>(docsConfig.navigation, {
      next: { revalidate: false, tags: ["layout", "navigation"] },
      cache: "force-cache",
    }),
    fetchData<FooterConfig | null>(docsConfig.footer, {
      next: { revalidate: false, tags: ["layout", "footer"] },
      cache: "force-cache",
    }),
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
