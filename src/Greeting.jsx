function Greeting1() {
  const title = "asd";
  const content = "acs";
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export function Greeting(props)  {

  console.log(props)
  return (
    <div>
      <h1>SOY UN COMPONENTE {props}</h1>
    </div>
  );
}


export function UserCard() {
  const user = {
    firstName: "Ryan",
    lastName: "Ray",
  };
  return (
    <div>
      <h1>{user.firstName}</h1>
      <h2>{user.lastName}</h2>
    </div>
  );
}
