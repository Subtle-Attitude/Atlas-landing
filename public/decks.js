function trackEvent(eventName) {
  console.log(`Analytics event: ${eventName}`);
  // Example: Google Analytics (uncomment to enable)
  // if (window.gtag) {
  //   window.gtag('event', eventName, {
  //     event_category: 'User_Interaction',
  //     event_label: 'Authentication'
  //   });
  // }
}

(function () {
  // Define single deck configuration with prompts (Your Atlas)
  window.decks = {
    'your-atlas': {
      backImage: '/images/shuffle-your-atlas.png',
      prompts: [
        {
          "image": "/images/youratlasfront/destiny-a-constellation-of-choices-the-stars-rearrange-with-every-decision-what-pattern-is-forming.png",
          "text": "Destiny: A constellation of choices. The stars rearrange with every decision. What pattern is forming?"
        },
        {
          "image": "/images/youratlasfront/destiny-a-destiny-in-motion-your-journey-is-already-unfolding-what-direction-does-the-wind-push-you.png",
          "text": "Destiny: A destiny in motion. Your journey is already unfolding. What direction does the wind push you?"
        },
        {
          "image": "/images/youratlasfront/destiny-a-future-memory-somewhere-ahead-a-moment-is-already-waiting-for-you-what-does-it-look-like.png",
          "text": "Destiny: A future memory. Somewhere ahead, a moment is already waiting for you. What does it look like?"
        },
        {
          "image": "/images/youratlasfront/destiny-a-letter-from-future-you-If-your-future-self-could-reach-back-in-time-what-wisdom-would-they-send.png",
          "text": "Destiny: A letter from future you. If your future self could reach back in time, what wisdom would they send?"
        },
        {
          "image": "/images/youratlasfront/destiny-a-whisper-from-the-horizon-a-vision-of-the-future-is-calling-what-does-it-reveal.png",
          "text": "Destiny: A whisper from the horizon. A vision of the future is calling. What does it reveal?"
        },
        {
          "image": "/images/youratlasfront/destiny-an-unopened-door-in-the-distance-you-step-toward-it-what-feeling-stirs-within-you.png",
          "text": "Destiny: An unopened door in the distance. You step toward it. What feeling stirs within you?"
        },
        {
          "image": "/images/youratlasfront/destiny-the-bridge-yet-to-be-built-a-version-of-you-stands-across-the-way-what-path-will-take-you-there.png",
          "text": "Destiny: The bridge yet to be built. A version of you stands across the way. What path will take you there?"
        },
        {
          "image": "/images/youratlasfront/destiny-the-echo-of-a-dream-yet-to-be-something-is-reaching-for-you-from-the-future-what-happens-when-you-reach-back.png",
          "text": "Destiny: The echo of a dream yet to be. Something is reaching for you from the future. What happens when you reach back?"
        },
        {
          "image": "/images/youratlasfront/destiny-the-first-glimpse-of-tomorrow-close-your-eyes-what-flashes-before-you-when-you-think-of-whats-ahead.png",
          "text": "Destiny: The first glimpse of tomorrow. Close your eyes. What flashes before you when you think of what's ahead?"
        },
        {
          "image": "/images/youratlasfront/destiny-the-stargazers-dream-the-constellations-rearrange-themselves-just-for-you-what-do-they-spell-out.png",
          "text": "Destiny: The stargazer's dream. The constellations rearrange themselves just for you. What do they spell out?"
        },
        {
          "image": "/images/youratlasfront/echos-a-door-once-closed-if-you-could-step-back-through-would-you-what-would-you-do-differently.png",
          "text": "Echos: A door once closed. If you could step back through, would you? What would you do differently?"
        },
        {
          "image": "/images/youratlasfront/echos-a-reflection-in-the-river-If-your-younger-self-could-glimpse-you-now-what-would-they-feel.png",
          "text": "Echos: A reflection in the river. If your younger self could glimpse you now, what would they feel?"
        },
        {
          "image": "/images/youratlasfront/echos-a-tether-to-yesterday-what-past-belief-still-clings-to-your-present-is-it-time-to-release-or-embrace-it.png",
          "text": "Echos: A tether to yesterday. What past belief still clings to your present? Is it time to release or embrace it?"
        },
        {
          "image": "/images/youratlasfront/echos-echoes-in-the-wind-a-moment-from-your-past-calls-out-what-memory-is-asking-to-be-seen.png",
          "text": "Echos: Echoes in the wind. A moment from your past calls out. What memory is asking to be seen?"
        },
        {
          "image": "/images/youratlasfront/echos-the-crossroad-that-shaped-you-a-choice-you-made-still-ripples-through-time-what-was-its-gift.png",
          "text": "Echos: The crossroad that shaped you. A choice you made still ripples through time. What was its gift?"
        },
        {
          "image": "/images/youratlasfront/echos-the-fragment-left-behind-somewhere-in-time-a-piece-of-you-remains-what-part-of-yourself-longs-to-return.png",
          "text": "Echos: The fragment left behind. Somewhere in time, a piece of you remains. What part of yourself longs to return?"
        },
        {
          "image": "/images/youratlasfront/echos-the-light-you-carried-a-past-version-of-you-had-a-spark-that-faded-can-you-reclaim-it.png",
          "text": "Echos: The light you carried. A past version of you had a spark that faded. Can you reclaim it?"
        },
        {
          "image": "/images/youratlasfront/echos-the-unfinished-story-a-chapter-from-your-past-was-left-unwritten-how-does-the-tale-continue-now.png",
          "text": "Echos: The unfinished story. A chapter from your past was left unwritten. How does the tale continue now?"
        },
        {
          "image": "/images/youratlasfront/echos-whispers-from-before-a-message-lingers-from-a-past-version-of-you-what-does-it-say.png",
          "text": "Echos: Whispers from before. A message lingers from a past version of you. What does it say?"
        },
        {
          "image": "/images/youratlasfront/echos. The Thread of-fate-trace-a-single-thread-from-your-past-to-your-present-what-has-it-woven.png",
          "text": "Echos: The thread of fate. Trace a single thread from your past to your present. What has it woven?"
        },
        {
          "image": "/images/youratlasfront/the-precipice-a-hidden-door-in-the-present-what-is-just-beneath-the-surface-waiting-for-you-to-noticed.png",
          "text": "The Precipice: A hidden door in the present. What is just beneath the surface waiting for you to notice?"
        },
        {
          "image": "/images/youratlasfront/the-precipice-a-message-written-in-the-sky-If-today-had-a-sign-meant-only-for-you-what-would-it-say.png",
          "text": "The Precipice: A message written in the sky. If today had a sign meant only for you, what would it say?"
        },
        {
          "image": "/images/youratlasfront/the-precipice-breathe-with-the-universe-what-would-changes-if-you-synchronized-you-breath-with-the-rhythm-of-existence.png",
          "text": "The Precipice: Breathe with the universe. What would change if you synchronized your breath with the rhythm of existence?"
        },
        {
          "image": "/images/youratlasfront/the-precipice-stardust-in-your-vein-your-body-your-breath-your-being-what-is-alive-in-you-in-this-very-second.png",
          "text": "The Precipice: Stardust in your veins. Your body, your breath, your being—what is alive in you in this very second?"
        },
        {
          "image": "/images/youratlasfront/the-precipice-the-mirror-of-today-what-does-the-world-reflect-back-at-you-right-now.png",
          "text": "The Precipice: The mirror of today. What does the world reflect back at you right now?"
        },
        {
          "image": "/images/youratlasfront/the-precipice-the-pulse-of-this-moment-If-now-had-a-heartbeat-what-rhythm-does-it-hold-for-you.png",
          "text": "The Precipice: The pulse of this moment. If now had a heartbeat, what rhythm does it hold for you?"
        },
        {
          "image": "/images/youratlasfront/the-precipice-the-unfloding-moment-time-slows-the-air-stills-what-truth-arises-when-you-listen-deeply.png",
          "text": "The Precipice: The unfolding moment. Time slows, the air stills. What truth arises when you listen deeply?"
        },
        {
          "image": "/images/youratlasfront/the-precipice-times-gentle-invitation-If-you-fully-embraced-this-moment-as-sacred.what.would.shift.png",
          "text": "The Precipice: Time's gentle invitation. If you fully embraced this moment as sacred, what would shift?"
        },
        {
          "image": "/images/youratlasfront/the-precipice-who-you-were-and-who-you-are-If-they-sat-across-from-each-other-what-would-they-say.png",
          "text": "The Precipice: Who you were and who you are. If they sat across from each other, what would they say?"
        },
        {
          "image": "/images/youratlasfront/the-recipice-the-universe-at-your-fingertips-right-now-all-of-creation-moves-through-you-what-do-you-sense.png",
          "text": "The Precipice: The universe at your fingertips. Right now, all of creation moves through you. What do you sense?"
        }
      ]
    }
  };

  // Inject Google Identity Services and custom button styles
  const head = document.head;
  const css = `
    .qJTHM {
      -webkit-user-select: none;
      color: #202124;
      direction: ltr;
      -webkit-touch-callout: none;
      font-family: "Roboto-Regular",arial,sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      margin: 0;
      overflow: hidden;
      -webkit-text-size-adjust: 100%
    }
    .ynRLnc {
      left: -9999px;
      position: absolute;
      top: -9999px
    }
    .L6cTce {
      display: none
    }
    .bltWBb {
      word-break: break-all
    }
    .hSRGPd {
      color: #1a73e8;
      cursor: pointer;
      font-weight: 500;
      text-decoration: none
    }
    .Bz112c-W3lGp {
      height: 16px;
      width: 16px
    }
    .Bz112c-E3DyYd {
      height: 20px;
      width: 20px
    }
    .Bz112c-r9oPif {
      height: 24px;
      width: 24px
    }
    .Bz112c-u2z5K {
      height: 36px;
      width: 36px
    }
    .Bz112c-uaxL4e {
      -webkit-border-radius: 10px;
      border-radius: 10px
    }
    .LgbsSe-Bz112c {
      display: block
    }
    .S9gUrf-YoZ4jf,
    .S9gUrf-YoZ4jf * {
      border: none;
      margin: 0;
      padding: 0
    }
    .fFW7wc-ibnC6b>.aZ2wEe>div {
      border-color: #4285f4
    }
    .P1ekSe-ZMv3u>div:nth-child(1) {
      background-color: #1a73e8 !important
    }
    .P1ekSe-ZMv3u>div:nth-child(2),
    .P1ekSe-ZMv3u>div:nth-child(3) {
      background-image: linear-gradient(to right, rgba(255, 255, 255, .7), rgba(255, 255, 255, .7)), linear-gradient(to right, #1a73e8, #1a73e8) !important
    }
    .haAclf {
      display: inline-block
    }
    .nsm7Bb-HzV7m-LgbsSe {
      -webkit-border-radius: 4px;
      border-radius: 4px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-transition: background-color .218s, border-color .218s;
      transition: background-color .218s, border-color .218s;
      -webkit-user-select: none;
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dadce0;
      color: #3c4043;
      cursor: pointer;
      font-family: "Google Sans", arial, sans-serif;
      font-size: 14px;
      height: 40px;
      letter-spacing: 0.25px;
      outline: none;
      overflow: hidden;
      padding: 0 12px;
      position: relative;
      text-align: center;
      vertical-align: middle;
      white-space: nowrap;
      width: auto
    }
    @media (forced-colors: active) {
      .nsm7Bb-HzV7m-LgbsSe {
        border: 2px solid CanvasText;
        color: CanvasText
      }
    }
    @media (prefers-contrast: more) {
      .nsm7Bb-HzV7m-LgbsSe {
        color: #000
      }
      .nsm7Bb-HzV7m-LgbsSe.MFS4be-JaPV2b-Ia7Qfc {
        color: #fff
      }
    }
    .nsm7Bb-HzV7m-LgbsSe.pSzOP-SxQuSe {
      font-size: 14px;
      height: 32px;
      letter-spacing: 0.25px;
      padding: 0 10px
    }
    .nsm7Bb-HzV7m-LgbsSe.purZT-SxQuSe {
      font-size: 11px;
      height: 20px;
      letter-spacing: 0.3px;
      padding: 0 8px
    }
    .nsm7Bb-HzV7m-LgbsSe.Bz112c-LgbsSe {
      padding: 0;
      width: 40px
    }
    .nsm7Bb-HzV7m-LgbsSe.Bz112c-LgbsSe.pSzOP-SxQuSe {
      width: 32px
    }
    .nsm7Bb-HzV7m-LgbsSe.Bz112c-LgbsSe.purZT-SxQuSe {
      width: 20px
    }
    .nsm7Bb-HzV7m-LgbsSe.JGcpL-RbRzK {
      -webkit-border-radius: 20px;
      border-radius: 20px
    }
    .nsm7Bb-HzV7m-LgbsSe.JGcpL-RbRzK.pSzOP-SxQuSe {
      -webkit-border-radius: 16px;
      border-radius: 16px
    }
    .nsm7Bb-HzV7m-LgbsSe.JGcpL-RbRzK.purZT-SxQuSe {
      -webkit-border-radius: 10px;
      border-radius: 10px
    }
    .nsm7Bb-HzV7m-LgbsSe.MFS4be-Ia7Qfc {
      border: none;
      color: #fff
    }
    .nsm7Bb-HzV7m-LgbsSe.MFS4be-v3pZbf-Ia7Qfc {
      background-color: #1a73e8
    }
    .nsm7Bb-HzV7m-LgbsSe.MFS4be-JaPV2b-Ia7Qfc {
      background-color: #202124;
      color: #e8eaed
    }
    .nsm7Bb-HzV7m-LgbsSe .nsm7Bb-HzV7m-LgbsSe-Bz112c {
      height: 18px;
      margin-right: 8px;
      min-width: 18px;
      width: 18px
    }
    .nsm7Bb-HzV7m-LgbsSe.pSzOP-SxQuSe .nsm7Bb-HzV7m-LgbsSe-Bz112c {
      height: 14px;
      min-width: 14px;
      width: 14px
    }
    .nsm7Bb-HzV7m-LgbsSe.purZT-SxQuSe .nsm7Bb-HzV7m-LgbsSe-Bz112c {
      height: 10px;
      min-width: 10px;
      width: 10px
    }
    .nsm7Bb-HzV7m-LgbsSe.jVeSEe .nsm7Bb-HzV7m-LgbsSe-Bz112c {
      margin-left: 8px;
      margin-right: -4px
    }
    .nsm7Bb-HzV7m-LgbsSe.Bz112c-LgbsSe .nsm7Bb-HzV7m-LgbsSe-Bz112c {
      margin: 0;
      padding: 10px
    }
    .nsm7Bb-HzV7m-LgbsSe.Bz112c-LgbsSe.pSzOP-SxQuSe .nsm7Bb-HzV7m-LgbsSe-Bz112c {
      padding: 8px
    }
    .nsm7Bb-HzV7m-LgbsSe.Bz112c-LgbsSe.purZT-SxQuSe .nsm7Bb-HzV7m-LgbsSe-Bz112c {
      padding: 4px
    }
    .nsm7Bb-HzV7m-LgbsSe .nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf {
      -webkit-border-top-left-radius: 3px;
      border-top-left-radius: 3px;
      -webkit-border-bottom-left-radius: 3px;
      border-bottom-left-radius: 3px;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      justify-content: center;
      -webkit-align-items: center;
      align-items: center;
      background-color: #fff;
      height: 36px;
      margin-left: -10px;
      margin-right: 12px;
      min-width: 36px;
      width: 36px
    }
    .nsm7Bb-HzV7m-LgbsSe .nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf .nsm7Bb-HzV7m-LgbsSe-Bz112c,
    .nsm7Bb-HzV7m-LgbsSe.Bz112c-LgbsSe .nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf .nsm7Bb-HzV7m-LgbsSe-Bz112c {
      margin: 0;
      padding: 0
    }
    .nsm7Bb-HzV7m-LgbsSe.pSzOP-SxQuSe .nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf {
      height: 28px;
      margin-left: -8px;
      margin-right: 10px;
      min-width: 28px;
      width: 28px
    }
    .nsm7Bb-HzV7m-LgbsSe.purZT-SxQuSe .nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf {
      height: 16px;
      margin-left: -6px;
      margin-right: 8px;
      min-width: 16px;
      width: 16px
    }
    .nsm7Bb-HzV7m-LgbsSe.Bz112c-LgbsSe .nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf {
      -webkit-border-radius: 3px;
      border-radius: 3px;
      margin-left: 2px;
      margin-right: 0;
      padding: 0
    }
    .nsm7Bb-HzV7m-LgbsSe.JGcpL-RbRzK .nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf {
      -webkit-border-radius: 18px;
      border-radius: 18px
    }
    .nsm7Bb-HzV7m-LgbsSe.pSzOP-SxQuSe.JGcpL-RbRzK .nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf {
      -webkit-border-radius: 14px;
      border-radius: 14px
    }
    .nsm7Bb-HzV7m-LgbsSe.purZT-SxQuSe.JGcpL-RbRzK .nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf {
      -webkit-border-radius: 8px;
      border-radius: 8px
    }
    .nsm7Bb-HzV7m-LgbsSe .nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-align-items: center;
      align-items: center;
      -webkit-flex-direction: row;
      flex-direction: row;
      justify-content: space-between;
      -webkit-flex-wrap: nowrap;
      flex-wrap: nowrap;
      height: 100%;
      position: relative;
      width: 100%
    }
    .nsm7Bb-HzV7m-LgbsSe .oXtfBe-l4eHX {
      justify-content: center
    }
    .nsm7Bb-HzV7m-LgbsSe .nsm7Bb-HzV7m-LgbsSe-BPrWId {
      -webkit-flex-grow: 1;
      flex-grow: 1;
      font-family: "Google Sans", arial, sans-serif;
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      vertical-align: top
    }
    .nsm7Bb-HzV7m-LgbsSe.purZT-SxQuSe .nsm7Bb-HzV7m-LgbsSe-BPrWId {
      font-weight: 300
    }
    .nsm7Bb-HzV7m-LgbsSe .oXtfBe-l4eHX .nsm7Bb-HzV7m-LgbsSe-BPrWId {
      -webkit-flex-grow: 0;
      flex-grow: 0
    }
    .nsm7Bb-HzV7m-LgbsSe .nsm7Bb-HzV7m-LgbsSe-MJoBVe {
      -webkit-transition: background-color .218s;
      transition: background-color .218s;
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
      top: 0
    }
    .nsm7Bb-HzV7m-LgbsSe:hover,
    .nsm7Bb-HzV7m-LgbsSe:focus {
      -webkit-box-shadow: none;
      box-shadow: none;
      border-color: rgb(210, 227, 252);
      outline: none
    }
    .nsm7Bb-HzV7m-LgbsSe:focus-within {
      outline: 2px solid #00639b;
      border-color: transparent
    }
    .nsm7Bb-HzV7m-LgbsSe:hover .nsm7Bb-HzV7m-LgbsSe-MJoBVe {
      background: rgba(66, 133, 244, .08)
    }
    .nsm7Bb-HzV7m-LgbsSe:active .nsm7Bb-HzV7m-LgbsSe-MJoBVe,
    .nsm7Bb-HzV7m-LgbsSe:focus .nsm7Bb-HzV7m-LgbsSe-MJoBVe {
      background: rgba(66, 133, 244, .1)
    }
    .nsm7Bb-HzV7m-LgbsSe.MFS4be-Ia7Qfc:hover .nsm7Bb-HzV7m-LgbsSe-MJoBVe {
      background: rgba(255, 255, 255, .24)
    }
    .nsm7Bb-HzV7m-LgbsSe.MFS4be-Ia7Qfc:active .nsm7Bb-HzV7m-LgbsSe-MJoBVe,
    .nsm7Bb-HzV7m-LgbsSe.MFS4be-Ia7Qfc:focus .nsm7Bb-HzV7m-LgbsSe-MJoBVe {
      background: rgba(255, 255, 255, .32)
    }
    .nsm7Bb-HzV7m-LgbsSe .n1UuX-DkfjY {
      -webkit-border-radius: 50%;
      border-radius: 50%;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      height: 20px;
      margin-left: -4px;
      margin-right: 8px;
      min-width: 20px;
      width: 20px
    }
    .nsm7Bb-HzV7m-LgbsSe.jVeSEe .nsm7Bb-HzV7m-LgbsSe-BPrWId {
      font-family: "Roboto";
      font-size: 12px;
      text-align: left
    }
    .nsm7Bb-HzV7m-LgbsSe.jVeSEe .nsm7Bb-HzV7m-LgbsSe-BPrWId .ssJRIf,
    .nsm7Bb-HzV7m-LgbsSe.jVeSEe .nsm7Bb-HzV7m-LgbsSe-BPrWId .K4efff .fmcmS {
      overflow: hidden;
      text-overflow: ellipsis
    }
    .nsm7Bb-HzV7m-LgbsSe.jVeSEe .nsm7Bb-HzV7m-LgbsSe-BPrWId .K4efff {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-align-items: center;
      align-items: center;
      color: #5f6368;
      fill: #5f6368;
      font-size: 11px;
      font-weight: 400
    }
    .nsm7Bb-HzV7m-LgbsSe.jVeSEe.MFS4be-Ia7Qfc .nsm7Bb-HzV7m-LgbsSe-BPrWId .K4efff {
      color: #e8eaed;
      fill: #e8eaed
    }
    @media (prefers-contrast: more) {
      .nsm7Bb-HzV7m-LgbsSe.jVeSEe .nsm7Bb-HzV7m-LgbsSe-BPrWId .K4efff,
      .nsm7Bb-HzV7m-LgbsSe.jVeSEe.MFS4be-Ia7Qfc .nsm7Bb-HzV7m-LgbsSe-BPrWId .K4efff {
        color: #000;
        fill: #000
      }
    }
    .nsm7Bb-HzV7m-LgbsSe.jVeSEe .nsm7Bb-HzV7m-LgbsSe-BPrWId .K4efff .Bz112c {
      height: 18px;
      margin: -3px -3px -3px 2px;
      min-width: 18px;
      width: 18px
    }
    .nsm7Bb-HzV7m-LgbsSe.jVeSEe .nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf {
      -webkit-border-top-left-radius: 0;
      border-top-left-radius: 0;
      -webkit-border-bottom-left-radius: 0;
      border-bottom-left-radius: 0;
      -webkit-border-top-right-radius: 3px;
      border-top-right-radius: 3px;
      -webkit-border-bottom-right-radius: 3px;
      border-bottom-right-radius: 3px;
      margin-left: 12px;
      margin-right: -10px
    }
    .nsm7Bb-HzV7m-LgbsSe.jVeSEe.JGcpL-RbRzK .nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf {
      -webkit-border-radius: 18px;
      border-radius: 18px
    }
    .L5Fo6c-sM5MNb {
      border: 0;
      display: block;
      left: 0;
      position: relative;
      top: 0
    }
    .L5Fo6c-bF1uUb {
      -webkit-border-radius: 4px;
      border-radius: 4px;
      bottom: 0;
      cursor: pointer;
      left: 0;
      position: absolute;
      right: 0;
      top: 0
    }
    .L5Fo6c-bF1uUb:focus {
      border: none;
      outline: none
    }
    .deck-container {
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none;
      user-select: none;
      outline: none;
    }
    .deck-card {
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none;
      user-select: none;
      outline: none;
    }
    .cosmic-btn {
      background: linear-gradient(45deg, #1a1a40, #2b2b66);
      color: #fff;
      font-family: "Google Sans", arial, sans-serif;
      font-size: 16px;
      padding: 10px 20px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
      transition: box-shadow 0.3s ease, transform 0.2s ease;
    }
    .cosmic-btn:hover {
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
      transform: scale(1.05);
    }
    .cosmic-btn:active {
      transform: scale(0.95);
    }
    .info-btn {
      background: none;
      border: none;
      cursor: pointer;
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1000;
    }
    .info-btn img {
      width: 40px;
      height: 40px;
    }
    .info-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2000;
    }
    .info-modal-content {
      background: linear-gradient(45deg, #1a1a40, #2b2b66);
      color: #fff;
      padding: 20px;
      border-radius: 8px;
      max-width: 90%;
      max-height: 80%;
      overflow-y: auto;
      text-align: center;
      font-family: "Google Sans", arial, sans-serif;
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    }
    .info-modal-content p {
      margin: 10px 0;
      line-height: 1.5;
    }
    .info-modal-content a {
      color: #1a73e8;
      text-decoration: none;
      font-weight: 500;
    }
    .info-modal-content a:hover {
      text-decoration: underline;
    }
    .info-modal-content .close-btn {
      background: #fff;
      color: #1a1a40;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 10px;
    }
    sentinel {}
  `;
  const styleId = 'googleidentityservice_button_styles';
  if (head && css && !document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.appendChild(document.createTextNode(css));
    if (document.currentScript && document.currentScript.nonce) {
      style.setAttribute('nonce', document.currentScript.nonce);
    }
    head.appendChild(style);
  }

  // Preload image function
  window.preloadImage = function (src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = src;
    });
  };

  // State management
  window.app = {
    state: {
      isAnimating: false,
      deckState: 'initial', // initial, shuffled, flipped
      isRocking: false,
      deckFlipped: false,
      currentDeckImage: null,
      currentPromptText: null,
      shuffledPrompts: [],
      hasInteracted: false // Track if user has interacted with the deck
    },
    setState: function (newState) {
      this.state = { ...this.state, ...newState };
    }
  };

  // Initialize audio objects
  const shuffleAudio = new Audio('/audio/shuffle.mp3');
  shuffleAudio.loop = true; // Set shuffle.mp3 to loop infinitely
  const flipAudio = new Audio('/audio/flip.mp3');
  const resetAudio = new Audio('/audio/reset.mp3');

  // Check if deck is unlocked (persistent across refreshes)
  let deckUnlocked = localStorage.getItem('deckUnlocked') === 'true';
  console.log('Initial deckUnlocked state:', deckUnlocked);

  function showEmailModal() {
    try {
      const modal = document.createElement('div');
      modal.className = 'email-modal';
      modal.style.display = 'flex';
      document.body.classList.add('modal-open');
      modal.innerHTML = `
        <div class="modal-content">
          <h2>✨ Broaden your celestial horizons ✨</h2>
          <p>Are you ready to explore your internal universe? Choose your path to begin your journey within:</p>
          <div id="google-signin-btn" class="gsi-material-button" data-analytics-event="atlas_google_signin"></div>
          <p>or</p>
          <form id="email-form">
            <input type="email" id="email-input" placeholder="🌌 Type your email to continue the shuffle" aria-label="Email address">
            <button type="submit" data-analytics-event="atlas_email_manual_entry">Continue with Email</button>
          </form>
          <button type="button" class="close-btn" aria-label="Close modal"></button>
        </div>
      `;

      const form = modal.querySelector('#email-form');
      const googleBtn = modal.querySelector('#google-signin-btn');

      function showCustomAlert(message, callback) {
        const alertModal = document.createElement('div');
        alertModal.className = 'email-modal';
        alertModal.style.display = 'flex';
        alertModal.innerHTML = `
          <div class="custom-alert">
            <p>${message}</p>
            <button class="confirm-alert">Confirm</button>
            <button class="cancel-alert">Cancel</button>
          </div>
        `;
        document.body.appendChild(alertModal);
        document.body.classList.add('modal-open');
        const confirmBtn = alertModal.querySelector('.confirm-alert');
        const cancelBtn = alertModal.querySelector('.cancel-alert');
        confirmBtn.addEventListener('click', () => {
          alertModal.remove();
          document.body.classList.remove('modal-open');
          if (callback) callback();
        });
        cancelBtn.addEventListener('click', () => {
          alertModal.remove();
          document.body.classList.remove('modal-open');
        });
      }

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = form.querySelector('#email-input').value.trim();
        if (!email) {
          console.warn('Email submission: Empty email field');
          showCustomAlert('Please fill out the email field.');
          return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          console.warn('Email submission: Invalid email format:', email);
          showCustomAlert('Please enter a valid email address.');
          return;
        }
        trackEvent('atlas_email_manual_entry');
        try {
          console.log('Submitting email:', email);
          const response = await fetch('/api/unlock-deck', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
          });
          console.log('Email submission response:', response.status);
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.message || response.statusText}`);
          }
          const data = await response.json();
          console.log('Email submission result:', data);
          if (data.success) {
            localStorage.setItem('deckUnlocked', 'true');
            localStorage.setItem('userEmail', email);
            deckUnlocked = true;
            console.log('After email submission, deckUnlocked:', deckUnlocked);
            modal.remove();
            document.body.classList.remove('modal-open');
            await window.renderDeck();
            showCustomAlert('The stars align! Your Atlas awaits.');
          } else {
            console.error('Email submission failed:', data.message);
            showCustomAlert('Error: ' + data.message);
          }
        } catch (error) {
          console.error('Email submission failed:', error.message, error.stack);
          showCustomAlert(`A cosmic disturbance occurred: ${error.message}. Please ensure the server is running and try again.`);
        }
      });

      const closeBtn = modal.querySelector('.close-btn');
      closeBtn.addEventListener('click', () => {
        modal.remove();
        document.body.classList.remove('modal-open');
      });

      let retryCount = 0;
      const maxRetries = 10;
      const retryTimeout = 200;
      const maxRetryDuration = 10000;
      const startTime = Date.now();

      function initializeGoogleSignIn() {
        console.log('Attempting to initialize Google Sign-In, attempt:', retryCount + 1);
        if (Date.now() - startTime > maxRetryDuration) {
          console.error('Google Identity Services timeout after', maxRetryDuration, 'ms');
          googleBtn.innerHTML = '<span class="gsi-material-button-contents">🚀 Continue with Google (Unavailable)</span><button class="retry-google-btn">Retry Google Sign-In</button>';
          googleBtn.classList.add('disabled');
          const retryBtn = googleBtn.querySelector('.retry-google-btn');
          retryBtn.addEventListener('click', () => {
            console.log('Retrying Google Sign-In on user click');
            retryCount = 0;
            googleBtn.innerHTML = '';
            googleBtn.classList.remove('disabled');
            const script = document.createElement('script');
            script.src = 'https://accounts.google.com/gsi/client';
            script.async = true;
            script.defer = true;
            script.onload = () => {
              console.log('Google Identity Services script reloaded');
              initializeGoogleSignIn();
            };
            script.onerror = () => {
              console.error('Failed to reload Google Identity Services script');
              googleBtn.innerHTML = '<span class="gsi-material-button-contents">🚀 Continue with Google (Unavailable)</span><button class="retry-google-btn">Retry Google Sign-In</button>';
              googleBtn.classList.add('disabled');
            };
            document.head.appendChild(script);
          });
          showCustomAlert('Google Sign-In unavailable. Click "Retry Google Sign-In" or use email.');
          return;
        }

        if (typeof google !== 'undefined' && google.accounts && google.accounts.id) {
          try {
            console.log('Google Identity Services available, initializing...');
            google.accounts.id.initialize({
              client_id: '547040499431-ja17jb9unqoiaq9fno0p719vokb5oqd9.apps.googleusercontent.com',
              callback: async (response) => {
                try {
                  console.log('Google Sign-In response:', response);
                  const payload = JSON.parse(atob(response.credential.split('.')[1]));
                  console.log('Google Sign-In payload:', payload);
                  const userEmail = payload.email;
                  if (!userEmail) {
                    throw new Error('No email in Google Sign-In payload');
                  }
                  trackEvent('atlas_google_signin');
                  const apiResponse = await fetch('/api/unlock-deck', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id_token: response.credential })
                  });
                  console.log('Google Sign-In API response:', apiResponse.status);
                  if (!apiResponse.ok) {
                    const errorData = await apiResponse.json();
                    throw new Error(`HTTP error! Status: ${apiResponse.status}, Message: ${errorData.message || apiResponse.statusText}`);
                  }
                  const data = await apiResponse.json();
                  console.log('Google Sign-In result:', data);
                  if (data.success) {
                    localStorage.setItem('deckUnlocked', 'true');
                    localStorage.setItem('userEmail', userEmail);
                    deckUnlocked = true;
                    console.log('After Google Sign-In, deckUnlocked:', deckUnlocked);
                    modal.remove();
                    document.body.classList.remove('modal-open');
                    await window.renderDeck();
                    showCustomAlert('The cosmos welcomes you back! Your Atlas awaits.');
                  } else {
                    console.error('API error:', data.message);
                    showCustomAlert('Error: ' + data.message);
                  }
                } catch (error) {
                  console.error('Google Sign-In processing failed:', error.message, error.stack);
                  showCustomAlert(`A cosmic disturbance occurred with Google Sign-In: ${error.message}. Please ensure the server is running and try again.`);
                }
              },
              auto_select: true,
              cancel_on_tap_outside: true,
              context: 'signin',
              ux_mode: 'popup'
            });
            console.log('Rendering Google Sign-In button');
            googleBtn.style.display = 'block';
            google.accounts.id.renderButton(googleBtn, {
              type: 'standard',
              theme: 'outline',
              size: 'large',
              text: 'continue_with',
              shape: 'rectangular',
              logo_alignment: 'left',
              width: 280
            });
            console.log('Google Sign-In initialized successfully');
            google.accounts.id.prompt();
          } catch (error) {
            console.error('Google Sign-In render failed:', error.message, error.stack);
            googleBtn.innerHTML = '<span class="gsi-material-button-contents">🚀 Continue with Google (Unavailable)</span><button class="retry-google-btn">Retry Google Sign-In</button>';
            googleBtn.classList.add('disabled');
            const retryBtn = googleBtn.querySelector('.retry-google-btn');
            retryBtn.addEventListener('click', () => {
              console.log('Retrying Google Sign-In on user click');
              retryCount = 0;
              googleBtn.innerHTML = '';
              googleBtn.classList.remove('disabled');
              const script = document.createElement('script');
              script.src = 'https://accounts.google.com/gsi/client';
              script.async = true;
              script.defer = true;
              script.onload = () => {
                console.log('Google Identity Services script reloaded');
                initializeGoogleSignIn();
              };
              script.onerror = () => {
                console.error('Failed to reload Google Identity Services script');
                googleBtn.innerHTML = '<span class="gsi-material-button-contents">🚀 Continue with Google (Unavailable)</span><button class="retry-google-btn">Retry Google Sign-In</button>';
                googleBtn.classList.add('disabled');
              };
              document.head.appendChild(script);
            });
            showCustomAlert('Google Sign-In unavailable. Click "Retry Google Sign-In" or use email.');
          }
        } else if (retryCount < maxRetries) {
          console.warn(`Google Identity Services not loaded, retry (${retryCount + 1}/${maxRetries})`);
          retryCount++;
          setTimeout(initializeGoogleSignIn, retryTimeout);
        } else {
          console.error('Google Identity Services failed after max retries');
          googleBtn.innerHTML = '<span class="gsi-material-button-contents">🚀 Continue with Google (Unavailable)</span><button class="retry-google-btn">Retry Google Sign-In</button>';
          googleBtn.classList.add('disabled');
          const retryBtn = googleBtn.querySelector('.retry-google-btn');
          retryBtn.addEventListener('click', () => {
            console.log('Retrying Google Sign-In on user click');
            retryCount = 0;
            googleBtn.innerHTML = '';
            googleBtn.classList.remove('disabled');
            const script = document.createElement('script');
            script.src = 'https://accounts.google.com/gsi/client';
            script.async = true;
            script.defer = true;
            script.onload = () => {
              console.log('Google Identity Services script reloaded');
              initializeGoogleSignIn();
            };
            script.onerror = () => {
              console.error('Failed to reload Google Identity Services script');
              googleBtn.innerHTML = '<span class="gsi-material-button-contents">🚀 Continue with Google (Unavailable)</span><button class="retry-google-btn">Retry Google Sign-In</button>';
              googleBtn.classList.add('disabled');
            };
            document.head.appendChild(script);
          });
          showCustomAlert('Google Sign-In unavailable. Click "Retry Google Sign-In" or use email.');
        }
      }

      // Attempt immediate initialization, with fallback to retry
      if (typeof google !== 'undefined' && google.accounts && google.accounts.id) {
        console.log('Google Identity Services already loaded, initializing immediately');
        initializeGoogleSignIn();
      } else {
        console.log('Google Identity Services not yet loaded, scheduling initialization');
        setTimeout(() => {
          console.log('Starting Google Sign-In initialization');
          initializeGoogleSignIn();
        }, 100);
      }

      // Check network connectivity for Google script
      fetch('https://accounts.google.com/gsi/client', { method: 'HEAD' })
        .then(() => console.log('Google Identity Services script URL accessible'))
        .catch(err => console.error('Google Identity Services script URL inaccessible:', err.message));

      // Append modal to body
      document.body.appendChild(modal);
    } catch (error) {
      console.error('Failed to display email modal:', error.message, error.stack);
      document.body.classList.remove('modal-open');
      alert('Error displaying modal. Please refresh the page and try again.');
    }
  }

  function showInfoModal() {
    const modal = document.createElement('div');
    modal.className = 'info-modal';
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
    modal.innerHTML = `
      <div class="info-modal-content">
        <p>You are not lost, searching for the stars—<br>
        you are made of them.<br>
        Held by the gravity of your truth,<br>
        guided by the light within,<br>
        may you find rest in your own rhythm.<br>
        You are not a stranger here—<br>
        you are the echo of galaxies,<br>
        the keeper of your own light.</p>
        <p>If you need support, reach out to the <a href="tel:988" target="_blank">Suicide & Crisis Lifeline at 988</a>.</p>
        <button class="close-btn" aria-label="Close info modal">Close</button>
      </div>
    `;
    document.body.appendChild(modal);
    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
      modal.remove();
      document.body.classList.remove('modal-open');
    });
  }

  // Render deck function
  window.renderDeck = async function () {
    const deckArea = document.getElementById('deck-area');
    if (!deckArea) return;

    const deck = window.decks['your-atlas'];
    const state = window.app.state;

    let image = state.deckFlipped && state.currentDeckImage ? state.currentDeckImage : deck.backImage;
    let altText = state.deckFlipped && state.currentPromptText ? state.currentPromptText : 'Your Atlas deck back';

    await window.preloadImage(image).catch(() => {
      image = '/images/fallback-card.png';
      altText = 'Fallback card';
    });

    deckArea.innerHTML = `
      <div class="deck-container" role="region" aria-label="Current Deck Card">
        <div class="deck-card ${state.deckFlipped ? 'flipped' : ''} ${state.isRocking ? 'rocking' : ''} ${state.deckState === 'initial' && !state.hasInteracted ? 'initial-breathing' : ''}">
          <div class="card-back">
            <img src="${deck.backImage}" alt="Your Atlas deck back" class="deck-image" loading="eager" onerror="this.src='/images/fallback-card.png';" />
          </div>
          <div class="card-front">
            <img src="${image}" alt="${altText}" class="deck-image" loading="eager" onerror="this.src='/images/fallback-card.png';" />
          </div>
        </div>
      </div>
    `;

    // Add Subtle Attitude button
    const subtleBtn = document.createElement('button');
    subtleBtn.className = 'cosmic-btn';
    subtleBtn.textContent = 'Explore Subtle Attitude';
    subtleBtn.addEventListener('click', () => {
      window.location.href = 'https://subtleattitude.co';
    });
    deckArea.appendChild(subtleBtn);

    // Add Artist Signature button
    const artistBtn = document.createElement('button');
    artistBtn.className = 'info-btn';
    artistBtn.innerHTML = '<img src="/images/artist-signature.png" alt="Artist Memo" />';
    artistBtn.addEventListener('click', showInfoModal);
    document.body.appendChild(artistBtn);

    const deckCard = deckArea.querySelector('.deck-card');
    if (deckCard) {
      if (state.deckFlipped) {
        deckCard.classList.add('flipped');
        deckCard.classList.remove('rocking', 'initial-breathing');
        requestAnimationFrame(() => {
          deckCard.style.transition = 'transform 0.6s ease';
        });
      } else {
        deckCard.classList.remove('flipped');
        if (state.isRocking) {
          deckCard.classList.add('rocking');
          deckCard.classList.remove('initial-breathing');
        } else if (state.deckState === 'initial' && !state.hasInteracted) {
          deckCard.classList.add('initial-breathing');
        }
        deckCard.style.transition = 'transform 0.6s ease';
      }

      // Add click event listener to deck container for triggering actions
      const deckContainer = deckArea.querySelector('.deck-container');
      deckContainer.style.cursor = 'pointer'; // Indicate clickable
      deckContainer.addEventListener('click', handleDeckClick);
    }

    // Keep buttons hidden as per requirements
    const shuffleBtn = document.getElementById('shuffle-btn');
    const flipBtn = document.getElementById('flip-btn');
    const resetBtn = document.getElementById('reset-btn');
    if (shuffleBtn) shuffleBtn.classList.add('hidden');
    if (flipBtn) flipBtn.classList.add('hidden');
    if (resetBtn) resetBtn.classList.add('hidden');
  };

  // Handle deck container clicks based on state
  function handleDeckClick() {
    const state = window.app.state;
    if (state.isAnimating) return;

    // Set hasInteracted to true on first click
    if (!state.hasInteracted) {
      window.app.setState({ hasInteracted: true });
    }

    if (state.deckState === 'initial') {
      window.shuffleDeck();
    } else if (state.deckState === 'shuffled') {
      window.flipDeck();
    } else if (state.deckState === 'flipped') {
      window.resetDeck();
    }
  }

  // Shuffle function
  window.shuffleDeck = async function () {
    if (window.app.state.isAnimating) return;
    window.app.setState({ isAnimating: true });

    console.log('Deck shuffle triggered');
    console.log('Checking deckUnlocked:', deckUnlocked);

    if (!deckUnlocked) {
      console.log('Deck is locked, showing email modal');
      showEmailModal();
      window.app.setState({ isAnimating: false });
      return;
    }

    // Stop any playing audio
    flipAudio.pause();
    flipAudio.currentTime = 0;
    resetAudio.pause();
    resetAudio.currentTime = 0;

    // Play shuffle audio on loop
    shuffleAudio.play().catch((e) => console.error('Shuffle audio playback failed:', e));

    const deck = window.decks['your-atlas'];
    if (!deck.prompts.length) {
      window.app.setState({ isAnimating: false });
      return;
    }

    // Fisher-Yates shuffle
    const shuffled = [...deck.prompts];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const selectedCard = shuffled[0];

    await window.preloadImage(selectedCard.image).catch(() => {
      selectedCard.image = '/images/fallback-card.png';
    });

    window.app.setState({
      shuffledPrompts: shuffled,
      currentDeckImage: selectedCard.image,
      currentPromptText: selectedCard.text,
      deckFlipped: false,
      deckState: 'shuffled',
      isRocking: true
    });

    await window.renderDeck();
    window.app.setState({ isAnimating: false });
  };

  // Flip function
  window.flipDeck = async function () {
    if (window.app.state.isAnimating) return;
    window.app.setState({ isAnimating: true });

    console.log('Deck flip triggered');

    // Stop shuffle audio
    shuffleAudio.pause();
    shuffleAudio.currentTime = 0;

    // Play flip audio once
    flipAudio.play().catch((e) => console.error('Flip audio playback failed:', e));

    window.app.setState({
      deckFlipped: true,
      deckState: 'flipped',
      isRocking: false
    });

    await window.renderDeck();
    window.app.setState({ isAnimating: false });
  };

  // Reset function
  window.resetDeck = async function () {
    if (window.app.state.isAnimating) return;
    window.app.setState({ isAnimating: true });
    console.log('Deck reset triggered');

    // Stop any playing audio
    shuffleAudio.pause();
    shuffleAudio.currentTime = 0;
    flipAudio.pause();
    flipAudio.currentTime = 0;

    // Play reset audio once
    resetAudio.play().catch((e) => console.error('Reset audio playback failed:', e));

    window.app.setState({
      isRocking: false,
      deckFlipped: false,
      currentDeckImage: null,
      currentPromptText: null,
      shuffledPrompts: [],
      deckState: 'initial'
    });

    await window.renderDeck();
    window.app.setState({ isAnimating: false });
  };

  // Initialize
  async function initializeDecks() {
    const deckArea = document.getElementById('deck-area');
    if (!deckArea) return;

    // Check server-side deck unlock status
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail && !deckUnlocked) {
      try {
        const response = await fetch(`/api/check-deck-status?email=${encodeURIComponent(userEmail)}`);
        const result = await response.json();
        if (result.success && result.deckUnlocked) {
          deckUnlocked = true;
          localStorage.setItem('deckUnlocked', 'true');
        }
      } catch (error) {
        console.error('Error checking deck status:', error);
      }
    }
    console.log('After initialization, deckUnlocked:', deckUnlocked);

    // Initial render with back image at rest
    await window.renderDeck();
  }

  // Run on DOM ready
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initializeDecks();
  } else {
    document.addEventListener('DOMContentLoaded', initializeDecks, { once: true });
  }
})();