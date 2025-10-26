// ====== Data: 10 sample movies ======
const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    rating: "8.8",
    poster: "images/inception.jpg",
    description: "A thief enters people's dreams to steal secrets and plant ideas.",
    genre: "sci-fi",
    cast: ["Leonardo DiCaprio","Joseph Gordon-Levitt","Elliot Page"],
    download: "downloads/inception.mp4"
  },
  {
    id: 2,
    title: "Avengers: Endgame",
    year: 2019,
    rating: "8.4",
    poster: "images/avengers.jpg",
    description: "The Avengers assemble to undo the damage caused by Thanos.",
    genre: "action",
    cast: ["Robert Downey Jr.","Chris Evans","Scarlett Johansson"],
    download: "downloads/avengers.mp4"
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    rating: "8.6",
    poster: "images/insteller.jpg",
    description: "Explorers travel through a wormhole in search of a new home for humanity.",
    genre: "sci-fi",
    cast: ["Matthew McConaughey","Anne Hathaway","Jessica Chastain"],
    download: "downloads/interstellar.mp4"
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    rating: "9.0",
    poster: "images/dark knight.jpg",
    description: "Batman faces his greatest test against the Joker.",
    genre: "drama",
    cast: ["Christian Bale","Heath Ledger","Aaron Eckhart"],
    download: "downloads/darkknight.mp4"
  },
  {
    id: 5,
    title: "The Hangover",
    year: 2009,
    rating: "7.7",
    poster: "images/hangover.jpg",
    description: "Three friends lose the groom after a wild night in Vegas.",
    genre: "comedy",
    cast: ["Bradley Cooper","Ed Helms","Zach Galifianakis"],
    download: "downloads/hangover.mp4"
  },
  {
    id: 6,
    title: "Black Panther",
    year: 2018,
    rating: "7.3",
    poster: "images/panther.jpg",
    description: "T'Challa returns to Wakanda to take his place as king.",
    genre: "action",
    cast: ["Chadwick Boseman","Michael B. Jordan","Lupita Nyong'o"],
    download: "downloads/blackpanther.mp4"
  },
  {
    id: 7,
    title: "Jumanji: Welcome to the Jungle",
    year: 2017,
    rating: "7.0",
    poster: "images/Jumanji.png",
    description: "Four teenagers are sucked into a magical video game and must play to survive.",
    genre: "comedy",
    cast: ["Dwayne Johnson","Kevin Hart","Jack Black"],
    download: "downloads/jumanji.mp4"
  },
  {
    id: 8,
    title: "Titanic",
    year: 1997,
    rating: "7.8",
    poster: "images/titanic.jpg",
    description: "A tragic romance unfolds aboard the ill-fated RMS Titanic.",
    genre: "drama",
    cast: ["Leonardo DiCaprio","Kate Winslet"],
    download: "downloads/titanic.mp4"
  },
  {
    id: 9,
    title: "Guardians of the Galaxy",
    year: 2014,
    rating: "8.0",
    poster: "images/galaxy.jpg",
    description: "A group of intergalactic misfits must band together to stop a fanatical warrior.",
    genre: "action",
    cast: ["Chris Pratt","Zoe Saldana","Dave Bautista"],
    download: "downloads/guardians.mp4"
  },
  {
    id: 10,
    title: "The Mask",
    year: 1994,
    rating: "6.9",
    poster: "images/mask.jpeg",
    description: "A timid bank clerk finds a magical mask that unleashes his inner wild side.",
    genre: "comedy",
    cast: ["Jim Carrey","Cameron Diaz"],
    download: "downloads/mask.mp4"
  }
];

// ====== Render functions ======
const movieList = document.getElementById("movieList");
const searchInput = document.getElementById("searchInput");
const filterBtns = document.querySelectorAll(".filter-btn");

function makeCard(m){
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="poster"><img src="${m.poster}" alt="${escapeHtml(m.title)}"></div>
    <div class="details">
      <h1>${escapeHtml(m.title)}</h1>
      <h2>${m.year} • ${m.rating} • ${capitalizeGenre(m.genre)}</h2>
      <div class="rating">${starsFromRating(m.rating)} <span>${m.rating}/10</span></div>
      <div class="tags">
        <span class="tag">${capitalizeGenre(m.genre)}</span>
      </div>
      <p class="desc">${escapeHtml(m.description)}</p>
      <div class="cast">
        <h3>Cast</h3>
        <ul>${m.cast.map(c => `<li><img src="images/placeholder-avatar.png" alt="${escapeHtml(c)}" title="${escapeHtml(c)}"></li>`).join("")}</ul>
      </div>
    </div>
  `;

  // Click behavior: store movie and open details
  card.addEventListener("click", (e)=>{
    // If click target is the cast avatar or inside details, still open details page
    localStorage.setItem("selectedMovie", JSON.stringify(m));
    window.location.href = "movie.html";
  });

  // Touch fallback for mobile: tap to toggle details (no hover)
  card.addEventListener("touchstart", function toggleTouch(){
    if(card.classList.contains("tapped")){
      // second tap -> go to movie page
      localStorage.setItem("selectedMovie", JSON.stringify(m));
      window.location.href = "movie.html";
    } else {
      document.querySelectorAll(".card.tapped").forEach(c => c.classList.remove("tapped"));
      card.classList.add("tapped");
      setTimeout(()=> card.classList.remove("tapped"), 3000); // clear after 3s
    }
  }, {passive:true});

  return card;
}

function renderList(list){
  if(!movieList) return;
  movieList.innerHTML = "";
  if(list.length === 0){
    movieList.innerHTML = `<p style="color:var(--muted);padding:40px;text-align:center">No movies found.</p>`;
    return;
  }
  const frag = document.createDocumentFragment();
  list.forEach(m => frag.appendChild(makeCard(m)));
  movieList.appendChild(frag);
}

// ====== Utilities ======
function escapeHtml(s){
  if(!s) return "";
  return String(s).replace(/[&<>"']/g, function(ch){
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[ch];
  });
}
function capitalizeGenre(g){
  if(!g) return "";
  return g.replace(/\b\w/g, t => t.toUpperCase());
}
function starsFromRating(r){
  // r is string or number 0-10 -> convert to 5-star scale and show up to 5 solid stars and maybe half
  const num = Number(r);
  const five = Math.round((num/10)*10)/2; // rounds to nearest 0.5
  const full = Math.floor(five);
  const half = (five - full) >= 0.5 ? 1 : 0;
  let out = "";
  for(let i=0;i<full;i++) out += '<i class="fas fa-star"></i>';
  if(half) out += '<i class="fas fa-star-half-alt"></i>';
  const empty = 5 - full - half;
  for(let i=0;i<empty;i++) out += '<i class="far fa-star"></i>';
  return out;
}

// ====== Initial render (all movies) ======
renderList(movies);

// ====== Search ======
if(searchInput){
  searchInput.addEventListener("input", (e)=>{
    const v = e.target.value.trim().toLowerCase();
    const filtered = movies.filter(m => m.title.toLowerCase().includes(v) || m.description.toLowerCase().includes(v) || (m.cast.join(" ").toLowerCase().includes(v)));
    // keep current category filter if one active
    const active = document.querySelector(".filter-btn.active");
    const cat = active ? active.dataset.category : "all";
    renderList( cat === "all" ? filtered : filtered.filter(m => m.genre === cat) );
  });
}

// ====== Category filter ======
filterBtns.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const cat = btn.dataset.category;
    if(cat === "all") renderList(movies);
    else renderList(movies.filter(m => m.genre === cat));
  });
});