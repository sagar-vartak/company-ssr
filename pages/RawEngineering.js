import Head from "next/head";
import raw from "../styles/raw.module.css";
import Link from "next/link";

import axios from "axios";
import { rawengURI } from "../constants/endPoints";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

import "bootstrap/dist/css/bootstrap.min.css";

export const getStaticProps = async () => {
  let { data } = await axios(rawengURI);

  return {
    props: { raw: { ...data[0] } },
  };
};
export default function RawEngineering(props) {
  console.log(props);
  return (
    <div>
      <Head>
        <title>Raw Engineering</title>
        <link rel="icon" href={props.raw.favicon} />
      </Head>
      <div className={raw.header}>
        <div class=" d-flex w-80 h-100 mx-auto flex-column">
          <header>
            <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-transparent shadow-sm">
              <h5 class="my-0 mr-md-auto font-weight-normal">
                <img src={props.raw.companyLogo} className={raw.logo} />
              </h5>
              <nav class=" my-md-0 mr-3">
                <a class="p-2 text-white" href="/">
                  HOME
                </a>
                <a class="p-2 text-white" href="#">
                  WHAT WE DO
                </a>
                <a class="p-2 text-white" href="#">
                  OUR WORK
                </a>
                <a class="p-2 text-white" href="#">
                  WHO WE ARE
                </a>
                <a class="p-2 text-white" href="#">
                  BLOG
                </a>
                <a class="p-2 text-white" href="#">
                  CAREERS
                </a>
              </nav>
              <a className={raw.btn} href="#">
                CONTACT
              </a>
            </div>
          </header>
        </div>
      </div>
      <main className={raw.main}>
        <div className={raw.content}>
          <h1>{props.raw.heroContent.heading}</h1>
          <p>{props.raw.heroContent.content}</p>
        </div>
        <div className={raw.banner}>
          <img src={props.raw.bannerImage} alt="banner" />
        </div>
      </main>
      <footer className={raw.footer}>
        <div className={raw.centre}>
          <h2>Ready to get started on your next project?</h2>
          <a href="#" className={raw.btn}>
            GET IN TOUCH
          </a>
        </div>
        <ul className={raw.list}>
          {Object.keys(props.raw.socialLinks).map((key, index) => {
            return (
              <>
                <li key={props.raw.socialLinks.index}>
                  <a href={props.raw.socialLinks[key]}>
                    <FontAwesomeIcon
                      icon={["fab", `${key}`]}
                      className={raw.icons}
                    />
                  </a>
                </li>
              </>
            );
          })}
        </ul>
        <div className={raw.left}>
          <ul>
            <li>
              <a href="#" rel="">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" rel="">
                Backend Terms of Use
              </a>
            </li>
          </ul>
          <div className={raw.copyright}>
            Copyright © 2020 Raw Engineering LLC. All Rights Reserved.
          </div>
          <img
            src="https://www.raweng.com/v3/assets/bltaacb6b0c9b693c2d/blt67d1684f23bec105/5e31575101e4f445b22f4bde/soc_logo.png?width=100"
            alt="Logo"
            className={raw.footLogo}
            width="70"
          />
        </div>
      </footer>
    </div>
  );
}
