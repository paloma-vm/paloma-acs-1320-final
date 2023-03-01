import React from 'react'

function getFlag(str) {
	switch(str) {
        
		case 'United Kingdom':
			return '🇬🇧'
		case 'USA':
			return '🇺🇸'
		case 'Sweden':
			return '🇸🇪'
		case 'Finland':
			return '🇫🇮'
		case 'Germany':
			return '🇩🇪'
		case 'Norway':
			return '🇳🇴'
		case 'Portugal':
			return '🇵🇹'
		case 'Poland':
		  return '🇵🇹'
		case 'France':
		  return '🇫🇷'
		case 'Brazil':
      return '🇧🇷'
		default:
			return '？'
	}
}

function OriginFlag(props) {
	const emoji = getFlag(props.origin)
	return <div className="">{emoji}</div>
}

export default OriginFlag