import React from "react";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import "./index.scss";

import { useSorobanReact } from "@soroban-react/core";
import styles from "../components/atoms/connect-button/style.module.css";

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
    </div>
  </div>
);

const Designed: React.FC = () => <div />;
const Learn: React.FC = () => <div />;
const GettingStarted: React.FC = () => <div />;
const Earn: React.FC = () => <div />;
const SCF: React.FC = () => <div />;
const Soroban: React.FC = () => <div />;
const MediaSection: React.FC = () => <div />;
const Footer: React.FC = () => <div />;

export default Landing;
