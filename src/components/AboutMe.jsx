import logo from "./FilipPng.png"
const AboutMe = ()=>{
    return (
        <section class="hero" id="about">
      <img
        src={logo}
        alt="Filip"
        loading="lazy"
        class="hero-img"
      />
      <div class="bio animate__animated animate__shakeX">
        <h2 class="bio-title">About Me</h2>
        <p class="bio-text">
        My name is Filip and I grew up in a little town in Czech Republic. 
        I have spent majority of my life in hospitality and customer service, and decided to take on a coding challenge.
        After passing entry exam to join Northcoders, I have successfully graduated and now I am looking for the best opportunity to further improve my skills. 
        A job in the field. 

        </p>
      </div>
</section>
    )
}
export default AboutMe