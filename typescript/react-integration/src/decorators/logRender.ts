type Component = {
  new (...args: any[]): {
    render(): any;
  };
};

export default function logRender<C extends Component>(component: C) {
  return class extends component {
    render() {
      console.log("Render component...");
      const r: any = super.render();
      console.log("Rendered!");
      return r;
    }
  };
}
