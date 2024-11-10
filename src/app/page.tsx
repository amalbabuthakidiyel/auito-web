import Image from "next/image";
import { GrSwift } from "react-icons/gr";
import { FaChrome } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { SiGooglemarketingplatform } from "react-icons/si";
import { FaCheckSquare } from "react-icons/fa";
import { SiAzuredevops } from "react-icons/si";

export default function Home() {
  const datas = [
    { title: "Web Application", icon: <FaChrome size={28} />, description: "" },
    {
      title: "Android Application",
      icon: <DiAndroid size={28} />,
      description: "",
    },
    { title: "ioS Application", icon: <GrSwift size={28} />, description: "" },
    {
      title: "Digital Marketing",
      icon: <SiGooglemarketingplatform size={28} />,
      description: "",
    },
    { title: "QA & Testing", icon: <FaCheckSquare size={28} />, description: "" },
    { title: "Devops", icon: <SiAzuredevops size={28} />, description: "" },
  ];
  return (
    <main>
      <section className="bg-orange-100"><div className="container mx-auto py-8 px-2 sm:px-0 ">
        <h2 className="text-4xl text-start font-bold">Our Expertise </h2>
        <p className="mt-3">
          Tailored Solutions to Bring Your App Vision to Life—From Concept to
          Launch
        </p>
        <br />
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {datas.map((i, k) => (
            <div className="border rounded-lg p-4" key={k}>
              {i.icon}
              <h4 className="font-semibold text-xl mt-3">{i.title}</h4>
              <div className="mt-3">
                Crafting high-performance, feature-rich apps for the Apple
                ecosystem. Our iOS development ensures seamless integration with
                Apple devices and delivers a superior user experience.
              </div>
            </div>
          ))}
        </div>
      </div></section>
    </main>
  );
}
