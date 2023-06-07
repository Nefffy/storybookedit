import { StoryObj, Meta } from "@storybook/react";
import { Category } from "../index";
import { Button } from "./ui-components/basics/Button";

// The strangest bug of my live:
//after upgrade Storybook 6... to 7... the usage of the DATA import does not work...
const dataCategories: Category[]= [
  { id: "cat-0", name: "Mehr Wald, weil...", text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."},
  { id: "cat-1", name: "Waldwächter", text:"Lorem ipsum..."},
  { id: "cat-2", name: "Waldelfen gesucht", text:"Lorem ipsum..."},
  { id: "cat-3", name: "Landschaften", text:"Lorem ipsum..."},
  { id: "cat-4", name: "Fakten (Check)", text:"Lorem ipsum..."},
];

/* we will create different stories based on our themes
 * for the Application the theme could be provided to the underlying
 * components via <ThemeProvider theme={theme}>...
 *
 * But here we concentrate on the stories:
 *  primary: boolean
 *  size: string
 *
 * are used to define the different stories wrt. the current theme
 * */

// More on https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const meta= {
  title: "Design-System/UI-Components/Button-default",
  component: Button,
  tags: ['autodocs'],
}satisfies Meta<typeof Button>;

export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;
type Story = StoryObj<typeof Button>;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    size: "medium",
    label: dataCategories[0].name,
    onClick: () => {
      console.log("OK");
    },
    cat: "test",
  },
};

export const Secondary: Story = {
  args: {
    /*
     * Style for specific buttons
     * e.g. user changes displayed content based on action onClick
     * in our lecture example: Filter-Button wrt. geolocation
     */
    primary: false,
    size: "medium",
    label: "test",
    onClick: () => {
      console.log("OK");
    },
    cat: "test",
  },
};

export const Large: Story = {
  args: {
    primary: true,
    size: "large",
    label: "test",
    onClick: () => {
      console.log("OK");
    },
    cat: "test",
  },
};

export const Tiny: Story = {
  args: {
    primary: false,
    size: "tiny",
    label: "back",
    onClick: () => {
      console.log("OK");
    },
    cat: "test",
  },
};
