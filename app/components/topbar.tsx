import { Link } from "@remix-run/react";
import { EclipseIcon, MoonIcon, SunIcon } from "lucide-react";


export default function TobBar() {
  return (
    <div className="flex p-5">
      <h1 className="text-lg flex-1">AR</h1>
      { /* <nav>
         <ul className="flex space-x-5">
          <li>
            <Link to="/">
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/training"
            >
              Training
            </Link>
          </li>
          <li>
            <Link to="/manifesto">
              Manifesto
            </Link>
          </li>
        </ul>
      </nav> */ }
      <div className="flex flex-1 justify-end space-x-2">
        <button
          type="button"
          aria-label="System theme"  
          onClick={() => setTheme()}
        >
          <EclipseIcon />
        </button>
        <button
          type="button"
          aria-label="Light theme"  
          onClick={() => setTheme('light')}
        >
          <SunIcon/>
        </button>
        <button
          type="button"
          aria-label="Dark theme"  
          onClick={() => setTheme('dark')}
        >
          <MoonIcon/>
        </button>
      
      </div>
    </div>
  )
}


function setTheme(theme?: 'dark' | 'light') {
  if (theme) {
    localStorage.theme = theme;
  } else {
    localStorage.removeItem('theme');
  }

  // Update class based on new value
  document.documentElement.classList.toggle(
    'dark',
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
}
