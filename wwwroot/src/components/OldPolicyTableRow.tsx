// import Box from '@mui/material/Box';
// import Chip from '@mui/material/Chip';
// import Collapse from '@mui/material/Collapse';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import TableCell from '@mui/material/TableCell';
// import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
// import useTheme from '@mui/material/styles/useTheme';
// import OverflowText from 'components/OverflowText';
// import AppIcon from 'components/UI/icons/AppIcon';
// import { IPolicyData } from 'modules/packages/types';
// import { FC, useState } from 'react';
// import commonStyles from 'styles/commonStyles';
// import { chipStatuses } from 'styles/statuses';
// import BuildPolicyChip from './BuildPolicyChip';

// interface IProps {
//   policy: IPolicyData;
// }

// const PolicyTableRow: FC<IProps> = (props) => {
//   const { policy } = props;
//   const { testSuite } = policy;

//   // States
//   const [open, setOpen] = useState(false);

//   // Variables
//   const passed = testSuite.tests - (testSuite.failures + testSuite.skipped);
//   const transform = open ? 'rotate(0deg)' : 'rotate(-90deg)';

//   // Styles
//   const { flexCenterStart, flexColStart, flexCenter, flexStart } = commonStyles;
//   const { palette, transitions } = useTheme();

//   // Handlers
//   const handleOpen = () => {
//     setOpen((prevState) => !prevState);
//   };

//   // Renders
//   const renderFailedMessages = () => {
//     return testSuite.testcases.map((item, index) => {
//       const msg = item?.failure?.message;
//       const messageStr = msg?.replaceAll('[HIGH', '|[HIGH');
//       const messageArr = messageStr?.split('|').filter((msgStr) => msgStr.length > 0);

//       return (
//         <Box key={`${item.name}-${index}`} sx={{ mb: 1, ...flexColStart, py: 1 }}>
//           <Box sx={{ ...flexCenterStart, gap: 1, mb: 0.5 }}>
//             <Typography variant="body1" color="text.secondary">
//               Document:
//             </Typography>
//             <Typography variant="body1" color="text.primary" fontWeight={600}>
//               {item.name}
//             </Typography>
//           </Box>
//           {messageArr?.map((errorMsg, idx) => (
//             <Typography key={`${msg}-${idx}`} variant="caption" color="error.main" sx={{ display: 'block', ml: 1.5 }}>
//               {errorMsg}
//             </Typography>
//           ))}
//         </Box>
//       );
//     });
//   };

//   return (
//     <TableRow
//       sx={{ '& .MuiTableCell-root': { height: 45 }, backgroundColor: open ? palette.secondary.light : undefined }}
//     >
//       <TableCell size="small">
//         <Box sx={{ ...flexColStart }}>
//           <Box sx={{ ...flexCenterStart, minHeight: 35 }}>
//             <IconButton
//               size="small"
//               sx={{ ml: -1, mr: 1, transform, transition: transitions.create('transform') }}
//               onClick={handleOpen}
//             >
//               <AppIcon name="chevron" sx={{ width: 11, height: 11 }} />
//             </IconButton>
//             <Typography variant="body2">
//               <OverflowText text={policy.title} length={60} />
//             </Typography>
//           </Box>
//           <Collapse in={open}>
//             <Box sx={{ ...flexColStart, gap: 1, maxWidth: 450, overflow: 'auto', ml: 2.2 }}>
//               <Box sx={{ ...flexCenter, gap: 1, mb: 1 }}>
//                 <Chip
//                   variant="outlined"
//                   color={chipStatuses.default}
//                   label={<OverflowText text={policy.category} length={40} />}
//                 />
//                 <Chip
//                   color={chipStatuses[policy.severity?.toLocaleLowerCase()]}
//                   label={<OverflowText text={policy.severity} length={50} />}
//                 />
//               </Box>
//               <Box sx={{ ...flexStart, gap: 1 }}>
//                 <Typography variant="body1" color="text.secondary" fontWeight={400}>
//                   Description:
//                 </Typography>
//                 <Typography variant="body1" fontWeight={500}>
//                   {policy.description}
//                 </Typography>
//               </Box>
//               <Box sx={{ ...flexStart, gap: 1 }}>
//                 <Typography variant="body1" color="text.secondary" fontWeight={400}>
//                   Remediation:
//                 </Typography>
//                 <Typography variant="body1" fontWeight={500}>
//                   {policy.remediation}
//                 </Typography>
//               </Box>
//               {testSuite.skipped > 0 && (
//                 <Box sx={{ ...flexStart, gap: 1 }}>
//                   <Typography variant="body1" color="text.secondary" fontWeight={400}>
//                     Skip reason:
//                   </Typography>
//                   <Typography variant="body1" fontWeight={500}>
//                     {policy.skipReason}
//                   </Typography>
//                 </Box>
//               )}

//               {testSuite.failures > 0 && (
//                 <>
//                   <Divider />
//                   <Box sx={{ ...flexColStart, gap: 1, width: '100%' }}>{renderFailedMessages()}</Box>
//                 </>
//               )}
//             </Box>
//           </Collapse>
//         </Box>
//       </TableCell>
//       <TableCell width={20} size="small" align="center">
//         {passed > 0 && <BuildPolicyChip name="passed" value={passed} />}
//       </TableCell>
//       <TableCell width={20} size="small" align="center">
//         {testSuite?.failures > 0 && <BuildPolicyChip name="failures" value={testSuite?.failures} />}
//       </TableCell>
//       <TableCell width={20} size="small" align="center">
//         {testSuite?.skipped > 0 && <BuildPolicyChip name="skipped" value={testSuite?.skipped} />}
//       </TableCell>
//       <TableCell width={20} size="small">
//         {policy?.testSuite.time > 0 ? (testSuite.time * 1000).toFixed(1) : 0}ms
//       </TableCell>
//     </TableRow>
//   );
// };

// export default PolicyTableRow;
