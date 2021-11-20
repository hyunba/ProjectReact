import styled from "styled-components";

interface CircleProps {
    bgColor: string;
}

const Container = styled.div<CircleProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
`;

// 기존과 다르게 typescript는 proptypes과 비슷한 기능이 있어서 임의로 prop을 만들면
// 그것이 무엇인지 정해주어야한다. ex) const x= (a:number, b:number) => a+b
function Circle({bgColor}: CircleProps) {
    return <Container bgColor={bgColor} />;
}

export default Circle;

// interface PlayerShape{
//     name: string;
//     age: number;
// }

// const sayHello = (playerObj:PlayerShape) => 
//     `Hello ${playerObj.name} you are ${playerObj.age} years old.`;

// sayHello({name:"Jenny", age:10})