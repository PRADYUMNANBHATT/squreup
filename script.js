let sect_1 = document.querySelector(".hero");
let sect_3 = document.querySelector(".section-3");
let image_3 = document.querySelectorAll("img");
let nav = document.querySelector("nav");
let main = document.querySelector("main");

window.addEventListener("load", () => {});
let callback = (entries, observe) => {
  entries.forEach((entry) => {
    entry.isIntersecting
      ? ((nav.style.backgroundColor = "transparent"),
        (nav.style.position = "absolute"))
      : ((nav.style.backgroundColor = "black"), (nav.style.position = "fixed"));
  });
};
let callback_img = (entries, observe) => {
  entries.forEach((entry) => {
    entry.isIntersecting
      ? (entry.target.style.transform = "scale(1)")
      : (entry.target.style.transform = "scale(0)");
  });
};
let options = {
  root: document.querySelector("section"),
  rootMargin: "0px",
  threshold: 1.0,
};

let observer = new IntersectionObserver(callback);
observer.observe(sect_1);
let observer_img = new IntersectionObserver(callback_img);

image_3.forEach((e) => observer_img.observe(e));
const page_select = (selected) => {
  main.innerHTML = "";
  selected === "Home"
    ? (main.innerHTML = ` <main>
      <section class="hero" >
        <h1 class="herotxt">EVERYTHING TO SELL ANYTHING</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro</p>
        <a href="" class="btn">Get Started</a>
      </section>
      <section class="section-2" >
        <div class="sub-section">
          <div class="txt">
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ad,
              autem totam ut quod molestias adipisci
            </p>
            <a href="">Know More...</a>
          </div>
          <div class="img-sec">
            <img
              src="./assets/meiwen-see-750w.webp"
              alt="section-2"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section class="section-3">
        <div class="sub-section">
          <div class="txt">
            <h1>Ecommerce Website</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur error minus asperiores sequi aut accusantium officiis
              aspernatur consectetur voluptas earum magnam laboriosam debitis
              quod quaerat rem ab, soluta sed culpa.
            </p>
            <a href="">Lets Go</a>
          </div>
          <div class="img-sec">
            <img
              src="./assets/sell-anything-mask-1500w.jpg"
              alt="section-3"
              class="image-3"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>`)
    : "";
  selected === "Product"
    ? (main.innerHTML = ` <main>
      <section class="hero"  style="background-image: url('./assets/product.webp')">
        <h1 class="herotxt">Products</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro</p>
        <a href="" class="btn">Get Started</a>
      </section>
      <section class="section-2" style="background-color:#455e65;">
        <div class="sub-section">
          <div class="txt">
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ad,
              autem totam ut quod molestias adipisci
            </p>
            <a href="">Know More...</a>
          </div>
          <div class="img-sec">
            <img
              src="./assets/meiwen-see-750w.webp"
              alt="section-2"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section class="section-3" style="background-color:#546545;">
        <div class="sub-section">
          <div class="txt">
            <h1>Explore Products</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur error minus asperiores sequi aut accusantium officiis
              aspernatur consectetur voluptas earum magnam laboriosam debitis
              quod quaerat rem ab, soluta sed culpa.
            </p>
            <a href="">Lets Go</a>
          </div>
          <div class="img-sec">
            <img
              src="./assets/sell-anything-mask-1500w.jpg"
              alt="section-3"
              class="image-3"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>`)
    : "";
  selected === "Resources"
    ? (main.innerHTML = ` <main>
      <section class="hero"  style="background-image: url('./assets/resource.webp')">
        <h1 class="herotxt">Resources</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro</p>
        <a href="" class="btn">Get Started</a>
      </section>
      <section class="section-2" style="background-color:#65455f;">
        <div class="sub-section">
          <div class="txt">
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ad,
              autem totam ut quod molestias adipisci
            </p>
            <a href="">Know More...</a>
          </div>
          <div class="img-sec">
            <img
              src="./assets/meiwen-see-750w.webp"
              alt="section-2"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section class="section-3" style="background-color:#456560;">
        <div class="sub-section">
          <div class="txt">
            <h1>Explore Resources</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur error minus asperiores sequi aut accusantium officiis
              aspernatur consectetur voluptas earum magnam laboriosam debitis
              quod quaerat rem ab, soluta sed culpa.
            </p>
            <a href="">Lets Go</a>
          </div>
          <div class="img-sec">
            <img
              src="./assets/sell-anything-mask-1500w.jpg"
              alt="section-3"
              class="image-3"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>`)
    : "";
  selected === "Templates"
    ? (main.innerHTML = ` <main>
      <section class="hero"  style="background-image: url('./assets/template.webp')">
        <h1 class="herotxt">Templates</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro</p>
        <a href="" class="btn">Get Started</a>
      </section>
      <section class="section-2" style="background-color:#655745;">
        <div class="sub-section">
          <div class="txt">
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ad,
              autem totam ut quod molestias adipisci
            </p>
            <a href="">Know More...</a>
          </div>
          <div class="img-sec">
            <img
              src="./assets/meiwen-see-750w.webp"
              alt="section-2"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section class="section-3" style="background-color:#4c6545;">
        <div class="sub-section">
          <div class="txt">
            <h1>Explore Templates</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur error minus asperiores sequi aut accusantium officiis
              aspernatur consectetur voluptas earum magnam laboriosam debitis
              quod quaerat rem ab, soluta sed culpa.
            </p>
            <a href="">Lets Go</a>
          </div>
          <div class="img-sec">
            <img
              src="./assets/sell-anything-mask-1500w.jpg"
              alt="section-3"
              class="image-3"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>`)
    : "";
};
