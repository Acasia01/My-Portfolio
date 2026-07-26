export const Github = (props) => (
  <img
    src="https://img.icons8.com/color/48/github--v1.png"
    alt="GitHub"
    width={props.size || "20"}
    height={props.size || "20"}
    style={{ display: 'inline-block', verticalAlign: 'middle', filter: 'brightness(1.1)', ...props.style }}
    {...props}
  />
);

export const Linkedin = (props) => (
  <img
    src="https://img.icons8.com/color/48/linkedin.png"
    alt="LinkedIn"
    width={props.size || "20"}
    height={props.size || "20"}
    style={{ display: 'inline-block', verticalAlign: 'middle', ...props.style }}
    {...props}
  />
);