/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const App = () => {
  return (
    <div css={styles.container}>
      <h1 css={styles.title}>Todo App 1</h1>
    </div>
  );
};

const styles = {
  container: css`
    background-color: #eee;
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    justify-content: center;
  `,
  title: css`
    margin: 1rem 0;
  `,
};

export default App;
