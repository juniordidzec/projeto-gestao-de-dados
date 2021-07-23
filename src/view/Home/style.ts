import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0;
  background: #2a2a2e;
  .nav{
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    justify-content: space-between;
    background: #2a2a2e;
    .cart{
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      }
  }

  section {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    max-width: 1250px;
    justify-content: space-around;
    margin-left: auto;
    margin-right: auto;
    .product-content{
      display: grid;
      text-align: center;
      height: 300px;
      background: #fff;
      border-radius: 12px;
      border: 4px solid #00d8ff;
      padding: 12px;
      margin: 10px 5px;
    }
  }
`