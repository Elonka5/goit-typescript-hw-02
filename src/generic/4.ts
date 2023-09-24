/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Pages {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<Pages> {
  pageInfo(): void {
    console.log(this.props.title);
  }
}

export {};
