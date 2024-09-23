import { cn } from '@/lib/utils';
import { IPolicyData } from '@/types';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible';
import { ChevronRight } from 'lucide-react';
import { FC, useState } from 'react';
import OverflowText from '../OverflowText';
import { Badge } from '../ui/badge';
import { TableCell, TableRow } from '../ui/table';

const badgeVariants: { [key: string]: any } = {
  critical: 'outlinedError',
  high: 'outlinedError',
  medium: 'outlinedWarning',
  low: 'outlined',
};

interface IProps {
  policy: IPolicyData;
}

const PoliciesTableRow: FC<IProps> = (props) => {
  const { policy } = props;
  const { testSuite } = policy;

  // States
  const [open, setOpen] = useState(false);

  // Variables
  const passed = testSuite.tests - (testSuite.failures + testSuite.skipped);

  // Handlers
  const handleToggle = () => {
    setOpen((prevState) => !prevState);
  };

  // Renders
  const renderFailedMessages = () => {
    return testSuite.testcases.map((item: any, index) => {
      const msg = item?.failure?.message;
      const messageStr = msg?.replaceAll('[HIGH', '|[HIGH');
      const messageArr = messageStr?.split('|').filter((msgStr: string) => msgStr.length > 0);

      return (
        <div key={`${item.name}-${index}`} className="mb-1 flex flex-col py-1">
          <div className="flex items-center gap-1 mb-0.5">
            <p className="text-sm text-gray-500 font-light">Document:</p>
            <p className="text-sm text-gray-800 font-bold">{item.name}</p>
          </div>
          {messageArr?.map((errorMsg: string, idx: number) => (
            <p key={`${msg}-${idx}`} className="text-xs text-red-500 ml-1.5">
              {errorMsg}
            </p>
          ))}
        </div>
      );
    });
  };

  return (
    <TableRow>
      <TableCell className="pl-6 text-gray-800">
        <Collapsible open={open} onOpenChange={handleToggle}>
          <div className="flex items-center gap-1 -ml-2">
            <CollapsibleTrigger className="p-1 rounded-sm hover:bg-gray-100 transition-colors">
              <ChevronRight className={cn('h-4 w-4 transition-transform', open && 'rotate-90')} />
            </CollapsibleTrigger>
            <Badge variant={badgeVariants[policy.severity.toLowerCase()]}>{policy.severity}</Badge>
          </div>
          <CollapsibleContent>
            <div className="flex flex-col gap-2 pt-5  min-w-[400px]">
              <div className="flex gap-2 w-full">
                <p className="text-sm text-gray-500 font-light">Title:</p>
                <p className="text-sm text-gray-800 font-medium">{policy.title}</p>
              </div>
              <div className="flex gap-2 w-full">
                <p className="text-sm text-gray-500 font-light">Description:</p>
                <p className="text-sm text-gray-800 font-medium">{policy.description}</p>
              </div>
              <div className="flex gap-2 w-full">
                <p className="text-sm text-gray-500 font-light">Remediation:</p>
                <p className="text-sm text-gray-800 font-medium">{policy.remediation}</p>
              </div>
              {testSuite.skipped > 0 && (
                <div className="flex gap-2 w-full">
                  <p className="text-sm text-gray-500 font-light">Skip reason:</p>
                  <p className="text-sm text-gray-800 font-medium">{policy.skipReason}</p>
                </div>
              )}

              {testSuite.failures > 0 && (
                <>
                  <div className="h-[1px] bg-gray-100" />
                  <div className="flex flex-col gap-1 w-full">{renderFailedMessages()}</div>
                </>
              )}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </TableCell>
      <TableCell className='max-w-1/3'>
        <OverflowText text={testSuite?.testcases[0]?.name} length={50} />
      </TableCell>
      <TableCell>
        <OverflowText text={policy.ruleName} length={30} />
      </TableCell>
      <TableCell>
      <Badge variant="outlined">{policy.category}</Badge>
      </TableCell>
      <TableCell>
        {passed > 0 && <Badge variant="containedSuccess">{passed} Pass</Badge>}
        {testSuite?.failures > 0 && <Badge variant="containedError">{testSuite?.failures} Fail</Badge>}
        {testSuite?.skipped > 0 && <Badge variant="contained">{testSuite?.skipped} Skip</Badge>}
      </TableCell>
    </TableRow>
  );
};

export default PoliciesTableRow;
