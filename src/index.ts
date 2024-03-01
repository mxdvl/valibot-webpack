import { parse, object, string, number } from 'valibot';

const schema = object({
  name: string(),
  age: number(),
});

function component(): HTMLDivElement {
  const element = document.createElement('div');

  const { name, age } = parse(schema, {
    name: 'Valibot',
    age: 1,
  });

  element.innerHTML = `Hi, I’m ${name} and ${age} years old!`;

  return element;
}

document.body.appendChild(component());
