import React from "react"
interface IButttonProps {
	/** label */
	label: string
	/** size */
	size: "sm" | "md" | "lg"
	/** background color */
	backgroundColor: string
	/** border radius */
	borderRadius: number
	/** button handler */
	handler: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
	/** color */
	color: string
}
const Button = ({
	label,
	size,
	backgroundColor,
	borderRadius,
	handler,
	color,
	...props
}: IButttonProps) => {
	let scale = 1
	if (size === "md") scale = 4
	if (size === "lg") scale = 6
	return (
		<button
			onClick={handler}
			onMouseOut={handler}
			style={{
				backgroundColor,
				borderRadius,
				color,
				padding: `${scale * 0.5}rem ${scale * 1}rem`,
			}}
			{...props}
		>
			{label}
		</button>
	)
}

export default Button
