"use client";
import Button from "@/app/components/Button";
import Card from "@/app/components/Card";
import InstructionColors from "@/app/components/InstructionColors";

const rings = [
  {
    category: "cintillo",
    image: "/modelos/cintillos/aci-001.jpg",
    linkProduct:
      "https://www.instagram.com/p/C2TBmgNJYbK/?igsh=MTh4cjM1dnZ2ODMxMw==",
    alt: "imagen modelo ACI-001",
    model: "ACI-001",
    color: "amarillo",
    grabado: false,
    grams: 2,
    garantia: true,
  },
  {
    category: "cintillo",
    image: "/modelos/cintillos/aci-002.jpg",
    linkProduct:
      "https://www.instagram.com/p/C12nqsbpLN7/?igsh=MWEwZTY1eXB6Mm1uYQ==",
    alt: "imagen modelo ACI-002",
    model: "ACI-002",
    color: "amarillo",
    grabado: true,
    grams: 3,
    garantia: true,
  },
  {
    category: "cintillo",
    image: "/modelos/cintillos/aci-003.jpeg",
    linkProduct:
      "https://www.instagram.com/p/C2tJPCCNEXR/?igsh=MTRlYWo2OG4xMXZ4ag==",
    alt: "imagen modelo ACI-003",
    model: "ACI-003",
    color: "amarillo",
    grabado: true,
    grams: 4,
    garantia: true,
  },
];
export default function Shop() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Button />
      <div className="mb-10">
        <InstructionColors />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {rings.map((model, index) => {
          return <Card key={index} product={model} />;
        })}
      </div>
      <h1 className="text-zinc text-lg mt-10">Conoce nuestros cintillos</h1>
      <Button />
    </div>
  );
}
