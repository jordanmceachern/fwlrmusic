import React from 'react'
import './resources/SocialLinks.css'
import { FaDiscord, FaSoundcloud, FaInstagram, FaYoutube, FaTwitter, FaFacebookF, FaSnapchatGhost, FaRegCopyright } from 'react-icons/fa'
import { RiSpotifyLine } from 'react-icons/ri'

const SocialLinks = () => {
  return (
    <>
      <div className='social-links-container'>
        <a
          href='https://discord.gg/QX9K8TY'
          target='_blank'
          className='social-link'
          rel='noopener noreferrer nofollow'
          title='Discord'
        >
          <FaDiscord
            size={60}
            color='#fff'
          />
        </a>
        <a
          href='https://open.spotify.com/artist/1bgWqGp78w6C8CNPvD6Qlo?si=tf8ZStfATI6V7eY-3uzo4A'
          target='_blank'
          className='social-link'
          rel='noopener noreferrer nofollow'
          title='Spotify'
        >
          <RiSpotifyLine
            size={60}
            color='#fff'
          />
        </a>
        <a
          href='https://www.soundcloud.com/FWLRmusic'
          target='_blank'
          className='social-link'
          rel='noopener noreferrer nofollow'
          title='Soundcloud'
        >
          <FaSoundcloud
            size={60}
            color='#fff'
          />
        </a>
        <a
          href='https://www.Instagram.com/FWLRmusic'
          target='_blank'
          className='social-link'
          rel='noopener noreferrer nofollow'
          title='Instagram'
        >
          <FaInstagram
            size={60}
            color='#fff'
          />
        </a>
        <a
          href='https://www.youtube.com/FWLRmusic'
          target='_blank'
          className='social-link'
          rel='noopener noreferrer nofollow'
          title='Youtube'
        >
          <FaYoutube
            size={60}
            color='#fff'
          />
        </a>
        <a
          href='https://www.twitter.com/FWLRmusic'
          target='_blank'
          className='social-link'
          rel='noopener noreferrer nofollow'
          title='Twitter'
        >
          <FaTwitter
            size={60}
            color='#fff'
          />
        </a>
        <a
          href='https://www.facebook.com/FWLRmusic'
          target='_blank'
          className='social-link'
          rel='noopener noreferrer nofollow'
          title='Facebook'
        >
          <FaFacebookF
            size={60}
            color='#fff'
          />
        </a>
        <a
          href='https://www.snapchat.com/add/FWLRmusic'
          target='_blank'
          className='social-link'
          rel='noopener noreferrer nofollow'
          title='Snapchat'
        >
          <FaSnapchatGhost
            size={60}
            color='#fff'
          />
        </a>
      </div>
      <p className='copyright'><FaRegCopyright className='copyright-icon' size={16} color='#fff' />Copyright {new Date().getFullYear()}</p>
    </>
  )
}

export default SocialLinks
