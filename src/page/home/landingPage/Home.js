import React from 'react';
import "./Home.css";

import TypeWriter from "../section/TypeWriter";

function Home() {
  return (
    <>
      <section class="home" id="home">
        <div class="max-width">
          <div class="home-content">
            <div class="text-1">Hello, my name is</div>
            <div class="text-2">Jayson Herminio</div>
            <div class="text-3">And I'm a
              <span>
                <p>
                  <TypeWriter />
                </p>
              </span>
            </div>
            <div>
              <a class="hireMe" href="#contact">
                My Resume
              </a>
              {/* <a href="/">Download CV
                <i class="fas fa-download"></i>
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
