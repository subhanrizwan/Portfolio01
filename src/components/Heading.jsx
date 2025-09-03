import Rectangle from "./Rectangle.jsx";
const Heading = ({ Resume, Portfolio, Skills, Services, Education }) => {
  return (
    <>
      <section className="p-5 mb-0 Heading-section md:mb-8">
        <div className="inline-flex items-center justify-center w-full gap-6 text-2xl text-center Heading md:text-4xl text-secondary">
          <Rectangle />
          <h1
            className="text-2xl pb-4 md:text-6xl font-extrabold text-center
                   bg-yellow-300  text-yellow-300 bg-clip-text
                   bg-[length:200%_auto] animate-an"
          >
            {Resume}
            {Portfolio}
            {Skills}
            {Services}
            {Education}
          </h1>
          <Rectangle />
        </div>
      </section>
    </>
  );
};

export default Heading;
