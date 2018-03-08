import * as React from "react";
import { withStyles } from "material-ui";

const decorate = withStyles(theme => ({
  "@keyframes skeleton-animation": {
    "0%": {
      opacity: 0.6
    },
    "100%": {
      opacity: 1
    }
  },
  skeleton: {
    animation: "skeleton-animation .75s linear infinite forwards alternate",
    background: "#eee",
    borderRadius: 4,
    display: "block",
    height: "0.8em",
    margin: "0.2em 0"
  }
}));

interface SkeletonProps {
  style?: React.CSSProperties;
}

export const Skeleton = decorate<SkeletonProps>(({ classes, style }) => (
  <span className={classes.skeleton} style={style}>
    &zwnj;
  </span>
));