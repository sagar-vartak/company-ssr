import Head from "next/head";
import styles from "../styles/Home.module.css";
import content from "../styles/cont.module.css";

import axios from "axios";
import { contentstackURI } from "../constants/endPoints";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

import "bootstrap/dist/css/bootstrap.min.css";

export default function contentstack(props) {
  return (
    <div className={content.back}>
      <Head>
        <title>Contentstack</title>
        <link rel="icon" href={props.companyData.favicon} />
      </Head>

      <div class=" d-flex w-80 h-100 p-3 mx-auto flex-column">
        <header>
          <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-transparent shadow-sm">
            <h5 class="my-0 mr-md-auto font-weight-normal">
              <img
                src={props.companyData.companyLogowhite}
                className={content.logo}
              />
            </h5>
            <nav class=" my-md-0 mr-3">
              <a class="p-2 text-white" href="/">
                Home
              </a>
              <a class="p-2 text-white" href="#">
                Product
              </a>
              <a class="p-2 text-white" href="#">
                Resources
              </a>
              <a class="p-2 text-white" href="#">
                Customers
              </a>
              <a class="p-2 text-white" href="#">
                Partners
              </a>
              <a class="p-2 text-white" href="#">
                Company
              </a>
            </nav>
            <a className={content.btn} href="#">
              Try For Free
            </a>
          </div>
        </header>
        <div className={content.banner}>
          <main role="main" class="inner cover mx-auto">
            <h1 class="cover-heading text-white">
              {props.companyData.heroContent.heading}
            </h1>
            <p class="lead text-white">
              {props.companyData.heroContent.content}
            </p>
            <p class="lead">
              <a href="#" className={content.btn}>
                Try For Free
              </a>
            </p>
          </main>
        </div>
        <div className={content.footer}>
          <footer class="pt-5  border-top bg-white">
            <div class="row">
              <div class="col-12 col-md">
                <img
                  className={content.logo2}
                  src={props.companyData.companyLogoBlack}
                  alt=""
                  width="24"
                  height="24"
                />
                <ul className={content.list}>
                  {Object.keys(props.companyData.socialLinks).map(
                    (key, index) => {
                      return (
                        <>
                          <li key={props.companyData.socialLinks.index}>
                            <a href={props.companyData.socialLinks[key]}>
                              <FontAwesomeIcon
                                icon={["fab", `${key}`]}
                                className={content.icons}
                              />
                            </a>
                          </li>
                        </>
                      );
                    }
                  )}
                </ul>
              </div>
              <div class="col-6 col-md">
                <h5>Product</h5>
                <ul class="list-unstyled text-small">
                  <li>
                    <a class="text-muted" href="#">
                      Features
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      For IT & developers
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      For Business
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      ROI Calculator
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      Customer Success
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-md">
                <h5>Users</h5>
                <ul class="list-unstyled text-small">
                  <li>
                    <a class="text-muted" href="#">
                      Supported Platforms
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      Trust
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      System Status
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-md">
                <h5>Education</h5>
                <ul class="list-unstyled text-small">
                  <li>
                    <a class="text-muted" href="#">
                      Customer Resources
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      CMS Guides
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      Docs
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-md">
                <h5>Company</h5>
                <ul class="list-unstyled text-small">
                  <li>
                    <a class="text-muted" href="#">
                      About
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      News
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      Press
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      Become a Partner
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  let { data } = await axios(contentstackURI);

  return {
    props: { companyData: { ...data[0] } },
  };
};
