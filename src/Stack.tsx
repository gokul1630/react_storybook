import React, { ReactNode } from "react"
interface IStackProps {
	children: ReactNode
	flexGap: number
	flexDirection: "column" | "row"
	flexWrap: "wrap" | "nowrap"
	childrenCount?: number
	backgroundColor?: string
}
const Stack = ({ children, flexGap, flexDirection, flexWrap }: IStackProps) => {
	return (
		<div style={{ flexDirection, flexWrap, display: "flex", gap: flexGap }}>
			{children}
		</div>
	)
}

export default Stack
