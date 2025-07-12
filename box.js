const ideaBox = document.getElementById("ideaBox");

// Initial ideas
let ideas = [
  { text: "Build a personal portfolio with 3D animations", category: "Project" },
  { text: "Create a shoe customization business", category: "Business" },
  { text: "Start a 7-day productivity challenge", category: "Fun" },
  { text: "Build a gratitude journaling app", category: "Project" },
  { text: "Launch a local snack review blog", category: "Business" }
];

// Load saved ideas from localStorage
const savedIdeas = JSON.parse(localStorage.getItem("customIdeas")) || [];
ideas = ideas.concat(savedIdeas);

// Show random idea
function getRandomIdea() {
  const randomIndex = Math.floor(Math.random() * ideas.length);
  const idea = ideas[randomIndex];
  ideaBox.innerHTML = `<strong>[${idea.category}]</strong> ${idea.text}`;
}

// Add user idea
function addIdea() {
  const ideaText = document.getElementById("userIdea").value.trim();
  const category = document.getElementById("ideaCategory").value;

  if (ideaText) {
    const newIdea = { text: ideaText, category };
    ideas.push(newIdea);

    // Save to localStorage
    savedIdeas.push(newIdea);
    localStorage.setItem("customIdeas", JSON.stringify(savedIdeas));

    document.getElementById("userIdea").value = "";
    getRandomIdea(); // Show new idea
  } else {
    alert("Please enter an idea before adding!");
  }
}
