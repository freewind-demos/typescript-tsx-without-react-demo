declare global {
  namespace JSX {
    type Element = string;
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export const JSX = {
  createElement(name: any, props: { [id: string]: string }, ...content: string[]) {
    console.log('> createElement', {name, props, content})

    if (typeof name === 'function') {
      name = name.name;
    }

    const propsstr = Object.keys(props || {})
      .map(key => {
        const value = props[key];
        if (key === "className") return `class=${value}`;
        else return `${key}=${value}`;
      })
      .join(" ");
    return `<${name} ${propsstr}> ${content.join("")}</${name}>`;
  }
};

export default JSX;
