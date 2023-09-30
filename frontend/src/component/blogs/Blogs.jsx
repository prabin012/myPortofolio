import '../blogs/blogs.css'
import Footers from '../footer/Footers'

const Blogs = () => {
  return (
    <div>
      <div className="blog">
        <span className='blogGreet'>Explore The Colorfull Worlds</span>
      </div>
      <div className="bloghalf">
        <span className="grt">A Wonderfull Advantures !</span>
      </div>
      <div className="blogexit">
        <div className="blogCards">
          <div className="cardItem">
            <img src="assests/images/b3.jpg" alt="" />
            <span className="track">Mountain Tracking</span>
            <span className="desc">A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans. Some travel to learn more while some travel to take a break from their life. No matter the reason, travelling opens a big door for us to explore the world beyond our imagination and indulge in many things.</span>
            
            <button className="explore">Explore --</button>
          </div>
          <div className="cardItem">
            <img src="assests/images/b2.jpg" alt="" />
            <span className="track">Mountain Tracking</span>
            <span className="desc">A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans. Some travel to learn more while some travel to take a break from their life. No matter the reason, travelling opens a big door for us to explore the world beyond our imagination and indulge in many things.</span>
            
            <button className="explore">Explore --</button>
          </div>
         
        
        </div>
      </div>

      <div className="blog2">
        <span className='grrt'>More Events !</span>
        <div className="blogcontainer">
        <div className="cardItem cardItem-1">
            <img src="assests/images/b3.jpg" alt="" />
            <span className="track">Mountain Tracking</span>
            <span className="desc">A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans. Some travel to learn more while some travel to take a break from their life. No matter the reason, travelling opens a big door for us to explore the world beyond our imagination and indulge in many things.</span>
            
            <button className="explore">Explore --</button>
          </div>
          <div className="cardItem cardItem-1">
            <img src="assests/images/b6.jpg" alt="" />
            <span className="track">Mountain Tracking</span>
            <span className="desc">A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans. Some travel to learn more while some travel to take a break from their life. No matter the reason, travelling opens a big door for us to explore the world beyond our imagination and indulge in many things.</span>
            
            <button className="explore">Explore --</button>
          </div>
          <div className="cardItem cardItem-1">
            <img src="assests/images/b5.jpg" alt="" />
            <span className="track">Mountain Tracking</span>
            <span className="desc">A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans. Some travel to learn more while some travel to take a break from their life. No matter the reason, travelling opens a big door for us to explore the world beyond our imagination and indulge in many things.</span>
            
            <button className="explore">Explore --</button>
          </div>
         
        </div>
      </div>
      <div className="blog3">
        <span className='grrt  grrt11'>Upcoming Travells !</span>
        <div className="blogcontainer">
        <div className="cardItem cardItem-1">
            <img src="assests/images/b2.jpg" alt="" />
            <span className="track">Mountain Tracking</span>
            <span className="desc">A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans. Some travel to learn more while some travel to take a break from their life. No matter the reason, travelling opens a big door for us to explore the world beyond our imagination and indulge in many things.</span>
            
            <button className="explore">Explore --</button>
          </div>
          <div className="cardItem cardItem-1">
            <img src="assests/images/b5.jpg" alt="" />
            <span className="track">Mountain Tracking</span>
            <span className="desc">A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans. Some travel to learn more while some travel to take a break from their life. No matter the reason, travelling opens a big door for us to explore the world beyond our imagination and indulge in many things.</span>
            
            <button className="explore">Explore --</button>
          </div>
          <div className="cardItem cardItem-1">
            <img src="assests/images/b6.jpg" alt="" />
            <span className="track">Mountain Tracking</span>
            <span className="desc">A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans. Some travel to learn more while some travel to take a break from their life. No matter the reason, travelling opens a big door for us to explore the world beyond our imagination and indulge in many things.</span>
            
            <button className="explore">Explore --</button>
          </div>
         
        </div>
      </div>


      
      <Footers/>
    
    </div>
  )
}

export default Blogs
