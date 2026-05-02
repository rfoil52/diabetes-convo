const CLIPS = {
  irwin:{name:"Hale Irwin",tags:"family, humble, father-made-it-happen, small-town",sum:"Small town Kansas. Father cut down old clubs, wrapped shafts in electrical tape. Not a pro — just a dad who showed up. Those clubs are now in the World Golf Hall of Fame."},
  trevino:{name:"Lee Trevino",tags:"self-taught, late-start, working-class, outsider",sum:"Didn't start until 19 in the Marines. Watched Hogan hit a fade — too intimidated to ask how. Figured it out alone on a driving range. Called himself an 'uneducated engineer.'"},
  inkster:{name:"Juli Inkster",tags:"accidental, working-class, no-family-in-golf, fell-into-it",sum:"Needed a job at 15. Friend worked at the golf course. Got clubs from the lost and found. 'I basically fell into the game.'"},
  creamer:{name:"Paula Creamer",tags:"family, visualization, father-programmed, destiny",sum:"Father said 'This is to win the US Open' on every practice putt. Then she actually had a four-footer to win the US Open."},
  furyk:{name:"Jim Furyk",tags:"family, father-held-back, intrinsic, self-motivated",sum:"Father was a golf pro but deliberately didn't push golf. Steered him to other sports. It was always Furyk asking for more."},
  north:{name:"Andy North",tags:"adversity, injury, last-resort, forced, resilience",sum:"Knee condition. Devastated. Went through the encyclopedia listing every sport. Doctor said no 20 times. Golf was 20th on the list."},
  sorenstam:{name:"Annika Sorenstam",tags:"dismissed-it, complexity-hooked, multiple-sports",sum:"Came from action sports. Thought golf was boring. Then discovered the complexity. 'This is really tough. I want to learn.'"},
  rice:{name:"Condoleezza Rice",tags:"late-start, accidental, outsider",sum:"First picked up a club the summer after becoming Secretary of State. Got buddy lessons on vacation. Hit a driver — hooked."},
  palmer:{name:"Arnold Palmer",tags:"family, immersion, every-job, father-in-golf",sum:"Father was greenskeeper. Worked every job — mowed greens, drove tractors, dug ditches, caddied. 'I can't think of anything at a club that I didn't do.'"},
  miller:{name:"Johnny Miller",tags:"family, deliberate-practice, father-designed, discipline",sum:"Father bought WWII surplus canvas, a mirror, instruction books. Hit into that canvas 2.5 years before ever seeing a golf course."},
  omeara:{name:"Mark O'Meara",tags:"loneliness, solitary, self-directed, no-mentor",sum:"Eight cities by age 13. Couldn't keep friends. Found mom's old clubs in the garage, hiked down the hill alone."},
  davies:{name:"Laura Davies",tags:"self-taught, defiant, independent",sum:"Tagged along with brother. 'Never really wanted to be told how to do it. Don't tell me. I'll work it out.'"},
  pavin:{name:"Corey Pavin",tags:"family, tagging-along, easy, loved-it-immediately",sum:"Parents played. Brothers played. Tagged along as the youngest. Loved it from the start."},
  rose:{name:"Justin Rose",tags:"family, accidental, humor",sum:"Father got him started because he wanted a golf partner. Mom insists on credit for buying the first clubs."},
  kite:{name:"Tom Kite",tags:"family, absorbed, pre-conscious",sum:"Parents played. Father hit practice balls into a baseball diamond. Young Tom on a blanket nearby."},
  spieth:{name:"Jordan Spieth",tags:"family, athletic-family, multiple-sports",sum:"College-athlete parents. Every sport in the front yard. Grandfather made clubs. 'They put us in everything, and I took to golf.'"},
  goosen:{name:"Retief Goosen",tags:"family, brothers, gradual-narrowing",sum:"Father and two brothers all played. Played rugby, cricket, tennis. Narrowed to golf by 13."},
  strange:{name:"Curtis Strange",tags:"family, father-in-golf, access",sum:"Father was a PGA club pro. Had unlimited access. Spent every day at the course from age nine."},
};

const CLIP_IDS = Object.keys(CLIPS);

const PROFILES = {
  palmer:{g:-2,a:-2,d:-2,l:-2},miller:{g:-2,a:-2,d:-1,l:-2},creamer:{g:-2,a:-2,d:-2,l:-2},strange:{g:-2,a:-1,d:-2,l:-2},
  furyk:{g:-1,a:-1,d:-2,l:-2},irwin:{g:-1,a:-1,d:-1,l:-2},pavin:{g:-1,a:0,d:-2,l:-2},kite:{g:-1,a:0,d:-2,l:-2},
  spieth:{g:-1,a:0,d:-2,l:-2},goosen:{g:-1,a:0,d:-1,l:-2},rose:{g:-1,a:1,d:-2,l:-2},sorenstam:{g:0,a:1,d:-2,l:-1},
  rice:{g:1,a:2,d:-2,l:2},inkster:{g:2,a:2,d:-1,l:0},davies:{g:2,a:0,d:-1,l:-1},trevino:{g:2,a:0,d:1,l:2},
  omeara:{g:2,a:1,d:1,l:0},north:{g:1,a:2,d:2,l:-1},
};

function cdist(s,p){return Math.sqrt((s.g-p.g)**2+(s.a-p.a)**2+(s.d-p.d)**2+(s.l-p.l)**2)}

function findMatch(scores,exclude){
  return Object.entries(PROFILES).filter(([id])=>!exclude.includes(id))
    .map(([id,p])=>({id,d:cdist(scores,p)})).sort((a,b)=>a.d-b.d)[0]?.id;
}
function findOpposite(scores,exclude){
  return Object.entries(PROFILES).filter(([id])=>!exclude.includes(id))
    .map(([id,p])=>({id,d:cdist(scores,p)})).sort((a,b)=>b.d-a.d)[0]?.id;
}

function scoreFromConvo(messages){
  const all=messages.filter(m=>m.role==="user").map(m=>m.content).join(" ").toLowerCase();
  const s={g:0,a:0,d:0,l:0};
  if(/dad|father|mother|mom|parent|family/.test(all))s.g=-2; else if(/myself|alone|self|figured/.test(all))s.g=2;
  if(/accident|stumbl|fell into|luck|chance/.test(all))s.a=2; else if(/chose|deliberat|plan|always/.test(all))s.a=-2;
  if(/injur|struggle|hard|setback|devastat/.test(all))s.d=2; else if(/easy|natural|smooth|fun/.test(all))s.d=-2;
  if(/kid|child|young|age [2-9]/.test(all))s.l=-2; else if(/college|adult|late|19|2[0-9]/.test(all))s.l=2;
  return s;
}

function buildSystemPrompt(origin,randomClip){
  const ci=Object.entries(CLIPS).map(([id,c])=>`${id}: ${c.name} — ${c.tags}`).join("\n");
  return `You are having a relaxed, genuine conversation with a golfer about how they got started in the game. You're curious, you're a good listener, and you know golf culture. You sound like a golfer talking to a golfer at the 19th hole.

You have a library of video clips of legendary golfers answering the same question. You've shown one random clip already. Now you're having a real conversation to understand this person's origin story.

CRITICAL RULES:
1. LISTEN. Read everything the viewer has said. NEVER re-ask something they already answered. Go DEEPER into what they said — the part they didn't explain, the emotion behind it, the detail they glossed over.
2. One question at a time. 1-2 sentences max. React to something SPECIFIC they said, then ask one follow-up.
3. Sound like a real person, not a facilitator. No "that's interesting" or "great answer" or "I appreciate you sharing."
4. NEVER use words like cognitive, encoding, retrieval, framework, or module.
5. Be direct. Be warm. Be occasionally funny when it fits. Match their energy.
6. Reference their exact words back to them.

YOUR HIDDEN GOAL (never reveal): Figure out which golfer's origin story most closely matches this person's. You're listening for: family vs self-discovered, deliberate vs accidental, smooth vs adversity, early vs late, mentor-guided vs self-taught.

AVAILABLE CLIPS:
${ci}

After 3-5 exchanges, when you're confident you know the match, end your response with [MATCH:clipid] on its own line.

Viewer's origin story: ${origin}
Random clip they watched: ${randomClip?`${CLIPS[randomClip].name}: ${CLIPS[randomClip].sum}`:"None"}`;
}

const H={"Content-Type":"application/json","Access-Control-Allow-Origin":"*"};

export default async(req)=>{
  if(req.method==="OPTIONS")return new Response("",{status:204,headers:{...H,"Access-Control-Allow-Methods":"POST, OPTIONS","Access-Control-Allow-Headers":"Content-Type"}});
  if(req.method!=="POST")return new Response(JSON.stringify({error:"Method not allowed"}),{status:405,headers:H});

  const KEY=process.env.ANTHROPIC_API_KEY;
  if(!KEY)return new Response(JSON.stringify({error:"Not configured"}),{status:500,headers:H});

  try{
    const body=await req.json();

    // START — pick random clip, return ID and name only
    if(body.action==="start"){
      const id=CLIP_IDS[Math.floor(Math.random()*CLIP_IDS.length)];
      return new Response(JSON.stringify({clipId:id,clipName:CLIPS[id].name,clipDur:CLIPS[id].dur}),{status:200,headers:H});
    }

    // CHAT — build prompt server-side, call Claude, parse match
    if(body.action==="chat"){
      const{messages,origin,randomClip}=body;
      const sys=buildSystemPrompt(origin,randomClip);
      const r=await fetch("https://api.anthropic.com/v1/messages",{
        method:"POST",
        headers:{"Content-Type":"application/json","x-api-key":KEY,"anthropic-version":"2023-06-01"},
        body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:250,system:sys,messages}),
      });
      if(!r.ok){console.error("Claude error",r.status);return new Response(JSON.stringify({error:"API error"}),{status:502,headers:H})}
      const d=await r.json();
      const text=d.content?.filter(b=>b.type==="text").map(b=>b.text).join("\n").trim()||"";
      const mm=/\[MATCH:(\w+)\]/.exec(text);
      const clean=text.replace(/\[MATCH:\w+\]/g,"").trim();
      const res={text:clean};
      if(mm&&mm[1]&&CLIPS[mm[1]]){
        res.match=mm[1];res.matchName=CLIPS[mm[1]].name;res.matchSummary=CLIPS[mm[1]].sum;
      }
      return new Response(JSON.stringify(res),{status:200,headers:H});
    }

    // FIND — similar or opposite
    if(body.action==="find"){
      const scores=scoreFromConvo(body.messages||[]);
      const ex=body.shownClips||[];
      const id=body.mode==="opposite"?findOpposite(scores,ex):findMatch(scores,ex);
      if(!id)return new Response(JSON.stringify({error:"No more"}),{status:200,headers:H});
      return new Response(JSON.stringify({clipId:id,clipName:CLIPS[id].name,clipSummary:CLIPS[id].sum}),{status:200,headers:H});
    }

    // LOG
    if(body.action==="log"){
      console.log("=== SESSION ===");
      console.log("ID:",body.sessionId,"| Time:",body.timestamp);
      console.log("Origin:",body.origin);
      console.log("Match:",body.matchClip,body.matchClip?`(${CLIPS[body.matchClip]?.name})`:"");
      console.log("Clips:",body.clipsShown?.join(", "));
      body.messages?.forEach(m=>console.log(`  [${m.role}]:`,m.content?.substring(0,200)));
      console.log("=== END ===");
      return new Response(JSON.stringify({logged:true}),{status:200,headers:H});
    }

    return new Response(JSON.stringify({error:"Unknown"}),{status:400,headers:H});
  }catch(e){
    console.error("Error:",e);
    return new Response(JSON.stringify({error:"Internal"}),{status:500,headers:H});
  }
};

export const config={path:"/api/chat"};
