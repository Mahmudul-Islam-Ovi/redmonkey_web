import WorkGrid from "../components/WorkGrid";
import Services from "../components/Services";
import Streaming from "../components/Streaming";
import Hero from "../components/Hero";

export default function Page() {
  return (
    <main>
      <Hero />
      <WorkGrid />
      <Services />
      <Streaming />
    </main>
  );
}
