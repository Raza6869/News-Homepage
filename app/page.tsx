//components
import Aside from "./components/aside";
import Header from "./components/header";
import Main from "./components/main";
import Section from "./components/section";

export default function Home() {
  return (
    <main className="px-40 py-4">
      <Header />
      <div className="flex gap-6">
        <Main />
        <Aside />
      </div>
      <Section />
    </main>
  );
}
