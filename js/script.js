const POSTS = [
      {
        type: 'quality', color: '#42B883', emoji: '🌿',
        user: 'nature.zine', handle: '@naturezine', time: '2m',
        text: 'Just found this wild mushroom cluster in the Cradle of Humankind 🍄 Thread below on what each species does for the ecosystem.',
        likes: '4.2K', comments: '312', shares: '891',
        correct: 'boost',
        feedback: { boost: '✅ Great content! Engagement +15', hide: '❌ You hid good content. User trust -10', skip: '⏭️ Neutral' }
      },
      {
        type: 'harmful', color: '#E7240A', emoji: '💢',
        user: 'TruthBombs99', handle: '@truthb0mbs', time: '5m',
        text: 'SHARE THIS: [Name] is a fraud. I have "proof". If you don\'t share, you\'re complicit. RT or you\'re the problem.',
        likes: '2', comments: '890', shares: '3',
        correct: 'hide',
        feedback: { boost: '❌ Boosted harassment. User trust -20', hide: '✅ Correctly removed. Engagement +10', skip: '⚠️ You let harassment stay. -5' }
      },
      {
        type: 'quality', color: '#42B883', emoji: '🎨',
        user: 'Amara Creates', handle: '@amaracreates', time: '12m',
        text: 'Six months of work. Finally finished my mural in Braamfontein. Come see it in person - corner of Juta & De Beer.',
        likes: '18K', comments: '2.1K', shares: '4.5K',
        correct: 'boost',
        feedback: { boost: '✅ Viral local content! +20', hide: '❌ Hidden quality post. -15', skip: '⏭️ Neutral' }
      },
      {
        type: 'spam', color: '#F7B928', emoji: '🤑',
        user: 'EarnFromHome_SA', handle: '@earn_home_sa', time: '1h',
        text: 'I make R45,000 a month from my phone doing nothing. DM me "MONEY" to find out how. No experience needed.',
        likes: '12', comments: '56', shares: '9',
        correct: 'hide',
        feedback: { boost: '❌ Boosted spam scam. -15', hide: '✅ Correctly hidden. +10', skip: '⚠️ Spam stays in feed. -5' }
      },
      {
        type: 'neutral', color: '#8A8D91', emoji: '☕',
        user: 'daily_drip', handle: '@daily_drip', time: '3h',
        text: 'Monday morning coffee ☕ Nothing more to say.',
        likes: '210', comments: '18', shares: '4',
        correct: 'skip',
        feedback: { boost: '⚠️ Wasted a boost on low-value post. -5', hide: '⚠️ Unnecessary hide. -5', skip: '✅ Good call. Skip. Neutral.' }
      },
      {
        type: 'ad', color: '#F7B928', emoji: '👗',
        user: 'StyleCorner_ZA', handle: '@stylecorner_za', time: '30m',
        text: 'These pieces literally changed how I dress. The quality is insane 😍 [link in bio] - not sponsored btw lol',
        likes: '900', comments: '120', shares: '200',
        correct: 'hide', tricky: true, adLabel: 'Sponsored',
        feedback: { boost: '❌ Boosted a disguised ad. User trust -15', hide: '✅ Spotted the hidden ad. +15', skip: '⚠️ Sneaky ad stayed in feed. -8' }
      },
      {
        type: 'quality', color: '#42B883', emoji: '📚',
        user: 'Prof. Lindiwe Dube', handle: '@lindiwedube_edu', time: '45m',
        text: 'Thread: Why South African students outperform global averages in critical thinking despite resource gaps. 1/12',
        likes: '7.8K', comments: '1.4K', shares: '3.2K',
        correct: 'boost',
        feedback: { boost: '✅ Educational gold. +20', hide: '❌ Hidden valuable thread. -15', skip: '⏭️ Neutral' }
      },
      {
        type: 'harmful', color: '#E7240A', emoji: '😤',
        user: 'OpinionLord', handle: '@opinionlord_za', time: '2h',
        text: 'Hot take: [demographic group] are just lazy. Fight me. I said what I said. 🙃',
        likes: '43', comments: '3.4K', shares: '20',
        correct: 'hide',
        feedback: { boost: '❌ Boosted hate content. -25', hide: '✅ Correctly removed. +15', skip: '⚠️ Hate content remains. -10' }
      },
      {
        type: 'rage-bait', color: '#42B883', emoji: '😊',
        user: 'wholesome.vibes', handle: '@wholesomevibes', time: '6h',
        text: 'This little boy found R200 on the street and returned it to the old lady who dropped it 🥺 Humanity is not lost.',
        likes: '45K', comments: '12K', shares: '20K',
        correct: 'boost', tricky: true,
        feedback: { boost: '✅ Genuinely wholesome — boosted! +15', hide: '❌ You hid wholesome content. -10', skip: '⏭️ Neutral' }
      },
      {
        type: 'neutral', color: '#8A8D91', emoji: '🐾',
        user: 'tomtom_thedachshund', handle: '@tomtom_dachshund', time: '8h',
        text: 'Another Tuesday, another nap.',
        likes: '560', comments: '42', shares: '11',
        correct: 'skip',
        feedback: { boost: '⚠️ Wasted boost. -5', hide: '⚠️ Unnecessary remove. -5', skip: '✅ Good call. Neutral.' }
      },
      {
        type: 'ad', color: '#F7B928', emoji: '💪',
        user: 'Thabo Fitness', handle: '@thabofitness_real', time: '1d',
        text: 'My 12-week transformation - no shortcuts, just discipline. What I ate, how I trained. Full breakdown 👇',
        likes: '22K', comments: '3.1K', shares: '8.8K',
        correct: 'hide', tricky: true, adLabel: 'Paid Partnership',
        feedback: { boost: '❌ Disguised product ad boosted. -15', hide: '✅ Spotted the paid partnership. +15', skip: '⚠️ Ad stays in feed. -8' }
      },
      {
        type: 'harmful', color: '#E7240A', emoji: '😇',
        user: 'healthadvice_za', handle: '@healthadvice_za', time: '2d',
        text: 'Doctors don\'t want you to know this simple trick to cure [illness] forever. Big pharma is hiding the truth! Natural cure in bio 👇',
        likes: '2.3K', comments: '870', shares: '1.1K',
        correct: 'hide', tricky: true,
        feedback: { boost: '❌ Boosted health misinformation. -25', hide: '✅ Misinformation removed. +20', skip: '⚠️ Dangerous content stays. -12' }
      },
      {
        type: 'quality', color: '#42B883', emoji: '🎵',
        user: 'Lesedi Motsepe', handle: '@lesedi_music', time: '3d',
        text: 'Dropped my first EP at 2am last night not expecting anything and woke up to 40K streams 🥹 Thank you guys, honestly',
        likes: '88K', comments: '12K', shares: '18K',
        correct: 'boost',
        feedback: { boost: '✅ Authentic viral moment. +25', hide: '❌ Hid a genuine success story. -20', skip: '⏭️ Neutral' }
      },
      {
        type: 'spam', color: '#F7B928', emoji: '🏆',
        user: 'GiveawayKing_SA', handle: '@giveawayking_sa', time: '4d',
        text: 'GIVEAWAY! Win R10,000 cash. Rules: Follow + RT + Tag 3 friends. Must be 18+. Ends Sunday. Good luck!',
        likes: '14K', comments: '28K', shares: '31K',
        correct: 'hide', tricky: true,
        feedback: { boost: '❌ Engagement-farming spam boosted. -15', hide: '✅ Correctly removed spam. +10', skip: '⚠️ Spam farm stays. -8' }
      },
      {
        type: 'quality', color: '#42B883', emoji: '🌍',
        user: 'Afrika Climate Hub', handle: '@afrikaclimate', time: '5d',
        text: 'Interactive map: How climate change is reshaping rainfall patterns across Southern Africa over the next 30 years. Data thread 🧵',
        likes: '9.1K', comments: '2.2K', shares: '5.6K',
        correct: 'boost',
        feedback: { boost: '✅ High-value content. +20', hide: '❌ Hid important information. -15', skip: '⏭️ Neutral' }
      },
    ];

    // global game state
    let state = {};

    // initialize or reset game state
    function initState() {
      state = {
        score: 0, engagement: 50, level: 1, postIndex: 0,
        timeLeft: 15, timerInterval: null, streak: 0,
        boosted: 0, hidden: 0, skipped: 0, shuffledPosts: [], active: false,
      };
    }

    // swap active screen view
    function showScreen(id) {
      document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
      document.getElementById(id).classList.add('active');
    }

    // simple array shuffle
    function shuffle(arr) {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    // handle countdown and time out
    function startTimer() {
      clearInterval(state.timerInterval);
      state.timeLeft = getTimeLimit();
      updateTimerUI();
      state.timerInterval = setInterval(() => {
        state.timeLeft--;
        updateTimerUI();
        if (state.timeLeft <= 0) {
          clearInterval(state.timerInterval);
          changeEngagement(-12);
          showFeedback('⏰ Too slow! -12 engagement', 'bad');
          state.streak = 0;
          updateStreakUI();
          nextPost();
        }
      }, 1000);
    }

    // get time limit based on level
    function getTimeLimit() {
      if (state.level === 1) return 15;
      if (state.level === 2) return 11;
      return 8;
    }

    function updateTimerUI() {
      const time = state.timeLeft;
      const limit = getTimeLimit();
      const element = document.getElementById('timer-val');
      const ring = document.getElementById('timer-ring');
      element.textContent = time;
      const circumference = 125.6; // 2π×20
      const offset = circumference * (1 - time / limit);
      ring.style.strokeDashoffset = offset;
      ring.className = 'timer-ring-fill';
      if (time <= 3) ring.classList.add('low');
      else if (time <= 6) ring.classList.add('mid');
    }

    // update engagement and check for game over
    function changeEngagement(delta) {
      state.engagement = Math.max(0, Math.min(100, state.engagement + delta));
      updateEngagementUI();
      if (state.engagement <= 0) endGame(false);
    }

    function updateEngagementUI() {
      const percentage = state.engagement;
      const bar = document.getElementById('eng-bar');
      const label = document.getElementById('eng-pct');
      bar.style.width = percentage + '%';
      label.textContent = percentage + '%';
      bar.className = 'bar-fill';
      if (percentage < 25) bar.classList.add('low');
      else if (percentage < 50) bar.classList.add('mid');
    }

    function updateScoreUI() { document.getElementById('score-val').textContent = state.score; }
    function updateLevelUI() { document.getElementById('level-val').textContent = state.level; }

    function updateStreakUI() {
      const badge = document.getElementById('streak-badge');
      document.getElementById('streak-num').textContent = state.streak;
      if (state.streak >= 2) badge.classList.remove('hidden');
      else badge.classList.add('hidden');
    }

    function showFeedback(msg, type = 'good') {
      const element = document.getElementById('feedback-flash');
      element.textContent = msg;
      element.className = 'feedback-flash ' + (type === 'bad' ? 'bad' : type === 'warn' ? 'warn' : '');
      element.classList.add('show');
      setTimeout(() => element.classList.remove('show'), 1100);
    }

    // render the current post card
    function renderPost(post) {
      const area = document.getElementById('post-area');
      const adLabel = post.adLabel
        ? `<div class="ad-watermark">${post.adLabel}</div>`
        : '';

      area.innerHTML = `
    <div class="post-card" style="--post-color: ${post.color}">
      ${adLabel}
      <div class="post-type-badge">
        <span class="dot"></span>
        ${post.type}
      </div>
      <div class="post-avatar">
        <div class="avatar-circle">${post.emoji}</div>
        <div class="avatar-meta">
          <div class="avatar-name">${post.user}</div>
          <div class="avatar-handle">${post.handle}</div>
        </div>
        <div class="avatar-time">${post.time || 'now'}</div>
      </div>
      <div class="post-text">${post.text}</div>
      <div class="reaction-count-row">
        <span class="reaction-icons">
          <span class="reaction-pill">👍</span>
          <span class="reaction-pill">❤️</span>
          <span class="reaction-pill">😮</span>
          <span style="margin-left:4px;">${post.likes}</span>
        </span>
        <span>${post.comments} comments · ${post.shares} shares</span>
      </div>
      <div class="post-stats">
        <div class="post-stat-item">👍 Like</div>
        <div class="post-stat-item">💬 Comment</div>
        <div class="post-stat-item">↗️ Share</div>
      </div>
    </div>
  `;
    }

    // handle user action and calculate points/penalties
    function handleAction(action) {
      if (!state.active) return;
      clearInterval(state.timerInterval);

      const post = state.shuffledPosts[state.postIndex];
      const feedbackMessage = post.feedback[action];
      const isCorrect = action === post.correct;

      if (isCorrect) {
        const basePoints = state.level * 10;
        const timeBonus = Math.floor(state.timeLeft * 1.5);
        const streakBonus = state.streak >= 3 ? 5 : 0;
        const points = basePoints + timeBonus + streakBonus;
        state.score += points;
        state.streak++;
        if (action === 'boost') changeEngagement(+15);
        else if (action === 'hide') changeEngagement(+10);
        else changeEngagement(0);
        showFeedback(feedbackMessage, 'good');
        if (action === 'boost') state.boosted++;
        else if (action === 'hide') state.hidden++;
        else state.skipped++;
      } else {
        const penalty = post.tricky ? 8 : 15;
        if (feedbackMessage.includes('-25')) changeEngagement(-25);
        else if (feedbackMessage.includes('-20')) changeEngagement(-20);
        else if (feedbackMessage.includes('-15')) changeEngagement(-15);
        else if (feedbackMessage.includes('-12')) changeEngagement(-12);
        else if (feedbackMessage.includes('-10')) changeEngagement(-10);
        else if (feedbackMessage.includes('-8')) changeEngagement(-8);
        else if (feedbackMessage.includes('-5')) changeEngagement(-5);
        else changeEngagement(-penalty);
        state.streak = 0;
        showFeedback(feedbackMessage, feedbackMessage.includes('⚠️') ? 'warn' : 'bad');
        if (action === 'boost') state.boosted++;
        else if (action === 'hide') state.hidden++;
        else state.skipped++;
      }

      updateScoreUI();
      updateStreakUI();
      if (state.engagement <= 0) return;
      nextPost();
    }

    // level progression logic
    function checkLevelUp() {
      const postsPerLevel = 5;
      const newLevel = Math.min(3, Math.floor(state.postIndex / postsPerLevel) + 1);
      if (newLevel > state.level) {
        state.level = newLevel;
        updateLevelUI();
        const banner = document.getElementById('level-banner');
        const messages = ['', '', 'Level 2 - Ads in disguise incoming…', 'Level 3 - Misinformation & rage-bait. Stay sharp.'];
        banner.textContent = messages[state.level] || 'Level up! Posts are getting trickier…';
        banner.classList.add('visible');
        setTimeout(() => banner.classList.remove('visible'), 2500);
      }
    }

    // move to the next post or end the game
    function nextPost() {
      state.postIndex++;
      if (state.postIndex >= state.shuffledPosts.length) { endGame(true); return; }
      checkLevelUp();
      renderPost(state.shuffledPosts[state.postIndex]);
      startTimer();
    }

    // start the game loop
    function startGame() {
      initState();
      state.shuffledPosts = shuffle(POSTS);
      state.active = true;
      showScreen('game-screen');
      updateScoreUI();
      updateEngagementUI();
      updateLevelUI();
      updateStreakUI();
      document.getElementById('eng-pct').textContent = '50%';
      document.getElementById('level-banner').classList.remove('visible');
      renderPost(state.shuffledPosts[0]);
      startTimer();
    }

    // handle end game display and messages
    function endGame(won) {
      clearInterval(state.timerInterval);
      state.active = false;

      document.getElementById('final-score').textContent = state.score;
      document.getElementById('stat-boosted').textContent = state.boosted;
      document.getElementById('stat-hidden').textContent = state.hidden;
      document.getElementById('stat-skipped').textContent = state.skipped;

      const titleElement = document.getElementById('end-title');
      const subtitleElement = document.getElementById('end-subtitle');
      const msgElement = document.getElementById('end-msg');
      const emojiElement = document.getElementById('end-emoji');

      if (won) {
        emojiElement.textContent = '🏆';
        titleElement.textContent = 'Algorithm Ace';
        titleElement.className = 'end-title win';
        subtitleElement.textContent = 'You survived the feed.';
        msgElement.textContent = `You kept the engagement above zero and made it through all ${POSTS.length} posts. Your score of ${state.score} reflects every correct call, time bonus, and streak combo. The real algorithms wish they were this good.`;
      } else {
        emojiElement.textContent = '😵';
        titleElement.textContent = 'User Rage-Quit';
        titleElement.className = 'end-title lose';
        subtitleElement.textContent = 'Engagement hit zero.';
        const score = state.score;
        let msg = '';
        if (score < 50) msg = 'The feed was a disaster. Too many bad calls too quickly.';
        else if (score < 150) msg = 'You were getting there - but one too many misjudgements crashed the engagement.';
        else msg = 'So close! Great score but the engagement meter ran dry at the wrong moment.';
        msgElement.textContent = msg + ' Try again - level 3 posts are the real test.';
      }

      showScreen('end-screen');
    }
