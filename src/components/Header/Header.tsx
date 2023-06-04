import { classNames } from "../../utils";

const navigation = [
  { name: 'Genshin', current: true },
]

export const Header = () => {


  return (
    <nav className="px-6 py-2 ">
      {navigation.map((item) => (
        <a
          key={item.name}
          className={classNames(
            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'rounded-md px-3 py-2 text-sm font-medium'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};