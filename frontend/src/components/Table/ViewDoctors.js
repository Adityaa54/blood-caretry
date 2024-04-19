import { useData } from "../../../context/DataContext";
const ViewDoctors = ({ doctors}) => {
  console.log(doctors);
  const { arrData, updateArrData, currUser } = useData();
  const color = "dark";
  const handleAppoint =()=>{
    console.log(currUser);
  }
  const tableData = doctors.map((doctor, index) => {
    return (
      <tr key={index}>
        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
          <span className="ml-3 font-bold text-white">
            {doctor.name}
          </span>
        </th>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          {doctor.email}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          {doctor.degree}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <div className="flex">
            {doctor.specialization}
          </div>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <span className="ml-3 font-bold text-white">
            4 years
          </span>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <span className="ml-3 font-bold text-white">
          <button type="button" onClick={handleAppoint} class="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Click here</button>
          </span>
        </td>
      </tr>
    );
  });
  return (
    <>
      <section className="relative py-16 bg-blueGray-50" id="scroll-div">
  <div className="w-full mb-12 px-4">
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blue-900 text-white">
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-lg text-white">Blood Banks</h3>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-700 text-white">
                Name
              </th>
              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-700 text-white">
                Email
              </th>
              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-700 text-white">
                Education
              </th>
              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-700 text-white">
                Specialization
              </th>
              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-700 text-white">
                Experience
              </th>
              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-700 text-white">
                Get an appointment
              </th>
              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-700 text-white" />
            </tr>
          </thead>
          <tbody>
            {tableData}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default ViewDoctors;
