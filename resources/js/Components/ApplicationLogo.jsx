export default function ApplicationLogo(props) {
    return (
        <svg {...props} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 10C50.294 10 10 50.294 10 100C10 149.706 50.294 190 100 190" stroke="#a3e635" strokeWidth="6" strokeLinecap="round" />
            <path d="M130 20C155 35 175 60 185 90" stroke="#a3e635" strokeWidth="8" strokeLinecap="round" />
            <path d="M110 30C140 40 160 65 170 95" stroke="#a3e635" strokeWidth="12" strokeLinecap="round" />
            <path d="M40 160C60 180 90 195 120 190" stroke="#a3e635" strokeWidth="10" strokeLinecap="round" />
            <path d="M60 175C80 190 110 195 140 185" stroke="#a3e635" strokeWidth="14" strokeLinecap="round" />
            
            <circle cx="185" cy="90" r="6" fill="#a3e635" />
            <circle cx="170" cy="95" r="8" fill="#a3e635" />
            <circle cx="40" cy="160" r="7" fill="#a3e635" />
            <circle cx="60" cy="175" r="9" fill="#a3e635" />

            <text x="100" y="125" fontFamily="'Inter', 'Outfit', sans-serif" fontSize="68" fontWeight="800" fill="#a3e635" textAnchor="middle" letterSpacing="-3">
                Qtec
            </text>
        </svg>
    );
}
