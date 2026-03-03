import React from 'react';
import "./Skills.css";

function Skills() {
  return (
    <>
      <section class="skills" id="skills">
        <div class="max-width">
          <h2 class="title">Skills</h2>
          <div class="skills-content">
            <div class="column left">
              <div class="text">My creative skills & experiences.</div>
              <p class="lead">As a solutions developer with extensive experience in JavaScript, React and TypeScript. I have a proven track record of delivering high-quality software solutions that meet the needs of clients.</p>
              <p>I have expertise in developing and maintaining application programs, preparing test plans, performing testing and API integration.</p>
              <p>Additionally, I'm excited to explore opportunities that allow me to continue, to grow and to develop my front-end skills while also expanding my expertise in back-end technologies.</p>
              <a href="/">Read more</a>
            </div>
            <div class="column right">
              <div class="bars">
                <div class="info">
                  <span>HTML</span>
                  <span>60%</span>
                </div>
                <div class="line html"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>CSS</span>
                  <span>80%</span>
                </div>
                <div class="line css"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>JavaScript</span>
                  <span>60%</span>
                </div>
                <div class="line js"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>React</span>
                  <span>50%</span>
                </div>
                <div class="line react"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>WordPress</span>
                  <span>90%</span>
                </div>
                <div class="line wordpress"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
