import { useEffect, useState } from 'react';
import getPolicies from './api/getPolicies';
import PoliciesDetails from './components/PoliciesDetails';
import PoliciesSummary from './components/PoliciesSummary';
import { IPoliciesState } from './types';

function App() {
  // States
  const [policies, setPolicies] = useState<IPoliciesState | null>(null);

  // Api
  const getPoliciesFromFile = async () => {
    const policies = await getPolicies();
    setPolicies(policies);
  };

  // Effects
  useEffect(() => {
    getPoliciesFromFile();
  }, []);

  // Renders
  if (!policies) {
    return <div>Processing...</div>;
  }

  return (
    <div className="full p-2 flex flex-col gap-4">
      <PoliciesSummary results={policies} />
      <PoliciesDetails policies={policies.data} />
    </div>
  );
}

export default App;
