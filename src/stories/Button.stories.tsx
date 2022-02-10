import { ComponentMeta, ComponentStory } from "@storybook/react"
import Button from "../Button"
export default {
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
} as ComponentMeta<typeof Button>

const ButtonTemplate: ComponentStory<typeof Button> = (args) => (
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
