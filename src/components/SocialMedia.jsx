
import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
          <a href='https://twitter.com/gus_hawke' target='blank'>
            <div>
              <BsTwitter  />
            </div>
          </a>
          <a href='https://www.facebook.com/aha1719/' target='blank'>
            <div>
              <FaFacebookF />
            </div>
          </a>
          <a href='https://www.instagram.com/angus__hawke/' target='blank'>
            <div>
              <BsInstagram />
            </div>
          </a>
    </div>
  )
}

export default SocialMedia