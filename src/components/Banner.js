import React from "react";
import videoban from "../bannervid.mp4";

const Banner = () => {
    return (
<header>
 {/* This div is  intentionally blank. It creates the transparent black overlay over the video which you can modify in the CSS --> */}
<div class="overlay"></div>

{/* <!-- The HTML5 video element that will create the background video on the header --> */}
<video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
  <source src={videoban} type="video/mp4"/>
</video>

{/* <!-- The header content --> */}
<div class="container h-100">
  <div class="d-flex h-100 text-center align-items-center">
    <div class="w-100 text-white">
      <h1 class="display-3 title-section">Surf . Trek . Camp</h1>
      <p class="lead mb-0">To live is to risk it all; otherwise you’re just an inert chunk of randomly assembled molecules drifting wherever the universe blows you.</p>
    </div>
  </div>
</div>
</header>
    );
}

export default Banner
