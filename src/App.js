// import cardimg from "./images/imagecard.png"
import Navbar from "./components/Navbar";
import data from "./data/data";
import Card from "./components/Card";




export default function App() {

  const cards = data.map((item) => {

    return <Card key={item.id}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      country={item.location}
      title={item.title}
      price={item.price}
    />
  }

  );


  return (
    <div>
      <Navbar />
      <section className="cards-list">
        {cards}
      </section>



    </div>

  )

}

