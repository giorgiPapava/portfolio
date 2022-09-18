import { useState } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Project, PROJECTS } from './helpers';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [project, setProject] = useState(null as null | Project);

  return (
    <div className='py-20'>
      <ProjectModal
        open={modalOpen}
        setOpen={setModalOpen}
        project={project}
      />

      <h2 className='mb-20 text-center font-poppins text-4xl font-bold text-primary'>
        Enterprise Projects
      </h2>
      <div className='mx-auto flex max-w-[75vw] items-center justify-center'>
        <div className='flex flex-wrap justify-center gap-x-32 gap-y-20'>
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className='cursor-pointer'
              onClick={() => {
                setProject(project);
                setModalOpen(true);
              }}
            >
              <img
                src={project.coverImage}
                className='h-48 rounded-md'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
