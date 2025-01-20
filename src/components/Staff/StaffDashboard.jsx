import { useState } from "react";
import { Button } from "@/components/ui/Button.jsx";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card.jsx";
import { Input } from "@/components/ui/Input.jsx";
import { Label } from "@/components/ui/Label.jsx";
import { Textarea } from "@/components/ui/Textarea.jsx";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table.jsx";
import { Trash, Edit } from "lucide-react";

import GenderSelect from "@/components/ui/GenderSelect.jsx";

function App() {
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [editingPatient, setEditingPatient] = useState(null);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [newPatient, setNewPatient] = useState({
    id: patients.length + 1,
    name: "",
    age: 0,
    gender: "",
    contact: "",
  });
  const [newAppointment, setNewAppointment] = useState({
    id: appointments.length + 1,
    patientId: 0,
    date: "",
    time: "",
    reason: "",
  });

  const addPatient = () => {
    setPatients([...patients, newPatient]);
    setNewPatient({ id: patients.length + 2, name: "", age: 0, gender: "", contact: "" });
  };

  const editPatient = (patient) => {
    setEditingPatient(patient);
    setNewPatient(patient);
  };

  const updatePatient = () => {
    if (editingPatient) {
      setPatients(patients.map((p) => (p.id === editingPatient.id ? newPatient : p)));
      setEditingPatient(null);
    }
  };

  const deletePatient = (id) => {
    setPatients(patients.filter((p) => p.id !== id));
  };

  const addAppointment = () => {
    setAppointments([...appointments, newAppointment]);
    setNewAppointment({ id: appointments.length + 2, patientId: 0, date: "", time: "", reason: "" });
  };

  const editAppointment = (appointment) => {
    setEditingAppointment(appointment);
    setNewAppointment(appointment);
  };

  const updateAppointment = () => {
    if (editingAppointment) {
      setAppointments(appointments.map(a => (a.id === editingAppointment.id ? newAppointment : a)));
      setEditingAppointment(null);
    }
  };

  const deleteAppointment = (id) => {
    setAppointments(appointments.filter(a => a.id !== id));
  };

  return (
    <div className="p-4">
      {/* Patient Form */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Patient Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={newPatient.name}
                onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                value={newPatient.age}
                onChange={(e) => setNewPatient({ ...newPatient, age: parseInt(e.target.value) })}
              />
            </div>
            <div>
              <Label htmlFor="gender">Gender</Label>
              <GenderSelect
                selectedGender={newPatient.gender}
                onChange={(value) => setNewPatient({ ...newPatient, gender: value })}
              />
            </div>
            <div>
              <Label htmlFor="contact">Contact</Label>
              <Input
                id="contact"
                value={newPatient.contact}
                onChange={(e) => setNewPatient({ ...newPatient, contact: e.target.value })}
              />
            </div>
          </div>
          <div className="mt-4">
            {editingPatient ? (
              <Button onClick={updatePatient} className="mr-2">
                Update Patient
              </Button>
            ) : (
              <Button variant="secondary"onClick={addPatient} style={{ marginRight: '8px' }}>
                Add Patient
              </Button>
            )}
            <Button variant="secondary" onClick={() => setEditingPatient(null)}>
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Patients Table */}
      <Card className="mb-4">
  <CardHeader>
    <CardTitle>Patients</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="grid grid-cols-5 gap-4">
      <div className="font-semibold">Name</div>
      <div className="font-semibold">Age</div>
      <div className="font-semibold">Gender</div>
      <div className="font-semibold">Contact</div>
      <div className="font-semibold">Actions</div>

      {patients.map((patient) => (
        <>
          <div>{patient.name}</div>
          <div>{patient.age}</div>
          <div>{patient.gender}</div>
          <div>{patient.contact}</div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => editPatient(patient)} className="mr-2">
              <Edit className="w-4 h-4" />
            </Button>
            <Button variant="destructive" onClick={() => deletePatient(patient.id)}>
              <Trash className="w-4 h-4" />
            </Button>
          </div>
        </>
      ))}
    </div>
  </CardContent>
</Card>


      {/* Appointment Form */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Appointment Scheduling</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="patientId">Patient ID</Label>
              <Input
                id="patientId"
                type="number"
                value={newAppointment.patientId}
                onChange={(e) => setNewAppointment({ ...newAppointment, patientId: parseInt(e.target.value) })}
              />
            </div>
            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={newAppointment.date}
                onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                type="time"
                value={newAppointment.time}
                onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="reason">Reason</Label>
              <Textarea
                id="reason"
                value={newAppointment.reason}
                onChange={(e) => setNewAppointment({ ...newAppointment, reason: e.target.value })}
              />
            </div>
          </div>
          <div className="mt-4">
            {editingAppointment ? (
              <Button onClick={updateAppointment} className="mr-2">
                Update Appointment
              </Button>
            ) : (
              <Button onClick={addAppointment} style={{ marginRight: '8px' }} >
                Schedule Appointment
              </Button>
            )}
            <Button variant="secondary" onClick={() => setEditingAppointment(null)}>
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Appointments Table */}
      <Card>
  <CardHeader>
    <CardTitle>Appointments</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="grid grid-cols-5 gap-4">
      <div className="font-semibold">Patient ID</div>
      <div className="font-semibold">Date</div>
      <div className="font-semibold">Time</div>
      <div className="font-semibold">Reason</div>
      <div className="font-semibold">Actions</div>

      {appointments.map((appointment) => (
        <>
          <div>{appointment.patientId}</div>
          <div>{appointment.date}</div>
          <div>{appointment.time}</div>
          <div>{appointment.reason}</div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => editAppointment(appointment)} className="mr-2">
              <Edit className="w-4 h-4" />
            </Button>
            <Button variant="destructive" onClick={() => deleteAppointment(appointment.id)}>
              <Trash className="w-4 h-4" />
            </Button>
          </div>
        </>
      ))}
    </div>
  </CardContent>
</Card>

    </div>
  );
}

export default App;



// import { useState } from "react";
// import { Button } from "@/components/ui/Button.jsx";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/Card.jsx";
// import { Input } from "@/components/ui/Input.jsx";
// import { Label } from "@/components/ui/Label.jsx";
// import { Textarea } from "@/components/ui/Textarea.jsx";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table.jsx";
// import { Trash, Edit } from "lucide-react";

// import GenderSelect from "@/components/ui/GenderSelect.jsx";

// function App() {
//   const [patients, setPatients] = useState([]);
//   const [appointments, setAppointments] = useState([]);
//   const [editingPatient, setEditingPatient] = useState(null);
//   const [editingAppointment, setEditingAppointment] = useState(null);
//   const [newPatient, setNewPatient] = useState({
//     id: patients.length + 1,
//     name: "",
//     age: 0,
//     gender: "",
//     contact: "",
//   });
//   const [newAppointment, setNewAppointment] = useState({
//     id: appointments.length + 1,
//     patientId: 0,
//     date: "",
//     time: "",
//     reason: "",
//   });

//   const addPatient = () => {
//     setPatients([...patients, newPatient]);
//     setNewPatient({ id: patients.length + 2, name: "", age: 0, gender: "", contact: "" });
//   };

//   const editPatient = (patient) => {
//     setEditingPatient(patient);
//     setNewPatient(patient);
//   };

//   const updatePatient = () => {
//     if (editingPatient) {
//       setPatients(patients.map((p) => (p.id === editingPatient.id ? newPatient : p)));
//       setEditingPatient(null);
//     }
//   };

//   const deletePatient = (id) => {
//     setPatients(patients.filter((p) => p.id !== id));
//   };

//   const addAppointment = () => {
//     setAppointments([...appointments, newAppointment]);
//     setNewAppointment({ id: appointments.length + 2, patientId: 0, date: "", time: "", reason: "" });
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
//     <div className="p-6 bg-gray-50 min-h-screen">

//       {/* Patient Form */}
//       <Card className="mb-6 shadow-lg rounded-lg border border-gray-200">
//         <CardHeader>
//           <CardTitle className="text-xl font-semibold text-gray-800">Patient Information</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <Label htmlFor="name">Name</Label>
//               <Input
//                 id="name"
//                 value={newPatient.name}
//                 onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
//                 className="mt-1 p-2 border rounded-lg shadow-sm"
//               />
//             </div>
//             <div>
//               <Label htmlFor="age">Age</Label>
//               <Input
//                 id="age"
//                 type="number"
//                 value={newPatient.age}
//                 onChange={(e) => setNewPatient({ ...newPatient, age: parseInt(e.target.value) })}
//                 className="mt-1 p-2 border rounded-lg shadow-sm"
//               />
//             </div>
//             <div>
//               <Label htmlFor="gender">Gender</Label>
//               <GenderSelect
//                 selectedGender={newPatient.gender}
//                 onChange={(value) => setNewPatient({ ...newPatient, gender: value })}
//                 className="mt-1"
//               />
//             </div>
//             <div>
//               <Label htmlFor="contact">Contact</Label>
//               <Input
//                 id="contact"
//                 value={newPatient.contact}
//                 onChange={(e) => setNewPatient({ ...newPatient, contact: e.target.value })}
//                 className="mt-1 p-2 border rounded-lg shadow-sm"
//               />
//             </div>
//           </div>
//           <div className="mt-6 flex gap-4">
//             {editingPatient ? (
//               <Button onClick={updatePatient} className="bg-blue-500 text-white rounded-lg py-2 px-4">
//                 Update Patient
//               </Button>
//             ) : (
//               <Button variant="secondary" onClick={addPatient} className="bg-green-500 text-white rounded-lg py-2 px-4">
//                 Add Patient
//               </Button>
//             )}
//             <Button variant="secondary" onClick={() => setEditingPatient(null)} className="bg-gray-400 text-white rounded-lg py-2 px-4">
//               Cancel
//             </Button>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Patients Table */}
//       <Card className="mb-6 shadow-lg rounded-lg border border-gray-200">
//         <CardHeader>
//           <CardTitle className="text-xl font-semibold text-gray-800">Patients</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Table className="min-w-full ">
//             <TableHeader>
//               <TableRow >
//                 <TableHead>Name</TableHead>
//                 <TableHead>Age</TableHead>
//                 <TableHead>Gender</TableHead>
//                 <TableHead>Contact</TableHead>
//                 <TableHead>Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {patients.map((patient) => (
//                 <TableRow key={patient.id} className="hover:bg-gray-50">
//                   <TableCell>{patient.name}</TableCell>
//                   <TableCell>{patient.age}</TableCell>
//                   <TableCell>{patient.gender}</TableCell>
//                   <TableCell>{patient.contact}</TableCell>
//                   <TableCell>
//                     <div className="flex gap-2">
//                       <Button variant="outline" onClick={() => editPatient(patient)} className="text-blue-600">
//                         <Edit className="w-4 h-4" />
//                       </Button>
//                       <Button variant="destructive" onClick={() => deletePatient(patient.id)} className="text-red-600">
//                         <Trash className="w-4 h-4" />
//                       </Button>
//                     </div>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>

//       {/* Appointment Form */}
//       <Card className="mb-6 shadow-lg rounded-lg border border-gray-200">
//         <CardHeader>
//           <CardTitle className="text-xl font-semibold text-gray-800">Appointment Scheduling</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <Label htmlFor="patientId">Patient ID</Label>
//               <Input
//                 id="patientId"
//                 type="number"
//                 value={newAppointment.patientId}
//                 onChange={(e) => setNewAppointment({ ...newAppointment, patientId: parseInt(e.target.value) })}
//                 className="mt-1 p-2 border rounded-lg shadow-sm"
//               />
//             </div>
//             <div>
//               <Label htmlFor="date">Date</Label>
//               <Input
//                 id="date"
//                 type="date"
//                 value={newAppointment.date}
//                 onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
//                 className="mt-1 p-2 border rounded-lg shadow-sm"
//               />
//             </div>
//             <div>
//               <Label htmlFor="time">Time</Label>
//               <Input
//                 id="time"
//                 type="time"
//                 value={newAppointment.time}
//                 onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
//                 className="mt-1 p-2 border rounded-lg shadow-sm"
//               />
//             </div>
//             <div>
//               <Label htmlFor="reason">Reason</Label>
//               <Textarea
//                 id="reason"
//                 value={newAppointment.reason}
//                 onChange={(e) => setNewAppointment({ ...newAppointment, reason: e.target.value })}
//                 className="mt-1 p-2 border rounded-lg shadow-sm"
//               />
//             </div>
//           </div>
//           <div className="mt-6 flex gap-4">
//             {editingAppointment ? (
//               <Button onClick={updateAppointment} className="bg-blue-500 text-white rounded-lg py-2 px-4">
//                 Update Appointment
//               </Button>
//             ) : (
//               <Button onClick={addAppointment} className="bg-green-500 text-white rounded-lg py-2 px-4">
//                 Schedule Appointment
//               </Button>
//             )}
//             <Button variant="secondary" onClick={() => setEditingAppointment(null)} className="bg-gray-400 text-white rounded-lg py-2 px-4">
//               Cancel
//             </Button>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Appointments Table */}
//       <Card className="shadow-lg rounded-lg border border-gray-200">
//         <CardHeader>
//           <CardTitle className="text-xl font-semibold text-gray-800">Appointments</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Table className="min-w-full">
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
//               {appointments.map((appointment) => (
//                 <TableRow key={appointment.id} className="hover:bg-gray-50">
//                   <TableCell>{appointment.patientId}</TableCell>
//                   <TableCell>{appointment.date}</TableCell>
//                   <TableCell>{appointment.time}</TableCell>
//                   <TableCell>{appointment.reason}</TableCell>
//                   <TableCell>
//                     <div className="flex gap-2">
//                       <Button variant="outline" onClick={() => editAppointment(appointment)} className="text-blue-600">
//                         <Edit className="w-4 h-4" />
//                       </Button>
//                       <Button variant="destructive" onClick={() => deleteAppointment(appointment.id)} className="text-red-600">
//                         <Trash className="w-4 h-4" />
//                       </Button>
//                     </div>
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


