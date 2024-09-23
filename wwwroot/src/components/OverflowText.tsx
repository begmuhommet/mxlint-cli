import { truncateEnd } from '@/lib/truncate';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { FC } from 'react';

interface IProps {
  text: string | undefined | null;
  length?: number;
}

const OverflowText: FC<IProps> = (props) => {
  const { text, length = 30 } = props;

  if (!text) {
    return 'N/A';
  }

  const renderTextWithTooltip = () => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="whitespace-nowrap overflow-hidden text-ellipsis truncate">{truncateEnd(text, length)}</TooltipTrigger>
          <TooltipContent className="border-gray-900 bg-gray-800 text-white py-1.5 px-2 rounded-sm break-words max-w-[400px]">
            {text}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  return text.length > length ? renderTextWithTooltip() : text;
};

export default OverflowText;
