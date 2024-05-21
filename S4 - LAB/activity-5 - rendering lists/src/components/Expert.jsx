export default function Expert({ expert }) {
  return (
    <div className="card">
      <h2>{expert.name}</h2>
      <p>{expert.description}</p>
      <a href={"mailto:" + expert.mail}>Send {expert.name} an email</a>
    </div>
  );
}
