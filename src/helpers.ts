// export const debounce = (a,b,c) => {
//     let d,e;

//     return function () {
//       const h = () => {
//         d=null;
//         c||(e=a.apply(f,g));
//       }

//       const f = this;
//       const g = arguments;

//       return (clearTimeout(d), d = setTimeout(h,b), c && !d && (e=a.apply(f,g)),e);
//     }
// }

export function debounce<T extends unknown[], U>(callback: (...args: T) => PromiseLike<U> | U, wait: number) : (...args: T) => Promise<U> {
    let timer: number;
  
    return (...args: T): Promise<U> => {
      clearTimeout(timer);
      return new Promise((resolve) => {
        timer = window.setTimeout(() => resolve(callback(...args)), wait);
      });
    };
}
  
export function removeHTMLTags (str: string): string {
    return str.replace(/<[^>]*>?/gm, '');
}
