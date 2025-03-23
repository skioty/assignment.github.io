// Club data
const clubs = [
  {
    name: "ACM Club",
    desc: "The ACM Club fosters a passion for computing by engaging students in coding, research, tech talks, and collaborative projects in computer science and IT.",
    image: "club1.jpg",
    leader: "Tashi Dorji",
    contact: "+97517123456",
    whatsapp: "https://chat.whatsapp.com/yourgroupid"
  },
  
  {
    name: "BTO Club",
    desc: "Participate in public toilet cleaning activities both within and outside the campus.",
    image: "club2.jpg",
    leader: "Rinchen Dorji",
    contact: "+97517342656",
    whatsapp: "https://chat.whatsapp.com/yourgroupid"
  },

  {
    name: "Cultural Club",
    desc: "Organizes diverse traditions, music, and performances for entertainment in the campus.",
    image: "club3.jpg",
    leader: "Rinchen Dema",
    contact: "+97517327829",
    whatsapp: "https://chat.whatsapp.com/yourgroupid"
  },

  {
    name: "Kuenphen Tshogpa Club",
    desc: "A community service club dedicated to empowering students to make a positive impact through volunteer work, social initiatives, and local outreach programs.",
    image: "club4.jpg",
    leader: "Tshering Wangdi",
    contact: "+97577721892",
    whatsapp: "https://chat.whatsapp.com/yourgroupid"
  },

  {
    name: "GNH Club",
    desc: "The GNH Club promotes the values of Gross National Happiness by encouraging student-led initiatives focused on well-being, sustainability, and community harmony.",
    image: "club5.jpg",
    leader: "Tashi Lhamo",
    contact: "+97517563872",
    whatsapp: "https://chat.whatsapp.com/yourgroupid"
  },

  {
    name: "Literary Club",
    desc: "Organizes activities like debate competition, quiz competition, extempore speech, etc.",
    image: "club6.jpg",
    leader: "Meewang Delma",
    contact: "+97517753342",
    whatsapp: "https://chat.whatsapp.com/yourgroupid"
  },

  {
    name: "Maintenance club",
    desc: "The members of this club work within the campus in the hostels and staff quarters to fix any kind of electrical issues like repairing and maintenance of switches, fans, tube lights, etc.",
    image: "club7.jpg",
    leader: "Hallal Dorji",
    contact: "+97517847536",
    whatsapp: "https://chat.whatsapp.com/yourgroupid"
  },

  {
    name: "Media Club",
    desc: "This club captures all the important events that the College organizes in the form of Pictures, Videos, etc. The club also works on the student leaders election activities.",
    image: "club8.jpg",
    leader: "Bhimraj Chhetri",
    contact: "+97577774323",
    whatsapp: "https://chat.whatsapp.com/yourgroupid"
  },

  {
    name: "Rangzhing Thuendrel Tshogpa(Nature Club)",
    desc: "The Nature Club inspires students to protect the environment through awareness campaigns, clean-up drives, tree plantations, and nature-based activities.",
    image: "club9.jpg",
    leader: "Dawa Dorji",
    contact: "+97516337765",
    whatsapp: "https://chat.whatsapp.com/yourgroupid"
  },

  {
    name: "Radio Club",
    desc: "The Radio Club provides a creative platform for students to express themselves through audio content, podcasts, and campus broadcasts, fostering communication and media skills.",
    image: "club10.jpg",
    leader: "Lhagyel Deezang Dorji",
    contact: "+97517574335",
    whatsapp: "https://chat.whatsapp.com/yourgroupid"
  },

  {
    name: "Rovers Club",
    desc: "This club dedicates its time mainly on providing the community services like sensitizing the community on any emerging issues like violence, participate in cleaning campaigns, etc.",
    image: "club11.jpg",
    leader: "Dema Lhayang Yangzom",
    contact: "+97517745638",
    whatsapp: "https://chat.whatsapp.com/yourgroupid"
  },

  {
    name: "Nangpai Zhenu Club(Spiritual club)",
    desc: "The members of this club organize & participate in morning prayer, evening prayer, college Rimdo, Lungta recitation, organize demise puja, etc.",
    image: "club12.jpg",
    leader: "Tshewang Dorji",
    contact: "+97517367832",
    whatsapp: "https://chat.whatsapp.com/yourgroupid"
  },

  {
    name: "Y-Peer Club",
    desc: "The members in this club create awareness and do advocacy programs on the youth & women related issues like an adolescent, sexual education, sexual harassment, substance abuse, Sexual Rights and Health Rights, etc.",
    image: "club13.jpg",
    leader: "Gawa Seldey",
    contact: "+97517802193",
    whatsapp: "https://chat.whatsapp.com/yourgroupid"
  },
];

// Generate club cards
const container = document.getElementById("clubsContainer");

clubs.forEach((club) => {
  const col = document.createElement("div");
  col.className = "col-md-4 mb-4";

  col.innerHTML = `
  <div class="card club-card h-100 shadow">
    <img src="${club.image}" class="card-img-top" alt="${club.name}">
    <div class="card-body">
      <h5 class="card-title">${club.name}</h5>
      <p class="card-text">${club.desc}</p>
      <button 
        class="btn btn-primary view-club-btn"
        data-bs-toggle="modal"
        data-bs-target="#clubDetailModal"
        data-name="${club.name}"
        data-desc="${club.desc}"
        data-image="${club.image}"
      >View More</button>
    </div>
  </div>
`;

  container.appendChild(col);
});

// Event Slide Click Handler
document.querySelectorAll('.event-slide').forEach(slide => {
  slide.addEventListener('click', function () {
    // Get data from slide
    const title = this.dataset.title;
    const desc = this.dataset.desc;
    const date = this.dataset.date;
    const location = this.dataset.location;
    const image = this.src;

    // Populate modal content
    document.getElementById('eventDetailLabel').innerText = title;
    document.getElementById('eventModalDescription').innerText = desc;
    document.getElementById('eventModalDate').innerText = date;
    document.getElementById('eventModalLocation').innerText = location;
    document.getElementById('eventModalImage').src = image;

    // Set contact info
    document.getElementById('clubLeaderName').innerText = club.leader || "N/A";
    document.getElementById('clubLeaderPhone').innerText = club.contact || "N/A";
    document.getElementById('clubLeaderPhone').href = `tel:${club.contact}`;
    document.getElementById('clubWhatsappLink').href = club.whatsapp || "#";
  });
});

// Handle Club "View More" button click
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('view-club-btn')) {
    const button = e.target;
    const name = button.getAttribute('data-name');
    const desc = button.getAttribute('data-desc');
    const image = button.getAttribute('data-image');

    const club = clubs.find(c => c.name === name);

    // Set modal content
    document.getElementById('clubDetailLabel').innerText = name;
    document.getElementById('clubModalDescription').innerText = desc;
    document.getElementById('clubModalImage').src = image;

    // Set contact info
    document.getElementById('clubLeaderName').innerText = club.leader || "N/A";
    document.getElementById('clubLeaderPhone').innerText = club.contact || "N/A";
    document.getElementById('clubLeaderPhone').href = `tel:${club.contact}`;
    document.getElementById('clubWhatsappLink').href = club.whatsapp || "#";

    // Reset form and message
    document.getElementById('clubRegistrationForm').reset();
    document.getElementById('formMessage').classList.add('d-none');
  }
});

// Handle form submission
document.getElementById('clubRegistrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  document.getElementById('formMessage').classList.remove('d-none');
});

