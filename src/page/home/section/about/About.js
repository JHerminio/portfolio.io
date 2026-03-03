import React from 'react';
import "./About.css";
import img from '../../../../images/matt2.jpg';

function About() {

  return (
    <>
      <section class="about" id="about">
        <div class="max-width">
          <h2 class="title">About</h2>
          <div class="about-content">
            <div class="box">
              <div class="column left">
                 <img src={img} alt=""></img>
              </div>
            </div>

            <div class="box">
              <div class="column right">
                <div class="sub-title">Core Value</div>
                <p1>I’m a passionate Frontend Developer who enjoys turning ideas into clean, responsive, and user-friendly web interfaces.
                  I focus on writing maintainable code and creating smooth user experiences using modern web technologies.
                  I’m always eager to learn, improve, and build products that people actually enjoy using.</p1>
                <p4>If you have any leads or opportunities that align with my skill set, I love to hear from you.</p4>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  );
}

export default About;
