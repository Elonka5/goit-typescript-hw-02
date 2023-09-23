/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Pages {
  title: string;
}

class Component<T extends Pages> {
  constructor(public props: T) {}
}

class Page extends Component<Pages> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
