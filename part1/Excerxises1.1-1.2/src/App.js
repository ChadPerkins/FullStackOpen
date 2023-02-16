const App = () => {
    const course = "Half Stack application development";
    const part1 = "Fundamentals of React";
    const exercises1 = 10;
    const part2 = "Using props to pass data";
    const exercises2 = 7;
    const part3 = "State of a component";
    const exercises3 = 14;

    return (
        <div>
            <Header message={course} />
            <Content
                title={{title1: part1, title2: part2, title3: part3}}
                exercises={{ex1: exercises1, ex2: exercises2, ex3: exercises3}}    
            />
            <Part title={"Number of exercises"} exercises={exercises1 + exercises2 + exercises3}/>  
        </div>
    );
};

export default App;

const Header = ({ message }) => {
    return <h1>{message}</h1>;
};

const Content = ({title, exercises}) => {

    return (
        <div>
            <Part title={title.title1} exercises={exercises.ex1}/>
            <Part title={title.title2} exercises={exercises.ex2}/>
            <Part title={title.title3} exercises={exercises.ex3}/>
        </div>
    )
};

const Part = ({title, exercises}) => {

    return (
        <p>{title} {exercises}</p>
    )
}
