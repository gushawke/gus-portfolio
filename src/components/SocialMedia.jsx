
import React from 'react'
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import { GoMarkGithub } from "react-icons/go";

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
          <a href='https://github.com/gushawke' target='blank'>
            <div>
            <GoMarkGithub />
            </div>
          </a>

          <a href='https://www.linkedin.com/in/gus-hawke-5a1686a3/' target='blank'>
            <div>
            <BsLinkedin />
            </div>
          </a>
          
    </div>
  )
}

export default SocialMedia