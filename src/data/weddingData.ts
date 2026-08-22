// ============================================================================
// WEDDING DATA — single source of truth
// Everything on the site is driven from this file. Update names, dates,
// venue, photos, music and the map link here — no need to touch components.
// ============================================================================

export const coupleImages = {
  // Couple photo you provided. Used as the hero background.
  hero: "/assets/images/couple-hero.jpg",
  heroWebp: "/assets/images/couple-hero.webp",
};

export const config = {
  bride: {
    en: "Ramya Krishna",
    te: "రమ్య కృష్ణ",
    full_en: "Chi.La.Sou. Ramya Krishna",
    full_te: "చి॥లా॥సౌ॥ రమ్య కృష్ణ",
  },
  groom: {
    en: "Prabhu Kumar",
    te: "ప్రభు కుమార్",
    full_en: "Chi. Prabhu Kumar",
    full_te: "చి॥ ప్రభు కుమార్",
  },
  monogram: "R · P",

  weddingDateISO: "2026-08-30T10:55:00+05:30", // Sunday 30 Aug 2026, 10:55 AM IST
  weddingDateDisplay_en: "Sunday, 30 August 2026",
  weddingDateDisplay_te: "ఆదివారం, 30 ఆగస్టు 2026",
  muhurthamTime_en: "10:55 AM",
  muhurthamTime_te: "ఉదయం గం. 10-55 ని.లకు",
  lunchTime_en: "12:00 PM",
  lunchTime_te: "మధ్యాహ్నం గం. 12-00 లకు",

  nakshatram_en: "Uttarabhadra Nakshatram",
  nakshatram_te: "ఉత్తరాభాద్ర నక్షత్రం",
  lagnam_en: "Thula Lagnam",
  lagnam_te: "తులా లగ్నం",

  venue: {
    name_en: "S.V. Convention Hall",
    name_te: "S.V. కన్వెన్షన్ హాల్",
    address_en:
      "Vanamvarikrishnapuram (V), Mudigonda (Mdl), Khammam (Dist.), Telangana",
    address_te: "వనంవారి కృష్ణాపురం గ్రామం, ముదిగొండ మండలం, ఖమ్మం జిల్లా",
    mapUrl: "https://maps.app.goo.gl/XmUt69fwN8B4NnWP9?g_st=ac",
  },

  groomFamily: {
    father_en: "Sri. Gurugula Venkatrao",
    mother_en: "Smt. Sarojini",
    father_te: "శ్రీ గురుగుల వెంకట్రావు",
    mother_te: "శ్రీమతి సరోజిని",
    relation_en: "Youngest son of",
    relation_te: "దంపతుల కనిష్ఠ పుత్రుడు",
    address_en: "Ramachandrinipeta (Sangampalli), Mangapeta (Mdl), Mulugu (Dist.)",
    address_te: "రామచంద్రినిపేట (సంగంపల్లి), మంగపేట మండలం, ములుగు జిల్లా",
  },

  brideFamily: {
    father_en: "Chityala Srinivasa Rao",
    mother_en: "Venkatalakshmi",
    father_te: "చిట్యాల శ్రీనివాస రావు",
    mother_te: "వెంకటలక్ష్మి",
    relation_en: "Only daughter of",
    address_en: "Pammi (Village), Mudigonda (Mdl), Khammam (Dist.)",
    address_te: "పమ్మి గ్రామం, ముదిగొండ మండలం, ఖమ్మం జిల్లా",
  },

  elders: {
    grandparents_en: "Penti Venkateswarlu & Venkataramana",
    grandparents_te: "పెంటి వెంకటేశ్వర్లు, వెంకటరమణ",
    grandparentsNote_en: "In loving memory",
    grandparentsNote_te: "(లేటు)",
    unclesAunt_en: "Penti Hariprasad & Sirisha",
    unclesAunt_te: "పెంటి హరిప్రసాద్ - శిరీష",
  },

  contact: [
    { name: "Chityala Srinivasa Rao - Venkatalakshmi", phones: ["9666251542", "9866562640"] },
  ],

  // Placeholders — replace when assets are available. Keep paths stable.
  assets: {
    brideSolo: null as string | null, // e.g. "/assets/images/bride.jpg"
    groomSolo: null as string | null, // e.g. "/assets/images/groom.jpg"
    venuePhoto: "/assets/images/venue.jpg",
    gallery: [] as string[], // additional photos, add paths here later
    music: "/audio/3-Sirivennala.mp3",
  },

  receptionVenue: {
    name_en: "GVR Gardens",
    name_te: "GVR Gardens",
    address_en: "Edulla Bayyaram Cross Road",
    address_te: "Edulla Bayyaram Cross Road",
    mapUrl: "https://maps.app.goo.gl/JoGZkChDBdX2pMuK7?g_st=aw",
  },

  events: [
    {
      id: "ceremony",
      title_en: "Wedding Ceremony",
      title_te: "వివాహ వేడుక",
      time_en: "10:55 AM",
      time_te: "ఉదయం 10-55 ని.లకు",
      date_en: "Sunday, 30 August 2026",
      date_te: "ఆదివారం, 30 ఆగస్టు 2026",
      desc_en: "Muhurtham at S.V. Convention Hall",
      desc_te: "S.V. కన్వెన్షన్ హాల్‌లో సుముహూర్తం",
    },
    {
      id: "lunch",
      title_en: "Wedding Lunch",
      title_te: "వివాహ విందు",
      time_en: "12:00 PM",
      time_te: "మధ్యాహ్నం 12-00 లకు",
      date_en: "Sunday, 30 August 2026",
      date_te: "ఆదివారం, 30 ఆగస్టు 2026",
      desc_en: "At the Convention Hall",
      desc_te: "కన్వెన్షన్ హాల్ నందు",
    },
    {
      id: "reception",
      title_en: "Reception",
      title_te: "రిసెప్షన్",
      time_en: null,
      time_te: null,
      date_en: "Monday, 01 September 2026",
      date_te: "సోమవారం, 01 సెప్టెంబర్ 2026",
      desc_en: "GVR Gardens, Edulla Bayyaram Cross Road",
      desc_te: "GVR Gardens, Edulla Bayyaram Cross Road",
      mapUrl: "https://maps.app.goo.gl/JoGZkChDBdX2pMuK7?g_st=aw",
    },
  ],
};

// ============================================================================
// COPY — English & Telugu content blocks for every section.
// Telugu wording for factual lines is taken directly from the invitation.
// Descriptive/connective copy (story line, RSVP framing, etc.) is original
// writing in the same spirit, since the invitation itself doesn't supply it.
// ============================================================================

interface CopyShape {
  opening: { line1: string; line2: string; line3: string; sub: string };
  nav: {
    home: string;
    couple: string;
    details: string;
    venue: string;
    family: string;
    rsvp: string;
    wishes: string;
  };
  hero: {
    eyebrow: string;
    and: string;
    dateLine: string;
    timeLine: string;
    invite: string;
    scroll: string;
  };
  countdown: {
    eyebrow: string;
    title: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    arrived: string;
  };
  blessing: { sanskrit: string; title: string; body: string };
  couple: {
    eyebrow: string;
    title: string;
    brideLabel: string;
    groomLabel: string;
    bridePlaceholder: string;
    groomPlaceholder: string;
    groomLineage: string;
  };
  story: { eyebrow: string; title: string; body: string; body2: string };
  details: { eyebrow: string; title: string; nakshatramLagnam: string };
  timeline: { eyebrow: string; title: string };
  muhurtham: { eyebrow: string; title: string; body: string };
  venue: {
    eyebrow: string;
    title: string;
    subtitle: string;
    photoPlaceholder: string;
    directions: string;
  };
  lunch: { eyebrow: string; title: string; body: string };
  reception: { eyebrow: string; title: string; body: string; directions: string };
  family: {
    eyebrow: string;
    title: string;
    subtitle: string;
    brideSide: string;
    groomSide: string;
    elders: string;
    grandparents: string;
    unclesAunt: string;
    hostedBy: string;
  };
  telugu: { eyebrow: string; title: string };
  rsvp: {
    eyebrow: string;
    title: string;
    subtitle: string;
    body: string;
    button: string;
    note: string;
    thankyou: string;
  };
  wishes: {
    eyebrow: string;
    title: string;
    body: string;
    namePlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    note: string;
    sent: string;
  };
  gallery: { eyebrow: string; title: string };
  footer: { tagline: string; dateStamp: string };
  music: { on: string; off: string; play: string; pause: string };
  lang: { en: string; te: string };
}

export const copy: Record<"en" | "te", CopyShape> = {
  en: {
    opening: {
      line1: "Sreerasthu!",
      line2: "Shubhamasthu!",
      line3: "Avignamasthu!",
      sub: "An auspicious beginning",
    },
    nav: {
      home: "Home",
      couple: "Couple",
      details: "Details",
      venue: "Venue",
      family: "Family",
      rsvp: "RSVP",
      wishes: "Wishes",
    },
    hero: {
      eyebrow: "A South Indian Wedding",
      and: "&",
      dateLine: "30 AUGUST 2026",
      timeLine: "10:55 AM · MUHURTHAM",
      invite:
        "Together with our beloved families, we invite you to celebrate the beginning of our forever.",
      scroll: "Scroll to begin",
    },
    countdown: {
      eyebrow: "Counting down to",
      title: "Our Wedding Day",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      arrived: "The day has arrived — with joy, we welcome you.",
    },
    blessing: {
      sanskrit: "॥ శుభమస్తు ॥",
      title: "With The Blessings Of",
      body: "Our elders, our families, and the almighty — with their grace, two families come together as one.",
    },
    couple: {
      eyebrow: "The Couple",
      title: "Bride & Groom",
      brideLabel: "Bride",
      groomLabel: "Groom",
      bridePlaceholder: "Bride's photograph",
      groomPlaceholder: "Groom's photograph",
      groomLineage: "Youngest son of",
    },
    story: {
      eyebrow: "Our Invitation",
      title: "Two Families. One Beautiful Beginning.",
      body: "With hearts full of gratitude and joy, our families warmly invite you to be part of this sacred beginning — to witness the union of Ramya Krishna and Prabhu Kumar, and to bless them as they start their new life together.",
      body2:
        "Your presence would mean the world to us on this auspicious day.",
    },
    details: {
      eyebrow: "Save The Date",
      title: "The Wedding",
      nakshatramLagnam: "Nakshatram & Lagnam",
    },
    timeline: {
      eyebrow: "The Day's Events",
      title: "Wedding Timeline",
    },
    muhurtham: {
      eyebrow: "The Auspicious Hour",
      title: "The Muhurtham",
      body: "The wedding rites will be solemnised as per Vedic tradition, blessed by learned scholars, under the sacred Uttarabhadra Nakshatram and Thula Lagnam.",
    },
    venue: {
      eyebrow: "Join Us At",
      title: "The Venue",
      subtitle: "Where our two families become one.",
      photoPlaceholder: "Venue photograph",
      directions: "GET DIRECTIONS",
    },
    lunch: {
      eyebrow: "After The Ceremony",
      title: "Wedding Lunch",
      body: "Please join us for a traditional lunch at the Convention Hall as we celebrate together.",
    },
    reception: {
      eyebrow: "The Celebration",
      title: "Reception",
      body: "Please join us for the reception as we celebrate the newlyweds.",
      directions: "GET DIRECTIONS",
    },
    family: {
      eyebrow: "With Love",
      title: "Family Invitation",
      subtitle: "With the blessings of our families",
      brideSide: "The Bride's Family",
      groomSide: "The Groom's Family",
      elders: "With Blessings From Our Elders",
      grandparents: "Grandparents",
      unclesAunt: "Uncle & Aunt",
      hostedBy: "Invited by",
    },
    telugu: {
      eyebrow: "వివాహ శుభలేఖ",
      title: "The Telugu Invitation",
    },
    rsvp: {
      eyebrow: "Kindly Respond",
      title: "Will You Bless Us With Your Presence?",
      subtitle: "We would be honoured to celebrate this beautiful day with you.",
      body: "WE WOULD LOVE TO HAVE YOU WITH US",
      button: "CONFIRM YOUR PRESENCE",
      note: "RSVP collection isn't connected yet — this button is ready for you to wire up to a form service or database.",
      thankyou: "Thank you! We can't wait to celebrate with you.",
    },
    wishes: {
      eyebrow: "For The Couple",
      title: "Blessings & Wishes",
      body: "Your blessings and good wishes mean the world to us.",
      namePlaceholder: "Your name",
      messagePlaceholder: "Leave a blessing for the couple",
      submit: "Send Blessing",
      note: "This form is front-end only for now — messages aren't stored yet. Connect a backend to start collecting them.",
      sent: "With gratitude — your blessing has been received.",
    },
    gallery: {
      eyebrow: "In Frame",
      title: "Moments",
    },
    footer: {
      tagline: "With love and blessings from our families",
      dateStamp: "30 · 08 · 2026",
    },
    music: { on: "Music On", off: "Music Off", play: "Play music", pause: "Pause music" },
    lang: { en: "EN", te: "తెలుగు" },
  },

  te: {
    opening: {
      line1: "శ్రీరస్తు!",
      line2: "శుభమస్తు!",
      line3: "అవిఘ్నమస్తు!",
      sub: "శుభారంభం",
    },
    nav: {
      home: "హోమ్",
      couple: "వధూవరులు",
      details: "వివరాలు",
      venue: "వేదిక",
      family: "కుటుంబం",
      rsvp: "హాజరు",
      wishes: "శుభాకాంక్షలు",
    },
    hero: {
      eyebrow: "ఒక దక్షిణ భారత వివాహం",
      and: "&",
      dateLine: "30 ఆగస్టు 2026",
      timeLine: "ఉదయం 10-55 · ముహూర్తం",
      invite:
        "మా ప్రియమైన కుటుంబాలతో కలిసి, మా జీవితపు నూతన అధ్యాయాన్ని జరుపుకోవడానికి మిమ్మల్ని ఆహ్వానిస్తున్నాము.",
      scroll: "క్రిందికి స్క్రోల్ చేయండి",
    },
    countdown: {
      eyebrow: "కౌంట్‌డౌన్",
      title: "మా వివాహ దినం",
      days: "రోజులు",
      hours: "గంటలు",
      minutes: "నిమిషాలు",
      seconds: "క్షణాలు",
      arrived: "శుభదినం వచ్చేసింది — ఆనందంగా మిమ్మల్ని స్వాగతిస్తున్నాము.",
    },
    blessing: {
      sanskrit: "॥ శుభమస్తు ॥",
      title: "పెద్దల ఆశీర్వాదాలతో",
      body: "మా పెద్దల, కుటుంబాల మరియు దైవానుగ్రహంతో — రెండు కుటుంబాలు ఒక్కటవుతున్నాయి.",
    },
    couple: {
      eyebrow: "వధూవరులు",
      title: "వధువు & వరుడు",
      brideLabel: "వధువు",
      groomLabel: "వరుడు",
      bridePlaceholder: "వధువు ఫోటో",
      groomPlaceholder: "వరుడు ఫోటో",
      groomLineage: "దంపతుల కనిష్ఠ పుత్రుడు",
    },
    story: {
      eyebrow: "మా ఆహ్వానం",
      title: "రెండు కుటుంబాలు. ఒక అందమైన శుభారంభం.",
      body: "కృతజ్ఞతతో, ఆనందంతో నిండిన హృదయాలతో — రమ్య కృష్ణ, ప్రభు కుమార్‌ల వివాహ మహోత్సవానికి సాక్షులై, వధూవరులను ఆశీర్వదించమని మా కుటుంబాలు మిమ్మల్ని ఆప్యాయంగా ఆహ్వానిస్తున్నాయి.",
      body2: "ఈ శుభ సందర్భంగా మీ సముఖం మాకు అమూల్యం.",
    },
    details: {
      eyebrow: "తేదీని గుర్తుంచుకోండి",
      title: "వివాహం",
      nakshatramLagnam: "నక్షత్రం & లగ్నం",
    },
    timeline: {
      eyebrow: "కార్యక్రమాలు",
      title: "వివాహ కార్యక్రమ వివరాలు",
    },
    muhurtham: {
      eyebrow: "శుభ ముహూర్తం",
      title: "సుముహూర్తం",
      body: "వేద పండితులచే నిశ్చయించబడిన ఉత్తరాభాద్ర నక్షత్రం, తులా లగ్నంలో వేదమంత్రాల సాక్షిగా వివాహ కార్యక్రమం జరుగును.",
    },
    venue: {
      eyebrow: "రండి, కలుద్దాం",
      title: "కళ్యాణ వేదిక",
      subtitle: "మా రెండు కుటుంబాలు ఒక్కటయ్యే స్థలం.",
      photoPlaceholder: "వేదిక ఫోటో",
      directions: "దారి చూపండి",
    },
    lunch: {
      eyebrow: "వేడుక అనంతరం",
      title: "విందు",
      body: "కన్వెన్షన్ హాల్ నందు జరుగు సాంప్రదాయ విందుకు దయచేసి విచ్చేయండి.",
    },
    reception: {
      eyebrow: "వేడుక",
      title: "రిసెప్షన్",
      body: "నవ వధూవరుల రిసెప్షన్ వేడుకకు దయచేసి విచ్చేయండి.",
      directions: "దారి చూపండి",
    },
    family: {
      eyebrow: "ప్రేమతో",
      title: "కుటుంబ ఆహ్వానం",
      subtitle: "మా కుటుంబాల ఆశీర్వాదాలతో",
      brideSide: "వధువు కుటుంబం",
      groomSide: "వరుడు కుటుంబం",
      elders: "పెద్దల ఆశీర్వాదాలతో",
      grandparents: "తాతయ్య-అమ్మమ్మ",
      unclesAunt: "మేనమామ-అత్తయ్య",
      hostedBy: "ఆహ్వానించువారు",
    },
    telugu: {
      eyebrow: "Wedding Invitation",
      title: "తెలుగు ఆహ్వానం",
    },
    rsvp: {
      eyebrow: "దయచేసి తెలియజేయండి",
      title: "మీరు మా వేడుకకు విచ్చేస్తారా?",
      subtitle: "ఈ అందమైన రోజును మీతో కలిసి జరుపుకోవడం మా అదృష్టంగా భావిస్తాము.",
      body: "మీ రాక కోసం ఎదురుచూస్తున్నాము",
      button: "హాజరు నిర్ధారించండి",
      note: "RSVP సమాచార సేకరణ ఇంకా అనుసంధానించబడలేదు — ఈ బటన్‌ను మీ ఫారమ్ సర్వీస్ లేదా డేటాబేస్‌కు కనెక్ట్ చేయవచ్చు.",
      thankyou: "ధన్యవాదాలు! మిమ్మల్ని కలవడానికి ఎదురుచూస్తున్నాము.",
    },
    wishes: {
      eyebrow: "వధూవరుల కోసం",
      title: "శుభాకాంక్షలు",
      body: "మీ ఆశీర్వాదాలు, శుభాకాంక్షలు మాకు అమూల్యం.",
      namePlaceholder: "మీ పేరు",
      messagePlaceholder: "వధూవరులకు మీ శుభాకాంక్షలు వ్రాయండి",
      submit: "పంపండి",
      note: "ఈ ఫారమ్ ప్రస్తుతం ఫ్రంట్-ఎండ్ మాత్రమే — సందేశాలు ఇంకా భద్రపరచబడవు.",
      sent: "కృతజ్ఞతలతో — మీ శుభాకాంక్ష అందింది.",
    },
    gallery: {
      eyebrow: "చిత్రాలు",
      title: "మధుర క్షణాలు",
    },
    footer: {
      tagline: "మా కుటుంబాల ప్రేమ, ఆశీర్వాదాలతో",
      dateStamp: "30 · 08 · 2026",
    },
    music: { on: "సంగీతం ఆన్", off: "సంగీతం ఆఫ్", play: "సంగీతం ప్లే", pause: "పాజ్" },
    lang: { en: "EN", te: "తెలుగు" },
  },
};

export type Lang = "en" | "te";
