import Image from "next/image";
import Link from "next/link";

const PopularTags = () => {
  return (
    <section
      className="tags"
      aria-labelledby="tag-label"
      style={{ marginTop: 50 }}
    >
      <div className="container">
        <h2 className="headline headline-2 section-title" id="tag-label">
          <span className="span">Popular Categories</span>
        </h2>

        {/* <p className="section-text">Most searched keywords</p> */}

        <ul className="grid-list" style={{ marginTop: 50 }}>
          <li>
            <Link
              className="card tag-btn"
              href={"https://codewithgolu.com/category/reactjs/"}
            >
              {/* <Image
                src="/images/tag1.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Travel"
              /> */}

              <p className="btn-text">React Js</p>
            </Link>
          </li>

          <li>
            <Link
              className="card tag-btn"
              href={"https://codewithgolu.com/category/python/"}
            >
              {/* <Image
                src="/images/tag2.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Culture"
              /> */}

              <p className="btn-text">Python</p>
            </Link>
          </li>

          <li>
            <Link
              className="card tag-btn"
              href={"https://codewithgolu.com/category/node-js/"}
            >
              {/* <Image
                src="/images/tag3.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Lifestyle"
              /> */}

              <p className="btn-text">Node Js</p>
            </Link>
          </li>

          

          
          {/* <li>
            <button className="card tag-btn">
              <Image
                src="/images/tag6.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Space"
              />

              <p className="btn-text">Space</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <Image
                src="/images/tag7.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Animal"
              />

              <p className="btn-text">Animal</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <Image
                src="/images/tag8.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Minimal"
              />

              <p className="btn-text">Minimal</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <Image
                src="/images/tag9.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Interior"
              />

              <p className="btn-text">Interior</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <Image
                src="/images/tag10.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Plant"
              />

              <p className="btn-text">Plant</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <Image
                src="/images/tag11.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Nature"
              />

              <p className="btn-text">Nature</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <Image
                src="/images/tag12.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Business"
              />

              <p className="btn-text">Business</p>
            </button>
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default PopularTags;
