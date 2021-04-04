import { ReactElement } from 'react';
import { IconProps } from './interfaces';

export default function MetricsIcon({ className }: IconProps): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
      />
    </svg>
  );
}
