import React from "react";

const About = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-5xl mb-5 mt-4">Kanspekt</h1>

      <h5 className="mb-4">
        Virtual DOM — bu haqiqiy DOM ning virtual (xotiradagi) nusxasi. Ya'ni
        React brauzerning DOM bilan to‘g‘ridan-to‘g‘ri ishlamaydi. Avval
        xotirada Virtual DOM yaratadi, keyin kerakli joylarini haqiqiy DOM ga
        o‘zgartiradi. Oddiy misol Saytda quyidagi element bor:
        <h1>Hello</h1>
        React uni xotirada object sifatida saqlaydi: Bu Virtual DOM hisoblanadi.
        Diffing Algorithm — bu Virtual DOM larni solishtiradigan algoritm.
        React: Eski Virtual DOM Yangi Virtual DOMni taqqoslaydi. Keyin qayer
        o‘zgarganini topadi. Misol Oldingi holat:
        <h1>Hello</h1>
        Yangi holat:
        <h1>Hello Asadbek</h1>
        React nima qiladi? Eski Virtual DOM ni oladi Yangi Virtual DOM ni
        yaratadi solishtiradi Natijada barcha DOM ni yangilamaydi faqat textni
        o‘zgartiradi
      </h5>
    </div>
  );
};

export default About;
