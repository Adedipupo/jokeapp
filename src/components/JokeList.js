import React from 'react';
import Joke from './Joke'

const JokeList = () => {
return(
  <div>
        <Joke
            question="You look Ugly"
            punchline="I was trying to look like today"
        />
        <Joke
            question="I slept with ur mom yesterday night"
            punchline="Now we're even!"
        />
        <Joke
            question="Ask me out"
            punchline="Get Out !!!"
        />
        <Joke
            question="You like the way i speak ??"
            punchline="Dude, you speak utter crap !!!"
        />
        <Joke
            question="You failed !!!"
            punchline="Same way ur fathers condom failed... "
        />
  </div>
)
}

export default JokeList;