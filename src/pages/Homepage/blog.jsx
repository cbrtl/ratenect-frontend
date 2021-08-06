import React from 'react';
import styled from 'styled-components';

export const Title = styled.h1`
  display: 'flex';
  justifycontent: 'center';
  alignitems: 'center';
  height: '90vh';
`;

export default function Blog() {
  return <Title>Blog Page</Title>;
}
