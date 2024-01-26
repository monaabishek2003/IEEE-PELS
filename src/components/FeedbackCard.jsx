import { star  } from "../assets/icons"

const FeedbackCard = ({content,name}) => {
  return (
    <div className='flex justify-center items-center flex-col bg-light-shade p-5 rounded-xl'>
      
      <p className='mt-6 max-w-sm text-center info-text'>{content}</p>
      <div className='mt-3 flex justify-center items-center gap-2.5'>
      <img
          src={star}
          width={24}
          height={24}
          alt='rating star'
          className='object-contain m-0'
        />
      </div>
      <h3 className='mt-1 font-palanquin text-3xl text-center '>
        {name}
      </h3>
    </div>
  )
}

export default FeedbackCard