import { IPoliciesState } from '@/types';
import { FC, useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface IProps {
  results: IPoliciesState;
}

const PoliciesSummary: FC<IProps> = (props) => {
  const {
    results: { results, data },
  } = props;
  const { failures, passed, skipped, total } = results;

  // States
  const [percentages, setPercentages] = useState({ passed: 0, failed: 0, skipped: 0 });

  useEffect(() => {
    const passedPercentage = Number(((passed / total) * 100).toFixed());
    const failedPercentage = Number(((failures / total) * 100).toFixed());
    const skippedPercentage = Number(((skipped / total) * 100).toFixed());

    setPercentages({ passed: passedPercentage, failed: failedPercentage, skipped: skippedPercentage });
  }, [passed, failures, skipped, total]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Summary</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="rounded-md flex w-full">
          {percentages.passed > 0 && (
            <div
              className="bg-green-500 h-5 rounded-l-md flex items-center justify-center text-[10px] text-white"
              style={{ width: `${percentages.passed}%` }}
            >
              {percentages.passed}%
            </div>
          )}
          {percentages.failed > 0 && (
            <div
              className="bg-red-500 h-5 flex items-center justify-center text-[10px] text-white"
              style={{
                width: `${percentages.failed}%`,
                borderRadius:
                  percentages.skipped > 0 ? undefined : '0 calc(var(--radius) - 2px) calc(var(--radius) - 2px) 0',
              }}
            >
              {percentages.failed}%
            </div>
          )}
          {percentages.skipped > 0 && (
            <div
              className="bg-gray-500 h-5 rounded-r-md flex items-center justify-center text-[10px] text-white"
              style={{ width: `${percentages.skipped}%` }}
            >
              {percentages.skipped}%
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-4">
          <Card className="p-3 w-full max-w-[150px] min-h-[80px] flex flex-col gap-2 bg-gray-50">
            <h2>Pass</h2>
            <span className="text-green-500 text-3xl font-bold">{passed}</span>
          </Card>
          <Card className="p-3 w-full max-w-[150px] min-h-[80px] flex flex-col gap-2 bg-gray-50">
            <h2>Fail</h2>
            <span className="text-red-500 text-3xl font-bold">{failures}</span>
          </Card>
          <Card className="p-3 w-full max-w-[150px] min-h-[80px] flex flex-col gap-2 bg-gray-50">
            <h2>Skip</h2>
            <span className="text-gray-400 text-3xl font-bold">{skipped}</span>
          </Card>
          <Card className="p-3 w-full max-w-[150px] min-h-[80px] flex flex-col gap-2 bg-gray-50">
            <h2>Test suites</h2>
            <span className="text-gray-600 text-3xl font-bold">{total}</span>
          </Card>
          <Card className="p-3 w-full max-w-[150px] min-h-[80px] flex flex-col gap-2 bg-gray-50">
            <h2>Policies</h2>
            <span className="text-gray-600 text-3xl font-bold">{data.length}</span>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};

export default PoliciesSummary;
