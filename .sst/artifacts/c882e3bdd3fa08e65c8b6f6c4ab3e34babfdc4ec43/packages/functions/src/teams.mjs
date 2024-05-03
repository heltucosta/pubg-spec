import { createRequire as topLevelCreateRequire } from 'module';
const require = topLevelCreateRequire(import.meta.url);
import { fileURLToPath as topLevelFileUrlToPath, URL as topLevelURL } from "url"
const __dirname = topLevelFileUrlToPath(new topLevelURL(".", import.meta.url))

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// packages/core/src/handler.js
var handler = /* @__PURE__ */ __name((lambda) => {
  return async (event, context) => {
    let body, statusCode;
    try {
      body = await lambda(event, context);
      statusCode = 200;
    } catch (e) {
      console.error(e);
      body = { error: e.message };
      statusCode = 500;
    }
    return {
      statusCode,
      body: JSON.stringify(body),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      }
    };
  };
}, "handler");
var handler_default = handler;

// packages/functions/boilers.js
var teams = [
  {
    name: "Legacy",
    logo: "https://img-cdn.hltv.org/teamlogo/RWbHH6RA8uGwJurGeLFvSr.png?ixlib=java-2.1.0&w=100&s=10ff29ff632e0bd82922f4fcd83f930f",
    image: "",
    players: [
      "Guilherme 'guizeraa' Barbosa",
      "Lucas 'lfp1' Prado",
      "Hailton 'vhz' Moraes da Cruz Junior",
      "Guilherme 'rbN' Carvalho"
    ]
  },
  {
    name: "Pichau",
    logo: "https://img-cdn.hltv.org/teamlogo/RWbHH6RA8uGwJurGeLFvSr.png?ixlib=java-2.1.0&w=100&s=10ff29ff632e0bd82922f4fcd83f930f",
    image: "",
    players: [
      "Guilherme 'guizeraa' Barbosa",
      "Lucas 'lfp1' Prado",
      "Hailton 'vhz' Moraes da Cruz Junior",
      "Guilherme 'rbN' Carvalho"
    ]
  },
  {
    name: "Luna Galaxy",
    logo: "https://img-cdn.hltv.org/teamlogo/RWbHH6RA8uGwJurGeLFvSr.png?ixlib=java-2.1.0&w=100&s=10ff29ff632e0bd82922f4fcd83f930f",
    image: "",
    players: [
      "Guilherme 'guizeraa' Barbosa",
      "Lucas 'lfp1' Prado",
      "Hailton 'vhz' Moraes da Cruz Junior",
      "Guilherme 'rbN' Carvalho"
    ]
  }
];
var tourney = {
  name: "Smirzera PUBG League",
  logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic-cdn.jtvnw.net%2Fjtv_user_pictures%2F3d51f715-2b74-46b4-be1a-6744ad2fcf08-profile_image-300x300.png&f=1&nofb=1&ipt=e9186fc5c4ab21c3c95ef87a28184c1a16bd8fa8255665a5158f78ecbdc5cc90&ipo=images",
  games: [],
  results: []
};
var game = {
  teams: [],
  placements: []
};
var boilers_default = {
  teams,
  tourney,
  game
};

// packages/functions/src/teams.js
var teams2 = boilers_default.teams;
var get = handler_default(async (event) => {
  return teams2;
});
var post = handler_default(async (event) => {
  let data;
  if (event.body) {
    data = JSON.parse(event.body);
  }
  teams2.push(data);
  return teams2;
});
export {
  get,
  post
};
//# sourceMappingURL=teams.mjs.map
