import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Introduction from './components/introduction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <nav>
        <div>
            <h4>My Portfolio</h4>
        </div>
      </nav>
      <Introduction />
      <div class="skills">
        <div class="skills">SKILLS :</div>
        <ul>
          <li>MERN development</li>
          <li>Data Structures and Algorithms</li>
          <li>MongoDB</li>
          <li>Operating System</li>
          <li>Java and Javascript Programming</li>
        </ul>
        <div class="technologies">
          <div class="software">
            Techonology Used :
          </div>
          <ul>
            <li>VS Code</li>
            <li>Postman</li>
            <li>MongoDB</li>
            <li>Latex</li>
          </ul>
        </div>
        <div class="intrests">
          <div class="personalintrest">
            Intrests :
          </div>
          <ul>
            <li>Frontend development</li>
            <li>Backend development</li>
            <li>Data science enthusiast</li>
          </ul>
        </div>
      </div>
      <div class="projectSection">
        My Projects :
        <div class="todo">
          <h2>1. TODO list app using react : </h2>
          <p class="explain">
            Designed a modern todo app with priorities and deadlines, madde the structure using react and designing
            using CSS it stores the data in local storage and also helps to maintain task in priority order, also
            sorts each task according to the level of priority
          </p>
          <div class="links">See it : <a target="_blank"
            href="https://github.com/Vickysrivasta21/web-development-/tree/main/todo%20list%20app%20using%20React%20Project%205">Todo
            list app</a></div>
        </div>
        <div class="clones">
          <h2>2. UI clones of Popular websites - Amazon ,Flipkart</h2>
          <p class="explain">
            designed UI clones of popular websites such as Amazon, Flipkart, Netflix, spotify using html css and
            javascript , worked on responsiveness and SEO optimization using properties such as flex, grid layouts
            practiced component based design and visual hierarchy using tools like canva for planning
          </p>

          <div class="links">See it here :
            <ul>
              <li><a target="_blank"
                href="https://github.com/Vickysrivasta21/web-development-/tree/main/project%201%20amazon%20clone">Amazon
                Clone</a></li>
              <li><a target="_blank"
                href="https://github.com/Vickysrivasta21/web-development-/tree/main/project%202%20netflix%20clone%20in%20html%20n%20css">Netflix
                Clone</a></li>
              <li><a target="_blank"
                href="https://github.com/Vickysrivasta21/web-development-/tree/main/project%204%20spotify%20clone%20using%20html%20css%20and%20js">Spotify
                Clone</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="contacts">
        Connect with me :
        <ul>
          <li><a target="_blank"
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlHmlbTJsrTVtjScHkSqnhgMLgGCLwpkBRNMmFWTwSBjphwplLKmMkGGStTHfLQmnGgljq"><img
              src="Gmail_icon_(2020).svg.png"
              alt=""/>Email</a></li>
          <li><a target="_blank" href="www.linkedin.com/in/avnish-srivastava-4952801b6"><img
            src="LinkedIn_icon.svg.webp"
            alt=""/>Linkedin</a></li>
          <li><a target="_blank" href="https://github.com/Vickysrivasta21"><img
            src="github-fill-vuouq0ozezpemvb5gwnatr.webp"
            alt=""/>GitHub</a></li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default App
