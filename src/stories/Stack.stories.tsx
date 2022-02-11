import { Meta, Story } from "@storybook/react"
import Stack from "../Stack"

const meta:Meta= {
	title: "Components/Stack",
	component: Stack,
	argTypes: {
		childrenCount: {
			defaultValue: 5,
		},
		backgroundColor: {
			control: "color",
			defaultValue: "#dedede",
		},
		flexGap: {
			defaultValue: 1,
		},
	},
}
export default meta

const StackTemplate: Story<any> = ({
	backgroundColor,
	childrenCount,
	...args
}) => (
	<Stack {...args}>
		{[...Array(childrenCount).keys()].map((i) => (
			<div
				style={{
					width: "50px",
					height: "50px",
					backgroundColor,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{i + 1}
			</div>
		))}
	</Stack>
)

export const Horizontal = StackTemplate.bind({})
Horizontal.args = {}

export const Vertical = StackTemplate.bind({})
Vertical.args = {
	flexDirection: "column",
}
export const Wrap = StackTemplate.bind({})
Wrap.args = {
	flexWrap: "wrap",
	childrenCount: 30,
}
export const NoWrap = StackTemplate.bind({})
NoWrap.args = {
	flexWrap: "nowrap",
	childrenCount: 30,
}
