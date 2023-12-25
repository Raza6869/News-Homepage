//components
import SectionElement from "./sectionElement";
//media
import image1 from "@/assets/images/image-retro-pcs.jpg";
import image2 from "@/assets/images/image-top-laptops.jpg";
import image3 from "@/assets/images/image-gaming-growth.jpg";

export default function Section() {
  return (
    <section className="mt-20">
      <ul className="flex sm:flex-row flex-col justify-between sm:gap-0 gap-6">
        <SectionElement
          image={image1}
          number="01"
          title="Revivng Retro PCs"
          desc="What happens when old PCs are given modern upgrades?"
        />
        <SectionElement
          image={image2}
          number="02"
          title="Top 10 Laptops of 2023"
          desc="Our best picks for various needs and budgets."
        />
        <SectionElement
          image={image3}
          number="03"
          title="The Growth of Gaming"
          desc="How the pandemic has sparked fresh opportuinies."
        />
      </ul>
    </section>
  );
}
