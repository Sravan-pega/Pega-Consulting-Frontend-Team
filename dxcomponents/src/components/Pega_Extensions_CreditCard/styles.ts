import styled, { css } from 'styled-components';

export default styled.div(() => {
  return css`
    .credit-card-container {
      width: 100%;
      max-width: 400px;
    }

    .input-wrapper {
      position: relative;
      display: block;
      width: 100%;
    }

    .credit-card-input {
      width: 100%;
      position: relative;
      padding: 8px 60px 8px 8px;
      /* Ensure input has padding for logo */
      input, 
      & input,
      & > div > input,
      & div input {
        padding-right: 80px !important;
        font-family: 'Courier New', monospace !important;
        letter-spacing: 1px !important;
        font-size: 16px !important;
        box-sizing: border-box;
      }

      /* Additional padding rules for various Input structures */
      /* Target all possible input selectors */
      [type="text"],
      [role="textbox"],
      textarea,
      & [type="text"],
      & [role="textbox"],
      & textarea {
        padding-right: 80px !important;
      }
      
      /* Ensure padding is applied to Pega Input wrapper */
      & > div {
        input, 
        [type="text"],
        [role="textbox"] {
          padding-right: 80px !important;
        }
      }

      &.valid {
        input, 
        & input,
        & > div > input,
        & div input {
          border-color: #4caf50 !important;
          box-shadow: 0 0 0 1px #4caf50 !important;
        }
      }

      &.invalid {
        input, 
        & input,
        & > div > input,
        & div input {
          border-color: #f44336 !important;
          box-shadow: 0 0 0 1px #f44336 !important;
        }
      }
    }

    .card-logo {
      position: absolute;
      right: 12px;
      top: 70%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      z-index: 100;
      width: 40px;
      height: 24px;
      
      svg {
        display: block;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        width: 40px;
        height: 24px;
      }
    }

    .card-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 8px;
      font-size: 14px;
    }

    .card-type {
      color: #666;
      font-weight: 500;
    }

    .validation-status {
      font-weight: 600;
      
      &.valid {
        color: #4caf50;
      }
      
      &.invalid {
        color: #f44336;
      }
    }

    /* Responsive design */
    @media (max-width: 480px) {
      .credit-card-container {
        max-width: 100%;
      }
      
      .credit-card-input input {
        font-size: 14px;
        padding: 10px 70px 10px 12px !important;
      }
      
      .card-logo {
        right: 8px;
      }
    }
  `;
});
