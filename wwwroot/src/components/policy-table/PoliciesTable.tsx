import { IPolicyData } from '@/types';
import { FC } from 'react';
import { Table, TableBody } from '../ui/table';
import PoliciesTableHead from './PoliciesTableHead';
import PoliciesTableRow from './PoliciesTableRow';

interface IProps {
  policies: IPolicyData[];
}

const PoliciesTable: FC<IProps> = (props) => {
  const { policies } = props;

  // Renders
  const renderRows = () => {
    return policies.map((policy, index) => {
      return <PoliciesTableRow key={index} policy={policy} />;
    });
  };

  return (
    <Table>
      <PoliciesTableHead />
      <TableBody>{renderRows()}</TableBody>
    </Table>
  );
};

export default PoliciesTable;
