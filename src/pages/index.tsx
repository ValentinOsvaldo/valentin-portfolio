import { About, Contact, Header, Hero, Projects } from '@/components';
import { Layout } from '@/layout';

const index = () => {
  return (
    <Layout>
      <Header />
      <main className="max-w-screen-lg m-auto">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </Layout>
  );
};

export default index;
