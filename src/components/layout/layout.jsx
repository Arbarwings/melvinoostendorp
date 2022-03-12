import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Container from 'components/container';
import { author, companyName } from 'data/config';
import logo from 'assets/images/logo.svg';
import Navbar from './navbar';
import Footer from './footer';
import ScrollToTop from './scrollToTop';

import './layout.scss';

function Layout({ children }) {
  const node = useRef();
  const [isToggled, setToggled] = useState(false);
  const toggleChange = () => setToggled(!isToggled);

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setToggled(false);
  };

  useEffect(() => {
    if (isToggled) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isToggled]);

  return (
    <>
      <div ref={node}>
        <Navbar fixed={Navbar.FIXED.TOP} active={isToggled}>
          <Container>
            <Navbar.Brand onClick={toggleChange}>
              <img src={logo} alt="Logo" width={120} />
              <Navbar.Burger />
            </Navbar.Brand>
            <Navbar.Container position={Navbar.Container.POSITION.END}>
              <Navbar.Menu>
                <Navbar.Item to="home">Home</Navbar.Item>
                <Navbar.Item to="about">About</Navbar.Item>
                <Navbar.Item to="skills">Skills</Navbar.Item>
                <Navbar.Item to="experience">Experience</Navbar.Item>
                {/* <Navbar.Item to="portfolio">Portfolio</Navbar.Item> */}
                <Navbar.Item to="contact">Contact</Navbar.Item>
              </Navbar.Menu>
            </Navbar.Container>
          </Container>
        </Navbar>
      </div>
      <main>{children}</main>
      <Footer className="has-text-centered">
        © {new Date().getFullYear()} {companyName} | Designed and coded with ❤️ by {author} |{' '}
        <a href="/privacy_policy.pdf" target="_blank" rel="noopener">
          Privacy Policy
        </a>
      </Footer>
      <ScrollToTop />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
