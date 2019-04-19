const DELIM = /[ \f\n\r\t]+/g;
const NAMES = Symbol('NAMES');

export default class ClassNames {
  constructor(init) {
    this[NAMES] = new Set();
    this.add(init);
  }

  add(names) {
    for (const className of classNames(names)) {
      this[NAMES].add(className);
    }

    return this;
  }

  delete(names) {
    for (const className of classNames(names)) {
      this[NAMES].delete(className);
    }
  }

  toString() {
    return Array.from(this[NAMES]).join(' ');
  }

  [Symbol.iterator]() {
    return this[NAMES][Symbol.iterator]();
  }

  static extend(Component, classNames) {
    const Extended = ({ className, ...props }) => {
      className = new ClassNames([classNames, className]);
      return <Component className={String(className)} {...props} />;
    };

    Extended.displayName = `${classNames}WithClassNames`;
    Object.assign(Extended, Component);

    return Extended;
  }
}

////////////////////////////////////////////////////////////////////////////////

function* classNames(source) {
  if (typeof source === 'string') {
    yield* source.split(DELIM);
  } else if (source instanceof ClassNames) {
    yield* source[NAMES];
  } else if (Array.isArray(source)) {
    for (const member of source) {
      yield* classNames(member);
    }
  } else if (Object(source) === source) {
    yield* Object
      .entries(source)
      .filter(entry => entry[1])
      .map(entry => entry[0]);
  }
}
