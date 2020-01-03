namespace Geometry {
  export namespace Area {
    const PI = 3.14;

    export function circle(radiu: number): number {
      return PI * Math.pow(radiu, 2);
    }
  }
}
