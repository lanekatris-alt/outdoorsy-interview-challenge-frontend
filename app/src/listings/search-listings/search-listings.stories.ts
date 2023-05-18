import { Meta, StoryObj } from "@storybook/react";
import { SearchListings } from "./search-listings";

const meta: Meta<typeof SearchListings> = {
  title: "Search Listings",
  component: SearchListings,
};

export default meta;
type Story = StoryObj<typeof SearchListings>;

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const NoData: Story = {
  args: {
    searchTerm: "never find me",
  },
};

export const Error: Story = {
  args: {
    searchTerm: "trailer",
    error: "Just a trivial example of an error",
  },
};
