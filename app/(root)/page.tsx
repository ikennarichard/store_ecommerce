import Hero from "@/app/(root)/_components/Hero";
import { getCurrentUser } from "@/lib/auth/actions";
import BestSeller from "./_components/BestSeller";
import Showcase from "./_components/Showcase";
import Trending from "./_components/Trending";

const Home = async () => {
  const user = await getCurrentUser();

  console.log("USER:", user);

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
