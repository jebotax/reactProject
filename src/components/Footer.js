import React from "react";
//React Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFacebookF , faTwitter , faInstagram , faGoogle , faLinkedin , faGit} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
<footer class="bg-dark text-center text-white">
  <div class="container p-4 pb-0">
    <section class="mb-4">
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FontAwesomeIcon icon={faFacebookF} /></a>
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><FontAwesomeIcon icon={faTwitter} /></a>
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><FontAwesomeIcon icon={faGoogle} /></a>
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><FontAwesomeIcon icon={faInstagram} /></a>
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><FontAwesomeIcon icon={faLinkedin} /></a>
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><FontAwesomeIcon icon={faGit} /></a>
    </section>
  </div>
  <div class="text-center p-3 copyright">
    © 2020 Copyright
  </div>
</footer>
    );
}

export default Footer
