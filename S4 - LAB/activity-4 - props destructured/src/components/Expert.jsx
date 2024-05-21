/* TODO : this compoent shall receive an expert as parameter (you must use the destructuring syntax)*/
export default function Expert({name, description,mail }) {
  return (
    <div className="card">
      <h2> {name}</h2>
      <p>{description}</p>
      <a href={mail}>Email {name}</a>
    </div>
  );
}
