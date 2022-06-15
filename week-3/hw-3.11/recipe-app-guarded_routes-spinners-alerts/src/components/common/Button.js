import React from "react";
import Spinner from "./Spinner";

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "",
  loading = false,
  disabled = false,
}) {
  return (
    <button
      className={"btn btn-" + variant + ' ' + className}
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      style={{
        position: "relative",
      }}
    >
      {children}

      {
        loading ? 
        <div
          style={{
            position: "absolute",
            right: '2px',
            top: '2px'
          }}
        >
          <Spinner />
        </div>
        : <></>
      }
    </button>
  );
}
