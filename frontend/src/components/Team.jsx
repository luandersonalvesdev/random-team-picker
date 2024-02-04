import PropType from 'prop-types'

export default function Team({ team }) {
  return (
    <li className='mt-5 mr-5 p-5 rounded border border-gray-300'>
      <p className='text-2xl font-bold mb-3 text-gray-900'>{team.teamName}</p>
      <ul>
        {
          team.players.map((player) => (
            <li
              className='text-gray-800'
              key={player}>{player}</li>
            )
          )
        }
      </ul>
    </li>
  )
}

Team.propTypes = {
  team: PropType.object
}
