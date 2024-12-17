import React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {}

export const SearchIcon: React.FC<Props> = (props) => {
  return (
    <svg
      width="23"
      height="22"
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.3354 20.5171L16.739 15.9124M19.2862 9.75858C19.2862 12.0684 18.3686 14.2837 16.7353 15.917C15.102 17.5503 12.8868 18.4678 10.5769 18.4678C8.2671 18.4678 6.05186 17.5503 4.41856 15.917C2.78526 14.2837 1.86768 12.0684 1.86768 9.75858C1.86768 7.44874 2.78526 5.23351 4.41856 3.6002C6.05186 1.9669 8.2671 1.04932 10.5769 1.04932C12.8868 1.04932 15.102 1.9669 16.7353 3.6002C18.3686 5.23351 19.2862 7.44874 19.2862 9.75858V9.75858Z"
        stroke="#DAC062"
        stroke-width="2.04924"
        stroke-linecap="round"
      />
    </svg>
  );
};
