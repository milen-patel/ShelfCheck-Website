import React from 'react';
import {Link} from 'react-router-dom';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import Logo from '../include/shelfCheckWhiteLogo.png'
import PlayBadge from "../include/PlayBadge.png";
import AppleBadge from "../components/AppleBadge";
import '../styles/NewHomePageStyle.css';

// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

class NewHomePage extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={3}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true)
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          // onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', flexDirection:'column',alignItems: 'center', justifyContent: 'center' }}
		>
          <img src={Logo} style={{ width: '50%' }} />

          <div style={{backgroundColor: "#7256f399", padding: "2%", marginTop: "5%", marginLeft: "20%", marginRight: "20%", borderRadius: 25, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
		        <p style={{color:'#fff', fontSize: 22, lineHeight: 1.75, fontWeight: "bold"}}>shelfCheck is a novel data solutions company providing consumer-sourced reports of current store inventories. Inspired by the country-wide shortages of common household goods due to the the COVID-19 pandemic, our founders sought to develop a tool that could make one-stop shopping a reality.  </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          // onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
          <div style={{backgroundColor: "#68ADEB", width: "40%", height: "40%", borderRadius: 35, display: 'flex', flexDirection: "column", justifyContent: 'space-around'}}>
            <p style={{fontSize: 30, padding: "5%", color: "white"}}>Create a shopping list to test us out</p>

            <Link to="/search">
              <button type="button" className="TryButton">Create a List</button>
            </Link>

            <div className="AppLinksBar">
              <a href="https://apps.apple.com/us/app/shelfcheck-shop-smarter/id1514416220">
                <AppleBadge />
              </a>
              <img src={PlayBadge} alt="Google Play Badge" className="PlayBadge" />
            </div>
          </div>

        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => this.parallax.scrollTo(0)}>
          <img src={url('clients-main')} style={{ width: '40%' }} />
        </ParallaxLayer>
      </Parallax>
    )
  }
}
export default NewHomePage;
// second foreground parallax layer content: <img src={url('bash')} style={{ width: '40%' }} />


// this site has the way to put all the css into a file
// https://www.w3schools.com/react/react_css.asp