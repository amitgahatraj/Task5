function Profile({ name, age, bio }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        border: "1px solid #000",
        borderRadius: "5px",
      }}
    >
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Bio:{bio}</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut quasi nam
        voluptatibus, laborum odit rerum ipsa veritatis iste? Repellendus, dolor
        voluptate quaerat cupiditate maiores fuga quam corporis ut distinctio
        beatae.
      </p>
    </div>
  );
}

export default Profile;
