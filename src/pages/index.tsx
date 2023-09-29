import { About, Header, Hero, Projects } from '@/components';

const index = () => {
  return (
    <div>
      <Header />
      <main className="max-w-screen-lg m-auto">
        <Hero />
        <About />
        <Projects />
      </main>
      <footer></footer>
    </div>
  );
};

export default index;
