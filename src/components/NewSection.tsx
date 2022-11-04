export default function NewSection() {
  return (
    <div className='bg-blue-gray-900 text-off-white px-5 py-7 my-5'>
      <h2 className='text-soft-orange text-4xl pb-7'>New</h2>
      <div>
        <div className='new-section-card'>
          <h3 className='new-section-card-header'>Hydrogen VS Electic Cars</h3>
          <p className='new-section-card-text'>
            Will hydrogen fueled cars ever catch up to EVs?
          </p>
        </div>
        <div className='new-section-card'>
          <h3 className='new-section-card-header'>
            The Downside of AI Artistry
          </h3>
          <p className='new-section-card-text'>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div className='new-section-card border-none mb-0'>
          <h3 className='new-section-card-header'>Is VC Funding Drying Up?</h3>
          <p className='new-section-card-text p-0'>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </div>
  )
}
