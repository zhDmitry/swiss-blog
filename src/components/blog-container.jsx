import React from "react";
import BlogItem from "./blog-item";

const elements = [
  {
    image: "https://source.unsplash.com/800x600/?nature,water",
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
        <a>@bulmaio</a>.
        <a>#css</a>
        <a>#responsive</a>
        <br />
      </p>
    ),
    title: "The number of photons",
    createdAt: "1 Jan 2016",
    view: 23,
    big: false
  },
  {
    image: "https://source.unsplash.com/800x600/?nature,water",
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
        <a>@bulmaio</a>.
        <a>#css</a>
        <a>#responsive</a>
        <br />
      </p>
    ),
    title: "The number of photons",
    createdAt: "1 Jan 2016",
    view: 23
  },
  {
    image: "https://source.unsplash.com/daily",
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
        <a>@bulmaio</a>.
        <a>#css</a>
        <a>#responsive</a>
        <br />
      </p>
    ),
    title: "The number of photons",
    createdAt: "1 Jan 2016",
    view: 23,
    color: "black"
  },
  {
    image: "https://source.unsplash.com/daily",
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
        <a>@bulmaio</a>.
        <a>#css</a>
        <a>#responsive</a>
        <br />
      </p>
    ),
    title: "The number of photons",
    createdAt: "1 Jan 2016",
    view: 23,
    color: "orange"
  },
  {
    image: "https://source.unsplash.com/daily",
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
        <a>@bulmaio</a>.
        <a>#css</a>
        <a>#responsive</a>
        <br />
      </p>
    ),
    title: "The number of photons",
    createdAt: "1 Jan 2016",
    view: 23,
    big: true
  },
  {
    image: "https://source.unsplash.com/random/800x600",
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
        <a>@bulmaio</a>.
        <a>#css</a>
        <a>#responsive</a>
        <br />
      </p>
    ),
    title: "The number of photons",
    createdAt: "1 Jan 2016",
    view: 23
  },
  {
    image: "https://source.unsplash.com/collection/190727/800x600",
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
        <a>@bulmaio</a>.
        <a>#css</a>
        <a>#responsive</a>
        <br />
      </p>
    ),
    title: "The number of photons",
    createdAt: "1 Jan 2016",
    view: 23
  },
  {
    image: "https://source.unsplash.com/collection/190727/800x600",
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
        <a>@bulmaio</a>.
        <a>#css</a>
        <a>#responsive</a>
        <br />
      </p>
    ),
    title: "The number of photons",
    createdAt: "1 Jan 2016",
    view: 23
  },
  {
    image: "https://source.unsplash.com/1600x900/?nature,water",
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
        <a>@bulmaio</a>.
        <a>#css</a>
        <a>#responsive</a>
        <br />
      </p>
    ),
    title: "The number of photons",
    createdAt: "1 Jan 2016",
    view: 23
  },
  {
    image: "https://source.unsplash.com/daily",
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
        <a>@bulmaio</a>.
        <a>#css</a>
        <a>#responsive</a>
        <br />
      </p>
    ),
    title: "The number of photons",
    createdAt: "1 Jan 2016",
    view: 23,
    color: "orange",
    big: true
  },
  {
    image: "https://source.unsplash.com/random/800x600",
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
        <a>@bulmaio</a>.
        <a>#css</a>
        <a>#responsive</a>
        <br />
      </p>
    ),
    title: "The number of photons",
    createdAt: "1 Jan 2016",
    view: 23
  },
  {
    image: "https://source.unsplash.com/random/800x600",
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
        <a>@bulmaio</a>.
        <a>#css</a>
        <a>#responsive</a>
        <br />
      </p>
    ),
    title: "The number of photons",
    createdAt: "1 Jan 2016",
    view: 23,
    big: true,
    color: "black"
  },
  {
    image: "https://source.unsplash.com/random/800x600",
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
        <a>@bulmaio</a>.
        <a>#css</a>
        <a>#responsive</a>
        <br />
      </p>
    ),
    title: "The number of photons",
    createdAt: "1 Jan 2016",
    view: 23
  }
];

const BlogContainer = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns blogs">
          {elements.map((el, i) =>
            <div className={"column " + (el.big ? "big" : "")} key={i}>
              <BlogItem {...el} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogContainer;
