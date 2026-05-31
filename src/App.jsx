import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import profileImg from './assets/img_Avatar.png'
import irlPic from './assets/img_irlPic.jpg'
import './App.css'

// 1. Reusable Dropdown Component handling its own open/close state
function DropdownCard({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="containerDiv">
      {/* Replaces old addEventListener with React onClick */}
      <h3 
        className="dropdown-header" 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ cursor: 'pointer' }}
      >
        {title}
      </h3>
      {/* Conditionally applies the 'show' class when isOpen is true */}
      <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
        {children}
      </div>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0) // Kept in case you are tracking Vite default button actions

  return (
    <>
      <div className="portfolio-card">
        <div className="content">
          
          <div className="containerDiv">
            <h2>John Angelo C. Mabingnay</h2>
          </div>

          <div className="containerDiv">
            <div className="image-container">
              <div className="img-box">
                <img src={profileImg} alt="Profile" />
                <span className="img-label"> Me</span>
              </div>
              <div className="img-box">
                <img src={irlPic} alt="In Real Life" />
                <span className="img-label"> In Real Life</span>
              </div>
            </div>
          </div>

          <div className="info-section">
            
            {/* Profile Details */}
            <DropdownCard title="Profile Details">
              <ul className="nested-list">
                <li><strong>Gender:</strong> <span style={{ color: 'skyblue' }}>Male</span></li>
                <li><strong>Pronouns:</strong> He/<strike>Him</strike></li>
                <li><strong>Age:</strong> 23</li>
                <li><strong>Birthday:</strong> 8/8/2002</li>
              </ul>
            </DropdownCard>

            {/* Work Experience */}
            <DropdownCard title="Work Experience">
              <ul className="nested-list">
                <li>Game Pilot or Account Booster (2020-Present)</li>
              </ul>
            </DropdownCard>

            {/* Skills */}
            <DropdownCard title="Skills">
              <ul className="nested-list">
                <li>Programming Languages: Python, JavaScript, Assembly*, C*, C++, C#, Java*</li>
                <li>Web Development: HTML, CSS</li>
                <li>Data Analysis: SQL*, Excel</li>
                <li>Game Development: Godot*, Scratch</li>
                <li style={{ listStyleType: 'none', marginTop: '5px' }}>
                  <span style={{ color: 'skyblue' }}>
                    ...<strong>Note:</strong> Skills marked with an asterisk (*) are currently being developed or not recently used.
                  </span>
                </li>
              </ul>
            </DropdownCard>

            {/* Education */}
            <DropdownCard title="Education">
              <ul className="nested-list">
                <li>Preschool - TADS Learning academy</li>
                <li>Elementary - Francisco Homes Elementary School</li>
                <li>High School - First City Providential College</li>
                <li>
                  College or Higher Education
                  <ul>
                    <li>Bulacan State University - [2021-2021] BS Computer Engineering*</li>
                    <li>First City Providential College - [2022-2024] BS Information Technology*</li>
                    <li>STI San Jose Del Monte - [2024-2026] BS Information Technology</li>
                  </ul>
                </li>
                <li style={{ marginTop: '5px' }}>
                  <span style={{ color: 'skyblue' }}>
                    ...<strong>Note:</strong> The first college entry is marked with an asterisk (*) as I transferred to another institution and/or did not complete the degree there.
                  </span>
                </li>
              </ul>
            </DropdownCard>

            {/* Favorites */}
            <DropdownCard title="Favorites">
              <ul className="nested-list">
                <li>
                  <strong>Quote:</strong> <br />
                  <ul>
                    <li><i>"If they stare, give them something to see."</i></li>
                  </ul>
                </li>
                <li>🍔: Borgar</li>
                <li>🥤: CocaCola</li>
              </ul>
            </DropdownCard>

            {/* Hobbies */}
            <DropdownCard title="Hobbies">
              <ul className="nested-list">
                <li><strong>Gaming:</strong> Overwatch, Genshin, ZZZ</li>
                <li><strong>Theory Crafting:</strong> Character ROI calculations</li>
              </ul>
            </DropdownCard>

            {/* Socials */}
            <DropdownCard title="Socials">
              <ul className="nested-list">
                <li>📧 <a href="mailto:johnangelomabingnay@gmail.com">Email</a></li>
                <li>🔗 <a href="https://steamcommunity.com/id/giloisgud/" target="_blank" rel="noopener noreferrer">Steam</a></li>
                <li>💻 <a href="https://github.com/Gilolicon" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li>👔 <a href="https://www.linkedin.com/in/john-angelo-mabingnay-8325253b1/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li>🎮 Discord: fischlbestgirl</li>
              </ul>
            </DropdownCard>

          </div> {/* End info-section */}

        </div> {/* End content */}
      </div> {/* End portfolio-card */}
    </>
  )
}

export default App