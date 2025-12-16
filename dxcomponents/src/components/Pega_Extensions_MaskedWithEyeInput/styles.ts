// individual style, comment out above, and uncomment here and add styles
import styled, { css } from 'styled-components';

export default styled.div(() => {
  return css`
    margin: 0px 0;

    .masked-input-container {
      position: relative;
      display: inline-block;
      width: 100%;
    }

    .eye-toggle-button {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
      transition: background-color 0.2s ease, opacity 0.2s ease;

      &:hover:not(:disabled) {
        background-color: rgba(0, 0, 0, 0.1);
      }

      &:focus {
        outline: 2px solid #007bff;
        outline-offset: 2px;
        background-color: rgba(0, 0, 0, 0.05);
      }

      &:focus-visible {
        outline: 2px solid #007bff;
        outline-offset: 2px;
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      &:active:not(:disabled) {
        background-color: rgba(0, 0, 0, 0.15);
        transform: translateY(-50%) scale(0.95);
      }
    }

    .eye-icon {
      font-size: 16px;
      line-height: 1;
      user-select: none;
      pointer-events: none;
    }

    /* Adjust input padding to make room for the eye icon */
    .masked-input-container input[type="text"],
    .masked-input-container input[type="password"] {
      padding-right: 40px !important;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .eye-toggle-button {
        right: 6px;
        padding: 6px;
      }

      .eye-icon {
        font-size: 14px;
      }
    }
  `;
});
