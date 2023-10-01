import React from 'react';
import { publish } from '../constants'

const Elearning = () => {
  return (
  <section
  id="elearning"
  >
    {/* banner */}
    <div className=" pt-8">
by <div className=" flex flex-row gap-4">
  {
    publish.map((item) => (
      <div key={item.name}>
<p>{item.name}</p>
    <p>{item.date}</p>
    <p>{item.comments}</p>
      </div>
    ))
  }
</div>
    </div>
  </section>
  )
}

export default Elearning
