import React from "react"

export function Button({
  children,
  size = "md",
  variant = "solid",
  asChild = false,
  className = "",
  ...props
}) {
  const sizeMap = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  }
  const variantMap = {
    solid: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-50",
  }

  const classes = `inline-flex items-center justify-center rounded-md font-semibold ${sizeMap[size]} ${variantMap[variant]} ${className}`

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${classes} ${children.props.className || ""}`.trim(),
      ...props,
    })
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
