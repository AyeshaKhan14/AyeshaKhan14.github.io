import React from "react";
import boAt from "../assets/portfolio/boAt.png";
import starwar from "../assets/portfolio/starwar.png";
import cric from "../assets/portfolio/cric.png";
import product from "../assets/portfolio/product.png";
import jio from "../assets/portfolio/jio.png";
import coffee from "../assets/portfolio/coffee.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: coffee,
      title: "Coffee Shop [Solo Project]",
      tech: "HTML | CSS | JavaScript | React | NodeJS | MongoDB | Chakra UI",
      desc: "This is a Coffee website. Where user can see coffee Product and can contact the admin by sending message.And on the admin panel, admin can post product and can manage the edit and delete also can see the no of messages sent by user and can handle about section.",
      link: "https://github.com/AyeshaKhan14/Coffee-Shop-Mern-",
      repo: "https://coffee-shop-mern.vercel.app/",
    },
    {
      id: 2,
      src: jio,
      title: "Jiomart-lifeStyle Clone [Group Project]",
      tech: "HTML | CSS | JavaScript | React JS | Redux | Chakra UI",
      desc: "JioMart is an Indian ecommerce website, where user can choose and buy online products such as Grocery, electronic , Fashion & Beauty products.Pages:Home Page, Groceries Page, Kitchenware Page , Mobile and Womens Page, Cart Page, Payment Integration.",
      link: "https://jiomart-app.netlify.app/",
      repo: "https://github.com/AyeshaKhan14/prickly-partner_25",
    },
    {
      id: 3,
      src: boAt,
      title: "boAt-lifeStyle Clone [Group Project]",
      tech: "HTML | CSS | JavaScript",
      desc: "This is a clone of an e-commerce website named boAt. Users can buy electronic products on this website. Pages we made:Home page, Login/Signup page, Product Page, Footer Page, Cart page, Payment Page.",
      link: "https://boat-clone2.netlify.app/",
      repo: "https://github.com/surajkm24/boAt-clone",
    },
    {
      id: 4,
      src: cric,
      title: "ESNFCric Clone",
      tech: "HTML | CSS | JavaScript | React",
      desc: "This is a clone of sports news website named ESPN-cric where user can see live updates and hightlight of the news.Pages: Home Page, Footer, News Page. ",
      link: "https://the-awesome-ayeshakhan14-site.netlify.app/",
      repo: "https://github.com/AyeshaKhan14/youthful-dogs-6115",
    },
    {
      id: 5,
      src: product,
      title: "E-commerce website",
      tech: "HTML | CSS | JavaScript | React",
      desc: "I have built this an e-commerce website. On this website, firstly user have to login after then it will redirect to the home page where user can see the product collection and product page as well as can add the items to the cart.",
      link: "https://isnt-ayeshakhan14-awesome.netlify.app/",
      repo: "https://github.com/AyeshaKhan14/React-app",
    },
    {
      id: 6,
      src: starwar,
      title: "Star War",
      tech: "HTML | CSS | JavaScript",
      desc: "I built this website when I was learning about debouncing. I have used SWAP Api to fetch data. User can search for a character, select the character and can view their details by clicking on the character.      ",
      link: "https://strong-maamoul-092c90.netlify.app/",
      repo: "https://github.com/AyeshaKhan14/Star-Wars",
    },
  ];

  return (
    <div
      name='projects'
      className='md:bg-stone-900	mb-20 w-full text-white max:h-full'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-20'>
          <p className='text-orange-600	 text-4xl font-bold inline border-b-4 border-gray-500'>
            Projects
          </p>
          <p className='py-6 text-lg	font-medium	text-neutral-400'>
            I have Built some Projects
          </p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-10 px-12 sm:px-0'>
          {projects.map(({ id, src, link, repo, title, tech, desc }) => (
            <div
              data-aos='fade-up'
              key={id}
              className='shadow-md shadow-orange-600 rounded-lg'
            >
              <img
                src={src}
                alt='projects'
                className='rounded-md h-72 w-full duration-200 hover:scale-105'
              />
              <div className='text-center	pt-4 text-orange-500 font-bold	font-mono text-2xl	'>
                {title}
              </div>
              <div className='text-center pt-4 text-slate-300	font-medium	text-xl	'>
                {" "}
                <p>{desc}</p>
              </div>
              <p className='text-center pt-4 text-slate-300	font-medium	text-xl	'>
                Tech Stack: {tech}
              </p>
              <div className='flex items-center justify-center'>
                <button
                  className='w-1/4 px-6 py-3 m-4 my-8 mx-auto flex justify-center items-center rounded-md bg-gradient-to-b from-orange-600 to-orange-700 hover:bg-white duration-300 bg-orange-700 hover:scale-105'
                  onClick={() => window.open(link, "_blank")}
                >
                  Demo
                </button>
                <button
                  className='w-1/4 m-4 bg-gradient-to-b from-orange-600 to-orange-700 px-6 py-3 my-8 mx-auto flex justify-center items-center rounded-md hover:scale-110 duration-300 bg-orange-700 hover:scale-105'
                  onClick={() => window.open(repo, "_blank")}
                >
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
