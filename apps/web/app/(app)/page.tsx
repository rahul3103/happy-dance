import { Blocks } from "./components/blocks";
import { HomepageData } from "@/types/homepage";
import { fetchData } from "@/lib/fetchData";
import { docsConfig } from "@/config/docs";

export default async function Page() {
  const data = await fetchData<HomepageData>(docsConfig.homepage, {
    next: { revalidate: false },
    cache: "force-cache",
  });
  return <Blocks {...data} />;
}
