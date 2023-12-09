const Header = ({ course }) => <h2 key={course.id}>{course.name}</h2>;

const Content = ({ courses }) => {
  return (
    <>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Header course={course} />
            {course.parts.map((part) => (
              <Part key={part.id} part={part} />
            ))}
            <Total course={course} />
          </div>
        );
      })}
    </>
  );
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Total = ({ course }) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <p>
      <strong>total of {total} exercises</strong>
    </p>
  );
};

const Course = ({ courses }) => {
  return <Content courses={courses} />;
};

export default Course;
