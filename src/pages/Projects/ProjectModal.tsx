import { Dialog } from '@headlessui/react';
import { Dispatch } from 'react';
import ImageGallery from 'react-image-gallery';
import Modal from '../../components/Modal';
import { Project } from './helpers';

interface Props {
  open: boolean;
  setOpen: Dispatch<boolean>;
  project: Project | null;
}

const ProjectModal = ({ open, setOpen, project }: Props) => {
  return (
    <Modal
      open={open}
      setOpen={setOpen}
    >
      <Dialog.Title
        as='h3'
        className='mb-4 text-center text-4xl font-bold text-primary'
      >
        {project?.title}
      </Dialog.Title>
      <Dialog.Description className='max-w-[50vw] text-white'>
        <div className='mb-8 flex flex-col gap-4 lg:flex-row lg:gap-16'>
          <div className='flex-1'>
            <h3 className='mb-2 text-xl font-bold text-white'>Project Info:</h3>
            <p className='text-sm text-white/50'>{project?.info}</p>
          </div>
          <div className='flex-1'>
            <h3 className='mb-2 text-xl font-bold text-white'>
              Project Details:
            </h3>
            <div className='flex flex-col'>
              {project?.details.map((detail) => (
                <p
                  key={detail.id}
                  className='mb-1 text-sm text-white/90'
                >
                  {detail.title}:
                  <span className='ml-2 text-white/50'>{detail.value}</span>
                </p>
              ))}
            </div>
            <p className='text-sm text-white/90'>
              Link
              <a
                className='link-hover text-primary'
                target='_blank'
                rel='noreferrer'
                href={project?.link}
              >
                <span className='ml-2 text-white/50'>{project?.link}</span>
              </a>
            </p>
          </div>
        </div>
        <ImageGallery
          lazyLoad
          showPlayButton={false}
          items={
            project?.images.map((image) => ({
              original: image,
              thumbnail: image,
            })) || []
          }
        />
      </Dialog.Description>
    </Modal>
  );
};

export default ProjectModal;
