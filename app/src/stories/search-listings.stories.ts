import {SearchListings} from "@/app/page";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof SearchListings> = {
    title: 'Example/Search Listings',
    component: SearchListings
}

export default meta;
type Story = StoryObj<typeof SearchListings>
