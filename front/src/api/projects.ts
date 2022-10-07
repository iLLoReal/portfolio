import axios from 'axios';
import qs from 'query-string';
import { projectType } from '../components/pages/Projects/ProjectsPage/ProjectsPage';
import * as routes from '../routes';

const populateProjects = () => {
  return (
    qs.stringify({
      populate: '*'
    }));
}

const transformResponse = (originalResponse: any) => {
  const transformedResponse: projectType[] = originalResponse.data.data.map((item: any) => {
    return {
      id: item.id,
      title: item.attributes.title,
      previewUrl: 'http://localhost:1337' + item.attributes.Preview.data.attributes.formats.large.url,
      stack: item.attributes.stack.split('\n'),
      context: item.attributes.Context,
    }
  })
  return transformedResponse;
}

export const getProjects = async () => {
  return transformResponse(await axios.get(routes.projectsUrl + '?' + populateProjects()));;
}
