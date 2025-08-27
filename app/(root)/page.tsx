import Hero from "@/app/(root)/_components/Hero";
import BestSeller from "./_components/BestSeller";
import Showcase from "./_components/Showcase";
import Trending from "./_components/Trending";
import { getAllProducts } from "@/lib/actions/product";

const Home = async () => {
  // const user = await getCurrentUser();
  // const products = await getAllProducts({ search: "Air Max" });

  console.log('PRODUCTS');

  return (
    <main className="max-w-7xl w-full">
      <Hero />
      <BestSeller />
      <Trending />
      <Showcase />
    </main>
  );
};

export default Home;
