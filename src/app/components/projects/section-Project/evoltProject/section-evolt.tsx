import Image from "next/image";
import { SectionTitle } from "../../../sectionTitle/section-title";

export function ProjectEvolt() {
  return (
    <div className="projectEvolt">
      <SectionTitle text="Evolt Engenharia" />
      <a href="https://evoltengenharia.bohr.io/">
        <Image
          src="/evolt.png"
          alt="Perfil"
          width={450}
          height={231}
          priority
        />
      </a>
      <p>Web design desenvolvido para uma empresa local.</p>
    </div>
  );
}
