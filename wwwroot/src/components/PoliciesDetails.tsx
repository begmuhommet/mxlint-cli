import { IPolicyData } from '@/types';
import { FC } from 'react';
import PoliciesTable from './policy-table/PoliciesTable';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface IProps {
  policies: IPolicyData[];
}

const PoliciesDetails: FC<IProps> = (props) => {
  const { policies } = props;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Details</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <PoliciesTable policies={policies} />
      </CardContent>
    </Card>
  );
};

export default PoliciesDetails;
