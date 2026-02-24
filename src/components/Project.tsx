import Stack from '@/components/Stack';
import useModal from '@/hooks/useModal';
import Modal from '@/components/Modal';
import useAssets from '@/hooks/useAssets';
import ImageSkeleton from '@/components/ImageSkeleton';
import type { ProjectProps } from '@/types';

const Project = ({
  type,
  titleImg,
  title,
  description,
  member,
  role,
  duration,
  stack,
  github,
  demo,
  summary,
  architecture,
  faq,
  headerColor,
}: ProjectProps) => {
  const { isOpen, toggle } = useModal();
  const { assets: skillIcons } = useAssets('skills');

  const handleGithubClick = () => {
    window.open(github, '_blank');
  };

  return (
    <article className="w-full flex items-start justify-start gap-12 py-4 px-8 box-border max-lg:py-4 max-lg:px-6 max-lg:gap-8 max-md:flex-col max-md:items-center max-md:p-4 max-md:gap-8 max-sm:py-3 max-sm:px-2 max-sm:gap-6">
      <div className="relative shrink-0 group">
        <ImageSkeleton
          src={titleImg}
          alt={`${title} project`}
          className="shrink-0 w-[38rem] h-[26rem] rounded-3xl transition-opacity duration-300 group-hover:opacity-70 max-lg:w-[28rem] max-lg:h-[22rem] max-md:w-[26rem] max-md:h-72 max-sm:w-[22rem] max-sm:h-64"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
          {demo && (
            <button
              className="bg-black/50 text-white border-none rounded-lg py-3 px-6 text-base font-semibold cursor-pointer"
              onClick={() => window.open(demo, '_blank')}
            >
              서비스 보기
            </button>
          )}
          <button
            className="bg-black/50 text-white border-none rounded-lg py-3 px-6 text-base font-semibold cursor-pointer"
            onClick={toggle}
          >
            상세 보기
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-start gap-6 p-0 m-0 min-w-0 max-lg:gap-5 max-md:w-full max-md:max-w-[26rem] max-md:gap-4 max-sm:max-w-[22rem] max-sm:gap-3">
        <div className="flex justify-between items-start p-0 m-0">
          <div className="flex-1 m-0 p-0 min-w-0">
            <p className="text-3xl font-bold text-white m-0 mb-2 max-lg:text-2xl max-md:text-xl max-sm:text-lg">
              {title}
            </p>
            <p className="text-base text-white m-0 leading-relaxed max-lg:text-sm max-md:text-xs max-sm:text-xs">
              {description}
            </p>
          </div>
          <div className="shrink-0 ml-4 relative w-12 h-12 max-lg:w-11 max-lg:h-11 max-lg:ml-3 max-md:w-10 max-md:h-10 max-sm:w-9 max-sm:h-9">
            <img
              className="w-12 h-12 rounded-xl bg-white p-2 box-border cursor-pointer transition-transform duration-200 hover:scale-110 max-lg:w-11 max-lg:h-11 max-md:w-10 max-md:h-10 max-sm:w-9 max-sm:h-9"
              src={skillIcons['github']}
              alt="github"
              onClick={handleGithubClick}
            />
          </div>
        </div>
        <div className="p-0 m-0">
          <p className="text-sm text-white m-0 mb-1 font-medium max-md:text-xs max-sm:text-xs">
            팀원 : {member}
          </p>
          <p className="text-sm text-white m-0 font-medium max-md:text-xs max-sm:text-xs">
            역할 : {role}
          </p>
        </div>
        <div className="p-0 m-0">
          <p className="text-sm text-white m-0 mb-1 font-semibold max-md:text-xs max-sm:text-xs">
            개발 기간
          </p>
          <p className="text-base text-white m-0 font-medium max-md:text-sm max-sm:text-xs">
            {duration}
          </p>
        </div>
        <div className="p-0 m-0">
          <p className="text-lg font-bold text-white m-0 mb-3 max-lg:text-base max-md:text-sm max-sm:text-sm max-sm:mb-2">
            Stack
          </p>
          <div className="grid grid-cols-4 gap-2.5 w-full p-0 box-border max-md:grid-cols-4 max-sm:grid-cols-3 max-sm:gap-1.5">
            {stack.map((item) => (
              <Stack key={item.name} name={item.name} icon={skillIcons[item.icon] ?? ''} />
            ))}
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal
          onClose={toggle}
          type={type}
          title={title}
          duration={duration}
          summary={summary}
          architecture={architecture}
          faq={faq}
          headerColor={headerColor}
        />
      )}
    </article>
  );
};

export default Project;
