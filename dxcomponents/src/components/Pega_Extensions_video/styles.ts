import styled, { css } from 'styled-components';

export default styled.div(() => {
  return css`
    margin: 0px 0;

    .video-player {
      max-width: 100%;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      
      &:focus {
        outline: 2px solid #0076d6;
        outline-offset: 2px;
      }
    }

    .no-video-message,
    .loading-message,
    .error-message {
      padding: 16px;
      text-align: center;
      border: 1px dashed #ccc;
      border-radius: 4px;
      background-color: #f9f9f9;
    }

    .no-video-message {
      color: #666;
    }

    .loading-message {
      color: #0076d6;
      background-color: #f0f8ff;
      border-color: #0076d6;
    }

    .error-message {
      color: #d32f2f;
      background-color: #ffebee;
      border-color: #d32f2f;
    }
  `;
});
