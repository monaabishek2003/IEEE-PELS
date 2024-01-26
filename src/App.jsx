import { Navbar } from "./components"
import { Hero, About, Events, Feedback,Contact } from "./sections"


function App() {

  return (
    <main className="relative">
      <Navbar/>
      <section className="lg:pl-4 xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <About/>
      </section>
      <section className="padding bg-light-shade">
        <Events/>
      </section>
      <section className="padding">
        <Feedback/>
      </section>
      <section className="bg-black padding-x pt-6 pb-4">
        <Contact/>
      </section>
    </main>
  )
}

export default App
