import '../certificate/certificate.css'

import {UserCertificate} from '../../dummy'

const Certificate = () => {
  return (
    <div>
      <div className="certificate">
      <span className="aboutTittle certificateTittle">Cetificate !</span>
      <div className="certificateItems">
        {
          UserCertificate.map((c)=>{
            return (
              <img src={c.image} alt="" className="certifi" />
            )
          })
        }
      </div>
        
      </div>
    </div>
  )
}

export default Certificate
