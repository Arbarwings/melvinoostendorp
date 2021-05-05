import React from 'react';
import { scroller } from 'react-scroll';
import Icon from '@mdi/react';
import {
  mdiGithub,
  mdiLinkedin,
  mdiInstagram,
  mdiEmailOutline,
  mdiEarth,
  mdiMusicNote,
  mdiLaptop,
  mdiCodeJson,
} from '@mdi/js';
import Layout from 'components/layout';
import SEO from 'components/seo';
import Hero from 'components/hero';
import Section from 'components/section';
import Container from 'components/container';
import Title from 'components/title';
import Button from 'components/button';
import Columns from 'components/columns';
import FlexCard from 'components/flexCard';
import Timeline from 'components/timeline';
import Fact from 'components/fact';
// import PortfolioItem from 'components/portfolioItem';
import Particles from 'components/particles';
import { author, companyName, socialLinks, contact } from 'data/config';

import melvin324 from 'assets/images/melvin-324.png';
// import portfolioCoverImage from 'assets/images/portfolio-item.svg';
import webDevelopmentIcon from 'assets/images/web_development.svg';
import microservicesIcon from 'assets/images/microservices.svg';
import teamPlayerIcon from 'assets/images/team_player.svg';

const HireMeButtonClick = () => {
  scroller.scrollTo('contact', {
    duration: 500,
    smooth: true,
    offset: -110,
  });
};

const IndexPage = () => (
  <Layout>
    <SEO />
    <Hero color={Hero.COLORS.SECONDARY} size={Hero.SIZES.FULLHEIGHT} id="home">
      <Particles />
      <Hero.Body>
        <Container className="has-text-centered">
          <img src={melvin324} alt={author} height={108} width={108} />
          <Title className="has-text-white has-text-weight-bold mt-3 mb-1" size={2}>
            {author}
          </Title>
          <span className="is-size-5 is-block">I&apos;m a Full-Stack Developer</span>
          <div className="is-block">
            <ul className="social-links">
              <li>
                <a href={socialLinks.github} target="_blank" rel="noopener">
                  <Icon path={mdiGithub} title="GitHub" size={1.3} />
                </a>
              </li>
              <li>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener">
                  <Icon path={mdiLinkedin} title="LinkedIn" size={1.3} />
                </a>
              </li>
              <li>
                <a href={socialLinks.instagram} target="_blank" rel="noopener">
                  <Icon path={mdiInstagram} title="Instagram" size={1.3} />
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`}>
                  <Icon path={mdiEmailOutline} title="Email" size={1.3} />
                </a>
              </li>
            </ul>
          </div>
          <Button color={Button.COLORS.PRIMARY} onClick={HireMeButtonClick} rounded>
            Hire me
          </Button>
        </Container>
      </Hero.Body>
      <Hero.Footer>
        <Container className="has-text-centered mouse-wrapper">
          <span>Scroll Down</span>
          <div className="mouse-icon">
            <div className="wheel" />
          </div>
        </Container>
      </Hero.Footer>
    </Hero>
    <Section id="about">
      <Container>
        <Section.Title>About Me</Section.Title>
        <Columns>
          <Columns.Column size={3} className="has-text-centered">
            <img src={melvin324} alt={author} height={150} width={150} />
          </Columns.Column>
          <Columns.Column size={9} style={{ position: 'relative' }}>
            <FlexCard triangle={FlexCard.TRIANGLE.LEFT}>
              <span>
                I&apos;m Melvin Oostendorp, a Full-Stack developer from the Netherlands. I&apos;m a
                motivated developer that wants to learn and work with the latest technologies. My
                colleagues describe me as a helpful and passionate person. My goal is to deliver
                secure and user-friendly applications.
              </span>
            </FlexCard>
          </Columns.Column>
        </Columns>
        <Columns className="mt-1">
          <Columns.Column centered>
            <Fact icon={mdiLaptop} total={51} description="Projects completed" />
          </Columns.Column>
          <Columns.Column centered>
            <Fact
              icon={mdiCodeJson}
              total={new Date().getFullYear() - 2012}
              description="Years of programming"
            />
          </Columns.Column>
          <Columns.Column centered>
            <Fact icon={mdiMusicNote} total={3741} description="Hours listened to music" />
          </Columns.Column>
          <Columns.Column centered>
            <Fact icon={mdiEarth} total={7} description="Countries visited" />
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
    <Section id="skills">
      <Container>
        <Section.Title>Skills</Section.Title>
        <Columns className="skills">
          <Columns.Column size={4}>
            <FlexCard color={FlexCard.COLORS.BLUE}>
              <img src={webDevelopmentIcon} alt="Web Development" />
              <h3>Web Development</h3>
              <p>
                I love working in JavaScript frameworks like ReactJS and create beautiful websites.
              </p>
            </FlexCard>
          </Columns.Column>
          <Columns.Column size={4}>
            <FlexCard color={FlexCard.COLORS.YELLOW}>
              <img src={microservicesIcon} alt="Microservices" />
              <h3>Microservices</h3>
              <p>
                Most of the applications I make are based on Docker with continuous integration and
                continuous delivery.
              </p>
            </FlexCard>
          </Columns.Column>
          <Columns.Column size={4}>
            <FlexCard color={FlexCard.COLORS.RED}>
              <img src={teamPlayerIcon} alt="Team Player" />
              <h3>Team Player</h3>
              <p>
                I enjoy working in a team environment, where I can share my knowledge and learn from
                others.
              </p>
            </FlexCard>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
    <Section id="experience">
      <Container>
        <Section.Title>Experience</Section.Title>
        <Columns>
          <Columns.Column>
            <Timeline>
              <Timeline.Item
                type={Timeline.Item.TYPE.EDUCATION}
                startYear={2020}
                endYear={2020}
                title="Minor"
                secondTitle="Project of a lifetime"
              >
                Hogeschool Utrecht
              </Timeline.Item>
              <Timeline.Item
                type={Timeline.Item.TYPE.EDUCATION}
                startYear={2019}
                endYear={2021}
                title="Bachelor's Degree"
                secondTitle="Information Technology"
              >
                Windesheim Flevoland
              </Timeline.Item>
              <Timeline.Item
                type={Timeline.Item.TYPE.EDUCATION}
                startYear={2017}
                endYear={2019}
                title="Associate's Degree"
                secondTitle="Software Engineering"
              >
                Windesheim Flevoland
              </Timeline.Item>
              <Timeline.Item
                type={Timeline.Item.TYPE.EDUCATION}
                startYear={2015}
                endYear={2017}
                title="MBO Level 4"
                secondTitle="Application Developer"
              >
                Deltion College Zwolle
              </Timeline.Item>
            </Timeline>
          </Columns.Column>
          <Columns.Column>
            <Timeline>
              <Timeline.Item
                type={Timeline.Item.TYPE.WORK}
                startYear="Feb 2021"
                title="Full-Stack Developer at Orangebeard"
              />
              <Timeline.Item
                type={Timeline.Item.TYPE.WORK}
                startYear="Jul 2012"
                title="Owner of Arbarwings"
              >
                I started my own company in 2012 when I was 15 years old. My main activities are
                creating and maintaining websites for all kinds of companies.
              </Timeline.Item>
              <Timeline.Item
                type={Timeline.Item.TYPE.WORK}
                startYear="Feb 2020"
                endYear="Jan 2021"
                title="Full-Stack Developer at Praegus"
              />
              <Timeline.Item
                type={Timeline.Item.TYPE.WORK}
                startYear="Sep 2019"
                endYear="Jan 2020"
                title="Hololens AR Developer Internship at Allinq"
              >
                Together with four other students, we created an image recognition app for the
                Microsoft Hololens. It can recognize the model of a specific network switch, and it
                shows the user manual to the user.
              </Timeline.Item>
              <Timeline.Item
                type={Timeline.Item.TYPE.WORK}
                startYear="Jan 2019"
                endYear="May 2019"
                title="Software Engineer Internship at bitHolla"
              >
                During my internship at bitHolla in South Korea, I mainly worked on creating
                cryptocurrency trading bots. Those bots can handle multiple exchanges, like Binance
                and BitMEX at the same time. It also supports a wide range of cryptocurrencies, like
                Bitcoin and Ethereum.
              </Timeline.Item>
              <Timeline.Item
                type={Timeline.Item.TYPE.WORK}
                startYear="Aug 2018"
                endYear="Dec 2018"
                title="Front-end Developer Internship at Mijndomein"
              >
                Together with a fellow student, we created a new funnel (ordering process) proposal
                for the Mijndomein website.
              </Timeline.Item>
            </Timeline>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
    {/* <Section id="portfolio">
      <Container>
        <Section.Title>Portfolio</Section.Title>
        <Columns>
          <Columns.Column size={4}>
            <PortfolioItem>
              <img src={portfolioCoverImage} alt="Portfolio item" />
              <PortfolioItem.Details title="Praegus.nl">Item</PortfolioItem.Details>
            </PortfolioItem>
          </Columns.Column>
        </Columns>
      </Container>
    </Section> */}
    <Section id="contact">
      <Container>
        <Section.Title>Get In Touch</Section.Title>
        <Columns centered>
          <Columns.Column size={Columns.Column.SIZES.TWOTHIRDS}>
            <p className="has-text-centered has-text-weight-medium is-size-5 mb-5">
              If you have a cool project that needs my help, job opportunity, or just want to say
              hello? Then get in touch by sending me a direct message or contact me through the
              social sites listed below.
            </p>
          </Columns.Column>
        </Columns>
        <Columns>
          <Columns.Column size={4} mobile={{ size: 12 }} centered className="contact-item">
            <a href={socialLinks.github} target="_blank" rel="noopener">
              <Icon path={mdiGithub} title="GitHub" size={1.7} />
              {companyName}
            </a>
          </Columns.Column>
          <Columns.Column size={4} mobile={{ size: 12 }} centered className="contact-item">
            <a href={socialLinks.linkedin} target="_blank" rel="noopener">
              <Icon path={mdiLinkedin} title="LinkedIn" size={1.7} />
              {author}
            </a>
          </Columns.Column>
          <Columns.Column size={4} mobile={{ size: 12 }} centered className="contact-item">
            <a href={`mailto:${contact.email}`}>
              <Icon path={mdiEmailOutline} title="Email" size={1.7} />
              {contact.email}
            </a>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  </Layout>
);

export default IndexPage;
