interface AsideProps {
  title: string;
  desc: string;
}

export default function AsideElement({ title, desc }: AsideProps) {
  return (
    <li className=" border-b-2 border-Grayish-blue py-6">
      <h2 className="font-bold mb-2 text-lg hover:text-Soft-orange hover:cursor-pointer">
        {title}
      </h2>
      <p className="text-Grayish-blue">{desc}</p>
    </li>
  );
}
