import React, { Component } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaMeetup,
  FaYoutube,
  FaGithub,
  FaSlack,
  FaFreeCodeCamp,
} from "react-icons/fa";

const SocialShare = [
  {
    Social: <FaMeetup />,
    link: "https://www.meetup.com/Sydney-Volunteer-Programmers/",
  },
  {
    Social: <FaSlack />,
    link: "https://join.slack.com/t/codesydney/shared_invite/enQtMzA4ODcyOTUyMDY0LTFlZDAyZjgwZmIzY2VmMzA0MjllOWI3YmE1NGZiNzQ5NGNmNjlhMGE5MTE1ZDA2NTU2OGRkZWQyYTQ3NDZmZGM",
  },
  {
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/company/code.sydney/",
  },
  { Social: <FaInstagram />, link: "https://www.instagram.com/code.sydney/" },
  { Social: <FaFacebookF />, link: "https://www.facebook.com/codesyd/" },
  { Social: <FaTwitter />, link: "https://twitter.com/code_sydney" },
  {
    Social: <FaYoutube />,
    link: "https://www.youtube.com/channel/UCnOp_l8-EX3c-q2Tlj-2Iyw",
  },
  { Social: <FaGithub />, link: "https://github.com/codesydney" },
  {
    /* {Social: <FaFreeCodeCamp /> , link: 'http://www.freecodecampsydney.org/'}, */
  },
];

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer-area">
          <div className="footer-wrapper">
            <div className="row align-items-end row--0">
              <div className="col-lg-6">
                <div className="footer-left">
                  <div className="inner">
                    <span>CODE.SYDNEY</span>
                    <h2>
                      Pay As <br /> You Feel
                    </h2>
                    {/*
                                        <a className="rn-button-style--2" href="/contact">
                                            <span>Contact Us</span>
                                        </a>
                                        */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-right" data-black-overlay="6">
                  <div className="row">
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="footer-link">
                        <h4>Quick Links</h4>
                        <ul className="ft-link">
                          <li>
                            <a
                              href="https://codesydney.pythonanywhere.com/"
                              target="_blank"
                            >
                              Legacy Website
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Single Widget  */}
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                      <div className="footer-link">
                        <h4>Say Hello</h4>
                        <ul className="ft-link">
                          <li>
                            <a href="mailto:info@code.sydney">
                              info@code.sydney
                            </a>
                          </li>
                        </ul>

                        <div className="social-share-inner">
                          <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                            {SocialShare.map((val, i) => (
                              <li key={i}>
                                <a href={`${val.link}`}>{val.Social}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Widget  */}

                    <div className="col-lg-12">
                      <div className="acknowledge-country">
                        <br />
                        <p>
                          We acknowledge and pay respects to the First Nations
                          People of Australia, the land in which we live and
                          work. We recognise the strength, resilience and
                          capacity of aboriginal people and pay respects to
                          elders past, present and emerging.
                        </p>
                      </div>
                      <div className="copyright-text">
                        <p>
                          Copyright © 2022 Code.Sydney Pty Ltd ABN 37 625 436
                          151
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default Footer;
