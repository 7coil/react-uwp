import * as React from "react";
import * as PropTypes from "prop-types";

export interface DataProps {}

export interface MockProps extends DataProps, React.HTMLAttributes<HTMLDivElement> {}

export interface MockState {}

export class Mock extends React.Component<MockProps, MockState> {
  static defaultProps: MockProps = {};

  state: MockState = {};

  static contextTypes = { theme: PropTypes.object };
  context: { theme: ReactUWP.ThemeType };

  render() {
    const { ...attributes } = this.props;
    const { theme } = this.context;
    const inlineStyles = getStyles(this);
    const styles = theme.prepareStyles({
      styles: inlineStyles,
      className: "Mock"
    });

    return (
      <div
        {...attributes}
        className={styles.root.className}
      >
        Mock
      </div>
    );
  }
}

function getStyles(Mock: Mock) {
  const {
    context: { theme },
    props: { style }
  } = Mock;
  const { prefixStyle } = theme;

  return {
    root: prefixStyle({
      fontSize: 14,
      color: theme.baseMediumHigh,
      background: theme.altMediumHigh,
      ...style
    })
  };
}

export default Mock;
