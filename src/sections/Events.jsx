import { events } from "../constants"
import { EventCard } from "../components"

const  Event = () => {
  return (
    <section 
      id="events" 
      className="max-container max-sm:mt-12 min-h-screen "
    >
      <div 
        className="flex flex-col justify-start items-center p-3 gap-5"
      >
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className='text-red'> Events </span> 
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-lg font-semibold">
        Powering Up Passion: Discover Our Eventful Journey
        </p>
      </div>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {events.map((product) => (
          <EventCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default Event