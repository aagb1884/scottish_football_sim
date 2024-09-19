import victoriaPark from '../images/GlobalEnergyStadiumDingwall.jpg';
import tonyMacaroni from '../images/Almondvale_Stadium.jpg';
import celticPark from '../images/Celtic_park_2.jpg';
import tynecastle from '../images/Tynecastle_Park.jpg';
import smisa from '../images/SMISA.jpg';
import greetings from '../images/greetings.jpg';
import gorgieCityFarm from '../images/gorgie-farm.jpg';
import joyfulPeeps from '../images/people_jumping_happiness_happy_fun_young_joy_jump-875444.jpg';
import oldTimeyJourno from '../images/Journalist_With_Pipe.jpg';
import scotsport from '../images/scotsport.jpg';
import sportscene from '../images/sportscene.jpg';
import oofSizeLarge from '../images/oof_size_large.jpg';
import wyvern from '../images/F._21r._Wyvern.jpg';
import christmasPresents from '../images/christmas_present.jpg';
import buckled from '../images/buckled.jpg';
import helloDarkness from '../images/hello_darkness.gif';
import happyNewYear from '../images/happy_new_year.jpg';
import kingsley from '../images/kingsley.jpg';
import hugeMistake from '../images/huge_mistake.jpg';
import turkey from '../images/turkey.jpg';
import ruPaul from '../images/rupaul.jpg';
import meh from '../images/meh.jpg';
import fisticuffs from '../images/Giulio_del_Torre_Zwei_raufende_Buben_1927.jpg';
import kneeInBalls from '../images/Knee_Kick_to_Groin.jpg';
import hairPulling from '../images/The_Laws_of_Hywel_Dda_(f.15.v)_hair_pulling_(cropped).png';
import wallPunch from '../images/Walll_PANCH.jpg';
import jousting from '../images/Paulus_Hector_Mair_Tjost_fig2.jpg';
import bestBoss from '../images/best_boss.jpg';
import bellEnd from '../images/bell_end.jpg';
import windowClosed from '../images/window_closed.jpg';
import playerSigned from '../images/signing1.jpg';
import scarfAloft from '../images/scarf_aloft.jpg';
import scouting from '../images/buy_a_player.jpg';
import buyHim from '../images/buy_a_player2.jpg';
import redknapp from '../images/redknapp.jpg';
import capSoMeme from '../images/cap_so_meme.jpeg';
import deek1 from '../images/deek1.jpg';
import deek2 from '../images/deek2.jpg';
import deek3 from '../images/deek3.jpg';
import deek4 from '../images/deek4.jpg';
import deek5 from '../images/deek5.jpg';
import deek6 from '../images/deek6.jpg';
import deek7 from '../images/deek7.jpg';

const firstNames = ["Chad", "Jortson", "Hot-Tod", "Popey", "Tim", "Jolkien", "Clolin", "Llewelyn", "Alfie", "Josh", "Porous", "Pip", "Dan", "Thanos", "Adamski", "Trey", "Clive", "Harris"];

const lastNames = ["Whittle-Harpington", "Thwenks", "With the good hair", "Borthwick-Juniper", "Fey","Rash", "Swift", "Coldhorn", "Horus", "Cloche","Cummings", "Minsk", "feat. Seal", "Jeevesy", "Dunne-Dunne"];
 
const positions = ["centre back", "left back", "right back", "defensive midfielder", "midfield lynchpin", "ball-playing centre back", "goalkeeper", "no nonsense centre back", "wing back", "midfield enforcer", "spare kidney for Yan Dhanda"];

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

const texts = [
  {
    id: 1,
    date: "19/11/23",
    text: 
`You awake to find yourself manager of Ross County F.C.

 This comes after Malky Mackay was sacked last week for being bad at his job.

Chairman Roy MacGregor said he had "known for a number of years that Derek wanted to come".
"We had 70 applications to go through, but the name Derek Adams kept coming back," he said.
"For us, it was that knowledge, determination and passion for Ross County that was the deciding factors.
"When we decided that was the route we wanted to go, we got on to it fairly quickly over the weekend and, with Morecambe's agreement, we managed to attract Derek back to the club."
This will be your 3rd time managing Ross County.`,
    image: greetings,
    alt: "Distorted image of Derek Adams holding a Ross County scarf above his head.",
    loopCountUpdate: "loopCount",
    options: [
      {
        text: "Let's get cracking",
        nextText: 2,
      },
      {
        text: "Bring it on",
        nextText: 2,
      },
   ]
  },
  {
    id: 2,
    date: "25/11/23",
    text: 
`You are about to play Kilmarnock. 

The game is at Victoria Park, Dingwall.`,
    image: victoriaPark,
    alt: "Victoria Park (aka The Global Energy Stadium), Dingwall.",
    loopCountUpdate: 0,
    options: [
      {
        text: "Muck about with the team, put your own stamp on it",
        nextText: 3,
      },
      {
        text: "Just do what Malky did",
        nextText: 3,
      },
    ]
    },
  {
    id: 3,
    date: "25/11/23",
    text: `You have drawn with Kilmarnock.`,
    image: deek1,
    alt: "Derek Adams biting his lip.",
    loopCountUpdate: 0,
    options: [
      {
        text: "Oh well",
        nextText: 4,
      },
      {
        text: "Fucksake",
        nextText: 5,
      },
    ],
  },
 {
    id: 4,
    date: "28/11/23",
    text: 
`You are about to play The Buddies.

The game will be played at Victoria Park, Dingwall.

You remain optimistic about your chances following the Kilmarnock match.`,
    image: victoriaPark,
    alt: "Victoria Park (aka The Global Energy Stadium), Dingwall.",
    loopCountUpdate: 0,
    options: [
      {
        text: "Same team as last time",
        nextText: 6,
      },
      {
        text: "Make a few tweaks",
        nextText: 7,
      },
    ],
  },
 {
    id: 5,
    date: "28/11/23",
    text: 
`You are about to play The Buddies.

The game will be played at Victoria Park, Dingwall.

You have bollocked the players for not winning the Kilmarnock match.`,
    image: victoriaPark,
    alt: "Victoria Park (aka The Global Energy Stadium), Dingwall.",
    loopCountUpdate: 0,
    options: [
      {
        text: "Wholesale changes to the line-up",
        nextText: 8,
      },
      {
        text: "Make a few tweaks",
        nextText: 7,
      },
    ],    
  },
 {
    id: 6,
    date: "28/11/23",
    text: "You beat The Buddies 1-0! Clever Derek, keeping the team the same!",
    image: deek2,
    alt: "Monochrome image of a relatively happy Derek Adams",
    loopCountUpdate: 0,
    options: [
      {
        text: "Yaaaaas",
        nextText: 9,
      },
      {
        text: "Could have been better though",
        nextText: 10,
      },
    ],
  },
 {
    id: 7,
    date: "28/11/23",
    text: "You beat The Buddies 2-0! Clever Derek!",
    image: deek2,
    alt: "Monochrome image of a relatively happy Derek Adams",
    loopCountUpdate: 0,
    options: [
      {
        text: "Yaaaaaaaaas",
        nextText: 9,
      },
      {
        text: "Could have been better though",
        nextText: 10,
      },
    ],
  },
 {
    id: 8,
    date: "28/11/23",
    text: "You beat The Buddies 5-0! Clever Derek! Here's to the raw power of your bollocks.",
    image: deek2,
    alt: "Monochrome image of a relatively happy Derek Adams",
    loopCountUpdate: 0,
    options: [
      {
        text: "Yaaaaaaaaaaaaaaaas SOON THEY WILL ALL SEE MY POWER",
        nextText: 9,
      },
      {
        text: "Hmmm. That's fine I guess",
        nextText: 10,
      },
    ],
  },
 {
    id: 9,
    date: "28/11/23",
    text: "Everyone loves you. You've brought the feelgood factor back to Dingwall.",
    image: deek3,
    alt: "A very cheerful Derek Adams.",
    loopCountUpdate: 0,
     options: [
      {
        text: "Wee Deek always brings the party!",
        nextText: 11,
      },
      {
        text: "Onwards to the next match lads!",
        nextText: 11,
      }
       ],
  },
 {
    id: 10,
    date: "28/11/23",
    text: "Folk are pretty happy so aren't bothered by your lukewarm response.",
    image: joyfulPeeps,
    alt: "People jumping for joy against the backdrop of a colourful sunset",
    loopCountUpdate: 0,
     options: [
      {
        text: "Right, let's go again then",
        nextText: 11,
      },
      {
        text: "Good because I'm no here to make friends",
        nextText: 11,
      }
    ],
  },
 {
    id: 11,
    date: "04/12/23",
    text: "A press guy with an old timey New York accent asks you how you're feeling about the Motherwell game tomorrow.",
    image: oldTimeyJourno,
    alt: "An Old Timey journalist, probably with a Brooklyn accent, relaying his notes down the phone.",
    loopCountUpdate: 0,
     options: [
      {
        text: "Bring it on, we're on a roll",
        nextText: 12,
      },
      {
        text: "Don't give a shite mate",
        nextText: 13,
      },
    ],
  },
 {
    id: 12,
    date: "04/12/23",
    text: "Everyone is very happy, the journos in the big city think you're just swell",
    image: scotsport,
    alt: "The Scotsport panel discuss the latest news in Scottish football.",
    loopCountUpdate: 0,
     options: [
      {
        text: "Let's crush those Steelmen like Thatcher did",
        nextText: 14,
      },
      {
        text: "I care not for the adulation of fancy central belt types. My heart is here in the high lands with the rural Scotch",
        nextText: 14,
      },
    ],
  },
 {
    id: 13,
    date: "04/12/23",
    text: "The journalist finds your candour refreshing.",
    image: sportscene,
    alt: "Three vague shapes discuss the latest SPFL action.",
    loopCountUpdate: 0,
      options: [
      {
        text: "You do not care. If anything you find the praise of these formless blobs patronising",
        nextText: 14,
      },
      {
        text: "That's nice but your focus is entirely on the next match",
        nextText: 14,
      }
    ],
  },
 {
    id: 14,
    date: "05/12/23",
    text: "Ross County beat Motherwell 3-0!",
    image: deek4,
    alt: "A very chipper Derek Adams.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Yes lads, we thrashed them like an old fashioned school teacher with unprocessed trauma from one of the two major wars of the 20th century would thrash a mildly cheeky schoolboy",
        nextText: 15,
      },
      {
        text: "Lovely stuff, don't get complacent though",
        nextText: 16,
      },
    ],
  },
 {
    id: 15,
    date: "09/12/23",
    text: 
`You are about to play The Buddies. 

The game will be played at The Buddies Park, Paisley.`,

    image: smisa,
    alt: "The Buddies Park (aka The SMISA Stadium), Paisley.",
    loopCountUpdate: 0,
           options: [
      {
        text: "We beat these bigtown scum at our place and we can do it again here!",
        nextText: 17,
      },
      {
        text: "We're on a roll, let's show them what we do",
        nextText: 19,
      },
    ],
  },
 {
    id: 16,
    date: "09/12/23",
    text: 
`You are about to play The Buddies. 

The game is at The Buddies Park, Paisley.`,

    image: smisa,
    alt: "The Buddies Park (aka The SMISA Stadium), Paisley.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Treat this like a new game. A new game of football. Not like a brand new game, like you sometimes get on The Crystal Maze",
        nextText: 18,
      },
      {
        text: "Let's keep it tight at the back, we know we can frustrate them",
        nextText: 19,
      },
    ],
  },

{
    id: 17,
    date: "09/12/23",
    text: 
`The Buddies beat Ross County 3-0.

Manager Derek Adams is asked for his opinion on the match.`,

image: deek6,
alt: "Derek Adams giving an interview",
loopCountUpdate: 0,
           options: [
      {
        text: "Nayhaps I was unwise to fire the lads up so much. It was like Pompeii out there, underwhelming and featuring Kit Harington",
        nextText: 20,
      },
      {
        text: "Well we're going to have to do a lot better against Dundee",
        nextText: 21,
      },
    ],
  },

{
    id: 18,
    date: "09/12/23",
    text: 
`The Buddies beat Ross County 3-0.

Manager Derek Adams is asked for his opinion on the match.`,

    image: deek6,
    alt: "Derek Adams giving an interview",
    loopCountUpdate: 0,
           options: [
      {
        text: "Have you seen the new Crystal Maze? I don't know, I just find Richard Ayaode a bit much",
        nextText: 20,
      },
      {
       text: "Well we're going to have to do a lot better against Dundee",
        nextText: 21,
      },
    ],
  },
{
    id: 19,
    date: "09/12/23",
    text: 
`The Buddies beat Ross County 3-0.

Manager Derek Adams is asked for his opinion on the match.`,

      image: deek6,
      alt: "Derek Adams giving an interview",
      loopCountUpdate: 0,
          options: [
      {
        text: "Have you seen the new Crystal Maze? I don't know, I just find Richard Ayaode a bit much",
        nextText: 20,
      },
      {
          text: "Well we're going to have to do a lot better against Dundee",
        nextText: 21,
      },
    ],
  },

{
    id: 20,
    date: "15/12/23",
    text: 
`You are about to play Dundee.

The game will be played at Victoria Park, Dingwall.`,

    image: victoriaPark,
    alt: "Victoria Park (aka The Global Energy Stadium), Dingwall.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Look you were unlucky in the last game. We just need to put the ball in the net",
        nextText: 21,
      },
      {
          text: "Home advantage should see us vanquish these jute-eating surrender monkeys",
        nextText: 21,
      },
    ],
  },

{
    id: 21,
    date: "16/12/23",
    text: 
"You got beat by Dundee.",

    image: deek7,
    alt: "Derek Adams closes his eyes and makes a decision.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Remind the players that you've been creating chances and if they keep playing like this they'll be okay, they were just unlucky tonight",
        nextText: 22
      },
      {
          text: "Announce that Scottish football is so bad you'd rather wear a suit where a pipe connected your mouth and anus at all times. Sky would be better off buying the rights to an international de-gloving tournament. Watching Scottish football makes you feel like joining a death cult.  You'd rather watch reruns of 9/11. To cheer yourself up you're going home to sit in the dark and think about the last time you saw your dad",
        nextText: 23
      },
    ],
  },

{
    id: 22,
    date: "16/12/23",
    text: "On second thoughts…",
    image: deek7,
    alt: "Derek Adams closes his eyes and makes a decision.",
    loopCountUpdate: 0,
           options: [
            {
                text: "Announce that Scottish football is so bad you'd rather wear a suit where a pipe connected your mouth and anus at all times. Sky would be better off buying the rights to an international de-gloving tournament. Watching Scottish football makes you feel like joining a death cult.  You'd rather watch reruns of 9/11. To cheer yourself up you're going home to sit in the dark and think about the last time you saw your dad",
              nextText: 23
            },
            {
              text: "Same thing but in a bad Spanish accent",
            nextText: 23
          },
    ],
  },

{
    id: 23,
    date: "16/12/23",
    text: 
"You have upset your players, your fans, your chairman, all other players and fans, pundits and your mum.",

    image: deek5,
    alt: "Derek looks into the middle distance.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Ach fine, it'll all blow over",
        nextText: 24
      },
      {
        text: "Don't back down, double down",
        nextText: 24
      }
    ],
  },

{
    id: 24,
    date: "22/12/23",
    text: 
"All week people have been talking about your comments about Scottish Football. You'll be glad just to get back to football after that, starting with tomorrow's game against Hibs.",

    image: oofSizeLarge,
    alt: "A dial marked 'OOF SIZE' set to 'Large'.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Prepare a mid-block press with a quick release to your most creative player. Let's get them on the break. This is going to surprise people",
        nextText: 25
      },
      {
        text: "Update your list of enemies",
        nextText: 25
      }
    ],
  },

{
    id: 25,
    date: "23/12/23",
    text: 
"The game against Hibs has been postponed due to an escaped wyvern.",

    image: wyvern,
    alt: "A wyvern, as seen in a 14th century Welsh manuscript.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Ah well, let's look forward to the next game",
        nextText: 26
      },
      {
        text: "Always the bloody wyverns",
        nextText: 26
      }
    ],
  },

{
    id: 26,
    date: "26/12/23",
    text: 
"Your next game is against Rangers, a team Ross County have never beaten.",

    image: helloDarkness,
    alt: "Ben Affleck looking sad.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Right, well, we'll just call that a free hit I guess",
        nextText: 27
      },
      {
        text: "Nice, this gives me more time to play with my Christmas presents",
        nextText: 28
      },
    ]},
{
    id: 27,
    date: "28/12/23",
    text: 
`Your next game is against Hearts.

The game will be played at Tynecastle, Edinburgh.`,

    image: tynecastle,
    alt: "Tynecastle, Edinburgh.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Oh nice, we can visit Gorgie City Farm",
        nextText: 30
      },
      {
        text: "Okay, let's focus our energies on this game",
        nextText: 29
      },
    ]
},

{
    id: 28,
    date: "27/12/23",
    text: 
"Mmmrrrrrrrrow, ptchee ptchee, ratatatatatata",

    image: christmasPresents,
    alt: "Derek with his Christmas Presents.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Continue rescuing the Princess from the evil",
        nextText: 27
      },
      {
        text: "Continue eating turkey, your favourite meat",
        nextText: 27
      }

    ],
  },

{
    id: 29,
    date: "30/12/23",
    text: 
"You are winning 2-0 at Hearts with twenty minutes to go!",

    image: turkey,
    alt: "Delicious turkey",
    loopCountUpdate: 0,
           options: [
      {
        text: "Continue eating turkey, your favourite meat",
        nextText: 31
      },
{
        text: "Maybe chuck Eamonn Brophy on, you've basically won this",
        nextText: 31
      }
    ],
  },

{
    id: 30,
    date: "30/12/23",
    text: "Gorgie City Farm has closed.",
    image: gorgieCityFarm,
    alt: "Gorgie City Farm with a 'Regrettably we are closed' sign on the gate.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Tell yourself there will be another chance to feed a llama some pellets",
        nextText: 29
      },
      {
        text: "Sit outside in a huff while your assistant does the first half",
        nextText: 29
      }
    ],
  },
{
    id: 31,
    date: "30/12/23",
    text: 
"You have drawn 2-2 with Hearts!",

    image: buckled,
    alt: "Collapsing on the floor, as if giving up",
    loopCountUpdate: 0,
                  options: [
      {
        text: "Warn the players that you'll be seeking reinforcements in the transfer window",
        nextText: 32
      },
      {
        text: "Talk about how great that game was in an optimistic bid to walk back that whole “Scottish football is shite” thing",
        nextText: 34
      }
    ],
  },
  {
    id: 32,
    date: "01/01/24",
    text: "Do you want to buy a player?",
    image: scouting,
    alt: "Coaches and scouts assessing a player.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Yes",
        nextText: 33
      },
    {
        text: "Actually no",
        nextText: 34
      },
    ],
  },

  {
    id: 33,
    date: "01/01/24",
    text: `You have loaned ${getRandomItem(firstNames)} ${getRandomItem(lastNames)}, a ${getRandomItem(positions)}. You're sure he can make a big contribution.`,
    image: playerSigned,
    alt: "A player signing a contract",
           options: [
      {
        text: "Get him straight in the first team",
        nextText: 35
      },
      {
        text: "Ease him into the picture, don't rush things",
        nextText: 34
      },
    ],
  },
{
    id: 34,
    date: "02/01/24",
    text: 
`You are about to play Aberdeen.

The game will be played at Victoria Park, Dingwall.

You remain optimistic about your chances following the Hearts match.`,

    image: victoriaPark,
    alt: "Victoria Park (aka The Global Energy Stadium), Dingwall.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Tell the players that if they carry on their performance from the last match, you'll do well here",
        nextText: 35
      },
      {
        text: "Tell the players in no uncertain terms they must defend better in this match",
        nextText: 35
      }
    ],
  },
{
    id: 35,
    date: "02/01/24",
    text: "Aberdeen gub you 3-0.",
    image: happyNewYear,
    alt: "Happy New Year from everyone at Aberdeen Football Club",
    loopCountUpdate: 0,
           options: [
      {
        text: "Right. We're going to have to get some new players",
        nextText: 36
      },
      {
        text: "Ah well, nevertheless",
        nextText: 38
      }
    ],
  },
  {
    id: 36,
    date: "03/01/24",
    text:  "Do you definitely want to buy a player?",
    image: buyHim,
    alt: "Derek Adams pointing at the player he wants.",
    loopCountUpdate: 0,
           options: [
      {
text: "Yes",
        nextText: 37
      },
      {
text: "Actually no",
        nextText: 38
      },
    ],
  },
{
    id: 37,
    date: "03/01/24",
    text: `You have loaned ${getRandomItem(firstNames)} ${getRandomItem(lastNames)}, a ${getRandomItem(positions)}. How do you welcome him to the club?`,
    image: scarfAloft,
    alt: "A blurred image of a new signing, Ross County scarf aloft",
    loopCountUpdate: 0,
           options: [
{
text: "Mandatory Roshambo Nut-Kicking Tournament",
        nextText: 38
      },
{
text: "Sensory deprivation tank for first 24 hours",
        nextText: 38
      },

    ],
  },

{
    id: 38,
    date: "05/01/24",
    text: "You are now on a mid-season break, returning to action against Partick Thistle in the Scottish Cup on the 20th.",
    image: kingsley,
    alt: "Kingsley, the Partick Thistle mascot.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Right. We're going to have to get some new players",
        nextText: 39
      },
      {
    text: "Continue eating turkey, your favourite meat",
        nextText: 41
      }
    ],
  },
  {
    id: 39,
date: "06/01/24",
    text: 
"You're sure you want to buy a player?",

image: scouting,
alt: "Coaches and scouts assessing a player.",
loopCountUpdate: 0,
           options: [
{
text: "Yes",
        nextText: 40
      },
{
text: "Actually no",
        nextText: 41
      },

    ],
  },

{
    id: 40,
date: "06/01/24",
text: `You have loaned ${getRandomItem(firstNames)} ${getRandomItem(lastNames)}, a ${getRandomItem(positions)}. You're pretty excited about this one.`,

image: playerSigned,
alt: "A player signing a contract",
loopCountUpdate: 0,
           options: [
{
text: "Get him right out on the pitch immediately",
        nextText: 41
      },
{
text: "Wait until there's actually a match on to get him out on the pitch",
        nextText: 41
      },

    ],
  },
{
    id: 41,
    date: "20/01/24",
    text: 
`You are about to play Partick Thistle.

The game will take place at Victoria Park, Dingwall.

You are optimistic following last season's play-off triumph.`,

    image: victoriaPark,
    alt: "Victoria Park (aka The Global Energy Stadium), Dingwall.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Come on lads, a cup run will give us a cause for optimism",
        nextText: 42
      },
      {
        text: "Let's tear into this shite. They're not even from Partick, so their positioning is bound to be bad",
        nextText: 43
      }
    ],
  },
{
    id: 42,
    date: "20/01/24",
    text: 
"You have lost 3-0 at home to Partick Thistle.",

    image: deek1,
    alt: "Derek Adams biting his lip.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Right. We're going to have to get some new players",
        nextText: 44
      },
      {
        text: "For fucksake",
        nextText: 46
      }
    ],
  },
{
    id: 43,
    date: "20/01/24",
    text: "You have lost 12-0 at home to Partick Thistle.",
    image: deek7,
    alt: "Derek Adams closes his eyes.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Right. We're going to have to get some new players",
        nextText: 44
      },
      {
        text: "For fucksake",
        nextText: 46
      }
    ],
  },

  {
    id: 44,
    date: "21/01/24",
    text: "Do you want to buy a player? For realsies?",
    image: buyHim,
    alt: "Derek Adams pointing at the player he wants.",
    loopCountUpdate: 0,
           options: [
{
text: "Yes",
        nextText: 45
      },
{
text: "Actually no",
        nextText: 46
      },

    ],
  },

{
    id: 45,
    date: "21/01/24",
    text: `You have loaned ${getRandomItem(firstNames)} ${getRandomItem(lastNames)}, a ${getRandomItem(positions)}. So that's nice.`,
    image: scarfAloft,
    alt: "A blurred image of a new signing, Ross County scarf aloft",
    loopCountUpdate: 0,
    options: [
{
text: "Yep",
        nextText: 46
      },
{
text: "You feel a brief twinge of hope",
        nextText: 46
      },

    ],
  },

{
    id: 46,
    date: "23/01/24",
    text: "After losing at home to Partick Thistle the media are asking you if you're happy at Ross County.",
    image: hugeMistake,
    alt: "GOB Bluth from Arrested Development acknowledging that he's made a huge mistake.",
    loopCountUpdate: 0,
           options: [
      {
        text: "I'm so happy. We're terribly in love",
        nextText: 47
      },
      {
        text: "What is joy?",
        nextText: 47
      }
    ],
  },
{
    id: 47,
    date: "23/01/24",
    text: "Derek, do you think you have what it takes to bounce back in the next game?",
    image: deek2,
    alt: "Monochrome image of a relatively happy Derek Adams",
    loopCountUpdate: 0,
           options: [
      {
        text: "Oh aye, no bother",
        nextText: 48
      },
      {
        text: "Maybe, yeah. Who are we playing again?",
        nextText: 48
      }  
 ],
  },
{
    id: 48,
    date: "26/01/24",
    text: 
`You are playing Celtic tomorrow.

The game will take place at Celtic Park, Glasgow.`,

    image: celticPark,
    alt: "Celtic Park, Glasgow",
    loopCountUpdate: 0,
           options: [
      {
        text: "Right. We're going to have to get some new players",
        nextText: 49
      },
      {
        text: "For fucksake",
        nextText: 51
      }
    ],
  },
  {
    id: 49,
date: "26/01/24",
    text: 
"So, you want to buy a player?",

image: capSoMeme,
alt: "Captain America 'So...' meme image",
loopCountUpdate: 0,
           options: [
{
text: "Yes",
        nextText: 50
      },
{
text: "Actually no",
        nextText: 41
      },

    ],
  },

{
    id: 50,
date: "26/01/24",
text: `You have loaned ${getRandomItem(firstNames)} ${getRandomItem(lastNames)}, a ${getRandomItem(positions)}. Chuck 'em in at the deep end?`,
image: playerSigned,
alt: "A player signing a contract",
loopCountUpdate: 0,
           options: [
{
text: "Yeah",
        nextText: 51
      },
{
text: "Do you know what I miss? 'Space Precinct'. Now that was television",
        nextText: 51
      },

    ],
  },
{
    id: 51,
    date: "27/01/24",
    text: "You are about to play Celtic. What do you say to motivate your players?",
    image: ruPaul,
    alt: "RuPaul saying 'And don't fuck it up'.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Let's just get this over with",
        nextText: 52
      },
      {
        text: `There's a man I meet, walks up our street
              He's a worker for the council
              Has been twenty years...`,
        nextText: 52
      }
    ],
  },
{
    id: 52,
    date: "27/01/24",
    text: "You have lost 1-0 to Celtic.",
    image: meh,
    alt: "RuPaul saying 'Meh'.",
    loopCountUpdate: 0,
           options: [
            {
        text: "Could have been worse",
        nextText: 53
            },
            {
        text: "Ask Brendan Rodgers for management advice",
        nextText: 53
            }
    ],
  },
{
    id: 53,
    date: "29/01/24",
    text: 
`You are about to play Livingston tomorrow.

The game will take place at the Tony Macaroni Arena, Livingston.

Winning the game will pull you level on points with St Johnstone.

Livingston have been dogshit all season.`,

    image: tonyMacaroni,
    alt: "The Tony Macaroni Arena (aka Almondvale Stadium), Livingston.",
    loopCountUpdate: 0,
           options: [
          {
        text: "Come on lads, if you put the same effort you put into the Celtic match you'll win here",
        nextText: 56
          },
          {
        text: "Maybe I should just sign one more player, just in case",
        nextText: 54
      },
    ],
  },
  {
    id: 54,
date: "29/01/24",
    text: 
"Do you definitely want to buy a player?",

    image: buyHim,
    alt: "Derek Adams pointing at the player he wants.",
    loopCountUpdate: 0,
           options: [
{
text: "Yes",
        nextText: 55
      },
{
text: "Actually no",
        nextText: 56
      },

    ],
  },

{
    id: 55,
    date: "29/01/24",
    text: `You have loaned ${getRandomItem(firstNames)} ${getRandomItem(lastNames)}, a ${getRandomItem(positions)}. This one'll be the difference-maker.`,
    image: scarfAloft,
    alt: "A blurred image of a new signing, Ross County scarf aloft",
    loopCountUpdate: 0,
           options: [
{
text: "100%",
        nextText: 56
      },
{
text: "47%",
        nextText: 56
      },

    ],
  },
{
    id: 56,
    date: "30/01/24",
    text: 
"You are 1-0 up against Livingston with a minute to go before half-time.",

image: ruPaul,
alt: "RuPaul saying 'And don't fuck it up'.",
loopCountUpdate: 0,
           options: [
      {
        text: "I've got a good feeling about this",
        nextText: 57
      },
      {
        text: "I've got a bad feeling about this",
        nextText: 57
      },
    ],
  },
{
    id: 57,
    date: "30/01/24",
    text: "Livingston equalise before half time.",
    image: hugeMistake,
    alt: "GOB Bluth from Arrested Development acknowledging that he's made a huge mistake.",
    loopCountUpdate: 0,
           options: [
        {
        text: "Go out and win the second half",
        nextText: 58
        },
        {
        text: "I've brought in motivational speaker Gordon Ramsay",
        nextText: 58
      },
    ],
  },
{
    id: 58,
    date: "30/01/24",
    text: "You are 2-1 up against Livingston with five minutes to go.",
    image: ruPaul,
    alt: "RuPaul saying 'And don't fuck it up'.",
    loopCountUpdate: 0,
    options: [
      {
        text: "I've got a good feeling about this",
        nextText: 59
      },
      {
        text: "I've got a bad feeling about this",
        nextText: 59
      },
    ],
  },
{
    id: 59,
    date: "30/01/24",
    text: "You have drawn 2-2 with Livingston.",
    image: buckled,
    alt: "Collapsing on the floor, as if giving up",
    loopCountUpdate: 0,
           options: [
      {
        text: "Okay, we have a problem seeing out games. Time to go into the transfer market",
        nextText: 60
      },
      {
        text: "Yell 'You're a useless prick' at guest motivation speaker Gordon Ramsay",
        nextText: 62
      },
    ],
  },
  {
    id: 60,
    date: "31/01/24",
    text: "Do you want to buy a player?",
    image: redknapp,
    alt: "Harry Redknapp in his car on transfer deadline day.",
    loopCountUpdate: 0,
           options: [
{
text: "Yes",
        nextText: 61
      },
{
text: "Actually no",
        nextText: 65
      },

    ],
  },

{
    id: 61,
    date: "31/01/24",
    text: `You have loaned ${getRandomItem(firstNames)} ${getRandomItem(lastNames)}, a ${getRandomItem(positions)}. He'll be great. You can feel it in your bones.`,
    image: playerSigned,
    alt: "A player signing a contract",
    loopCountUpdate: 0,
           options: [
{
text: "Here we, here we, here we fucking go",
        nextText: 65
      },
{
text: "I should probably stop fingering my bones",
        nextText: 65
      },

    ],
  },
{
    id: 62,
    date: "30/01/24",
    text: "You are fighting Gordon Ramsay.",
    image: fisticuffs,
    alt: "Painting by Giulio del Torre: 'Zwei raufende Buben' (Two Scuffling Boys) 1927.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Knee him in the bollocks",
        nextText: 63
      },
      {
        text: "Pull his hair",
        nextText: 64
      },
    ],
  },
{
    id: 63,
    date: "30/01/24",
    text: "You knee Gordon Ramsay in the bollocks. He goes down like Martin Boyle.",
    image: kneeInBalls,
    alt: "A knee to the balls.",
    loopCountUpdate: 0,
           options: [
      {
        text: "You roar 'That's what we're gonna do to St Johnstone'",
        nextText: 66
      },
      {
        text: "The team look up at you. You think you detect a newfound respect in their eyes. You wordlessly rip Ramsay's throat out like Swayze in Road House, and march out of the room",
        nextText: 65
      },
    ],
  },
{
    id: 64,
    date: "30/01/24",
    text: 
"You pull Gordon Ramsay's hair and he screams a feral scream, digging his nails into your wrists. By the time the fight is done you're both in bloody rags, panting in the changing room. Everyone has gone home apart from you and Ramsay. You agree to call it a draw, but at the back of your mind your subconscious tells you 'Draws are no good at this time of the season'.",

    image: hairPulling,
    alt: "An illustration from a mid-13th century Welsh manuscript.",
    loopCountUpdate: 0,
           options: [
      {
        text: "Consider Heston Blumenthal for the next team talk",
        nextText: 66
      },
      {
        text: "Go home and watch 'Road House'",
        nextText: 65
      },

    ],
  },
  {
    id: 65,
    date: "03/02/24",
    text: 
`You are about to play St Johnstone, who are one place above you in the table. 

The game is at Victoria Park, Dingwall.`,
    image: victoriaPark,
    alt: "Victoria Park (aka The Global Energy Stadium), Dingwall.",
    loopCountUpdate: 0,
           options: [
{
        text: "Come on lads, their defence is about 103 years old. Let's do this",
        nextText: 66
      },
{
        text: "Come on lads, their only good striker is basically dead. Let's do this",
        nextText: 66
      },
    ]
  },
{
    id: 66,
    date: "03/02/24",
    text: 
`You lose 1-0 to St Johnstone.

It is their first away win of the season.`,

    image: helloDarkness,
    alt: "Ben Affleck looking sad.",
    loopCountUpdate: 0,
           options: [
{
        text: "Punch a wall",
        nextText: 68
      },
{
        text: "Dip into the transfer market",
        nextText: 67
      },
    ]
  },
  {
    id: 67,
    date: "03/02/24",
    text: "The transfer window is closed, you idiot.",
    image: windowClosed,
    alt: "The Transfer Window has closed.",
    loopCountUpdate: 0,
            options: [
{
text: "You kick the wall",
        nextText: 68
      },
      {
        text: "You tell the wall you'll get it next time",
                nextText: 69
      },
    ],
  },

{
    id: 68,
    date: "04/02/24",
    text: 
"The janny gives you a right nagging for damaging the plaster in the changing rooms.",

    image: wallPunch,
    alt: "A man punching a hole in a wall.",
    loopCountUpdate: 0,
           options: [
{
        text: "Meekly apologise",
        nextText: 69
      },
{
        text: "Fight the janny",
        nextText: 70
      },

    ],
  },
{
    id: 69,
    date: "04/02/2",
    text: "The janny tells you that you'd better not fuck it up against Motherwell.",
    image: ruPaul,
    alt: "RuPaul saying 'And don't fuck it up'.",
    loopCountUpdate: 0,
           options: [
{
        text: "You confidently state that you absolutely will not fuck it up against Motherwell",
        nextText: 71
      },
{
        text: "You say you'll do your best",
        nextText: 72
      },
    ],
  },
{
    id: 70,
    date: "04/02/24",
    text: 
"The janny bests you in a medieval joust. You curse yourself for allowing him to pick the format of your battle.",

    image: jousting,
    alt: "16th Century German jousting",
    loopCountUpdate: 0,
           options: [
{
    text: "Buy a 4-pack of Aldi-brand Deep Heat and suck it up",
    nextText: 69
      },
{
    text: "Apologise to the groundsperson for all the hoofprints on the pitch",  
    nextText: 69
      },
    ],
  },
{
    id: 71,
    date: "06/02/24",
    text: "You have lost 5-0 against Motherwell.",
    image: deek7,
    alt: "Derek Adams closes his eyes and makes a decision.",
    loopCountUpdate: 0,
           options: [
{
        text: "As each player enters the dressing room, you ring a bell at them and intone SHAME",
        nextText: 73
      },
{
        text: "You decide to have a word with the Chairman",
        nextText: 75
      },

    ],
  },
{
    id: 72,
    date: "06/02/24",
    text: "You have lost 15-0 to Motherwell.",
    image: bestBoss,
    alt: "Blurred image of Steve Carrell in 'The Office' holding mug reading 'World's best boss'.",
    loopCountUpdate: 0,

           options: [
{
        text: "You tell the team that you are going to find their mums and tell them what a disappointment they are",
        nextText: 74
      },
{
        text: "You decide to go to speak to the Chairman",
        nextText: 75
      },

    ],
  },
{
    id: 73,
    date: "06/02/24",
    text: 
"The players grab the bell off you and point to the end of it and say 'That's you that is'. The chairman comes in to see what all the noise is about. You are immediately fired.",

    image: bellEnd,
    alt: "Street sign in Rowley Regis: 'Bell End'.",
    loopCountUpdate: 1,
           options: [
{
        text: "Tell people you have resigned as manager of Ross County Football Club, and go update your LinkedIn profile.",
        nextText: 1
      },
      {
        text: "Ask Michael Beale and Lee Johnson if you can join their WhatsApp group",
        nextText: 1
              }

    ],
  },
{
    id: 74,
    date: "06/02/24",
    text: 
"The players' mums hear about your behaviour, and surround you in the car park. They take hold of your limbs and pull, like that bit with the horses in the film Black Death. You are saved at the last minute by the chairman riding in on a horse, fending them off with a sabre. As he grabs you from the melee and pulls you onto his horseback, he hands you your P45.",

    image: kneeInBalls,
    alt: "A knee to the balls.",
    loopCountUpdate: 1,
    options: [
  {
          text: "Tell people you have resigned as manager of Ross County Football Club, and go update your LinkedIn profile",
          nextText: 1
        },
        {
          text: "Ask Michael Beale and Lee Johnson if you can join their WhatsApp group",
          nextText: 1
                }
  
      ],
  },
{
    id: 75,
    date: "07/02/24",
    text: "Everyone hates you. You go to the Chairman and offer him your resignation.",
    image: buckled,
    alt: "Collapsing on the floor, as if giving up",
    loopCountUpdate: 1,
    options: [
      {
        text: "Tell people you have resigned as manager of Ross County Football Club, and go update your LinkedIn profile",
        nextText: 1
            },
            {
              text: "Ask Michael Beale and Lee Johnson if you can join their WhatsApp group",
        nextText: 1
                    }
          ],
  },
];



export default texts;
