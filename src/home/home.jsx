import h from '@h'
import gps from '@gps'
import RexJS from '../favicon.png'
import style from './style.css'

gps(/^\/$/, () =>
  document.body.appendChild(
    <main className={style.home}>
      <img is='lazy-load' className={style.home__logo} src={RexJS} alt='Rex.JS' />
      <h1>Rex.JS</h1>
      <p>Simples, pequeno e imperfeito. Uma visão além da programação</p>
    </main>
  )
)