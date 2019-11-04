import ReactDOM from 'react-dom';

export const testRender = (item) => {
  const div = document.createElement('div');
  ReactDOM.render(item, div);
  ReactDOM.unmountComponentAtNode(div);
};
