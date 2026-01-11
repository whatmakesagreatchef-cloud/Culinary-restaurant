Restaurant Empire Sim (Flat-pack v1.3 - Wizard + Manage)
- Mobile-first, GitHub Pages ready.
- Upload all files to repo root (no folders).
- Enable GitHub Pages: Settings -> Pages -> Deploy from branch -> main / root.

What changed:
1) Acquisitions are staged (wizard)
   Location → Venue → Menu style → Staff → Confirm
   You won’t see everything at once.

2) “Everything menu” per venue
   Tap Manage on a venue to open:
   - Overview (quick adjustments)
   - Staff (hire + delegate)
   - Menu (placeholder for next build)
   - Settings

Notes:
- Staff is still v1: hire GM / Head Chef / FOH Lead, fixed wages applied weekly.
- Next stage we can build the actual Menu Builder (items, pricing, costs, prep complexity, station load, specials).


v1.4 added:
- Menu Builder (Manage → Menu) with steps Start / Items / Review
- Menu items affect avg spend per cover, food cost %, prep load, station imbalance
- Weekly sim now uses menu metrics when available

v1.5 added:
- Ticket time estimation (avg + p95) in Manage → Menu → Review
- Station load bars (based on item popularity weights)
- Menu engineering (Stars / Plowhorses / Puzzles / Dogs)
- “Apply safe price tweaks” button (conservative margin protection for plowhorse items)

v1.6 added (Service Model):
- Station staffing (Manage → Staff): add Prep / Larder / Pan / Grill / Fryer / Pastry / Bar / Coffee headcount
- Station wages included in weekly wages
- Ticket-time estimator now accounts for station staffing (prep + dominant station help)
- Menu engineering actions (Review):
  - Feature (popularity +1)
  - Staff push (popularity +1, small stress +2)
  - Simplify (prep -10, small cost -3%)

v1.7 added (Promos + weekly planner):
- Marketing tab per venue: start promos (social, event night, influencer, loyalty, critic invite)
- Promos boost demand / foot traffic / reputation / regulars for a set number of weeks
- Critic invite resolves with risk/reward based on food + speed
- Weekly action planner in Ops screen (1–2 clicks to handle urgent issues)
- Popularity decay + price elasticity nudge (popularity drifts toward 3; big price jumps affect demand)
- Fixed: system_sim now correctly uses menu metrics for spend/food cost and uses promo demand boosts

v1.8 added (Customers + Quests):
- Customers tab per venue: inbox complaints, comp/apology/ignore resolution, review feed, customer mix segments
- Customer messages & reviews are generated each week based on food/speed/satisfaction, menu complexity, and pricing/value
- Resolving complaints affects reputation; comps cost cash but protect rep and slightly boost prestige
- Quest board in Ops screen: optional objectives with cash/rep/prestige rewards; new quests roll every 2 weeks (up to 3 active)
- Loyalty promo weeks are tracked toward a quest

v1.9 added (Partners governance + buyouts + dividends):
- Dividends policy (Capital screen): Reinvest (0%), Balanced (30%), Distribute (55%)
- Weekly dividends paid to partners (from profits) based on policy; preferred investors accrue pref return and get paid first
- Investor governance pressure: missed profit targets increase board pressure + reduce reputation and can force higher payouts
- Investor cards show expectations status, payout history, and allow buyouts (cost based on cash-in vs implied valuation)
- Sale estimator now applies a small haircut if partner sale approval is required
- Weekly report now records dividendsPaid and boardPressure

v1.10 added (Staff v2):
- Venue burnout + morale (0-100) that evolves week-to-week
- Rosters: open days, shifts/day, hours/shift, crew-per-shift (Kitchen/FOH/Bar)
- Auto-roster to demand + wellbeing day action
- Training system: spend cash to permanently boost effective skills (GM/Chef/FOH) and reduce burnout
- Roster staffing influences speed + stress + burnout and slightly changes labour accounting
- Added missing system_quests.js into the flatpack (required by weekly Ops / quests)

v1.11 added (Staff issues/events + decisions):
- Weekly staff issues per venue (raise requests, overtime, conflict, no-show, culture wobble, resignation risk, complexity pushback)
- Resolve issues with choices that affect cash, morale, burnout, reputation, popularity
- Unresolved issues apply small weekly drip penalties
- Staff issues appear in Venues → Manage → Staff (new “Staff issues” section)
- Ops weekly report shows staff pulse (avg burnout/morale + open issues count)

v1.12 added (HQ + Suppliers + Supply shocks):
- New HQ tab (mobile-friendly) for central purchasing + supplier contracts
- Supplier market indexes per category (price volatility + occasional shocks)
- Contracts (4/12/26w) with discounts that scale with number of venues, plus realistic break-fees
- Per-venue supplier selection (Venues → Manage → Suppliers). If HQ central purchasing is ON, contracts lock suppliers for all venues.
- Weekly sim now applies supply index to food costs; stockouts trigger emergency buying (higher cost) and reduce food/speed scores.
- Ops weekly report includes “Supply pulse” (index, stockouts, emergency spend)
New files: data_suppliers.js, system_suppliers.js

v1.13 (Brands / chain vs portfolio):
- Choose business model before acquiring venues: Chain (one brand) or Portfolio (standalone brands).
- Acquisition wizard includes a Brand step (auto for chain; pick/create for portfolio).
- HQ includes Brand portfolio management (create brands + adjust standards).
- Standards affect consistency (+) and burnout pressure (+) in weekly sim; brand prestige computed weekly.
New file: system_brands.js


v1.15 — Reviews + platforms
- Reviews now have platforms (Google, TripAdvisor, Instagram, TikTok, etc.)
- Empire review feed in Ops
- Reply to reviews (Apology / Invite back / Defensive / Ignore)
- Viral low-star review events can hit demand (via review buzz)


v1.16 — Accounting (P&L + Loans + Depreciation + Tax)
- Loans: borrow presets in HQ (cash-in, weekly amortizing payments)
- Depreciation: upfront fit-out CAPEX + goodwill are capitalized and depreciated weekly
- Tax: accrues on profit before tax (pay from HQ)
- Ops: Accounting snapshot card (profit pre/post tax, dep, interest, loan payments, net worth)


v1.17 — Inventory (Par levels + Orders + Spoilage/Shrink)
- New Inventory tab per venue: auto reorder toggle, par (weeks), stocktake, storage upgrades
- Inventory tracked by supply category as $-value on hand + incoming purchase orders
- Orders use supplier lead times, reliability delays, market price indexes and contract discounts
- Weekly spoilage + shrink (reduced for a few weeks after stocktake)
- Stockouts trigger emergency buying + satisfaction penalties
- Ops: Inventory snapshot (waste, stockouts, emergency, on-hand, incoming)


v1.18 — Facilities (Maintenance + Breakdowns + Energy + Renovations)
- New Facilities tab per venue: maintenance level slider, issues list, renovations (refresh/kitchen/full)
- Weekly maintenance spend and utilities cost (energy) scale with covers and condition
- Random equipment breakdowns can cause downtime and reduce speed/food (and fridge can hit compliance)
- Ops: Facilities snapshot card


v1.18.1 — Setup & Tutorials
- New Setup & Tutorials screen (route: setup) with explainers + quick navigation
- First run opens Setup automatically until you mark it done
- Topbar ? button returns to Setup anytime
- Start setup wizard directly from Setup


v1.18.2 — Guided Walkthrough + Critical Fix
- Fix: UI render default route bug that caused blank screens
- Fix: Removed stray wizard code referencing undefined needsModel
- New: Guided walkthrough overlay (spotlight + step sheet) to walk users through first venue setup
- Setup: added Guided walkthrough button
