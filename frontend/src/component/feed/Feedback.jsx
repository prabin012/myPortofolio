import '../feed/feeds.css'

const Feedback = () => {
  return (
    <div className='feeds'>
      <div className="blog3">
        
        <div className="blogcontainerJoin">
          <div className="blogContainerImage">
            <img src="assests/images/p10.jpg" alt="" />
            </div>
           <div className="JoinUs">
            <span className="welcomeUser">Welcome User !!</span>
            <span className="joinGreet">Join us for More Update ! <br /></span>
            <p className="descripy">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, rem possimus! Mollitia eius inventore sapiente eveniet deleniti placeat rem a.</p>
            <div className='j1'>
            <input type="email" className="joinEmail" placeholder='example@gmail.com'/>
            <button className="joinMe">Join me</button>
            </div>
            
          </div>
        
         
        </div>
      </div>
    </div>
  )
}

export default Feedback
