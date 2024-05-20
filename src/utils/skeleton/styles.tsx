import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% { background-color: #f9f9f9; }
  50% { background-color: #eeeeee; }
  100% { background-color: #f9f9f9; }
`;

export const SkeletonWrapper = styled.div`
  padding: 20px;
`;

export const SkeletonHeader = styled.div`
  height: 40px;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 10px;
  animation: ${pulse} 1.5s infinite ease-in-out;
`;

export const SkeletonText = styled.div`
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin: 5px 0;
  width: "100%";
  animation: ${pulse} 1.5s infinite ease-in-out;
`;

export const SkeletonBody = styled.div`
  height: 400px;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin: 5px 0;
  width: "100%";
  animation: ${pulse} 1.5s infinite ease-in-out;
`;
