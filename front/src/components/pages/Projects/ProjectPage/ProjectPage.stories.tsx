import { withRouter } from "storybook-addon-react-router-v6";
import ProjectPage from "./ProjectPage";

import store from '../../../../state/store';
import { Provider } from "react-redux";
import { ComponentMeta, ComponentStory } from "@storybook/react";


const ProviderWrapper = ({ children, store }: {children: any, store: any}) => (
  <Provider store={store}>
      {children}
  </Provider>
);

const withProvider = (story: any) => (
  <ProviderWrapper store={store}>
      {story()}
  </ProviderWrapper>
)
export default {
  title: 'Page/ProjectPage',
  component: ProjectPage,
  decorators: [withRouter, withProvider],
}  as ComponentMeta<typeof ProjectPage>;

const Template: ComponentStory<typeof ProjectPage> = () => (<ProjectPage />);
Template.story = {
  parameters: {
    reactRouter: {
      routePath: '/projetcs/:projectTitle',
      routeParams: { projectTitle: 'rfp' },
      routeState: { fromPage: 'projects' },
    }
  }
};

export const RFP = Template.bind({});
RFP.story = {
  parameters: {
    reactRouter: {
      routePath: '/projetcs/:projectTitle',
      routeParams: { projectTitle: 'rfp' },
      routeState: { fromPage: 'projects' },
    }
  }
}

export const Portfolio = Template.bind({});
Portfolio.story = {
  parameters: {
    reactRouter: {
      routePath: '/projetcs/:projectTitle',
      routeParams: { projectTitle: 'portfolio' },
      routeState: { fromPage: 'projects' },
    }
  }
}
export const Error = Template.bind({});
Error.story = {
  parameters: {
    reactRouter: {
      routePath: '/projetcs/:projectTitle',
      routeParams: { projectTitle: 'unknown' },
      routeState: { fromPage: 'projects' },
    }
  }
}
