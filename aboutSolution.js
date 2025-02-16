```javascript
// pages/about.js

export async function getServerSideProps(context) {
  const myVar = process.env.MY_VAR;
  return {
    props: {
      myVar: myVar,
    },
  };
}
export default function About({ myVar }) {
  console.log(myVar); // Access the variable here
  return (
    <div>
      <h1>About Page</h1>
      <p>My variable: {myVar}</p>
    </div>
  );
}
```