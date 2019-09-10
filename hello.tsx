import JSX from "./JSX";

function Record() {
}

function Field(params: { id: number, value: string }) {
}

function Hello(name: string) {

  return (
    <Record>
      <hello to={name}/>
      <Field id={111} value={name}/>
    </Record>
  );
}

function log(html: string) {
  console.log(html);
}

log(Hello("World"));
