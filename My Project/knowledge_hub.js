// 1. ओपन फंक्शन
function openAbout() {
    document.getElementById("aboutPage").style.display = "flex";
}

// 2. क्लोज फंक्शन
function closeAbout() {
    document.getElementById("aboutPage").style.display = "none";
}

// 3. वेलकम मैसेज
function welcomeMessage() {
    alert("Welcome to EduLearn Website!");
} 

// ================= STATS COUNTER =================
function startCounters() {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        let target = parseInt(counter.getAttribute("data-target"));
        let count = 0;
        let increment = Math.ceil(target / 100);

        function updateCounter() {
            count += increment;
            if (count < target) {
                counter.innerText = count;
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        }
        updateCounter();
    });
}
window.addEventListener("load", startCounters);



// our courses
function openEnrollModal(courseName){

    document.getElementById("enrollModal").style.display = "flex";

    document.getElementById("selectedCourse").innerHTML =
    "Selected Course: <strong>" + courseName + "</strong>";
}

function closeEnrollModal(){

    document.getElementById("enrollModal").style.display = "none";
}

function submitEnrollment(){

    alert("🎉 Enrollment Successful!");

    closeEnrollModal();
}

function showCourseDetails(course){

    if(course === "HTML & CSS Mastery"){
        alert("Learn HTML5, CSS3, Flexbox, Grid and Responsive Design.");
    }

    else if(course === "JavaScript Development"){
        alert("Learn DOM, Events, APIs, ES6+, Async JavaScript.");
    }

    else if(course === "React JS Bootcamp"){
        alert("Learn Components, Hooks, Routing and State Management.");
    }

    else if(course === "Python Programming"){
        alert("Learn Python Fundamentals, Automation and Projects.");
    }
}

// faq section
// FAQ Accordion

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const faqItem = question.parentElement;

        document.querySelectorAll(".faq-item").forEach(item => {

            if(item !== faqItem){
                item.classList.remove("active");
            }

        });

        faqItem.classList.toggle("active");

    });

});

/* ===========================
   STUDENT REVIEW SLIDER
=========================== */

let currentReview = 0;

const reviewTrack =
document.getElementById("reviewTrack");

const reviewCards =
document.querySelectorAll(".review-card");

function nextReview(){

    currentReview++;

    if(currentReview >= reviewCards.length){
        currentReview = 0;
    }

    updateReviewSlider();
}

function prevReview(){

    currentReview--;

    if(currentReview < 0){
        currentReview = reviewCards.length - 1;
    }

    updateReviewSlider();
}

function updateReviewSlider(){

    const cardWidth =
    reviewCards[0].offsetWidth;

    reviewTrack.style.transform =
    `translateX(-${currentReview * cardWidth}px)`;
}

function showCourseDetails(course){

    let details = "";

    if(course === "HTML & CSS Mastery"){

        details =
        "Learn HTML5, CSS3, Flexbox, Grid, Responsive Design, Animations and build real-world websites.";

    }

    else if(course === "JavaScript Development"){

        details =
        "Master JavaScript, DOM Manipulation, ES6+, APIs, Events and Interactive Web Applications.";

    }

    else if(course === "React JS Bootcamp"){

        details =
        "Learn Components, Props, State, Hooks, Routing and modern React development.";

    }

    else if(course === "Python Programming"){

        details =
        "Learn Python fundamentals, automation, file handling and practical projects.";

    }

    alert(details);
}




// 4. क्विज फंक्शन
const quizData = [

{
    question: "What does HTML stand for?",

    options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Tool Markup Language",
        "Home Text Markup Language"
    ],

    answer: "Hyper Text Markup Language"
},

{
    question: "Which CSS property changes text color?",

    options: [
        "font-color",
        "text-color",
        "color",
        "background-color"
    ],

    answer: "color"
},

{
    question: "Which language is used to make websites interactive?",

    options: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap"
    ],

    answer: "JavaScript"
}

];

let currentQuestion = 0;
let score = 0;

const questionEl =
document.getElementById("question");

const optionsEl =
document.getElementById("options");

const progressEl =
document.getElementById("progress");

const nextBtn =
document.getElementById("nextBtn");

loadQuestion();

function loadQuestion(){

    let q = quizData[currentQuestion];

    questionEl.innerText = q.question;

    optionsEl.innerHTML = "";

    q.options.forEach(option => {

        let btn =
        document.createElement("button");

        btn.innerText = option;

        btn.classList.add("option-btn");

        btn.onclick = () =>
        checkAnswer(btn, option);

        optionsEl.appendChild(btn);

    });

    progressEl.innerText =
    `Question ${currentQuestion + 1} of ${quizData.length}`;

    nextBtn.style.display = "none";
}

function checkAnswer(button, selected){

    let correctAnswer =
    quizData[currentQuestion].answer;

    let buttons =
    document.querySelectorAll(".option-btn");

    buttons.forEach(btn => {

        btn.disabled = true;

        if(btn.innerText === correctAnswer){
            btn.classList.add("correct");
        }

    });

    if(selected !== correctAnswer){
        button.classList.add("wrong");
    }
    else{
        score++;
    }

    nextBtn.style.display = "inline-block";
}

function nextQuestion(){

    currentQuestion++;

    if(currentQuestion < quizData.length){

        loadQuestion();

    }else{

        showResult();

    }

}

function showResult(){

    document.querySelector(".quiz-box").innerHTML = `

        <h2>🎉 Quiz Completed!</h2>

        <h3>Your Score: ${score}/${quizData.length}</h3>

        <p>
        ${score === 3
            ? "Excellent! You have strong frontend knowledge."
            : score === 2
            ? "Good Job! Keep practicing."
            : "Keep Learning and Try Again."}
        </p>

        <button onclick="location.reload()">
            Restart Quiz
        </button>

    `;
}


/* CONTACT FORM */

document
.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    document.getElementById(
        "successMessage"
    ).innerHTML =

    "✅ Message Sent Successfully! Thank you for contacting Knowledge Hub.";

    this.reset();

});
const contactCards = document.querySelectorAll(".contact-card");

contactCards.forEach(card => {

    card.addEventListener("click", () => {

        card.style.transform = "scale(1.05)";

        setTimeout(() => {
            card.style.transform = "";
        }, 300);

    });

});





// 5. टॉगल फीचर फंक्शन
function toggleFeature(id) {
    let content = document.getElementById(id);
    if(content) {
        if(content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    }
}
const enrollForm = document.getElementById("enrollForm");

if(enrollForm){

    enrollForm.addEventListener("submit", function(e){

        e.preventDefault();

        const email =
        document.getElementById("userEmail").value;

        alert("🎉 Enrollment Successful!\n\nEmail: " + email);

        this.reset();

        closeFeatureModal('premiumModal');

    });

}

const elements = document.querySelectorAll(
".content-box, .card, .step, .testimonial, .cta"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

elements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});
// primium course

document.getElementById("premiumForm").addEventListener("submit", function(e){
    e.preventDefault();

    alert("🎉 Enrollment Successful! Welcome to Premium Course 🚀");

    this.reset();
});
// projects
function filterProjects(category){

    let cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {

        if(category === 'all'){
            card.style.display = 'block';
        }
        else{
            if(card.classList.contains(category)){
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }

    });

}
