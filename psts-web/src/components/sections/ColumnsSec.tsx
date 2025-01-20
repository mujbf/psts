import React from "react";

interface ColumnsSecProps {
  title: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  buttonVariant?: "primary" | "secondary";
  align?: "left" | "center";
  children: React.ReactNode;
}

const ColumnsSec: React.FC<ColumnsSecProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  buttonVariant = "primary",
  align = "center",
  children,
}) => {
  return (
    <section
      className={`
      bg-white 
      px-4 py-8 
      md:px-8 
      lg:p-20 
      2xl:px-40 2xl:py-20 
      flex flex-col 
      gap-6 
      md:gap-8 
      lg:gap-16
      ${align === "center" ? "items-center" : "items-start"}
    `}
    >
      {/* Title Section */}
      <div className={`w-full text-${align}`}>
        <h2 className="text-2xl font-semibold text-neutral-700 mb-2">
          {title}
        </h2>
        {subtitle && (
          <h3 className="text-xl text-neutral-600 mb-2">{subtitle}</h3>
        )}
        {description && <p className="text-neutral-600">{description}</p>}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 lg:gap-8 w-full">
        {children}
      </div>

      {/* Button */}
      {buttonText && buttonLink && (
        <a href={buttonLink} className="w-full text-center">
          <button
            className={`
              px-6 py-2 
              rounded-md 
              transition-all 
              ${
                buttonVariant === "primary"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "border border-blue-600 text-blue-600 hover:bg-blue-50"
              }
            `}
          >
            {buttonText}
          </button>
        </a>
      )}
    </section>
  );
};

export default ColumnsSec;
