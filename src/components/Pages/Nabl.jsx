export default function NABLBadge() {
    return (
      <div className="bg-sky-400 text-white py-2 px-4 flex items-center justify-center w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="font-medium">NABL Accredited Lab</span>
      </div>
    );
  }
  