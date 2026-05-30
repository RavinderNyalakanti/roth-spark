export default function Logo() {
  return (
    <div className="inline-flex items-center justify-center">
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
      >
        {/* Background circle */}
        <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="0.5" className="text-brand-indigo opacity-20" />
        
        {/* Main geometric shape - Modern spark */}
        <g className="text-brand-indigo">
          {/* Central diamond/spark */}
          <path d="M 16 4 L 24 16 L 16 28 L 8 16 Z" fill="currentColor" opacity="0.85" />
          
          {/* Inner accent circle */}
          <circle cx="16" cy="16" r="3.5" fill="white" />
          
          {/* Small accent elements */}
          <circle cx="18" cy="14" r="1" fill="currentColor" opacity="0.5" />
          <circle cx="14" cy="18" r="1" fill="currentColor" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}
