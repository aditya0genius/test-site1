import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 120px 30px 0px 30px;
  background: black;
  position: absolute;
  bottom: 15;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 120px 30px 0px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
  justify-contents: around
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
  justify-content: around;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: #C4AC66;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const End = styled.p`
  text-align: center;
  font-size: 14px;
  color: #fff;
  margin-bottom: 10px;
  font-weight: bold;
`;