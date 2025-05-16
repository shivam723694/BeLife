export default function NABLBadge() {
  return (
    <div className="bg-sky-400 text-white py-2 px-4 flex items-center justify-center w-full">
      <img 
        src="https://www.eurekaserv.com/wp-content/uploads/2021/01/NABL-India-Vector-Logo.png" 
        alt="NABL Logo"
        className="w-10 h-10 mr-2 object-contain"
      />
      <span className="font-medium">NABL Accredited Lab</span>
    </div>
  );
}