// ========== SERIES DATA ==========
const seriesList = [
  {
    title: "Breaking Bad",
    year: 2008,
    genre: "Drama",
    rating: 9.5,
    description:
      "A chemistry teacher turned meth producer partners with a former student to secure his family's future.",
    poster: "images/breaking.jpeg",
    cast: "Bryan Cranston, Aaron Paul, Anna Gunn",
    seasons: [
      {
        season: 1,
        episodes: [
          { title: "Pilot", link: "#" },
          { title: "Cat’s in the Bag...", link: "#" },
        ],
      },
    ],
  },
  {
    title: "Stranger Things",
    year: 2016,
    genre: "Sci-Fi",
    rating: 8.9,
    description:
      "A group of kids uncover supernatural mysteries and government secrets in their small town.",
    poster: "images/stranger.jpg",
    cast: "Millie Bobby Brown, Finn Wolfhard, Winona Ryder",
    seasons: [
      {
        season: 1,
        episodes: [
          { title: "The Vanishing of Will Byers", link: "#" },
          { title: "The Weirdo on Maple Street", link: "#" },
        ],
      },
    ],
  },
  {
    title: "The Office",
    year: 2005,
    genre: "Comedy",
    rating: 8.9,
    description:
      "A mockumentary on a group of office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
    poster: "images/office.jpg",
    cast: "Steve Carell, John Krasinski, Jenna Fischer",
    seasons: [
      {
        season: 1,
        episodes: [
          { title: "Pilot", link: "#" },
          { title: "Diversity Day", link: "#" },
        ],
      },
    ],
  },
  {
    title: "Friends",
    year: 1994,
    genre: "Comedy",
    rating: 9.0,
    description:
      "Follows the lives of six friends in Manhattan as they navigate relationships, careers, and adulthood.",
    poster: "images/friends.jpeg",
    cast: "Jennifer Aniston, Courteney Cox, Matthew Perry",
    seasons: [
      {
        season: 1,
        episodes: [
          { title: "The One Where Monica Gets a Roommate", link: "#" },
          { title: "The One with the Sonogram at the End", link: "#" },
        ],
      },
    ],
  },
  {
    title: "WandaVision",
    year: 2021,
    genre: "Action",
    rating: 8.1,
    description:
      "Blending classic television and the Marvel Cinematic Universe, Wanda Maximoff and Vision live idealized suburban lives until reality starts to crack.",
    poster: "images/wandavision.jpg",
    cast: "Elizabeth Olsen, Paul Bettany, Kathryn Hahn",
    seasons: [
      {
        season: 1,
        episodes: [
          { title: "Filmed Before a Live Studio Audience", link: "#" },
          { title: "Don't Touch That Dial", link: "#" },
        ],
      },
    ],
  },
  {
    title: "Game of Thrones",
    year: 2011,
    genre: "Action",
    rating: 9.3,
    description:
      "Nine noble families wage war against each other to gain control over the mythical land of Westeros.",
    poster: "images/gameofthrones.jpg",
    cast: "Emilia Clarke, Kit Harington, Peter Dinklage",
    seasons: [
      {
        season: 1,
        episodes: [
          { title: "Winter Is Coming", link: "#" },
          { title: "The Kingsroad", link: "#" },
        ],
      },
    ],
  },
  {
    title: "BMF",
    year: 2021,
    genre: "Crime",
    rating: 7.5,
    description:
      "Based on a true story, *BMF* follows the Flenory brothers as they rise from the streets of Detroit to form one of America’s most powerful crime families.",
    poster: "images/bmf.jpg",
    cast: "Demetrius Flenory Jr., Da'Vinchi, Russell Hornsby",
    seasons: [
      {
        season: 1,
        episodes: [
          { title: "See It... Touch It... Obtain It", link: "#" },
          { title: "Rumors", link: "#" },
          { title: "Love All, Trust Few", link: "#" },
          { title: "Heroes", link: "#" },
          { title: "Secrets and Lies", link: "#" },
          { title: "Strictly Business", link: "#" },
          { title: "All in the Family", link: "#" },
          { title: "The King of Detroit", link: "#" },
        ],
      },
      {
        season: 2,
        episodes: [
          { title: "Family Dinner", link: "#" },
          { title: "New Beginnings", link: "#" },
          { title: "Detroit Hustle", link: "#" },
          { title: "Dirty Money", link: "#" },
          { title: "War Games", link: "#" },
          { title: "Power Moves", link: "#" },
          { title: "Final Call", link: "#" },
        ],
      },
    ],
  },
  {
    title: "The Mandalorian",
    year: 2019,
    genre: "Action",
    rating: 8.8,
    description:
      "A lone bounty hunter travels the outer reaches of the galaxy, far from the authority of the New Republic.",
    poster: "images/mandalonia.jpeg",
    cast: "Pedro Pascal, Gina Carano, Carl Weathers",
    seasons: [
      {
        season: 1,
        episodes: [
          { title: "Chapter 1: The Mandalorian", link: "#" },
          { title: "Chapter 2: The Child", link: "#" },
        ],
      },
    ],
  },
  {
    title: "Loki",
    year: 2021,
    genre: "Sci-Fi",
    rating: 8.2,
    description:
      "Loki, the God of Mischief, steps out of his brother's shadow in a new timeline adventure.",
    poster: "images/loki.jpg",
    cast: "Tom Hiddleston, Owen Wilson, Sophia Di Martino",
    seasons: [
      {
        season: 1,
        episodes: [
          { title: "Glorious Purpose", link: "#" },
          { title: "The Variant", link: "#" },
        ],
      },
    ],
  },
  {
    title: "Peaky Blinders",
    year: 2013,
    genre: "Drama",
    rating: 8.8,
    description:
      "A gangster family epic set in 1900s England, centered on a gang boss who is ambitious and ruthless.",
    poster: "images/peakyblinders.jpeg",
    cast: "Cillian Murphy, Paul Anderson, Helen McCrory",
    seasons: [
      {
        season: 1,
        episodes: [
          { title: "Episode 1", link: "#" },
          { title: "Episode 2", link: "#" },
        ],
      },
    ],
  },
  {
    title: "Gen V",
    year: 2023,
    genre: "Action",
    rating: 8.0,
    description:
      "Set in the same universe as *The Boys*, young superheroes are tested in a competitive college run by Vought International, where they uncover dark secrets about how heroes are truly made.",
    poster: "images/genv.jpg",
    cast: "Jaz Sinclair, Chance Perdomo, Lizze Broadway, Maddie Phillips",
    seasons: [
      {
        season: 1,
        episodes: [
          { title: "God U", link: "#" },
          { title: "First Day", link: "#" },
          { title: "Welcome to Godolkin", link: "#" },
          { title: "The Whole Truth", link: "#" },
          { title: "Jumanji", link: "#" },
          { title: "The White Room", link: "#" },
          { title: "Sick", link: "#" },
          { title: "Guardians of Godolkin", link: "#" },
        ],
      },
    ],
  },
  {
    title: "The Witcher",
    year: 2019,
    genre: "Action",
    rating: 8.0,
    description:
      "Geralt of Rivia, a monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    poster: "images/thewitcher.jpg",
    cast: "Henry Cavill, Anya Chalotra, Freya Allan",
    seasons: [
      {
        season: 1,
        episodes: [
          { title: "The End’s Beginning", link: "#" },
          { title: "Four Marks", link: "#" },
        ],
      },
    ],
  },
  {
    title: "Chief of War",
    year: 2024,
    genre: "Historical Drama",
    rating: 8.3,
    description:
      "An epic retelling of Hawaii’s unification through the eyes of its native warriors, led by Jason Momoa as Ka’iana. The series explores honor, leadership, and the struggle against colonization.",
    poster: "images/chiefofwar.jpg",
    cast: "Jason Momoa, Temuera Morrison, Luciane Buchanan",
    seasons: [
      {
        season: 1,
        episodes: [
          { title: "The Birth of a Chief", link: "#" },
          { title: "The Gathering Storm", link: "#" },
          { title: "The Warrior’s Path", link: "#" },
          { title: "Blood and Fire", link: "#" },
          { title: "The Great Battle", link: "#" },
          { title: "Oath of Honor", link: "#" },
          { title: "The Final Stand", link: "#" },
        ],
      },
    ],
  },
  {
    title: "Snowfall",
    year: 2017,
    genre: "Crime Drama",
    rating: 8.3,
    description:
      "Set in 1980s Los Angeles, *Snowfall* explores the first crack cocaine epidemic and its impact on the culture through multiple connected stories.",
    poster: "images/snowfall.jpeg",
    cast: "Damson Idris, Carter Hudson, Sergio Peris-Mencheta, Isaiah John",
    seasons: [
      {
        season: 1,
        episodes: [
          { title: "Pilot", link: "#" },
          { title: "Make Them Birds Fly", link: "#" },
          { title: "Slow Hand", link: "#" },
          { title: "Trauma", link: "#" },
          { title: "Seven-Four", link: "#" },
          { title: "A Long Time Coming", link: "#" },
          { title: "Baby Teeth", link: "#" },
          { title: "Cracking", link: "#" },
          { title: "The Rubicon", link: "#" },
          { title: "The World Is Yours", link: "#" },
        ],
      },
      {
        season: 2,
        episodes: [
          { title: "Sightlines", link: "#" },
          { title: "The Day", link: "#" },
          { title: "Prometheus Rising", link: "#" },
          { title: "The New Machine", link: "#" },
          { title: "Serpiente", link: "#" },
          { title: "The Offer", link: "#" },
          { title: "The Game That Moves as You Play", link: "#" },
        ],
      },
    ],
  },
  {
    title: "Money Heist",
    year: 2017,
    genre: "Action",
    rating: 8.5,
    description:
      "An unusual group of robbers attempts to carry out the most perfect heist in Spanish history.",
    poster: "images/money.png",
    cast: "Úrsula Corberó, Álvaro Morte, Itziar Ituño",
    seasons: [
      {
        season: 1,
        episodes: [
          { title: "Episode 1", link: "#" },
          { title: "Episode 2", link: "#" },
        ],
      },
    ],
  },
];

// ========== RENDER SERIES ==========
const container = document.getElementById("seriesList");

function renderSeries(list) {
  container.innerHTML = list
    .map(
      (s) => `
      <div class="card" onclick='openSeries(${JSON.stringify(s).replace(/'/g, "&apos;")})'>
        <div class="poster">
          <img src="${s.poster}" alt="${s.title}">
        </div>
        <div class="details">
          <h1>${s.title}</h1>
          <h2>${s.year}</h2>
          <div class="rating">
            ${renderStars(s.rating)} <span>${s.rating}/10</span>
          </div>
          <div class="tags"><span>${s.genre}</span></div>
          <p class="desc">${s.description}</p>
          <div class="cast">
            <h3>Cast</h3>
            <ul>
              ${s.cast
                .split(",")
                .map(
                  (name) =>
                    `<li><img src="https://ui-avatars.com/api/?name=${encodeURIComponent(
                      name.trim()
                    )}&background=random&rounded=true" alt="${name.trim()}"></li>`
                )
                .join("")}
            </ul>
          </div>
        </div>
      </div>`
    )
    .join("");
}

// ========== STAR RENDERING ==========
function renderStars(rating) {
  const filledStars = Math.round((rating / 10) * 5);
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += `<i class="fa-star ${i <= filledStars ? "fa-solid" : "fa-regular"}"></i>`;
  }
  return stars;
}

// ========== FILTER & SEARCH ==========
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const cat = btn.dataset.category;
    if (cat === "all") renderSeries(seriesList);
    else renderSeries(seriesList.filter((s) => s.genre.toLowerCase() === cat.toLowerCase()));
  });
});

document.getElementById("searchInput").addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  renderSeries(seriesList.filter((s) => s.title.toLowerCase().includes(term)));
});

// ========== OPEN SERIES DETAILS ==========
function openSeries(selected) {
  localStorage.setItem("selectedSeries", JSON.stringify(selected));
  window.location.href = "series-details.html";
}

// ========== INITIAL LOAD ==========
renderSeries(seriesList);