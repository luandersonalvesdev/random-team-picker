import PropType from 'prop-types'

export default function PlayerItem({player}) {
  return (
    <li>
      {player.name}
    </li>
  )
}

PlayerItem.propTypes = {
  player: PropType.shape({
    name: PropType.string,
    id: PropType.number
  })
}
