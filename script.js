const movies = [
    {
      id: 1,
      title: "Minecraft",
      img: "New folder/Minecraft.jpg",
      ratingLink: "https://www.imdb.com/title/tt3566834/"
    },
    {
      id: 2,
      title: "Jocker",
      img: "New folder/Jocker.jpg",
      ratingLink: "https://www.imdb.com/title/tt7286456/?ref_=nv_sr_srsg_3_tt_5_nm_3_in_0_q_jocker"
    },
    {
      id: 3,
      title: "Mufasa",
      img: "New folder/Mufasa.jpg",
      ratingLink: "https://www.imdb.com/title/tt13186482/?ref_=fn_all_ttl_1"
    }
  ];
  
  const trending = [
    {
      id: 4,
      title: "Chaava",
      img: "New folder/CHAAVA.jpg",
      ratingLink: "https://www.imdb.com/title/tt27922706/?ref_=nv_sr_srsg_0_tt_6_nm_2_in_0_q_chaava/"
    },
    {
      id: 5,
      title: "Lunar Echo",
      img: "images/movie5.jpg",
      ratingLink: "https://www.imdb.com/title/tt0133093/"
    },
    {
      id: 6,
      title: "Crimson Tide",
      img: "images/movie6.jpg",
      ratingLink: "https://www.imdb.com/title/tt12361974/"
    }
  ];
  
  function alertSubscribe() {
    alert("Thanks for your interest! Subscription coming soon.");
  }
  
  function renderMovies(list, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    list.forEach(movie => {
      const wrapper = document.createElement("div");
      wrapper.style.position = "relative";
      wrapper.style.display = "inline-block";
  
      const img = document.createElement("img");
      img.src = movie.img;
      img.alt = movie.title;
      img.title = `${movie.title}`;
  
      img.onclick = () => {
        const goToRating = confirm(`🎬 ${movie.title}\n\nView rating page?`);
        if (goToRating) {
          window.open(movie.ratingLink, "_blank");
        }
        const addToList = confirm("Add to My List?");
        if (addToList) {
          addToMyList(movie);
        }
      };
  
      wrapper.appendChild(img);
      container.appendChild(wrapper);
    });
  }
  
  function addToMyList(movie) {
    let myList = JSON.parse(localStorage.getItem("myList")) || [];
    if (!myList.find(m => m.id === movie.id)) {
      myList.push(movie);
      localStorage.setItem("myList", JSON.stringify(myList));
      alert(`${movie.title} added to My List!`);
    } else {
      alert(`${movie.title} is already in your list.`);
    }
  }
  
  function showMyList() {
    document.getElementById("myListSection").style.display = "block";
    const myList = JSON.parse(localStorage.getItem("myList")) || [];
    renderMovies(myList, "myList");
  }
  
  // Initial render
  renderMovies(movies, "popular");
  renderMovies(trending, "trending");
  