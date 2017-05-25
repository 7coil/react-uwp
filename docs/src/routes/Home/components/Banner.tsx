import * as React from "react";
import * as PropTypes from "prop-types";

import ThemeType from "react-uwp/styles/ThemeType";
import ReactIcon from "components/ReactIcon";

export interface DataProps {
  renderContentWidth?: number | string;
}

export interface BannerProps extends DataProps, React.HTMLAttributes<HTMLDivElement> {}

export default class Banner extends React.Component<BannerProps, void> {
  static defaultProps: BannerProps = {};

  static contextTypes = { theme: PropTypes.object };
  context: { theme: ThemeType };

  render() {
    const {
      renderContentWidth,
      ...attributes
    } = this.props;
    const { theme } = this.context;
    const styles = getStyles(this);

    return (
      <div
        {...attributes}
        style={styles.root}
      >
        <div style={styles.content}>
          <ReactIcon width={80} fill="#fff" />
          <p style={{ marginTop: 12 }}>
            Built with React <br />
            React-UWP’s robust, up-to-date components are built with React
          </p>
        </div>
      </div>
    );
  }
}

function getStyles(banner: Banner): {
  root?: React.CSSProperties;
  content?: React.CSSProperties;
} {
  const {
    context: { theme },
    props: { style, renderContentWidth }
  } = banner;
  const { prepareStyles } = theme;

  return {
    root: prepareStyles({
      color: "#fff",
      background: theme.listAccentHigh,
      ...style
    }),
    content: {
      width: renderContentWidth,
      fontWeight: "lighter",
      fontSize: 13,
      textAlign: "center",
      lineHeight: 1.2,
      padding: "40px 0",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  };
}
