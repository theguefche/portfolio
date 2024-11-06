import { Icon } from '@iconify/react';

const SocialLinks = () => {
  return (
    <div className="flex space-x-6 ">
      {/* LinkedIn link */}
      <a
        href="https://www.linkedin.com/in/alaa-eddine-leguefche"
        target="_blank"
        rel="noopener noreferrer"
        className="duration-300 ring p-1 rounded hover:scale-110 transition-all"
      >
        <Icon icon="akar-icons:linkedin-fill" width={24} height={24} />
      </a>

      {/* GitHub link */}
      <a
        href="https://github.com/theguefche"
        target="_blank"
        rel="noopener noreferrer"
        className="duration-300 ring p-1 rounded hover:scale-110 transition-all"
      >
        <Icon icon="akar-icons:github-fill" width={24} height={24} />
      </a>
    </div>
  );
};

export default SocialLinks;
