import React from 'react';
import {Link} from 'react-router-dom';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import Logo from '../include/shelfCheckWhiteLogo.png'
import PlayBadge from "../include/PlayBadge.png";
import AppleBadge from "../components/AppleBadge";
import '../styles/NewHomePageStyle.css';
import TeamPersonVisualizer from './TeamPersonVisualizer.js';
import FacebookLogo from '../include/Facebook.png';
import InstaLogo from '../include/Instagram.png';
import LinkedLogo from '../include/Linkedin.png';
import Earth from '../include/Earth.png'


// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

class NewHomePage extends React.Component {
  render() {
    return (
		<div className="HomePageContainer">
      <Parallax ref={ref => (this.parallax = ref)} pages={5}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#4CD6DE' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
        <ParallaxLayer offset={0.35} speed={0.1} style={{ width:'100%', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        </ParallaxLayer>


        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} alt="" style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} alt="" style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} alt="" style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} alt="" style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} alt="" style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} alt="" style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} alt="" style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} alt="" style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} alt="" style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} alt="" style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} alt="" style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.8} speed={-0.2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <img src={Earth} alt="" style={{ width: '60%' }} />
        </ParallaxLayer>


        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{ display: 'flex', flexDirection:'column',alignItems: 'center', justifyContent: 'center' }}
		>
          <img src={Logo} alt="" style={{ width: '50%' }} />
          <div style={{backgroundColor: "", padding: "2%", marginTop: "5%", marginLeft: "20%", marginRight: "20%", borderRadius: 25, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
					<h1 style={{color:"white"}}> Shop Smarter </h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1.0}
          style={{ display: 'flex', flexDirection:'column',alignItems: 'center', justifyContent: 'center' }}
		>
          <div style={{backgroundColor: "#7256f399", padding: "2%", marginTop: "5%", marginLeft: "20%", marginRight: "20%", borderRadius: 25, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
					<h1 style={{color:"white"}}> What We Do </h1>
					<hr style={{width:"40%"}} />
		        <p style={{color:'#fff', fontSize: 22, lineHeight: 1.75, fontWeight: "bold"}}>shelfCheck is a novel data solutions company providing consumer-sourced reports of current store inventories. Inspired by the country-wide shortages of common household goods due to natural disasters and pandemics, our team set out to make one-stop shopping a reality. </p>
					<iframe width="560" height="315" style={{borderRadius:"15px"}} src="https://www.youtube.com/embed/Z08koGatwLw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="promoVid"></iframe>

          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
          <div style={{backgroundColor: "#68ADEB", width: "40%", height: "40%", borderRadius: 35, display: 'flex', flexDirection: "column", justifyContent: 'space-around'}}>
            <p style={{fontSize: 30, padding: "5%", color: "white"}}>Dont Believe Us? Try it Yourself</p>

            <Link to="/search">
              <button type="button" className="TryButton">Search Online</button>
            </Link>

            <div className="AppLinksBar">
              <a href="https://apps.apple.com/us/app/shelfcheck-shop-smarter/id1514416220">
                <AppleBadge />
              </a>
			  <a href="https://play.google.com/store/apps/details?id=com.shelfcheck.shelfcheck">
				<img src={PlayBadge} alt="Google Play Badge" className="PlayBadge" />
              </a>
            </div>
          </div>

        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => this.parallax.scrollTo(0)}>
				<div className="teamHolder">
				<h1> Meet The Team </h1>
				<div className="team">
					<TeamPersonVisualizer name = "Anthony Guzzo" role = "Design, Product #Rice"/>
					<TeamPersonVisualizer name = "Rohit Jain" role = "Growth, Product #Duke"/>
					<TeamPersonVisualizer name = "Viraj Shah" role = "Growth, Business #UNC"/>
					<TeamPersonVisualizer name = "James Taylor" role = "Engineer, Backend and Mobile #Duke"/>
					<TeamPersonVisualizer name = "Milen Patel" role = "Engineer, Web-Developement #UNC"/>
				</div>
				</div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => this.parallax.scrollTo(0)}>
				<div className="SocialDiv">
				<h1> Follow Our Journey </h1>
				<div className="SocialIcons">
					<a href="https://www.instagram.com/shelfcheck.io/"><img src={InstaLogo} alt="IGLogo" className="SocialLogo"/></a>
					<a href="https://www.facebook.com/shelfCheck.io/"><img src={FacebookLogo} alt="FBLogo" className="SocialLogo"/></a>
					<a href="https://www.linkedin.com/company/shelfcheck/"><img src={LinkedLogo} alt="LILogo" className="SocialLogoLI"/></a>
				</div>
				<hr style={{width:"40%", color:"black"}} />

				<div className="FooterButtons">
				<a href="mailto:contact@shelfcheck.io">
					<button type="button" className="ContactButton"> Contact Us</button>
				</a>
				<Link to="/coffee">
					<button type="button" className="ContactButton"> Buy A Coffee</button>
				</Link>
				</div>

				<div className="footer">
					<Link to="/privacy" style={{textDecoration:'none'}}>
						<p className="policytext">Privacy Policy</p>
					</Link>
					<Link to="/terms" style={{textDecoration:'none'}}>
						<p className="policytext">Terms and Conditions</p>
					</Link>
				</div>
				</div>
        </ParallaxLayer>
      </Parallax>
   </div>
    )
  }
}
export default NewHomePage;
// second foreground parallax layer content: <img src={url('bash')} style={{ width: '40%' }} />


// this site has the way to put all the css into a file
// https://www.w3schools.com/react/react_css.asp
