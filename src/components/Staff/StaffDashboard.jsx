// import { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Trash, Edit } from "lucide-react";

// function App() {
//   const [patients, setPatients] = useState([]);
//   const [appointments, setAppointments] = useState([]);
//   const [editingPatient, setEditingPatient] = useState(null);
//   const [editingAppointment, setEditingAppointment] = useState(null);
//   const [newPatient, setNewPatient] = useState({
//     id: patients.length + 1,
//     name: '',
//     age: 0,
//     gender: '',
//     contact: '',
//   });
//   const [newAppointment, setNewAppointment] = useState({
//     id: appointments.length + 1,
//     patientId: 0,
//     date: '',
//     time: '',
//     reason: '',
//   });

//   const addPatient = () => {
//     setPatients([...patients, newPatient]);
//     setNewPatient({ id: patients.length + 2, name: '', age: 0, gender: '', contact: '' });
//   };

//   const editPatient = (patient) => {
//     setEditingPatient(patient);
//     setNewPatient(patient);
//   };

//   const updatePatient = () => {
//     if (editingPatient) {
//       setPatients(patients.map(p => (p.id === editingPatient.id ? newPatient : p)));
//       setEditingPatient(null);
//     }
//   };

//   const deletePatient = (id) => {
//     setPatients(patients.filter(p => p.id !== id));
//   };

//   const addAppointment = () => {
//     setAppointments([...appointments, newAppointment]);
//     setNewAppointment({ id: appointments.length + 2, patientId: 0, date: '', time: '', reason: '' });
//   };

//   const editAppointment = (appointment) => {
//     setEditingAppointment(appointment);
//     setNewAppointment(appointment);
//   };

//   const updateAppointment = () => {
//     if (editingAppointment) {
//       setAppointments(appointments.map(a => (a.id === editingAppointment.id ? newAppointment : a)));
//       setEditingAppointment(null);
//     }
//   };

//   const deleteAppointment = (id) => {
//     setAppointments(appointments.filter(a => a.id !== id));
//   };

//   return (
//     <div className="p-4">
//       <Card className="mb-4">
//         <CardHeader>
//           <CardTitle>Patient Information</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <Label htmlFor="name">Name</Label>
//               <Input
//                 id="name"
//                 value={newPatient.name}
//                 onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
//               />
//             </div>
//             <div>
//               <Label htmlFor="age">Age</Label>
//               <Input
//                 id="age"
//                 type="number"
//                 value={newPatient.age}
//                 onChange={(e) => setNewPatient({ ...newPatient, age: parseInt(e.target.value) })}
//               />
//             </div>
//             <div>
//               <Label htmlFor="gender">Gender</Label>
//               <Select
//                 onValueChange={(value) => setNewPatient({ ...newPatient, gender: value })}
//                 defaultValue={newPatient.gender}
//               >
//                 <SelectTrigger className="w-full">
//                   <SelectValue placeholder="Select gender" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="male">Male</SelectItem>
//                   <SelectItem value="female">Female</SelectItem>
//                   <SelectItem value="other">Other</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <div>
//               <Label htmlFor="contact">Contact</Label>
//               <Input
//                 id="contact"
//                 value={newPatient.contact}
//                 onChange={(e) => setNewPatient({ ...newPatient, contact: e.target.value })}
//               />
//             </div>
//           </div>
//           <div className="mt-4">
//             {editingPatient ? (
//               <Button onClick={updatePatient} className="mr-2">
//                 Update Patient
//               </Button>
//             ) : (
//               <Button onClick={addPatient} className="mr-2">
//                 Add Patient
//               </Button>
//             )}
//             <Button variant="secondary" onClick={() => setEditingPatient(null)}>
//               Cancel
//             </Button>
//           </div>
//         </CardContent>
//       </Card>

//       <Card className="mb-4">
//         <CardHeader>
//           <CardTitle>Patients</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Name</TableHead>
//                 <TableHead>Age</TableHead>
//                 <TableHead>Gender</TableHead>
//                 <TableHead>Contact</TableHead>
//                 <TableHead>Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {patients.map(patient => (
//                 <TableRow key={patient.id}>
//                   <TableCell>{patient.name}</TableCell>
//                   <TableCell>{patient.age}</TableCell>
//                   <TableCell>{patient.gender}</TableCell>
//                   <TableCell>{patient.contact}</TableCell>
//                   <TableCell>
//                     <Button variant="outline" onClick={() => editPatient(patient)} className="mr-2">
//                       <Edit className="w-4 h-4" />
//                     </Button>
//                     <Button variant="destructive" onClick={() => deletePatient(patient.id)}>
//                       <Trash className="w-4 h-4" />
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>

//       <Card className="mb-4">
//         <CardHeader>
//           <CardTitle>Appointment Scheduling</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <Label htmlFor="patientId">Patient ID</Label>
//               <Input
//                 id="patientId"
//                 type="number"
//                 value={newAppointment.patientId}
//                 onChange={(e) => setNewAppointment({ ...newAppointment, patientId: parseInt(e.target.value) })}
//               />
//             </div>
//             <div>
//               <Label htmlFor="date">Date</Label>
//               <Input
//                 id="date"
//                 type="date"
//                 value={newAppointment.date}
//                 onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
//               />
//             </div>
//             <div>
//               <Label htmlFor="time">Time</Label>
//               <Input
//                 id="time"
//                 type="time"
//                 value={newAppointment.time}
//                 onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
//               />
//             </div>
//             <div>
//               <Label htmlFor="reason">Reason</Label>
//               <Textarea
//                 id="reason"
//                 value={newAppointment.reason}
//                 onChange={(e) => setNewAppointment({ ...newAppointment, reason: e.target.value })}
//               />
//             </div>
//           </div>
//           <div className="mt-4">
//             {editingAppointment ? (
//               <Button onClick={updateAppointment} className="mr-2">
//                 Update Appointment
//               </Button>
//             ) : (
//               <Button onClick={addAppointment} className="mr-2">
//                 Schedule Appointment
//               </Button>
//             )}
//             <Button variant="secondary" onClick={() => setEditingAppointment(null)}>
//               Cancel
//             </Button>
//           </div>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardHeader>
//           <CardTitle>Appointments</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Patient ID</TableHead>
//                 <TableHead>Date</TableHead>
//                 <TableHead>Time</TableHead>
//                 <TableHead>Reason</TableHead>
//                 <TableHead>Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {appointments.map(appointment => (
//                 <TableRow key={appointment.id}>
//                   <TableCell>{appointment.patientId}</TableCell>
//                   <TableCell>{appointment.date}</TableCell>
//                   <TableCell>{appointment.time}</TableCell>
//                   <TableCell>{appointment.reason}</TableCell>
//                   <TableCell>
//                     <Button variant="outline" onClick={() => editAppointment(appointment)} className="mr-2">
//                       <Edit className="w-4 h-4" />
//                     </Button>
//                     <Button variant="destructive" onClick={() => deleteAppointment(appointment.id)}>
//                       <Trash className="w-4 h-4" />
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default App;