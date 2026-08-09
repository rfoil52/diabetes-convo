const CLIPS = {
  "01_Greg": {persona:"Greg",stage:"diagnosis",textures:["fear","isolation","family_history"],themes:["family_history","marriage"],sum:"Greg sits in his driveway for twenty minutes after the appointment, unable to find the words to tell his wife.",keywords:"drive home, can't tell, told my wife, father had it, uncle had it, couldn't remember"},
  "02_Susan": {persona:"Susan",stage:"diagnosis",textures:["relief","reflection","numbness"],themes:["body_changes"],sum:"Susan recognizes the months of symptoms she'd been ignoring — the thirst, the bathroom trips — once the diagnosis names them.",keywords:"thirsty, bathroom, ignored, should have known, getting older, just busy"},
  "03_Robert": {persona:"Robert",stage:"diagnosis",textures:["denial","anger"],themes:["body_changes"],sum:"Robert tells his doctor he must be wrong — he's a contractor, he's outside ten hours a day, the file must belong to someone else.",keywords:"wrong, denial, can't be, mistake, arguing, refused to believe"},
  "04_Yolanda": {persona:"Yolanda",stage:"diagnosis",textures:["fear","grief","family_history"],themes:["family_history","kids","mortality"],sum:"Yolanda waits two weeks to tell her mother, knowing the look she'll get. Her grandmother lost a foot to this.",keywords:"told my mother, grandmother, lost a foot, family had it, scared to tell, cried in car"},
  "05_Raymond": {persona:"Raymond",stage:"diagnosis",textures:["fear","overwhelm","family_history"],themes:["family_history","complications","mortality"],sum:"Raymond lies awake the first night reading everything online — kidneys, eyes, feet — and watches his community's losses play in his head.",keywords:"first night, couldn't sleep, internet, kidneys eyes feet, read everything, reservation"},
  "06_Patricia": {persona:"Patricia",stage:"diagnosis",textures:["relief","reflection"],themes:["body_changes"],sum:"Patricia feels strange relief when the diagnosis lands — finally someone named the year of symptoms her other doctors dismissed.",keywords:"relieved, finally believed, year of feeling off, menopause, age, stress, dismissed"},
  "07_Carlos": {persona:"Carlos",stage:"diagnosis",textures:["grief","isolation"],themes:["food_culture","family_history","work_life"],sum:"Carlos sits at the bar of his own restaurant after closing, looking at the menu and not knowing how to walk away from forty years of family recipes.",keywords:"restaurant, food, my family's, recipes, mother taught me, identity"},
  "08_Dale": {persona:"Dale",stage:"diagnosis",textures:["regret","anger"],themes:["lifestyle_regret","body_changes"],sum:"Dale describes the three years of warnings he ignored — and the moment he realized the only person he was angry at was himself.",keywords:"warned me, three years before, didn't listen, mad at myself, ignored, should have"},
  "09_Rosa": {persona:"Rosa",stage:"information",textures:["overwhelm","isolation"],themes:["cost","language"],sum:"Rosa sits at her kitchen table with the folder, the website, the meter manuals — and the English that goes too fast for her.",keywords:"pamphlets, folder, paperwork, overwhelm, didn't know where to start, too much, English fast"},
  "10_William": {persona:"William",stage:"information",textures:["frustration","isolation"],themes:["family_history","language"],sum:"William's daughter shows him doctor videos on her tablet, and after three he asks her to turn it off — they're talking to somebody else.",keywords:"videos, doctors talking fast, not for me, daughter, tablet, didn't reach me"},
  "11_Kevin": {persona:"Kevin",stage:"information",textures:["frustration","social_stigma"],themes:["social_stigma"],sum:"Greg gets cinnamon articles, apple cider vinegar advice, and a juice cleanse pamphlet from everyone who hears his news.",keywords:"cinnamon, apple cider vinegar, advice, everyone has a cure, articles, pamphlet"},
  "12_Linda": {persona:"Linda",stage:"information",textures:["frustration","overwhelm"],themes:[],sum:"Linda the accountant researches everything and after two weeks could lecture on type 2 — but still doesn't know what to eat for breakfast.",keywords:"researched, A1c, glucose, metformin, knew the science, breakfast, Tuesday morning"},
  "13_Grace": {persona:"Grace",stage:"information",textures:["frustration","social_stigma"],themes:["social_stigma","family_history"],sum:"Grace is thin and Filipino-American — people don't believe she could have it. She has to explain a disease she's still learning herself.",keywords:"thin, didn't believe me, family history, Filipino, doesn't show, surprised"},
  "14_Frank": {persona:"Frank",stage:"information",textures:["frustration"],themes:["work_life"],sum:"Frank the mechanic wants a checklist — give him the broken part, he'll fix it. Diabetes information isn't shaped that way.",keywords:"checklist, mechanic, fix it, just tell me, options, depends, work with your provider"},
  "15_Hector": {persona:"Hector",stage:"information",textures:["regret","isolation"],themes:["work_life","language"],sum:"Hector wishes one person had sat with him for an hour and said: here's your Monday now. Here's what happens at your mother's on Sunday.",keywords:"nobody talked to me like a person, paper, website, business hours, working, family meals"},
  "16_Reggie": {persona:"Reggie",stage:"first_attempts",textures:["shame","frustration"],themes:["monitoring"],sum:"Reggie can't make himself press the lancet for ten minutes. When he finally does, he does it wrong and has to start over.",keywords:"finger stick, lancet, blood sugar test, can't do it, scared, grown man"},
  "17_Kevin": {persona:"Kevin",stage:"first_attempts",textures:["overwhelm","frustration"],themes:["eating"],sum:"Greg spends forty-five minutes in the cereal aisle reading labels — and when he gives up he buys almond milk he doesn't like.",keywords:"grocery store, cereal aisle, labels, forty-five minutes, almond milk, exhausted"},
  "18_Patricia": {persona:"Patricia",stage:"first_attempts",textures:["shame","grief"],themes:["exercise","body_changes"],sum:"Patricia makes it to the end of her block on the first walk and has to sit on a neighbor's wall pretending to look at her phone.",keywords:"first walk, end of the block, half a block, embarrassed, knees, breath, couldn't"},
  "19_Lorraine": {persona:"Lorraine",stage:"first_attempts",textures:["overwhelm","isolation"],themes:["monitoring"],sum:"Lorraine sees 142 on her meter and has no idea if that's good or bad. Her niece texts back: both.",keywords:"blood sugar 142, good or bad, alone, niece, nursing, clinic far, no answer"},
  "20_Robert": {persona:"Robert",stage:"first_attempts",textures:["shame","frustration"],themes:["medication","work_life"],sum:"Robert's metformin tore him up for three weeks — and as a contractor on job sites, he had to plan his routes around bathrooms.",keywords:"metformin, side effects, bathroom, three weeks, job sites, contractor, GI"},
  "21_Carlos": {persona:"Carlos",stage:"first_attempts",textures:["grief","isolation"],themes:["food_culture","kids","family_history"],sum:"Carlos puts back the rice at Sunday dinner at his mother's. She doesn't say anything — she just looks.",keywords:"Sunday dinner, mother, rice, frijoles, tortillas, look, family meal"},
  "22_Rosa": {persona:"Rosa",stage:"first_attempts",textures:["shame","grief"],themes:["food_culture","eating"],sum:"Rosa makes it to Thursday on salads and water before she breaks down standing in her own kitchen eating leftovers.",keywords:"first week, salads, Coca-Cola, broke down, leftovers, almost cried, pattern"},
  "23_Hector": {persona:"Hector",stage:"setbacks",textures:["anger","grief"],themes:["monitoring"],sum:"Hector goes back at three months having done everything right. His A1c moved zero-point-two. He almost quits that day.",keywords:"three months, A1c didn't move, zero-point-two, almost quit, anger, did everything right"},
  "24_Linda": {persona:"Linda",stage:"setbacks",textures:["shame","grief"],themes:["holidays"],sum:"Linda goes off-plan at her cousin's wedding — one dinner, one cake, one champagne. Sunday morning her finger stick is so high she tests three times.",keywords:"wedding, cake, champagne, forever, weekend slip, meter broken, high"},
  "25_Kevin": {persona:"Kevin",stage:"setbacks",textures:["frustration","grief"],themes:["medication","work_life"],sum:"Greg takes a weekend off from testing and eating right four months in. He needs the break. He also feels like garbage.",keywords:"burnout, tired of checking, weekend off, exhausted, needed a break, four months"},
  "26_Elena": {persona:"Elena",stage:"setbacks",textures:["shame","grief"],themes:["eating"],sum:"Elena eats one slice of birthday cake at the staff party, comes home and eats another out of shame. The second slice scares her.",keywords:"birthday cake, slice, shame, punishment, ate two, not about food anymore"},
  "27_Frank": {persona:"Frank",stage:"setbacks",textures:["regret","reflection"],themes:["lifestyle_regret","marriage"],sum:"Frank sits on his porch some nights wondering what his body would feel like now if he'd listened to his wife in 1995.",keywords:"thirty years, sodas, fast food, wife told me, regret, porch, body, what if"},
  "28_Tyler": {persona:"Tyler",stage:"setbacks",textures:["isolation","frustration"],themes:["work_life","social_stigma"],sum:"Tyler sits in a meeting with an apple while a coworker tells him one cookie won't kill him. He hasn't told anyone at work yet.",keywords:"work, meeting, cookies, coworker, didn't tell, hiding, one won't hurt"},
  "29_William": {persona:"William",stage:"setbacks",textures:["grief","numbness","family_history"],themes:["family_history","mortality"],sum:"William sits with the thought for a week — his father did everything right and died of this. His uncle did too.",keywords:"what's the point, father died, uncle died, hopeless, why bother, six months in"},
  "30_Rosa": {persona:"Rosa",stage:"setbacks",textures:["regret","grief"],themes:["kids","food_culture"],sum:"Rosa watches her oldest daughter, twenty-six, already heavier than she was — and sees what she taught her about how a body should feel.",keywords:"my kids, daughter, heavier, what I taught, food was love, can't tell her"},
  "31_Patricia": {persona:"Patricia",stage:"day_to_day",textures:["overwhelm","frustration"],themes:["kids"],sum:"Patricia flies to see her grandkids with a bag for supplies, a letter from her doctor, and the constant math of when to test and when to eat.",keywords:"travel, flying, grandkids, supplies, security, snacks, the math, exhausted"},
  "32_Robert": {persona:"Robert",stage:"day_to_day",textures:["isolation","social_stigma"],themes:["social_stigma","food_culture"],sum:"Robert still goes to Friday nights with his crew but orders a salad. Eventually the comments make him stop going.",keywords:"Friday night, wings, beer, salad, comments, diabetes finally got you, stopped going"},
  "33_Carlos": {persona:"Carlos",stage:"day_to_day",textures:["grief","isolation"],themes:["food_culture","holidays","family_history"],sum:"Carlos's first Christmas after diagnosis at his mother's. Tamales. He takes small portions. He's still figuring out how to be Mexican and have diabetes.",keywords:"Christmas, tamales, mother, family table, stranger, holidays, three years in"},
  "34_Kevin": {persona:"Kevin",stage:"day_to_day",textures:["frustration","grief"],themes:["work_life","eating"],sum:"Greg's job is client steakhouse dinners. He goes home from one with his numbers so high he sits staring at the meter.",keywords:"client dinner, steakhouse, wine, dessert, work, career, ordered for the table"},
  "35_Anjali": {persona:"Anjali",stage:"day_to_day",textures:["numbness","isolation"],themes:["work_life","body_changes"],sum:"Anjali sleeps eight hours and wakes up tired. The irony of being a pharmacist who hands people their metformin isn't lost on her.",keywords:"tired, exhausted, eight hours, wake up tired, fatigue, pharmacist, irony"},
  "36_Linda": {persona:"Linda",stage:"day_to_day",textures:["grief","isolation"],themes:["eating","marriage"],sum:"Linda's grocery shopping went from twenty minutes to ninety. Her husband waits in the car. She misses when shopping was a thing they did together.",keywords:"grocery shopping, labels, hour and a half, husband, waits in the car, miss"},
  "37_Tyler": {persona:"Tyler",stage:"day_to_day",textures:["grief","reflection"],themes:["marriage"],sum:"Tyler's wife says two months in: I miss our weekends. They were both grieving the free version of themselves they used to be.",keywords:"wife, marriage, weekends, grieving, miss us, free version, building new"},
  "38_Yolanda": {persona:"Yolanda",stage:"day_to_day",textures:["frustration","grief"],themes:["cost"],sum:"Yolanda pays $300 a month out of pocket with good insurance — and she's a nurse who sees patients rationing strips because they can't.",keywords:"cost, $300 a month, insurance, expensive, strips, rationing, can't afford"},
  "39_Raymond": {persona:"Raymond",stage:"escalation",textures:["grief","frustration"],themes:["complications"],sum:"Raymond's A1c went up despite doing everything right. The doctor said the disease was progressing — like she was reading the weather.",keywords:"A1c went up, disease progressing, did everything, seven-point-eight, no control"},
  "40_Robert": {persona:"Robert",stage:"escalation",textures:["acceptance","relief"],themes:["medication"],sum:"Robert refuses insulin like a child until his doctor says: this isn't a punishment, this is the next tool, your body needs help.",keywords:"insulin, needles, said no, refused, your body needs help, year on insulin"},
  "41_Patricia": {persona:"Patricia",stage:"escalation",textures:["fear","grief"],themes:["complications"],sum:"Patricia's eye doctor goes quiet for too long and shows her the bleeding at the back of her eyes. She cries in his parking lot.",keywords:"eye exam, retinopathy, bleeding, parking lot, cried, catchable, what about next time"},
  "42_David": {persona:"David",stage:"escalation",textures:["fear","isolation"],themes:["complications","language"],sum:"David notices the tingling in his toes. He'd been reading about it on his own, in Korean, late at night, too embarrassed to ask the doctor.",keywords:"neuropathy, toes, tingling, numbness, foot, embarrassed, language, in Korean"},
  "43_William": {persona:"William",stage:"escalation",textures:["fear","grief","family_history"],themes:["complications","family_history","mortality"],sum:"William's nephrology referral pulls him back to his mother on dialysis for four years. He asks the young doctor if he'll end up like her.",keywords:"kidneys, nephrology, mother, dialysis, ending up like, am I going to"},
  "44_Carlos": {persona:"Carlos",stage:"escalation",textures:["shame","relief"],themes:["marriage","body_changes"],sum:"Carlos waits eight months to bring up the sexual dysfunction with his doctor. She says: this is common, this is part of it, we can help.",keywords:"sexual, intimacy, eight months, ashamed, didn't bring up, wife, common, help"},
  "45_Linda": {persona:"Linda",stage:"escalation",textures:["fear"],themes:["complications"],sum:"Linda's cut on her heel doesn't heal for three weeks. Her doctor explains what could have happened. She walks out knowing she escaped something.",keywords:"foot, cut, won't heal, three weeks, doctor, escaped, glass I won't feel"},
  "46_Kevin": {persona:"Kevin",stage:"identity",textures:["acceptance","dignity","reflection"],themes:[],sum:"Greg says I have diabetes, not I'm diabetic. Three years to find the distinction. Father, husband, the guy who closes deals first. The disease can be in the room without being the loudest thing.",keywords:"diabetic versus have diabetes, label, identity, language, three years, who I am"},
  "47_Yolanda": {persona:"Yolanda",stage:"identity",textures:["anger","dignity"],themes:["social_stigma"],sum:"Yolanda watches people pause when they hear type 2 — the tiny look that decides whether she brought this on herself. She's stopped explaining.",keywords:"stigma, type 2, pause, look, judging, brought this on yourself, stopped explaining"},
  "48_Anthony": {persona:"Anthony",stage:"identity",textures:["isolation","reflection"],themes:["social_stigma","marriage"],sum:"Anthony tells his wife, his sister, his best friend. He hasn't told his coworkers or his mother. He takes pills in the break room when no one's there.",keywords:"hiding, didn't tell, work, mother, secret, pills in private, break room"},
  "49_Frank": {persona:"Frank",stage:"identity",textures:["regret","wisdom","reflection"],themes:["lifestyle_regret"],sum:"Frank would tell his forty-year-old self: the body keeps score. Pay a little every day. The bill at sixty is harder than the bill at forty.",keywords:"younger self, forty, body keeps score, pay every day, bill, regret"},
  "50_Lorraine": {persona:"Lorraine",stage:"identity",textures:["acceptance","reflection","wisdom"],themes:[],sum:"Lorraine stops fighting it. Her grandmother would have called it walking with it instead of against it. There's a lot of life still here.",keywords:"acceptance, stopped fighting, walking with it, surrender different, grandmother, peace"},
  "51_Patricia": {persona:"Patricia",stage:"identity",textures:["grief","reflection"],themes:["kids","family_history"],sum:"Patricia looks at her daughter at thirty-five and sees her own body twenty years ago. She wants to grab her hands. She knows nobody could have told her either.",keywords:"daughter, kids, family history, warning, can't tell her, my body twenty years ago"},
  "52_Carlos": {persona:"Carlos",stage:"identity",textures:["acceptance","dignity","wisdom"],themes:["food_culture","work_life"],sum:"Carlos quietly changes the food at his restaurant. Same flavors, smaller portions, more vegetables. Maybe he's the guy who fed his community a little better.",keywords:"restaurant, changed cooking, smaller portions, my community, purpose, quiet"},
  "53_William": {persona:"William",stage:"identity",textures:["reflection","wisdom","family_history"],themes:["mortality","family_history","medication"],sum:"William does the math on his father at sixty-nine and his uncle at seventy-one. But he didn't have what William has. He decides not to spend his time being afraid.",keywords:"sixty-seven, father, uncle, time, mortality, math, daughter calls, decision"},
  "54_Greg": {persona:"Greg",stage:"teaching",textures:["wisdom","reflection","hope"],themes:[],sum:"Greg tells the newly diagnosed: stay off the internet the first week. Find one person to talk to. Don't try to learn it all in a week. You have time.",keywords:"newly diagnosed, advice, internet, one person, time, long game, going to be okay"},
  "55_Rosa": {persona:"Rosa",stage:"teaching",textures:["wisdom","dignity","hope"],themes:["food_culture","kids"],sum:"Rosa speaks to her sisters, cousins, the women in her neighborhood: the food is love, but love yourself too. Save some of that love for the woman in the mirror.",keywords:"sisters, cousins, women, community, food is love, love yourself, mirror"},
  "56_Dale": {persona:"Dale",stage:"teaching",textures:["regret","wisdom"],themes:["lifestyle_regret"],sum:"Dale wishes someone had told him at forty-five: this is the window. You can still close it. Three more years and the window starts to close.",keywords:"forty-five, window, creeping numbers, prediabetes, prevention, before sick"},
  "57_Linda": {persona:"Linda",stage:"teaching",textures:["wisdom","reflection"],themes:[],sum:"Linda lists three things she wishes she'd had on day one. One person. Small pieces over months. Someone asking how she was doing emotionally.",keywords:"three things, day one, system, emotional, one person, plain language"},
  "58_Robert": {persona:"Robert",stage:"teaching",textures:["acceptance","wisdom","reflection"],themes:[],sum:"Robert says acceptance is not surrender. The day he stopped fighting was the day he started getting better.",keywords:"acceptance, surrender, fighting, stopped fighting, turned around, started getting better"},
  "59_Patricia": {persona:"Patricia",stage:"teaching",textures:["hope","wisdom","dignity"],themes:["exercise","medication"],sum:"Patricia three years later: four miles on the trail with her grandson. A1c in range. Eyes stable. Not cured. But a life. A good life. With this in it.",keywords:"three years later, four miles, grandson, A1c in range, good life, hope, possible"},
  "60_Marcus": {persona:"Marcus",stage:"teaching",textures:["wisdom","reflection","hope"],themes:[],sum:"Marcus three years in: the first year is the loudest. There's quiet on the other side of all this noise. Walk toward it.",keywords:"three years, quiet, first year loudest, second year, automatic, walk toward it"},
  "61_Marcus": {persona:"Marcus",stage:"teaching",textures:["hope","wisdom","dignity","acceptance"],themes:["medication","monitoring","exercise"],sum:"Marcus addresses the universal question — can I be cured? Remission is real but not a promise. He stopped thinking of himself as someone this was happening to and started taking an active role. Every improvement changes how he feels.",keywords:"cure, cured, remission, can I be cured, reverse, get rid of, beat this, control, taking charge"},
  "62_Grace": {persona:"Grace",stage:"mastery",textures:["dignity","wisdom","reflection"],themes:["monitoring","eating"],sum:"Grace can read her own body now without effort — she knows what rice does, what rice with fish does, what rice with fish and a walk after does. The thought that used to be a mystery is now just Tuesday.",keywords:"pattern, know my body, predict, rice, glucose patterns, understand, automatic"},
  "63_David": {persona:"David",stage:"mastery",textures:["dignity","wisdom","reflection"],themes:["monitoring","work_life"],sum:"David has run a dry cleaning shop for twenty-six years — time, temperature, chemistry. Eight months in he sees his own body the same way. Nobody told him the last material he'd learn would be himself.",keywords:"process, dry cleaning, know my body, timing, patterns, twenty-six years, learning"},
  "64_Raymond": {persona:"Raymond",stage:"mastery",textures:["dignity","wisdom","humor"],themes:["marriage","work_life"],sum:"Raymond's wife started calling him on the road to ask what he'd eaten. He stopped fighting it once he heard the real question underneath — are you going to be alright. Now she packs his cooler and the calls stopped.",keywords:"wife, spouse, nagging, checking on me, calling, worry, marriage, partner"},
  "65_Elena": {persona:"Elena",stage:"mastery",textures:["dignity","wisdom","reflection"],themes:["food_culture","body_changes","eating"],sum:"Elena knew food by feel her whole life. After diagnosis it became rules and guilt. Now she knows her own body the way she knows a kitchen — it isn't rules anymore, she's listening.",keywords:"feel, sense, know my body, food, cooking, guilt, listening, rules"},
  "66_Marcus": {persona:"Marcus",stage:"mastery",textures:["dignity","wisdom","humor"],themes:["work_life","social_stigma"],sum:"Marcus told everyone at work because that's who he is. Then every meeting brought another opinion. He stopped offering the subject — not hiding it — and the room went back to being about the work.",keywords:"work, coworkers, explaining, advice, opinions, unsolicited, telling people, privacy"},
  "67_Hector": {persona:"Hector",stage:"mastery",textures:["dignity","wisdom","reflection"],themes:["monitoring","work_life"],sum:"Hector wanted somebody to tell him what his Monday looked like. Nobody would. Two years on he built his own, and now it runs in the background like the warehouse floor when it's running right.",keywords:"checklist, routine, my Monday, built it myself, works, system, background"},
  "68_Anjali": {persona:"Anjali",stage:"mastery",textures:["dignity","wisdom","reflection"],themes:["monitoring","body_changes"],sum:"Anjali the pharmacist knows what the drugs do. What she didn't know was what she does — when she gets careless, when she skips testing. Now she plans around herself. She isn't managing diabetes, she's managing her.",keywords:"pharmacist, self-knowledge, patterns, planning, managing myself, sleep, careless"},
  "69_Reggie": {persona:"Reggie",stage:"mastery",textures:["dignity","wisdom","acceptance"],themes:["monitoring","body_changes"],sum:"Reggie couldn't press the lancet for ten minutes when he started. Now he and his body have an understanding — he stopped believing it betrayed him and started hearing what it was telling him.",keywords:"lancet, understanding, hear my body, partnership, betrayed, listen, respect"}
};

const CLIP_IDS = Object.keys(CLIPS);

const S3_BASE = "https://reachum-video-assets.s3.amazonaws.com/diabetes-clips/";
const CAPTION_BASE = "https://reachum-video-assets.s3.amazonaws.com/diabetes-clips/";

function clipUrl(id) {
  return S3_BASE + id + ".mp4";
}

// VTT files are lowercase: "62_Grace" -> "62_grace.vtt"
function captionUrl(id) {
  return CAPTION_BASE + id.toLowerCase() + ".vtt";
}

const H = {"Content-Type":"application/json","Access-Control-Allow-Origin":"*"};

function buildSystemPrompt() {
  const ci = Object.entries(CLIPS).map(([id, c]) =>
      `${id}: ${c.persona} | stage:${c.stage} | textures:${c.textures.join(",")} | themes:${c.themes.join(",")} | ${c.sum}`
  ).join("\n");

  return `You are a warm, calm companion to someone who has just been diagnosed with type 2 diabetes — or who is here on behalf of someone they love. You are not a doctor. You are not a substitute for medical care. Your role is to listen, to identify with what the person is feeling, to surface real patient voices from your library that mirror their experience, and to be a steady presence in a hard moment.

Every year in the United States, 1.5 million people hear the words "you have diabetes" for the first time. Your purpose is to make sure none of them walks through the first three months alone.

WHAT YOU DO:
1. Listen carefully to what the person says. Read their actual words. Match their stage in the journey (just diagnosed, drowning in information, trying things, hitting setbacks, day-to-day life, medical escalation, identity, looking back, mastery). Mastery clips are people who now hold competence without effort — they describe knowing their own body, a routine that runs itself, or a relationship renegotiated. Reach for them when someone is past struggling and describing something that works, not when they are still in it. Match their emotional texture (fear, anger, shame, grief, regret, relief, hope, acceptance, overwhelm, isolation, frustration, numbness, dignity). When a message contains multiple signals — a topic, a stage, and an emotional register — prioritize emotional texture over topic. Someone naming their family history with resignation should not receive a clip about terror over family history. Someone accepting their obesity as cause should not receive a clip about shock. Someone tired of monitoring should not receive a clip about first-time fear. Match the feeling first, then the situation.

Concrete guidance on this: if two clips share a topic but have different emotional registers, choose the one whose register matches the user's, not the one whose topic matches most exactly. A user saying "runs in my family, I saw this coming, and I'm 80 pounds overweight" is expressing acceptance, self-recognition, and regret — not fear. Dale's regret clip, Frank's reflection clip, or Rosa's recognition clip would fit; Yolanda's fear-about-grandmother clip would not, even though family history matches. A user saying "my mother lost a foot and now they're talking about my kidneys" is expressing terror — Yolanda's clip or William's nephrology clip would fit. 

2. Surface ONE patient voice from your library that mirrors what they are describing. Introduce it briefly and let it play. Trust the clip. Do not summarize what it will say.
3. After the clip plays, check in gently. Did any of that sound familiar? You can ask one short follow-up question to deepen the conversation.

WHAT YOU NEVER DO:
- You NEVER give medical advice. Not blood sugar targets, not medication guidance, not dietary specifics, not what to do about a symptom. Even when asked directly. Especially when asked directly. Diabetes is managed systemically by the person's primary medical team — a doctor, a diabetes educator, a care team who knows their numbers and their history. You reinforce that relationship in every interaction. You do not compete with it.
- When the person asks a medical question, you do not answer it. You acknowledge the question, redirect to their care team, and offer to share how other patients felt when they had the same question. Example: "That's a question for your doctor or diabetes educator — they know your numbers and your situation. I can share how Marcus felt when he was asking the same thing. Want to hear from him?"
- You never predict outcomes for any individual. You never diagnose or assess whether someone has diabetes. You never tell anyone what they should eat or how much they should exercise.

HANDLING THE UNIVERSAL QUESTION — "CAN I BE CURED?":
This question comes up often. When it does, surface clip 61_Marcus. He answers it directly in his own voice, from three years post-diagnosis. He says remission is real but not promised, that taking an active role matters, and that every improvement changes how you feel. Match this clip on any phrasing about cure, reversal, getting rid of it, beating it, or remission.

HANDLING QUESTIONS ABOUT THE AI ITSELF:
If someone asks how this works, who made the voices, or what is real, answer briefly and honestly: the voices and faces are made with AI. The stories they tell are drawn from what actual patients have shared about their experiences. The AI exists so that no real patient has to be exposed to give comfort to another. Then offer to continue.

VOICE AND TONE:
- Warm, calm, honest, brief. You do not rush. You do not perform energy.
- Match the person's pace. If they write briefly, respond briefly. If they share more, you can take a sentence or two more.
- One question at a time. Never stack questions.
- No phrases like "great question" or "I hear you" or "that's interesting" or "I appreciate you sharing." Be a real person, not a facilitator.
- Reference their actual words back to them when it fits.

CLIP LIBRARY:
${ci}

MATCHING OUTPUT:
When you've identified the clip to surface, end your response with [MATCH:clipid] on its own line. Your introduction text before the MATCH tag must describe the specific persona and moment from THAT clip — not a different one. Look up the clip you're matching in the CLIP LIBRARY above, and reference the correct persona name and the specific situation described in the sum field. Do not paraphrase from memory. If the clip is 02_Susan about pre-diagnosis recognition, introduce Susan and her situation — not Greg's driveway or anyone else. The introduction and the match must always agree on who is speaking.

Never surface more than one clip per turn. And never surface a clip that has already been shown in this conversation — the user's context will list which clip IDs have already played. If your best match would be a clip that has already played, pick your next-best match instead. The user hearing the same voice twice is worse than hearing a slightly less perfect match once. Prefer variety across a conversation while still honoring emotional texture priority.
PRIVACY:
You do not collect names, emails, or any identifying information. If the person asks about privacy, confirm honestly: we are not connecting what they share to who they are. They can leave any time. They are anonymous.

You are talking to people who are scared, overwhelmed, or quietly heartbroken. Be the kind of voice they need.`;
}

function scoreFromConvo(messages) {
  const all = messages.filter(m => m.role === "user").map(m => m.content).join(" ").toLowerCase();
  const s = {stage:0};
  if (/just diagnosed|new|told me|today|yesterday|this week/.test(all)) s.stage = 1;
  else if (/information|overwhelm|pamphlet|website|where to start|too much/.test(all)) s.stage = 2;
  else if (/trying|first time|started|cut out|walking|test/.test(all)) s.stage = 3;
  else if (/quit|burnt out|tired of|didn't move|setback|slipped/.test(all)) s.stage = 4;
  else if (/family|work|holiday|travel|every day|normal/.test(all)) s.stage = 5;
  else if (/insulin|eye|foot|kidney|specialist|complication/.test(all)) s.stage = 6;
  else if (/cured|remission|reverse|control|active role/.test(all)) s.stage = 8;
  else if (/know my body|figured it out|second nature|automatic now|got the hang|used to be hard|doesn't scare me/.test(all)) s.stage = 9;
  return s;
}

function findMatch(scores, exclude) {
  const stageMap = {1:"diagnosis", 2:"information", 3:"first_attempts", 4:"setbacks", 5:"day_to_day", 6:"escalation", 7:"identity", 8:"teaching", 9:"mastery"};
  const targetStage = stageMap[scores.stage] || "diagnosis";
  const candidates = Object.entries(CLIPS)
      .filter(([id]) => !exclude.includes(id))
      .filter(([id, c]) => c.stage === targetStage);
  if (candidates.length === 0) {
    const fallback = Object.entries(CLIPS).filter(([id]) => !exclude.includes(id));
    return fallback[0]?.[0];
  }
  return candidates[0][0];
}

export default async (req) => {
  if (req.method === "OPTIONS") return new Response("", {status:204, headers:{...H,"Access-Control-Allow-Methods":"POST, OPTIONS","Access-Control-Allow-Headers":"Content-Type"}});
  if (req.method !== "POST") return new Response(JSON.stringify({error:"Method not allowed"}), {status:405, headers:H});

  const KEY = process.env.ANTHROPIC_API_KEY;
  if (!KEY) return new Response(JSON.stringify({error:"Not configured"}), {status:500, headers:H});

  try {
    const body = await req.json();

    if (body.action === "start") {
      return new Response(JSON.stringify({welcomeUrl: S3_BASE + "welcome.mp4", welcomeCaptionUrl: CAPTION_BASE + "welcome.vtt"}), {status:200, headers:H});
    }

    if (body.action === "chat") {
      const {messages, shownClips = []} = body;
      const shownList = shownClips.length > 0
          ? `\n\nCLIPS ALREADY SHOWN in this conversation (do not re-show these): ${shownClips.join(", ")}`
          : "";
      const sys = buildSystemPrompt() + shownList;

      const r = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST",
        headers:{"Content-Type":"application/json","x-api-key":KEY,"anthropic-version":"2023-06-01"},
        body:JSON.stringify({model:"claude-sonnet-5", max_tokens:400, system:sys, messages}),
      });

      if (!r.ok) {
        const errorBody = await r.text(); console.error("Claude error", r.status, errorBody);
        return new Response(JSON.stringify({error:"API error"}), {status:502, headers:H});
      }

      const d = await r.json();
      const text = d.content?.filter(b => b.type === "text").map(b => b.text).join("\n").trim() || "";
      const mm = /\[MATCH:([\w]+)\]/.exec(text);
      const clean = text.replace(/\[MATCH:[\w]+\]/g, "").trim();
      const res = {text: clean};

      if (mm && mm[1] && CLIPS[mm[1]]) {
        if (shownClips.includes(mm[1])) {
          console.warn("Agent re-selected already-shown clip", mm[1]);
        }
        res.match = mm[1];
        res.matchPersona = CLIPS[mm[1]].persona;
        res.matchUrl = clipUrl(mm[1]);
        res.matchCaptionUrl = captionUrl(mm[1]);
      }

      return new Response(JSON.stringify(res), {status:200, headers:H});
    }

    if (body.action === "find") {
      const scores = scoreFromConvo(body.messages || []);
      const ex = body.shownClips || [];
      const id = findMatch(scores, ex);
      if (!id) return new Response(JSON.stringify({error:"No more"}), {status:200, headers:H});
      return new Response(JSON.stringify({clipId: id, clipPersona: CLIPS[id].persona, clipUrl: clipUrl(id), clipCaptionUrl: captionUrl(id), clipSummary: CLIPS[id].sum}), {status:200, headers:H});
    }

    if (body.action === "log") {
      console.log("=== DIABETES SESSION ===");
      console.log("ID:", body.sessionId, "| Time:", body.timestamp);
      console.log("Clips shown:", body.shownClips?.join(", "));
      body.messages?.forEach(m => console.log(`  [${m.role}]:`, m.content?.substring(0, 200)));
      console.log("=== END ===");
      return new Response(JSON.stringify({logged:true}), {status:200, headers:H});
    }

    return new Response(JSON.stringify({error:"Unknown action"}), {status:400, headers:H});
  } catch (e) {
    console.error("Error:", e);
    return new Response(JSON.stringify({error:"Internal"}), {status:500, headers:H});
  }
};

export const config = {path:"/api/chat"};