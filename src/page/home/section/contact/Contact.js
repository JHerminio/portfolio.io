import React from 'react';
import "./Contact.css";

function Contact() {
  return (
    <>
      <section class="contact" id="contact">
        <div class="max-width">
          <h2 class="title">Contact</h2>
          <div class="contact-content">
            <div class="row">
              <div class="info">
                <i class="fas fa-phone"></i>
                <div class="head">Phone</div>
                <div class="link">(+63) 9282956621 - smart</div>
              </div>
            </div>

            <div class="row">
              <div class="info">
                <i class="fas fa-envelope"></i>
                <div class="head">Email</div>
                <a
                  class="link"
                  href='https://mail.google.com/mail/u/0/#inbox?compose=new'>
                  jaysonberherminio@gmail.com
                </a>
              </div>
            </div>

            <div class="row">
              <div class="info">
                <i class="fas fa-map-marker-alt"></i>
                <div class="head">Location</div>
                <a
                  class="link"
                  href='https://www.google.com/maps/place/Herminio+Prints/@14.5826548,121.0330294,17z/data=!3m1!4b1!4m6!3m5!1s0x3397c9f45af429c5:0x5a18bb3dd124fccb!8m2!3d14.5826496!4d121.0356043!16s%2Fg%2F11l_9_rd_8?entry=ttu'>
                  View on Google map
                </a>
              </div>
            </div>

          </div>

          <div class="socialMedia">
            {/* facebook*/}
            {/* <div class="button">
              <div class="icon">
                <a href="https://www.facebook.com/jayson.herminio/">
                  <i class="fab fa-facebook-f"></i>
                  Facebook
                </a>
              </div>
            </div> */}

            {/* youtube*/}
            {/* <div class="button">
              <div class="icon">
                <a href="https://www.youtube.com/channel/UCy--WZUDkZ5DVmcW5UBVlTw">
                  <i class="fab fa-youtube"></i>
                  YouTube
                </a>
              </div>
            </div> */}

            {/*twitter */}
            {/* <div class="button">
              <div class="icon">
                <i class="fab fa-twitter"></i>
              </div>
              <span>Twitter</span>
            </div> */}

            {/* <div class="button">
              <div class="icon">
                <i class="fab fa-instagram"></i>
              </div>
              <span>Instagram</span>
            </div> */}

            {/* <div class="button">
              <div class="icon">
                <i class="fab fa-github"></i>
              </div>
              <span>Github</span>
            </div> */}
          </div>


        </div>
      </section >
    </>
  );
}

export default Contact;
