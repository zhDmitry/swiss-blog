import React from "react";
import BlogItem from "./blog-item";

const elements = [
  {
    image: "https://source.unsplash.com/400x300/?nature,water",
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
    image: "https://source.unsplash.com/400x300/?sport,water",

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
    image: "https://source.unsplash.com/400x300/?nature,sport",
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
    image: "https://source.unsplash.com/200x200/?nature,water",
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
    image: "https://source.unsplash.com/200x200/?sport,water",
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
    image: "https://source.unsplash.com/random/400x300",
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
    image: "https://source.unsplash.com/400x300/?nature,red",
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
    image: "https://source.unsplash.com/400x300/?nature,sport",
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
    image: "https://source.unsplash.com/200x200/?nature,water",
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
    image: "https://source.unsplash.com/200x200/?sport,water",
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
  },
  {
    image: "https://source.unsplash.com/random/400x300",
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
    image: "https://source.unsplash.com/400x300/?nature,red",
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
    big: true,        
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
