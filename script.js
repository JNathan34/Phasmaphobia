(() => {
  'use strict';

  const MAP_GUIDE_DATA = [
    {
      name: '6 Tanglewood Drive',
      size: 'Small',
      type: 'Starter House',
      floors: '1 floor + basement',
      ghostArea: 'Indoor only',
      summary: 'Reworked starter house with the shortest van-to-room routing in the pool.',
      searchFlow:
        'Clear foyer splits first, then decide between garage and basement only after temp or breaker pressure points you there.',
      pressure:
        'Kitchen sightlines are short and the basement can trap you if the ghost starts below the main floor.',
      bestFor: 'Warm-up contracts, solo evidence runs, and quick weekly challenge pacing.',
      note: 'The March 3, 2026 rework keeps it fast but a little less autopilot than the old layout.',
      tags: ['Reworked', 'Short route', 'Starter'],
    },
    {
      name: '42 Edgefield Road',
      size: 'Small',
      type: 'Town House',
      floors: '2 floors + basement',
      ghostArea: 'Indoor only',
      summary: 'Dense vertical house where hunts can change floors fast.',
      searchFlow:
        'Sweep the ground floor and stairwell first, then clear upstairs bedroom clusters before committing to the basement.',
      pressure:
        'A hunt from the central stairs can lock you between floors with very little time to recover.',
      bestFor: 'Loop practice, audio tells, and ghosts with strong hunt behavior differences.',
      note: 'You get rewarded for calling floor position early instead of searching room-to-room reactively.',
      tags: ['Vertical', 'Dense rooms', 'Loop-heavy'],
    },
    {
      name: '10 Ridgeview Court',
      size: 'Small',
      type: 'Modern House',
      floors: '2 floors + basement',
      ghostArea: 'Indoor only',
      summary: 'Balanced house map with enough room to stage gear without losing pace.',
      searchFlow:
        'Check garage, kitchen, and the upstairs split early; basement should be a deliberate second pass, not the default opener.',
      pressure:
        'Garage angles and basement doorways can collapse if the ghost starts in the back half of the house.',
      bestFor: 'Stacking secondary objectives while still keeping a fast evidence cycle.',
      note: 'A good midpoint between a starter map and a farmhouse because the routing stays readable.',
      tags: ['Balanced', 'Garage', 'Basement'],
    },
    {
      name: '13 Willow Street',
      size: 'Small',
      type: 'Ranch House',
      floors: '1 floor + basement',
      ghostArea: 'Indoor only',
      summary: 'Small footprint that punishes bad hunt prep harder than the other houses.',
      searchFlow:
        'Sweep the main hall and garage fast, then drop to basement only if you already have a real pull there.',
      pressure:
        'No closet lockers means furniture hides and line-of-sight breaks are your only reliable safety plan.',
      bestFor: 'Practicing hunt survival, furniture hides, and fast house clears.',
      note: 'Willow stays quick, but you need a plan before the first hunt because the backup hides are weak.',
      tags: ['No closets', 'Tight sightlines', 'High pressure'],
    },
    {
      name: 'Grafton Farmhouse',
      size: 'Small',
      type: 'Farmhouse',
      floors: '2 floors + attic',
      ghostArea: 'Indoor only',
      summary: 'Compact farmhouse with wider rooms and more vertical risk than the house maps.',
      searchFlow:
        'Anchor your first pass through the center of the house and only climb once attic or nursery pressure becomes real.',
      pressure:
        'Wide rooms and long stair recoveries make it easy to lose cover if the ghost cuts a corner behind you.',
      bestFor: 'Parabolic reads, sound-driven teams, and farmhouse objective runs.',
      note: 'The reworked layout adds useful space, but it still turns hunts into positioning tests quickly.',
      tags: ['Farmhouse', 'Attic', 'Open rooms'],
    },
    {
      name: 'Camp Woodwind',
      size: 'Small',
      type: 'Campsite',
      floors: 'Outdoor loop',
      ghostArea: 'Outdoor possible',
      summary: 'Fastest outdoor contract in the game and one of the most punishing during hunts.',
      searchFlow:
        'Use the firepit and tent lanes to lock the ghost zone fast, then keep one clean escape path open at all times.',
      pressure:
        'There is very little hard cover, so a bad line-of-sight break usually snowballs into a failed hunt.',
      bestFor: 'Cash runs, event farming, and ghosts you want to read by raw hunt behavior.',
      note: 'Excellent for short sessions, but it only works when your route is cleaner than the ghost path.',
      tags: ['Outdoor', 'Fast cash', 'Open sightlines'],
    },
    {
      name: "Nell's Diner",
      size: 'Small',
      type: 'Diner',
      floors: '1 floor',
      ghostArea: 'Indoor only',
      summary: 'Compact new map with Tanglewood-like pace and denser room packing.',
      searchFlow:
        'Clear booths, kitchen, and storage in one continuous lap so you never have to reset the middle of the map.',
      pressure:
        'The back corridor and kitchen can close distance extremely fast if you overcommit to one side.',
      bestFor: 'Tight contract farming, quick cursed item grabs, and short-session play.',
      note: 'Smaller than it looks and most efficient when you stay centered and rotate light equipment only.',
      tags: ['New map', 'Dense rooms', 'Compact'],
    },
    {
      name: 'Bleasdale Farmhouse',
      size: 'Medium',
      type: 'Farmhouse',
      floors: '3 floors',
      ghostArea: 'Outdoor possible',
      summary: 'Reworked medium farmhouse with more spread, more travel, and more bad stair recoveries.',
      searchFlow:
        'Clear the main hall, kitchen, and workshop before committing upstairs so you do not get stranded by a bad attic read.',
      pressure:
        'The upper landings and attic can become dead space fast if the ghost starts climbing or cuts a staircase route.',
      bestFor: 'Team play, farmhouse objectives, and layered sound reads.',
      note: 'Bleasdale is no longer a quick farmhouse. Treat it like a true medium map and stage your gear.',
      tags: ['Reworked', 'Outdoor risk', 'Attic'],
    },
    {
      name: 'Point Hope',
      size: 'Medium',
      type: 'Lighthouse',
      floors: '10 circular floors',
      ghostArea: 'Outdoor possible',
      summary: 'Vertical funnel map where one staircase decides almost every hunt.',
      searchFlow:
        'Climb in clean segments and always know your last safe floor so you do not lose your exit to one bad check.',
      pressure:
        'The single staircase makes recovery brutal if you guess the ghost floor wrong or stay upstairs too long.',
      bestFor: 'Ghosts with loud hunt tells, coordinated teams, and players comfortable calling floor numbers fast.',
      note: 'One of the easiest maps to read once the ghost is found and one of the hardest if you are still searching.',
      tags: ['Vertical', 'Single route', 'Lighthouse'],
    },
    {
      name: 'Maple Lodge Campsite',
      size: 'Medium',
      type: 'Campsite',
      floors: 'Outdoor grounds + cabin',
      ghostArea: 'Outdoor possible',
      summary: 'Travel-heavy outdoor map where bad staging costs more time than bad evidence luck.',
      searchFlow:
        'Split the map into cabin side and lake side with sensors early so you do not drag the whole truck load across the grounds twice.',
      pressure:
        'Rain, fog, and long open lanes slow recoveries and make late hunts awkward if you stage too deep.',
      bestFor: 'Objective stacking, sensor-heavy runs, and full-team contracts.',
      note: 'More time is lost to movement than to evidence. Set supply drops instead of carrying everything at once.',
      tags: ['Outdoor', 'Travel heavy', 'Team split'],
    },
    {
      name: 'Prison',
      size: 'Medium',
      type: 'Prison',
      floors: '2 floors',
      ghostArea: 'Indoor only',
      summary: 'Sector map where narrowing the wing matters more than touching every room.',
      searchFlow:
        'Open with sound sensors and call front wing, A block, or B block before you haul a full evidence stack inside.',
      pressure:
        'Cell blocks echo badly, and once the ghost wanders the long lanes can hide where the hunt actually started.',
      bestFor: 'Co-op comms, sensor play, and contracts where you want to isolate a wing first.',
      note: 'Prison gets much easier once you stop thinking room-to-room and start thinking sector-to-sector.',
      tags: ['Institution', 'Sound sensors', 'Long lanes'],
    },
    {
      name: 'Sunny Meadows Restricted',
      size: 'Medium',
      type: 'Restricted Asylum Wing',
      floors: 'Selected wing + support route',
      ghostArea: 'Indoor only',
      summary: 'Best bridge map between regular medium contracts and full Sunny Meadows runs.',
      searchFlow:
        'Commit to the active wing fast and lock a safe return path to the truck before you over-stack equipment.',
      pressure:
        'Even restricted mode can punish slow resets if breaker and ghost room pull you in different directions.',
      bestFor: 'Atmosphere-heavy games, medium-map pacing, and training for the full asylum layout.',
      note: 'Treat it like a controlled Sunny Meadows run, not just a bigger house map.',
      tags: ['Restricted', 'Atmosphere', 'Long resets'],
    },
    {
      name: 'Brownstone High School',
      size: 'Large',
      type: 'High School',
      floors: '2 floors',
      ghostArea: 'Indoor only',
      summary: 'Large wing-based search where hall noise is less useful than clean sensor placement.',
      searchFlow:
        'Use sound sensors or two-lane sweeps immediately and isolate a wing before you bring in the full evidence kit.',
      pressure:
        'Delayed interactions and repeated hallway travel can waste minutes if the team searches reactively.',
      bestFor: 'Co-op teams, wing callouts, and objective-focused school contracts.',
      note: 'High School rewards structure. Decide the wing first, then run evidence second.',
      tags: ['Large', 'Wing search', 'Sensors'],
    },
    {
      name: 'Sunny Meadows',
      size: 'Large',
      type: 'Asylum',
      floors: 'Main floor + basement wings',
      ghostArea: 'Outdoor possible',
      summary: 'Largest location in the game and the most punishing map for indecision.',
      searchFlow:
        'Use the chapel, courtyard, and wing names as anchors. Do not move the full kit until the wing call is solid.',
      pressure:
        'Travel time, sanity bleed, and wing resets punish every wasted rotation more than any other map.',
      bestFor: 'Full-team play, challenge runs, and ghosts with strong room or hunt tells.',
      note: 'Route discipline matters more than raw speed here. The team that stages well survives better.',
      tags: ['Largest map', 'Courtyard', 'Team play'],
    },
  ];
  const CURSED_ITEM_ORDER = [
    'Tarot Cards',
    'Ouija Board',
    'Music Box',
    'Monkey Paw',
    'Haunted Mirror',
    'Summoning Circle',
    'Voodoo Doll',
  ];

  const CURSED_ITEM_COLORS = {
    'Tarot Cards': '#f1fa8c',
    'Ouija Board': '#bd93f9',
    'Music Box': '#ff79c6',
    'Monkey Paw': '#ffb86c',
    'Haunted Mirror': '#8be9fd',
    'Summoning Circle': '#ff5555',
    'Voodoo Doll': '#50fa7b',
  };

  const CURSED_ITEM_INFO = {
    'Tarot Cards':
      'A deck of 10 cards with random effects, including instant death or a cursed hunt. High risk, high reward.',
    'Ouija Board':
      'Ask the ghost questions for a sanity cost. If you force a question at 0 sanity, it breaks and starts a cursed hunt.',
    'Music Box':
      "Plays a tune that forces the ghost to sing. If the ghost reaches the box or you drop it while it is active, a cursed hunt starts.",
    'Monkey Paw':
      'Grants powerful wishes with hard penalties, such as blindness, low health, or sealed routes.',
    'Haunted Mirror':
      "Shows the ghost room but drains sanity rapidly. If your sanity hits 0 while using it, the mirror breaks and starts a cursed hunt.",
    'Summoning Circle':
      'Lighting all five candles summons the ghost briefly for a photo, then launches a cursed hunt.',
    'Voodoo Doll':
      'Forces ghost interactions at a sanity cost. If the heart pin is hit, the cursed hunt begins immediately.',
  };
  const CURSED_DATA = {
    'Bleasdale Farmhouse': {
      'Ouija Board': 'Attic, on the floor between junk.',
      'Tarot Cards': 'Office, on the desk.',
      'Haunted Mirror': 'Entrance hallway, on the wall.',
      'Music Box': 'Dining table.',
      'Summoning Circle': 'Attic.',
      'Voodoo Doll': 'Living room, on the couch.',
      'Monkey Paw': 'Master Bedroom, on the chest.',
    },
    'Brownstone High School': {
      'Ouija Board': 'Entrance, on a bench to the left.',
      'Tarot Cards': 'Main reception office, on a desk.',
      'Haunted Mirror': 'Main corridor near entrance, on the wall.',
      'Music Box': 'Lobby, on a shelf.',
      'Summoning Circle': 'Boiler room or basement area.',
      'Voodoo Doll': 'Gym, on the bleachers.',
      'Monkey Paw': 'Faculty Room, on a desk.',
    },
    'Camp Woodwind': {
      'Ouija Board': 'On a barrel near the fire pit.',
      'Tarot Cards': 'In front of the blue tent, on a small table.',
      'Haunted Mirror': 'Picnic table near the campfire.',
      'Music Box': 'White tent, on the cooler.',
      'Summoning Circle': 'Center of the ground ritual circle.',
      'Voodoo Doll': 'White tent, on a chair.',
      'Monkey Paw': 'On the picnic table near the entrance.',
    },
    '42 Edgefield Road': {
      'Ouija Board': 'Basement, on the back shelf.',
      'Tarot Cards': 'Entrance hall, on the small table.',
      'Haunted Mirror': 'Downstairs hallway near bathroom, on the wall.',
      'Music Box': 'Nursery, on the shelf.',
      'Summoning Circle': 'Basement.',
      'Voodoo Doll': 'Master bedroom, on the bench.',
      'Monkey Paw': 'Nursery, on the changing table.',
    },
    'Grafton Farmhouse': {
      'Ouija Board': 'Upstairs storage room, on a shelf.',
      'Tarot Cards': 'Living room, on the round table.',
      'Haunted Mirror': 'Upstairs landing, on the wall.',
      'Music Box': 'Master bedroom, on a shelf.',
      'Summoning Circle': 'Basement.',
      'Voodoo Doll': 'Twin bedroom, in a wicker basket.',
      'Monkey Paw': 'Twin bedroom, on the desk.',
    },
    'Maple Lodge Campsite': {
      'Ouija Board': 'Storage tent, on a shelf.',
      'Tarot Cards': 'Center camp, on the main picnic table.',
      'Haunted Mirror': 'Inside the main cabin, on the wall.',
      'Music Box': 'Main tent, on a small table.',
      'Summoning Circle': 'Ritual area past the campfire.',
      'Voodoo Doll': 'On a log around the campfire.',
      'Monkey Paw': 'Reception building, on the desk.',
    },
    "Nell's Diner": {
      'Ouija Board': 'Storage room, on a shelf.',
      'Tarot Cards': 'On a table in the dining area.',
      'Haunted Mirror': 'On the wall in the restroom hallway.',
      'Music Box': 'On the kitchen counter.',
      'Summoning Circle': 'In the back alley behind the diner.',
      'Voodoo Doll': 'On a booth seat in the dining area.',
      'Monkey Paw': 'On a table by the window.',
    },
    'Point Hope': {
      'Ouija Board': 'Ground floor, on a wooden crate.',
      'Tarot Cards': 'First floor, on a small table.',
      'Haunted Mirror': "Keeper's bedroom, on the wall.",
      'Music Box': "Children's bedroom, on a shelf.",
      'Summoning Circle': 'Top floor.',
      'Voodoo Doll': 'Living room, on the couch.',
      'Monkey Paw': 'Living room, on the coffee table.',
    },
    Prison: {
      'Ouija Board': "Maintenance room behind the warden's office, on a shelf.",
      'Tarot Cards': 'Visitation area, on a table.',
      'Haunted Mirror': 'Main reception office, by the door.',
      'Music Box': 'Infirmary, on a shelf.',
      'Summoning Circle': 'Chapel.',
      'Voodoo Doll': 'Visitation area, on a bench.',
      'Monkey Paw': 'Entrance hall, on the table to the right.',
    },
    '10 Ridgeview Court': {
      'Ouija Board': 'Basement, in the back-left corner.',
      'Tarot Cards': 'Living room, on the coffee table.',
      'Haunted Mirror': 'Upstairs hallway, on the wall.',
      'Music Box': 'Upstairs pink bedroom, on the dresser.',
      'Summoning Circle': 'Basement.',
      'Voodoo Doll': 'Garage, in the trash can.',
      'Monkey Paw': 'Upstairs right bedroom, on the desk.',
    },
    'Sunny Meadows': {
      'Ouija Board': 'Chapel, behind the lectern.',
      'Tarot Cards': 'Reception area, on a table.',
      'Haunted Mirror': 'Entrance hallway, on the wall.',
      'Music Box': 'A patient room, on a bedside table.',
      'Summoning Circle': 'Chapel.',
      'Voodoo Doll': 'Infirmary, on a medical bed.',
      'Monkey Paw': 'Chapel, at the base of the cross.',
    },
    'Sunny Meadows Restricted': {
      'Ouija Board': 'Chapel, on the altar.',
      'Tarot Cards': 'Chapel, on the altar.',
      'Haunted Mirror': 'Chapel, on the wall.',
      'Music Box': 'Chapel, on the altar.',
      'Summoning Circle': 'Chapel, on the floor.',
      'Voodoo Doll': 'Chapel, on the altar.',
      'Monkey Paw': 'Chapel, on the altar.',
    },
    '6 Tanglewood Drive': {
      'Ouija Board': 'Basement, under the stairs.',
      'Tarot Cards': 'Dining room table.',
      'Haunted Mirror': 'Entrance hallway, on the wall.',
      'Music Box': 'Nursery, on the shelf.',
      'Summoning Circle': 'Basement.',
      'Voodoo Doll': 'Master bedroom, on the bed.',
      'Monkey Paw': 'Dining room, in the china cabinet.',
    },
    '13 Willow Street': {
      'Ouija Board': 'Garage, in the back-right storage room.',
      'Tarot Cards': 'Living room, on the coffee table.',
      'Haunted Mirror': 'Garage, on the wall near the house door.',
      'Music Box': 'Master bedroom, on the dresser.',
      'Summoning Circle': 'Basement.',
      'Voodoo Doll': 'Living room, on the couch.',
      'Monkey Paw': 'Hallway, in the glass cabinet.',
    },
  };

  const MAP_PLANNER_IMAGES = {
    '6 Tanglewood Drive': 'assets/maps/6-tanglewood-drive.svg',
    '42 Edgefield Road': 'assets/maps/42-edgefield-road.svg',
    '10 Ridgeview Court': 'assets/maps/10-ridgeview-court.svg',
    '13 Willow Street': 'assets/maps/13-willow-street.svg',
    'Grafton Farmhouse': 'assets/maps/grafton-farmhouse.svg',
    'Camp Woodwind': 'assets/maps/camp-woodwind.svg',
    "Nell's Diner": 'assets/maps/nells-diner.jpg',
    'Bleasdale Farmhouse': 'assets/maps/bleasdale-farmhouse.svg',
    'Point Hope': 'assets/maps/point-hope.svg',
    'Maple Lodge Campsite': 'assets/maps/maple-lodge-campsite.svg',
    Prison: 'assets/maps/prison.svg',
    'Sunny Meadows Restricted': 'assets/maps/sunny-meadows-restricted.svg',
    'Brownstone High School': 'assets/maps/brownstone-high-school.svg',
    'Sunny Meadows': 'assets/maps/sunny-meadows.svg',
  };

  const MAP_IMAGES = {
    'Bleasdale Farmhouse':
      'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2023/06/bleasdale-farmhouse-map-with-cursed-objects-phasmophobia.jpg?q=49&fit=crop&w=825&dpr=2',
    'Brownstone High School':
      'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2023/06/bronstone-high-school-cursed-objects-on-map-phasmophobia.jpg?q=49&fit=crop&w=825&dpr=2',
    'Camp Woodwind':
      'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2023/06/camp-woodwind-cursed-object-locations-on-map-phasmophobia.jpg?q=49&fit=crop&w=825&dpr=2',
    '42 Edgefield Road':
      'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2023/06/edgefield-road-cursed-objects-on-map-phasmophobia-1.jpg?q=49&fit=crop&w=825&dpr=2',
    'Grafton Farmhouse':
      'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2023/06/grafton-farmhouse-cursed-objects-on-map-phasmophobia-1.jpg?q=49&fit=crop&w=825&dpr=2',
    'Maple Lodge Campsite':
      'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2023/06/maple-lodge-campsite-cursed-object-locations-on-map-phasmophobia.jpg?q=49&fit=crop&w=825&dpr=2',
    "Nell's Diner": 'assets/maps/nells-diner.jpg',
    'Point Hope': 'assets/maps/point-hope.svg',
    Prison:
      'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2023/06/prison-cursed-object-locations-on-map-phasmophobia.jpg?q=49&fit=crop&w=825&dpr=2',
    '10 Ridgeview Court':
      'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2023/06/ridgeview-court-cursed-objects-on-map-phasmophobia.jpg?q=49&fit=crop&w=825&dpr=2',
    'Sunny Meadows':
      'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2023/06/sunny-meadows-cursed-objects-on-map-phasmophobia.jpg?q=49&fit=crop&w=825&dpr=2',
    'Sunny Meadows Restricted': 'assets/maps/sunny-meadows-restricted.svg',
    '6 Tanglewood Drive':
      'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2023/06/tanglewood-drive-cursed-object-locations-on-map-phasmophobia.jpg?q=49&fit=crop&w=825&dpr=2',
    '13 Willow Street':
      'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2023/06/willow-street-cursed-object-locations-on-map-phasmophobia.jpg?q=49&fit=crop&w=825&dpr=2',
  };

  const EVIDENCE_CLASS_MAP = {
    'EMF Level 5': 'ev-emf',
    'Spirit Box': 'ev-box',
    'Ghost Writing': 'ev-writing',
    'Freezing Temperatures': 'ev-freezing',
    Ultraviolet: 'ev-uv',
    'Ghost Orb': 'ev-orb',
    'D.O.T.S Projector': 'ev-dots',
  };

  document.addEventListener('DOMContentLoaded', () => {
    initHeroStats();
    initGhostSearchAndFilters();
    initEvidenceColors();
    initScrollToTop();
    initMapLightbox();
    initMapPlanner();
    initCursedPossessions();
  });

  function initHeroStats() {
    const ghostCount = document.querySelectorAll('#ghost-grid .ghost-card').length;
    const ghostCountDisplay = document.getElementById('hero-ghost-count');
    const mapCountDisplay = document.getElementById('hero-map-count');

    if (ghostCountDisplay) ghostCountDisplay.textContent = String(ghostCount);
    if (mapCountDisplay) mapCountDisplay.textContent = String(MAP_GUIDE_DATA.length);
  }

  function initGhostSearchAndFilters() {
    const searchBar = document.getElementById('search-bar');
    const filterContainer = document.getElementById('evidence-filter-container');
    const resetBtn = document.getElementById('reset-filters-btn');
    const resultsText = document.getElementById('ghost-results-text');
    const emptyState = document.getElementById('ghost-empty-state');
    const ghostCards = Array.from(document.querySelectorAll('#ghost-grid .ghost-card'));

    if (!searchBar || !filterContainer || !resetBtn || ghostCards.length === 0) return;

    const totalGhosts = ghostCards.length;

    const getActiveFilters = () =>
      Array.from(filterContainer.querySelectorAll('.evidence-filter-btn.active')).map(
        (button) => button.dataset.evidence
      );

    const getCardEvidence = (card) => {
      const evidence = Array.from(card.querySelectorAll('.evidence-list span')).map((span) =>
        span.textContent.trim()
      );
      const ghostName = (card.querySelector('h2')?.textContent || '').toLowerCase();

      if (ghostName.includes('mimic')) evidence.push('Ghost Orb');

      return evidence;
    };

    const renderResultsLabel = (visibleCount, hasQuery) => {
      if (!resultsText) return;

      if (!hasQuery && visibleCount === totalGhosts) {
        resultsText.textContent = `Showing all ${totalGhosts} ghosts.`;
        return;
      }

      if (visibleCount === 0) {
        resultsText.textContent = 'No ghosts match the current search and evidence filters.';
        return;
      }

      resultsText.textContent = `Showing ${visibleCount} of ${totalGhosts} ghosts.`;
    };

    const applyFiltersAndSearch = () => {
      const searchTerm = searchBar.value.trim().toLowerCase();
      const activeFilters = getActiveFilters();
      let visibleCount = 0;

      for (const card of ghostCards) {
        const evidence = getCardEvidence(card);
        const matchesFilters = activeFilters.every((filter) => evidence.includes(filter));
        const matchesSearch = !searchTerm || card.textContent.toLowerCase().includes(searchTerm);
        const shouldShow = matchesFilters && matchesSearch;

        card.style.display = shouldShow ? 'flex' : 'none';
        if (shouldShow) visibleCount += 1;
      }

      if (emptyState) emptyState.hidden = visibleCount !== 0;
      renderResultsLabel(visibleCount, Boolean(searchTerm || activeFilters.length));
    };

    filterContainer.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement) || !target.classList.contains('evidence-filter-btn')) {
        return;
      }

      target.classList.toggle('active');
      applyFiltersAndSearch();
    });

    resetBtn.addEventListener('click', () => {
      filterContainer.querySelectorAll('.evidence-filter-btn.active').forEach((button) => {
        button.classList.remove('active');
      });
      searchBar.value = '';
      applyFiltersAndSearch();
    });

    searchBar.addEventListener('input', applyFiltersAndSearch);
    applyFiltersAndSearch();
  }

  function initEvidenceColors() {
    document.querySelectorAll('#ghost-grid .evidence-list span').forEach((span) => {
      const evidenceClass = EVIDENCE_CLASS_MAP[span.textContent.trim()];
      if (evidenceClass) span.classList.add(evidenceClass);
    });
  }

  function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (!scrollToTopBtn) return;

    const toggleButton = () => {
      const position = window.scrollY || document.documentElement.scrollTop || 0;
      scrollToTopBtn.style.display = position > 320 ? 'block' : 'none';
    };

    window.addEventListener('scroll', toggleButton, { passive: true });
    toggleButton();

    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function initMapPlanner() {
    const filterBar = document.getElementById('map-filter-bar');
    const directory = document.getElementById('map-directory');
    const spotlight = document.getElementById('map-spotlight');

    if (!filterBar || !directory || !spotlight || MAP_GUIDE_DATA.length === 0) return;

    let activeSize = 'all';
    let selectedMapName = MAP_GUIDE_DATA[0].name;

    const filterMaps = () =>
      MAP_GUIDE_DATA.filter((map) => activeSize === 'all' || map.size === activeSize);

    const renderSpotlight = (map) => {
      const mapImage = MAP_PLANNER_IMAGES[map.name];
      spotlight.innerHTML = `
        <p class="map-spotlight-label">Map spotlight</p>
        <h3 class="spotlight-name">${escapeHtml(map.name)}</h3>
        ${
          mapImage
            ? `<figure class="spotlight-figure">
                <img class="spotlight-image map-zoomable" src="${escapeAttribute(
                  mapImage
                )}" alt="${escapeAttribute(map.name)} map image" data-lightbox-title="${escapeAttribute(
                  map.name
                )}" title="Open larger map" tabindex="0" role="button" decoding="async">
                <figcaption class="map-zoom-hint">Click the map to enlarge it.</figcaption>
              </figure>`
            : ''
        }
        <div class="spotlight-tags">
          <span class="size-badge ${sizeClassName(map.size)}">${escapeHtml(map.size)}</span>
          ${map.tags.map((tag) => `<span class="spotlight-tag">${escapeHtml(tag)}</span>`).join('')}
        </div>
        <p class="spotlight-copy">${escapeHtml(map.summary)}</p>
        <div class="spotlight-grid">
          <div class="spotlight-block">
            <p class="spotlight-block-title">Type</p>
            <p>${escapeHtml(map.type)}</p>
          </div>
          <div class="spotlight-block">
            <p class="spotlight-block-title">Floors</p>
            <p>${escapeHtml(map.floors)}</p>
          </div>
          <div class="spotlight-block">
            <p class="spotlight-block-title">Ghost Area</p>
            <p>${escapeHtml(map.ghostArea)}</p>
          </div>
          <div class="spotlight-block">
            <p class="spotlight-block-title">Map Pace</p>
            <p>${escapeHtml(map.size === 'Large' ? 'Slow and staged' : map.size === 'Medium' ? 'Controlled rotation' : 'Fast locate')}</p>
          </div>
        </div>
        <ul class="spotlight-list">
          <li><strong>Search Flow</strong>${escapeHtml(map.searchFlow)}</li>
          <li><strong>Pressure Point</strong>${escapeHtml(map.pressure)}</li>
          <li><strong>Best For</strong>${escapeHtml(map.bestFor)}</li>
          <li><strong>Contract Note</strong>${escapeHtml(map.note)}</li>
        </ul>
      `;
    };

    const renderDirectory = () => {
      const visibleMaps = filterMaps();

      if (!visibleMaps.some((map) => map.name === selectedMapName)) {
        selectedMapName = visibleMaps[0]?.name || '';
      }

      directory.innerHTML = visibleMaps
        .map((map) => {
          const activeClass = map.name === selectedMapName ? ' active' : '';
          const mapImage = MAP_PLANNER_IMAGES[map.name];
          return `
            <button class="map-card${activeClass}" data-map="${escapeAttribute(map.name)}" type="button">
              ${
                mapImage
                  ? `<img class="map-thumb" src="${escapeAttribute(mapImage)}" alt="${escapeAttribute(
                      map.name
                    )} map thumbnail" loading="lazy" decoding="async">`
                  : ''
              }
              <div class="map-card-top">
                <span class="size-badge ${sizeClassName(map.size)}">${escapeHtml(map.size)}</span>
                <span class="map-meta-chip">${escapeHtml(map.type)}</span>
              </div>
              <h3>${escapeHtml(map.name)}</h3>
              <div class="map-card-meta">
                <span class="map-meta-chip">${escapeHtml(map.floors)}</span>
                <span class="map-meta-chip">${escapeHtml(map.ghostArea)}</span>
              </div>
              <p>${escapeHtml(map.summary)}</p>
            </button>
          `;
        })
        .join('');

      const selectedMap = visibleMaps.find((map) => map.name === selectedMapName);
      if (selectedMap) renderSpotlight(selectedMap);
    };

    filterBar.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement) || !target.classList.contains('map-size-btn')) return;

      filterBar.querySelectorAll('.map-size-btn').forEach((button) => {
        button.classList.remove('active');
      });
      target.classList.add('active');
      activeSize = target.dataset.size || 'all';
      renderDirectory();
    });

    directory.addEventListener('click', (event) => {
      const button = event.target instanceof HTMLElement ? event.target.closest('.map-card') : null;
      if (!(button instanceof HTMLButtonElement)) return;

      selectedMapName = button.dataset.map || selectedMapName;
      renderDirectory();
    });

    renderDirectory();
  }

  function initMapLightbox() {
    const selectedMapImage = document.getElementById('selected-map-image');
    const selectedMapImageContainer = document.getElementById('selected-map-image-container');

    document.body.insertAdjacentHTML(
      'beforeend',
      `
        <div id="map-lightbox" class="map-lightbox" hidden aria-hidden="true">
          <div class="map-lightbox-dialog" role="dialog" aria-modal="true" aria-labelledby="map-lightbox-title">
            <button id="map-lightbox-close" class="map-lightbox-close" type="button" aria-label="Close map viewer">&times;</button>
            <p class="map-lightbox-label">Expanded map</p>
            <div class="map-lightbox-toolbar">
              <h2 id="map-lightbox-title">Map Viewer</h2>
              <div class="map-lightbox-controls" aria-label="Map zoom controls">
                <button id="map-lightbox-zoom-out" class="map-lightbox-control" type="button" aria-label="Zoom out">-</button>
                <button id="map-lightbox-reset" class="map-lightbox-control map-lightbox-zoom-readout" type="button" aria-label="Reset zoom">100%</button>
                <button id="map-lightbox-zoom-in" class="map-lightbox-control" type="button" aria-label="Zoom in">+</button>
              </div>
            </div>
            <p class="map-lightbox-tip">Scroll to zoom. Drag the map to pan when zoomed in.</p>
            <div id="map-lightbox-stage" class="map-lightbox-stage">
              <img id="map-lightbox-image" src="" alt="" draggable="false">
            </div>
          </div>
        </div>
      `
    );

    const lightbox = document.getElementById('map-lightbox');
    const lightboxTitle = document.getElementById('map-lightbox-title');
    const lightboxStage = document.getElementById('map-lightbox-stage');
    const lightboxImage = document.getElementById('map-lightbox-image');
    const closeButton = document.getElementById('map-lightbox-close');
    const zoomOutButton = document.getElementById('map-lightbox-zoom-out');
    const resetZoomButton = document.getElementById('map-lightbox-reset');
    const zoomInButton = document.getElementById('map-lightbox-zoom-in');

    if (
      !lightbox ||
      !lightboxTitle ||
      !lightboxStage ||
      !lightboxImage ||
      !closeButton ||
      !zoomOutButton ||
      !resetZoomButton ||
      !zoomInButton
    ) {
      return;
    }

    if (selectedMapImage) {
      selectedMapImage.classList.add('map-zoomable');
      selectedMapImage.tabIndex = 0;
      selectedMapImage.setAttribute('role', 'button');
      selectedMapImage.setAttribute('title', 'Open larger map');
    }

    if (selectedMapImage && selectedMapImageContainer && !selectedMapImageContainer.querySelector('.map-zoom-hint')) {
      selectedMapImage.insertAdjacentHTML(
        'afterend',
        '<p class="map-zoom-hint">Click the map to enlarge it.</p>'
      );
    }

    let lastFocusedElement = null;
    let zoomLevel = 1;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let dragStartScrollLeft = 0;
    let dragStartScrollTop = 0;
    const MIN_ZOOM = 1;
    const MAX_ZOOM = 4;
    const ZOOM_STEP = 0.25;
    const ZOOM_WHEEL_STEP = 0.2;

    const getStageFocusPoint = (focusPoint) => {
      const rect = lightboxStage.getBoundingClientRect();
      const clientX = focusPoint?.clientX ?? rect.left + rect.width / 2;
      const clientY = focusPoint?.clientY ?? rect.top + rect.height / 2;
      const offsetX = clientX - rect.left;
      const offsetY = clientY - rect.top;

      return {
        offsetX,
        offsetY,
        relativeX:
          lightboxStage.scrollWidth > 0
            ? (lightboxStage.scrollLeft + offsetX) / lightboxStage.scrollWidth
            : 0.5,
        relativeY:
          lightboxStage.scrollHeight > 0
            ? (lightboxStage.scrollTop + offsetY) / lightboxStage.scrollHeight
            : 0.5,
      };
    };

    const getFitScale = () => {
      const stageWidth = lightboxStage.clientWidth;
      const stageHeight = lightboxStage.clientHeight;
      const { naturalWidth, naturalHeight } = lightboxImage;

      if (!stageWidth || !stageHeight || !naturalWidth || !naturalHeight) {
        return 1;
      }

      return Math.min(stageWidth / naturalWidth, stageHeight / naturalHeight);
    };

    const stageCanPan = () =>
      lightboxStage.scrollWidth > lightboxStage.clientWidth + 1 ||
      lightboxStage.scrollHeight > lightboxStage.clientHeight + 1;

    const setStageScrollFromFocusPoint = (focusPoint) => {
      if (!focusPoint) return;

      lightboxStage.scrollLeft = focusPoint.relativeX * lightboxStage.scrollWidth - focusPoint.offsetX;
      lightboxStage.scrollTop = focusPoint.relativeY * lightboxStage.scrollHeight - focusPoint.offsetY;
    };

    const updateZoomUi = () => {
      if (!lightboxImage.naturalWidth || !lightboxImage.naturalHeight) {
        lightboxImage.style.width = '100%';
        lightboxStage.classList.remove('is-zoomed');
        return;
      }

      const fitScale = getFitScale();
      const zoomPercent = `${Math.round(zoomLevel * 100)}%`;
      lightboxImage.style.width = `${Math.round(lightboxImage.naturalWidth * fitScale * zoomLevel)}px`;
      resetZoomButton.textContent = zoomPercent;
      resetZoomButton.disabled = zoomLevel === 1;
      zoomOutButton.disabled = zoomLevel <= MIN_ZOOM;
      zoomInButton.disabled = zoomLevel >= MAX_ZOOM;
      lightboxStage.classList.toggle('is-zoomed', stageCanPan());
    };

    const setZoomLevel = (nextZoom, focusTarget) => {
      const clampedZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Number(nextZoom.toFixed(2))));
      if (clampedZoom === zoomLevel) return;

      const focusPoint = getStageFocusPoint(focusTarget);
      zoomLevel = clampedZoom;
      updateZoomUi();
      setStageScrollFromFocusPoint(focusPoint);
    };

    const resetZoom = () => {
      zoomLevel = 1;
      updateZoomUi();
      lightboxStage.scrollTop = 0;
      lightboxStage.scrollLeft = 0;
      isDragging = false;
      lightboxStage.classList.remove('is-dragging');
    };

    const closeLightbox = () => {
      if (lightbox.hidden) return;

      lightbox.hidden = true;
      lightbox.setAttribute('aria-hidden', 'true');
      lightboxImage.src = '';
      lightboxImage.alt = '';
      document.body.classList.remove('lightbox-open');
      resetZoom();

      if (lastFocusedElement instanceof HTMLElement) {
        lastFocusedElement.focus();
      }
    };

    const openLightbox = (image) => {
      const source = image.getAttribute('src');
      if (!source) return;

      const title =
        image.dataset.lightboxTitle || image.alt.replace(/\s+map image$/i, '').trim() || 'Map Viewer';

      lastFocusedElement = document.activeElement;
      lightboxTitle.textContent = title;
      lightboxImage.src = source;
      lightboxImage.alt = `${title} expanded map`;
      lightbox.hidden = false;
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
      resetZoom();

      if (lightboxImage.complete) {
        requestAnimationFrame(() => {
          if (!lightbox.hidden) {
            resetZoom();
          }
        });
      }

      closeButton.focus();
    };

    closeButton.addEventListener('click', closeLightbox);
    zoomInButton.addEventListener('click', () => setZoomLevel(zoomLevel + ZOOM_STEP));
    zoomOutButton.addEventListener('click', () => setZoomLevel(zoomLevel - ZOOM_STEP));
    resetZoomButton.addEventListener('click', resetZoom);

    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    lightboxStage.addEventListener(
      'wheel',
      (event) => {
        if (lightbox.hidden) return;

        event.preventDefault();
        setZoomLevel(zoomLevel + (event.deltaY < 0 ? ZOOM_WHEEL_STEP : -ZOOM_WHEEL_STEP), event);
      },
      { passive: false }
    );

    lightboxStage.addEventListener('pointerdown', (event) => {
      if (lightbox.hidden || zoomLevel <= MIN_ZOOM || event.button !== 0) return;

      isDragging = true;
      dragStartX = event.clientX;
      dragStartY = event.clientY;
      dragStartScrollLeft = lightboxStage.scrollLeft;
      dragStartScrollTop = lightboxStage.scrollTop;
      lightboxStage.classList.add('is-dragging');
      lightboxStage.setPointerCapture(event.pointerId);
      event.preventDefault();
    });

    lightboxStage.addEventListener('pointermove', (event) => {
      if (!isDragging) return;

      lightboxStage.scrollLeft = dragStartScrollLeft - (event.clientX - dragStartX);
      lightboxStage.scrollTop = dragStartScrollTop - (event.clientY - dragStartY);
    });

    const stopDragging = (event) => {
      if (!isDragging) return;

      isDragging = false;
      lightboxStage.classList.remove('is-dragging');

      if (typeof event.pointerId === 'number' && lightboxStage.hasPointerCapture(event.pointerId)) {
        lightboxStage.releasePointerCapture(event.pointerId);
      }
    };

    lightboxStage.addEventListener('pointerup', stopDragging);
    lightboxStage.addEventListener('pointercancel', stopDragging);
    lightboxStage.addEventListener('lostpointercapture', () => {
      isDragging = false;
      lightboxStage.classList.remove('is-dragging');
    });

    lightboxImage.addEventListener('load', () => {
      if (!lightbox.hidden) {
        resetZoom();
      }
    });

    window.addEventListener('resize', () => {
      if (lightbox.hidden || !lightboxImage.naturalWidth || !lightboxImage.naturalHeight) return;

      const focusPoint = getStageFocusPoint();
      updateZoomUi();
      setStageScrollFromFocusPoint(focusPoint);
    });

    document.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLImageElement) || !target.classList.contains('map-zoomable')) return;
      openLightbox(target);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeLightbox();
        return;
      }

      if (!lightbox.hidden) {
        if (event.key === '+' || event.key === '=') {
          event.preventDefault();
          setZoomLevel(zoomLevel + ZOOM_STEP);
          return;
        }

        if (event.key === '-' || event.key === '_') {
          event.preventDefault();
          setZoomLevel(zoomLevel - ZOOM_STEP);
          return;
        }

        if (event.key === '0') {
          event.preventDefault();
          resetZoom();
          return;
        }
      }

      const target = event.target;
      if (
        (event.key === 'Enter' || event.key === ' ') &&
        target instanceof HTMLImageElement &&
        target.classList.contains('map-zoomable')
      ) {
        event.preventDefault();
        openLightbox(target);
      }
    });

    updateZoomUi();
  }

  function initCursedPossessions() {
    const mapBtnContainer = document.getElementById('map-buttons');
    const locationDisplay = document.getElementById('cursed-locations-display');
    const mapTitle = document.getElementById('selected-map-title');
    const itemList = document.getElementById('selected-map-items');
    const closeMapBtn = document.getElementById('close-map-display');
    const mapImageContainer = document.getElementById('selected-map-image-container');
    const mapImage = document.getElementById('selected-map-image');
    const itemBtnContainer = document.getElementById('item-buttons');
    const itemLocationDisplay = document.getElementById('item-locations-display');
    const itemTitle = document.getElementById('selected-item-title');
    const itemLocationList = document.getElementById('selected-item-locations');
    const closeItemBtn = document.getElementById('close-item-display');
    const itemInfoContainer = document.getElementById('item-info-container');

    if (
      !mapBtnContainer ||
      !locationDisplay ||
      !mapTitle ||
      !itemList ||
      !closeMapBtn ||
      !mapImageContainer ||
      !mapImage ||
      !itemBtnContainer ||
      !itemLocationDisplay ||
      !itemTitle ||
      !itemLocationList ||
      !closeItemBtn ||
      !itemInfoContainer
    ) {
      return;
    }

    const sortedMapNames = MAP_GUIDE_DATA.map((map) => map.name).filter((name) => CURSED_DATA[name]);

    const hideMapDisplay = () => {
      locationDisplay.style.display = 'none';
      mapBtnContainer.querySelectorAll('.map-btn').forEach((button) => {
        button.classList.remove('active');
      });
    };

    const hideItemDisplay = () => {
      itemLocationDisplay.style.display = 'none';
      itemBtnContainer.querySelectorAll('.item-btn').forEach((button) => {
        button.classList.remove('active');
      });
    };

    closeMapBtn.addEventListener('click', hideMapDisplay);
    closeItemBtn.addEventListener('click', hideItemDisplay);

    CURSED_ITEM_ORDER.forEach((itemName) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = itemName;
      button.className = 'map-btn item-btn';
      button.dataset.item = itemName;

      button.addEventListener('click', () => {
        if (button.classList.contains('active')) {
          hideItemDisplay();
          return;
        }

        hideMapDisplay();
        itemBtnContainer.querySelectorAll('.item-btn').forEach((itemButton) => {
          itemButton.classList.remove('active');
        });
        button.classList.add('active');

        const color = CURSED_ITEM_COLORS[itemName] || 'var(--accent-green)';
        itemLocationDisplay.style.borderColor = color;
        itemTitle.style.color = color;
        itemTitle.textContent = itemName;
        itemLocationList.innerHTML = '';
        itemInfoContainer.innerHTML = `<p style="color: var(--text-secondary);">${escapeHtml(
          CURSED_ITEM_INFO[itemName] || ''
        )}</p>`;

        sortedMapNames.forEach((mapName) => {
          const location = CURSED_DATA[mapName]?.[itemName];
          if (!location) return;

          const listItem = document.createElement('li');
          listItem.style.marginBottom = '10px';
          listItem.style.fontSize = '1rem';
          listItem.innerHTML = `<strong style="color: var(--text-primary);">${escapeHtml(
            mapName
          )}:</strong> <span style="color: var(--text-secondary);">${escapeHtml(location)}</span>`;
          itemLocationList.appendChild(listItem);
        });

        itemLocationDisplay.style.display = 'block';
      });

      itemBtnContainer.appendChild(button);
    });

    sortedMapNames.forEach((mapName) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = mapName;
      button.className = 'map-btn';

      button.addEventListener('click', () => {
        if (button.classList.contains('active')) {
          hideMapDisplay();
          return;
        }

        hideItemDisplay();
        mapBtnContainer.querySelectorAll('.map-btn').forEach((mapButton) => {
          mapButton.classList.remove('active');
        });
        button.classList.add('active');
        mapTitle.textContent = mapName;
        itemList.innerHTML = '';

        const imageUrl = MAP_IMAGES[mapName];
        if (imageUrl) {
          mapImage.src = imageUrl;
          mapImage.dataset.lightboxTitle = `${mapName} cursed item map`;
          mapImageContainer.style.display = 'block';
        } else {
          mapImage.src = '';
          delete mapImage.dataset.lightboxTitle;
          mapImageContainer.style.display = 'none';
        }

        Object.entries(CURSED_DATA[mapName] || {})
          .sort((left, right) => CURSED_ITEM_ORDER.indexOf(left[0]) - CURSED_ITEM_ORDER.indexOf(right[0]))
          .forEach(([itemName, location]) => {
            const order = CURSED_ITEM_ORDER.indexOf(itemName) + 1;
            const displayName = order > 0 ? `${order}. ${itemName}` : itemName;
            const listItem = document.createElement('li');
            listItem.style.marginBottom = '10px';
            listItem.style.fontSize = '1.05rem';
            listItem.innerHTML = `<strong style="color: var(--text-primary);">${escapeHtml(
              displayName
            )}:</strong> <span style="color: var(--text-secondary);">${escapeHtml(location)}</span>`;
            itemList.appendChild(listItem);
          });

        locationDisplay.style.display = 'block';
      });

      mapBtnContainer.appendChild(button);
    });
  }

  function sizeClassName(size) {
    return `size-${size.toLowerCase()}`;
  }

  function escapeAttribute(text) {
    return String(text).replace(/"/g, '&quot;');
  }

  function escapeHtml(text) {
    return String(text).replace(/[&<>"']/g, (character) => {
      switch (character) {
        case '&':
          return '&amp;';
        case '<':
          return '&lt;';
        case '>':
          return '&gt;';
        case '"':
          return '&quot;';
        case "'":
          return '&#39;';
        default:
          return character;
      }
    });
  }
})();
