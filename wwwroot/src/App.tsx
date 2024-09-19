import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible';
import { ChevronRight } from 'lucide-react';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table';

function App() {
  // const summary = useMemo(() => {
  //   const total = mockPoliciespolicies?.results.total || 0;
  //   const passed = mockPoliciespolicies?.results.passed || 0;
  //   const failed = mockPoliciespolicies?.results.failures || 0;
  //   const skipped = mockPoliciespolicies?.results.skipped || 0;
  //   const policyCount = mockPoliciespolicies?.data?.length || 0;

  //   return [
  //     { label: 'Policies', value: policyCount, icon: '' },
  //     { label: 'Test suites', value: total, iconName: '' },
  //     { label: 'Passed', value: passed, iconName: 'check' },
  //     { label: 'Failed', value: failed, iconName: 'skip' },
  //     { label: 'Skipped', value: skipped, iconName: 'skip' },
  //   ];
  // }, []);

  // Renders
  return (
    <div className="full p-2 flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="rounded-lg flex">
            <div className="w-[83%] bg-green-500 h-5 rounded-l-lg flex items-center justify-center text-xs text-white">
              Pass 83% (23)
            </div>
            <div className="w-[10%] bg-red-500 h-5 flex items-center justify-center text-xs text-white">
              Fail 10% (3)
            </div>
            <div className="w-[7%] bg-gray-500 h-5 rounded-r-lg flex items-center justify-center text-xs text-white">
              Skip 7% (2)
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Card className="p-3 w-full max-w-[150px] min-h-[80px] flex flex-col gap-2 bg-gray-50">
              <h2>Pass</h2>
              <span className="text-green-500 text-3xl font-bold">23</span>
            </Card>
            <Card className="p-3 w-full max-w-[150px] min-h-[80px] flex flex-col gap-2 bg-gray-50">
              <h2>Fail</h2>
              <span className="text-red-500 text-3xl font-bold">3</span>
            </Card>
            <Card className="p-3 w-full max-w-[150px] min-h-[80px] flex flex-col gap-2 bg-gray-50">
              <h2>Skip</h2>
              <span className="text-gray-400 text-3xl font-bold">2</span>
            </Card>
            <Card className="p-3 w-full max-w-[150px] min-h-[80px] flex flex-col gap-2 bg-gray-50">
              <h2>Test suites</h2>
              <span className="text-gray-600 text-3xl font-bold">28</span>
            </Card>
            <Card className="p-3 w-full max-w-[150px] min-h-[80px] flex flex-col gap-2 bg-gray-50">
              <h2>Policies</h2>
              <span className="text-gray-600 text-3xl font-bold">16</span>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Details</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-gray-100 text-black border-y-[1px] border-gray-400">
              <TableRow>
                <TableHead className="pl-6 text-gray-600 font-bold">Severity</TableHead>
                <TableHead className="text-gray-600 font-bold">Document</TableHead>
                <TableHead className="text-gray-600 font-bold">Rule name</TableHead>
                <TableHead className="text-gray-600 font-bold">Category</TableHead>
                <TableHead className="text-right pr-6 text-gray-600 font-bold">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="pl-6 text-gray-800 w-[40%]">
                  <Collapsible>
                    <div className="flex items-center gap-2">
                      <CollapsibleTrigger>
                        <Button variant="ghost" size="icon">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </CollapsibleTrigger>
                      <Badge variant="outlinedError">High</Badge>
                    </div>
                    <CollapsibleContent>More info here</CollapsibleContent>
                  </Collapsible>
                </TableCell>
                <TableCell>SecurityProjectSecurity.yaml</TableCell>
                <TableCell>DemoUserDiabled</TableCell>
                <TableCell>
                  <Badge variant="outlined">Security</Badge>
                </TableCell>
                <TableCell className="text-right pr-6 text-gray-800">
                  <Badge variant="containedSuccess">Pass</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
