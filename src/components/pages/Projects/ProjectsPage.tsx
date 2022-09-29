import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../../../state/hooks';

type Props = {}

export type projectType = {
  id: number;
  title: string;
  stack: string[];
}

const Projects = (props: Props) => {
  const projectStore = useAppSelector((state) => state.projectStore)
  const [projectList, setProjectList] = useState<projectType[]>([]);

  useEffect(() => {
    setProjectList(projectStore.projects);
  }, [projectStore])


  return (
    <div>Projects
      {
        projectList.map((project: projectType) =>
          <div key={'projects/' + project.id}>
            <h1>Project {project.id}</h1>
            <h1>{project.title}</h1>
            <h2>stack: </h2>
            {
              project.stack.map((technologie: string) =>
                <p key={project.id + '/stack/' + technologie}>{technologie}</p>)
            }
          </div>)
      }
    </div >
  )
}

export default Projects
