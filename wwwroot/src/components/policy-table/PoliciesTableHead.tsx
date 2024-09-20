import { FC } from 'react';
import { TableHead, TableHeader, TableRow } from '../ui/table';

interface IProps {}

const PoliciesTableHead: FC<IProps> = () => {
  return (
    <TableHeader className="bg-gray-100 text-black border-y-[1px] border-gray-400">
      <TableRow>
        <TableHead className="pl-6 text-gray-600 font-bold">Title</TableHead>
        <TableHead className="text-gray-600 font-bold">Rule name</TableHead>
        <TableHead className="text-gray-600 font-bold">Pass</TableHead>
        <TableHead className="text-gray-600 font-bold">Fail</TableHead>
        <TableHead className="text-gray-600 font-bold">Skip</TableHead>
        <TableHead className="text-right pr-6 text-gray-600 font-bold">Time</TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default PoliciesTableHead;
