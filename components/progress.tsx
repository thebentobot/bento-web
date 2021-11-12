import { useState } from "react"

export default function Progress (done: any): JSX.Element {
	const [style, setStyle] = useState({})
	
	setTimeout(() => {
		const newStyle = {
			opacity: 0.75,
			width: `${done}%`
		}
		
		setStyle(newStyle)
	}, 200)
	
	return (
		<div className='progress'>
			<div className='progress-done' style={style}>
			</div>
		</div>
	)
}