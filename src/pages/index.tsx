import { Header, Hero } from "@/components";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "700", "800"],
  subsets: ["latin"],
});

const index = () => {
  return (
    <div>
      <Header />
      <main className="max-w-screen-lg m-auto">
        <Hero />
      </main>
      <footer></footer>
    </div>
  );
};

export default index;
