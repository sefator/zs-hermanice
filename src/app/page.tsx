import { HomePage } from "@/components/HomePage";
import { getHomeContent, getNewsItems } from "@/lib/content";

export default async function Home() {
  const [home, news] = await Promise.all([getHomeContent(), getNewsItems(3)]);

  return <HomePage hero={home} news={news} />;
}
