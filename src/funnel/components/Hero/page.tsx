import Navbar from "@/funnel/components/Navbar";
import Hero from "./index";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* Example next sections */}
      <section id="work" style={{ height: "100vh", background: "#111", color: "#fff", padding: "4rem" }}>
        <h1>Work Section</h1>
      </section>
      <section id="testimonials" style={{ height: "100vh", background: "#eee", padding: "4rem" }}>
        <h1>Testimonials Section</h1>
      </section>
      <section id="services" style={{ height: "100vh", background: "#ccc", padding: "4rem" }}>
        <h1>Services Section</h1>
      </section>
      <section id="benefits" style={{ height: "100vh", background: "#ddd", padding: "4rem" }}>
        <h1>Benefits Section</h1>
      </section>
      <section id="pricing" style={{ height: "100vh", background: "#f5f5f5", padding: "4rem" }}>
        <h1>Pricing Section</h1>
      </section>
      <section id="about-us" style={{ height: "100vh", background: "#fafafa", padding: "4rem" }}>
        <h1>About Us Section</h1>
      </section>
    </main>
  );
}
