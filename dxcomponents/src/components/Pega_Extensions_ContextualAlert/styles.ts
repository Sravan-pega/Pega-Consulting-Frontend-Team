import styled, { css } from 'styled-components';

export default styled.div(() => {
  return css`
    margin: 8px 0;

    .contextual-alert {
      padding: 16px;
      position: relative;
      transition: all 0.3s ease;
    }

    .alert-header {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 8px;
    }

    .alert-icon {
      flex-shrink: 0;
      font-size: 18px;
      line-height: 1.2;
      margin-top: 2px;
    }

    .alert-title {
      flex: 1;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.4;
      margin: 0;

      strong {
        font-weight: 600;
      }
    }



    .alert-body {
      margin-left: 30px;
    }

    .alert-message {
      font-size: 14px;
      line-height: 1.5;
      margin: 0;

      &.html-content {
        p {
          margin: 0 0 8px 0;
          
          &:last-child {
            margin-bottom: 0;
          }
        }

        strong, b {
          font-weight: 600;
        }

        em, i {
          font-style: italic;
        }

        a {
          color: inherit;
          text-decoration: underline;
          
          &:hover {
            text-decoration: none;
          }
        }

        ul, ol {
          margin: 0 0 8px 0;
          padding-left: 20px;
        }
      }

      &.text-content {
        white-space: pre-wrap;
      }
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .contextual-alert {
        padding: 12px;
      }

      .alert-header {
        gap: 10px;
      }

      .alert-body {
        margin-left: 28px;
      }

      .alert-title {
        font-size: 15px;
      }

      .alert-message {
        font-size: 13px;
      }
    }
  `;
});
