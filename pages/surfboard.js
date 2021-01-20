import Head from "next/head";
import surf from "../styles/surf.module.css";
import Link from "next/link";

import axios from "axios";
import { surfboardURI } from "../constants/endPoints";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

import "bootstrap/dist/css/bootstrap.min.css";

export const getStaticProps = async () => {
  let { data } = await axios(surfboardURI);

  return {
    props: { surf: { ...data[0] } },
  };
};

export default function surfboard(props) {
  const bannerStyle = {
    backgroundImage: `url(${props.surf.bannerImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
    positon: "fixed",
  };
  return (
    <div>
      <Head>
        <title>Surfboard Ventures</title>
        <link rel="icon" href={props.surf.favicon} />
      </Head>

      <div class=" d-flex w-80 h-100 mx-auto flex-column">
        <header className={surf.header}>
          <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-transparent shadow-sm">
            <h5 class="my-0 mr-md-auto font-weight-normal">
              <img src={props.surf.companyLogo} className="" />
            </h5>
            <nav class=" my-md-0 mr-3">
              <a class="p-2 text-dark" href="/">
                Home
              </a>
              <a class="p-2 text-dark" href="/contentstack">
                Contenstack
              </a>
              <a class="p-2 text-dark" href="/RawEngineering">
                Raw Engineering
              </a>
            </nav>
            <a className={surf.btn} href="#">
              Contact Us
            </a>
          </div>
        </header>
      </div>
      <div style={bannerStyle}>
        <main className={surf.main}>
          <div className={surf.content}>
            <h1>{props.surf.heroContent.heading}</h1>
            <p>{props.surf.heroContent.content}</p>
          </div>
        </main>
      </div>

      <div className={surf.footer}>
        <footer class="pt-4 my-md-5 pt-md-5  border-top bg-white">
          <div class="row">
            <div class="col-12 col-md">
              <img
                className={surf.logo2}
                src={props.surf.companyLogo}
                alt=""
                width="24"
                height="24"
              />
            </div>
            <div class="col-6 col-md">
              <ul class="list-unstyled text-small">
                <li>
                  <a class="text-muted" href="#">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a class="text-muted" href="#">
                    Academy
                  </a>
                </li>
                <li>
                  <a class="text-muted" href="#">
                    Events
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <ul class="list-unstyled text-small">
                <li>
                  <a class="text-muted" href="#">
                    Gallery
                  </a>
                </li>
                <li>
                  <a class="text-muted" href="#">
                    e-Certificates
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <ul class="list-unstyled text-small">
                <li>
                  <a class="text-muted" href="#">
                    info@surfboardventures.com
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <ul className={surf.list}>
                {Object.keys(props.surf.socialLinks).map((key, index) => {
                  return (
                    <>
                      <li key={props.surf.socialLinks.index}>
                        <a href={props.surf.socialLinks[key]}>
                          <FontAwesomeIcon
                            icon={["fab", `${key}`]}
                            className={surf.icons}
                          />
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={surf.copyright}>
            <a class="text-muted" href="#">
              Copyright © 2021 Surfboard Ventures. All Rights Reserved.
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
