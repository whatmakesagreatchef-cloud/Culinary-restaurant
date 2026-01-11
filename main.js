import { loadState, saveState, defaultState } from "./state.js";
import { render } from "./ui_screens.js";

console.log("Restaurant Empire Sim v2.0 - Initializing...");

let state = loadState();
console.log("State loaded, route:", state.route, "seenSetup:", state.seenSetup);

// first-run onboarding
if(!state.seenSetup){
  state.route = "setup";
  console.log("First run detected, switching to setup");
}

// allow ui_screens to request a fresh default
window.__RESIM_DEFAULT_STATE__ = defaultState;

function setState(mutator){
  state = mutator(state) || state;
  saveState(state);
  refresh();
}

function refresh(){
  try {
    document.querySelectorAll(".tab").forEach(btn=>{
      const r = btn.getAttribute("data-route");
      btn.classList.toggle("active", r === state.route);
    });
    render(state, setState);
  } catch (err) {
    console.error("Render error:", err);
    // Show error to user
    const app = document.getElementById("app");
    if (app) {
      app.innerHTML = `
        <div style="padding: 20px; color: #ff6b6b;">
          <h2>Error Loading Game</h2>
          <p>There was an error loading the game. Try refreshing the page.</p>
          <p style="font-size: 12px; opacity: 0.7;">Error: ${err.message}</p>
          <button onclick="location.reload()" style="margin-top: 10px; padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 8px; cursor: pointer;">
            Reload Page
          </button>
        </div>
      `;
    }
  }
}

document.addEventListener("click", (e)=>{
  const help = e.target.closest("[data-action=\"help\"]");
  if(help){
    setState(s=>{ s.route = "setup"; return s; });
    return;
  }

  const tab = e.target.closest(".tab");
  if(tab){
    const r = tab.getAttribute("data-route");
    setState(s=>{ s.route = r; return s; });
  }
});

// Add loading indicator
const app = document.getElementById("app");
if (app) {
  app.innerHTML = '<div style="padding: 40px; text-align: center; color: #7f8c8d;">Loading...</div>';
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', refresh);
} else {
  refresh();
}
