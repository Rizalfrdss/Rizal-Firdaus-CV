import React from "react"
import { Heading } from "../common/Heading"
import { organization } from "../data/dummydata"

export const Organization = () => {
  return (
    <>
      <section className='organization'>
        <div className='container'>
          <Heading title='Organization' />
          <div className='content grid3'>
            {organization.map((item) => (
              <div className='box' data-aos='flip-left'>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <p>{item.desc1}</p>
                <p>{item.desc2}</p>
                <p>{item.desc3}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
