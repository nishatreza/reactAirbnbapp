// import cardimg from "./images/imagecard.png"
import Navbar from "./components/Navbar";
import data from "./data/data";
import Card from "./components/Card";
import Hero from "./components/Hero";





export default function App() {

  const cards = data.map((item) => {

    return (
      <Card
        key={item.id}
        // item={item}
        {...item}

      />
    )
  })


  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>



    </div>

  )

}

