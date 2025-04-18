import React from "react";

const Facts = () => {
  const factItems = [
    {
      id: 1,
      title: "Mayor Seguridad en el Camino",
      subtitle: "Evita accidentes innecesarios",
      description:
        "Unas llantas bien cuidadas ofrecen mejor tracción, estabilidad y frenado, reduciendo considerablemente el riesgo de accidentes, especialmente en condiciones difíciles como lluvia o curvas cerradas.",
      image: "/src/assets/facts/tire_fact_left.png", // Reemplaza con tu imagen
    },
    {
      id: 2,
      title: "Mantenimiento Preventivo",
      subtitle: "Para Mayor Durabilidad",
      description:
        "El cuidado regular de tus llantas puede extender su vida útil hasta un 20%",
      image: "/src/assets/facts/tire_fact_middle.png", // Reemplaza con tu imagen
    },
    {
      id: 3,
      title: "Ahorro de Dinero",
      subtitle: "Menos desgaste, más kilómetros",
      description:
        "Realizar alineaciones, balanceos y rotaciones periódicas prolonga la vida útil de tus llantas y evita gastos innecesarios por reemplazos prematuros.",
      image: "/src/assets/facts/tire_fact_right.png", // Reemplaza con tu imagen
    },
  ];

  return (
    <section className="flex h-screen">
      {factItems.map((item) => (
        <div
          key={item.id}
          className="relative w-1/3 h-full overflow-hidden group"
        >
          {/* Imagen de fondo */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover brightness-90 group-hover:brightness-50 group-hover:scale-105 transition-all duration-500"
          />

          {/* Contenido textual */}
          <div className="absolute inset-0 flex flex-col items-center justify-top p-8 pt-30 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
            <h3 className="font-Teko text-4xl text-white mb-4">{item.title}</h3>
            <p className="font-Teko text-2xl text-[#FFC108] mb-6">
              {item.subtitle}
            </p>
            <p className="font-Montserrat text-lg text-white max-w-md">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Facts;
