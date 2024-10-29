import React from 'react'
import '../Component/Contact.css'
import { FaAddressCard } from "react-icons/fa6";
import { IoMailOpenSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";



export default function Contact() {
  return (
    <div>
        <div className='contact'>
            <div className='contact-title'>
                <h1>get in <span style={{color:"#ffb400"}}>touch</span></h1>
                <span className='c-title-bg'>contact</span>
            </div>
            <div className='row container mx-5'>
                <div className='col-lg-4 col-md-12'>
                    <h3>Don't be shy !</h3>
                    <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <div className='card2'>
                        <div className='icon'><FaAddressCard /></div>
                        <div className='content'>
                        <h5>Address Point</h5>
                        <p>123 Stree New York City , United States Of America 750065.</p>     
                        </div>
                    </div>
                    <div className='card2'>
                        <div className='icon'><IoMailOpenSharp /></div>
                        <div className='content'>
                        <h5>mail me</h5>
                        <p>aliaminamir77</p>

                        </div>
                    </div>
                    <div className='card2'>
                        <div className='icon'><FaPhone /></div>
                        <div className='content'>
                        <h5>call me</h5>
                        <p>+923120848892</p>
                        </div>
                    </div>
                    <div className='social'>
                        <div className='s-icon'> <FaFacebook /></div>
                        <div className='s-icon'><FaSquareXTwitter /></div>
                        <div className='s-icon'><FaLinkedin /></div>
                        <div className='s-icon'><FaInstagramSquare /></div>
                    </div>

                </div>
                <div className='col-lg-8 col-md-12'>
                    <form action="">

                    <div className='input1'>
                        <input type="text" name="" id="" placeholder='YOUR NAME' required />
                        <input type="email" name="" id="" placeholder='YOUR EMAIL' required />
                    </div>
                    <div className='input2'>
                        <input type="text" name="" id="" placeholder='YOUR SUBJECT' required />
                    </div>
                    <div>
                        <textarea name="" id="" placeholder='YOUR MESSAGE' required></textarea>
                    </div>
                    <button className='button btn' type="submit">
                        <h2 className='text-center'>SEND MESSAGE.. </h2>
                        <div className='icon'><FiMessageCircle /></div>
                    </button>
                    </form>

                </div>

            </div>

        </div>
      
    </div>
  )
}
