import React, { useState, useEffect } from "react";

// Definimos cuanto cuesta el oro
const goldPrice = 118;
const goldWhitePrice = 142;
const goldRosePrice = 142;

// Generador simple de IDs únicos
let idCounter = 0;
function uniqueId(prefix = "id") {
  idCounter += 1;
  return `${prefix}-${idCounter}`;
}

interface FormProps {
  category: string;
  grams: number;
  setPrecio: (precio: number) => void;
  setColorSeleccionado: (color: string) => void;
}

const Form: React.FC<FormProps> = ({
  category,
  grams,
  setPrecio,
  setColorSeleccionado,
}) => {
  const [seleccionado, setSeleccionado] = useState<string>("silver");
  const [precio, setPrecioLocal] = useState<number | null>(null);

  useEffect(() => {
    obtenerPrecio();
    actualizarColorSeleccionado(seleccionado); // Llamar a la función para actualizar color seleccionado
  }, [seleccionado]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeleccionado(event.target.value);
  };

  const actualizarColorSeleccionado = (value: string) => {
    switch (value) {
      case "silver":
        setColorSeleccionado("Plata");
        break;
      case "gold":
        setColorSeleccionado("Oro amarillo");
        break;
      case "goldWhite":
        setColorSeleccionado("Oro blanco");
        break;
      case "goldRose":
        setColorSeleccionado("Oro rosa");
        break;
      default:
        setColorSeleccionado("");
        break;
    }
  };

  const obtenerPrecio = () => {
    let price = 0;

    switch (seleccionado) {
      case "silver":
        if (category === "compromiso" || category === "cintillo") {
          price = 80;
        } else if (category === "matrimonio") {
          price = 150;
        } else {
          price = 200;
        }
        break;
      case "gold":
        price = grams * goldPrice;
        break;
      case "goldWhite":
        price = grams * goldWhitePrice;
        break;
      case "goldRose":
        price = grams * goldRosePrice;
        break;
      default:
        price = 0;
    }

    setPrecioLocal(price);
    setPrecio(price);
  };

  const idSilver = uniqueId("material");
  const idGold = uniqueId("material");
  const idGoldWhite = uniqueId("material");
  const idGoldRose = uniqueId("material");

  return (
    <div>
      <form id="formulario" className="flex gap-x-1 items-center">
        <div className="relative">
          <input
            type="radio"
            id={idSilver}
            name="material"
            value="silver"
            checked={seleccionado === "silver"}
            onChange={handleChange}
            className="hidden"
          />
          <label
            htmlFor={idSilver}
            className={`cursor-pointer w-6 h-6 flex items-center justify-center rounded-lg border-2  ${
              seleccionado === "silver" ? " border-myZinc " : "border-gray-300 "
            }`}
          >
            <div className="w-4 h-4 rounded-md bg-gradient-to-br from-gray-300 to-gray-400 border-myZinc"></div>
          </label>
        </div>

        <div className="relative">
          <input
            type="radio"
            id={idGold}
            name="material"
            value="gold"
            checked={seleccionado === "gold"}
            onChange={handleChange}
            className="hidden"
          />
          <label
            htmlFor={idGold}
            className={`cursor-pointer w-6 h-6 flex items-center justify-center rounded-lg border-2  ${
              seleccionado === "gold" ? " border-myZinc " : "border-gray-300"
            }`}
          >
            <div className="w-4 h-4 rounded-md bg-gradient-to-br from-yellow-800 to-yellow-300 border-myZinc"></div>
          </label>
        </div>

        <div className="relative">
          <input
            type="radio"
            id={idGoldWhite}
            name="material"
            value="goldWhite"
            checked={seleccionado === "goldWhite"}
            onChange={handleChange}
            className="hidden"
          />
          <label
            htmlFor={idGoldWhite}
            className={`cursor-pointer w-6 h-6 flex items-center justify-center rounded-lg border-2 ${
              seleccionado === "goldWhite"
                ? " border-myZinc "
                : "border-gray-300"
            }`}
          >
            <div className="w-4 h-4 rounded-md bg-gradient-to-br from-gray-800 to-gray-300 border-myZinc"></div>
          </label>
        </div>
        <div className="relative">
          <input
            type="radio"
            id={idGoldRose}
            name="material"
            value="goldRose"
            checked={seleccionado === "goldRose"}
            onChange={handleChange}
            className="hidden"
          />
          <label
            htmlFor={idGoldRose}
            className={`cursor-pointer w-6 h-6 flex items-center justify-center rounded-lg border-2  ${
              seleccionado === "goldRose"
                ? " border-myZinc "
                : "border-gray-300"
            }`}
          >
            <div className="w-4 h-4 rounded-md">
              <img
                className="rounded-md"
                src="https://media.istockphoto.com/id/949916150/vector/pink-rose-gradients-collection-for-design.jpg?s=612x612&w=0&k=20&c=AcYe3JbsjsDcLsLsOcbDGGYEdxnaeqFhgaPSFdUxzkQ="
              ></img>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Form;