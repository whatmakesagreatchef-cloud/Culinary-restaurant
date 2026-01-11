// Tutorial System - Context-sensitive help and guided learning
// Provides tooltips, hints, and step-by-step guidance for complex systems

export const TUTORIALS = {
  // Core concepts
  firstVenue: {
    id: "firstVenue",
    title: "Your First Restaurant",
    steps: [
      {
        title: "Welcome, Chef!",
        content: "You're about to open your first restaurant. Success depends on three things: great food, happy customers, and smart money management.",
        highlight: null
      },
      {
        title: "Choose Your Location",
        content: "Location affects foot traffic and rent. High-traffic areas cost more but bring more customers. Start in a mid-tier neighborhood to balance costs.",
        highlight: "location"
      },
      {
        title: "Pick Your Concept",
        content: "Your venue type (café, bistro, etc.) determines capacity, prices, and operating costs. Your concept style affects what customers expect.",
        highlight: "venue"
      },
      {
        title: "Set Your Menu",
        content: "Menu items drive revenue. Balance profit margins with customer appeal. High prices can hurt traffic, but too-low prices mean thin margins.",
        highlight: "menu"
      },
      {
        title: "Hire Your Team",
        content: "Staff skills matter! A great chef improves food quality. A skilled manager reduces costs. Good FOH staff speeds up service.",
        highlight: "staff"
      }
    ]
  },

  weeklyOps: {
    id: "weeklyOps",
    title: "Weekly Operations",
    steps: [
      {
        title: "The Week Ahead",
        content: "Each week, your restaurants serve customers and generate revenue. You'll see a weekly report with key metrics.",
        highlight: "ops"
      },
      {
        title: "Key Metrics to Watch",
        content: "📊 Sales: Total revenue\n💰 Net Profit: What's left after costs\n👥 Covers: Number of customers served\n⭐ Satisfaction: How happy customers are (aim for 70+)",
        highlight: "metrics"
      },
      {
        title: "Managing Issues",
        content: "Problems will arise - staff conflicts, equipment breakdowns, supply issues. Address them quickly in the weekly planner or they'll get worse.",
        highlight: "issues"
      }
    ]
  },

  menuDesign: {
    id: "menuDesign",
    title: "Menu Engineering",
    steps: [
      {
        title: "Building Your Menu",
        content: "Your menu is your money-maker. Each item has a cost (ingredients), price (what customers pay), and popularity (how often it sells).",
        highlight: "menu"
      },
      {
        title: "Menu Item Categories",
        content: "⭐ Stars: High profit, high popularity - protect these!\n🐴 Plowhorses: Popular but lower margin - volume drivers\n🧩 Puzzles: High margin but slow sellers - market these\n🐕 Dogs: Low profit AND unpopular - consider removing",
        highlight: "categories"
      },
      {
        title: "Prep Load & Complexity",
        content: "Complex dishes take longer and stress your kitchen. Too many complicated items slow service and burn out staff. Balance is key.",
        highlight: "prep"
      },
      {
        title: "Station Balance",
        content: "Items use different kitchen stations (grill, fryer, etc.). If everything needs the grill, you'll bottleneck. Spread items across stations.",
        highlight: "stations"
      }
    ]
  },

  staffManagement: {
    id: "staffManagement",
    title: "Staff & Morale",
    steps: [
      {
        title: "Your Team Matters",
        content: "Staff aren't just costs - they're your competitive advantage. Skilled, happy staff deliver better service and reduce waste.",
        highlight: "staff"
      },
      {
        title: "Burnout & Morale",
        content: "🔥 Burnout: Too much work, too little rest. High burnout (60+) hurts speed and quality.\n😊 Morale: Overall happiness. Low morale leads to turnover and mistakes.",
        highlight: "morale"
      },
      {
        title: "Delegation Pays Off",
        content: "Hire skilled managers (GM, Head Chef, FOH Lead) and delegate to them. They'll reduce costs, improve quality, and handle operations.",
        highlight: "delegation"
      },
      {
        title: "Training Investment",
        content: "Train your team to permanently boost skills. Better skills = better margins, faster service, and happier customers. It's worth the cost.",
        highlight: "training"
      }
    ]
  },

  financials: {
    id: "financials",
    title: "Money Management",
    steps: [
      {
        title: "Understanding Your P&L",
        content: "Profit & Loss shows where money comes from and goes. Watch your margins - even small % changes add up over time.",
        highlight: "accounting"
      },
      {
        title: "Cost Breakdown",
        content: "🍕 Food Cost: 25-32% is good\n👥 Labor: 28-38% is typical\n🏠 Occupancy: Rent & utilities (fixed)\n📦 Other: Supplies, marketing, etc.",
        highlight: "costs"
      },
      {
        title: "Cash Flow vs Profit",
        content: "Profit is what's left after costs. But cash is what pays bills. You can be profitable but run out of cash if you're not careful.",
        highlight: "cash"
      },
      {
        title: "Growth Funding",
        content: "You can grow by: saving profits (slow), taking loans (risky), or bringing in investors (dilution). Each has tradeoffs.",
        highlight: "capital"
      }
    ]
  },

  supplyChain: {
    id: "supplyChain",
    title: "Supply Chain Basics",
    steps: [
      {
        title: "Supplier Relationships",
        content: "Suppliers provide your ingredients. Prices fluctuate with market conditions. Lock in contracts when prices are low.",
        highlight: "suppliers"
      },
      {
        title: "Inventory Management",
        content: "Keep enough stock to avoid running out (stockouts hurt sales), but not so much it spoils. Auto-reorder helps, but watch your par levels.",
        highlight: "inventory"
      },
      {
        title: "Contract Strategy",
        content: "Longer contracts = bigger discounts but less flexibility. If you expect prices to drop, stay flexible. If prices are rising, lock in now.",
        highlight: "contracts"
      }
    ]
  },

  customerService: {
    id: "customerService",
    title: "Customers & Reviews",
    steps: [
      {
        title: "Customer Satisfaction",
        content: "Happy customers = repeat business, good reviews, and word-of-mouth. Unhappy customers leave bad reviews and never return.",
        highlight: "customers"
      },
      {
        title: "What Customers Care About",
        content: "🍽️ Food Quality (38%): Most important\n⚡ Speed (18%): Nobody likes waiting\n💵 Value (16%): Fair prices\n✨ Vibe (16%): Atmosphere\n🧼 Cleanliness (12%): Basics matter",
        highlight: "satisfaction"
      },
      {
        title: "Handling Complaints",
        content: "Complaints are opportunities. Comp a meal (costs money but protects reputation), apologize (free but less effective), or ignore (risky).",
        highlight: "complaints"
      },
      {
        title: "Review Management",
        content: "Reviews impact your reputation and foot traffic. Reply to negative reviews quickly. Viral bad reviews can tank your business.",
        highlight: "reviews"
      }
    ]
  },

  scaling: {
    id: "scaling",
    title: "Growing Your Empire",
    steps: [
      {
        title: "When to Expand",
        content: "Expand when: your first venue is profitable, you have 6+ months operating cash, and you've mastered the basics. Don't rush!",
        highlight: "expansion"
      },
      {
        title: "Chain vs Portfolio",
        content: "🔗 Chain: One brand, consistent standards, easier to manage\n📂 Portfolio: Multiple brands, more flexibility, higher complexity",
        highlight: "brandMode"
      },
      {
        title: "Economies of Scale",
        content: "Multiple venues let you negotiate better supplier contracts, share HQ costs, and build brand power. But complexity increases too.",
        highlight: "scale"
      },
      {
        title: "System Standardization",
        content: "Set brand standards to ensure consistency across locations. High standards = better quality but more staff pressure. Find the balance.",
        highlight: "standards"
      }
    ]
  }
};

// Contextual tooltips for UI elements
export const TOOLTIPS = {
  // Metrics
  reputation: "Your overall reputation (0-100). Affects customer traffic and investor confidence. Built through good reviews and satisfied customers.",
  prestige: "Brand prestige. Higher prestige attracts better staff and premium customers. Earned through excellence and awards.",
  cash: "Available cash. Used to pay bills, invest in improvements, and expand. Keep at least 2-3 months of expenses as buffer.",
  debt: "Total outstanding loans. Debt has weekly interest payments. Too much debt is risky if revenue drops.",
  netWorth: "Total value of your business (assets - debt). This is what your empire is worth.",
  
  // Venue metrics
  footTraffic: "How busy the location is. More foot traffic = more potential customers. Affected by location, reputation, and marketing.",
  pricePosition: "How expensive you are vs competitors. Higher prices = higher margins but lower volume. Find the sweet spot.",
  satisfaction: "Customer satisfaction (0-100). Target 70+. Below 60 and you'll see complaints and bad reviews.",
  covers: "Number of customers served this week. Driven by capacity, demand, and service speed.",
  avgSpend: "Average amount each customer spends. Influenced by menu prices and venue type.",
  
  // Staff metrics
  burnout: "Staff burnout level (0-100). High burnout = slow service, mistakes, and turnover. Keep below 60 with good staffing and time off.",
  morale: "Staff morale (0-100). Happy staff work better. Affected by pay, workload, management, and work environment.",
  staffStress: "Operational stress level. High stress slows service and increases costs. Reduce with better staffing or delegation.",
  
  // Menu metrics
  foodCostPct: "Food cost as % of sales. Target 25-32%. Lower is better but watch quality.",
  laborPct: "Labor cost as % of sales. Target 28-38%. Varies by venue type and service level.",
  prepLoad: "Average prep complexity. Higher = more kitchen time. Complex menus slow service and stress staff.",
  stationImbalance: "How uneven workload is across kitchen stations. High imbalance creates bottlenecks.",
  
  // Financial
  profitMargin: "Net profit as % of sales. Target 8-15% for healthy restaurants. Higher is great but rare.",
  breakeven: "Sales needed to cover all costs. If sales < breakeven, you're losing money.",
  runway: "Months of operating costs you can cover with current cash. Keep 3+ months minimum.",
  
  // Supply chain
  supplyIndex: "Current supply market prices. >1.0 = expensive, <1.0 = cheap. Affects your food costs.",
  parLevel: "Weeks of inventory to keep on hand. Higher = less stockout risk but more spoilage.",
  spoilage: "Food waste from expiration. Reduce with better inventory management and stocktakes.",
  
  // Operations
  compliance: "Health & safety compliance (0-100). Below 60 risks fines or closure. Keep 70+ with maintenance.",
  condition: "Equipment condition (0-100). Poor condition = more breakdowns. Maintain with regular upkeep.",
  maintenance: "Weekly maintenance spending level (0-2). Higher prevents breakdowns but costs more."
};

// Hints that appear contextually
export const HINTS = {
  highBurnout: {
    condition: (v) => v.burnout > 65,
    message: "⚠️ Staff burnout is high! Consider: reducing hours, hiring more staff, or giving wellbeing days.",
    severity: "warning"
  },
  lowMorale: {
    condition: (v) => v.morale < 50,
    message: "⚠️ Staff morale is low! Check for unresolved issues, consider raises, or improve culture.",
    severity: "warning"
  },
  lowSatisfaction: {
    condition: (v) => v.lastSatisfaction < 60,
    message: "⚠️ Customer satisfaction is low! Check food quality, service speed, and pricing.",
    severity: "warning"
  },
  negativeProfit: {
    condition: (v) => v.lastNetProfit < 0,
    message: "🚨 Losing money! Review costs, adjust prices, or improve efficiency urgently.",
    severity: "danger"
  },
  highFoodCost: {
    condition: (v) => v.lastFoodCostPct > 0.35,
    message: "💰 Food costs are high. Check supplier contracts, reduce waste, or adjust menu pricing.",
    severity: "info"
  },
  stockouts: {
    condition: (v) => v.supplyKpis?.stockouts > 2,
    message: "📦 Frequent stockouts! Increase inventory par levels or improve supplier reliability.",
    severity: "warning"
  },
  poorCondition: {
    condition: (v) => v.facilities?.condition < 50,
    message: "🔧 Equipment condition is poor! Increase maintenance or plan a renovation.",
    severity: "warning"
  },
  lowCash: {
    condition: (state) => state.cash < 10000,
    message: "💸 Cash is running low! Consider a loan, cut costs, or bring in investors.",
    severity: "danger",
    global: true
  }
};

// Check which hints to show
export function getActiveHints(state, venue = null) {
  const hints = [];
  
  if (venue) {
    // Venue-specific hints
    Object.entries(HINTS).forEach(([key, hint]) => {
      if (!hint.global && hint.condition(venue)) {
        hints.push({ ...hint, id: key });
      }
    });
  } else {
    // Global hints
    Object.entries(HINTS).forEach(([key, hint]) => {
      if (hint.global && hint.condition(state)) {
        hints.push({ ...hint, id: key });
      }
    });
  }
  
  return hints;
}

// Tutorial progress tracking
export function getTutorialProgress(state) {
  const progress = state.tutorialDone || {};
  const total = Object.keys(TUTORIALS).length;
  const completed = Object.keys(progress).filter(k => progress[k]).length;
  return { completed, total, percent: Math.round((completed / total) * 100) };
}

// Mark tutorial as seen
export function markTutorialComplete(state, tutorialId) {
  if (!state.tutorialDone) state.tutorialDone = {};
  state.tutorialDone[tutorialId] = true;
}

// Check if user should see a tutorial
export function shouldShowTutorial(state, tutorialId) {
  // First venue always shows
  if (tutorialId === "firstVenue" && state.venues.length === 0) return true;
  
  // Don't show if already completed
  if (state.tutorialDone && state.tutorialDone[tutorialId]) return false;
  
  // Context-based triggers
  const triggers = {
    weeklyOps: () => state.week === 2, // After first week
    menuDesign: () => state.venues.some(v => v.menuItems && v.menuItems.length === 0),
    staffManagement: () => state.venues.some(v => v.burnout > 50 || v.morale < 60),
    financials: () => state.week > 4 && state.cash < 50000,
    supplyChain: () => state.hq && state.venues.length > 0,
    customerService: () => state.venues.some(v => v.customer?.inbox?.length > 0),
    scaling: () => state.venues.length >= 1 && state.cash > 80000
  };
  
  return triggers[tutorialId] ? triggers[tutorialId]() : false;
}

// Get next suggested tutorial
export function getNextTutorial(state) {
  for (const [id, tutorial] of Object.entries(TUTORIALS)) {
    if (shouldShowTutorial(state, id)) {
      return { id, ...tutorial };
    }
  }
  return null;
}

// Milestone tracking for story moments
export const MILESTONES = [
  {
    id: "first_week",
    week: 1,
    title: "First Week Complete!",
    message: "You've survived your first week in the restaurant business. It won't be easy, but you've got this.",
    reward: null
  },
  {
    id: "first_profit",
    condition: (state) => state.venues.some(v => v.lastNetProfit > 0),
    title: "First Profit!",
    message: "Your restaurant turned a profit! This is just the beginning. Keep improving and growing.",
    reward: { reputation: 2 }
  },
  {
    id: "first_month",
    week: 4,
    title: "One Month Down",
    message: "You've made it a month! Most restaurants fail in year one. You're proving you have what it takes.",
    reward: { cash: 2000, reputation: 3 }
  },
  {
    id: "hired_manager",
    condition: (state) => state.venues.some(v => v.staff?.gm !== null),
    title: "Delegation Unlocked",
    message: "You've hired your first manager. Smart owners know they can't do everything themselves.",
    reward: { prestige: 5 }
  },
  {
    id: "second_venue",
    condition: (state) => state.venues.length >= 2,
    title: "Empire Growing",
    message: "Two locations! You're building something real. Managing multiple venues is harder, but the rewards are bigger.",
    reward: { reputation: 5, prestige: 10 }
  },
  {
    id: "positive_reviews",
    condition: (state) => state.reputation >= 70,
    title: "Building Buzz",
    message: "Your reputation is solid. Customers are talking about you. Keep delivering excellence.",
    reward: { prestige: 8 }
  },
  {
    id: "first_100k",
    condition: (state) => state.cash >= 100000,
    title: "Six Figures!",
    message: "You're sitting on $100K+ in cash. Time to think big. Expansion? Premium locations? The choice is yours.",
    reward: { prestige: 15 }
  }
];

// Check for new milestones
export function checkMilestones(state) {
  const achieved = [];
  
  for (const milestone of MILESTONES) {
    // Skip if already achieved
    if (state.milestonesAchieved && state.milestonesAchieved.includes(milestone.id)) {
      continue;
    }
    
    // Check condition
    let met = false;
    if (milestone.week && state.week === milestone.week) {
      met = true;
    } else if (milestone.condition && milestone.condition(state)) {
      met = true;
    }
    
    if (met) {
      achieved.push(milestone);
      if (!state.milestonesAchieved) state.milestonesAchieved = [];
      state.milestonesAchieved.push(milestone.id);
      
      // Apply rewards
      if (milestone.reward) {
        if (milestone.reward.cash) state.cash += milestone.reward.cash;
        if (milestone.reward.reputation) state.reputation += milestone.reward.reputation;
        if (milestone.reward.prestige) state.prestige += milestone.reward.prestige;
      }
    }
  }
  
  return achieved;
}
