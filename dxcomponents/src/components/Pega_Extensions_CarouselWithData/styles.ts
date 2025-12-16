import styled, { css } from 'styled-components';

export default styled.div(() => {
  return css`
    .carousel-container {
      position: relative;
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      background: #fff;
      border: 2px solid #007bff; /* Blue border to distinguish clone */
    }

    .carousel-wrapper {
      position: relative;
      width: 100%;
      height: 400px;
      overflow: hidden;
    }

    .carousel-track {
      display: flex;
      width: 100%;
      height: 100%;
      transition: transform 0.5s ease-in-out;
    }

    .carousel-slide {
      min-width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .carousel-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .carousel-control {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0, 123, 255, 0.7); /* Blue theme for clone */
      color: white;
      border: none;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      font-size: 24px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      z-index: 2;
      
      &:hover {
        background: rgba(0, 123, 255, 0.9);
        transform: translateY(-50%) scale(1.1);
      }

      &:focus {
        outline: 3px solid #28a745; /* Green focus for clone */
        outline-offset: 2px;
        background: rgba(0, 123, 255, 0.9);
        transform: translateY(-50%) scale(1.1);
      }

      &:focus-visible {
        outline: 3px solid #28a745;
        outline-offset: 2px;
      }

      &.prev {
        left: 15px;
      }

      &.next {
        right: 15px;
      }
    }

    .carousel-indicators {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 8px;
      z-index: 2;
    }

    .indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: none;
      background: rgba(0, 123, 255, 0.5); /* Blue indicators for clone */
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(0, 123, 255, 0.8);
        transform: scale(1.2);
      }

      &.active {
        background: #007bff;
        transform: scale(1.3);
      }

      &:focus {
        outline: 2px solid #28a745; /* Green focus for clone */
        outline-offset: 2px;
        background: rgba(0, 123, 255, 0.8);
        transform: scale(1.2);
      }

      &:focus-visible {
        outline: 2px solid #28a745;
        outline-offset: 2px;
      }
    }

    /* Focus styles for the main carousel container */
    &:focus {
      outline: 2px solid #28a745; /* Green focus for clone */
      outline-offset: 2px;
    }

    &:focus-visible {
      outline: 2px solid #28a745;
      outline-offset: 2px;
    }

    /* Clone identifier header */
    &::before {
      content: "CAROUSEL CLONE";
      position: absolute;
      top: 10px;
      left: 10px;
      background: rgba(0, 123, 255, 0.9);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: bold;
      z-index: 3;
    }

    /* Responsive design */
    @media (max-width: 768px) {
      .carousel-container {
        max-width: 100%;
      }

      .carousel-wrapper {
        height: 250px;
      }

      .carousel-control {
        width: 40px;
        height: 40px;
        font-size: 20px;
      }

      .carousel-control.prev {
        left: 10px;
      }

      .carousel-control.next {
        right: 10px;
      }

      .indicator {
        width: 10px;
        height: 10px;
      }
    }

    @media (max-width: 480px) {
      .carousel-wrapper {
        height: 200px;
      }

      .carousel-control {
        width: 35px;
        height: 35px;
        font-size: 18px;
      }

      .carousel-indicators {
        bottom: 15px;
      }
    }
  `;
});
