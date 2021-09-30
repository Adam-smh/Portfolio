let projects = [
  {
    imgURL: "./projects/Timeline.png",
    imgALT: "Timeline Project",
    title: "Timeline",
    techStack: "HTML/CSS",
    description:
      "A Timeline using Glassmorphism. Purpose of Timeline is to display previous jobs and it's details.",
    githubURL: "https://github.com/Adam-smh/Timeline",
    liveProjectURL: "https://distracted-austin-cdffd8.netlify.app",
  },
  {
    imgURL: "./projects/Screenshot 2021-09-30 100612.png",
    imgALT: "Ecommerce Site",
    title: "Erispe8",
    techStack: "JavaScript",
    description:
      "An Ecommerce site that predominately uses JS however there are also uses of Python, sql, flask, CSS and Html.",
    githubURL: "https://github.com/Adam-smh/final-EoMP2",
    liveProjectURL: "https://erispe8.netlify.app/",
  },
  {
    imgURL: "./projects/CF.png",
    imgALT: "My Project 2",
    title: "Contact Form",
    techStack: "HTML/CSS",
    description:
      "A Contact Form using Neomorphism. Purpose of Contact Form is to send email to host of whichever site it is located.",
    githubURL: "https://github.com/Adam-smh/HTML-Form",
    liveProjectURL: "https://sharp-hopper-2e7799.netlify.app",
  },
  {
    imgURL: "./projects/testi-slide.png",
    imgALT: "My Project 3",
    title: "Testimonial Slider",
    techStack: "HTML/CSS",
    description: "A Testimonial Slide using Owl Carousel and Glassmorphism.",
    githubURL: "https://github.com/Adam-smh/TestimonilSlider",
    liveProjectURL: "https://friendly-bardeen-0dc788.netlify.app/",
  },
  {
    imgURL: "./projects/BMI.png",
    imgALT: "My Project 4",
    title: "BMI Calculator",
    techStack: "Python",
    description:
      "BMI Calculator made with python and Tkinter. It is used t calculate ones BMI",
    githubURL: "https://github.com/Adam-smh/BMI-Calculator",
    liveProjectURL: "https://replit.com/@Adamsmh/BMI-Calculator",
  },
  {
    imgURL: "./projects/Add.png",
    imgALT: "My Project 5",
    title: "Adding Two Numbers",
    techStack: "Python",
    description:
      "Made with Tkinter, this program is used to add two numbers of your choosing.",
    githubURL: "https://github.com/Adam-smh/Adding-two-numbers",
    liveProjectURL: "https://replit.com/@Adamsmh/Adding-two-numbers",
  },
  {
    imgURL: "./projects/fib.png",
    imgALT: "My Project 6",
    title: "Fibbonacci",
    techStack: "Python",
    description:
      "This programme made, with just Python, is used to display an input amount of the fibonacci sequence.",
    githubURL: "https://github.com/Adam-smh/Recursion",
    liveProjectURL: "https://replit.com/@Adamsmh/Recursion",
  },
  {
    imgURL: "./projects/pokedex.png",
    imgALT: "My Project 7",
    title: "Pokedex",
    techStack: "JavaScript",
    description:
      "This is a pokedex used to showcase my skill in Javascript. Cover page is pure CSS.",
    githubURL: "https://github.com/Adam-smh/Pokedex",
    liveProjectURL: "https://adams-pokedex.netlify.app/",
  },
];

function createCard(card) {
  let createdCard = `<div data-aos="fade-down-right"
  data-aos-duration="3000" class="card1" techStack=${card.techStack} >
        <img src="${card.imgURL}" alt="${card.imgALT}" class="card-img">
        <h4>${card.title}</h4>
        <h6>${card.techStack}</h6>
        <p class="card-details">${card.description}</p>
        <div class="button">
        <a class="Pbuttons" target="_blank" href="${card.githubURL}"><i class="fab fa-github fa-2x"></i></a>
        <a class="Pbuttons" target="_blank" href="${card.liveProjectURL}"><i class="fas fa-globe fa-2x"></i></a>
        </div>
      </div>
      `;
  return createdCard;
}

function renderCards() {
  let projectContainer = document.querySelector(".card-container");
  for (project of projects) {
    let card = createCard(project);
    projectContainer.innerHTML += card;
  }
}

renderCards();

function filterCards(category) {
  let cards = document.getElementsByClassName("card1");
  if (category == "All") {
    for (card of cards) {
      card.style.display = "flex";
    }
    return;
  }
  for (card of cards) {
    console.log(card);
    card.style.display = "none";
  }

  let selectedCards = document.querySelectorAll(`[techStack='${category}']`);

  for (card of selectedCards) {
    card.style.display = "flex";
  }
}
