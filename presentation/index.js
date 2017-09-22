import React from 'react'
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Notes,
  Quote,
  S,
  Slide,
  Text,
} from 'spectacle'
import CodeSlide from 'spectacle-code-slide'
import preloader from 'spectacle/lib/utils/preloader'
import createTheme from 'spectacle/lib/themes/default'
import styled from 'styled-components'
import TweetEmbed from 'react-tweet-embed'
import Remarkable from 'remarkable'
const md = new Remarkable()

require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const Logos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const T = styled.span`white-space: nowrap;`

const images = {
  logoFE: require('../assets/freshember-ember.png'),
  logoGotchee: require('../assets/gotchee-logo.svg'),
  logoRL: require('../assets/rl.svg'),
  logo3blades: require('../assets/3blades.svg'),
  soc: require('../assets/separation-of-concerns.jpg'),
  scLogo: require('../assets/styled-components.svg'),
  better: require('../assets/better-how.jpg'),
}

preloader(images)

// From https://github.com/JesseLeite/an-old-hope-syntax-atom/blob/master/styles/colors.less
const theme = createTheme(
  {
    primary: '#1c1d21',
    secondary: '#ef7c2a',
    tertiary: '#4fb4d8',
    quarternary: '#eb3d54',
  },
  {
    primary: 'Montserrat',
    secondary: 'Source Sans Pro',
  },
)

export default function Presentation() {
  return (
    <Deck
      transition={['slide']}
      transitionDuration={600}
      progress="bar"
      theme={theme}
      controls={false}
      contentWidth={1800}
      contentHeight={1000}
    >
      <Slide bgColor="tertiary">
        <Heading caps lineHeight={1.4} textColor="primary">
          <T>CSS-in-React</T> with <T>styled-components</T>
        </Heading>
      </Slide>
      <Slide>
        <Heading lineHeight={1.4}>Ray Gesualdo</Heading>
        <Logos>
          <Appear>
            <Image
              src={images.logoFE}
              height={150}
              style={{ marginLeft: '3rem', marginRight: '3rem' }}
            />
          </Appear>
          <Appear>
            <Image
              src={images.logoGotchee}
              height={170}
              style={{ marginLeft: '3rem', marginRight: '3rem' }}
            />
          </Appear>
          <Appear>
            <Image
              src={images.logoRL}
              height={130}
              style={{ marginLeft: '3rem', marginRight: '3rem' }}
            />
          </Appear>
          <Appear>
            <Image
              src={images.logo3blades}
              height={150}
              style={{ marginLeft: '3rem', marginRight: '3rem' }}
            />
          </Appear>
        </Logos>
      </Slide>
      <Slide>
        <Image src={images.scLogo} width={700} />
        <Notes>
          {md.render(`
- Discuss Kurt's approach
- Content is from discussion with him
          `)}
        </Notes>
      </Slide>
      <Slide>
        <Heading lineHeight={1.4}>
          <S type="" textColor="quarternary">styled-components</S> makes writing CSS <S type="" textColor="secondary">better</S>!
        </Heading>
      </Slide>
      <Slide>
        <Image src={images.better} />
        <Notes>
          {md.render(`
- Fast
- Scalable
- Modular
- Componentized
- Declarative
          `)}
        </Notes>
      </Slide>
      <Slide>
        <Heading>CSS-in-JS</Heading>
        <Notes>
          {md.render(`
- A new way to manage CSS
          `)}
        </Notes>
      </Slide>
      <Slide>
        <Layout>
          <Fill />
          <Fill>
            <style>{`.twitter-tweet { transform: scale(2) !important; }`}</style>
            <TweetEmbed id='869848062923087872' />
          </Fill>
          <Fill />
        </Layout>
      </Slide>
      <Slide>
        <Heading>Separation of Concerns</Heading>
        <Notes>
          {md.render(`
- Docs vs Apps
- Components
          `)}
        </Notes>
      </Slide>
      <Slide>
        {/* From https://speakerdeck.com/didoo/let-there-be-peace-on-css */}
        <Image src={images.soc} />
        <Notes>
          {md.render(`
- The axis of separation changes
          `)}
        </Notes>
      </Slide>
      <Slide>
        <Image src={images.scLogo} width={700} />
        <Notes>
          {md.render(`
- Components!
- Quick run through of how styled-components works
          `)}
        </Notes>
      </Slide>
      <Slide>
        <Heading>Simple Example</Heading>
        <Notes>
          {md.render(`
- Import
- No build requirements
- Template string literals
- Tags
- Returns a component
          `)}
        </Notes>
      </Slide>
      <Slide>
        <Heading textSize={220}>🤘🤘🤘🤘🤘</Heading>
        <Notes>
          {md.render(`
- Extensible
- 3rd-party styling
- SSR & Babel plugin
- Themable
- Declaritive
          `)}
        </Notes>
      </Slide>
      <Slide>
        <Heading>Complex Example</Heading>
        <Notes>
          {md.render(`
- Passed props
- Responding to props
- .withComponent
- .extends
- .attrs
          `)}
        </Notes>
      </Slide>
      <Slide>
        <Heading>More To Learn</Heading>
        <List>
          <Appear>
            <ListItem>Animations</ListItem>
          </Appear>
          <Appear>
            <ListItem>Global Styles</ListItem>
          </Appear>
          <Appear>
            <ListItem>Theming</ListItem>
          </Appear>
          <Appear>
            <ListItem>JavaScript "mixins"</ListItem>
          </Appear>
          <Appear>
            <ListItem>CSS-in-JS helper libraries (e.g. polished)</ListItem>
          </Appear>
          <Appear>
            <ListItem>Prettier support/Linting</ListItem>
          </Appear>
          <Appear>
            <ListItem>Server-side Rendering</ListItem>
          </Appear>
          <Appear>
            <ListItem>React-Native support</ListItem>
          </Appear>
          <Appear>
            <ListItem>Static typing</ListItem>
          </Appear>
        </List>
      </Slide>
      <Slide bgColor="tertiary">
        <Heading caps lineHeight={1.4} textColor="primary">
          <T>CSS-in-React</T> with <T>styled-components</T>
        </Heading>
      </Slide>
      <Slide>
        <Heading fit lineHeight={1.4}>
          <Link href="https://rayg.me/lukeskywalker" textColor="secondary">
            rayg.me/lukeskywalker
          </Link>
        </Heading>
        <Link
          href="https://twitter.com/raygesualdo"
          textColor="quarternary"
          textSize="7vh"
        >
          @raygesualdo
        </Link>
        <br />
        <Link
          href="https://github.com/raygesualdo"
          textColor="quarternary"
          textSize="7vh"
        >
          github.com/raygesualdo
        </Link>
        <br />
        <Link
          href="https://raygesualdo.com"
          textColor="quarternary"
          textSize="7vh"
        >
          raygesualdo.com
        </Link>
      </Slide>
      <Slide>
        <Heading>Resources</Heading>
        <List lineHeight={2}>
          <ListItem>
            <Link
              href="https://github.com/styled-components/styled-components"
              textColor="secondary"
            >
              styled-components Repo<br />&nbsp;
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.styled-components.com/docs"
              textColor="secondary"
            >
              styled-components Docs<br />&nbsp;
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://codesandbox.io/s/qvy8lwqz26"
              textColor="secondary"
            >
              Connect.Tech 2017 styled-components Simple Example - Final<br />&nbsp;
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://codesandbox.io/s/81pwqx7v2l"
              textColor="secondary"
            >
              Connect.Tech 2017 styled-components Complex Example - Final<br />&nbsp;
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"
              textColor="secondary"
            >
              MDN's docs on template literals<br />&nbsp;
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660"
              textColor="secondary"
            >
              Article: A Unified Styling Language<br />&nbsp;
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://polished.js.org/"
              textColor="secondary"
            >
              Library: Polished<br />&nbsp;
            </Link>
          </ListItem>
        </List>
      </Slide>
    </Deck>
  )
}
