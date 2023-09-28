import { About, Header, Hero } from "@/components";

const index = () => {
  return (
    <div>
      <Header />
      <main className="max-w-screen-lg m-auto">
        <Hero />
        <About />
      </main>
      <footer></footer>
    </div>
  );
};

export default index;
