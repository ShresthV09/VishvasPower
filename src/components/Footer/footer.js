import React from 'react'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';
import './footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='LogoFooter'>
            <img src='https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680694008/VishvasWebsite/hvktutgondilxrb1n9yc.png'alt='logo'/>
            <h4>Vishvas Power Engineering Services </h4>
            </div>
        <div className='sbFooter sectionPadding'>
        
            <div className='sbFooterLinks'>
            <div className='sbFooterLinksDiv'>

            <Link to='/'><h4 style={{color:"#fff" , fontWeight:"700" ,fontSize:"18px"}} > VPES</h4  ></Link>
                <Link to='/'>
                    <p>Home</p>
                </Link>

                <Link to='/Gurukul'>
                    <p>Gurukul</p>
                </Link>

                <Link to='/ContactUs'>
                    <p>Contact Us</p>
                </Link>

            </div>
            <div className='sbFooterLinksDiv'>

            <Link to='/About'> <h4 style={{color:"#fff" , fontWeight:"700" ,fontSize:"18px"}} >About Us</h4  ></Link>
                <Link to='/StrengthPlant'>
                    <p>Plant</p>
                </Link>

                <Link to='/StrengthProcess'>
                    <p>Process</p>
                </Link>

                <Link to='/StrengthPeople'>
                    <p>People</p>
                </Link>

            </div>

            <div className='sbFooterLinksDiv'>
            <Link to='/Products'> <h4 style={{color:"#fff" , fontWeight:"700" ,fontSize:"18px"}} >Products</h4  ></Link>
                <Link to='/TractionPower'>
                    <p>Traction Power Transformer</p>
                </Link>

                <Link to='/AutoTransformer'>
                    <p>AutoTransformers</p>
                </Link>

                <Link to='/Special'>
                    <p>Special Transformers</p>
                </Link>

            </div>

            <div className='sbFooterLinksDiv'>
                <Link to='/OurServices'><h4 style={{color:"#fff" , fontWeight:"700" ,fontSize:"18px"}} >Services</h4  ></Link>
                <Link to='/Repair'>
                    <p>Remanufacturing and Repairing</p>
                </Link>

                <Link to='/POH'>
                    <p>POH</p>
                </Link>

                <Link to='/EPC'>
                    <p>EPC</p>
                </Link>

            </div>

            <div className='sbFooterLinksDiv'>
                <h4>Follow Us On</h4>
                <div className='SocialMedia'>
                    <SocialIcon url='https://www.linkedin.com/company/ourfirstmillion/'/>
                    <SocialIcon url='https://instagram.com/vishvaspower?igshid=YmMyMTA2M2Y='/>

                </div>

            </div>
        </div>
        <hr/>
        <div className='sbFooterBelow'>
        <div className='sbFooterCopyright'>
            <p>
                @{new Date().getFullYear()} Vishvas Power Engineering Services Pvt Ltd , All Rights Reserved
            </p>
        </div>
       
        <div className='sbFooterBelowLinks'>
            <Link to='https://www.linkedin.com/in/shresth-verma009/'><div><p>Developed By <span>@Shresth Verma</span></p></div></Link>
        </div>
        </div>


        </div>
    </div>
  )
}

export default Footer