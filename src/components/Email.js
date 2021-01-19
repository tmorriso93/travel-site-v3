import React from 'react'
import './Email.css'
import { Button } from './Button';

function Email() {
    return (
        <div className="footer-container">
            <div className="email-container">
   <section className='footer-subscription'>
     <p className='footer-subscription-heading'>
       Send us an Email to get started on your next adventure
     </p>
     <p className='footer-subscription-text'>
       
     </p>
     <div className='input-areas'>
       <form className="email-info">
         <input
           className='footer-input'
           name='email'
           type='email'
           placeholder='Email'
         />
         <Button className='btn--outline btn-send'>Send</Button>
       </form>
     </div>
   </section>
   </div>
        </div>
    )
}

export default Email
