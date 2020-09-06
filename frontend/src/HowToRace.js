import React from 'react'
import './resources/HowToRace.css'
import SocialLinks from './SocialLinks'
import { FaFlagCheckered } from 'react-icons/fa'
// import { Link } from 'react-router-dom'

const HowToRace = () => {
  return (
    <div className='how-to-race-container'>
      <h1>How to Race</h1>
      <iframe
        title='How to Race Introduction'
        src='https://www.youtube.com/embed/OZVEpBnRjKw'
        frameborder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      />
      <div className='text-container'>
        <p>The FWLR Grand Prix is an ARG (Alternate Reality Game) which will test your ability to solve puzzles.</p>
        <p>Each song will have a series of puzzles which will start with a link either hidden in the spectral information of the track, or the artwork, or the title, or all of the above.</p>
        <p>A free spectrum analyzer can be found <a href='https://academo.org/demos/spectrum-analyzer/' title='Spectrum analyzer' target='_blank' rel='noopener noreferrer nofollow'>here</a>.</p>
        <p>When each song is released there will be a starting gate which will limit how far each racer can progress. On the first Saturday at 12PM ADT after the song has been released I will provide hints and/or passwords which will allow everyone to move past the starting gate and begin the race.</p>
        {/* <p>There will be a timer leading up to the start of the race <Link to='/races-and-winners' title='Races and winners'>here</Link>.</p> */}
        <p>Once the timer ends it will be replaced with the password/hints. This info will also be posted on The Grand Prix <a href='https://www.reddit.com/r/The_FWLR_Grand' title='FWLR Subreddit' target='_blank' rel='noopener noreferrer nofollow'>subreddit</a>, <a href='https://www.facebook.com/FWLRmusic/' title='FWLR facebook page' target='_blank' rel='noopener noreferrer nofollow'>facebook</a>, <a href='https://twitter.com/FWLRmusic' title='FWLR Twitter' target='_blank' rel='noopener noreferrer nofollow'>twitter</a>, and <a href='https://discord.com/invite/BRhEA8v' title='FWLR Discord' target='_blank' rel='noopener noreferrer nofollow'>discord</a>.</p>
        <p>The first person to cross the finish line will win that race and receive the trophy. You'll know you're at the finish line when you are asked to perform a task and email me a screenshot.</p>
        <p>Each winner can only win once per season (First season is 10 races long).</p>
        <p>The Sunday after each race I will reveal how the race was won.</p>
        <p>
          Let's Race
          <FaFlagCheckered
            size={16}
            className='race-flag'
            color='#fff'
          />
        </p>
      </div>
      <SocialLinks />
    </div>
  )
}

export default HowToRace
