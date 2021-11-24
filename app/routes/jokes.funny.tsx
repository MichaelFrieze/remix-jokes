export default function JokesRoute() {
  return (
    <div>
      <h1>J🤪KES</h1>
      <main>
        <p>
          This is at the /jokes/funny route but it is not a child of /jokes/.
          This is it's own route but still a child of root.
        </p>
        <p>
          This kind of route is created with jokes.funny.tsx rather than nesting
          routes in a jokes directory.
        </p>
      </main>
    </div>
  );
}
