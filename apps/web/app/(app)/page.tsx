import { Blocks } from "./components/blocks";
import { HomepageData } from "@/types/homepage";

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/homepage`, {
    next: { revalidate: false },
    cache: "force-cache",
  });
  const data: HomepageData = await res.json();
  return <Blocks {...data} />;
}
