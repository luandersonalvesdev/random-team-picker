import PropType from 'prop-types'

export default function Team({ team }) {
  return (
    <li>
      <p>{team.teamName}</p>
      <ul>
        {
          team.players.map((player) => <li key={player}>{player}</li>)
        }
      </ul>
    </li>
  )
}

Team.propTypes = {
  team: PropType.object
}
