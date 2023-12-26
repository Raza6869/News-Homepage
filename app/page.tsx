//utils
import { DeviceSize } from "./utils/deviceSize";
//components
import Aside from "./components/aside";
import Header from "./components/header";
import Main from "./components/main";
import Section from "./components/section";

export default function Home() {
  return (
    <main className=" overflow-hidden pb-6">
      <Header />
      <div className="sm:px-40 px-4 sm:py-20">
        <div className="flex sm:flex-row flex-col gap-6">
          <Main />
          <Aside />
        </div>
        <Section />
      </div>
    </main>
  );
}
