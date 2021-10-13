import { useHistory, useRouteMatch } from 'react-router-dom'
import './MenuItem.styles.scss'

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  let history = useHistory()
  let { url } = useRouteMatch()

  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${url}${linkUrl}`)}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className='background-image'
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem
