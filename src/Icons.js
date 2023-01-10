function Icon() {
  return (
    <svg width="200" height="150" fill="rgb(253, 231, 231)">
      <rect
        x="10"
        y="15"
        width="170"
        height="120"
        rx="30"
        stroke="black"
        strokeWidth="3px"
      />

      <text
        x="58"
        y="85"
        fontSize="30px"
        stroke="rgb(66, 66, 66)"
        strokeWidth="1.5px"
        // paint-order="stroke"
        // strokeLinecap="butt"
        // strokeLinejoin="miter"
        fontWeight="800">
        Blogs
      </text>
    </svg>
  );
}

export { Icon };
