import React from "react";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import "./index.scss";

const Landing: React.FC = () => {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Soroban is a smart contracts platform that is designed with purpose and built to perform. The Futurenet has launched! Start experimenting now!"
        />
        <meta
          property="og:description"
          content="Soroban is a smart contracts platform that is designed with purpose and built to perform. The Futurenet has launched! Start experimenting now!"
        />
        <meta
          name="twitter:description"
          content="Soroban is a smart contracts platform that is designed with purpose and built to perform. The Futurenet has launched! Start experimenting now!"
        />
      </Head>

      <main className="Landing">
        <Hero />
        <Designed />
        <Learn />
        <GettingStarted />
        <Earn />
        <SCF />
        <Soroban />
        <MediaSection />
        <Footer />
      </main>
    </Layout>
  );
};

const GettingStartedCard = ({ index, title, subtitle, href }) => (
  <a className="GettingStartedCard" href={href}>
    {index && <p className="GettingStartedCard__index">{index}</p>}

    <p className="GettingStartedCard__title">{title}</p>

    <p className="GettingStartedCard__subtitle">{subtitle}</p>

    <div className="GettingStartedCard__icon">
      <img
        className="GettingStartedCard__unactive"
        src="/img/landing/arrow-black.svg"
        alt="arrow"
      />
      <img
        className="GettingStartedCard__active"
        src="/img/landing/arrow-white.svg"
        alt="arrow"
      />
    </div>
  </a>
);

const GettingStarted = () => (
  <div className="GettingStarted">
    <div className="hp-center">
      <div className="GettingStarted__cards">
        <GettingStartedCard
          title="Build a Crowdfunding Dapp"
          subtitle="Create a decentralized application for crowdfunding projects."
          href="/docs/category/crowdfund"
          index={undefined}
        />

        <GettingStartedCard
          title="Coming Soon: Build an AMM"
          subtitle="Develop an Automated Market Maker for decentralized exchanges."
          href={undefined}
          index={undefined}
        />

        <GettingStartedCard
          title="Coming Soon: Build an Oracle"
          subtitle="Implement an Oracle service for accessing external data on the blockchain."
          href={undefined}
          index={undefined}
        />

        <GettingStartedCard
          title="Coming Soon: Build an NFT Gallery"
          subtitle="Construct a platform to showcase and trade Non-Fungible Tokens."
          href={undefined}
          index={undefined}
        />

        <GettingStartedCard
          title="Coming Soon: Build a Multisig Wallet"
          subtitle="Create a wallet that requires multiple signatures for transactions."
          href={undefined}
          index={undefined}
        />

        <GettingStartedCard
          title="Coming Soon: Build a Smart Wallet"
          subtitle="Develop a wallet with programmable and automated functionality."
          href={undefined}
          index={undefined}
        />
      </div>
    </div>
  </div>
);

const Hero: React.FC = () => (
  <div className="Hero">
    <div className="Hero__wrapper hp-center">
      <div>
        <div className="Hero__logo">
          <img src="/img/landing/soroban-white.svg" alt="Logo" />
        </div>
        <div className="Hero__title">
          <div>Live</div>
          <div>Laugh</div>
          <div>Soroban</div>
        </div>
      </div>
      <div className="Hero__right">
        <p>
          Jumpstart your Dapp development with Soroban, a smart contracts
          platform that is designed with purpose and built to perform.
          <br />
          <br />
          Futurenet is Live! Start experimenting now!
        </p>

        <div className="Hero__btn-group">
          <a
            href="/docs/category/dapp-challenges"
            className="hp-btn hp-btn-primary"
          >
            Challenges
          </a>
        </div>
      </div>
    </div>
    <img className="Hero__img1" src="/img/landing/image-5.svg" alt="1" />
    <img className="Hero__img2" src="/img/landing/image-5.svg" alt="2" />
    <img className="Hero__img3" src="/img/landing/image-3.svg" alt="3" />

    <img className="Hero__img5" src="/img/landing/image-5.svg" alt="5" />
  </div>
);

const Designed: React.FC = () => <div />;
const Learn: React.FC = () => <div />;

const Earn: React.FC = () => <div />;
const SCF: React.FC = () => <div />;
const Soroban: React.FC = () => <div />;
const MediaSection: React.FC = () => <div />;
const Footer: React.FC = () => <div />;

export default Landing;
