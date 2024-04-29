"use client";
import { Image } from "@nextui-org/react";
import { useContext } from "react";
import { AdviserContext } from "../context/AdviserContext";

interface CardProps {
  product: {
    image: string;
    linkProduct: string;
    alt: string;
    model: string;
    color: string;
    price: number;
  };
}

export default function Card({ product }: CardProps) {
  const whatsapp = useContext(AdviserContext) as any;
  const handleOrderClick = () => {
    // Construir el enlace de WhatsApp con la información del producto y la imagen
    const whatsappMessage = `¡Hola! Me gustaría ordenar el modelo ${product.model} en el color ${product.color}. Precio: ${product.price},00. Más detalles del producto aquí: ${product.linkProduct}`;
    const whatsappImage = product.image; // URL de la imagen

    // Reemplaza '1234567890' con tu número de teléfono de WhatsApp
    const whatsappLink = `https://wa.me/+593${
      whatsapp.adviser.tel
    }?text=${encodeURIComponent(whatsappMessage)}&media=${encodeURIComponent(
      whatsappImage
    )}`;

    // Abrir el enlace en una nueva pestaña
    window.open(whatsappLink, "_blank");
  };

  return (
    <div>
      <div className="w-[350px] h-[350px]">
        <Image
          isZoomed
          width={2000}
          height={2000}
          src={product.image}
          alt={product.alt}
        />
      </div>
      <div className="shopFont w-[350px] ring-1 mt-2 ring-myZinc">
        <div className="px-2 py-2">
          <div className="flex justify-between">
            <h2>Modelo: {product.model}</h2>
            <h4>Precio: {product.price},00</h4>
          </div>

          <div className="flex justify-between">
            <h4>Material: {product.color}</h4>
            <button
              className="ring-1 px-2 ring-myZinc rounded-xl"
              onClick={handleOrderClick}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
