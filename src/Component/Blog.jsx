import React from 'react'
import '../Component/Blog.css'
import blog1 from '../Images/blog-1.avif'
import blog2 from '../Images/blog-2.avif'
import blog3 from '../Images/blog-2.avif'
import blog4 from '../Images/blog-4.avif'
import blog5 from '../Images/blog-5.avif'
import blog6 from '../Images/blog-6.avif'


export default function Blog() {

  const blog =[
    {
      img : blog1,
      h : "How to Own Your Audience by Creating an Email List",
      dis : "Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack b"
    },
    {
      img : blog2,
      h : "How to Own Your Audience by Creating an Email List",
      dis : "Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack b"
    },
    {
      img : blog3,
      h : "How to Own Your Audience by Creating an Email List",
      dis : "Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack b"
    },
    {
      img : blog4,
      h : "How to Own Your Audience by Creating an Email List",
      dis : "Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack b"
    },
    {
      img : blog5,
      h : "How to Own Your Audience by Creating an Email List",
      dis : "Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack b"
    },
    {
      img : blog6,
      h : "How to Own Your Audience by Creating an Email List",
      dis : "Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack b"
    }
  ]
  return (
    <div>
        <div className='blog'>
            <div className='blog-title'>
                <h1>my <span style={{color:"#ffb400"}}>bolg</span></h1>
                <span className='b-title-bg'>posts</span>
            </div>
            <div>
              <div className='blog-box row container'>
                {
                  blog.map((i,index) =>(

                <div className='col-4' key={index}>
                <div className='image'>
                  <img src={i.img} alt="" />
                </div>
                <div className='box-detail'>
                  <h5>{i.h}</h5>
                  <p>{i.dis}</p>
                </div>

                </div>
                  ))
                }

              </div>
            </div>

        </div>
      
    </div>
  )
}
