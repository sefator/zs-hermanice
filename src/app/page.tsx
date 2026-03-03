import { HomePage } from "@/components/HomePage";
import { getHomeContent, getNewsItems } from "@/lib/content";

export default async function Home() {
  const { data, content } = await getHomeContent();
  const news = await getNewsItems(3);

  return <HomePage hero={{ data, content }} news={news} />;
}
