// ===== DATA =====
const VERBS = [
  { dictionary: "하다", stem: "하", type: "하다", meaning: "to do" },
  { dictionary: "가다", stem: "가", type: "ㅏ/ㅗ", meaning: "to go" },
  { dictionary: "오다", stem: "오", type: "ㅏ/ㅗ", meaning: "to come" },
  { dictionary: "먹다", stem: "먹", type: "consonant", meaning: "to eat" },
  { dictionary: "마시다", stem: "마시", type: "ㅣ", meaning: "to drink" },
  { dictionary: "보다", stem: "보", type: "ㅏ/ㅗ", meaning: "to see" },
  { dictionary: "듣다", stem: "듣", type: "ㄷ-irreg", meaning: "to listen" },
  { dictionary: "걷다", stem: "걷", type: "ㄷ-irreg", meaning: "to walk" },
  { dictionary: "살다", stem: "살", type: "ㄹ", meaning: "to live" },
  { dictionary: "만들다", stem: "만들", type: "ㄹ", meaning: "to make" },
  { dictionary: "알다", stem: "알", type: "ㄹ", meaning: "to know" },
  { dictionary: "쓰다", stem: "쓰", type: "ㅡ", meaning: "to write/use" },
  { dictionary: "크다", stem: "크", type: "ㅡ", meaning: "to be big" },
  { dictionary: "예쁘다", stem: "예쁘", type: "ㅡ", meaning: "to be pretty" },
  { dictionary: "바쁘다", stem: "바쁘", type: "ㅡ", meaning: "to be busy" },
  { dictionary: "춥다", stem: "춥", type: "ㅂ-irreg", meaning: "to be cold" },
  { dictionary: "덥다", stem: "덥", type: "ㅂ-irreg", meaning: "to be hot" },
  { dictionary: "돕다", stem: "돕", type: "ㅂ-irreg", meaning: "to help" },
  { dictionary: "굽다", stem: "굽", type: "ㅂ-irreg", meaning: "to roast" },
  { dictionary: "낫다", stem: "낫", type: "ㅅ-irreg", meaning: "to be better" },
  { dictionary: "짓다", stem: "짓", type: "ㅅ-irreg", meaning: "to build" },
  {
    dictionary: "모르다",
    stem: "모르",
    type: "ㅡ-irreg",
    meaning: "to not know",
  },
  { dictionary: "부르다", stem: "부르", type: "ㅡ-irreg", meaning: "to call" },
  {
    dictionary: "다르다",
    stem: "다르",
    type: "ㅡ-irreg",
    meaning: "to be different",
  },
  {
    dictionary: "빨갛다",
    stem: "빨갛",
    type: "ㅎ-irreg",
    meaning: "to be red",
  },
  {
    dictionary: "파랗다",
    stem: "파랗",
    type: "ㅎ-irreg",
    meaning: "to be blue",
  },
  {
    dictionary: "노랗다",
    stem: "노랗",
    type: "ㅎ-irreg",
    meaning: "to be yellow",
  },
  {
    dictionary: "하얗다",
    stem: "하얗",
    type: "ㅎ-irreg",
    meaning: "to be white",
  },
  { dictionary: "그렇다", stem: "그렇", type: "ㅎ-irreg", meaning: "to be so" },
  { dictionary: "이다", stem: "이", type: "이다", meaning: "to be (copula)" },
  { dictionary: "아니다", stem: "아니", type: "아니다", meaning: "to not be" },
  {
    dictionary: "있다",
    stem: "있",
    type: "consonant",
    meaning: "to exist/have",
  },
  {
    dictionary: "없다",
    stem: "없",
    type: "consonant",
    meaning: "to not exist",
  },
  { dictionary: "주다", stem: "주", type: "ㅜ", meaning: "to give" },
  { dictionary: "배우다", stem: "배우", type: "ㅜ", meaning: "to learn" },
  { dictionary: "사다", stem: "사", type: "ㅏ/ㅗ", meaning: "to buy" },
  { dictionary: "자다", stem: "자", type: "ㅏ/ㅗ", meaning: "to sleep" },
  { dictionary: "앉다", stem: "앉", type: "consonant", meaning: "to sit" },
  { dictionary: "읽다", stem: "읽", type: "consonant", meaning: "to read" },
  { dictionary: "찾다", stem: "찾", type: "consonant", meaning: "to find" },
  { dictionary: "받다", stem: "받", type: "consonant", meaning: "to receive" },
  { dictionary: "열다", stem: "열", type: "vowel", meaning: "to open" },
  { dictionary: "되다", stem: "되", type: "ㅚ", meaning: "to become" },
];

const CONJUGATION_FORMS = [
  // Speech Levels - Declarative
  {
    id: "present-formal-polite",
    name: "합쇼체 현재 (Formal Polite Present)",
    category: "Speech Levels",
    subcategory: "Declarative",
  },
  {
    id: "past-formal-polite",
    name: "합쇼체 과거 (Formal Polite Past)",
    category: "Speech Levels",
    subcategory: "Declarative",
  },
  {
    id: "future-formal-polite",
    name: "합쇼체 미래 (Formal Polite Future)",
    category: "Speech Levels",
    subcategory: "Declarative",
  },
  {
    id: "present-polite",
    name: "해요체 현재 (Polite Present)",
    category: "Speech Levels",
    subcategory: "Declarative",
  },
  {
    id: "past-polite",
    name: "해요체 과거 (Polite Past)",
    category: "Speech Levels",
    subcategory: "Declarative",
  },
  {
    id: "future-polite",
    name: "해요체 미래 (Polite Future)",
    category: "Speech Levels",
    subcategory: "Declarative",
  },
  {
    id: "present-casual",
    name: "해체 현재 (Casual Present)",
    category: "Speech Levels",
    subcategory: "Declarative",
  },
  {
    id: "past-casual",
    name: "해체 과거 (Casual Past)",
    category: "Speech Levels",
    subcategory: "Declarative",
  },
  {
    id: "present-plain",
    name: "해라체 현재 (Plain Present)",
    category: "Speech Levels",
    subcategory: "Declarative",
  },
  {
    id: "past-plain",
    name: "해라체 과거 (Plain Past)",
    category: "Speech Levels",
    subcategory: "Declarative",
  },

  // Speech Levels - Interrogative
  {
    id: "question-formal-polite",
    name: "합쇼체 의문 (Formal Question)",
    category: "Speech Levels",
    subcategory: "Interrogative",
  },
  {
    id: "question-polite",
    name: "해요체 의문 (Polite Question)",
    category: "Speech Levels",
    subcategory: "Interrogative",
  },

  // Speech Levels - Imperative
  {
    id: "imperative-formal-polite",
    name: "합쇼체 명령 (Formal Command)",
    category: "Speech Levels",
    subcategory: "Imperative",
  },
  {
    id: "imperative-polite",
    name: "해요체 명령 (Polite Command)",
    category: "Speech Levels",
    subcategory: "Imperative",
  },
  {
    id: "imperative-casual",
    name: "해체 명령 (Casual Command)",
    category: "Speech Levels",
    subcategory: "Imperative",
  },
  {
    id: "imperative-plain",
    name: "해라체 명령 (Plain Command)",
    category: "Speech Levels",
    subcategory: "Imperative",
  },

  // Speech Levels - Propositive
  {
    id: "propositive-formal-polite",
    name: '합쇼체 청유 (Formal "Let\'s")',
    category: "Speech Levels",
    subcategory: "Propositive",
  },
  {
    id: "propositive-polite",
    name: '해요체 청유 (Polite "Let\'s")',
    category: "Speech Levels",
    subcategory: "Propositive",
  },
  {
    id: "propositive-plain",
    name: '해라체 청유 (Plain "Let\'s")',
    category: "Speech Levels",
    subcategory: "Propositive",
  },

  // Honorific
  {
    id: "honorific-present-polite",
    name: "존댓말 현재 (Honorific Present)",
    category: "Honorific",
    subcategory: "-시-",
  },
  {
    id: "honorific-past-polite",
    name: "존댓말 과거 (Honorific Past)",
    category: "Honorific",
    subcategory: "-시-",
  },
  {
    id: "honorific-formal",
    name: "존댓말 합쇼체 (Honorific Formal)",
    category: "Honorific",
    subcategory: "-시-",
  },

  // Negation
  {
    id: "negation-short-polite",
    name: "안 부정 해요체 (Short Negation Polite)",
    category: "Negation",
    subcategory: "안",
  },
  {
    id: "negation-long-polite",
    name: "-지 않다 해요체 (Long Negation Polite)",
    category: "Negation",
    subcategory: "-지 않다",
  },
  {
    id: "negation-못-polite",
    name: "못 부정 해요체 (Cannot - Polite)",
    category: "Negation",
    subcategory: "못",
  },

  // Progressive
  {
    id: "progressive-present-polite",
    name: "-고 있다 현재 (Progressive Present)",
    category: "Aspect",
    subcategory: "Progressive",
  },
  {
    id: "progressive-past-polite",
    name: "-고 있었다 (Progressive Past)",
    category: "Aspect",
    subcategory: "Progressive",
  },

  // Connective
  {
    id: "connective-고",
    name: "-고 (And then)",
    category: "Connective",
    subcategory: "Sequential",
  },
  {
    id: "connective-서",
    name: "-아/어서 (Because/And)",
    category: "Connective",
    subcategory: "Causal",
  },
  {
    id: "connective-니까",
    name: "-으니까 (Because/Since)",
    category: "Connective",
    subcategory: "Causal",
  },
  {
    id: "connective-는데",
    name: "-는데 (But/Background)",
    category: "Connective",
    subcategory: "Contrast",
  },
  {
    id: "connective-지만",
    name: "-지만 (But)",
    category: "Connective",
    subcategory: "Contrast",
  },
  {
    id: "connective-면",
    name: "-으면 (If/When)",
    category: "Connective",
    subcategory: "Conditional",
  },
  {
    id: "connective-도",
    name: "-아/어도 (Even if)",
    category: "Connective",
    subcategory: "Concessive",
  },
  {
    id: "connective-면서",
    name: "-으면서 (While doing)",
    category: "Connective",
    subcategory: "Simultaneous",
  },
  {
    id: "connective-자마자",
    name: "-자마자 (Right after)",
    category: "Connective",
    subcategory: "Sequential",
  },
  {
    id: "connective-기-전에",
    name: "-기 전에 (Before doing)",
    category: "Connective",
    subcategory: "Temporal",
  },

  // Modifiers
  {
    id: "modifier-present-action",
    name: "-는 (Present Action Modifier)",
    category: "Modifiers",
    subcategory: "Adnominal",
  },
  {
    id: "modifier-past",
    name: "-은/ㄴ (Past/State Modifier)",
    category: "Modifiers",
    subcategory: "Adnominal",
  },
  {
    id: "modifier-future",
    name: "-을/ㄹ (Future Modifier)",
    category: "Modifiers",
    subcategory: "Adnominal",
  },

  // Nominalization
  {
    id: "nominalization-기",
    name: "-기 (Gerund -기)",
    category: "Nominalization",
    subcategory: "-기",
  },
  {
    id: "nominalization-는-것",
    name: "-는 것 (The thing that)",
    category: "Nominalization",
    subcategory: "-는 것",
  },

  // Auxiliary
  {
    id: "want-고-싶다-polite",
    name: "-고 싶어요 (Want to - Polite)",
    category: "Auxiliary",
    subcategory: "Desire",
  },
  {
    id: "try-아보다-polite",
    name: "-아/어 봐요 (Try - Polite)",
    category: "Auxiliary",
    subcategory: "Attempt",
  },
  {
    id: "give-아주다-polite",
    name: "-아/어 줘요 (Do for - Polite)",
    category: "Auxiliary",
    subcategory: "Benefactive",
  },
  {
    id: "finish-아버리다-polite",
    name: "-아/어 버려요 (Complete - Polite)",
    category: "Auxiliary",
    subcategory: "Completion",
  },

  // Modal
  {
    id: "can-ㄹ-수-있다-polite",
    name: "-ㄹ 수 있어요 (Can - Polite)",
    category: "Modal",
    subcategory: "Ability",
  },
  {
    id: "cannot-ㄹ-수-없다-polite",
    name: "-ㄹ 수 없어요 (Cannot - Polite)",
    category: "Modal",
    subcategory: "Ability",
  },
  {
    id: "must-아야-하다-polite",
    name: "-아/어야 해요 (Must - Polite)",
    category: "Modal",
    subcategory: "Obligation",
  },
  {
    id: "must-아야-되다",
    name: "-아/어야 돼요 (Have to - Polite)",
    category: "Modal",
    subcategory: "Obligation",
  },

  // Intention
  {
    id: "intend-려고-하다-polite",
    name: "-려고 해요 (Intend - Polite)",
    category: "Intention",
    subcategory: "Purpose",
  },
  {
    id: "future-intent-겠",
    name: "-겠어요 (Will/Intend)",
    category: "Intention",
    subcategory: "Volition",
  },
  {
    id: "shall-ㄹ까요",
    name: "-ㄹ까요 (Shall we?)",
    category: "Intention",
    subcategory: "Suggestion",
  },
  {
    id: "will-ㄹ게요",
    name: "-ㄹ게요 (I will - Promise)",
    category: "Intention",
    subcategory: "Promise",
  },

  // Conjecture
  {
    id: "seem-것-같다-polite",
    name: "-는 것 같아요 (Seems - Polite)",
    category: "Conjecture",
    subcategory: "Appearance",
  },
  {
    id: "probably-ㄹ-거예요",
    name: "-ㄹ 거예요 (Probably will)",
    category: "Conjecture",
    subcategory: "Probability",
  },

  // Sentence Endings
  {
    id: "ending-네요",
    name: "-네요 (Realization)",
    category: "Sentence Endings",
    subcategory: "Exclamatory",
  },
  {
    id: "ending-군요",
    name: "-군요 (Exclamation)",
    category: "Sentence Endings",
    subcategory: "Exclamatory",
  },
  {
    id: "ending-잖아요",
    name: "-잖아요 (As you know)",
    category: "Sentence Endings",
    subcategory: "Confirmation",
  },
  {
    id: "ending-지요",
    name: "-지요 (Right?)",
    category: "Sentence Endings",
    subcategory: "Confirmation",
  },

  // Passive/Causative
  {
    id: "passive-아지다",
    name: "-아/어지다 (Become)",
    category: "Voice",
    subcategory: "Passive",
  },
  {
    id: "passive-게-되다",
    name: "-게 되다 (Come to)",
    category: "Voice",
    subcategory: "Passive",
  },
  {
    id: "causative-게-하다",
    name: "-게 하다 (Make/Let do)",
    category: "Voice",
    subcategory: "Causative",
  },

  // Adverbial
  {
    id: "adverbial-게",
    name: "-게 (Adverb form)",
    category: "Adverbial",
    subcategory: "Manner",
  },
];

// Correct conjugations lookup
const CORRECT_CONJUGATIONS = {
  // 하다
  "하다|present-formal-polite": "합니다",
  "하다|past-formal-polite": "했습니다",
  "하다|future-formal-polite": "할 겁니다",
  "하다|present-polite": "해요",
  "하다|past-polite": "했어요",
  "하다|future-polite": "할 거예요",
  "하다|present-casual": "해",
  "하다|past-casual": "했어",
  "하다|present-plain": "한다",
  "하다|past-plain": "했다",
  "하다|question-formal-polite": "합니까",
  "하다|question-polite": "해요?",
  "하다|imperative-formal-polite": "하십시오",
  "하다|imperative-polite": "하세요",
  "하다|imperative-casual": "해",
  "하다|imperative-plain": "해라",
  "하다|propositive-formal-polite": "합시다",
  "하다|propositive-polite": "해요",
  "하다|propositive-plain": "하자",
  "하다|honorific-present-polite": "하세요",
  "하다|honorific-past-polite": "하셨어요",
  "하다|honorific-formal": "하십니다",
  "하다|negation-short-polite": "안 해요",
  "하다|negation-long-polite": "하지 않아요",
  "하다|negation-못-polite": "못 해요",
  "하다|progressive-present-polite": "하고 있어요",
  "하다|progressive-past-polite": "하고 있었어요",
  "하다|connective-고": "하고",
  "하다|connective-서": "해서",
  "하다|connective-니까": "하니까",
  "하다|connective-는데": "하는데",
  "하다|connective-지만": "하지만",
  "하다|connective-면": "하면",
  "하다|connective-도": "해도",
  "하다|connective-면서": "하면서",
  "하다|connective-자마자": "하자마자",
  "하다|connective-기-전에": "하기 전에",
  "하다|modifier-present-action": "하는",
  "하다|modifier-past": "한",
  "하다|modifier-future": "할",
  "하다|nominalization-기": "하기",
  "하다|nominalization-는-것": "하는 것",
  "하다|want-고-싶다-polite": "하고 싶어요",
  "하다|try-아보다-polite": "해 봐요",
  "하다|give-아주다-polite": "해 줘요",
  "하다|finish-아버리다-polite": "해 버려요",
  "하다|can-ㄹ-수-있다-polite": "할 수 있어요",
  "하다|cannot-ㄹ-수-없다-polite": "할 수 없어요",
  "하다|must-아야-하다-polite": "해야 해요",
  "하다|must-아야-되다": "해야 돼요",
  "하다|intend-려고-하다-polite": "하려고 해요",
  "하다|future-intent-겠": "하겠어요",
  "하다|shall-ㄹ까요": "할까요",
  "하다|will-ㄹ게요": "할게요",
  "하다|seem-것-같다-polite": "하는 것 같아요",
  "하다|probably-ㄹ-거예요": "할 거예요",
  "하다|ending-네요": "하네요",
  "하다|ending-군요": "하군요",
  "하다|ending-잖아요": "하잖아요",
  "하다|ending-지요": "하지요",
  "하다|passive-아지다": "해지다",
  "하다|passive-게-되다": "하게 되다",
  "하다|causative-게-하다": "하게 하다",
  "하다|adverbial-게": "하게",

  // 가다
  "가다|present-formal-polite": "갑니다",
  "가다|past-formal-polite": "갔습니다",
  "가다|future-formal-polite": "갈 겁니다",
  "가다|present-polite": "가요",
  "가다|past-polite": "갔어요",
  "가다|future-polite": "갈 거예요",
  "가다|present-casual": "가",
  "가다|past-casual": "갔어",
  "가다|present-plain": "간다",
  "가다|past-plain": "갔다",
  "가다|question-formal-polite": "갑니까",
  "가다|question-polite": "가요?",
  "가다|imperative-formal-polite": "가십시오",
  "가다|imperative-polite": "가세요",
  "가다|imperative-casual": "가",
  "가다|imperative-plain": "가라",
  "가다|propositive-formal-polite": "갑시다",
  "가다|propositive-polite": "가요",
  "가다|propositive-plain": "가자",
  "가다|honorific-present-polite": "가세요",
  "가다|honorific-past-polite": "가셨어요",
  "가다|honorific-formal": "가십니다",
  "가다|negation-short-polite": "안 가요",
  "가다|negation-long-polite": "가지 않아요",
  "가다|negation-못-polite": "못 가요",
  "가다|progressive-present-polite": "가고 있어요",
  "가다|progressive-past-polite": "가고 있었어요",
  "가다|connective-고": "가고",
  "가다|connective-서": "가서",
  "가다|connective-니까": "가니까",
  "가다|connective-는데": "가는데",
  "가다|connective-지만": "가지만",
  "가다|connective-면": "가면",
  "가다|connective-도": "가도",
  "가다|connective-면서": "가면서",
  "가다|connective-자마자": "가자마자",
  "가다|connective-기-전에": "가기 전에",
  "가다|modifier-present-action": "가는",
  "가다|modifier-past": "간",
  "가다|modifier-future": "갈",
  "가다|nominalization-기": "가기",
  "가다|nominalization-는-것": "가는 것",
  "가다|want-고-싶다-polite": "가고 싶어요",
  "가다|try-아보다-polite": "가 봐요",
  "가다|give-아주다-polite": "가 줘요",
  "가다|finish-아버리다-polite": "가 버려요",
  "가다|can-ㄹ-수-있다-polite": "갈 수 있어요",
  "가다|cannot-ㄹ-수-없다-polite": "갈 수 없어요",
  "가다|must-아야-하다-polite": "가야 해요",
  "가다|must-아야-되다": "가야 돼요",
  "가다|intend-려고-하다-polite": "가려고 해요",
  "가다|future-intent-겠": "가겠어요",
  "가다|shall-ㄹ까요": "갈까요",
  "가다|will-ㄹ게요": "갈게요",
  "가다|seem-것-같다-polite": "가는 것 같아요",
  "가다|probably-ㄹ-거예요": "갈 거예요",
  "가다|ending-네요": "가네요",
  "가다|ending-군요": "가군요",
  "가다|ending-잖아요": "가잖아요",
  "가다|ending-지요": "가지요",
  "가다|passive-아지다": "가지다",
  "가다|passive-게-되다": "가게 되다",
  "가다|causative-게-하다": "가게 하다",
  "가다|adverbial-게": "가게",

  // 오다
  "오다|present-polite": "와요",
  "오다|past-polite": "왔어요",
  "오다|present-casual": "와",
  "오다|past-casual": "왔어",
  "오다|connective-서": "와서",
  "오다|connective-도": "와도",
  "오다|modifier-past": "온",
  "오다|present-formal-polite": "옵니다",
  "오다|past-formal-polite": "왔습니다",
  "오다|future-polite": "올 거예요",
  "오다|present-plain": "온다",
  "오다|past-plain": "왔다",
  "오다|question-formal-polite": "옵니까",
  "오다|question-polite": "와요?",
  "오다|imperative-formal-polite": "오십시오",
  "오다|imperative-polite": "오세요",
  "오다|imperative-casual": "와",
  "오다|imperative-plain": "와라",
  "오다|propositive-formal-polite": "옵시다",
  "오다|propositive-polite": "와요",
  "오다|propositive-plain": "오자",
  "오다|honorific-present-polite": "오세요",
  "오다|honorific-past-polite": "오셨어요",
  "오다|honorific-formal": "오십니다",
  "오다|negation-short-polite": "안 와요",
  "오다|negation-long-polite": "오지 않아요",
  "오다|negation-못-polite": "못 와요",
  "오다|progressive-present-polite": "오고 있어요",
  "오다|connective-고": "오고",
  "오다|connective-니까": "오니까",
  "오다|connective-는데": "오는데",
  "오다|connective-지만": "오지만",
  "오다|connective-면": "오면",
  "오다|connective-면서": "오면서",
  "오다|connective-자마자": "오자마자",
  "오다|connective-기-전에": "오기 전에",
  "오다|modifier-present-action": "오는",
  "오다|modifier-future": "올",
  "오다|nominalization-기": "오기",
  "오다|nominalization-는-것": "오는 것",
  "오다|want-고-싶다-polite": "오고 싶어요",
  "오다|try-아보다-polite": "와 봐요",
  "오다|can-ㄹ-수-있다-polite": "올 수 있어요",
  "오다|must-아야-하다-polite": "와야 해요",
  "오다|shall-ㄹ까요": "올까요",
  "오다|will-ㄹ게요": "올게요",
  "오다|probably-ㄹ-거예요": "올 거예요",
  "오다|ending-네요": "오네요",
  "오다|adverbial-게": "오게",

  // 먹다
  "먹다|present-formal-polite": "먹습니다",
  "먹다|past-formal-polite": "먹었습니다",
  "먹다|future-formal-polite": "먹을 겁니다",
  "먹다|present-polite": "먹어요",
  "먹다|past-polite": "먹었어요",
  "먹다|future-polite": "먹을 거예요",
  "먹다|present-casual": "먹어",
  "먹다|past-casual": "먹었어",
  "먹다|present-plain": "먹는다",
  "먹다|past-plain": "먹었다",
  "먹다|question-formal-polite": "먹습니까",
  "먹다|question-polite": "먹어요?",
  "먹다|imperative-formal-polite": "드십시오",
  "먹다|imperative-polite": "드세요",
  "먹다|imperative-casual": "먹어",
  "먹다|imperative-plain": "먹어라",
  "먹다|propositive-formal-polite": "먹읍시다",
  "먹다|propositive-polite": "먹어요",
  "먹다|propositive-plain": "먹자",
  "먹다|honorific-present-polite": "드세요",
  "먹다|honorific-past-polite": "드셨어요",
  "먹다|honorific-formal": "드십니다",
  "먹다|negation-short-polite": "안 먹어요",
  "먹다|negation-long-polite": "먹지 않아요",
  "먹다|negation-못-polite": "못 먹어요",
  "먹다|progressive-present-polite": "먹고 있어요",
  "먹다|progressive-past-polite": "먹고 있었어요",
  "먹다|connective-고": "먹고",
  "먹다|connective-서": "먹어서",
  "먹다|connective-니까": "먹으니까",
  "먹다|connective-는데": "먹는데",
  "먹다|connective-지만": "먹지만",
  "먹다|connective-면": "먹으면",
  "먹다|connective-도": "먹어도",
  "먹다|connective-면서": "먹으면서",
  "먹다|connective-자마자": "먹자마자",
  "먹다|connective-기-전에": "먹기 전에",
  "먹다|modifier-present-action": "먹는",
  "먹다|modifier-past": "먹은",
  "먹다|modifier-future": "먹을",
  "먹다|nominalization-기": "먹기",
  "먹다|nominalization-는-것": "먹는 것",
  "먹다|want-고-싶다-polite": "먹고 싶어요",
  "먹다|try-아보다-polite": "먹어 봐요",
  "먹다|give-아주다-polite": "먹어 줘요",
  "먹다|finish-아버리다-polite": "먹어 버려요",
  "먹다|can-ㄹ-수-있다-polite": "먹을 수 있어요",
  "먹다|cannot-ㄹ-수-없다-polite": "먹을 수 없어요",
  "먹다|must-아야-하다-polite": "먹어야 해요",
  "먹다|must-아야-되다": "먹어야 돼요",
  "먹다|intend-려고-하다-polite": "먹으려고 해요",
  "먹다|future-intent-겠": "먹겠어요",
  "먹다|shall-ㄹ까요": "먹을까요",
  "먹다|will-ㄹ게요": "먹을게요",
  "먹다|seem-것-같다-polite": "먹는 것 같아요",
  "먹다|probably-ㄹ-거예요": "먹을 거예요",
  "먹다|ending-네요": "먹네요",
  "먹다|ending-군요": "먹군요",
  "먹다|ending-잖아요": "먹잖아요",
  "먹다|ending-지요": "먹지요",
  "먹다|passive-아지다": "먹어지다",
  "먹다|passive-게-되다": "먹게 되다",
  "먹다|causative-게-하다": "먹게 하다",
  "먹다|adverbial-게": "먹게",

  // 보다
  "보다|present-polite": "봐요",
  "보다|past-polite": "봤어요",
  "보다|present-casual": "봐",
  "보다|past-casual": "봤어",
  "보다|connective-서": "봐서",
  "보다|connective-도": "봐도",
  "보다|modifier-past": "본",
  "보다|present-formal-polite": "봅니다",
  "보다|past-formal-polite": "봤습니다",
  "보다|future-polite": "볼 거예요",
  "보다|present-plain": "본다",
  "보다|past-plain": "봤다",
  "보다|question-formal-polite": "봅니까",
  "보다|question-polite": "봐요?",
  "보다|imperative-polite": "보세요",
  "보다|imperative-casual": "봐",
  "보다|imperative-plain": "봐라",
  "보다|propositive-plain": "보자",
  "보다|honorific-present-polite": "보세요",
  "보다|negation-short-polite": "안 봐요",
  "보다|negation-long-polite": "보지 않아요",
  "보다|progressive-present-polite": "보고 있어요",
  "보다|connective-고": "보고",
  "보다|connective-니까": "보니까",
  "보다|connective-는데": "보는데",
  "보다|connective-지만": "보지만",
  "보다|connective-면": "보면",
  "보다|connective-면서": "보면서",
  "보다|connective-자마자": "보자마자",
  "보다|connective-기-전에": "보기 전에",
  "보다|modifier-present-action": "보는",
  "보다|modifier-future": "볼",
  "보다|nominalization-기": "보기",
  "보다|nominalization-는-것": "보는 것",
  "보다|want-고-싶다-polite": "보고 싶어요",
  "보다|try-아보다-polite": "봐 봐요",
  "보다|can-ㄹ-수-있다-polite": "볼 수 있어요",
  "보다|must-아야-하다-polite": "봐야 해요",
  "보다|shall-ㄹ까요": "볼까요",
  "보다|will-ㄹ게요": "볼게요",
  "보다|probably-ㄹ-거예요": "볼 거예요",
  "보다|ending-네요": "보네요",
  "보다|adverbial-게": "보게",

  // 살다 (ㄹ irregular)
  "살다|present-formal-polite": "삽니다",
  "살다|past-formal-polite": "살았습니다",
  "살다|present-polite": "살아요",
  "살다|past-polite": "살았어요",
  "살다|future-polite": "살 거예요",
  "살다|present-casual": "살아",
  "살다|past-casual": "살았어",
  "살다|present-plain": "산다",
  "살다|past-plain": "살았다",
  "살다|question-formal-polite": "삽니까",
  "살다|question-polite": "살아요?",
  "살다|imperative-polite": "사세요",
  "살다|propositive-plain": "살자",
  "살다|honorific-present-polite": "사세요",
  "살다|negation-short-polite": "안 살아요",
  "살다|negation-long-polite": "살지 않아요",
  "살다|progressive-present-polite": "살고 있어요",
  "살다|connective-고": "살고",
  "살다|connective-서": "살아서",
  "살다|connective-니까": "사니까",
  "살다|connective-는데": "사는데",
  "살다|connective-지만": "살지만",
  "살다|connective-면": "살면",
  "살다|connective-도": "살아도",
  "살다|connective-면서": "살면서",
  "살다|connective-자마자": "살자마자",
  "살다|connective-기-전에": "살기 전에",
  "살다|modifier-present-action": "사는",
  "살다|modifier-past": "산",
  "살다|modifier-future": "살",
  "살다|nominalization-기": "살기",
  "살다|nominalization-는-것": "사는 것",
  "살다|want-고-싶다-polite": "살고 싶어요",
  "살다|can-ㄹ-수-있다-polite": "살 수 있어요",
  "살다|must-아야-하다-polite": "살아야 해요",
  "살다|shall-ㄹ까요": "살까요",
  "살다|will-ㄹ게요": "살게요",
  "살다|probably-ㄹ-거예요": "살 거예요",
  "살다|ending-네요": "사네요",
  "살다|adverbial-게": "살게",

  // 알다 (ㄹ irregular)
  "알다|present-formal-polite": "압니다",
  "알다|past-formal-polite": "알았습니다",
  "알다|present-polite": "알아요",
  "알다|past-polite": "알았어요",
  "알다|present-casual": "알아",
  "알다|past-casual": "알았어",
  "알다|present-plain": "안다",
  "알다|past-plain": "알았다",
  "알다|question-formal-polite": "압니까",
  "알다|question-polite": "알아요?",
  "알다|honorific-present-polite": "아세요",
  "알다|negation-short-polite": "안 알아요",
  "알다|negation-long-polite": "알지 않아요",
  "알다|connective-고": "알고",
  "알다|connective-서": "알아서",
  "알다|connective-니까": "아니까",
  "알다|connective-는데": "아는데",
  "알다|connective-지만": "알지만",
  "알다|connective-면": "알면",
  "알다|connective-도": "알아도",
  "알다|modifier-present-action": "아는",
  "알다|modifier-past": "안",
  "알다|modifier-future": "알",
  "알다|nominalization-기": "알기",
  "알다|nominalization-는-것": "아는 것",
  "알다|want-고-싶다-polite": "알고 싶어요",
  "알다|can-ㄹ-수-있다-polite": "알 수 있어요",
  "알다|must-아야-하다-polite": "알아야 해요",
  "알다|probably-ㄹ-거예요": "알 거예요",
  "알다|ending-네요": "아네요",
  "알다|adverbial-게": "알게",

  // 듣다 (ㄷ irregular)
  "듣다|present-polite": "들어요",
  "듣다|past-polite": "들었어요",
  "듣다|present-casual": "들어",
  "듣다|past-casual": "들었어",
  "듣다|present-formal-polite": "듣습니다",
  "듣다|past-formal-polite": "들었습니다",
  "듣다|future-polite": "들을 거예요",
  "듣다|present-plain": "듣는다",
  "듣다|past-plain": "들었다",
  "듣다|question-formal-polite": "듣습니까",
  "듣다|question-polite": "들어요?",
  "듣다|imperative-polite": "들으세요",
  "듣다|propositive-plain": "듣자",
  "듣다|honorific-present-polite": "들으세요",
  "듣다|negation-short-polite": "안 들어요",
  "듣다|negation-long-polite": "듣지 않아요",
  "듣다|progressive-present-polite": "듣고 있어요",
  "듣다|connective-고": "듣고",
  "듣다|connective-서": "들어서",
  "듣다|connective-니까": "들으니까",
  "듣다|connective-는데": "듣는데",
  "듣다|connective-지만": "듣지만",
  "듣다|connective-면": "들으면",
  "듣다|connective-도": "들어도",
  "듣다|connective-면서": "들으면서",
  "듣다|modifier-present-action": "듣는",
  "듣다|modifier-past": "들은",
  "듣다|modifier-future": "들을",
  "듣다|nominalization-기": "듣기",
  "듣다|nominalization-는-것": "듣는 것",
  "듣다|want-고-싶다-polite": "듣고 싶어요",
  "듣다|can-ㄹ-수-있다-polite": "들을 수 있어요",
  "듣다|must-아야-하다-polite": "들어야 해요",
  "듣다|shall-ㄹ까요": "들을까요",
  "듣다|probably-ㄹ-거예요": "들을 거예요",
  "듣다|ending-네요": "듣네요",
  "듣다|adverbial-게": "듣게",

  // 춥다 (ㅂ irregular)
  "춥다|present-polite": "추워요",
  "춥다|past-polite": "추웠어요",
  "춥다|present-casual": "추워",
  "춥다|past-casual": "추웠어",
  "춥다|present-formal-polite": "춥습니다",
  "춥다|past-formal-polite": "추웠습니다",
  "춥다|present-plain": "춥다",
  "춥다|past-plain": "추웠다",
  "춥다|question-formal-polite": "춥습니까",
  "춥다|question-polite": "추워요?",
  "춥다|negation-short-polite": "안 추워요",
  "춥다|connective-고": "춥고",
  "춥다|connective-서": "추워서",
  "춥다|connective-니까": "추우니까",
  "춥다|connective-는데": "추운데",
  "춥다|connective-지만": "춥지만",
  "춥다|connective-면": "추우면",
  "춥다|connective-도": "추워도",
  "춥다|modifier-present-action": "추운",
  "춥다|modifier-past": "추운",
  "춥다|nominalization-기": "춥기",
  "춥다|ending-네요": "춥네요",
  "춥다|adverbial-게": "춥게",

  // 예쁘다 (ㅡ verb)
  "예쁘다|present-polite": "예뻐요",
  "예쁘다|past-polite": "예뻤어요",
  "예쁘다|present-casual": "예뻐",
  "예쁘다|present-formal-polite": "예쁩니다",
  "예쁘다|present-plain": "예쁘다",
  "예쁘다|connective-서": "예뻐서",
  "예쁘다|connective-면": "예쁘면",
  "예쁘다|connective-도": "예뻐도",
  "예쁘다|modifier-past": "예쁜",
  "예쁘다|modifier-present-action": "예쁜",
  "예쁘다|ending-네요": "예쁘네요",
  "예쁘다|adverbial-게": "예쁘게",

  // 쓰다 (ㅡ verb)
  "쓰다|present-polite": "써요",
  "쓰다|past-polite": "썼어요",
  "쓰다|present-casual": "써",
  "쓰다|past-casual": "썼어",
  "쓰다|present-formal-polite": "씁니다",
  "쓰다|present-plain": "쓴다",
  "쓰다|connective-서": "써서",
  "쓰다|connective-면": "쓰면",
  "쓰다|connective-도": "써도",
  "쓰다|modifier-past": "쓴",
  "쓰다|modifier-present-action": "쓰는",
  "쓰다|modifier-future": "쓸",
  "쓰다|nominalization-기": "쓰기",
  "쓰다|want-고-싶다-polite": "쓰고 싶어요",
  "쓰다|can-ㄹ-수-있다-polite": "쓸 수 있어요",
  "쓰다|shall-ㄹ까요": "쓸까요",
  "쓰다|adverbial-게": "쓰게",

  // 모르다 (르 irregular)
  "모르다|present-polite": "몰라요",
  "모르다|past-polite": "몰랐어요",
  "모르다|present-casual": "몰라",
  "모르다|past-casual": "몰랐어",
  "모르다|present-formal-polite": "모릅니다",
  "모르다|present-plain": "모른다",
  "모르다|connective-서": "몰라서",
  "모르다|connective-면": "모르면",
  "모르다|connective-도": "몰라도",
  "모르다|modifier-past": "모른",
  "모르다|modifier-present-action": "모르는",
  "모르다|nominalization-기": "모르기",
  "모르다|ending-네요": "모르네요",
  "모르다|adverbial-게": "모르게",

  // 이다
  "이다|present-formal-polite": "입니다",
  "이다|past-formal-polite": "이었습니다",
  "이다|present-polite": "이에요",
  "이다|past-polite": "이었어요",
  "이다|present-casual": "이야",
  "이다|question-formal-polite": "입니까",
  "이다|question-polite": "이에요?",
  "이다|connective-면": "이면",
  "이다|connective-니까": "이니까",
  "이다|connective-지만": "이지만",

  // 있다
  "있다|present-formal-polite": "있습니다",
  "있다|past-formal-polite": "있었습니다",
  "있다|present-polite": "있어요",
  "있다|past-polite": "있었어요",
  "있다|present-casual": "있어",
  "있다|past-casual": "있었어",
  "있다|present-plain": "있다",
  "있다|question-formal-polite": "있습니까",
  "있다|question-polite": "있어요?",
  "있다|honorific-present-polite": "계세요",
  "있다|honorific-formal": "계십니다",
  "있다|negation-short-polite": "안 있어요",
  "있다|connective-고": "있고",
  "있다|connective-서": "있어서",
  "있다|connective-니까": "있으니까",
  "있다|connective-는데": "있는데",
  "있다|connective-지만": "있지만",
  "있다|connective-면": "있으면",
  "있다|connective-도": "있어도",
  "있다|modifier-present-action": "있는",
  "있다|modifier-future": "있을",
  "있다|nominalization-기": "있기",
  "있다|can-ㄹ-수-있다-polite": "있을 수 있어요",
  "있다|ending-네요": "있네요",
  "있다|ending-잖아요": "있잖아요",
  "있다|adverbial-게": "있게",

  // 없다
  "없다|present-formal-polite": "없습니다",
  "없다|past-formal-polite": "없었습니다",
  "없다|present-polite": "없어요",
  "없다|past-polite": "없었어요",
  "없다|present-casual": "없어",
  "없다|present-plain": "없다",
  "없다|question-polite": "없어요?",
  "없다|connective-고": "없고",
  "없다|connective-서": "없어서",
  "없다|connective-니까": "없으니까",
  "없다|connective-면": "없으면",
  "없다|connective-도": "없어도",
  "없다|modifier-present-action": "없는",
  "없다|nominalization-기": "없기",
  "없다|ending-네요": "없네요",
  "없다|adverbial-게": "없게",

  // 주다
  "주다|present-polite": "줘요",
  "주다|past-polite": "줬어요",
  "주다|present-casual": "줘",
  "주다|present-formal-polite": "줍니다",
  "주다|imperative-polite": "주세요",
  "주다|honorific-present-polite": "주세요",
  "주다|connective-서": "줘서",
  "주다|connective-면": "주면",
  "주다|modifier-past": "준",
  "주다|modifier-present-action": "주는",
  "주다|modifier-future": "줄",
  "주다|shall-ㄹ까요": "줄까요",
  "주다|will-ㄹ게요": "줄게요",
  "주다|adverbial-게": "주게",

  // 되다
  "되다|present-polite": "돼요",
  "되다|past-polite": "됐어요",
  "되다|present-casual": "돼",
  "되다|past-casual": "됐어",
  "되다|present-formal-polite": "됩니다",
  "되다|present-plain": "된다",
  "되다|connective-서": "돼서",
  "되다|connective-면": "되면",
  "되다|connective-도": "돼도",
  "되다|modifier-past": "된",
  "되다|modifier-present-action": "되는",
  "되다|modifier-future": "될",
  "되다|nominalization-기": "되기",
  "되다|can-ㄹ-수-있다-polite": "될 수 있어요",
  "되다|ending-네요": "되네요",
  "되다|adverbial-게": "되게",
};

// ===== STATE =====
let selectedCategories = new Set(["Speech Levels", "Connective", "Modifiers"]);
let selectedVerbs = new Set(VERBS.slice(0, 10).map((v) => v.dictionary));
let currentQuestion = null;
let showingAnswer = false;
let waitingForCorrectInput = false;
let stats = { correct: 0, incorrect: 0, streak: 0 };
let srsQueue = [];
let questionCount = 0;
let history = [];
const SRS_INTERVALS = [1, 2, 4, 8, 16, 32, 64];

// ===== DOM ELEMENTS =====
const answerInput = document.getElementById("answer-input");
const checkBtn = document.getElementById("check-btn");
const resultFeedback = document.getElementById("result-feedback");

// ===== FUNCTIONS =====
function getActiveForms() {
  return CONJUGATION_FORMS.filter((f) => selectedCategories.has(f.category));
}

function getActiveVerbs() {
  return VERBS.filter((v) => selectedVerbs.has(v.dictionary));
}

function getCorrectConjugation(verb, formId) {
  const key = `${verb.dictionary}|${formId}`;
  return CORRECT_CONJUGATIONS[key] || "???";
}

function generateQuestion() {
  const forms = getActiveForms();
  const verbs = getActiveVerbs();

  if (forms.length === 0 || verbs.length === 0) return null;

  // Check SRS queue
  const dueItems = srsQueue.filter((item) => item.dueAt <= questionCount);

  let verb, form;

  if (dueItems.length > 0 && Math.random() < 0.7) {
    const srsItem = dueItems[Math.floor(Math.random() * dueItems.length)];
    verb = VERBS.find((v) => v.dictionary === srsItem.verb);
    form = CONJUGATION_FORMS.find((f) => f.id === srsItem.formId);
  } else {
    // Try to find a valid combination
    let attempts = 0;
    do {
      verb = verbs[Math.floor(Math.random() * verbs.length)];
      form = forms[Math.floor(Math.random() * forms.length)];
      attempts++;
    } while (getCorrectConjugation(verb, form.id) === "???" && attempts < 50);
  }

  if (!verb || !form) return null;

  const correctAnswer = getCorrectConjugation(verb, form.id);
  if (correctAnswer === "???") return generateQuestion(); // Try again

  return { verb, form, correctAnswer };
}

function updateDisplay() {
  if (!currentQuestion) {
    document.getElementById("question-card").innerHTML =
      '<div class="empty-state">Select categories and verbs in Settings to start practicing.</div>';
    return;
  }

  document.getElementById("category-name").textContent =
    currentQuestion.form.category;
  document.getElementById("subcategory-name").textContent =
    currentQuestion.form.subcategory;
  document.getElementById("verb-display").textContent =
    currentQuestion.verb.dictionary;
  document.getElementById("verb-meaning").textContent =
    currentQuestion.verb.meaning;
  document.getElementById("form-name").textContent = currentQuestion.form.name;

  answerInput.value = "";
  answerInput.disabled = false;
  answerInput.className = "answer-input";
  answerInput.placeholder = "Type the conjugation...";
  checkBtn.disabled = false;
  resultFeedback.classList.remove("show");
  showingAnswer = false;
  waitingForCorrectInput = false;
  document.querySelector(".next-btn").style.display = "inline-block";
  document.querySelector(".continue-hint").textContent =
    "Press Enter or Space to continue";

  answerInput.focus();
}

function updateStats() {
  document.getElementById("stat-correct").textContent = stats.correct;
  document.getElementById("stat-incorrect").textContent = stats.incorrect;
  document.getElementById("stat-streak").textContent = stats.streak;
}

function updateHistory() {
  const historyPanel = document.getElementById("history-panel");
  const historyList = document.getElementById("history-list");

  if (history.length === 0) {
    historyPanel.style.display = "none";
    return;
  }

  historyPanel.style.display = "block";
  historyList.innerHTML = history
    .slice(0, 10)
    .map(
      (item) => `
        <div class="history-item ${item.correct ? "correct" : "incorrect"}">
          <div class="history-left">
            <span class="${item.correct ? "history-icon-correct" : "history-icon-incorrect"}">${item.correct ? "✓" : "✗"}</span>
            <span>${item.verb}</span>
            <span class="history-arrow">→</span>
            <span class="history-form">${item.formName}</span>
          </div>
          <div class="history-right">
            ${!item.correct ? `<span class="history-wrong">${item.userAnswer || "(empty)"}</span><span class="history-arrow">→</span>` : ""}
            <span class="history-correct-answer ${item.correct ? "green" : ""}">${item.correctAnswer}</span>
          </div>
        </div>
      `,
    )
    .join("");
}

function updateSRSIndicator() {
  const indicator = document.getElementById("srs-indicator");
  const dueCount = srsQueue.filter(
    (item) => item.dueAt <= questionCount,
  ).length;

  if (dueCount > 0) {
    indicator.style.display = "block";
    document.getElementById("srs-count").textContent = dueCount;
  } else {
    indicator.style.display = "none";
  }
}

function checkAnswer() {
  if (showingAnswer || !currentQuestion) return;

  const userAnswer = answerInput.value.trim();
  const correct = userAnswer === currentQuestion.correctAnswer;

  showingAnswer = true;
  checkBtn.disabled = true;

  // Update stats
  stats.correct += correct ? 1 : 0;
  stats.incorrect += correct ? 0 : 1;
  stats.streak = correct ? stats.streak + 1 : 0;
  updateStats();

  // Add to history
  history.unshift({
    verb: currentQuestion.verb.dictionary,
    formName: currentQuestion.form.name.split("(")[0].trim(),
    correctAnswer: currentQuestion.correctAnswer,
    userAnswer: userAnswer,
    correct: correct,
  });
  history = history.slice(0, 50);
  updateHistory();

  // Update SRS
  if (!correct) {
    const existing = srsQueue.find(
      (item) =>
        item.verb === currentQuestion.verb.dictionary &&
        item.formId === currentQuestion.form.id,
    );

    if (existing) {
      existing.interval = 0;
      existing.dueAt = questionCount + 1;
    } else {
      srsQueue.push({
        verb: currentQuestion.verb.dictionary,
        formId: currentQuestion.form.id,
        interval: 0,
        dueAt: questionCount + 1,
      });
    }
  } else {
    const existing = srsQueue.find(
      (item) =>
        item.verb === currentQuestion.verb.dictionary &&
        item.formId === currentQuestion.form.id,
    );

    if (existing) {
      existing.interval = Math.min(
        existing.interval + 1,
        SRS_INTERVALS.length - 1,
      );
      existing.dueAt = questionCount + SRS_INTERVALS[existing.interval];
    }
  }

  // Show feedback
  answerInput.className = `answer-input ${correct ? "correct" : "incorrect"}`;

  const resultMessage = document.getElementById("result-message");
  resultMessage.className = `result-message ${correct ? "correct" : "incorrect"}`;
  document.getElementById("result-icon").textContent = correct ? "✓" : "✗";
  document.getElementById("result-text").textContent = correct
    ? "Correct!"
    : "Incorrect";

  const correctAnswerDisplay = document.getElementById(
    "correct-answer-display",
  );
  if (correct) {
    correctAnswerDisplay.style.display = "none";
    answerInput.disabled = true;
    // Show normal next button for correct answers
    document.querySelector(".continue-hint").textContent =
      "Press Enter or Space to continue";
    document.querySelector(".next-btn").style.display = "inline-block";
  } else {
    correctAnswerDisplay.style.display = "block";
    document.getElementById("correct-answer").textContent =
      currentQuestion.correctAnswer;
    // Keep input enabled for typing the correct answer
    answerInput.disabled = false;
    answerInput.value = "";
    answerInput.placeholder = "Type the correct answer to continue...";
    waitingForCorrectInput = true;
    // Hide next button until they type it correctly
    document.querySelector(".next-btn").style.display = "none";
    document.querySelector(".continue-hint").textContent =
      "Type the correct answer above and press Enter";
    answerInput.focus();
  }

  resultFeedback.classList.add("show");
  updateSRSIndicator();
}

function proceedToNext() {
  waitingForCorrectInput = false;
  document.querySelector(".next-btn").style.display = "inline-block";
  nextQuestion();
}

function nextQuestion() {
  questionCount++;
  currentQuestion = generateQuestion();
  updateDisplay();
  updateSRSIndicator();
}

function toggleSettings() {
  const panel = document.getElementById("settings-panel");
  panel.classList.toggle("open");
}

function renderSettings() {
  // Categories
  const categories = [...new Set(CONJUGATION_FORMS.map((f) => f.category))];
  document.getElementById("category-tags").innerHTML = categories
    .map(
      (cat) => `
        <button class="tag ${selectedCategories.has(cat) ? "active" : ""}" onclick="toggleCategory('${cat}')">${cat}</button>
      `,
    )
    .join("");

  // Verbs
  document.getElementById("verb-tags").innerHTML = VERBS.map(
    (v) => `
        <button class="tag ${selectedVerbs.has(v.dictionary) ? "active-verb" : ""}" onclick="toggleVerb('${v.dictionary}')">
          ${v.dictionary}<span class="verb-meaning">${v.meaning}</span>
        </button>
      `,
  ).join("");

  updateQuestionCount();
}

function toggleCategory(cat) {
  if (selectedCategories.has(cat)) {
    selectedCategories.delete(cat);
  } else {
    selectedCategories.add(cat);
  }
  renderSettings();
}

function toggleVerb(verb) {
  if (selectedVerbs.has(verb)) {
    selectedVerbs.delete(verb);
  } else {
    selectedVerbs.add(verb);
  }
  renderSettings();
}

function updateQuestionCount() {
  const forms = getActiveForms().length;
  const verbs = getActiveVerbs().length;
  document.getElementById("question-count").textContent =
    `${forms} forms × ${verbs} verbs = ~${forms * verbs} questions`;
}

function applySettings() {
  toggleSettings();
  currentQuestion = generateQuestion();
  updateDisplay();
}

// ===== EVENT LISTENERS =====
answerInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    if (!showingAnswer) {
      // First Enter: check the answer
      checkAnswer();
    } else if (waitingForCorrectInput) {
      // User is typing the correct answer - check if they got it right
      if (answerInput.value.trim() === currentQuestion.correctAnswer) {
        proceedToNext();
      }
    } else {
      // Showing answer for correct response, proceed to next
      proceedToNext();
    }
  }
});

answerInput.addEventListener("input", () => {
  if (waitingForCorrectInput && currentQuestion) {
    if (answerInput.value.trim() === currentQuestion.correctAnswer) {
      // They typed it correctly! Show success state
      answerInput.className = "answer-input correct";
      document.querySelector(".continue-hint").textContent =
        "Correct! Press Enter to continue";
    } else {
      answerInput.className = "answer-input";
    }
  }
});

document.addEventListener("keydown", (e) => {
  // Only allow Space to proceed if we're showing answer AND not waiting for correct input
  if (
    showingAnswer &&
    !waitingForCorrectInput &&
    e.key === " " &&
    document.activeElement !== answerInput
  ) {
    e.preventDefault();
    proceedToNext();
  }
});

// ===== INIT =====
document.getElementById("total-count").textContent =
  `${CONJUGATION_FORMS.length} conjugation forms • ${VERBS.length} verbs`;
renderSettings();
currentQuestion = generateQuestion();
updateDisplay();
updateStats();
