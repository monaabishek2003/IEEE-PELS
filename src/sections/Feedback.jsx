import { feedbacks } from "../constants"
import { FeedbackCard } from "../components"

const Feedback = () => {
  return (
    <section className='max-container'>
    <h3 className='font-palanquin text-center text-4xl font-bold'>
      What Our
      <span className='text-red'> Members </span>
      Say?
    </h3>
    <p className='m-auto mt-4 max-w-lg  text-center info-text'>
    Listen to authentic stories from our dedicated student members sharing their extraordinary experiences with the club.
    </p>

    <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 '>
      {feedbacks.map((Feedback, index) => (
        <FeedbackCard
          key={index}
          {...Feedback}
        />
      ))}
    </div>
  </section>
  )
}

export default Feedback