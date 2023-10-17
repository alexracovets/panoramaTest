
import React from 'react';
import PropTypes from 'prop-types';

Circle.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default function Circle({ colors }) {
    // Розміри кола
    const scale = 5;
    const maxHeight = 229 * scale;
    const maxWidth = 86 * scale;
    const strokeWidth = 10;

    // Відмальвуємо частини кола або коло, якщо кольорів більше ніж 1
    const renderCircle = () => {
        if (colors.length === 1) {
            const color = colors[0];
            return <circle cx={scale * 43} cy={scale * 44} r={scale * 39} fill={color} />;
        } else {
            return colors.map((color, i) => {
                // Розрахунок параметрів для path
                const total = colors.length;
                const fraction = 1 / total;
                let largeArcFlag = 0;
                if (fraction > 0.5) {
                    largeArcFlag = 1;
                }

                const startAngle = fraction * i * 2 * Math.PI - Math.PI / 2;
                const endAngle = fraction * (i + 1) * 2 * Math.PI - Math.PI / 2;

                const startX = scale * (43 + 39 * Math.cos(startAngle));
                const startY = scale * (44 + 39 * Math.sin(startAngle));

                const endX = scale * (43 + 39 * Math.cos(endAngle));
                const endY = scale * (44 + 39 * Math.sin(endAngle));

                const pathD = `M${scale * 43},${scale * 44} L${startX},${startY} A${scale * 39},${scale * 39} 0 ${largeArcFlag},1 ${endX},${endY} Z`;

                return <path d={pathD} fill={color} stroke="#FFFFFF" strokeWidth={strokeWidth} key={i} />;
            });
        }
    };

    return (
        <svg
            width={maxWidth}
            height={maxHeight}
            viewBox={`0 0 ${maxWidth} ${maxHeight}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x={scale * 40} y={scale * 78} width={scale * 4} height={scale * 140} rx={scale * 2} fill="#090909" />
            <rect x={scale * 32} y={scale * 207} width={scale * 20} height={scale * 20} rx={scale * 10} fill="url(#paint_linear)" />
            <circle cx={scale * 43} cy={scale * 44} r={scale * 39 + strokeWidth} fill="#FFFFFF" />

            {renderCircle()}

            <linearGradient id="paint_linear" x1="42" y1="207" x2="46" y2="228.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFA24D" />
                <stop offset="1" stopColor="#DD6E07" />
            </linearGradient>
        </svg>
    );
}
