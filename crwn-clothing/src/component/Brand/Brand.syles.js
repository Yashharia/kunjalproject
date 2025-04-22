
import styled from 'styled-components';

export const BrandListContainer = styled.div`
  background-color: #000;
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  justify-items: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const BrandItem = styled.div`
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
  }
`;

export const BrandImage = styled.img`
  background: #fff;
  padding: 16px;
  border-radius: 16px;
  border: 2px solid #d4af37;
  width: 220px;
  height: auto;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
`;

export const BrandName = styled.div`
  color: #d4af37;
  font-weight: 500;
  margin-top: 10px;
`;
