import styled, {keyframes} from 'styled-components';

const scroll = keyframes`
0% { transform: translateX(100%); }
100% { transform: translateX(-100%); }
`;

export const SaleContainer = styled.div`
  padding: 60px 30px;
  background-color: #fefefe;
`;

export const SaleTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  margin-bottom: 10px;
`;

export const SaleDescription = styled.p`
  text-align: center;
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`;

export const SaleGrid = styled.div`
  display: flex;
  flex-wrep: wrep;
  gap: 30px;
  justify-items: center;
`;

export const SaleItem = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
`;

export const SaleImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: contain;
  margin-bottom: 15px;
`;

export const SaleName = styled.h4`
  font-size: 16px;
  margin-bottom: 5px;
  color: #222;
`;

export const SalePrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #e60023;
`;

export const SaleBanner = styled.div`
  background-color: #e31b1b;
  overflow: hidden;
  width: 100%;
  padding: 10px 0;
  margin-top: 40px;

  p {
    color: white;
    white-space: nowrap;
    font-size: 16px;
    font-weight: bold;
    display: inline-block;
    animation: ${scroll} 10s linear infinite;
  }
`;
