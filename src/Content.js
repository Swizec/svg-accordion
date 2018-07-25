import React from "react";
import faker from "faker";
import Spinner from "react-spinkit";

// Content that dynamically updates itself
class DynamicContent extends React.Component {
  state = {
    paragraphs: this.props.children,
    spinner: true
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        paragraphs: [...this.state.paragraphs, faker.lorem.paragraph()],
        spinner: false
      });
      this.props.contentUpdated();
    }, 1200);
  }

  render() {
    const { title } = this.props,
      { paragraphs, spinner } = this.state;

    return (
      <React.Fragment>
        <h3>{title}</h3>
        {paragraphs.map(c => <p>{c}</p>)}
        <p>
          {spinner && (
            <Spinner
              name="cube-grid"
              color="green"
              fadeIn="none"
              style={{ margin: "0 auto" }}
            />
          )}
        </p>
      </React.Fragment>
    );
  }
}

// Static Content with some pagraphs
const Content = ({ title, children }) => (
  <React.Fragment>
    <h3>{title}</h3>
    {children.map(c => <p>{c}</p>)}
  </React.Fragment>
);

export { Content, DynamicContent };
