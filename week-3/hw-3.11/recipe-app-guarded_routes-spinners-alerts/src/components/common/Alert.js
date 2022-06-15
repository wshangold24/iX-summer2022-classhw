import React from "react";

export default function Alert({
  variant = "danger",
  className = "",
  children,
  show,
  onClose
}) {
  return (
    <>
      {show ? (
        <div
          className={"alert alert-" + variant + " " + className}
          role="alert"
        >
            <div className="d-flex justify-content-between">
            <div>
            {children}
            </div>
            <div onClick={onClose} style={{cursor: 'pointer'}}>
                X
            </div>
            </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
