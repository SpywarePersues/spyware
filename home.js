const nav = document.querySelector('nav');
let prev = window.pageYOffset;

window.addEventListener('scroll', function(){
  let current = window.pageYOffset;
  if(prev < current){
    nav.classList.add('hide');
  }
  else {
    nav.classList.remove('hide');
    }

    prev = current;

})


  

function Navbar() {
    return (
        <div>
            <nav>
                <ol className="nav--ol">
                    <a href="#">
                        <li className="li-1"><span className="plain-green-text">01.</span> About</li>
                    </a>
                    <a href="#e">
                        <li className="li-2"><span className="plain-green-text">02.</span> Projects</li>
                    </a>
                    <a href="#s"> 
                        <li className="li-3"><span className="plain-green-text">03.</span> Skills</li>
                    </a>
                    <a href="#x"> 
                        <li className="li-4"><span className="plain-green-text">04.</span> Contact</li>
                    </a> 
                </ol>
                <button className="nav--btn"><a href="#">Log In</a></button>
                <a href="#">
                    <img src="img/MasterPiece-modified.png" className="nav--logo"></img>
                </a>
            </nav>
        </div>
    )
}

function Main() {
    return (
        <main>
            <ul class="social-icons">
                <li><a href="https://github.com/SpywarePersues" aria-label="GitHub" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#a8b2d1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a></li><li><a href="https://www.instagram.com/bchiang7" aria-label="Instagram" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#a8b2d1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a></li><li><a href="https://twitter.com/bchiang7" aria-label="Twitter" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#a8b2d1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><title>Twitter</title><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a></li><li><a href="https://www.linkedin.com/in/spywareperseus/" aria-label="Linkedin" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#a8b2d1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a></li></ul>
            <hr className="hr1"></hr>
            <hr className="hr2"></hr>
            <ul><li className="mail"><a href="mailto:spywarepersues284@gmail.com">spywarepersues284@gmail.com</a></li></ul>
            <h1 className="name">Hi, My Name Is</h1>
            <h2 className="heading">SpywarePerseus.</h2>
            <h2 className="heading2">I build things for the internet.</h2>
            <p className="name-p">I am a developer, writer, hacker and a speaker, I started programming in June 2021 and 2021 is my golden year, cause i found out that in which field i am good at.</p>
            <button className="main--btn"><a href="https://top.gg/bot/907081619637149776" target="_blank">Check Out My Discord Bot!!</a></button>
        </main>
    )
}

const name = "(Supriyo)"

function About() {
    return (
        <div id="about">
            <h1 className="about-head"><span className="plain-green-text">01. </span>About Me</h1>
            <hr className="hr-3"></hr>
            <p className="about-p">Hello! My name is SpywarePerseus <span className="green-text">{name}</span> and I enjoy creating things that are live on the internet. My interest in programming started back in june 2021 when I decided to make my own things on internet — I started from creating discord bots.</p>
            <p className="about-p2">I also recently launched a discord bot named <a href="https://top.gg/bot/907081619637149776" target="_blank" className="green-text">Plufer</a> that covers everything you need to Have in a discord bot, I made it using <a href="https://discord.js.org/" target="_blank" className="green-text">Discord.js</a> And <a href="https://aoi.leref.ga/" target="_blank" className="green-text">Aoi.js.</a></p>
            <p className="about-p3">Some <span className="green-text">Programming Languages</span> that i am learning right now :</p>
            <p className="langv1"><span className="plain-green-text">01.</span> React.js</p>
            <p className="langv1"><span className="plain-green-text">02.</span> Discord.js</p>
            <p className="langv1"><span className="plain-green-text">03.</span> Aoi.js</p>
            <p className="langv2"><span className="plain-green-text">04.</span> Perl</p>
            <p className="langv3"><span className="plain-green-text">05.</span> Flutter</p>
            <p className="langv3"><span className="plain-green-text">06.</span> SQL</p>
            <img src="img/MasterPiece.png" className="about-img"></img>
            <div class="img-border">
                <p></p>
            </div>
        </div>
    )
}

function Fprojects() {
    return (
        <div>
            <h1 className="Fprojects-header"><span className="plain-green-text">02. </span>Featured Project</h1>
            <hr className="hr-4"></hr>
            <div className="itz">
                <div className="itz-about-box">
                    <p></p>
                </div>
                <p className="itz-about"><a href="https://itzdevs.vercel.app" target="_blank" className="green-text">Itz_Developers</a> a community with so many competitions coming!! participate to win rewards there are paid competitions as well as free competitions!! <a href="https://discord.gg/AyG5e2SAqH" target="_blank" className="green-text">Register now!!</a></p>
                <a href="https://itzdevs.vercel.app" target="_blank">
                    <img src="img/itz.png" className="itz-image"></img>
                </a>
                <p className="featured-itz">Featured Project</p>
                <a href="https://itzdevs.vercel.app" target="_blank" className="itz-header">ITZ_DEVELOPERS</a>
                <p className="itz-prop1"><span className="green-text">Programming</span></p>
                <p className="itz-prop2"><span className="green-text">Gaming</span></p>
                <p className="itz-prop3"><span className="green-text">Competitions</span></p>
                <p className="itz-prop4"><span className="green-text">Rewards</span></p>
            </div>
            
        </div>
    )
}

function Projects() {
    return (
        <div>
            <h1 className="projects-header"><span className="plain-green-text">03. </span>Other projects</h1>
            <hr className="hr-5"></hr>
            <div className="div-plufer">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 154 154" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="plufer-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <h2 className="plufer-header"><a href="https://top.gg/bot/907081619637149776" target="_blank" className="green-text">Plufer - Discord Bot</a></h2>
                <p className="plufer-p"><span className="green-text">Plufer</span>, A discord moderation bot, Maintained and developed by <span className="green-text">SpywarePerseus</span>, Plufer was born in 2021, as mentioned before my golden year, Firstly it was developed by only using <span className="green-text">AOI.JS</span> But later i added <span className="green-text">Discord.js</span> too into Plufer.</p>
                <p className="plufer-prop-1"><span className="grey-text">AOI.JS</span></p>
                <p className="plufer-prop-2"><span className="grey-text">DISCORD.JS</span></p>
                <p className="plufer-prop-3"><span className="grey-text">GLITCH.COM</span></p>
                <p className="plufer-prop-4"><span className="grey-text">DBH</span></p>
            </div>
        </div>
    )
}

function Pageone() {
    return (
        <div id="home">
            <Navbar />
            <Main />
        </div>
    )
}

function App() {
    return (
        <div>
            <Pageone />
            <About />
            <Fprojects />
            <Projects />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))


