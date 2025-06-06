import Header from "@/components/usable/header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto p-4">
        <div>
          <h1>This is Home Page </h1>
          <section id="home">
            <h1>home</h1>
          </section>
          <section id="pricing">
            <h1>pricing</h1>
          </section>
          <section id="demo">
            <h1>demo</h1>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
