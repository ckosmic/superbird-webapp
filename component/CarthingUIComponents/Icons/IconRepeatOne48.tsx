import { IconRepeatOnce } from '@spotify-internal/encore-web';

const iconSize = 48;

interface Props {
  className?: string;
}

const IconRepeatOne48 = ({ className }: Props) => {
  return (
    <div style={{ width: `${iconSize}px` }}>
      <IconRepeatOnce className={className} iconSize={iconSize} />
      <svg viewBox="0 0 48 11">
        <circle cx="24" cy="5" r="4" fill="white" />
      </svg>
    </div>
  );
};

export default IconRepeatOne48;
