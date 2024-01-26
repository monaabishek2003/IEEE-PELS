

const EventCard = ({imgURL,title,content}) => {
  return (
    <div className="flex flex-1 flex-col  items-center w-full max-sm:w-full bg-shade p-5 rounded-lg">
      <img src={imgURL} alt={title} className="w-[282px] h-[282px]"/>
      
      <h3 className="mt-2 text-2xl leading-normal  font-semibold font-palanquin">
        {title}
      </h3>
      <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
        {content}  
      </p>
    </div>
  )
}

export default EventCard