import AsideElement from "./asideElement";

export default function Aside() {
  return (
    <aside className=" bg-Very-dark-blue px-6 py-8">
      <h1 className="text-Soft-orange text-4xl font-bold">New</h1>
      <ul className="text-Off-white flex flex-col gap-5">
        <AsideElement
          title="Hydrogen VS Eletric Cars"
          desc="Will hydrogen-fueled cars ever catch up to EVs?"
        />
        <AsideElement
          title="The Downsides of AI Artistry"
          desc="What are the possible adverse effects of on-demand AI image generation?"
        />
        <li className="pt-4">
          <h2 className="font-bold mb-2 text-lg hover:text-Soft-orange hover:cursor-pointer">
            IS VC Funding Drying Up?
          </h2>
          <p className="text-Grayish-blue">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </li>
      </ul>
    </aside>
  );
}
