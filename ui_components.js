export function money(n){
  const v = Math.round(n);
  const sign = v < 0 ? "-" : "";
  return `${sign}$${Math.abs(v).toLocaleString()}`;
}

export function pct(n){
  return `${(n*100).toFixed(1)}%`;
}

export function el(html){
  const d = document.createElement("div");
  d.innerHTML = html.trim();
  return d.firstElementChild;
}

export function topTags(obj, limit=6){
  return Object.entries(obj || {}).sort((a,b)=> b[1]-a[1]).slice(0,limit);
}

// Enhanced UI components with tooltips, tutorials, and mobile-friendly design

// Tooltip component - shows helpful info on tap/hover
export function tooltip(text, content) {
  return `
    <span class="tooltip-trigger" data-tooltip="${escapeHtml(text)}">
      ${content}
      <span class="tooltip-icon">?</span>
    </span>
  `;
}

// Info card with optional tooltip
export function infoCard(label, value, tooltipText = null) {
  const content = `
    <div class="info-card">
      <div class="info-card__label">${label}</div>
      <div class="info-card__value">${value}</div>
    </div>
  `;
  return tooltipText ? tooltip(tooltipText, content) : content;
}

// Status badge with color coding
export function badge(text, type = "default") {
  const classes = {
    success: "badge--success",
    warning: "badge--warning",
    danger: "badge--danger",
    info: "badge--info",
    default: "badge--default"
  };
  return `<span class="badge ${classes[type] || classes.default}">${text}</span>`;
}

// Metric display with trend indicator
export function metricDisplay(label, value, change = null, tooltipText = null) {
  let trendHtml = "";
  if (change !== null) {
    const trendClass = change > 0 ? "trend--up" : change < 0 ? "trend--down" : "trend--flat";
    const trendIcon = change > 0 ? "↑" : change < 0 ? "↓" : "→";
    trendHtml = `<span class="metric-trend ${trendClass}">${trendIcon} ${Math.abs(change)}</span>`;
  }
  
  const content = `
    <div class="metric">
      <div class="metric__label">${label}</div>
      <div class="metric__value">${value} ${trendHtml}</div>
    </div>
  `;
  
  return tooltipText ? tooltip(tooltipText, content) : content;
}

// Progress bar
export function progressBar(value, max, label = "", type = "default") {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));
  const colorClass = type === "success" ? "progress--success" :
                     type === "warning" ? "progress--warning" :
                     type === "danger" ? "progress--danger" : "";
  
  return `
    <div class="progress-wrapper">
      ${label ? `<div class="progress__label">${label}</div>` : ""}
      <div class="progress ${colorClass}">
        <div class="progress__bar" style="width: ${percent}%"></div>
      </div>
      <div class="progress__text">${Math.round(percent)}%</div>
    </div>
  `;
}

// Alert/hint box
export function alertBox(message, type = "info") {
  const icons = {
    info: "ℹ️",
    warning: "⚠️",
    danger: "🚨",
    success: "✅"
  };
  
  return `
    <div class="alert alert--${type}">
      <span class="alert__icon">${icons[type] || icons.info}</span>
      <span class="alert__message">${message}</span>
    </div>
  `;
}

// Collapsible section
export function collapsible(title, content, id, expanded = false) {
  return `
    <div class="collapsible ${expanded ? "collapsible--open" : ""}">
      <button class="collapsible__header" data-action="toggle-collapsible" data-target="${id}">
        <span class="collapsible__title">${title}</span>
        <span class="collapsible__icon">${expanded ? "▼" : "▶"}</span>
      </button>
      <div class="collapsible__content" id="${id}" style="display: ${expanded ? "block" : "none"}">
        ${content}
      </div>
    </div>
  `;
}

// Tutorial modal overlay
export function tutorialModal(tutorial, currentStep) {
  const step = tutorial.steps[currentStep];
  const isLast = currentStep === tutorial.steps.length - 1;
  
  return `
    <div class="modal-overlay" data-tutorial="${tutorial.id}">
      <div class="modal tutorial-modal">
        <div class="modal__header">
          <h2 class="modal__title">${step.title}</h2>
          <div class="modal__progress">Step ${currentStep + 1} of ${tutorial.steps.length}</div>
        </div>
        <div class="modal__body">
          <p class="tutorial__content">${step.content.replace(/\n/g, '<br>')}</p>
        </div>
        <div class="modal__footer">
          <button class="btn btn--secondary" data-action="tutorial-skip">Skip Tutorial</button>
          <button class="btn btn--primary" data-action="tutorial-next">
            ${isLast ? "Got It!" : "Next"}
          </button>
        </div>
      </div>
    </div>
  `;
}

// Milestone celebration modal
export function milestoneModal(milestone) {
  return `
    <div class="modal-overlay" data-milestone="${milestone.id}">
      <div class="modal milestone-modal">
        <div class="modal__header">
          <h2 class="modal__title">🎉 ${milestone.title}</h2>
        </div>
        <div class="modal__body">
          <p class="milestone__message">${milestone.message}</p>
          ${milestone.reward ? `
            <div class="milestone__rewards">
              <h3>Rewards:</h3>
              ${milestone.reward.cash ? `<div>💰 $${milestone.reward.cash.toLocaleString()}</div>` : ''}
              ${milestone.reward.reputation ? `<div>⭐ +${milestone.reward.reputation} Reputation</div>` : ''}
              ${milestone.reward.prestige ? `<div>👑 +${milestone.reward.prestige} Prestige</div>` : ''}
            </div>
          ` : ''}
        </div>
        <div class="modal__footer">
          <button class="btn btn--primary" data-action="close-milestone">Continue</button>
        </div>
      </div>
    </div>
  `;
}

// Simple HTML escape
function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Mobile-friendly button
export function mobileButton(text, action, data = {}, type = "primary") {
  const dataAttrs = Object.entries(data)
    .map(([k, v]) => `data-${k}="${escapeHtml(String(v))}"`)
    .join(" ");
  
  return `
    <button class="btn btn--${type} btn--mobile" data-action="${action}" ${dataAttrs}>
      ${text}
    </button>
  `;
}

// Section header with help icon
export function sectionHeader(title, tutorialId = null) {
  return `
    <div class="section-header">
      <h2 class="section-header__title">${title}</h2>
      ${tutorialId ? `
        <button class="btn-help" data-action="show-tutorial" data-tutorial="${tutorialId}">
          <span class="help-icon">?</span>
        </button>
      ` : ''}
    </div>
  `;
}
