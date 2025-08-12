const Heading=({Resume})=> {
  return (
    <>
    <section className="Heading-section p-5">
            <div className="Heading w-full text-center text-2xl md:text-4xl text-secondary inline-flex gap-6 items-center justify-center">
               
              {/* <Rectangle /> */}
              <h1 className="text-3xl pb-4 md:text-6xl font-extrabold text-center
                   bg-yellow-300  text-yellow-300 bg-clip-text
                   bg-[length:200%_auto] animate-an">{Resume}</h1>
              {/* <Rectangle /> */}
            </div>
              </section>
    </>
  )
}

export default Heading