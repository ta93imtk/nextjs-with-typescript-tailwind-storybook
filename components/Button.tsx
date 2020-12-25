import React from "react";

export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({ primary = false, size = "medium", backgroundColor, label, ...props }) => {
    const baseButton = "rounded-full font-bold";
    const sizeMode = size === "small" ? "py-1.5 px-4 text-xs" : size === "medium" ? "py-2 px-5 text-sm" : size === "large" ? "py-3 px-6 text-base" : "";
    return primary ? (
        <div>
            <button type="button" className={`text-white bg-blue-450 ${baseButton} ${sizeMode}`} {...props}>
                {label}
            </button>
        </div>
    ) : (
        <button type="button" className={`text-gray-600 bg-transparent shadow-inner ${baseButton} ${sizeMode}`} style={{ backgroundColor }} {...props}>
            {label}
        </button>
    );
};
