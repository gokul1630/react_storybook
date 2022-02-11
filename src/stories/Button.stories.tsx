import {  Meta, Story } from "@storybook/react"
import Button from "../Button"
const meta: Meta= {
	title: "Components/Button",
	component: Button,
	argTypes: {
		handler: {
			action: "click",
		},
	},
	args: {
		borderRadius: 10,
		color: "white",
	},
}
export default meta

const ButtonTemplate: Story<any> = (args) => (
	<Button {...args} />
)

export const Small = ButtonTemplate.bind({})
export const Medium = ButtonTemplate.bind({})
export const Large = ButtonTemplate.bind({})

Small.args = {
	label: "Small Button",
	size: "sm",
	backgroundColor: "grey",
}
Medium.args = {
	label: "Medium Button",
	size: "md",
	backgroundColor: "blue",
}
Large.args = {
	label: "Large Button",
	size: "lg",
	backgroundColor: "yellow",
	color: "black",
}
